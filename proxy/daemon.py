import json, time, urllib.request, os, base64

TOKEN = os.environ.get("TG_TOKEN", "")
GH_TOKEN = os.environ.get("GH_TOKEN", "")
REPO = os.environ.get("REPO", "")
if not all([TOKEN, GH_TOKEN, REPO]):
    print("Missing env vars")
    exit(1)

API_BASE = f"https://api.github.com/repos/{REPO}"

def gh_get(path):
    url = f"{API_BASE}/{path}"
    req = urllib.request.Request(url, headers={
        "Authorization": f"Bearer {GH_TOKEN}",
        "Accept": "application/vnd.github.v3.raw"
    })
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            return r.read().decode()
    except:
        return None

def gh_put(path, content, msg="auto"):
    url = f"{API_BASE}/contents/{path}"
    b64 = base64.b64encode(content.encode()).decode()
    sha = None
    try:
        req = urllib.request.Request(url, headers={
            "Authorization": f"Bearer {GH_TOKEN}",
            "Accept": "application/vnd.github.v3+json"
        })
        with urllib.request.urlopen(req, timeout=10) as r:
            sha = json.loads(r.read()).get("sha")
    except:
        pass
    data = {"message": msg, "content": b64}
    if sha:
        data["sha"] = sha
    req = urllib.request.Request(url, data=json.dumps(data).encode(),
        method="PUT",
        headers={
            "Authorization": f"Bearer {GH_TOKEN}",
            "Content-Type": "application/json"
        })
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            return json.loads(r.read())
    except:
        return None

def tg(method, path, body=None):
    url = f"https://api.telegram.org/bot{TOKEN}/{path}"
    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(url, data=data, method=method,
        headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            return json.loads(r.read())
    except Exception as e:
        return {"ok": False, "error": str(e)}

# Test bot
bot = tg("GET", "getMe")
username = (bot.get("result") or {}).get("username", "?")
print(f"[Daemon] Bot @{username} started")

# Set bot commands
tg("POST", "setMyCommands", {
    "commands": [
        {"command": "start", "description": "شروع / Home"},
        {"command": "products", "description": "محصولات / Products"},
        {"command": "price", "description": "قیمت‌ها / Prices"},
    ]
})

last_update_id = 0
start_time = time.time()
run_id = str(int(start_time))

while time.time() - start_time < 21500:
    time.sleep(2)
    
    # Check for commands from server
    raw = gh_get("contents/proxy/daemon/command.json")
    if raw:
        try:
            cmd = json.loads(raw)
            if cmd.get("rid") == "waiting":
                rid = str(int(time.time()))
                action = cmd.get("a", "")
                path = cmd.get("p", "")
                body = cmd.get("b")
                print(f"[D] Cmd: {action} {path[:40]}")
                result = tg(action, path, body)
                gh_put("proxy/daemon/response.json", json.dumps(result), f"resp {rid}")
                gh_put("proxy/daemon/command.json", json.dumps({"rid": rid}), f"done {rid}")
        except:
            pass
    
    # Bot replies
    try:
        updates = tg("GET", "getUpdates", {"offset": last_update_id + 1, "timeout": 5})
        if updates and updates.get("ok"):
            for u in updates.get("result", []):
                last_update_id = u["update_id"]
                chat_id = u.get("message", {}).get("chat", {}).get("id")
                text = (u.get("message", {}).get("text", "") or "").strip().lower()
                name = u.get("message", {}).get("from", {}).get("first_name", "")
                if chat_id and text:
                    print(f"[D] {name}: {text[:50]}")
                    replies = {
                        "/start": "سلام! به فروشگاه رسمی xTool خوش آمدید!\n\nما دستگاه‌های حکاکی و برش لیزر xTool را مستقیماً از کارخانه چین به ایران ارسال می‌کنیم.\n\n✅ قیمت کارخانه\n✅ ارسال ۲۰-۳۸ روز\n✅ پرداخت USDT\n\nبرای قیمت‌ها /price را بزنید.",
                        "/products": "محصولات xTool:\n\n۱. P2 - دستگاه حکاکی CO₂ (پیشرفته)\n۲. F1 Ultra - لیزر فیبر + دیود\n۳. M1 Ultra - برش و حکاکی همه‌کاره\n۴. S1 - دستگاه حکاکی دیودی\n۵. Creative Master - مجموعه کامل\n\nبرای قیمت هر مدل /price را بزنید.",
                        "/price": "قیمت‌ها به دلار:\n\nxTool P2: $2,999\nxTool F1 Ultra: $3,999\nxTool M1 Ultra: $2,499\nxTool S1: $999\nCreative Master: $5,999\n\nارسال به ایران: ۲۰-۳۸ روز\n\nپرداخت: USDT (TRC20)\n\nبرای سفارش با ما تماس بگیرید.",
                    }
                    reply = None
                    for key, val in replies.items():
                        if key in text:
                            reply = val
                            break
                    if not reply:
                        reply = "سلام! برای دیدن محصولات /products یا قیمت‌ها /price را بزنید."
                    tg("POST", "sendMessage", {
                        "chat_id": chat_id,
                        "text": reply,
                        "parse_mode": "HTML"
                    })
    except:
        pass

print("[Daemon] Stopped")

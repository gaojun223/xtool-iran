// ─── xTool ایران | Product Data ───
// Prices in USDT, rounded to nice numbers. Factory direct pricing.
const PRODUCTS = [
  {
    id: 'd1-pro',
    name: 'xTool D1 Pro',
    tag: 'دایود اقتصادی',
    badge: 'compact',
    badgeText: 'مقرون‌به‌صرفه',
    oneliner: 'دستگاه حکاکی لیزری دایود مناسب برای شروع کار. انتخاب اول کارگاه‌های کوچک و hobbyistها',
    officialPrice: '۴۴۹',
    ourPrice: '۴۳۰',
    save: '۵٪',
    specs: {
      'نوع لیزر': 'دایود ۵W / ۱۰W / ۲۰W',
      'مساحت کار': '۴۳۰ × ۴۰۰ میلی‌متر',
      'حداکثر سرعت': '۴۰۰۰ میلی‌متر/ثانیه',
      'دقت': '۰.۰۱ میلی‌متر',
      'مواد قابل برش': 'چوب، چرم، MDF، پلاستیک، کاغذ، بامبو',
      'وزن': '۱۰ کیلوگرم'
    },
    features: [
      'قیمت‌گذاری پله‌ای: ۵W / ۱۰W / ۲۰W متناسب با بودجه',
      'سیستم تعویض ماژول لیزر (پلاگ‌اند‌پلی)',
      'قابلیت نصب الحاقات و محفظه ایمنی',
      'سازگار با نرم‌افزارهای رایگان (LightBurn, LaserGRBL)',
      'گارانتی تعویض ۱ ساله',
    ],
    audience: 'کارگاه‌های کوچک خانگی • استارتاپ‌های تازه‌کار • هنرمندان DIY • دانشجویان و آموزشگاه‌ها'
  },
  {
    id: 's1-20w',
    name: 'xTool S1 20W',
    tag: 'دایود ایمن',
    badge: 'compact',
    badgeText: 'پرفروش',
    oneliner: 'محبوب‌ترین دستگاه دایود بسته با محفظه ایمن. بدون نگرانی از دود و جرقه، مناسب محیط‌های داخلی',
    officialPrice: '۹۹۹',
    ourPrice: '۹۵۰',
    save: '۵٪',
    specs: {
      'نوع لیزر': 'دایود ۲۰W',
      'مساحت کار': '۴۳۰ × ۴۰۰ میلی‌متر',
      'حداکثر سرعت': '۴۰۰۰ میلی‌متر/ثانیه',
      'دقت': '۰.۰۱ میلی‌متر',
      'محفظه بسته': 'دارد (فیلتر دود داخلی)',
      'اتصال': 'Wi-Fi / USB',
      'وزن': '۲۲ کیلوگرم'
    },
    features: [
      'محفظه کاملاً بسته با سیستم فیلتر دود داخلی',
      'دوربین موقعیت‌یابی داخلی برای تنظیم دقیق طرح',
      'ایمن برای استفاده در آپارتمان و محیط داخلی',
      'سازگار با LightBurn و XCS',
      'پشتیبانی از مواد تا ضخامت ۱۵ میلی‌متر',
    ],
    audience: 'کارگاه‌های خانگی • آموزشگاه‌ها و دانشگاه‌ها • استارتاپ‌های محصولات چوبی و چرم'
  },
  {
    id: 's1-40w',
    name: 'xTool S1 40W',
    tag: 'دایود قدرتمند',
    badge: 'popular',
    badgeText: 'پرفروش',
    oneliner: 'نسخه ۴۰ وات دستگاه بسته S1. برش سریع‌تر و ضخیم‌تر، همچنان ایمن و کم‌صدا',
    officialPrice: '۱,۶۹۹',
    ourPrice: '۱,۶۰۰',
    save: '۶٪',
    specs: {
      'نوع لیزر': 'دایود ۴۰W',
      'مساحت کار': '۴۳۰ × ۴۰۰ میلی‌متر',
      'حداکثر سرعت': '۴۰۰۰ میلی‌متر/ثانیه',
      'دقت': '۰.۰۱ میلی‌متر',
      'محفظه بسته': 'دارد (فیلتر دود داخلی پیشرفته)',
      'اتصال': 'Wi-Fi / USB / بلوتوث',
      'وزن': '۲۵ کیلوگرم'
    },
    features: [
      'توان ۴۰ وات برای برش سریع‌تر و ضخیم‌تر',
      'محفظه بسته با فیلتر HEPA و کربن اکتیو',
      'قابلیت برش چوب تا ۲۰ میلی‌متر در یک پاس',
      'دوربین HD برای پیش‌نمایش طرح',
      'بی‌صدا و بدون بو - مناسب محیط کار بسته',
    ],
    audience: 'کارگاه‌های نیمه‌حرفه‌ای • تولیدکنندگان محصولات چوبی • استارتاپ‌های صنایع دستی'
  },
  {
    id: 'f1',
    name: 'xTool F1',
    tag: 'هیبرید قابل حمل',
    badge: 'portable',
    badgeText: 'سبک',
    oneliner: 'کوچکترین لیزر هیبریدی جهان. ترکیب فیبر ۲W و دایود ۱۰W در یک دستگاه قابل حمل',
    officialPrice: '۱,۰۹۹',
    ourPrice: '۱,۰۵۰',
    save: '۵٪',
    specs: {
      'نوع لیزر': 'فیبر ۲W + دایود ۱۰W',
      'مساحت کار': '۱۷۵ × ۱۷۵ میلی‌متر',
      'حداکثر سرعت': '۴۰۰۰ میلی‌متر/ثانیه',
      'دقت': '۰.۰۱ میلی‌متر',
      'قابلیت حمل': 'دست‌ی (قابل استفاده در محل مشتری)',
      'مواد قابل حک': 'فلز، چوب، چرم، پلاستیک، سنگ، شیشه',
      'وزن': '۵ کیلوگرم'
    },
    features: [
      'دو لیزر در یک دستگاه: فیبر برای فلز + دایود برای مواد آلی',
      'قابل استفاده به صورت دستی (بدون نیاز به پایه)',
      'پرتابل و سبک - مناسب فروشگاه‌های سیار',
      'تنظیم خودکار فاصله فوکوس',
      'پیش‌نمایش زنده موقعیت حکاکی',
    ],
    audience: 'فروشندگان طلا و جواهر • تعمیرکاران صنعتی • مغازه‌های هدیه و تزیینات • فریلنسرهای حکاکی'
  },
  {
    id: 'f1-ultra',
    name: 'xTool F1 Ultra',
    tag: 'فیبر حرفه‌ای',
    badge: 'popular',
    badgeText: 'پرفروش',
    oneliner: 'قدرتمندترین لیزر هیبریدی پرتابل. فیبر ۲۰W + دایود ۲۰W برای حکاکی عمیق روی هر سطحی',
    officialPrice: '۳,۳۹۹',
    ourPrice: '۳,۲۰۰',
    save: '۶٪',
    specs: {
      'نوع لیزر': 'فیبر ۲۰W + دایود ۲۰W',
      'مساحت کار': '۱۷۵ × ۱۷۵ میلی‌متر',
      'حداکثر سرعت': '۶۰۰۰ میلی‌متر/ثانیه',
      'دقت': '۰.۰۰۱ میلی‌متر',
      'قابلیت حمل': 'دست‌ی + پایه',
      'مواد قابل حک': 'همه فلزات، چوب، چرم، پلاستیک، سنگ، شیشه',
      'وزن': '۷ کیلوگرم'
    },
    features: [
      'فیبر ۲۰ وات برای حکاکی عمیق روی فولاد و آلومینیوم',
      'سرعت ۶۰۰۰ میلی‌متر/ثانیه - دو برابر مدل پایه',
      'دقت فوق‌العاده ۰.۰۰۱ میلی‌متر',
      'مناسب برای ساخت مهر، تگ، پلاک صنعتی',
      'قابلیت اتصال به بازوی رباتیک برای خط تولید',
    ],
    audience: 'صنایع فلزی • تولیدکنندگان پلاک و تگ • جواهرسازان • خطوط تولید صنعتی'
  },
  {
    id: 'f2',
    name: 'xTool F2',
    tag: 'فیبر دقیق',
    badge: 'popular',
    badgeText: 'پرفروش',
    oneliner: 'دستگاه حکاکی فیبر ۱۵ وات با دقت بالا. ترکیب IR ۵W + دایود ۱۵W برای ظریف‌کاری',
    officialPrice: '۱,۴۹۹',
    ourPrice: '۱,۴۰۰',
    save: '۷٪',
    specs: {
      'نوع لیزر': 'IR ۵W + دایود ۱۵W',
      'مساحت کار': '۱۷۵ × ۱۷۵ میلی‌متر',
      'حداکثر سرعت': '۴۰۰۰ میلی‌متر/ثانیه',
      'دقت': '۰.۰۱ میلی‌متر',
      'لیزر IR': 'برای حکاکی پلاستیک شفاف و مواد حساس',
      'وزن': '۶ کیلوگرم'
    },
    features: [
      'دو لیزر مکمل: IR برای مواد شفاف، دایود برای مواد رنگی',
      'حکاکی روی پلاستیک شفاف، شیشه و کریستال',
      'طراحی جمع‌وجور برای حمل آسان',
      'مناسب برای ساخت هدایای شخصی‌سازی شده',
      'کم‌مصرف و بادوام',
    ],
    audience: 'تولیدکنندگان هدایای تبلیغاتی • فروشندگان محصولات کریستال • حکاکی روی پلاستیک'
  },
  {
    id: 'f2-ultra',
    name: 'xTool F2 Ultra',
    tag: 'فیبر سنگین',
    badge: 'industrial',
    badgeText: 'صنعتی',
    oneliner: 'قوی‌ترین لیزر فیبر قابل حمل. توان ۱۰۰ وات برای برش و حکاکی عمیق فلزات صنعتی',
    officialPrice: '۳,۹۹۹',
    ourPrice: '۳,۸۰۰',
    save: '۵٪',
    specs: {
      'نوع لیزر': 'فیبر ۱۰۰W',
      'مساحت کار': '۱۷۵ × ۱۷۵ میلی‌متر',
      'حداکثر سرعت': '۸۰۰۰ میلی‌متر/ثانیه',
      'دقت': '۰.۰۰۱ میلی‌متر',
      'برش فلز': 'تا ۱ میلی‌متر فولاد',
      'وزن': '۱۲ کیلوگرم'
    },
    features: [
      '۱۰۰ وات فیبر - قدرتمندترین در کلاس خود',
      'برش فلزات نازک (فولاد تا ۱ میلی‌متر)',
      'سرعت ۸۰۰۰ میلی‌متر/ثانیه',
      'خنک‌کننده داخلی برای کار مداوم',
      'مناسب خطوط تولید نیمه‌صنعتی',
    ],
    audience: 'کارگاه‌های فلزکاری • تولیدکنندگان قطعات صنعتی • تعمیرگاه‌های تخصصی'
  },
  {
    id: 'm1-ultra',
    name: 'xTool M1 Ultra',
    tag: '۴ کاره',
    badge: 'compact',
    badgeText: 'چندمنظوره',
    oneliner: 'اولین دستگاه ۴ کاره جهان: حکاکی لیزر + برش لیزر + برش تیغی + قلم. یک دستگاه برای همه نیازها',
    officialPrice: '۱,۰۹۹',
    ourPrice: '۱,۰۵۰',
    save: '۵٪',
    specs: {
      'نوع لیزر': 'دایود ۱۰W / ۲۰W',
      'مساحت کار': '۳۹۰ × ۳۹۰ میلی‌متر',
      'حداکثر سرعت': '۴۰۰۰ میلی‌متر/ثانیه',
      'برش تیغی': 'دارد (برای پارچه و کاغذ)',
      'قلم': 'دارد (نقاشی و خطاطی خودکار)',
      'مواد قابل کار': 'چوب، چرم، پارچه، کاغذ، پلاستیک، MDF',
      'وزن': '۲۰ کیلوگرم'
    },
    features: [
      '۴ حالت: حکاکی لیزری، برش لیزری، برش تیغی، قلم خودکار',
      'ابزار برش تیغی برای پارچه بدون سوختگی لبه',
      'مناسب برای تولید پوشاک و صنایع نساجی',
      'تعویض سریع ابزار بدون نیاز به تنظیم',
      'یک دستگاه برای کل فرآیند تولید',
    ],
    audience: 'تولیدکنندگان پوشاک • کارگاه‌های چرم • صنایع دستی چوبی • استارتاپ‌های محصولات پارچه‌ای'
  },
  {
    id: 'p2s',
    name: 'xTool P2S',
    tag: 'CO2 حرفه‌ای',
    badge: 'industrial',
    badgeText: 'صنعتی',
    oneliner: 'دستگاه برش CO2 ۵۵ وات رومیزی. صفحه کار بزرگ ۶۰۰×۴۰۰ میلی‌متر برای تولید انبوه',
    officialPrice: '۳,۳۹۹',
    ourPrice: '۳,۲۰۰',
    save: '۶٪',
    specs: {
      'نوع لیزر': 'CO2 ۵۵W',
      'مساحت کار': '۶۰۰ × ۴۰۰ میلی‌متر',
      'حداکثر سرعت': '۶۰۰ میلی‌متر/ثانیه',
      'دقت': '۰.۰۱ میلی‌متر',
      'مواد قابل برش': 'چوب، اکریلیک، MDF، چرم، پارچه، کاغذ',
      'ضخامت برش': 'اکریلیک ۱۵ میلی‌متر، چوب ۲۰ میلی‌متر',
      'وزن': '۶۵ کیلوگرم'
    },
    features: [
      'CO2 ۵۵ وات با تیوب طولانی‌عمر (۱۰۰۰۰+ ساعت)',
      'صفحه کار ۶۰۰×۴۰۰ میلی‌متر برای محصولات بزرگ',
      'دوربین پیش‌نمایش با وضوح بالا',
      'سیستم خنک‌کننده آبی داخلی',
      'قابلیت اتصال به کامپیوتر از طریق Wi-Fi و USB',
    ],
    audience: 'تولیدی‌های MDF و اکریلیک • کارگاه‌های تولید انبوه • سازندگان تابلو و دکوراسیون'
  },
  {
    id: 'p3',
    name: 'xTool P3',
    tag: 'CO2 پرچمدار',
    badge: 'industrial',
    badgeText: 'پرچمدار',
    oneliner: 'پرچمدار دستگاه‌های CO2 با توان ۸۰ وات و اتوماسیون هوشمند. برای کارخانه‌ها و تولیدی‌های بزرگ',
    officialPrice: '۶,۹۹۹',
    ourPrice: '۶,۵۰۰',
    save: '۷٪',
    specs: {
      'نوع لیزر': 'CO2 ۸۰W',
      'مساحت کار': '۷۰۰ × ۵۰۰ میلی‌متر',
      'حداکثر سرعت': '۱۰۰۰ میلی‌متر/ثانیه',
      'دقت': '۰.۰۱ میلی‌متر',
      'مواد قابل برش': 'چوب، اکریلیک، MDF، چرم، پارچه، کاغذ',
      'ضخامت برش': 'اکریلیک ۲۵ میلی‌متر، چوب ۳۰ میلی‌متر',
      'ویژگی خاص': 'اتوماسیون هوشمند + conveyer belt',
      'وزن': '۱۱۰ کیلوگرم'
    },
    features: [
      '۸۰ وات توان - برش ضخیم‌ترین مواد در کمترین زمان',
      'اتوماسیون هوشمند با نوار نقاله (conveyer belt)',
      'صفحه کار ۷۰۰×۵۰۰ میلی‌متر',
      'سیستم فوکوس خودکار با سنسور لیزری',
      'ایده‌آل برای تولید انبوه و خطوط تولید مداوم',
    ],
    audience: 'کارخانه‌های تولید MDF • خطوط تولید انبوه • صنایع بسته‌بندی • تولیدکنندگان درب و کابینت'
  }
];

// ─── Render Functions ───
function renderProductCards(containerId, products) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  
  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <div class="product-card-img">
        <span class="product-card-badge badge-${p.badge}">${p.badgeText}</span>
        <img src="images/${getProductImage(p.id)}" 
             alt="${p.name}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div style=color:var(--text-muted);text-align:center><div style=font-size:3rem;margin-bottom:8px>⚡</div><div style=font-size:.8rem>${p.name}</div></div>'">
      </div>
      <div class="product-card-body">
        <span class="tag">${p.tag}</span>
        <h3>${p.name}</h3>
        <p class="oneliner">${p.oneliner}</p>
        <div class="product-card-specs">
          ${Object.entries(p.specs).slice(0, 3).map(([k, v]) => 
            `<span>${k}: <span class="en">${v}</span></span>`
          ).join('')}
        </div>
        <div class="product-card-footer">
          <div class="product-card-price">
            <div class="official">قیمت رسمی: $${p.officialPrice}</div>
            <div class="our-price">${p.ourPrice} <small>USDT</small></div>
            <div class="save">صرفه‌جویی ${p.save}</div>
          </div>
          <a href="/products/${p.id}.html" class="btn btn-primary btn-sm">جزئیات</a>
        </div>
      </div>
    </div>
  `).join('');
}

function getProductImage(id) {
  const map = {
    'd1-pro': 'd1-pro-main.png',
    's1-20w': 's1-main.webp',
    's1-40w': 's1-main.webp',
    'f1': 'f1-main.webp',
    'f1-ultra': 'f1-ultra-main.webp',
    'f2': 'f2-main.webp',
    'f2-ultra': 'f2-ultra-main.webp',
    'm1-ultra': 'm1-ultra-main.webp',
    'p2s': 'p2-main.webp',
    'p3': 'p3-main.webp'
  };
  return map[id] || 'f1-main.webp';
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', function() {
  renderProductCards('product-grid', PRODUCTS);
  
  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      q.parentElement.classList.toggle('active');
    });
  });

  // Mobile menu
  const menuBtn = document.querySelector('.mobile-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.querySelector('nav').classList.toggle('show');
    });
  }
  
  // Copy wallet address
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const addr = this.closest('.wallet-box').querySelector('.wallet-address');
      if (addr) {
        navigator.clipboard.writeText(addr.textContent.trim());
        const orig = this.textContent;
        this.textContent = '✓ کپی شد!';
        setTimeout(() => this.textContent = orig, 2000);
      }
    });
  });
});

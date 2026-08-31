/**
 * ASR Landing Page - Mindful & Clean Theme Logic
 */

const translations = {
  en: {
    nav_philosophy: "Philosophy",
    nav_features: "Features",
    nav_spheres: "9 Spheres",
    nav_pro: "ASR PRO",
    nav_faq: "FAQ",
    nav_download: "Get ASR Free",

    hero_badge: "Mindful Time & Life Awareness",
    hero_title_1: "Time is what life is made of.",
    hero_title_2: "Cherish every moment with clarity.",
    hero_desc: "ASR is a calm, continuous time tracker created to bring balance and peace of mind to your daily routine. No complicated timers, no pressure — just an honest, gentle view of where your life flows.",
    hero_cta_download: "Download for iOS & Android",
    hero_cta_learn: "Discover How It Works",

    stat_1_val: "Continuous",
    stat_1_lbl: "Effortless 24/7 Flow",
    stat_2_val: "100% Private",
    stat_2_lbl: "Stored on Your Device",
    stat_3_val: "9 Spheres",
    stat_3_lbl: "Harmonious Life Balance",
    stat_4_val: "8 Languages",
    stat_4_lbl: "Available Worldwide",

    phil_badge: "The Philosophy of Time",
    phil_title: "Time cannot be paused. But it can be lived with peace and intention.",
    phil_subtitle: "Most trackers treat time like a stopwatch with stressful start and stop buttons. But life never stops. It transitions naturally from meaningful work to prayer, study, sports, and restful moments with family.",
    phil_card_1_title: "Zero Start/Stop Friction",
    phil_card_1_desc: "You don't need to stress about forgetting to press 'Stop'. When you switch tasks, simply tap the new category — your day flows seamlessly.",
    phil_card_2_title: "A Chronicle of Meaningful Moments",
    phil_card_2_desc: "Attach photos, thoughts, and memories to your activities. ASR becomes a warm, living journal of your accomplishments and quiet days.",
    phil_card_3_title: "Peace of Mind & Privacy",
    phil_card_3_desc: "Your days belong exclusively to you. ASR works completely offline on encrypted local storage without tracking, ads, or distractions.",

    feat_badge: "Thoughtful Simplicity",
    feat_title: "Designed to help you focus on what truly matters",
    feat_subtitle: "Gentle, intuitive features created to support your habits, reflections, and personal growth.",

    feat_1_title: "Continuous 24/7 Rhythm",
    feat_1_desc: "One touch switches your focus. See the complete, honest picture of your entire 24 hours without gaps or confusion.",
    feat_2_title: "Photo Memories & Journal",
    feat_2_desc: "Capture a quick picture of your book, workout, or family dinner. Turn your time log into cherished memories.",
    feat_3_title: "Harmonious Donut Analytics",
    feat_3_desc: "A calm circular chart visualizes how your time is shared among spirit, work, health, and family for any day, month, or year.",
    feat_4_title: "Gentle Split Entry",
    feat_4_desc: "Forgot to switch before sleep? Easily and gently divide any past session into two activities with a simple time slider.",
    feat_5_title: "Weekly & Monthly Intentions",
    feat_5_desc: "Set gentle hour targets for learning, Quran/prayer, sport, or projects. Watch your progress grow smoothly day by day.",
    feat_6_title: "100% Offline-First",
    feat_6_desc: "Works instantly on flights, during retreats, or off-grid. Your records are always accessible in the palm of your hand.",

    spheres_badge: "Whole-Life Harmony",
    spheres_title: "9 Pillars of a Balanced Life",
    spheres_subtitle: "ASR brings structure and mindfulness to every dimension of your daily journey.",

    cat_religion: "Spirit & Faith",
    cat_religion_desc: "Prayer, reflection, spiritual connection and peace",
    cat_work: "Work & Projects",
    cat_work_desc: "Professional focus, deep work, and purposeful craft",
    cat_growth: "Growth & Learning",
    cat_growth_desc: "Reading books, acquiring skills, and personal wisdom",
    cat_finance: "Finance & Wealth",
    cat_finance_desc: "Planning, investments, and conscious resource management",
    cat_sport: "Sport & Health",
    cat_sport_desc: "Movement, workouts, energy, and physical vitality",
    cat_family: "Family & Friends",
    cat_family_desc: "Quality time, heartfelt conversations, and loved ones",
    cat_rest: "Rest & Sleep",
    cat_rest_desc: "Recharging your energy, mindful breaks, and peaceful sleep",
    cat_waste: "Wasted Time",
    cat_waste_desc: "Honest awareness of digital distractions and empty pauses",
    cat_base: "Routine & Basics",
    cat_base_desc: "Everyday essentials, meals, commutes, and domestic care",

    pro_badge: "ASR PRO",
    pro_title: "Cherish your journey across all your devices",
    pro_subtitle: "Keep every memory safe for years to come with seamless cloud sync and meaningful life audits.",
    pro_free_title: "Free Edition",
    pro_free_price: "$0",
    pro_free_period: "Free Forever",
    pro_free_1: "Complete 24/7 continuous time tracking",
    pro_free_2: "Photo memories & daily timeline",
    pro_free_3: "Donut chart life balance analytics",
    pro_free_4: "Smart Split Entry tool",
    pro_free_5: "Goals, intentions & milestones (unlimited)",
    pro_free_6: "CSV data export for personal analytics",
    pro_free_7: "Up to 3 friends in Community",
    pro_free_btn: "Start Free",

    pro_plus_title: "ASR PRO",
    pro_plus_price: "$2.99",
    pro_plus_period: "/ month or $24.99/year",
    pro_plus_1: "Everything in Free Edition",
    pro_plus_2: "⚡ Instant cloud synchronization across all your phones & tablets",
    pro_plus_3: "☁️ Secure cloud backup of photos, thoughts & notes — warm memories to cherish for years",
    pro_plus_4: "📄 Elegant PDF reports for year-in-review and personal life audits",
    pro_plus_5: "👥 Unlimited close friends & shared mindful presence",
    pro_plus_btn: "Upgrade to PRO",

    faq_badge: "Questions & Answers",
    faq_title: "Everything you need to know",
    faq_q1: "How does continuous tracking work during sleep or breaks?",
    faq_a1: "In ASR, all 24 hours of the day are treated with equal respect. Rest and sleep are just as essential as work. Simply select 'Rest' or 'Routine' when your activity shifts. If you forget to switch before bed, the Split Entry feature lets you gently divide the session in a couple of seconds.",
    faq_q2: "Can I use ASR without internet?",
    faq_a2: "Yes, completely! ASR is crafted from the ground up as an offline-first application with a local embedded database on your phone. You can use it in airplanes, remote mountains, or with cellular data disabled.",
    faq_q3: "How is my personal privacy safeguarded?",
    faq_a3: "Your data stays on your personal device. For PRO subscribers, cloud backup is protected by military-grade encryption and PostgreSQL Row-Level Security, ensuring that only your authenticated account can ever access your records.",
    faq_q4: "Which platforms and languages are available?",
    faq_a4: "ASR is available for both iOS (Apple App Store) and Android (Google Play), with support for 8 languages: English, Russian, Kyrgyz, Arabic, Turkish, German, Spanish, and Portuguese.",

    cta_title: "Begin your journey to conscious, peaceful days.",
    cta_desc: "Experience how easy it is to manage your time without pressure, stress, or stopwatch anxiety.",
    cta_btn: "Download ASR Today",

    footer_rights: "© 2026 ASR App. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service"
  },
  ru: {
    nav_philosophy: "Философия",
    nav_features: "Возможности",
    nav_spheres: "9 Сфер",
    nav_pro: "ASR PRO",
    nav_faq: "Вопросы и ответы",
    nav_download: "Скачать ASR",

    hero_badge: "Осознанность и ценность каждого дня",
    hero_title_1: "Время — это то, из чего соткана жизнь.",
    hero_title_2: "Проживайте каждую минуту бережно.",
    hero_desc: "ASR — это спокойный, непрерывный трекер времени, созданный для внутренней гармонии и ясности. Без стресса, без кнопок «Стоп» — только честный и легкий взгляд на то, куда уходят ваши дни.",
    hero_cta_download: "Скачать для iOS и Android",
    hero_cta_learn: "Узнать философию ASR",

    stat_1_val: "Непрерывный",
    stat_1_lbl: "Плавный поток 24/7",
    stat_2_val: "100% Приватно",
    stat_2_lbl: "Хранится на устройстве",
    stat_3_val: "9 Сфер",
    stat_3_lbl: "Гармония всех сторон жизни",
    stat_4_val: "8 Языков",
    stat_4_lbl: "Доступен по всему миру",

    phil_badge: "Философия времени",
    phil_title: "Время нельзя остановить или накопить. Но им можно жить осознанно.",
    phil_subtitle: "Обычные приложения превращают жизнь в секундомер с кнопками «Старт» и «Стоп». Но жизнь никогда не замирает — она непрерывно перетекает от работы к молитве, от учебы к спорту, от важных дел к отдыху и теплому общению с семьей.",
    phil_card_1_title: "Без стресса и суеты",
    phil_card_1_desc: "Вам больше не нужно бояться забыть нажать «Стоп». Когда одно дело сменяется другим, просто нажмите новую категорию — время течёт само.",
    phil_card_2_title: "Хроника ваших ярких моментов",
    phil_card_2_desc: "Прикрепляйте фото, заметки и мысли к записям дня. ASR превращается в душевный памятный дневник ваших побед и тихих радостей.",
    phil_card_3_title: "Спокойствие и полная приватность",
    phil_card_3_desc: "Ваша жизнь принадлежит только вам. ASR работает полностью оффлайн во встроенной локальной базе без рекламы и навязчивых уведомлений.",

    feat_badge: "Продуманная простота",
    feat_title: "Всё для того, чтобы слышать себя и ценить свой день",
    feat_subtitle: "Легкие, интуитивные инструменты для поддержки ваших привычек, отдыха и внутреннего баланса.",

    feat_1_title: "Непрерывный ритм 24/7",
    feat_1_desc: "Переключение в одно касание. Полная и честная картина всех 24 часов вашего дня без белых пятен и пропусков.",
    feat_2_title: "Фото-хронология и дневник",
    feat_2_desc: "Сделайте снимок прочитанной книги, спортзала или семейного ужина — сохраните контекст момента на всю жизнь.",
    feat_3_title: "Гармоничная круговая аналитика",
    feat_3_desc: "Красивая и спокойная диаграмма покажет баланс духовности, работы, здоровья и семьи за день, месяц или год.",
    feat_4_title: "Бережное разделение (Split Entry)",
    feat_4_desc: "Забыли переключить таймер перед сном? Легким движением ползунка разделите сессию на работу и сон за пару секунд.",
    feat_5_title: "Цели и намерения",
    feat_5_desc: "Ставьте мягкие ориентиры по часам на спорт, чтение или духовную практику. Наблюдайте за плавным ростом прогресса.",
    feat_6_title: "100% Offline-First",
    feat_6_desc: "Мгновенно работает в самолёте, горах или без интернета. Ваши данные всегда с вами в любую секунду.",

    spheres_badge: "Баланс всех сфер",
    spheres_title: "9 Опор гармоничной жизни",
    spheres_subtitle: "ASR помогает бережно распределять внимание между главными ценностями человека.",

    cat_religion: "Религия и Духовность",
    cat_religion_desc: "Молитва, душевный покой, размышления и вера",
    cat_work: "Работа и Проекты",
    cat_work_desc: "Профессиональный фокус, карьера и созидание",
    cat_growth: "Развитие и Знания",
    cat_growth_desc: "Чтение книг, новые навыки и внутренняя мудрость",
    cat_finance: "Финансы и Ресурсы",
    cat_finance_desc: "Планирование бюджета, учет и финансовый рост",
    cat_sport: "Спорт и Здоровье",
    cat_sport_desc: "Тренировки, прогулки, тонус тела и энергия",
    cat_family: "Семья и Друзья",
    cat_family_desc: "Время с любимыми, тепло общения и поддержка",
    cat_rest: "Отдых и Сон",
    cat_rest_desc: "Восстановление сил, здоровый сон и тишина",
    cat_waste: "Потери времени",
    cat_waste_desc: "Честный взгляд на соцсети, суету и пустые дела",
    cat_base: "Базовые и Быт",
    cat_base_desc: "Дорога, домашние дела, питание и ежедневная рутина",

    pro_badge: "ASR PRO",
    pro_title: "Память о вашем пути и уверенность на всех устройствах",
    pro_subtitle: "Для тех, кто хочет сберечь каждый прожитый день, сохранить воспоминания на долгие годы и синхронизировать историю между всеми смартфонами и планшетами.",
    pro_free_title: "Free Версия",
    pro_free_price: "0 ₽",
    pro_free_period: "Бесплатно навсегда",
    pro_free_1: "Полный непрерывный учет времени 24/7",
    pro_free_2: "Фото-хронология и личный дневник",
    pro_free_3: "Круговая аналитика баланса сфер",
    pro_free_4: "Инструмент разделения записей Split Entry",
    pro_free_5: "Цели, намерения и рубежи (без ограничений)",
    pro_free_6: "Экспорт истории в формате CSV",
    pro_free_7: "До 3 близких друзей в Сообществе",
    pro_free_btn: "Начать бесплатно",

    pro_plus_title: "ASR PRO",
    pro_plus_price: "249 ₽",
    pro_plus_period: "/ месяц или 1 990 ₽/год",
    pro_plus_1: "Все возможности Free версии",
    pro_plus_2: "⚡ Мгновенная облачная синхронизация на смартфонах и планшетах",
    pro_plus_3: "☁️ Облачное сохранение фото, заметок и мыслей — ваша тёплая ностальгия и память через годы",
    pro_plus_4: "📄 Элегантные PDF-отчёты для глубокого анализа года и личного аудита",
    pro_plus_5: "👥 Безлимитный круг близких друзей и совместная поддержка",
    pro_plus_btn: "Подключить PRO",

    faq_badge: "Вопросы и ответы",
    faq_title: "Всё, что важно знать об ASR",
    faq_q1: "Как устроен учет времени во время сна или отдыха?",
    faq_a1: "В ASR все 24 часа дня одинаково ценны. Отдых и сон так же важны, как и работа. Когда вы ложитесь спать, просто выберите «Отдых». А если вы забыли переключить категорию, функция Split Entry позволит разрезать запись на две части за пару секунд.",
    faq_q2: "Работает ли приложение без интернета?",
    faq_a2: "Да, на 100%! ASR создан по принципу offline-first. Все записи хранятся во встроенной локальной базе Isar на вашем телефоне. Приложение мгновенно открывается в самолете, поездках и без сотовой сети.",
    faq_q3: "Как защищены мои личные данные и фотографии?",
    faq_a3: "Все данные хранятся локально на вашем смартфоне. Для подписчиков PRO облачная копия шифруется и защищается протоколами PostgreSQL Row-Level Security — доступ есть только у вашего аккаунта.",
    faq_q4: "На каких устройствах и языках доступен ASR?",
    faq_a4: "ASR доступен на iOS (App Store) и Android (Google Play) на 8 языках: русском, кыргызском, английском, арабском, турецком, немецком, испанском и португальском.",

    cta_title: "Начните проживать каждый день с ясностью и теплом.",
    cta_desc: "Почувствуйте, насколько легко и естественно управлять своим временем без стресса и суеты.",
    cta_btn: "Скачать ASR сейчас",

    footer_rights: "© 2026 ASR App. Все права защищены.",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия использования"
  }
};

let currentLang = 'ru';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('bg-slate-900', 'text-white', 'shadow-sm');
      btn.classList.remove('text-slate-600', 'hover:text-slate-900');
    } else {
      btn.classList.remove('bg-slate-900', 'text-white', 'shadow-sm');
      btn.classList.add('text-slate-600', 'hover:text-slate-900');
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function setupFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });
}

function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage('ru');
  setupFaqAccordion();
  setupMobileMenu();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
});

# ASR: Focus & Time Journal — Landing Page & Fastlane Marketing Asset

Этот лендинг создан специально для презентации приложения **ASR: Focus & Time Journal** и генерации вирусных промо-видео / UGC-роликов в сервисе **Fastlane** ([usefastlane.ai](https://www.usefastlane.ai)).

---

## 📁 Структура лендинга

```text
web_landing/
├── index.html       # Главная страница (Hero, фичи, Split-слайдер, тарифы, FAQ, Schema.org)
├── css/
│   └── styles.css   # Стили, Glassmorphism, неоновые эффекты, 3D-мокап смартфона
├── js/
│   └── main.js      # Логика: переключение языков (EN/RU), таймер в мокапе, слайдер, FAQ
└── README.md        # Эта инструкция
```

> **Важно:** Папка `web_landing` полностью изолирована от мобильного приложения Flutter (`lib/`). Она не влияет на сборку и работу приложения.

---

## 🚀 Как открыть и посмотреть локально

1. **Простой способ:** Откройте проводник Windows, перейдите в `c:\PROJECT\asr\web_landing\` и дважды кликните по файлу `index.html`. Он откроется в вашем браузере.
2. **Через локальный сервер (по желанию):**
   ```powershell
   cd c:\PROJECT\asr\web_landing
   python -m http.server 8080
   ```
   И перейдите по адресу `http://localhost:8080` в браузере.

---

## 🌐 Как бесплатно опубликовать в интернет за 1 минуту (Хостинг)

Чтобы скормить сайт в **Fastlane**, ему нужен публичный адрес (URL в интернете). Вот самые простые бесплатные варианты:

### Вариант А: Vercel (Рекомендуется ⭐)
1. Зайдите на [vercel.com](https://vercel.com) и зарегистрируйтесь через GitHub или Email.
2. Нажмите **Add New... → Project**.
3. Если проект на GitHub — выберите репозиторий `asr` и в настройках укажите **Root Directory**: `web_landing`.
4. Нажмите **Deploy** — через 15 секунд вы получите бесплатный рабочий адрес вида `https://asr-flow.vercel.app`.

### Вариант Б: Netlify (Drag & Drop)
1. Зайдите на [netlify.com](https://www.netlify.com).
2. Перейдите во вкладку **Sites → Add new site → Deploy manually**.
3. Перетащите папку `web_landing` мышкой в браузер.
4. Готово! Вы сразу получаете активную ссылку с HTTPS.

### Вариант В: GitHub Pages
1. В настройках вашего репозитория на GitHub перейдите в **Settings → Pages**.
2. Включите раздачу из нужной ветки/папки.

---

## 🎬 Как использовать с Fastlane (`usefastlane.ai`)

1. Скопируйте полученную ссылку на ваш опубликованный лендинг (например, `https://asr-app.vercel.app`).
2. Вставьте её в поле ввода на сайте [usefastlane.ai](https://www.usefastlane.ai).
3. Fastlane автоматически:
   * Вычитает хуки: «Time Cannot Be Paused», «No start/stop friction», «Smart Split Entry».
   * Создаст сценарии для TikTok и Reels с AI-аватарами.
   * Покажет готовые варианты видео для свайпа и публикации в соцсети!

---

## 🖼️ Как заменить скриншоты в будущем

В `index.html` и `main.js` уже встроены интерактивные стилизованные мокапы. Если позже вы захотите поставить реальные скриншоты из Figma или эмулятора:
1. Создайте папку `web_landing/assets/images/`.
2. Положите туда скриншоты (например, `screen_focus.png`, `screen_feed.png`).
3. Замените блок мокапа в `index.html` на тег `<img src="assets/images/screen_focus.png" class="rounded-3xl shadow-2xl" />`.

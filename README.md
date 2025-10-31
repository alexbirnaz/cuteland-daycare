# 🏰 Cuteland Daycare - Профессиональная версия

## 📁 Структура проекта

```
cuteland-pro/
├── index.html          ← HTML разметка (структура сайта)
├── css/
│   └── style.css      ← Все стили (цвета, размеры, дизайн)
├── js/
│   └── script.js      ← JavaScript (интерактивность)
└── images/            ← Папка для фото и видео
    ├── photos/        ← Фотографии детского сада
    └── videos/        ← Видео
```

---

## 🚀 Быстрый старт

### 1. Открыть сайт
Двойной клик на `index.html` → сайт откроется в браузере

### 2. Редактировать
Открой проект в VS Code:
- File → Open Folder → выбери папку `cuteland-pro`

### 3. Изменить и сохранить
- Меняй файлы в VS Code
- Сохрани (`Ctrl + S`)
- Обнови браузер (`F5`)

---

## 📝 ЧТО РЕДАКТИРОВАТЬ И ГДЕ

### 1. ТЕКСТЫ → `index.html`

#### Изменить адрес:
**Строка ~365**
```html
<p>123 Happy Street<br>Vancouver, WA 98660</p>
```
Замени на реальный адрес друга.

#### Изменить телефон:
**Строка ~377**
```html
<p>(360) 555-KIDS<br>(360) 555-5437</p>
```

#### Изменить email:
**Строка ~389**
```html
<p>hello@cutelanddaycare.com</p>
```

#### Изменить часы работы:
**Строка ~401**
```html
<p>Monday - Friday<br>7:00 AM - 6:00 PM</p>
```

#### Изменить название детского сада:
**Строка ~32** (в навигации)
```html
<h1>Cuteland Daycare</h1>
```

#### Изменить hero заголовок:
**Строка ~68-71**
```html
<span class="text-red">Welcome</span> to 
<span class="text-blue">Cuteland</span><br>
<span class="text-green">Daycare!</span> 🏰
```

#### Изменить описание программ:
**Строки ~189-237** (секция Programs)
```html
<p class="program-description">
    Gentle introduction to social learning...
</p>
```
Меняй описания для каждой возрастной группы.

#### Изменить миссию:
**Строка ~130**
```html
<p>
    At Cuteland Daycare, we believe every child deserves...
</p>
```

---

### 2. ЦВЕТА → `css/style.css`

#### Изменить цвета бренда:
**Строки 9-13**
```css
:root {
    --color-red: #FF4444;      /* Меняй здесь красный */
    --color-blue: #4A90E2;     /* Меняй здесь синий */
    --color-yellow: #FFD93D;   /* Меняй здесь желтый */
    --color-green: #6BCB77;    /* Меняй здесь зеленый */
}
```

Используй hex коды цветов:
- Найди цвет на https://colorpicker.me
- Скопируй hex код (например, `#FF0000`)
- Вставь вместо старого

#### Изменить размеры текста:
**Строка 182** (Hero заголовок)
```css
.hero-title {
    font-size: 4rem;  /* Меняй размер здесь */
}
```

**Строка 203** (Заголовки секций)
```css
.section-title {
    font-size: 3rem;  /* Меняй размер здесь */
}
```

#### Изменить отступы:
**Строки 20-24**
```css
--spacing-xs: 0.5rem;  /* Маленький отступ */
--spacing-sm: 1rem;    /* Средний отступ */
--spacing-md: 2rem;    /* Большой отступ */
--spacing-lg: 3rem;    /* Очень большой */
--spacing-xl: 5rem;    /* Огромный */
```

---

### 3. ФОТО И ВИДЕО → `js/script.js`

#### Добавить настоящие фото в галерею:

**Шаг 1:** Положи фото в папку `images/photos/`
```
images/
└── photos/
    ├── playground.jpg
    ├── classroom.jpg
    └── art-corner.jpg
```

**Шаг 2:** Открой `js/script.js`, найди **строку 24-47**:
```javascript
const galleryData = [
    {
        type: 'image',
        title: 'Playground',
        color: '#FFD93D',
        icon: '🖼️',
        src: 'images/photos/playground.jpg'  // Добавь эту строку!
    },
    {
        type: 'image',
        title: 'Classroom',
        color: '#4A90E2',
        icon: '🖼️',
        src: 'images/photos/classroom.jpg'  // И эту!
    },
    // ... и так далее
];
```

**Шаг 3:** Обнови страницу → фото появятся!

#### Добавить видео:
**Шаг 1:** Положи видео в `images/videos/`

**Шаг 2:** В `js/script.js` добавь:
```javascript
{
    type: 'video',
    title: 'Story Time',
    color: '#FF4444',
    icon: '▶️',
    src: 'images/videos/storytime.mp4'  // Путь к видео
}
```

---

### 4. ОТЗЫВЫ → `index.html`

#### Добавить новый отзыв:
**Строка ~297-329** (секция Reviews)

Скопируй этот блок:
```html
<div class="review-card">
    <div class="stars">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
    </div>
    <p class="review-text">
        "Текст отзыва здесь"
    </p>
    <p class="review-author">- Имя родителя</p>
</div>
```

Вставь после существующих отзывов.

**Меньше звезд?** Удали лишние `<span class="star">★</span>`

---

### 5. ПРОГРАММЫ → `index.html`

#### Изменить возрастные группы:
**Строки ~189-237**

```html
<h3 class="text-red">Toddlers</h3>          <!-- Название программы -->
<p class="program-age">2-3 years</p>        <!-- Возраст -->
<p class="program-description">
    Gentle introduction...                   <!-- Описание -->
</p>
```

#### Добавить новую программу:
Скопируй весь блок `.program-card` и вставь в `.grid-3`

---

## 🖼️ Работа с изображениями

### Рекомендации:
- **Формат:** JPG или PNG
- **Размер:** Не больше 2 MB каждое фото
- **Разрешение:** 1920x1080 или меньше
- **Названия:** Английскими буквами, без пробелов
  - ✅ `playground.jpg`
  - ✅ `kids-playing.jpg`
  - ❌ `Фото площадки.jpg`
  - ❌ `photo 1.jpg` (пробел!)

### Сжатие фото:
1. Перейди на https://tinypng.com
2. Загрузи фото
3. Скачай сжатое
4. Используй на сайте

---

## 🎨 Как менять дизайн

### Изменить шрифт:
**`css/style.css` строка 50**
```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI'...
}
```

Замени на Google Font:
1. Перейди на https://fonts.google.com
2. Выбери шрифт (например, Poppins)
3. Скопируй ссылку
4. Вставь в `<head>` в `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```
5. В CSS замени:
```css
font-family: 'Poppins', sans-serif;
```

### Изменить радиус скругления:
**`css/style.css` строки 26-29**
```css
--radius-sm: 0.5rem;   /* Маленькое скругление */
--radius-md: 1rem;     /* Среднее */
--radius-lg: 2rem;     /* Большое */
--radius-full: 50px;   /* Круглое (кнопки) */
```

### Изменить тени:
**`css/style.css` строки 31-34**
```css
--shadow-sm: 0 2px 10px rgba(0,0,0,0.1);   /* Легкая тень */
--shadow-md: 0 4px 15px rgba(0,0,0,0.1);   /* Средняя */
--shadow-lg: 0 8px 30px rgba(0,0,0,0.2);   /* Сильная */
```

---

## 📱 Мобильная версия

Сайт автоматически адаптируется под мобильные!

### Проверить на телефоне:
1. В браузере нажми `F12`
2. Кликни иконку телефона (📱)
3. Выбери iPhone или Android
4. Проверь как выглядит

### Настроить для мобильных:
**`css/style.css` строки 563-619** (Media Queries)
```css
@media (max-width: 768px) {
    /* Стили для мобильных */
}
```

---

## 🔧 Настройка форм (backend)

Сейчас формы показывают `alert()`. Для реальной работы нужен backend.

### Вариант 1: Formspree (самый простой)

1. Перейди на https://formspree.io
2. Создай аккаунт (бесплатно)
3. Создай форму → получишь ID
4. В `index.html` найди формы и добавь:

**Contact Form (строка ~413):**
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Review Form (строка ~338):**
```html
<form id="review-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

5. В `js/script.js` **закомментируй** строки 134-161 и 163-187 (или удали `e.preventDefault()`)

### Вариант 2: Netlify Forms

Если загружаешь на Netlify:

В `index.html` добавь к каждой форме:
```html
<form data-netlify="true" name="contact">
```

### Вариант 3: Свой backend (Node.js)

Когда изучишь Node.js на курсе:
1. Создай Express сервер
2. Раскомментируй TODO в `js/script.js` (строки 156, 185)
3. Настрой API endpoints

---

## 🌐 Загрузка на хостинг

### Netlify (рекомендую, бесплатно):

1. Перейди на https://netlify.com
2. Drag & drop папку `cuteland-pro`
3. Готово! Получишь домен `yourname.netlify.app`

### Твой VPS:

```bash
# Через SFTP загрузи все файлы в:
/var/www/cutelanddaycare.com/

# Nginx конфиг:
server {
    listen 80;
    server_name cutelanddaycare.com www.cutelanddaycare.com;
    root /var/www/cutelanddaycare.com;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}

# Перезапусти Nginx:
sudo systemctl restart nginx
```

### GitHub Pages:

1. Создай репозиторий на GitHub
2. Загрузи все файлы
3. Settings → Pages → Source: main branch
4. Готово!

---

## ✅ Чеклист перед запуском

- [ ] Заменил все тексты (адрес, телефон, email, часы)
- [ ] Добавил настоящие фото детского сада
- [ ] Проверил все ссылки
- [ ] Протестировал формы
- [ ] Проверил на мобильном (F12 → device toolbar)
- [ ] Сжал все фото (TinyPNG)
- [ ] Изменил цвета под бренд (если нужно)
- [ ] Проверил грамматику текстов
- [ ] Добавил favicon (иконку сайта)
- [ ] Настроил формы (Formspree или другое)

---

## 🐛 Частые проблемы

### Проблема: Фото не отображаются
**Решение:** 
- Проверь путь к фото в `js/script.js`
- Убедись что фото в папке `images/photos/`
- Проверь расширение (.jpg, .png)

### Проблема: Стили не применяются
**Решение:**
- Очисти кеш браузера (`Ctrl + Shift + R`)
- Проверь путь к CSS в `index.html` (строка 18)
- Открой DevTools (F12) → Console → проверь ошибки

### Проблема: JavaScript не работает
**Решение:**
- Проверь путь к JS в `index.html` (строка 477)
- Открой Console (F12) → ищи ошибки
- Убедись что JavaScript включен в браузере

### Проблема: Сайт не адаптируется на мобильном
**Решение:**
- Проверь meta viewport в `index.html` (строка 5)
- Проверь media queries в `css/style.css` (строка 563)

---

## 📚 Ресурсы для изучения

### HTML:
- https://www.w3schools.com/html/
- https://developer.mozilla.org/en-US/docs/Web/HTML

### CSS:
- https://www.w3schools.com/css/
- https://css-tricks.com/

### JavaScript:
- https://javascript.info/
- https://www.w3schools.com/js/

### Цвета:
- https://colorpicker.me
- https://coolors.co

### Иконки:
- https://emojipedia.org/
- https://fontawesome.com/

### Сжатие фото:
- https://tinypng.com
- https://compressor.io

---

## 🎓 Следующие шаги

1. **Сейчас:** Замени тексты и добавь фото
2. **Через неделю:** Настрой формы (Formspree)
3. **Через месяц:** Изучи CSS анимации
4. **Через 2 месяца:** Когда изучишь React, сравни с React версией
5. **Через 4 месяца:** Добавь Node.js backend для форм
6. **Через 6 месяцев:** Создай админ панель

---

## 💡 Идеи для улучшения

- [ ] Добавить Google Maps карту
- [ ] Создать страницу "About Us" с фото воспитателей
- [ ] Добавить страницу "FAQ"
- [ ] Создать блог о детском развитии
- [ ] Добавить онлайн календарь для записи на тур
- [ ] Интегрировать с Google Calendar
- [ ] Добавить чат для родителей (Tawk.to)
- [ ] Создать личный кабинет родителей
- [ ] Добавить галерею с категориями
- [ ] Создать мультиязычность (English + Русский)

---

## 📞 Поддержка

Создано **AltaForm Studio**  
Vancouver, Washington

Вопросы? Пиши мне!

---

**Удачи с проектом! 🚀**

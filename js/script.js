/* ========================================
   CUTELAND DAYCARE - MAIN JAVASCRIPT
   Created by AltaForm Studio
   ======================================== */

// ========================================
// WAIT FOR DOM TO LOAD
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functions
  initHeroSlider();
  initSmoothScroll();
  initGallery();
  initStarRating();
  initForms();
  initMobileMenu();
  initConfetti();

  console.log("✅ Cuteland Daycare website loaded successfully!");
});

// ========================================
// HERO BACKGROUND SLIDER
// ========================================
function initHeroSlider() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots .dot");

  if (slides.length === 0) return; // Exit if no slides

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = n;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // Auto slide every 5 seconds
  setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 5000);

  // Dots click
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });
}

// ========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================
function initSmoothScroll() {
  // Get all links that start with #
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ========================================
// GALLERY FUNCTIONALITY
// ========================================

// Gallery Data - МЕНЯЙ ЗДЕСЬ ФОТО/ВИДЕО!
const galleryData = [
  {
    type: "image",
    title: "Playground",
    color: "#FFD93D", // Желтый
    icon: "🖼️",
    // Когда добавишь фото, раскомментируй:
    // src: 'images/playground.jpg'
  },
  {
    type: "image",
    title: "Classroom",
    color: "#4A90E2", // Синий
    icon: "🖼️",
    // src: 'images/classroom.jpg'
  },
  {
    type: "video",
    title: "Story Time",
    color: "#FF4444", // Красный
    icon: "▶️",
    // src: 'videos/storytime.mp4'
  },
  {
    type: "image",
    title: "Art Corner",
    color: "#6BCB77", // Зеленый
    icon: "🖼️",
    // src: 'images/art-corner.jpg'
  },
];

let gallerySlide = 0;

function initGallery() {
  // Create dots for each slide
  const dotsContainer = document.getElementById("gallery-dots");

  galleryData.forEach((item, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });

  // Show first slide
  updateGallery();
}

function changeSlide(direction) {
  gallerySlide =
    (gallerySlide + direction + galleryData.length) % galleryData.length;
  updateGallery();
}

function goToSlide(index) {
  gallerySlide = index;
  updateGallery();
}

function updateGallery() {
  const slide = galleryData[gallerySlide];
  const slideElement = document.getElementById("gallery-slide");
  const titleElement = document.getElementById("gallery-title");
  const typeElement = document.getElementById("gallery-type");
  const iconElement = slideElement.querySelector(".gallery-icon");

  // Update background color
  slideElement.style.backgroundColor = slide.color;

  // Update content
  titleElement.textContent = slide.title;
  typeElement.textContent = slide.type === "video" ? "Video" : "Photo";
  iconElement.textContent = slide.icon;

  // Если есть src (настоящее фото/видео), показываем его
  if (slide.src) {
    if (slide.type === "image") {
      slideElement.innerHTML = `
                <img 
                    src="${slide.src}" 
                    alt="${slide.title}" 
                    style="width: 100%; height: 100%; object-fit: cover;"
                >
            `;
    } else if (slide.type === "video") {
      slideElement.innerHTML = `
                <video 
                    src="${slide.src}" 
                    controls 
                    style="width: 100%; height: 100%; object-fit: cover;"
                >
                    Your browser does not support video.
                </video>
            `;
    }
  }

  // Update dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === gallerySlide);
  });
}

// Make changeSlide available globally for HTML onclick
window.changeSlide = changeSlide;

// ========================================
// STAR RATING FUNCTIONALITY
// ========================================
let selectedRating = 5;

function initStarRating() {
  const container = document.getElementById("star-rating");

  // Create 5 star buttons
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("button");
    star.type = "button";
    star.textContent = "★";
    star.style.color = i <= selectedRating ? "#FFD93D" : "#2C3E50";
    star.style.fontSize = "2rem";
    star.setAttribute("aria-label", `Rate ${i} stars`);
    star.onclick = () => setRating(i);
    container.appendChild(star);
  }
}

function setRating(rating) {
  selectedRating = rating;

  // Update star colors
  const stars = document.querySelectorAll("#star-rating button");
  stars.forEach((star, index) => {
    star.style.color = index < rating ? "#FFD93D" : "#2C3E50";
  });
}

// ========================================
// FORM SUBMISSIONS
// ========================================
function initForms() {
  // Review Form
  const reviewForm = document.getElementById("review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", handleReviewSubmit);
  }

  // Contact Form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }
}

function handleReviewSubmit(e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const comment = formData.get("comment");

  // В будущем здесь будет отправка на сервер
  // Сейчас просто показываем алерт
  alert(
    `Thank you for your review, ${name}!\n\nRating: ${selectedRating} stars\n\nYour review will be published after moderation.`
  );

  // Reset form
  e.target.reset();
  setRating(5);

  // TODO: Отправка данных на backend
  // sendToBackend('/api/reviews', {
  //     name: name,
  //     rating: selectedRating,
  //     comment: comment
  // });
}

function handleContactSubmit(e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(e.target);
  const parentName = formData.get("parent-name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const childAge = formData.get("child-age");
  const message = formData.get("message");

  // В будущем здесь будет отправка на сервер
  alert(
    `Thank you, ${parentName}!\n\nWe received your tour request and will contact you soon at:\n${email}\n${phone}`
  );

  // Reset form
  e.target.reset();

  // TODO: Отправка данных на backend
  // sendToBackend('/api/contact', {
  //     parentName: parentName,
  //     email: email,
  //     phone: phone,
  //     childAge: childAge,
  //     message: message
  // });
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      // Toggle mobile menu
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
      });
    });
  }
}

// ========================================
// SCROLL ANIMATIONS (Optional)
// Показывает элементы при прокрутке
// ========================================
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Observe all cards
  document
    .querySelectorAll(".card, .program-card, .review-card")
    .forEach((card) => {
      observer.observe(card);
    });
}

// Раскомментируй если хочешь анимации при скролле:
// initScrollAnimations();

// ========================================
// HELPER FUNCTIONS
// ========================================

// Function to send data to backend (для будущего)
async function sendToBackend(endpoint, data) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error("Failed to send data");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Sorry, there was an error. Please try again or call us directly.");
  }
}

// Debounce function (для оптимизации)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// KEYBOARD NAVIGATION FOR GALLERY
// ========================================
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    changeSlide(-1);
  } else if (e.key === "ArrowRight") {
    changeSlide(1);
  }
});

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
  console.log("🍔 Mobile menu init started");
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  console.log("Menu button:", menuBtn);
  console.log("Nav links:", navLinks);

  if (!menuBtn || !navLinks) {
    console.log("❌ Elements not found!"); // ← ИСПРАВЛЕНО!
    return;
  }

  console.log("✅ Adding click listener");

  menuBtn.addEventListener("click", () => {
    console.log("🎯 Menu clicked!");
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });

  // Закрыть меню при клике на ссылку
  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });
}

// ============================================
// CONFETTI EFFECT для Events Section
// ============================================
function initConfetti() {
  const eventsSection = document.querySelector("#events");

  if (!eventsSection) return;

  let hasTriggered = false; // Флаг чтобы сработало только один раз

  // Intersection Observer следит когда секция появляется
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Если секция видна И еще не срабатывало
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true;
          launchConfetti();
        }
      });
    },
    {
      threshold: 0.3, // Сработает когда 30% секции видно
    }
  );

  observer.observe(eventsSection);
}

// Функция запуска салюта
function launchConfetti() {
  const colors = ["#ff4444", "#4a90e2", "#ffd93d", "#6bcb77"]; // Ваши цвета

  // Левая пушка
  confetti({
    particleCount: 100,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.6 },
    colors: colors,
  });

  // Правая пушка
  confetti({
    particleCount: 100,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.6 },
    colors: colors,
  });

  // Дополнительный залп через 200ms для эффекта
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 90,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
      colors: colors,
    });
  }, 200);
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log(`
╔════════════════════════════════════╗
║   CUTELAND DAYCARE WEBSITE         ║
║   Created by AltaForm Studio       ║
║   Vancouver, Washington            ║
╚════════════════════════════════════╝
`);

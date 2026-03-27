// for responsive menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// =========== Navigation menu
const links = document.querySelectorAll(".nav-item");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-item").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

//================== Slider=======================================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

/* SHOW SLIDE */
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

/* AUTO SLIDE */
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

/* DOT CLICK */
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    current = i;
    showSlide(current);
  });
});

//=================== about

const about = document.querySelector(".about");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  if (about.getBoundingClientRect().top < trigger) {
    about.classList.add("show");
  }
});

const cards = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach((card) => {
    if (card.getBoundingClientRect().top < trigger) {
      card.classList.add("show");
    }
  });
});

// =====================why section================

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".why-track");
  const slides = document.querySelectorAll(".why-item");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const bar = document.querySelector(".why-bar");

  let index = 0;
  const total = slides.length;

  // ===== UPDATE SLIDER =====
  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;

    // progress bar
    bar.style.width = ((index + 1) / total) * 100 + "%";

    // active slide effect
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  // ===== INITIAL LOAD =====
  updateSlider();

  // ===== NEXT BUTTON =====
  nextBtn.addEventListener("click", () => {
    index++;
    if (index >= total) index = 0; // loop
    updateSlider();
  });

  // ===== PREV BUTTON =====
  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = total - 1; // loop back
    updateSlider();
  });
});
// =================================Services Page =================================
const services = document.querySelectorAll(".service-box");

services.forEach((box) => {
  box.querySelector(".service-header").addEventListener("click", () => {
    // close all
    services.forEach((b) => {
      b.classList.remove("active");
      b.querySelector(".toggle-icon").textContent = "+";
    });

    // open clicked
    box.classList.add("active");
    box.querySelector(".toggle-icon").textContent = "−";
  });
});

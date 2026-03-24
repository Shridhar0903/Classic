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

const track = document.querySelector(".why-track");
const slides1 = document.querySelectorAll(".why-item");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const bar = document.querySelector(".why-bar");

let index = 0;
const total = slides1.length;

/* UPDATE FUNCTION */
function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  bar.style.width = ((index + 1) / total) * 100 + "%";
}

/* NEXT */
nextBtn.addEventListener("click", () => {
  if (index < total - 1) {
    index++;
    updateSlider();
  }
});

/* PREV */
prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

/* OPTIONAL: AUTO SLIDE (premium feel) */
setInterval(() => {
  index = (index + 1) % total;
  updateSlider();
}, 5000);

const reveals = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-zoom",
);

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

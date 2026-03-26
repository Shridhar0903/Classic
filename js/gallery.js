// FILTER FUNCTION
const filterBtns = document.querySelectorAll(".filter-btns button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    galleryItems.forEach((item) => {
      if (filter === "all" || item.dataset.category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// LIGHTBOX FUNCTION
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");
const lightboxClose = document.getElementById("lightbox-close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const video = item.querySelector("video");

    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.style.display = "block";
      lightboxVideo.style.display = "none";
    } else if (video) {
      lightboxVideo.src = video.src;
      lightboxVideo.style.display = "block";
      lightboxImg.style.display = "none";
    }

    lightbox.classList.add("active");
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
  lightboxVideo.pause();
});

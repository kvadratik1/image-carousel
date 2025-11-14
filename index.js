const track = document.querySelector("#carousel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector("#btnPrev");
const nextButton = document.querySelector("#btnNext");

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateCarousel();
});

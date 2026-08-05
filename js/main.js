const allDetails = document.querySelectorAll("details");

allDetails.forEach((details) => {
  details.open = true;

  const summary = details.querySelector("summary");
  const wrapper = details.querySelector(".faq-answer-wrapper");

  summary.addEventListener("click", (event) => {
    event.preventDefault();
    details.classList.toggle("is-open");

    if (details.classList.contains("is-open")) {
      wrapper.style.maxHeight = wrapper.scrollHeight + "px";
    } else {
      wrapper.style.maxHeight = "0px";
    }
  });
});

const allCarousels = document.querySelectorAll(".carousel");

allCarousels.forEach((carousel) => {
  const images = carousel.querySelectorAll(".carousel-track img");
  const counter = carousel.querySelector(".carousel-counter");
  const prevBtn = carousel.querySelector(".carousel-prev");
  const nextBtn = carousel.querySelector(".carousel-next");

  let currentIndex = 0;

  function updateCarousel() {
    images.forEach((img, index) => {
      img.classList.toggle("active", index === currentIndex);
    });
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });
});

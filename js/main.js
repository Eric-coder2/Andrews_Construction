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

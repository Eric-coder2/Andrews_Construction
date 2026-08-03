const allDetails = document.querySelectorAll("details");

allDetails.forEach((details) => {
  details.open = true; // keeps content rendered permanently

  const summary = details.querySelector("summary");

  summary.addEventListener("click", (event) => {
    event.preventDefault();
    details.classList.toggle("is-open");
  });
});

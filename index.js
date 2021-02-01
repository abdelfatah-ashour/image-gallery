const slider = document.querySelectorAll(".slide");

function addOpen() {
  this.classList.toggle("open");
  this.classList.toggle("active");
  this.classList.toggle("opacity");
}
function removeToggle() {
  this.classList.remove("open");
  this.classList.remove("active");
  this.classList.remove("opacity");
}
slider.forEach((slide) => {
  slide.addEventListener("click", addOpen);
});
slider.forEach((slide) => {
  slide.addEventListener("mouseleave", removeToggle);
});

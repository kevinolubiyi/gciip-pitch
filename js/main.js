// main.js — simple enhancement for user interaction

document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("pitchVideo");

  // Log video play event (example: could be expanded for analytics)
  if (video) {
    video.addEventListener("play", () => {
      console.log("Pitch video started playing.");
    });
  }

  // Smooth scroll for internal anchor links (future-proof)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

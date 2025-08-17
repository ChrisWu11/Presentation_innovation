// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s ease-out forwards";
    }
  });
}, observerOptions);

document.querySelectorAll(".section, .innovation-card").forEach((element) => {
  observer.observe(element);
});

// Add presentation timer (16 minutes)
let startTime = Date.now();
const targetDuration = 16 * 60 * 1000; // 16 minutes in milliseconds

function updateTimer() {
  const elapsed = Date.now() - startTime;
  const remaining = Math.max(0, targetDuration - elapsed);
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  // You could add a timer display here if needed
  if (remaining > 0) {
    setTimeout(updateTimer, 1000);
  }
}

updateTimer();

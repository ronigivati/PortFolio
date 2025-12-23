// =======================================================
// 🎬 SCROLL REVEAL ANIMATIONS
// =======================================================

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Element is considered in viewport if at least 20% is visible
  return (
    rect.top <= windowHeight * 0.85 &&
    rect.bottom >= 0
  );
}

// Function to add reveal class to elements
function revealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');
  
  revealElements.forEach((element, index) => {
    if (isInViewport(element) && !element.classList.contains('revealed')) {
      // Add staggered delay based on index
      setTimeout(() => {
        element.classList.add('revealed');
      }, index * 100); // 100ms delay between each element
    }
  });
}

// Run on page load
window.addEventListener('DOMContentLoaded', () => {
  // Add reveal class to elements that should animate (removed .logo-card)
  const elementsToReveal = document.querySelectorAll('.strength-item, #tools h2, .strengths-header');
  
  elementsToReveal.forEach((element) => {
    element.classList.add('reveal');
  });
  
  // Initial check
  revealOnScroll();
  
  // Check on scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        revealOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
// =======================================================
// 🌊 WAVE TEXT ANIMATION - TITLE ONLY
// =======================================================

// Function to wrap each character in a span
function wrapTextInSpans(element) {
  const text = element.textContent;
  element.innerHTML = '';
  
  // Split text into individual characters
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    
    // Preserve spaces
    if (text[i] === ' ') {
      span.innerHTML = '&nbsp;';
    }
    
    element.appendChild(span);
  }
}

// Apply wave animation to hero title only
window.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title');
  
  // Apply wave animation only to title
  if (heroTitle) {
    heroTitle.classList.add('wave-text');
    wrapTextInSpans(heroTitle);
  }
  
  // Subtitle and description will use simple fade-up from CSS
});

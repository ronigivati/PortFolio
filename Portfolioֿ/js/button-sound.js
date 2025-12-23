// =======================================================
// 🔊 BUTTON HOVER SOUND EFFECTS
// =======================================================

// Function to play hover sound
function playHoverSound() {
  // Create new audio each time to allow multiple rapid plays
  const sound = new Audio();
  
  // Set the correct path based on current page location
  if (window.location.pathname.includes('/sections/')) {
    sound.src = '../sounds/ClickSound.mp3';
  } else {
    sound.src = 'sounds/ClickSound.mp3';
  }
  
  sound.volume = 0.3;
  sound.play().catch(err => {
    // Silently handle if autoplay is blocked
    console.log('Audio play prevented:', err);
  });
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Select all buttons and links with button class
  const buttons = document.querySelectorAll('button, .btn, a.navbar__link');
  
  // Add hover sound to each button
  buttons.forEach(button => {
    button.addEventListener('mouseenter', playHoverSound);
  });
  
  // Optional: Also add to project cards only
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', playHoverSound);
  });
  
  // Add sound to carousel arrow buttons
  const arrows = document.querySelectorAll('.carousel-btn, .prev-btn, .next-btn, button[class*="arrow"]');
  arrows.forEach(arrow => {
    arrow.addEventListener('mouseenter', playHoverSound);
  });
  
  // Add sound to social media icons
  const socialLinks = document.querySelectorAll('.social-media-banner a');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', playHoverSound);
  });
});
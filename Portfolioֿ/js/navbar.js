// טעינת ה-navbar לכל הדפים
document.addEventListener("DOMContentLoaded", () => {
  
  // טוען את ה-navbar
  fetch('../components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
      
      // מסמן את הדף הנוכחי
      const currentPage = document.body.getAttribute('data-page');
      if (currentPage) {
        const activeLink = document.querySelector(`nav a[data-page="${currentPage}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
});
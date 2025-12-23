document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    link.addEventListener("click", e => {
      const url = link.getAttribute("href");

      // קישורים חיצוניים לא עוברים אנימציה
      if (url.startsWith("http") || url.startsWith("#")) return;

      e.preventDefault();

      const transition = document.getElementById("page-transition");
      transition.classList.add("active");

      // אחרי שהאנימציה נפתחת - מעבר לדף
      setTimeout(() => {
        window.location.href = url;
      }, 1000); // חייב להתאים ל־CSS
    });
  });
});

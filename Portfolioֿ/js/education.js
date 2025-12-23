document.addEventListener("DOMContentLoaded", () => {

  const title = document.querySelector(".spark-title");
  if (!title) return;

  const letters = title.querySelectorAll("span");

  function play() {
    letters.forEach((l, i) => {
      l.style.animation = `writeLetter 0.4s forwards ${i * 0.12}s`;
    });

    setTimeout(() => {
      letters.forEach((l, i) => {
        l.style.animation = `deleteLetter 0.3s forwards ${i * 0.10}s`;
      });
    }, 2600);
  }

  play();
  setInterval(play, 4000);
});

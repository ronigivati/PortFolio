document.addEventListener("DOMContentLoaded", () => {

  const button = document.getElementById("main-button");
  const card = document.querySelector(".card");
  const banner = document.querySelector(".banner");
  const photo = document.querySelector(".photo");
  const list = document.querySelector(".card ul");
  const socials = document.querySelector(".social-media-banner");
  const form = document.querySelector(".email-form");

  button.addEventListener("click", () => {

    card.classList.toggle("active");
    banner.classList.toggle("active");
    photo.classList.toggle("active");
    list.classList.toggle("active");
    socials.classList.toggle("active");
    form.classList.toggle("active");

    button.textContent =
      button.textContent.trim() === "back"
        ? "click to get in touch"
        : "back";
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const thumbUpButtons = document.querySelectorAll("div > img:first-child");
  const thumbDownButtons = document.querySelectorAll("div > img:nth-child(3)");

  thumbUpButtons.forEach((button) => {
    let isThumbUpActive = false;

    button.addEventListener("click", () => {
      isThumbUpActive = !isThumbUpActive;
      button.style.filter = isThumbUpActive ? "brightness(0.5)" : "none";
    });
  });

  thumbDownButtons.forEach((button) => {
    let isThumbDownActive = false;

    button.addEventListener("click", () => {
      isThumbDownActive = !isThumbDownActive;
      button.style.filter = isThumbDownActive ? "brightness(0.5)" : "none";
    });
  });
});

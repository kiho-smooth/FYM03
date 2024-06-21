document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav_btn");

  navButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      navButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});

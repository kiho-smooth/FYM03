document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".material_filter li");

  filterItems.forEach((item) => {
    item.addEventListener("click", function () {
      filterItems.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
      console.log(this);
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const filterItems = document.querySelectorAll(".material_filter li");

//     filterItems.forEach((item) => {
//       item.addEventListener("click", function () {
//         filterItems.forEach((item) => item.classList.remove("active")); // 모든 li 요소에서 active 클래스 제거
//         this.classList.add("active"); // 클릭된 li 요소에 active 클래스 추가
//       });
//     });
//   });

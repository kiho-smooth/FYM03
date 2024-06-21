// 모달 열기 버튼, 모달, 모달 닫기 버튼 요소 가져오기
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");
var closeModalBtn = document.getElementById("closeModalBtn");

// 프리미엄 기능 요소들 가져오기
var premiumFeatures = document.querySelectorAll(".premium-feature");

// 모달 열기
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// 모달 닫기
closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

// 모달 바깥 영역 클릭 시 모달 닫기
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// 프리미엄 기능 클릭 시 모달 열기
premiumFeatures.forEach(function (feature) {
  feature.onclick = function () {
    modal.style.display = "block";
  };
});

const rowLevel_alert = document.querySelector(".mobile_alert");
["load", "resize"].forEach(function (event) {
  window.addEventListener(event, () => {
    h_tbl_wrap.forEach((e) => {
      if (e.querySelector(".h_tbl").offsetWidth > e.offsetWidth) {
        e.classList.add("scrolling");
      } else {
        e.classList.remove("scrolling");
      }
    });
    if (window.innerWidth < 1023) {
      mobile_alert.classList.add("on");
    } else {
      mobile_alert.classList.remove("on");
    }
  });
});

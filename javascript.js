// Function-Back-onTop

let mybutton = document.getElementById("myBtn");
let myNavigar = document.querySelectorAll(".Naviga-bar");
let canScroll = true;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (canScroll) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.opacity = 1;
    } else {
      mybutton.style.opacity = 0;
    }
  }
}

function topFunction() {
  canScroll = false; // Tạm dừng cuộn khi nhấp vào nút cuộn lên
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // Cho phép cuộn sau 1 khoảng thời gian nhất định (ví dụ: 1 giây)
  setTimeout(function () {
    canScroll = true;
  }, 800); // Đặt thời gian đợi ở đây, ví dụ 1000ms = 1 giây
}

// Ngăn chặn sự kiện cuộn trang khi biến canScroll = false
window.addEventListener(
  "wheel",
  function (e) {
    if (!canScroll) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  },
  { passive: false }
);

////////////////Menu-share//////

function menuShare(menuId) {
  var x = document.getElementById(menuId);
  x.classList.toggle("active");
}

///////////Search/////////
function searchFuntion(searchID) {
  var x = document.getElementById(searchID);
  x.classList.toggle("active");
}
document.addEventListener("click", function (event) {
  var searchElement = document.getElementById("search-funtion-1");
  var searchIcon = document.querySelector(".fa-magnifying-glass");
  // Kiểm tra xem người dùng có nhấp vào phần tử tìm kiếm hay biểu tượng tìm kiếm không
  if (
    !searchElement.contains(event.target) &&
    !searchIcon.contains(event.target)
  ) {
    searchElement.classList.remove("active");
  }
});

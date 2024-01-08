let mybutton = document.getElementById("button-ontop");
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
  canScroll = false;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  setTimeout(function () {
    canScroll = true;
    mybutton.style.opacity = 0; // Ẩn nút sau khi đã cuộn lên đầu trang
  }, 700);
}

// Menu-share
function menuShare(menuId) {
  var x = document.getElementById(menuId);
  x.classList.toggle("active");
}

// Search
function searchFuntion(searchID) {
  var input = document.getElementById(searchID);
  var searchIcon = document.querySelector(".search-icon");
  const activeSearch = document.querySelector(`.search-funtion.active`);

  input.classList.toggle("active");
  searchIcon.style.color = "red";

  if (activeSearch) {
    searchIcon.style.color = "black";
  }
}

document.addEventListener("click", function (event) {
  var searchElement = document.getElementById("search-funtion-1");
  var searchIcon = document.querySelector(".search-icon");

  // Kiểm tra xem người dùng có nhấp vào phần tử tìm kiếm hay biểu tượng tìm kiếm không
  if (
    !searchElement.contains(event.target) &&
    !searchIcon.contains(event.target)
  ) {
    searchIcon.style.color = "black";
    searchElement.classList.remove("active");
  }
});

//Focus-clear-value-search
function clearInputValue(element) {
  if (element.value === "Search and hit enter") {
    element.value = "";
  }
}
function resetInputValue(element) {
  if (element.value === "") {
    element.value = "Search and hit enter";
  }
}
// Function-close-open-menu-bar-mobile
function toggleMenuBar() {
  var menuBar = document.querySelector(".div-menu-bar-mobile-parent");
  if (!menuBar.classList.contains("close-menu-mobile")) {
    menuBar.classList.add("close-menu-mobile");
  } else {
    menuBar.classList.remove("close-menu-mobile");
  }
}

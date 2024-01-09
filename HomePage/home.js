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

// Search-web
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
// Search-mobile
function searchFuntionMobile(searchID) {
  var input = document.getElementById(searchID);
  var searchIcon = document.querySelector(".search-icon-mobile");
  const activeSearch = document.querySelector(`.search-funtion-mobile.active`);

  input.classList.toggle("active");
  searchIcon.style.color = "red";

  if (activeSearch) {
    searchIcon.style.color = "black";
  }
}

document.addEventListener("click", function (event) {
  var searchElement = document.getElementById("search-funtion-2");
  var searchIcon = document.querySelector(".search-icon-mobile");

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
  var dropdown = document.querySelector(".dropdown-content-mobile-dropdown");
  var dropdownsub = document.querySelector(".dropdown-content-mobile-sub");
  if (!menuBar.classList.contains("close-menu-mobile")) {
    menuBar.classList.add("close-menu-mobile");
  } else {
    menuBar.classList.remove("close-menu-mobile");
    dropdown.style.display = "none";
    dropdownsub.style.display = "none";
  }
}
// Dropdown-content-mobile
document.addEventListener("DOMContentLoaded", function () {
  var dropdownTrigger = document.querySelector(".dropdown-trigger");
  var dropdownContent = document.querySelector(
    ".dropdown-content-mobile-dropdown"
  );

  dropdownTrigger.addEventListener("click", function () {
    // Kiểm tra và thiết lập trạng thái hiển thị của dropdown content
    if (
      dropdownContent.style.display === "" ||
      dropdownContent.style.display === "none"
    ) {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });
});
//Function-back-menu-bar-mobile
function hideDropdown() {
  var dropdown = document.querySelector(".dropdown-content-mobile-dropdown");
  var menuParent = document.querySelector(".div-menu-bar-mobile-parent");
  dropdown.style.display = "none";
  menuParent.classList.add("div-menu-bar-mobile-parent");
}
// Dropdown-sub-menu---
document.addEventListener("DOMContentLoaded", function () {
  var dropdownTrigger = document.querySelector(".dropdown-trigger-sub");
  var dropdownContent = document.querySelector(".dropdown-content-mobile-sub");

  dropdownTrigger.addEventListener("click", function () {
    // Kiểm tra và thiết lập trạng thái hiển thị của dropdown content
    if (
      dropdownContent.style.display === "" ||
      dropdownContent.style.display === "none"
    ) {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });
});
//Function-back-menu-bar-mobile-sub
function hideDropdownSub() {
  var dropdown = document.querySelector(".dropdown-content-mobile-sub");
  var menuParent = document.querySelector(".div-menu-bar-mobile-parent");
  dropdown.style.display = "none";
  menuParent.classList.add("div-menu-bar-mobile-dropdown");
}
////////////////
var menuBar = document.querySelector(".div-menu-bar-mobile-parent");
var menuIsOpen = false;

// Xử lý sự kiện khi click vào phần tử menu để mở hoặc đóng menu
menuBar.addEventListener("click", function (event) {
  if (event.target === menuBar) {
    menuIsOpen = !menuIsOpen;
    if (menuIsOpen) {
      menuBar.classList.remove("close-menu-mobile");
    } else {
      menuBar.classList.add("close-menu-mobile");
    }
  }
});

// Xử lý sự kiện khi click ra ngoài menu để đóng menu
document.addEventListener("click", function (event) {
  if (!menuBar.contains(event.target) && menuIsOpen) {
    menuBar.classList.add("close-menu-mobile");
    menuIsOpen = false;
    // Ẩn dropdown và dropdownsub nếu cần thiết
    var dropdown = document.querySelector(".dropdown-content-mobile-dropdown");
    var dropdownsub = document.querySelector(".dropdown-content-mobile-sub");
    dropdown.style.display = "none";
    dropdownsub.style.display = "none";
  }
});

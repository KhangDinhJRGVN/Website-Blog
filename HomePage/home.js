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
  var dropdownmegamenu = document.querySelector(
    ".dropdown-content-mobile-megamenu"
  );
  if (!menuBar.classList.contains("close-menu-mobile")) {
    menuBar.classList.add("close-menu-mobile");
  } else {
    menuBar.classList.remove("close-menu-mobile");
    dropdown.style.display = "none";
    dropdownsub.style.display = "none";
    dropdownmegamenu.style.display = "none";
  }
}
// Click ra ngoài thì đóng menu bar mobile
const content = document.querySelector(".div-parent-content");

content.addEventListener("click", function () {
  var menuBar = document.querySelector(".div-menu-bar-mobile-parent");
  menuBar.classList.add("close-menu-mobile");
});

// Dropdown-content-mobile-dropdown
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
//Dropdown-menu-mega
document.addEventListener("DOMContentLoaded", function () {
  var dropdownTrigger = document.querySelector(".dropdown-trigger-megamenu");
  var dropdownContent = document.querySelector(
    ".dropdown-content-mobile-megamenu"
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
//Function-back-menu-mega
function hideDropdownMegamenu() {
  var dropdown = document.querySelector(".dropdown-content-mobile-megamenu");
  var menuParent = document.querySelector(".div-menu-bar-mobile-parent");
  dropdown.style.display = "none";
  menuParent.classList.add("div-menu-bar-mobile-parent");
}

/////Block-Scroll-menu-bar
const menuBar = document.querySelector(".div-menu-bar-mobile-parent");
menuBar.addEventListener("mouseenter", () => {
  // Ngăn chặn cuộn trang khi hover vào phần tử
  document.body.style.overflow = "hidden";
});
menuBar.addEventListener("mouseleave", () => {
  // Kích hoạt lại cuộn trang khi rời khỏi phần tử
  document.body.style.overflow = "";
});

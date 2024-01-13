// Menu Toggle
const menuToggle = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Close Button
function toggleMenu() {
  var menuBtn = document.querySelector('.menuBtn');
  var closeBtn = document.querySelector(".closeBtn");  
  if(closeBtn.style.display == "block") { 
    closeBtn.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    closeBtn.style.display = "block";
  }
}

// Navbar Scrolling
const scrollingNavbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  scrollingNavbar.classList.toggle("scrolling-active", windowPosition);
});

// DROPDOWN MENU

// get all dropdowns from the document
const dropdowns = document.querySelectorAll(".dropdown");

//loop through all dropdown elements
dropdowns.forEach((dropdown) => {
  //get inner elements from each dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    // add the clicked select styles to the select element
    select.classList.toggle("select-clicked");
    // add the rotate styles to the caret element
    caret.classList.toggle("caret-rotate");
    // add the open styles to the menu element
    menu.classList.toggle("menu-open");
  });

  // loop through all option element
  options.forEach((option) => {
    // add a click event to the option element
    option.addEventListener("click", () => {
      // change selected inner text to clicked option inner text
      selected.innerText = option.innerText;
      // add the clicked select styles to the select element
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      // remove active class from all option elements
      options.forEach((option) => {
        option.classList.remove("active");
      });
      // add active class to clicked option element
      option.classList.add("active");
    });
  });
});

// <!-- Top-Carousel -->
var swiper = new Swiper(".top-carousel", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    1120: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 15,
  slidesPerView: 3,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Event
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 85;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

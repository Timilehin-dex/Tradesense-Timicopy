window.addEventListener("scroll", function () {
  const header = document.getElementById("head");
  if (window.scrollY > 30) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
// window.addEventListener("scroll", function () {
//   var element = document.getElementById("element");
//   // Change the background color based on scroll position
//   if (window.scrollY > 100) {
//     element.style.backgroundColor = "red";
//   } else {
//     element.style.backgroundColor = "blue";
//   }
// });
window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll("header");
  elements.forEach(function (element) {
    if (window.scrollY > 30) {
      element.style.padding = "15px 0px";
    } else {
      element.style.padding = "30px 0px";
    }
  });
});
// function toggleDiv() {
//   var div = document.getElementById('myDiv');
//   // Check if the div is currently visible or hidden
//   if (div.style.display === 'none') {
//     // If it's hidden, show it
//     div.style.display = 'block';
//   } else {
//     // If it's visible, hide it
//     div.style.display = 'none';
//   }
// }
function toggleOpen() {
  const menu = document.querySelector(".menu-list");
  menu.style.right = 0;
}
function toggleClose() {
  const menu = document.querySelector(".menu-list");
  menu.style.right = "-100%";
}
//
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$("#first-carousel").owlCarousel({
  dots: true,
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 2000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});
$("#fourth-carousel").owlCarousel({
  dots: true,
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 2000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
      // loop: false,
    },
  },
});

let search = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
  search.classList.toggle('active');
  cart.classList.remove('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
  search.classList.remove('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  login.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  login.classList.remove('active');
}

window.onscroll = () =>{
  login.classList.remove('active');
  navbar.classList.remove('active');
  cart.classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
  spaceBetween:20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    991:{
      slidesPerView: 3,
    },
  },
});
  // Get all sections that have an ID defined.
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll.
window.addEventListener("scroll", navHighlighter);

// Function to highlight the active navigation link.
function navHighlighter() {
  // Get current scroll position.
  let scrollY = window.scrollY;

  // Loop through sections to get height, top and ID values for each.
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop;
    const sectionId = section.id;

    // If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it.
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      navLink.classList.add("active");
    } else {
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      navLink.classList.remove("active");
    }
  });
}


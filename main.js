const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// booking
document.getElementById('booking-form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  
  const checkInDate = new Date(document.getElementById('check-in').value);
  const checkOutDate = new Date(document.getElementById('check-out').value);
  const guestCount = document.getElementById('guest').value;

  
  if (checkOutDate <= checkInDate) {
      alert('Checkout date must be later than the checkin date!');
      return;
  }

  
  if (!guestCount || isNaN(guestCount) || guestCount <= 0) {
      alert('Please enter a valid number of guests.');
      return;
  }

  
  alert(`Booking confirmed! \nGuests: ${guestCount} \nCheck-in Date: ${checkInDate.toDateString()} \nCheck-out Date: ${checkOutDate.toDateString()}`);
   
});
// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// review container

ScrollReveal().reveal(".review__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
          navLinks.forEach(links =>{
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
          });
      };
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,.portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "photographer", "graphic designer", "writer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwCVsEQGr8cvT7yN3G16tXNIuYomFK-9hEgkUQFma1W3qafnpaz4b2y9ZOsrtLxk-j-AA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
  form.reset();
});

const cursorDot=document.querySelector("[data-cursor-dot]");
const cursorOutline= document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){

  const posX=e.clientX;
  const posY=e.clientY;

  cursorDot.style.left=`${posX}px`;
  cursorDot.style.top=`${posY}px`;

  cursorOutline.animate({
    left:`${posX}px`,
    top:`${posY}px`
  },{duration:500,fill:"forwards"});

});

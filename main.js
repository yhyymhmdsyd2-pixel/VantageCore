// jjj
// 1️⃣ Variables
let links = document.querySelectorAll("ul li a");

links.forEach((link) => {
  // 3️⃣ Functions + Events
  link.onclick = function () {
    // 4️⃣ forEach
    links.forEach((a) => a.classList.remove("li-color"));
    this.classList.add("li-color");
  };
});

// ;;;
// 1️⃣ Variables
let feat = document.querySelectorAll(".fade-in");
// 2️⃣ Events +Functions

window.addEventListener("load", function () {
  // 3️⃣ Functions + forEach
  feat.forEach(function (e, i) {
    setTimeout(() => {
      e.classList.add("show");
    }, 200 * i);
  });
});

// lll
// 1️⃣ Variables
let burger = document.querySelector(".prent-header .i-none");
let ulnone = document.querySelector("ul");
// 2️⃣ Functions + 3️⃣ Events
burger.onclick = function () {
  ulnone.classList.toggle("active");
};

// lll
// 1️⃣ Variables
let years = document.querySelector(".years");
// 2️⃣ Date
years.textContent = new Date().getFullYear();

// ...animateSlider

let slider = document.querySelector(".Features-contener");
let track = document.querySelector(".Features-gruob-right");

track.innerHTML += track.innerHTML;

document.querySelectorAll(".Features-box-flex").forEach((el) => {
  el.classList.add("show");
});

let speed = 0.5;
let panusd = false;

let slides = document.querySelector(".Features-box-flex");
slides = slides.offsetWidth + 20;

slider.scrollLeft = 0;

function animateSlider() {
  if (!panusd) slider.scrollLeft -= speed;

  if (slider.scrollLeft <= 0) {
    slider.scrollLeft = track.scrollWidth / 2;
  }
  requestAnimationFrame(animateSlider);
}
animateSlider();

slider.addEventListener("mouseenter", () => (speed = 0));
slider.addEventListener("mouseleave", () => (speed = 1));

document.querySelector(".right-Features").addEventListener("click", () => {
  panusd = true;
  slider.scrollBy({
    left: slides,
    behavior: "smooth",
  });
  setTimeout(() => {
    panusd = false;
  }, 1500);
});

document.querySelector(".left-Features").addEventListener("click", () => {
  panusd = true;
  slider.scrollBy({
    left: -slides,
    behavior: "smooth",
  });
  setTimeout(() => {
    panusd = false;
  }, 1500);
});
// Image

let sliderimg = document.querySelector(".Testimonials-contener");
let trackimg = document.querySelector(".Testimonials-gruob-img");
trackimg.innerHTML += trackimg.innerHTML;

document.querySelectorAll(".Testimonials-box-flex").forEach((slide) => {
  slide.classList.add("show");
});

let speedimg = 1;
let isManual = false;
sliderimg.scrollLeft = 0;

let slid = document.querySelector(".Testimonials-box-flex");
let slidewidth = slid.offsetWidth + 20;

function animateSliderimg() {
  if (!isManual) sliderimg.scrollLeft += speedimg;

  if (sliderimg.scrollLeft >= trackimg.scrollWidth / 2) {
    sliderimg.scrollLeft = 0;
  }

  requestAnimationFrame(animateSliderimg);
}

animateSliderimg();

sliderimg.addEventListener("mouseenter", () => (speedimg = 0));
sliderimg.addEventListener("mouseleave", () => (speedimg = 0.5));

document.querySelector(".right-Testimonials").addEventListener("click", () => {
  isManual = true;
  sliderimg.scrollBy({
    left: slidewidth,
    behavior: "smooth",
  });
  setTimeout(() => {
    isManual = false;
  }, 1500);
});

document.querySelector(".left-Testimonials").addEventListener("click", () => {
  isManual = true;
  sliderimg.scrollBy({
    left: -slidewidth,
    behavior: "smooth",
  });
  setTimeout(() => {
    isManual = false;
  }, 1500);
});

let bottom = document.querySelectorAll(".fade-in");
let scaleX = document.querySelectorAll(".fade-in-scaleX");
let fadetop = document.querySelectorAll(".fade-in-top");
let right = document.querySelectorAll(".fade-in-right");
let left = document.querySelectorAll(".fade-in-left");
let observer = new IntersectionObserver(
  (inters) => {
    inters.forEach((inter) => {
      if (inter.isIntersecting) {
        inter.target.classList.add("show");
      }
    });
  },
  { threshold: 0.5 }
);

[...right, ...left, ...fadetop, ...bottom, ...scaleX].forEach((el) => {
  observer.observe(el);
});

let section = document.querySelector(".prent-contener");
let sectionadd = document.querySelector(".prent-header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop) {
    sectionadd.classList.add("color");
  }
  if (window.screenY >= sectionadd.offsetTop) {
    sectionadd.classList.remove("color");
  }
});

let links = document.querySelectorAll("ul li a");

links.forEach((link) => {
  // 3️⃣ Functions + Events
  link.onclick = function () {
    // 4️⃣ forEach
    links.forEach((a) => a.classList.remove("li-color"));
    this.classList.add("li-color");
  };
});

let other = document.querySelector(".Other-Services");
let otherp = document.querySelector(".Other");

otherp.onclick = function () {
  other.classList.toggle("opacty");
};

let burger = document.querySelector(".prent-header .i-none");
let ulnone = document.querySelector("ul");

burger.onclick = function () {
  ulnone.classList.toggle("active");
};

// lll;
// 1️⃣ Variables
let years = document.querySelector(".years");
// 2️⃣ Date
years.textContent = new Date().getFullYear();

const slider = document.querySelector(".Features-contener");
const track = document.querySelector(".Features-gruob-right");

track.innerHTML += track.innerHTML;

document.querySelectorAll(".Features-box-flex").forEach((el) => {
  el.classList.add("show");
});

let speed = 0.6;
let paused = false;
let position = 0;

const slide = document.querySelector(".Features-box-flex");
const slideWidth = slide.offsetWidth + 20;

const isRTL = getComputedStyle(document.body).direction === "rtl";
const direction = isRTL ? 1 : -1;

function animate() {
  if (!paused) {
    position += speed * direction;
    track.style.transform = `translateX(${position}px)`;
  }

  const resetPoint = -(track.scrollWidth / 2);

  if (!isRTL && position <= resetPoint) {
    position = 0;
  }

  if (isRTL && position >= -resetPoint) {
    position = 0;
  }

  requestAnimationFrame(animate);
}

animate();

/* hover pause */
slider.addEventListener("mouseenter", () => (paused = true));
slider.addEventListener("mouseleave", () => (paused = false));

/* buttons */
document.querySelector(".left-Features").addEventListener("click", () => {
  paused = true;
  position += slideWidth * direction * -1;
  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(${position}px)`;

  setTimeout(() => {
    track.style.transition = "none";
    paused = false;
  }, 400);
});

document.querySelector(".right-Features").addEventListener("click", () => {
  paused = true;
  position += slideWidth * direction;
  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(${position}px)`;

  setTimeout(() => {
    track.style.transition = "none";
    paused = false;
  }, 400);
});

// Image

const testiContainer = document.querySelector(".Testimonials-contener");
const testiTrack = document.querySelector(".Testimonials-gruob-img");

// duplicate content
testiTrack.innerHTML += testiTrack.innerHTML;

// show animation
document.querySelectorAll(".Testimonials-box-flex").forEach((item) => {
  item.classList.add("show");
});

/* state */
let testiSpeed = 0.6;
let testiPaused = false;
let testiPosition = 0;

/* slide size */
const testiSlide = document.querySelector(".Testimonials-box-flex");
const testiSlideWidth = testiSlide.offsetWidth + 20;

/* direction (can change anytime) */
let testiDir = getComputedStyle(document.body).direction === "rtl" ? -1 : 1;

/* limit */
const testiLimit = testiTrack.scrollWidth / 2;

/* animation loop */
function testiAnimate() {
  if (!testiPaused) {
    testiPosition += testiSpeed * testiDir;

    // 🔁 infinite wrap (never disappears)
    testiPosition = ((testiPosition % testiLimit) + testiLimit) % testiLimit;

    testiTrack.style.transform = `translateX(${testiPosition}px)`;
  }

  requestAnimationFrame(testiAnimate);
}

testiAnimate();

/* hover pause */
testiContainer.addEventListener("mouseenter", () => (testiPaused = true));
testiContainer.addEventListener("mouseleave", () => (testiPaused = false));

/* buttons */
document.querySelector(".right-Testimonials").addEventListener("click", () => {
  testiPaused = true;

  testiPosition += testiSlideWidth * testiDir;
  testiTrack.style.transition = "transform 0.4s ease";
  testiTrack.style.transform = `translateX(${testiPosition}px)`;

  setTimeout(() => {
    testiTrack.style.transition = "none";
    testiPaused = false;
  }, 1400);
});

document.querySelector(".left-Testimonials").addEventListener("click", () => {
  testiPaused = true;

  testiPosition -= testiSlideWidth * testiDir;
  testiTrack.style.transition = "transform 0.4s ease";
  testiTrack.style.transform = `translateX(${testiPosition}px)`;

  setTimeout(() => {
    testiTrack.style.transition = "none";
    testiPaused = false;
  }, 1400);
});

document.querySelectorAll(".faq-question-img").forEach((item) => {
  item.addEventListener("click", () => {
    const faqItem = item.closest(".faq-question");

    const answer = faqItem.querySelector(".faq-answer");
    answer.classList.toggle("top-answer");

    item.classList.toggle("hoverall");

    const img = item.querySelector("img");
    img.classList.toggle("ainmation");

    const icon = item.querySelector(".faq-icon");
    icon.textContent = icon.textContent === "+" ? "-" : "+";
  });
});

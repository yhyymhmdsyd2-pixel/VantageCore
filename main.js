let links = document.querySelectorAll("ul li a");

links.forEach((link) => {
  link.onclick = function () {
    links.forEach((a) => a.classList.remove("color"));
    this.classList.add("color");
  };
});

let feat = document.querySelectorAll(".fade-in");
window.addEventListener("load", function () {
  feat.forEach(function (e, i) {
    setTimeout(() => {
      e.classList.add("show");
    }, 200 * i);
  });
});

let burger = document.querySelector(".header .none");
let ulnone = document.querySelector("ul");

burger.onclick = function () {
  ulnone.classList.toggle("smalle");
};

let years = document.querySelector(".years");

years.textContent = new Date().getFullYear();

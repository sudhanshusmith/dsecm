// JavaScript to toggle navbar visibility on small screens
const hamburger = document.getElementById("hamburger");
const phone_menu = document.getElementById("phone_menu");
hamburger.addEventListener("click", function () {
  phone_menu.classList.toggle("hidden");
});

// JavaScript to close navbar when a menu item is clicked
const menuItems = document.querySelectorAll(".menu_item");
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    phone_menu.classList.toggle("hidden");
  });
});

// JavaScript to change the text in the main heading
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.getElementById("changingText");
  const texts = [
    "A major initiative for skillful simulation and projection of India's climate",
    "Developing a modeling framework for fine scale projections of India’s future climate to assess the impact of climate change on different sectors",
    "Addressing unique issues of climate variability, change and sectoral impacts in India",
    "Educating a new generation of researchers in numerical modeling of the Earth’s system",
  ];
  paragraph.textContent = texts[3];
  let currentIndex = 0;

  setInterval(function () {
    paragraph.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }, 2000);
});

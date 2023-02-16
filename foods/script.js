const navbar = document.getElementById("navbar");
const varietyOfFoodsIcons = document.getElementsByClassName(
  "variety-of-foods-icons-container"
)[0].children;
let activeIconIndex = 0;
const varietyOfFoodsIconsLength = varietyOfFoodsIcons.length;
const togglenav = () => {
  navbar.classList.toggle("open");
};

setInterval(function () {
  varietyOfFoodsIcons[activeIconIndex].classList.remove("active");
  if (activeIconIndex < varietyOfFoodsIconsLength - 1) {
    activeIconIndex++;
  } else {
    activeIconIndex = 0;
  }
  varietyOfFoodsIcons[activeIconIndex].classList.add("active");
}, 2000);

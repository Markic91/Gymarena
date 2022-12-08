const icon = document.querySelector(".fa-bars");
const navListMobile = document.querySelector(".navlist-mobile");

icon.addEventListener("click", function () {
  navListMobile.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
});

let extendImage = document.querySelector(".photoSalle");
let info1 = document.querySelector(".info1");
let info2 = document.querySelector(".info2");
if (window.screen.width > "1111") {
  extendImage.addEventListener("click", function () {
    extendImage.classList.toggle("photo-extend");
    info1.classList.toggle("blurzone");
    info2.classList.toggle("blurzone");
  });
}


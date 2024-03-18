let items = document.querySelectorAll(".slider .slider-list .slider-item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
   itemActive = itemActive + 1;
   if (itemActive >= countItem) {
      itemActive = 0;
   }
   showSlider();
}

prev.onclick = function () {
   itemActive = itemActive - 1;
   if (itemActive < 0) {
      itemActive = countItem - 1;

   }
   showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
   next.click();
}, 5000)


function showSlider() {
   // remove item active old
   let itemActiveOld = document.querySelector(".slider .slider-list .slider-item.active");
   itemActiveOld.classList.remove("active");

   // active new item
   items[itemActive].classList.add("active");

   // clear auto time run slider
   clearInterval(refreshInterval);
   refreshInterval = setInterval(() => {
      next.click();
   }, 5000)

}


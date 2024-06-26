// Main Slider

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

// Video Slider

let viditems = document.querySelectorAll(".vidslider .vidslider-list .vidslider-item");
let vidnext = document.getElementById("vidnext");
let vidprev = document.getElementById("vidprev");


let vidcountItem = viditems.length;
let viditemActive = 0;

vidnext.onclick = function () {
   viditemActive = viditemActive + 1;
   if (viditemActive >= vidcountItem) {
      viditemActive = 0;
   }
   showVidSlider();
}

vidprev.onclick = function () {
   viditemActive = viditemActive - 1;
   if (viditemActive < 0) {
      viditemActive = vidcountItem - 1;

   }
   showVidSlider();
}

// auto run slider
let refreshVidInterval = setInterval(() => {
   vidnext.click();
}, 10000)


function showVidSlider() {
   // remove item active old
   let viditemActiveOld = document.querySelector(".vidslider .vidslider-list .vidslider-item.active");
   viditemActiveOld.classList.remove("active");

   // active new item
   viditems[viditemActive].classList.add("active");

   // clear auto time run slider
   clearInterval(refreshVidInterval);
   refreshVidInterval = setInterval(() => {
      vidnext.click();
   }, 10000)

}



// Logos Slider

let copy = document.querySelector(".eqip__logos-slide").cloneNode(true);
document.querySelector(".eqip__logos").appendChild(copy);



// Menu-burger

let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header-menu__icon");

let body = document.body;

if (menu && menuBtn) {
   menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active")
      menuBtn.classList.toggle("active")
      body.classList.toggle("lock")
   })

   menu.querySelectorAll(".header-menu__link").forEach(link => {
      link.addEventListener("click", () => {
         menu.classList.remove("active")
         menuBtn.classList.remove("active")
         body.classList.remove("lock")
      })
   })
}

// Smooth schroll

let anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchors => {
   anchors.addEventListener("click", event => {
      event.preventDefault();

      let blockID = anchors.getAttribute("href").substring(1);

      document.getElementById(blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
})





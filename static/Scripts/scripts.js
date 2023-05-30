// count down section
var countDownDate = new Date("Jul 26, 2024 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("more-days").innerHTML = "EXPIRED";
  }
}, 1000);

// background photo change section
(function () {
  var images = [
    "background1.jpeg",
    "background2.jpeg",
    "background3.jpeg",
    "background4.jpeg",
    "background5.jpeg",
    "background6.jpeg",
    "background.jpeg",
  ];
  var curImgId = 0;
  var numberOfImages = images.length;
  window.setInterval(function () {
    document.getElementsByTagName(
      "body"
    )[0].style.backgroundImage = `url("/static/Images/${images[curImgId]}")`;
    curImgId = (curImgId + 1) % numberOfImages;
  }, 5 * 1000);
})();

// sidebar open close section
var is_open = false;

function openNav() {
  document.getElementById("sidebar").style.minWidth = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  if (is_open) {
    closeNav();
  } else {
    is_open = true;
  }
}

function closeNav() {
  document.getElementById("sidebar").style.minWidth = "0px";
  document.getElementById("main").style.marginLeft = "0px";
  is_open = false;
}

function showhide(id) {
  const element = document.getElementById(id);

  if (window.getComputedStyle(element).getPropertyValue("display") == "none") {
    element.classList.remove("hidden");
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
    element.classList.add("hidden");
  }
}

// background photo change section
// (function () {
//   var images = [
//     "background1.jpeg",
//     "background2.jpeg",
//     "background3.jpeg",
//     "background4.jpeg",
//     "background5.jpeg",
//     "background6.jpeg",
//     "background.jpeg",
//   ];
//   var curImgId = 0;
//   var numberOfImages = images.length;
//   window.setInterval(function () {
//     document.getElementsByTagName(
//       "body"
//     )[0].style.backgroundImage = `url("/static/Images/${images[curImgId]}")`;
//     curImgId = (curImgId + 1) % numberOfImages;
//   }, 5 * 1000);
// })();

function dynamicallyAddHTMLFile(filename) {
  fetch(`./components/${filename}`)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.body.insertAdjacentHTML("beforeend", html);
    });
}

function dynamicallyAddJSFile(filename) {
  // Dynamically add js files
  var script = document.createElement("script");
  script.src = `./static/Scripts/${filename}`;
  script.defer = true;
  document.body.appendChild(script);
}

function insertToMiddle(sectionId, filename) {
  fetch(`./components/${filename}`)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById(sectionId).insertAdjacentHTML("beforeend", html);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  dynamicallyAddHTMLFile("sidebar.html");
  dynamicallyAddHTMLFile("main.html");
  dynamicallyAddJSFile("sidebar.js");
  insertToMiddle("headSection", "countdown.html");
  dynamicallyAddJSFile("countdown.js");
  insertToMiddle("contentSection", "home.html");
  insertToMiddle("contentSection", "slideshow.html");
  dynamicallyAddJSFile("slideshow.js");
  insertToMiddle("contentSection", "faq_question.html");
  dynamicallyAddJSFile("faq_question.js");
});

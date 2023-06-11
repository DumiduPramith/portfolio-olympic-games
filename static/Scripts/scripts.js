import {
  dynamicallyAddHTMLFile,
  dynamicallyAddJSFile,
  insertToMiddle,
} from "./common.js";

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

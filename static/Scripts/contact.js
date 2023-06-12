import {
  dynamicallyAddHTMLFile,
  dynamicallyAddJSFile,
  insertToMiddle,
} from "./common.js";

document.addEventListener("DOMContentLoaded", function () {
  dynamicallyAddHTMLFile("sidebar.html");
  dynamicallyAddHTMLFile("main.html");
  dynamicallyAddJSFile("sidebar.js");
  dynamicallyAddJSFile("main.js");
  insertToMiddle("headSection", "contact_form.html");
  dynamicallyAddJSFile("contact_form_control.js");
});

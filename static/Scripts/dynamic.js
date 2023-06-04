// function handleUrlChange() {
//   // Get the current URL
//   var currentURL = window.location.href;
//   // Check if the URL contains a specific parameter or path
//   if (currentURL.includes("#contact") || currentURL.endsWith("/")) {
//     fetch("./components/countdown.html")
//       .then(function (response) {
//         return response.text();
//       })
//       .then(function (html) {
//         document.getElementById("headSection").innerHTML = html;
//       });
//     fetch("./components/home.html")
//       .then(function (response) {
//         return response.text();
//       })
//       .then(function (html) {
//         document.getElementById("contentSection").innerHTML = html;
//       });
//   } else if (currentURL.includes("/contact-us")) {
//     fetch("./components/contact.html")
//       .then(function (response) {
//         return response.text();
//       })
//       .then(function (html) {
//         document.getElementById("headSection").innerHTML = html;
//       });
//   }
// }
// handleUrlChange();

// window.addEventListener("hashchange", handleUrlChange);
// window.addEventListener("popstate", handleUrlChange);

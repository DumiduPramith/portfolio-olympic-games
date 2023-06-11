export function dynamicallyAddHTMLFile(filename) {
  fetch(`./components/${filename}`)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.body.insertAdjacentHTML("beforeend", html);
    });
}

export function dynamicallyAddJSFile(filename) {
  // Dynamically add js files
  var script = document.createElement("script");
  script.src = `./static/Scripts/${filename}`;
  script.defer = true;
  document.body.appendChild(script);
}

export function insertToMiddle(sectionId, filename) {
  fetch(`./components/${filename}`)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById(sectionId).insertAdjacentHTML("beforeend", html);
    });
}

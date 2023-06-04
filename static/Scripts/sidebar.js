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

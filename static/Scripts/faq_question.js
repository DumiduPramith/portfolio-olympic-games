function showhide(id) {
  const element = document.getElementById(id);
  if (window.getComputedStyle(element).getPropertyValue("display") == "none") {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

function navigate(event) {
  event.preventDefault();
  if (window.location.pathname === "/") {
    const section = document.querySelector(event.target.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/";
    const section = document.querySelector(event.target.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  }
}

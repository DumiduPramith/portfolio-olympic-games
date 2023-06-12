function sendMassage() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  console.log(name.value);
  if (/[0-9]/.test(name.value)) {
    let err = document.getElementById("err_username");
    err.classList.remove("d-none");
  } else {
    swal("Awesome", "Your massage has been successfully received").then(
      function () {
        window.location = "/";
      }
    );
  }
}

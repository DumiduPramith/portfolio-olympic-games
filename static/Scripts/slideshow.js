var curImgId = 1;
function plusSlides(number) {
  const image_name = "img";
  const total_images = 6;

  const element = document.getElementsByClassName("carousel")[0];
  if (number > 0) {
    if (curImgId < total_images) {
      curImgId += 1;
    } else {
      curImgId = 1;
    }
    let path = `static/Images/img${curImgId}.jpeg`;
    element.src = path;
  } else {
    if (curImgId === 1) {
      curImgId = 6;
    } else {
      curImgId -= 1;
    }
    let path = `static/Images/img${curImgId}.jpeg`;
    element.src = path;
  }
}

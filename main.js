document.addEventListener("DOMContentLoaded", function () {
  function showImage() {
    const image = document.getElementById("birthdayImage");
    if (image) {
      image.style.display = "block";
    } else {
      console.error('Image element with ID "birthdayImage" not found.');
    }
  }

  // Attach the event listener to the button
  const button = document.querySelector(".btn");
  if (button) {
    button.addEventListener("click", showImage);
  } else {
    console.error('Button with class "btn" not found.');
  }
});

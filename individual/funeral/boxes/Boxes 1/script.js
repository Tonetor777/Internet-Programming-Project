//image gallery
let currentIndex = 0;
const images = ["image1.jpg", "image2.jpeg", "image3.jpeg"];

function scrollGallery(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const imageElement = document.querySelector(".gallery-image");
  imageElement.src = images[currentIndex];
}
//stars in the rating
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const ratingElement = document.getElementById("rating");

  stars.forEach(function (star) {
    star.addEventListener("mouseover", function () {
      const ratingValue = star.getAttribute("data-value");
      ratingElement.classList.remove("rated");
      for (let i = 0; i < stars.length; i++) {
        if (i < ratingValue) {
          stars[i].style.color = "#ffcc00"; // Yellow for selected stars
        } else {
          stars[i].style.color = "#ddd"; // Empty star color for the rest
        }
      }
    });

    star.addEventListener("click", function () {
      const ratingValue = star.getAttribute("data-value");
      ratingElement.classList.add("rated");
      for (let i = 0; i < stars.length; i++) {
        if (i < ratingValue) {
          stars[i].style.color = "#ffcc00"; // Yellow for selected stars
        } else {
          stars[i].style.color = "#ddd"; // Empty star color for the rest
        }
      }
    });
  });
});

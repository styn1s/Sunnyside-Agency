var iconHamburger = document.getElementById("icon-hamburger");
var dropdownMenu = document.querySelector(".dropdown-menu");

function updateImages() {
  var windowWidth = window.innerWidth;
  var images = document.querySelectorAll(".changeable-image");
  var mainSection = document.getElementById("main-section");
  var graphicDesignCard = document.getElementById("card-1");
  var photographyDesignCard = document.getElementById("card-2");

  if (windowWidth <= 768) {
    if (windowWidth <= 490) {
      changeToMobileImages(mainSection, graphicDesignCard, photographyDesignCard);
    } else {
      changeToDesktopImages(mainSection, graphicDesignCard, photographyDesignCard);
    }

    images.forEach(function (image, index) {
      var imageName = image.src.split("/").pop();
      var mobileImagePath = "./images/mobile/" + imageName;
      image.src = mobileImagePath;
    });
  } else {
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    }

    images.forEach(function (image, index) {
      var imageName = image.src.split("/").pop();
      var desktopImagePath = "./images/desktop/" + imageName;
      image.src = desktopImagePath;
    });
  }
}

function toggleMobileMenu(event) {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

function changeBackgroundImage(element, imageUrl) {
  element.style.backgroundImage = `url(${imageUrl})`;
}

function changeToMobileImages(mainSection, graphicDesignCard, photographyDesignCard) {
  changeBackgroundImage(mainSection, "./images/mobile/image-header.jpg");
  changeBackgroundImage(
    graphicDesignCard,
    "./images/mobile/image-graphic-design.jpg"
  );
  changeBackgroundImage(
    photographyDesignCard,
    "./images/mobile/image-photography.jpg"
  );
}

function changeToDesktopImages(mainSection, graphicDesignCard, photographyDesignCard) {
  changeBackgroundImage(mainSection, "./images/desktop/image-header.jpg");
  changeBackgroundImage(
    graphicDesignCard,
    "./images/desktop/image-graphic-design.jpg"
  );
  changeBackgroundImage(
    photographyDesignCard,
    "./images/desktop/image-photography.jpg"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  updateImages();
  window.addEventListener("resize", updateImages);
  iconHamburger.addEventListener("click", toggleMobileMenu);
});

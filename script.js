var config = {
  desktopImages: {
    heroSection: "./images/desktop/image-header.jpg",
    graphicDesignCard: "./images/desktop/image-graphic-design.jpg",
    photographyDesignCard: "./images/desktop/image-photography.jpg",
  },
  mobileImages: {
    heroSection: "./images/mobile/image-header.jpg",
    graphicDesignCard: "./images/mobile/image-graphic-design.jpg",
    photographyDesignCard: "./images/mobile/image-photography.jpg",
  },
};

const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");

function updateImages() {
  var windowWidth = window.innerWidth;
  var isMobile = windowWidth <= 768;
  var images = document.querySelectorAll(".changeable-image");

  var imageSet = isMobile ? config.mobileImages : config.desktopImages;
  
  updateBackgroundImages(imageSet);
  updateGalleryImages(images, isMobile);

  if (!isMobile && mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  }
}

function toggleMobileMenu() {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

function updateGalleryImages(images, isMobile) {
  images.forEach((image) => {
    var imageName = image.src.split("/").pop();
    image.src = `./images/${isMobile ? "mobile" : "desktop"}/${imageName}`;
  });
}

function updateBackgroundImages(imageSet) {
  var heroSection = document.querySelector(".hero");
  var graphicDesignCard = document.getElementById("card-1");
  var photographyDesignCard = document.getElementById("card-2");

  if (heroSection) changeBackgroundImage(heroSection, imageSet.heroSection);
  if (graphicDesignCard)
    changeBackgroundImage(graphicDesignCard, imageSet.graphicDesignCard);
  if (photographyDesignCard)
    changeBackgroundImage(
      photographyDesignCard,
      imageSet.photographyDesignCard
    );
}

function changeBackgroundImage(element, imageUrl) {
  element.style.backgroundImage = `url(${imageUrl})`;
}

document.addEventListener("DOMContentLoaded", function () {
  /*updateImages();*/
  window.addEventListener("resize", updateImages);
  burgerBtn.addEventListener("click", toggleMobileMenu);
});

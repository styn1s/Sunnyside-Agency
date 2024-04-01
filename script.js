window.onload = function () {
    var header = document.querySelector("header");
    var headerImage = document.getElementById("header-bg");

    header.style.height = headerImage.offsetHeight + "px";
};

document.addEventListener("DOMContentLoaded", function() {
    var iconHamburger = document.getElementById("icon-hamburger");
    var dropdownMenu = document.querySelector(".dropdown-menu");

    iconHamburger.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents default link behavior
        if (dropdownMenu.style.display === "block"){
            dropdownMenu.style.display = "none";
        }
        else{
            dropdownMenu.style.display = "block"; 
        }
    });
});

window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
   
        var images = document.querySelectorAll('.product-gallery img');

        images.forEach(function(image, index) {
            
            var imageName = image.src.split('/').pop(); 
            var mobileImagePath = './images/mobile/' + imageName;
            
            image.src = mobileImagePath;
        });
    }
    else{

        var images = document.querySelectorAll('.product-gallery img');

        images.forEach(function(image, index) {

            var imageName = image.src.split('/').pop(); 
            var desktopImagePath = './images/desktop/' + imageName;
            
            image.src = desktopImagePath;
        });
    }
});


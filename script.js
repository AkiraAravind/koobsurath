let slides = ["slide1.html", "slide2.html", "slide3.html", "slide4.html", "slide5.html"];
let currentSlide = 0;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    document.getElementById('contentFrame').src = slides[currentSlide];
}

setInterval(showNextSlide, 6000); // Change slide every 15 seconds

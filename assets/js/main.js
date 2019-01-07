//-----------------------onload要執行的程式
window.onload = function () {
    //realTime();   
    autoShowSlides();
}


//--------------------------nav動態固定在最上面
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 220) {
            $('.dropDowns').addClass('navFixed');
        } else {
            $('.dropDowns').removeClass('navFixed');
        }
    });
});


//-----------------------------現在時間

function realTime() {
    var now = new Date();
    document.getElementById("timer").innerHTML = ("現在時間：" + now.getHours()).toString() + ":" + now.getMinutes().toString() +
        ":" + now.getSeconds().toString();
    window.setInterval("realTime()", 1000);
}


//-----------------------------slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
var slideIndex = 0;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoShowSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(autoShowSlides, 3000);
}
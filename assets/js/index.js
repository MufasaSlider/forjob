//-----------------------onload要執行的程式
window.onload = function () { 
    //autoShowSlides();
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
    setTimeout(autoShowSlides, 4000);
}
//-------------------googleMap

function initMap() {
    var myHomeLocation = {
        lat: 25.06289,
        lng: 121.50208
    };
    var map = new google.maps.Map(
        document.getElementById('googleMap'), {
            zoom: 4,
            center: myHomeLocation
        });
    var marker = new google.maps.Marker({
        position: myHomeLocation,
        map: map
    });
}

//---------------selectLocation

var countyList=['縣市','台北市','新北市','台中市','台南市'];
var countyElement=document.getElementById("nightMarket-county");
var countyInner="";
for(var i=0;i<countyList.length;i++){
    countyInner=countyInner+'<option value=i>'+countyList[i]+'</option>';
}
countyElement.innerHTML=countyInner;

var sectors= new Array();
sectors[0]=['請先選擇縣市'];
sectors[1]=['士林夜市','饒河夜市'];
sectors[2]=['三和夜市','樂華夜市'];
sectors[3]=['一中商圈','逢甲夜市'];
sectors[4]=['花園夜市'];
function changeLocation(index) {
    var location="";
    for (var i = 0; i < sectors[index].length; i++) {
        location=location+'<option value=i>'+sectors[index][i]+'</option>';
    }
    var locationElement=document.getElementById("nightMarket-place");
    locationElement.innerHTML=location;
}
changeLocation(document.getElementById("nightMarket-county").selectedIndex);

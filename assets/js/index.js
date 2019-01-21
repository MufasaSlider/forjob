//-----------------------onload要執行的程式
window.addEventListener('load', function () {
    
});


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
var map;
var nightMarketLocation = new Array
var marker = new Array;

function initMap() {
    nightMarketLocation[0] = new google.maps.LatLng(25.089485, 121.524203);
    nightMarketLocation[1] = new google.maps.LatLng(25.050390, 121.573309);
    nightMarketLocation[2] = new google.maps.LatLng(25.065170, 121.500575);
    nightMarketLocation[3] = new google.maps.LatLng(25.008707, 121.511706);
    nightMarketLocation[4] = new google.maps.LatLng(24.150743, 120.685562);
    nightMarketLocation[5] = new google.maps.LatLng(24.179446, 120.646483);
    nightMarketLocation[6] = new google.maps.LatLng(23.010640, 120.199605);
    map = new google.maps.Map(document.getElementById('googleMap'), {
        center: nightMarketLocation[0],
        zoom: 7
    });
    for (let i = 0; i < nightMarketLocation.length; i++) {
        marker[i] = new google.maps.Marker({
            position: nightMarketLocation[i],
            map: map
        });
    }

};

function toNightMarketLocation(index) {
    map.panTo(nightMarketLocation[index]);
    map.setCenter(nightMarketLocation[index]);
    map.setZoom(16);
    
}


//---------------selectLocation

var countyList = ['請先選擇縣市', '台北市', '新北市', '台中市', '台南市'];
var countyElement = document.getElementById("nightMarket-county");
var countyInner = "";
for (var i = 0; i < countyList.length; i++) {
    countyInner = countyInner + '<option value=i>' + countyList[i] + '</option>';
}
countyElement.innerHTML = countyInner;

var sectors = new Array();
var tempCounty = 0;
sectors[0] = ['請先選擇縣市'];
sectors[1] = ['請選擇夜市', '士林夜市', '饒河夜市'];
sectors[2] = ['請選擇夜市', '三和夜市', '樂華夜市'];
sectors[3] = ['請選擇夜市', '一中商圈', '逢甲夜市'];
sectors[4] = ['請選擇夜市', '花園夜市'];

function changeLocation(index) {
    var placeDisplay = new Array;
    placeDisplay[0] = document.getElementsByName('taipei');
    placeDisplay[1] = document.getElementsByName('newTaipei');
    placeDisplay[2] = document.getElementsByName('taichung');
    placeDisplay[3] = document.getElementsByName('tainan');
    for (let i = 0; i < placeDisplay.length; i++) {
        for (let j = 0; j < placeDisplay[i].length; j++) {
            placeDisplay[i][j].style.display = "";
        }
    }

    var searchStyle = document.getElementById('search_style');
    var location = "";
    for (var i = 0; i < sectors[index].length; i++) {
        location = location + '<option value=i>' + sectors[index][i] + '</option>';
        searchStyle.innerHTML = ".searchable:not([data-index*=\"" + sectors[index][i] + "\"]):not([data-index*=\"" + sectors[index][i - 1] + "\"]) { display: none; }";
    }

    tempCounty = index;

    if (sectors[index] == '請先選擇縣市') {
        searchStyle.innerHTML = "";
        return;
    }

    var locationElement = document.getElementById("nightMarket-place");
    locationElement.innerHTML = location;
}
changeLocation(document.getElementById("nightMarket-county").selectedIndex);

function changeNightMarket(index) {
    var searchStyle = document.getElementById('search_style');
    searchStyle.innerHTML = ".searchable:not([data-index*=\"" + sectors[tempCounty][index] + "\"]) { display: none; }";

}


//----------------search location
var searchStyle = document.getElementById('search_style');
document.getElementById('search').addEventListener('input', function () {
    var placeDisplay = new Array;
    placeDisplay[0] = document.getElementsByName('taipei');
    placeDisplay[1] = document.getElementsByName('newTaipei');
    placeDisplay[2] = document.getElementsByName('taichung');
    placeDisplay[3] = document.getElementsByName('tainan');
    for (let i = 0; i < placeDisplay.length; i++) {
        for (let j = 0; j < placeDisplay[i].length; j++) {
            placeDisplay[i][j].style.display = "";
        }
    }
    if (!this.value) {
        searchStyle.innerHTML = "";
        return;
    }
    searchStyle.innerHTML = ".searchable:not([data-index*=\"" + this.value.toLowerCase() + "\"]) { display: none; }";
});
//------------------checkboxSubmit
function checkboxSubmit() {
    var searchStyle = document.getElementById('search_style');
    searchStyle.innerHTML = "";
    var boxChecked = document.getElementsByName('checkboxPlace');
    var placeDisplay = new Array;
    placeDisplay[0] = document.getElementsByName('taipei');
    placeDisplay[1] = document.getElementsByName('newTaipei');
    placeDisplay[2] = document.getElementsByName('taichung');
    placeDisplay[3] = document.getElementsByName('tainan');
    for (let i = 0; i < placeDisplay.length; i++) {
        for (let j = 0; j < placeDisplay[i].length; j++) {
            placeDisplay[i][j].style.display = "";
        }
    }

    for (let i = 0; i < boxChecked.length; i++) {
        if (!boxChecked[i].checked) {
            for (let j = 0; j < placeDisplay[i].length; j++) {
                placeDisplay[i][j].style.display = "none";
            }
        }
    }
}
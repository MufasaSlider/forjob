//-----------------------onload要執行的程式
window.addEventListener('load', function () {
    autoShowSlides();
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
    setTimeout(autoShowSlides, 3500);
}
//-------------------googleMap
var map;
var nightMarketLocation = new Array
var marker = new Array;

var tempLat={
    "0":25.089485,
    "1":25.050390,
    "2":25.065170,
    "3":25.008707,
    "4":24.150743,
    "5":24.179446,
    "6":23.010640,
};
var tempLng={
    "0":121.524203,
    "1":121.573309,
    "2":121.500575,
    "3":121.511706,
    "4":120.685562,
    "5":120.646483,
    "6":120.199605,
};

function initMap() {
    
    for (let i = 0; i < 7; i++) {
        nightMarketLocation[i] = new google.maps.LatLng(tempLat[i],tempLng[i]);
        
    }

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
var tempPlace={
    "0":"taipei",
    "1":"newTaipei",
    "2":"taichung",
    "4":"tainan"
}


function changeLocation(index) {
    var placeDisplay = new Array;
    for (let i = 0; i < 5; i++) {
        placeDisplay[i]=document.getElementsByName(tempPlace[i]);
    }
    
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
    for (let i = 0; i < 5; i++) {
        placeDisplay[i]=document.getElementsByName(tempPlace[i]);
    }
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
    for (let i = 0; i < 5; i++) {
        placeDisplay[i]=document.getElementsByName(tempPlace[i]);
    }
    for (let i = 0; i < placeDisplay.length; i++) {
        for (let j = 0; j < placeDisplay[i].length; j++) {
            placeDisplay[i][j].style.display = "";
        }
    }

    for (let i = 0; i < boxChecked.length; i++) {
        console.log(boxChecked.length);
        if (!boxChecked[i].checked) {
            for (let j = 0; j < placeDisplay[i].length; j++) {
                placeDisplay[i][j].style.display = "none";
                console.log(placeDisplay[i][j]);
            }
        }
    }
}
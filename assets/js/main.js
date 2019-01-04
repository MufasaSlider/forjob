//onload要執行的程式
window.onload=function() {
    //getData('HTML5_video.html');
    //realTime();
    //videoPlay();
}


//nav動態固定在最上面
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 220) {
            $('.dropDowns').addClass('navFixed');
        } else {
            $('.dropDowns').removeClass('navFixed');
        }
    });
});


//現在時間

function realTime() {
    var now = new Date();
    document.getElementById("timer").innerHTML = ("現在時間："+now.getHours()).toString() + ":" + now.getMinutes().toString() +
        ":" + now.getSeconds().toString();
    window.setInterval("realTime()", 1000);
}



//ajax部份更新網頁
function getData(element) {
    var ajax1 = new XMLHttpRequest();
    ajax1.open("get", "http://127.0.0.1:8887/" + element);
    ajax1.onload = function () {
        var XXX = document.getElementById("ajaxChange");
        XXX.innerHTML = this.responseText;
    }
    ajax1.send();
}

/*
//影片播放
var video;
function videoPlay () {
    video = document.getElementById("video");
    video.addEventListener("timeupdate", updateTimer);
    video.addEventListener("ended", function () {
        alert("Ended");
    });
}

function updateTimer() {
    var timer = document.getElementById("timer");
    timer.innerHTML = video.currentTime + "/" + video.duration;
}

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function replayVideo() {
    video.currentTime = 0;
    video.play();
}
*/
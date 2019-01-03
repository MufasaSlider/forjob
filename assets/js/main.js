$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 220) { 
            $('.dropDowns').addClass('navFixed'); 
        } else {
            $('.dropDowns').removeClass('navFixed');
        }
    });
});
/*
function realTime() {
    var now = new Date();
    document.getElementById("timer").innerHTML = ("現在時間："+now.getHours()).toString() + ":" + now.getMinutes().toString() +
        ":" + now.getSeconds().toString();
    window.setInterval("realTime()", 1000);
}

window.onload=function(){
    realTime();
}
*/
//-----------------------onload要執行的程式
window.addEventListener('load', function (){
    realTime();   
    //alert("網站目前還在製作中喔～～～");
});


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
    document.getElementById("timer").innerHTML = ("現在時間：" + now.getHours()).toString() + "點" + now.getMinutes().toString()+"分";
    window.setTimeout("realTime()", 60000);
}



//-----------------------RWD
function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
    
}
function myRWD() {
    var RWDElse = document.getElementById("RWDElse");
    if (RWDElse.className === "") {
        RWDElse.className += "toggle-sub";
    } else {
        RWDElse.className = "";
    }
}

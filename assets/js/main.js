$(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 220)  {          /* 要滑動到選單的距離 */
         $('.dropDowns').addClass('navFixed');   /* 幫選單加上固定效果 */
      } else {
        $('.dropDowns').removeClass('navFixed'); /* 移除選單固定效果 */
      }
    });
  });
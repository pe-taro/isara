// $(function(){
 
  // 上のアコーディオンメニューのスクリプト
  $('.faq-list-item').click(function(){
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp(250);
      $(this).find('span').replaceWith('<span class="fas fa-angle-down"></span>');
    }else{
      $answer.addClass('open');
      $answer.slideDown(250);
      $(this).find('span').replaceWith('<span class="fas fa-angle-up"></span>');
    }
  });



  // 固定ヘッダー
$(function () {
  var nav = $("header");
  //navの位置
  var navTop = nav.offset().top;
  //スクロールするたびに実行
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    //スクロール位置がnavの位置より下だったらクラスfixedを追加
    if (winTop >= navTop) {
      nav.addClass("fixed");
    } else if (winTop <= navTop) {
      nav.removeClass("fixed");
    }
  });
});




// トップへ表示
$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});
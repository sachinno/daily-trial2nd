//swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  slidesOffsetBefore: 0,
  spaceBetween: 20, 
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }, 
  breakpoints: {
    768: {
      spaceBetween: 40,
    }
  }
});

//drawer
$(function () {
  $(".js-drawer").on("click", function () {
      $('body').toggleClass('open');
  });
  $(".js-overlay, .drawer-menu-item-link").on("click", function () {
      $('body').removeClass('open');
  });
});

//スムーススクロール
$('a[href^="#"]').click(function () {
  let speed = 300;
  let id = $(this).attr("href");
  let target = $("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = $(target).offset().top - $( '#js-header' ).outerHeight();
  // その分だけ移動すればヘッダーと被りません
  $("html, body").animate(
      { scrollTop: position }, speed );
  return false;
});

 // アコーディオンメニュー
 $('.js-question').click(function () {
  $(this).next().slideToggle();
  $(this).children('.question-icon').toggleClass('icon-change');
});

 // スクロール検知
 $(window).on("scroll", function () {
  // トップから100px以上スクロールしたら
  if (100 < $(this).scrollTop()) {
      // is-showクラスをつける
      $('.totop').addClass('is-show');
  } else {
      // 100pxを下回ったらis-showクラスを削除
      $('.totop').removeClass('is-show');
  }
});

// wow.js
new WOW().init();

// googleform
let $form = $( '#js-form')
$form.submit(function(e) { 
    $.ajax({ 
        url: $form.attr('action'), 
        data: $form.serialize(), 
        type: "POST", 
        dataType: "xml", 
        statusCode: { 
            0: function() { 
            //送信に成功したときの処理 
                $form.slideUp() //上に消える
                $( '#js-success').slideDown()//表示
            }, 
            200: function() { 
            //送信に失敗したときの処理 
            $form.slideUp() //上に消える
            $( '#js-error').slideDown()//表示
            }
        } 
    });

    return false; 
}); 

//formの入力確認
let $submit = $( '#js-submit' )
$( '#js-form input, #js-form textarea' ).on( 'change', function() {
    if(
        $( '#js-form input[type="text"]' ).val() !== "" && 
        $( '#js-form input[name="entry.671338968"]' ).prop( 'checked' ) === true
    ) {
        //すべて入力された時
        $submit.prop( 'disabled', false ) //disabledを外して送信できる状態にする。
        $submit.addClass( "-active" )
    } else {
        //入力されていない時
        $submit.prop( 'disabled', true )
        $submit.removeClass( "-active" )                
    }
});
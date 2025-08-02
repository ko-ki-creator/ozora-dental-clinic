// スクロール開始時に固定ヘッダー表示・初期ヘッダー非表示
const fixed = document.querySelector('.header-fixed');
const inner = document.querySelector('.header-inner');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            fixed.classList.add('show');
            inner.classList.add('show');
        } else {
            fixed.classList.remove('show');
            inner.classList.remove('show');
        }
    });


$(function () {
  // ハンバーガーボタンクリックで実行
        $("#js-hamburger, #js-hamburger-second").click(function () {
        $(this).toggleClass("active");
        $("#js-nav").toggleClass("active");

        // ナビゲーション展開時にスクロール制御
        if ($("#js-nav").hasClass("active")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").css("overflow", "");
        }
    });

    // メニュー項目のクリック時にメニューを閉じる
        $(".nav-item a").click(function () {
        $("#js-hamburger, #js-hamburger-second").removeClass("active");
        $("#js-nav").removeClass("active");
    });
});

// ローディングアニメーションの表示制御
document.addEventListener('DOMContentLoaded', function() {
    const loading = document.querySelector('.loading');
    window.addEventListener('load', function() {
        setTimeout(function() {
            loading.classList.add('loading--hide');
        }, 3000);
    });
});
// スクロール開始時に固定ヘッダー表示・初期ヘッダー非表示
const fixed = document.querySelector('.header-fixed');
const inner = document.querySelector('.header-inner');

    // window.addEventListener('scroll', function() {
    //     if (window.scrollY > 50) {
    //         fixed.classList.add('show');
    //         inner.classList.add('show');
    //     } else {
    //         fixed.classList.remove('show');
    //         inner.classList.remove('show');
    //     }
    // });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            fixed.classList.add("show");
            inner.classList.add("show");
            return;
        }
        fixed.classList.remove("show");
        inner.classList.remove("show");
    })


$(function () {
  // ハンバーガーボタンクリックで実行
        $("#js-hamburger, #js-hamburger-second, #js-ham-close").click(function () {
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


// トリガー取得
const scrollTrigger = document.querySelectorAll('.js-scroll-trigger');

// animation呼び出し
if (scrollTrigger.length) {
    scrollAnimation(scrollTrigger);
}

// animation関数
function scrollAnimation(trigger) {
    window.addEventListener('scroll', function () {
        for (var i = 0; i < trigger.length; i++) {
            let position = trigger[i].getBoundingClientRect().top,
                scroll = window.pageYOffset || document.documentElement.scrollTop,
                offset = position + scroll,
                windowHeight = window.innerHeight;

            if (scroll > offset - windowHeight + 200) {
                trigger[i].classList.add('is-active');
            }
        }
    });
}
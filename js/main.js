// スクロール開始時に固定ヘッダー表示
const fixed = document.querySelector('.header-fixed');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // スクロール位置が500pxを超えたら
            fixed.classList.add('show'); // 'show' クラスを追加
        } else {
            fixed.classList.remove('show'); // 'show' クラスを削除
        }
    });

// スクロール開始時に初期ヘッダー非表示
const inner = document.querySelector('.header-inner');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // スクロール位置が500pxを超えたら
            inner.classList.add('show'); // 'show' クラスを追加
        } else {
            inner.classList.remove('show'); // 'show' クラスを削除
        }
    });
$(function () {
  // Drawer Menu
  $(".js-button-hamburger").click(function () {
    $("body").toggleClass("is-active-drawer");

    if ($(this).attr("aria-expanded") == "false") {
      $(this).attr("aria-expanded", true);
    } else {
      $(this).attr("aria-expanded", false);
    }
  });
});

$(function () {
  var headerHeight = $(".header .l-S01").outerHeight(),
    startPos = 0;
  $(window).on("load scroll", function () {
    var scrollPos = $(this).scrollTop();
    if (scrollPos > startPos && scrollPos > headerHeight) {
      $(".header .l-S01").css("top", "-" + headerHeight + "px");
    } else {
      $(".header .l-S01").css("top", "0");
    }
    startPos = scrollPos;
  });
});

window.addEventListener("scroll", function () {
  // ヘッダーを変数の中に格納する
  const header = document.querySelector(".header .l-S01");
  // 800px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
  header.classList.toggle("scroll-nav", window.scrollY > 800);
  fadeAnime();
  popAnime();
});

$(window).on("load", function () {
  fadeAnime();
  popAnime();
});

function fadeAnime() {
  $(".fadeUpTrigger").each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    }
  });
}
function popAnime() {
  $(".popUpTrigger").each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("popUp");
    }
  });
}

function fadeAnime() {
  $(".fadeUpTrigger").each(function () {
    const elemPos = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    }
  });
}

function changeBgColor() {
  const header = document.querySelector(".header .l-S01");
  header.classList.toggle("scroll-nav", window.scrollY > 800);
}

function headerAnime() {
  const scrollPos = $(this).scrollTop();
  if (navOpen) {
    $(".header .l-S01").css("top", "0");
  } else if (scrollPos > startPos && scrollPos > headerHeight) {
    $(".header .l-S01").css("top", "-" + headerHeight + "px");
  } else {
    $(".header .l-S01").css("top", "0");
  }
  startPos = scrollPos;
}

const headerHeight = $(".header .l-S01").outerHeight();
let startPos = 0;
let navOpen = false;

$(window).on("scroll load", function () {
  changeBgColor();
  fadeAnime();
  headerAnime();
});

$(".js-button-hamburger").click(function () {
  $("body").toggleClass("is-active-drawer");

  if ($(this).attr("aria-expanded") == "false") {
    $(this).attr("aria-expanded", true);
  } else {
    $(this).attr("aria-expanded", false);
  }
});

$(".openbtn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
  $(".circle-bg").toggleClass("circleactive"); //丸背景にcircleactiveクラスを付与
  $("#headerLogo").toggleClass("active");
  navOpen = !navOpen;
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスを除去
  $(".circle-bg").removeClass("circleactive"); //丸背景のcircleactiveクラスを除去
  $("#headerLogo").removeClass("active");
});

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
  if (scrollPos > startPos && scrollPos > headerHeight) {
    $(".header .l-S01").css("top", "-" + headerHeight + "px");
  } else {
    $(".header .l-S01").css("top", "0");
  }
  startPos = scrollPos;
}

const headerHeight = $(".header .l-S01").outerHeight();
let startPos = 0;

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

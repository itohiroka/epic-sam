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
  // 500px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
  header.classList.toggle("scroll-nav", window.scrollY > 500);
});

const thisBody = document.querySelector("body"),
  footer = document.querySelector(".sitefooter");

let scrolledOffset = heroSection.scrollHeight / 2,
  scrolledAmount = 0;

//SCROLL
document.addEventListener("scroll", () => {
  //is-scrolled
  if (window.pageYOffset > scrolledOffset) {
    if (!thisBody.classList.contains("is-scrolled")) {
      thisBody.classList.add("is-scrolled");
    }
  } else {
    if (thisBody.classList.contains("is-scrolled")) {
      thisBody.classList.remove("is-scrolled");
    }
  }
});

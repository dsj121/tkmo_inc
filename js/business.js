// on load event
let windowWidth = $(window).width();

function bisOnload() {
  $(".banner img").animate({ top: "0px" }, 1500);
  $(".title h1").animate({ opacity: 1 }, 500, function () {
    $(".title p").animate({ opacity: 1 }, 500, function () {
      $(".content_summary").animate({ opacity: 1 }, 500);
    });
  });
}

bisOnload();

// if (windowWidth >= 1200) {
//   bisOnload();
// } else {
//   $(".banner img").css({ top: 0 });
//   $(".title h1").animate({ opacity: 1 }, 500, function () {
//     $(".title p").animate({ opacity: 1 }, 500, function () {
//       $(".content_summary").animate({ opacity: 1 }, 500);
//     });
//   });
// }

// window scroll event
let windowHalf;
const SUMMARY = $(".content_summary").offset().top;
const MENU = $(".content_menu").offset().top;
const CONTENT = $(".content_text").offset().top;

$(window).on("scroll", function () {
  windowHalf = $(window).scrollTop() + $(window).height() * 0.7;
  if (windowHalf >= MENU) {
    $(".content_menu").animate({ opacity: 1 }, 500);
  }
  if (windowHalf >= CONTENT) {
    $(".content_text").animate({ opacity: 1 }, 500);
  }
});

// content menu hover
const BACKGROUND = $(".content_text img");
let contentNumb = 0;

function bgChange(numb) {
  BACKGROUND.attr("src", `images/bis_content_0${numb + 1}.png`);
}
function textChange(numb) {
  $(".text").css({ top: "100%" });
  $(".text").removeClass("active");
  $(".text").eq(numb).addClass("active");
  $(".text.active").stop().animate({ top: "10px" }, 1000);
}
$(".content_menu ul li").on("mouseenter", function () {
  var index = $(this).index();

  if (index == contentNumb) {
    return false;
  }
  $(".content_menu ul li").removeClass("active");
  $(this).addClass("active");
  bgChange(index);
  textChange(index);
  contentNumb = index;
});

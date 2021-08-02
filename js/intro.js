// on load event
let windowWidth = $(window).width();

function introOnload() {
  $(".banner img").animate({ top: 0 }, 1500);
  $(".title h1").animate({ opacity: 1 }, 500, function () {
    $(".title p").animate({ opacity: 1 }, 500, function () {
      $(".content_box").eq(0).animate({ left: 0, opacity: 1 }, 1000);
    });
  });
}

introOnload();

$(window).on("scroll", function () {
  var windowHalf = $(window).scrollTop() + $(window).height() * 0.5;
  $(".content_box").each(function () {
    var sct = $(this).offset().top;
    if (windowHalf >= sct) {
      $(this).stop().animate({ left: 0, opacity: 1 }, 1000);
    }
  });
});

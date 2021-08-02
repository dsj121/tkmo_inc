let windowHalf;

$(window).on("scroll", function () {
  windowHalf = $(window).scrollTop() + $(window).height() * 0.8;
  $(".box").each(function () {
    var offTop = $(this).offset().top;
    if (windowHalf >= offTop) {
      $(this).stop().animate({ opacity: 1 }, 500);
    }
  });
});

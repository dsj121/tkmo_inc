let windowHalf;

$(window).on("scroll", function () {
  windowHalf = $(window).scrollTop() + $(window).height() * 0.5;
  $(".box").each(function () {
    var offTop = $(this).offset().top;
    if (windowHalf >= offTop) {
      $(this).animate({ opacity: 1 }, 500);
    }
  });
});

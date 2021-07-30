// map click event
$(".map_menu > ul > li").on("click", function () {
  var index = $(this).index();
  $(".map_menu > ul > li").css({ background: "#fff", color: "#000" });
  $(this).css({ background: "#008bfd", color: "#fff" });
  $(".branch").css({ display: "none" });
  $(".branch").eq(index).css({ display: "block" });
});
$(".branch > i").on("click", function () {
  $(this).parent().css({ display: "none" });
});
$(".map_menu > ul > li").eq(0).trigger("click");

// scroll animation
$(window).on("scroll", function () {
  windowHalf = $(window).scrollTop() + $(window).height() * 0.7;
  var offTop = $(".map_container").offset().top;
  if (windowHalf >= offTop) {
    $(".map_container").animate({ opacity: 1, left: 0 }, 1000);
  }
});

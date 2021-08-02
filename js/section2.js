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
let doneSect2 = 0;
$(window).on("scroll", function () {
  windowHalf = $(window).scrollTop() + $(window).height() * 0.8;
  var offTop = $(".map_container").offset().top;
  if (windowHalf >= offTop) {
    if (doneSect2 > 0) {
      return false;
    }
    $(".map_container").animate({ opacity: 1, left: 0 }, 1000);
    doneSect2 = 1;
  }
});

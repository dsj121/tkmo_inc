$(".map_menu > ul > li").on("click", function () {
  var index = $(this).index();
  $(".branch").css({ display: "none" });
  $(".branch").eq(index).css({ display: "block" });
});
$(".branch > i").on("click", function () {
  $(this).parent().css({ display: "none" });
});

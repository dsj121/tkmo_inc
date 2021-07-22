// side menu open
$(".side_menu_btn > i").on("click", function () {
  $("html").addClass("side");
  $(".side_menu").animate({ left: 0 }, 500, function () {
    $(".side_sideBox .side_nav li a").stop().animate({ opacity: 1, paddingLeft: 0 }, 500);
    $(".smp_container").stop().animate({ opacity: 1, top: "200px" }, 500);
  });
});
// side menu close
$(".side_menu i").on("click", function () {
  $("html").removeClass("side");
  $(".side_menu").animate({ left: "100%" }, 500, function () {
    $(".side_sideBox .side_nav li a").css({ opacity: 0, paddingLeft: "50px" });
    $(".smp_container").css({ opacity: 0, top: "300px" });
  });
});
// side nav hover
$(".side_nav li a").on("mouseenter", function () {
  $(this).css({ color: "#0083ff" });
  $(this).stop().animate({ paddingLeft: "30px" }, 500);
});
$(".side_nav li a").on("mouseleave", function () {
  $(this).css({ color: "#fff" });
  $(this).stop().animate({ paddingLeft: "0px" }, 500);
});

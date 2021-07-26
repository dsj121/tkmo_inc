// side menu open
$(".side_menu_btn > i").on("click", function () {
  $("html").addClass("side");
  $(".side_menu").css({ display: "block" });
  $(".side_menu").animate({ left: 0 }, 500, function () {
    $(".side_sideBox").addClass("changed");
    $(".side_nav").animate({ opacity: 1 }, 500);
    $(".side_sideBox .side_nav li a").animate({ opacity: 1, paddingLeft: 0 }, 500);
    $(".smp_container").animate({ opacity: 1, top: "50%" }, 500);
  });
});
// side menu close
$(".side_menu i").on("click", function () {
  $("html").removeClass("side");
  $(".side_menu").animate({ left: "100%" }, 500, function () {
    $(" .side_sideBox").removeClass("changed");
    $(".side_nav").css({ opacity: 0 });
    $(".side_sideBox .side_nav li a").css({ opacity: 0, paddingLeft: "50px" });
    $(".smp_container").css({ opacity: 0, top: "55%" });
    $(".side_menu").css({ display: "none" });
  });
});
// side nav hover
$(".side_nav li a").on("mouseenter", function () {
  var index = $(this).parent().index();
  $(this).css({ color: "#ffffff" });
  $(this).stop().animate({ paddingLeft: "30px" }, 500);
  $(".side_sideBox.changed").addClass(`bg_0${index + 1}`);
});
$(".side_nav li a").on("mouseleave", function () {
  var index = $(this).parent().index();
  $(this).css({ color: "#ffffff66" });
  $(this).stop().animate({ paddingLeft: "0px" }, 500);
  $(".side_sideBox.changed").removeClass(`bg_0${index + 1}`);
});

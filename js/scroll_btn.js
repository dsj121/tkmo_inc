let windowTop;

// visible
function btnVisible() {
  windowTop = $(window).scrollTop();
  if (windowTop > 0) {
    $("#scroll_btn").css({ opacity: 1, cursor: "pointer" });
  } else {
    $("#scroll_btn").css({ opacity: 0, cursor: "default" });
  }
}
btnVisible();
$(window).on("scroll", btnVisible);

// click event
$("#scroll_btn").on("click", function () {
  $("html, body").stop().animate({ scrollTop: 0 }, 1000);
});

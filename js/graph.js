// bar grow up
var isDone = 0;
function growUp(index, numb) {
  var box = $(".graph_box").eq(index);
  box.children(".graph_bar").stop().animate({ height: numb }, 1000);
  box.children(".graph_bar").children("span").stop().animate({ opacity: 1 }, 1000);
}
const GRAPH_DATA = [10, 20, 50, 70];
// window scroll event
$(window).on("scroll", function () {
  windowHalf = $(window).scrollTop() + $(window).height() * 0.8;
  var graphBox = $(".graph_content").offset().top;
  if (windowHalf >= graphBox) {
    if (isDone > 0) {
      return false;
    }
    for (var i = 0; i <= 3; i++) {
      growUp(i, `${GRAPH_DATA[i]}%`);
    }
    isDone = 1;
  }
});

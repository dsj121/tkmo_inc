// bar grow up
function growUp(index, numb) {
  var box = $(".graph_box").eq(index);
  box.children(".graph_bar").stop().animate({ height: numb }, 1000);
}
const GRAPH_DATA = [10, 20, 50, 70];
// window scroll event
$(window).on("scroll", function () {
  windowHalf = $(window).scrollTop() + $(window).height() * 0.5;
  var graphBox = $(".graph_content").offset().top;
  if (windowHalf >= graphBox) {
    for (var i = 0; i <= 3; i++) {
      growUp(i, `${GRAPH_DATA[i]}%`);
    }
  }
});

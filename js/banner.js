const SLIDE = $(".slide");
const BTN = $(".btn_list > i.page");
let current_slide = 0;
let playState = 0;

function sld_move(num) {
  var tg = SLIDE.eq(num);
  SLIDE.removeClass("before");
  $(".slide.active").addClass("before");
  SLIDE.removeClass("active");
  tg.css({ left: "-100%" });
  tg.addClass("active");
  tg.stop().animate({ left: 0 }, 500);
}

BTN.on("click", function () {
  var idx = $(this).index();

  if (idx == current_slide) {
    return false;
  }
  BTN.removeClass("active");
  $(this).addClass("active");
  sld_move(idx);
  current_slide = idx;
});

// auto play
function slideTrigger() {
  var trigger_idx = current_slide + 1;
  if (trigger_idx >= 3) {
    trigger_idx = 0;
  }
  $("i.page").eq(trigger_idx).trigger("click");
}
var playInterval;
function autoPlay() {
  if (playState == 0) {
    playInterval = setInterval(slideTrigger, 3500);
  }
}
autoPlay();
// play btn
$("i.play_btn").on("click", function () {
  if (playState == 0) {
    playState = 1;
    clearInterval(playInterval);
    $("i.play_btn").removeClass("fa-pause-circle").addClass("fa-play-circle");
  } else if (playState == 1) {
    playState = 0;
    autoPlay();
    $("i.play_btn").removeClass("fa-play-circle").addClass("fa-pause-circle");
  }
});

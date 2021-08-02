const LIST = $(".list_content > table > tbody > tr");
const INDEX = $(".index_wrap > ul > li");
let pageNum = 0;

// function
function showPage(num) {
  LIST.css({ display: "none" });
  for (var i = num * 4; i <= num * 4 + 3; i++) {
    LIST.eq(i).css({ display: "table-row" });
  }
}
function showIndex(num) {
  INDEX.removeClass("active");
  INDEX.eq(num).addClass("active");
}
function prsOnload() {
  $(".banner img").animate({ top: "0px" }, 1500);
}

// on load event
prsOnload();
showPage(pageNum);

// list index click event
$(".index_wrap > ul > li").on("click", function () {
  var num = $(this).index();
  showPage(num);
  showIndex(num);
  pageNum = num;
});

$("i.front").on("click", function () {
  showPage(0);
  showIndex(0);
  pageNum = 0;
});
$("i.back").on("click", function () {
  showPage(2);
  showIndex(2);
  pageNum = 2;
});
$("i.prev").on("click", function () {
  pageNum -= 1;
  if (pageNum <= 0) {
    pageNum = 0;
  }
  showPage(pageNum);
  showIndex(pageNum);
});
$("i.next").on("click", function () {
  pageNum += 1;
  if (pageNum >= 2) {
    pageNum = 2;
  }
  showPage(pageNum);
  showIndex(pageNum);
});

function textChange(index) {
  $(".textBox").removeClass("active");
  $(".textBox").eq(index).addClass("active");
}

// iconBox click
$(".iconBox").on("click", function () {
  var index = $(this).index();

  $(".iconBox i").css({ color: "#928fa9" });
  $(this).children("i").css({ color: "#0083ff" });
  textChange(index);
});

$(".iconBox").eq(0).children("i").css({ color: "#0083ff" });

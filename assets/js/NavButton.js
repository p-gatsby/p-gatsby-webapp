$(document).ready(function () {
  if ($(this).scrollTop() > 20) {
    $("#navBtn").show();
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#navBtn").fadeIn();
    } else {
      $("#navBtn").fadeOut();
    }
  });

  $("#navBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});

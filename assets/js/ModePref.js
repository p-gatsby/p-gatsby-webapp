$(document).ready(function () {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    changeModePref();
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      changeModePref();
    });

  if ($(this).scrollTop() < 20) {
    $("#modePrefBtn").show();
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() < 20) {
      $("#modePrefBtn").fadeIn();
    } else {
      $("#modePrefBtn").hide();
    }
  });

  $("#modePrefBtn").click(function () {
    changeModePref();
  });
});

const changeModePref = () => {
  $("body").toggleClass("dark-mode");
  $(".navbar").toggleClass("navbar-dark");
  $(".navbar").toggleClass("navbar-light");
  $("#light-mode").toggleClass("d-none");
  $("#dark-mode").toggleClass("d-none");
  $("#navBtn").toggleClass("btn-dark");
  $("#modePrefBtn").toggleClass("btn-dark");
  $(".wrap .about-desc .bold-text").toggleClass("bg-text-dark");
  $(".bg-text").toggleClass("bg-text-dark");
  $(".icon-box").toggleClass("icon-box-dark");
  $(".social-links").toggleClass("links-dark");
  $(".social-links").toggleClass("links-light");
};

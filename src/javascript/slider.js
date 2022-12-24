$(document).ready(function () {
  $(".img5").addClass("yes");
  $(".img12").click(function () {
    if ($(".img5").hasClass("yes")) {
      $(".img5").removeClass("yes");
      $(".img5").addClass("no");
      $(".img6").removeClass("no");
      $(".img6").addClass("yes");
    } else if ($(".img6").hasClass("yes")) {
      $(".img6").removeClass("yes");
      $(".img6").addClass("no");
      $(".img7").removeClass("no");
      $(".img7").addClass("yes");
    } else if ($(".img7").hasClass("yes")) {
      $(".img7").removeClass("yes");
      $(".img7").addClass("no");
      $(".img8").removeClass("no");
      $(".img8").addClass("yes");
    } else if ($(".img8").hasClass("yes")) {
      $(".img8").removeClass("yes");
      $(".img8").addClass("no");
      $(".img9").removeClass("no");
      $(".img9").addClass("yes");
    } else if ($(".img9").hasClass("yes")) {
      $(".img9").removeClass("yes");
      $(".img9").addClass("no");
      $(".img10").removeClass("no");
      $(".img10").addClass("yes");
    } else {
      $(".img10").removeClass("yes");
      $(".img10").addClass("no");
      $(".img5").removeClass("no");
      $(".img5").addClass("yes");
    }
  });
  $(".img11").click(function () {
    if ($(".img5").hasClass("yes")) {
      $(".img5").removeClass("yes");
      $(".img5").addClass("no");
      $(".img10").removeClass("no");
      $(".img10").addClass("yes");
    } else if ($(".img10").hasClass("yes")) {
      $(".img10").removeClass("yes");
      $(".img10").addClass("no");
      $(".img9").removeClass("no");
      $(".img9").addClass("yes");
    } else if ($(".img9").hasClass("yes")) {
      $(".img9").removeClass("yes");
      $(".img9").addClass("no");
      $(".img8").removeClass("no");
      $(".img8").addClass("yes");
    } else if ($(".img8").hasClass("yes")) {
      $(".img8").removeClass("yes");
      $(".img8").addClass("no");
      $(".img7").removeClass("no");
      $(".img7").addClass("yes");
    } else if ($(".img7").hasClass("yes")) {
      $(".img7").removeClass("yes");
      $(".img7").addClass("no");
      $(".img6").removeClass("no");
      $(".img6").addClass("yes");
    } else {
      $(".img6").removeClass("yes");
      $(".img6").addClass("no");
      $(".img5").removeClass("no");
      $(".img5").addClass("yes");
    }
  });
  $(".img14").click(function () {
    $(".content").css("display", "none");
    $(".content1").css("display", "flex");
  });
});

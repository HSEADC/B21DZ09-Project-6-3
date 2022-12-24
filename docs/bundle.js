/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 971:
/***/ (() => {

var backButton = document.querySelector('#back-button');

if (backButton) {
  backButton.addEventListener('click', function () {
    window.history.back();
  });
}

/***/ }),

/***/ 761:
/***/ (() => {

$(document).ready(function () {
  $(".img1").addClass("yes");
  $(".box1").click(function () {
    if ($(".img1").hasClass("yes")) {
      $(".img1").removeClass("yes");
      $(".img1").addClass("yes2");
      $(".img1").css("margin-left", "38vw");
      $(".img1").css("rotate", "90deg");
    } else if ($(".img1").hasClass("yes2")) {
      $(".img1").removeClass("yes2");
      $(".img1").addClass("yes3");
      $(".img1").css("margin-top", "8.5vw");
      $(".img2").removeClass("no");
      $(".img2").addClass("yes");
    } else if ($(".img2").hasClass("yes")) {
      $(".img2").removeClass("yes");
      $(".img2").addClass("yes2");
      $(".img2").css("margin-left", "3.5vw");
    } else if ($(".img2").hasClass("yes2")) {
      $(".img2").removeClass("yes2");
      $(".img2").addClass("yes3");
      $(".img2").css("margin-top", "-22.2vw");
      $(".img3").removeClass("no");
      $(".img3").addClass("yes");
    } else if ($(".img3").hasClass("yes")) {
      $(".img3").removeClass("yes");
      $(".img3").addClass("yes2");
      $(".img3").css("rotate", "360deg");
      $(".img3").css("margin-left", "20vw");
      $(".img3").css("margin-top", "-48vw");
    } else if ($(".img3").hasClass("yes2")) {
      $(".img3").removeClass("yes2");
      $(".img3").addClass("yes3");
      $(".img3").css("margin-top", "-23.8vw");
      $(".img4").removeClass("no");
      $(".img4").addClass("yes");
    } else if ($(".img4").hasClass("yes")) {
      $(".img4").removeClass("yes");
      $(".img4").addClass("yes2");
      $(".img4").css("margin-left", "-0.9vw");
    } else if ($(".img4").hasClass("yes2")) {
      $(".img4").removeClass("yes2");
      $(".img4").addClass("yes3");
      $(".img4").css("rotate", "360deg");
      $(".img4").css("margin-top", "-26.3vw");
      $(".img4").css("margin-left", "3.3vw");
      $(".img5").removeClass("no");
      $(".img5").addClass("yes");
    } else if ($(".img5").hasClass("yes")) {
      $(".img5").removeClass("yes");
      $(".img5").addClass("yes2");
      $(".img5").css("margin-left", "3.5vw");
    } else if ($(".img5").hasClass("yes2")) {
      $(".img5").removeClass("yes2");
      $(".img5").addClass("yes3");
      $(".img5").css("margin-top", "-27vw");
      $(".img6").removeClass("no");
      $(".img6").addClass("yes");
    } else if ($(".img6").hasClass("yes")) {
      $(".img6").removeClass("yes");
      $(".img6").addClass("yes2");
      $(".img6").css("rotate", "360deg");
    } else if ($(".img6").hasClass("yes2")) {
      $(".img6").removeClass("yes2");
      $(".img6").addClass("yes3");
      $(".img6").css("margin-top", "-22vw");
      $(".img7").removeClass("no");
      $(".img7").addClass("yes");
    } else {
      $(".img1").removeClass("yes3");
      $(".img2").removeClass("yes3");
      $(".img3").removeClass("yes3");
      $(".img4").removeClass("yes3");
      $(".img5").removeClass("yes3");
      $(".img6").removeClass("yes3");
      $(".img7").removeClass("yes");
      $(".img1").addClass("yes");
      $(".img2").addClass("no");
      $(".img3").addClass("no");
      $(".img4").addClass("no");
      $(".img5").addClass("no");
      $(".img6").addClass("no");
      $(".img7").addClass("no");
      $(".img1").css("margin-left", "20vw");
      $(".img2").css("margin-left", "30vw");
      $(".img3").css("margin-left", "25vw");
      $(".img4").css("margin-left", "20vw");
      $(".img5").css("margin-left", "20vw");
      $(".img6").css("margin-left", "35vw");
      $(".img7").css("margin-left", "69vw");
      $(".img1").css("margin-top", "-10vw");
      $(".img2").css("margin-top", "-60vw");
      $(".img3").css("margin-top", "-55vw");
      $(".img4").css("margin-top", "-45vw");
      $(".img5").css("margin-top", "-35vw");
      $(".img6").css("margin-top", "-30vw");
      $(".img7").css("margin-top", "-29vw");
      $(".img1").css("rotate", "360deg");
      $(".img3").css("rotate", "90deg");
      $(".img4").css("rotate", "90deg");
      $(".img6").css("rotate", "90deg");
    }
  });
});

/***/ }),

/***/ 327:
/***/ (() => {

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

/***/ }),

/***/ 529:
/***/ (() => {

var brandDefault = "\n\u041C\u044B \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u0435\u043C \u0441\u0435\u0431\u044F \u043A\u0430\u043A \u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C\n            \u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0447\u0430\u0442\u044C \u043E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0441 \u043D\u0443\u043B\u044F. <br />\n            \u041D\u0430\u0448 \u0431\u0440\u0435\u043D\u0434 \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0441\u044F \u0431\u044B\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C. \u0418\u043C\u0435\u043D\u043D\u043E\n            \u043F\u043E\u044D\u0442\u043E\u043C\u0443 <br />\n            \u0432 \u043E\u0441\u043D\u043E\u0432\u0443 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044F \u043B\u0435\u0433\u043B\u0430 \u044D\u0441\u0442\u0435\u0442\u0438\u043A\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432.\n";
var brandToggle = "\n<span class=\"gray\">\u041C\u044B \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u0435\u043C \u0441\u0435\u0431\u044F \u043A\u0430\u043A</span> \u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E<span class=\"gray\">, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C</span>\n\u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0447\u0430\u0442\u044C \u043E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0441 \u043D\u0443\u043B\u044F. <br />\n\u041D\u0430\u0448 \u0431\u0440\u0435\u043D\u0434 \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0441\u044F \u0431\u044B\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C<span class=\"gray\">. \u0418\u043C\u0435\u043D\u043D\u043E\n\u043F\u043E\u044D\u0442\u043E\u043C\u0443 <br />\n\u0432 \u043E\u0441\u043D\u043E\u0432\u0443 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044F \u043B\u0435\u0433\u043B\u0430 \u044D\u0441\u0442\u0435\u0442\u0438\u043A\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432.</span> \n";
var weDefault = "\n<span class=\"gray\">\u041E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u044B\u0435, \u0443\u0434\u043E\u0431\u043D\u044B\u0435, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435, \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0435, \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u0435,</span>\n            \u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u044B\u0435<span class=\"gray\">, \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435, \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0435, \u043F\u043E\u043D\u0438\u043C\u0430\u044E\u0449\u0438\u0435, \u0438\u0434\u0435\u0439\u043D\u044B\u0435,\n            \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435,</span> \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043B\u044E\u0431\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435<span class=\"gray\">, \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0435, \u0441\u0442\u0438\u043B\u044C\u043D\u044B\u0435,\n            \u043B\u0435\u0433\u043A\u0438\u0435, \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435, \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435.</span>\n";
var weToggle = "\u041E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u044B\u0435, \u0443\u0434\u043E\u0431\u043D\u044B\u0435, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435, \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0435, \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u0435,\n\u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u044B\u0435, \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435, \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0435, \u043F\u043E\u043D\u0438\u043C\u0430\u044E\u0449\u0438\u0435, \u0438\u0434\u0435\u0439\u043D\u044B\u0435,\n\u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043B\u044E\u0431\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435, \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0435, \u0441\u0442\u0438\u043B\u044C\u043D\u044B\u0435,\n\u043B\u0435\u0433\u043A\u0438\u0435, \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435, \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435.\n";
var goalDefault = "\u041D\u0430\u043C \u0432\u0430\u0436\u043D\u044B \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F, <br />\n            \u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u043C\u043E\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430\u0448\u0438\u0445 <br />\n            \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432\u043A\u043B\u0430\u0434 \u043A\u0430\u0436\u0434\u043E\u0433\u043E, <br />\n            \u0434\u0430\u0436\u0435 \u0441\u0430\u043C\u044B\u0439 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439.\n";
var goalToggle = "\n<span class=\"gray\">\u041D\u0430\u043C \u0432\u0430\u0436\u043D\u044B</span> \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F, <br />\n\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u043C\u043E\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 <span class=\"gray\">\u043D\u0430\u0448\u0438\u0445</span> <br />\n\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439<span class=\"gray\">, \u0430 \u0442\u0430\u043A\u0436\u0435</span> \u0432\u043A\u043B\u0430\u0434 \u043A\u0430\u0436\u0434\u043E\u0433\u043E<span class=\"gray\">, <br />\n\u0434\u0430\u0436\u0435 \u0441\u0430\u043C\u044B\u0439 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439.</span>\n";
var missionDefault = "\u041D\u0430\u0448\u0430 \u043C\u0438\u0441\u0441\u0438\u044F \u2014 \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043E\u0442 \u043C\u0443\u0441\u043E\u0440\u0430 <br />\n            \u0432\u0435\u0441\u044C \u043C\u0438\u0440!\n";
var missionToggle = "<span class=\"gray\">\u041D\u0430\u0448\u0430 \u043C\u0438\u0441\u0441\u0438\u044F \u2014 </span>\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043E\u0442 \u043C\u0443\u0441\u043E\u0440\u0430 <br />\n            \u0432\u0435\u0441\u044C \u043C\u0438\u0440!\n";
var headerDefault = "\n\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0442\u0435\u043A\u0441\u0442, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0430\u043C\u043E\u0435\n\u0432\u0430\u0436\u043D\u043E\u0435.\n";
var headerToggle = "\n<span class=\"gray\">\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0442\u0435\u043A\u0441\u0442, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C</span> \u0441\u0430\u043C\u043E\u0435\n\u0432\u0430\u0436\u043D\u043E\u0435.\n";
var pravilaOneDefault = "\n\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0438\u043C\u0435\u0435\u0442 \u043E\u0434\u0438\u043D \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u2014 \u0447\u0435\u0440\u043D\u044B\u0439 <br />\n\u0431\u0435\u0437 \u0444\u043E\u043D\u0430. \u0412\u0441\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0447\u0435\u0440\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u044B <br />\n\u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F \u0432 \u043B\u0435\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 <br />\n\u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0441\u0432\u0435\u0440\u0445\u0443 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435.\n";
var pravilaOneToggle = "\n<span class=\"gray\">\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0438\u043C\u0435\u0435\u0442</span> \u043E\u0434\u0438\u043D \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 <span class=\"gray\">\u2014</span> \u0447\u0435\u0440\u043D\u044B\u0439 <br />\n\u0431\u0435\u0437 \u0444\u043E\u043D\u0430. \u0412\u0441\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0447\u0435\u0440\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 <span class=\"gray\">\u0434\u043E\u043B\u0436\u043D\u044B <br />\n\u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F</span> \u0432 \u043B\u0435\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 <br />\n\u0432\u0430\u0440\u0438\u0430\u043D\u0442 <span class=\"gray\">\u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F</span> \u0441\u0432\u0435\u0440\u0445\u0443 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435.\n";
var colorsDefault = "\n\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u0446\u0432\u0435\u0442\u0430\u043C\u0438 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u043D\u044B\u0439 \u0438 \u0441\u0432\u0435\u0442\u043B\u043E-\u0441\u0435\u0440\u044B\u0439. \u042D\u0442\u043E \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435\n          \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 <br />\n          \u0446\u0432\u0435\u0442\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439 \u0438 \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u0442 \u0438\u0437\n          \u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u044B\u0445,<br />\n          \u044F\u0440\u043A\u0438\u0445 \u0446\u0432\u0435\u0442\u043E\u0432. \u0422\u0430\u043A\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0438\u0437\u0430\u0439\u043D \u0431\u043E\u043B\u0435\u0435\n          \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C.\n";
var colorsToggle = "\n  \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 <span class=\"gray\">\u0446\u0432\u0435\u0442\u0430\u043C\u0438</span> \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u043D\u044B\u0439 \u0438 \u0441\u0432\u0435\u0442\u043B\u043E-\u0441\u0435\u0440\u044B\u0439. \u042D\u0442\u043E \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435\n\u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 <br />\n<span class=\"gray\">\u0446\u0432\u0435\u0442\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439 \u0438 \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432.</span> \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u0442 \u0438\u0437\n\u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u044B\u0445,<br />\n\u044F\u0440\u043A\u0438\u0445 \u0446\u0432\u0435\u0442\u043E\u0432<span class=\"gray\">. \u0422\u0430\u043A\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0438\u0437\u0430\u0439\u043D \u0431\u043E\u043B\u0435\u0435\n\u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C.</span>\n";
var pravilaTwoDefault = "\n\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B, \u043A\u0430\u043A \u0434\u043B\u044F \u0444\u043E\u043D\u0430 <br />\n          \u0438 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438, \u0442\u0430\u043A \u0438 \u0434\u043B\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0438. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 <br />\n          \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0432 3D \u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u043D\u0430 <br />\n          \u043D\u0430 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044F\u0445.\n";
var pravilaTwoToggle = "\n\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 <span class=\"gray\">\u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B, \u043A\u0430\u043A</span> \u0434\u043B\u044F \u0444\u043E\u043D\u0430 <br />\n          \u0438 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438<span class=\"gray\">, \u0442\u0430\u043A \u0438 \u0434\u043B\u044F</span> \u0433\u0440\u0430\u0444\u0438\u043A\u0438. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 <br />\n          <span class=\"gray\">\u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B</span> \u0442\u043E\u043B\u044C\u043A\u043E \u0432 3D \u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u043D\u0430 <br />\n          \u043D\u0430 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044F\u0445.\n";
var typographyDefault = "\n\u041C\u0435\u0442\u0430\u0444\u043E\u0440\u0430 \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u2014 \u0438\u0437 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438\n          <br />\u043E\u0442\u043E\u0431\u0440\u0430\u0442\u044C \u0438 \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0430\u043C\u0443\u044E \u043D\u0443\u0436\u043D\u0443\u044E \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u0443\u044E.\n";
var typographyToggle = "\n<span class=\"gray\">\u041C\u0435\u0442\u0430\u0444\u043E\u0440\u0430 \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u2014</span> \u0438\u0437 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438\n          <br />\u043E\u0442\u043E\u0431\u0440\u0430\u0442\u044C \u0438 \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0430\u043C\u0443\u044E \u043D\u0443\u0436\u043D\u0443\u044E \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u0443\u044E.\n";
var compositionDefault = "\n<span class=\"gray\">\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0441\u0435</span> \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \xAB\u0441\u043B\u0438\u043F\u0448\u0438\u043C\u0438\u0441\u044F\xBB,\n          <br />\u043E\u0434\u043D\u0430\u043A\u043E<span class=\"gray\">, \u0441\u0442\u043E\u0438\u0442 \u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043E \xAB\u0432\u043E\u0437\u0434\u0443\u0445\u0435\xBB \u0438 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0438 \u0438</span> \u043D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0442\u044C\n          \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C <br />\n          \u043F\u0443\u0441\u0442\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E.\n";
var compositionToggle = "\n\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0441\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \xAB\u0441\u043B\u0438\u043F\u0448\u0438\u043C\u0438\u0441\u044F\xBB,\n          <br />\u043E\u0434\u043D\u0430\u043A\u043E, \u0441\u0442\u043E\u0438\u0442 \u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043E \xAB\u0432\u043E\u0437\u0434\u0443\u0445\u0435\xBB \u0438 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0438 \u0438 \u043D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0442\u044C\n          \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C <br />\n          \u043F\u0443\u0441\u0442\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E.\n";
var pravilaThreeDefault = "\n\u0415\u0441\u043B\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0430 \u0447\u0435\u0440\u043D\u043E\u043C \u0444\u043E\u043D\u0435 \u0438 \u0441\u0442\u043E\u0438\u0442 \u0432 \u043B\u0435\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443, \u0442\u043E\n          \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A <br />\n          \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u043E\u0447\u043A\u0435. \u0415\u0441\u043B\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0444\u043E\u043D\u0430 \u0438 \u0441\u0442\u043E\u0438\u0442\n          \u0441\u0432\u0435\u0440\u0445\u0443\n          <br />\n          \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435, \u0442\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u044C \u043F\u043E\u0434 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u043C.\n";
var pravilaThreeToggle = "\n<span class=\"gray\">\u0415\u0441\u043B\u0438</span> \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0430 \u0447\u0435\u0440\u043D\u043E\u043C \u0444\u043E\u043D\u0435<span class=\"gray\"> \u0438 \u0441\u0442\u043E\u0438\u0442 \u0432 \u043B\u0435\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443, \u0442\u043E</span>\n          \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A <br />\n          \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u043E\u0447\u043A\u0435. <span class=\"gray\">\u0415\u0441\u043B\u0438</span> \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0444\u043E\u043D\u0430 <span class=\"gray\">\u0438 \u0441\u0442\u043E\u0438\u0442\n          \u0441\u0432\u0435\u0440\u0445\u0443\n          <br />\n          \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435, \u0442\u043E</span> \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A <span class=\"gray\">\u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u044C</span> \u043F\u043E\u0434 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u043C.\n";
var graphicsDefault = "\n\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u043C\u043E\u0436\u043D\u043E <br />\n            \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0437\u043D\u0430\u043A\u0438 \u043C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u043A\u0438, <br />\n            \u0430 \u0442\u0430\u043A\u0436\u0435 3D \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 <br />\n            \u0432 \u044F\u0440\u043A\u0438\u0445, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u0430\u0445.\n";
var graphicsToggle = "\n<span class=\"gray\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u0438</span> \u043C\u043E\u0436\u043D\u043E <br />\n            \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0437\u043D\u0430\u043A\u0438 \u043C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u043A\u0438, <br />\n            <span class=\"gray\">\u0430 \u0442\u0430\u043A\u0436\u0435</span> 3D \u043E\u0431\u044A\u0435\u043A\u0442\u044B<span class=\"gray\"> \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 <br />\n            \u0432 \u044F\u0440\u043A\u0438\u0445, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u0430\u0445.</span>\n";
var brandBtn = document.getElementById('brand-btn');
var weBtn = document.getElementById('we-btn');
var goalBtn = document.getElementById('goal-btn');
var missionBtn = document.getElementById('mission-btn');
var headerBtn = document.getElementById('header-btn');
var pravilaOneBtn = document.getElementById('pravila-one-btn');
var pravilaTwoBtn = document.getElementById('pravila-two-btn');
var pravilaThreeBtn = document.getElementById('pravila-three-btn');
var colorsBtn = document.getElementById('colors-btn');
var typographyBtn = document.getElementById('typography-btn');
var compositionBtn = document.getElementById('composition-btn');
var graphicsBtn = document.getElementById('graphics-btn');
var brandText = document.getElementById('brand-text');
var weText = document.getElementById('we-text');
var goalText = document.getElementById('goal-text');
var missionText = document.getElementById('mission-text');
var headerText = document.getElementById('header-text');
var pravilaOneText = document.getElementById('pravila-one-text');
var pravilaTwoText = document.getElementById('pravila-two-text');
var pravilaThreeText = document.getElementById('pravila-three-text');
var colorsText = document.getElementById('colors-text');
var typographyText = document.getElementById('typography-text');
var compositionText = document.getElementById('composition-text');
var graphicsText = document.getElementById('graphics-text');
brandBtn === null || brandBtn === void 0 ? void 0 : brandBtn.addEventListener('click', function () {
  var _brandBtn$dataset;

  if (!brandText) return;

  if ((brandBtn === null || brandBtn === void 0 ? void 0 : (_brandBtn$dataset = brandBtn.dataset) === null || _brandBtn$dataset === void 0 ? void 0 : _brandBtn$dataset.text) === 'default') {
    brandText.innerHTML = brandToggle;
    brandBtn.dataset.text = 'toggle';
    return;
  }

  brandText.innerHTML = brandDefault;
  brandBtn.dataset.text = 'default';
});
weBtn === null || weBtn === void 0 ? void 0 : weBtn.addEventListener('click', function () {
  var _weBtn$dataset;

  if (!weText) return;

  if ((weBtn === null || weBtn === void 0 ? void 0 : (_weBtn$dataset = weBtn.dataset) === null || _weBtn$dataset === void 0 ? void 0 : _weBtn$dataset.text) === 'default') {
    weText.innerHTML = weToggle;
    weBtn.dataset.text = 'toggle';
    return;
  }

  weText.innerHTML = weDefault;
  weBtn.dataset.text = 'default';
});
goalBtn === null || goalBtn === void 0 ? void 0 : goalBtn.addEventListener('click', function () {
  var _goalBtn$dataset;

  if (!goalText) return;

  if ((goalBtn === null || goalBtn === void 0 ? void 0 : (_goalBtn$dataset = goalBtn.dataset) === null || _goalBtn$dataset === void 0 ? void 0 : _goalBtn$dataset.text) === 'default') {
    goalText.innerHTML = goalToggle;
    goalBtn.dataset.text = 'toggle';
    return;
  }

  goalText.innerHTML = goalDefault;
  goalBtn.dataset.text = 'default';
});
missionBtn === null || missionBtn === void 0 ? void 0 : missionBtn.addEventListener('click', function () {
  var _missionBtn$dataset;

  if (!missionText) return;

  if ((missionBtn === null || missionBtn === void 0 ? void 0 : (_missionBtn$dataset = missionBtn.dataset) === null || _missionBtn$dataset === void 0 ? void 0 : _missionBtn$dataset.text) === 'default') {
    missionText.innerHTML = missionToggle;
    missionBtn.dataset.text = 'toggle';
    return;
  }

  missionText.innerHTML = missionDefault;
  missionBtn.dataset.text = 'default';
});
headerBtn === null || headerBtn === void 0 ? void 0 : headerBtn.addEventListener('click', function () {
  var _headerBtn$dataset;

  if (!headerText) return;

  if ((headerBtn === null || headerBtn === void 0 ? void 0 : (_headerBtn$dataset = headerBtn.dataset) === null || _headerBtn$dataset === void 0 ? void 0 : _headerBtn$dataset.text) === 'default') {
    headerText.innerHTML = headerToggle;
    headerBtn.dataset.text = 'toggle';
    return;
  }

  headerText.innerHTML = headerDefault;
  headerBtn.dataset.text = 'default';
});
pravilaOneBtn === null || pravilaOneBtn === void 0 ? void 0 : pravilaOneBtn.addEventListener('click', function () {
  var _pravilaOneBtn$datase;

  if (!pravilaOneText) return;

  if ((pravilaOneBtn === null || pravilaOneBtn === void 0 ? void 0 : (_pravilaOneBtn$datase = pravilaOneBtn.dataset) === null || _pravilaOneBtn$datase === void 0 ? void 0 : _pravilaOneBtn$datase.text) === 'default') {
    pravilaOneText.innerHTML = pravilaOneToggle;
    pravilaOneBtn.dataset.text = 'toggle';
    return;
  }

  pravilaOneText.innerHTML = pravilaOneDefault;
  pravilaOneBtn.dataset.text = 'default';
});
pravilaTwoBtn === null || pravilaTwoBtn === void 0 ? void 0 : pravilaTwoBtn.addEventListener('click', function () {
  var _pravilaTwoBtn$datase;

  if (!pravilaTwoText) return;

  if ((pravilaTwoBtn === null || pravilaTwoBtn === void 0 ? void 0 : (_pravilaTwoBtn$datase = pravilaTwoBtn.dataset) === null || _pravilaTwoBtn$datase === void 0 ? void 0 : _pravilaTwoBtn$datase.text) === 'default') {
    pravilaTwoText.innerHTML = pravilaTwoToggle;
    pravilaTwoBtn.dataset.text = 'toggle';
    return;
  }

  pravilaTwoText.innerHTML = pravilaTwoDefault;
  pravilaTwoBtn.dataset.text = 'default';
});
pravilaThreeBtn === null || pravilaThreeBtn === void 0 ? void 0 : pravilaThreeBtn.addEventListener('click', function () {
  var _pravilaThreeBtn$data;

  if (!pravilaThreeText) return;

  if ((pravilaThreeBtn === null || pravilaThreeBtn === void 0 ? void 0 : (_pravilaThreeBtn$data = pravilaThreeBtn.dataset) === null || _pravilaThreeBtn$data === void 0 ? void 0 : _pravilaThreeBtn$data.text) === 'default') {
    pravilaThreeText.innerHTML = pravilaThreeToggle;
    pravilaThreeBtn.dataset.text = 'toggle';
    return;
  }

  pravilaThreeText.innerHTML = pravilaThreeDefault;
  pravilaThreeBtn.dataset.text = 'default';
});
colorsBtn === null || colorsBtn === void 0 ? void 0 : colorsBtn.addEventListener('click', function () {
  var _colorsBtn$dataset;

  if (!colorsText) return;

  if ((colorsBtn === null || colorsBtn === void 0 ? void 0 : (_colorsBtn$dataset = colorsBtn.dataset) === null || _colorsBtn$dataset === void 0 ? void 0 : _colorsBtn$dataset.text) === 'default') {
    colorsText.innerHTML = colorsToggle;
    colorsBtn.dataset.text = 'toggle';
    return;
  }

  colorsText.innerHTML = colorsDefault;
  colorsBtn.dataset.text = 'default';
});
typographyBtn === null || typographyBtn === void 0 ? void 0 : typographyBtn.addEventListener('click', function () {
  var _typographyBtn$datase;

  if (!typographyText) return;

  if ((typographyBtn === null || typographyBtn === void 0 ? void 0 : (_typographyBtn$datase = typographyBtn.dataset) === null || _typographyBtn$datase === void 0 ? void 0 : _typographyBtn$datase.text) === 'default') {
    typographyText.innerHTML = typographyToggle;
    typographyBtn.dataset.text = 'toggle';
    return;
  }

  typographyText.innerHTML = typographyDefault;
  typographyBtn.dataset.text = 'default';
});
compositionBtn === null || compositionBtn === void 0 ? void 0 : compositionBtn.addEventListener('click', function () {
  var _compositionBtn$datas;

  if (!compositionText) return;

  if ((compositionBtn === null || compositionBtn === void 0 ? void 0 : (_compositionBtn$datas = compositionBtn.dataset) === null || _compositionBtn$datas === void 0 ? void 0 : _compositionBtn$datas.text) === 'default') {
    compositionText.innerHTML = compositionToggle;
    compositionBtn.dataset.text = 'toggle';
    return;
  }

  compositionText.innerHTML = compositionDefault;
  compositionBtn.dataset.text = 'default';
});
graphicsBtn === null || graphicsBtn === void 0 ? void 0 : graphicsBtn.addEventListener('click', function () {
  var _graphicsBtn$dataset;

  if (!graphicsText) return;

  if ((graphicsBtn === null || graphicsBtn === void 0 ? void 0 : (_graphicsBtn$dataset = graphicsBtn.dataset) === null || _graphicsBtn$dataset === void 0 ? void 0 : _graphicsBtn$dataset.text) === 'default') {
    graphicsText.innerHTML = graphicsToggle;
    graphicsBtn.dataset.text = 'toggle';
    return;
  }

  graphicsText.innerHTML = graphicsDefault;
  graphicsBtn.dataset.text = 'default';
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/javascript/back.js
var back = __webpack_require__(971);
;// CONCATENATED MODULE: ./src/images/telegram.svg
const telegram_namespaceObject = __webpack_require__.p + "images/32fe9deeb3e954bf0af6.svg";
;// CONCATENATED MODULE: ./src/images/vk.svg
const vk_namespaceObject = __webpack_require__.p + "images/4402ecaacabb371ffe96.svg";
;// CONCATENATED MODULE: ./src/images/instagram.svg
const instagram_namespaceObject = __webpack_require__.p + "images/bbc815194939c29a83b7.svg";
;// CONCATENATED MODULE: ./src/images/promo/recycle.svg
const recycle_namespaceObject = __webpack_require__.p + "images/779f4be0580600180a58.svg";
;// CONCATENATED MODULE: ./src/images/search.svg
const search_namespaceObject = __webpack_require__.p + "images/46ce9bfefcdc28e38292.svg";
;// CONCATENATED MODULE: ./src/images/arrow.svg
const arrow_namespaceObject = __webpack_require__.p + "images/5fa36d28f54964b50110.svg";
;// CONCATENATED MODULE: ./src/javascript/hamburger.js






var hamburger = document.querySelector('#hamburger');
var hamburgerPhone = document.querySelector('#hamburger-phone');
var pageHamburger = document.querySelector('#page-hamburger');

function toggleHamburger() {
  document.querySelector('.menu__container').classList.toggle('hidden');
  document.querySelector('#hamburger-close').classList.toggle('hidden');
  document.querySelectorAll('.hamburger__line').forEach(function (line) {
    line.classList.toggle('hidden');
  });
}

function toggleHamburgerPhone() {
  document.querySelector('.menu-phone__container').classList.toggle('hidden');
  document.querySelector('#hamburger-phone-close').classList.toggle('hidden');
  document.querySelectorAll('.hamburger-phone__line').forEach(function (line) {
    line.classList.toggle('hidden');
  });
}

function togglePageHamburger() {
  document.querySelector('.page-navbar__container').classList.toggle('hidden');
  document.querySelector('#hamburger-close').classList.toggle('hidden');
  document.querySelectorAll('.hamburger__line').forEach(function (line) {
    line.classList.toggle('hidden');
  });
}

hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', toggleHamburger);
hamburgerPhone === null || hamburgerPhone === void 0 ? void 0 : hamburgerPhone.addEventListener('click', toggleHamburgerPhone);
pageHamburger === null || pageHamburger === void 0 ? void 0 : pageHamburger.addEventListener('click', togglePageHamburger);

if (document.querySelector('.telegram-logo')) {
  document.querySelector('.telegram-logo').src = telegram_namespaceObject;
}

if (document.querySelector('.insta-logo')) {
  document.querySelector('.insta-logo').src = instagram_namespaceObject;
}

if (document.querySelector('.vk-logo')) {
  document.querySelector('.vk-logo').src = vk_namespaceObject;
}

if (document.querySelector('.recycle-logo')) {
  document.querySelector('.recycle-logo').src = recycle_namespaceObject;
} // search icon


var search = document.querySelector('.search-icon');
if (search) search.src = search_namespaceObject; // back icon

var hamburger_back = document.querySelector('.back-icon');
if (hamburger_back) hamburger_back.src = arrow_namespaceObject;
// EXTERNAL MODULE: ./src/javascript/promo.js
var promo = __webpack_require__(761);
// EXTERNAL MODULE: ./src/javascript/slider.js
var slider = __webpack_require__(327);
// EXTERNAL MODULE: ./src/javascript/styleguide.js
var styleguide = __webpack_require__(529);
;// CONCATENATED MODULE: ./src/index.js






})();

/******/ })()
;
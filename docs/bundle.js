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
var pageHamburger = document.querySelector('#page-hamburger');

function toggleHamburger() {
  document.querySelector('.menu__container').classList.toggle('hidden');
  document.querySelector('#hamburger-close').classList.toggle('hidden');
  document.querySelectorAll('.hamburger__line').forEach(function (line) {
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
pageHamburger === null || pageHamburger === void 0 ? void 0 : pageHamburger.addEventListener('click', togglePageHamburger);
document.querySelector('.telegram-logo').src = telegram_namespaceObject;
document.querySelector('.insta-logo').src = instagram_namespaceObject;
document.querySelector('.vk-logo').src = vk_namespaceObject;
document.querySelector('.recycle-logo').src = recycle_namespaceObject; // search icon

document.querySelector('.search-icon').src = search_namespaceObject; // back icon

document.querySelector('.back-icon').src = arrow_namespaceObject;
// EXTERNAL MODULE: ./src/javascript/promo.js
var promo = __webpack_require__(761);
;// CONCATENATED MODULE: ./src/index.js




})();

/******/ })()
;
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPixelColor": function() { return /* binding */ getPixelColor; },
/* harmony export */   "getChunksOfPixelColor": function() { return /* binding */ getChunksOfPixelColor; },
/* harmony export */   "isEmptyPixel": function() { return /* binding */ isEmptyPixel; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


function getPixelColor(pixels, position) {
  var color = [];

  for (var j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_0__.PIXEL_SIZE; j++) {
    color.push(pixels[position + j]);
  }

  return color;
}
function getChunksOfPixelColor(pixels, position, chunks, size) {
  var colors = [];
  var yMax = Math.min(chunks.y);

  var rendered = __assign({}, chunks);

  var index = position / _constants__WEBPACK_IMPORTED_MODULE_0__.PIXEL_SIZE;
  var indexSizeWidth = Math.floor(index / size.width) * size.width;

  for (var y = 0; y < yMax; y++) {
    var yPosition = y * size.width * _constants__WEBPACK_IMPORTED_MODULE_0__.PIXEL_SIZE;
    var xMax = position + chunks.x * _constants__WEBPACK_IMPORTED_MODULE_0__.PIXEL_SIZE;
    var xMaxIndex = xMax / _constants__WEBPACK_IMPORTED_MODULE_0__.PIXEL_SIZE;
    var xsSafeMaxWidth = Math.floor(xMaxIndex / size.width) * size.width;

    if (xsSafeMaxWidth !== indexSizeWidth && xMaxIndex > xsSafeMaxWidth) {
      rendered.x = chunks.x - (xMaxIndex - xsSafeMaxWidth);
      xMax = position + rendered.x * _constants__WEBPACK_IMPORTED_MODULE_0__.PIXEL_SIZE;
    }

    for (var x = position; x < xMax; x++) {
      var pixel = yPosition + x;
      colors.push(pixels[pixel]);
    }
  }

  return __assign(__assign({}, rendered), {
    colors: colors
  });
}
function isEmptyPixel(array) {
  for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_PIXEL.length; i++) {
    if (_constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_PIXEL[i] !== array[i]) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FONT_SIZE": function() { return /* binding */ FONT_SIZE; },
/* harmony export */   "EMPTY_PIXEL": function() { return /* binding */ EMPTY_PIXEL; },
/* harmony export */   "PIXEL_SIZE": function() { return /* binding */ PIXEL_SIZE; }
/* harmony export */ });
var FONT_SIZE = 200;
var EMPTY_PIXEL = [0, 0, 0, 0];
var PIXEL_SIZE = 4;

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCanvas": function() { return /* binding */ initCanvas; },
/* harmony export */   "drawText": function() { return /* binding */ drawText; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function initCanvas(height, width) {
  var canvas = document.getElementById("canvas");
  canvas.height = height || window.innerHeight / 2;
  canvas.width = width || window.innerWidth;
  var ctx = canvas.getContext('2d');
  var h = canvas.height;
  var w = canvas.width;
  var ww = w / 2;
  var hh = h / 2;
  return {
    canvas: canvas,
    ctx: ctx,
    h: h,
    w: w,
    hh: hh,
    ww: ww
  };
}
function drawText(ctx, text, x, y) {
  if (x === void 0) {
    x = 0;
  }

  if (y === void 0) {
    y = 0;
  }

  ctx.font = "900 " + _constants__WEBPACK_IMPORTED_MODULE_0__.FONT_SIZE + "px Arial";
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillText(text, x, y);
}

/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pixels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);




(function name() {
  var _a = (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.initCanvas)(),
      ctx = _a.ctx,
      h = _a.h,
      w = _a.w;

  var string = "Hamza Iqbal";
  (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawText)(ctx, string);
  var size = {
    width: 80,
    height: 20
  };
  var image = ctx.getImageData(0, 0, size.width, size.height);
  var pixels = image.data;
  var limit = size.width * size.height * _constants__WEBPACK_IMPORTED_MODULE_2__.PIXEL_SIZE;
  var oo = 200;
  var count = 0;
  var chunks = {
    x: 9,
    y: 3
  };

  function loop() {
    var pixelChunks = (0,_pixels__WEBPACK_IMPORTED_MODULE_0__.getChunksOfPixelColor)(pixels, count, chunks, size);
    var p = count / _constants__WEBPACK_IMPORTED_MODULE_2__.PIXEL_SIZE;
    var y = Math.floor(p / size.width);
    var x = p - y * size.width;
    var imageData = new ImageData(Uint8ClampedArray.from(pixelChunks.colors), pixelChunks.x, pixelChunks.y);
    ctx.putImageData(imageData, oo + x, oo + y);

    if (count >= limit) {
      console.log(count, limit, pixelChunks.y);
      return;
    }

    count += _constants__WEBPACK_IMPORTED_MODULE_2__.PIXEL_SIZE * pixelChunks.x;
    var yIndex = Math.floor(count / _constants__WEBPACK_IMPORTED_MODULE_2__.PIXEL_SIZE / size.width);

    if (count == yIndex * size.width * _constants__WEBPACK_IMPORTED_MODULE_2__.PIXEL_SIZE) {
      count += size.width * _constants__WEBPACK_IMPORTED_MODULE_2__.PIXEL_SIZE * (chunks.y - 1);
    } // while(true) {
    //     if (isEmptyPixel(getPixelColor(pixels, count))) {
    //         count += PIXEL_SIZE;
    //     } else {
    //         break;
    //     }
    // }


    requestAnimationFrame(loop);
  }

  loop();
})();
}();
/******/ })()
;
//# sourceMappingURL=parsed-script.js.map
(function() {
var exports = {};
exports.id = "pages/api/random";
exports.ids = ["pages/api/random"];
exports.modules = {

/***/ "./pages/api/random.js":
/*!*****************************!*\
  !*** ./pages/api/random.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ random; }
/* harmony export */ });
function random(req, res) {
  let randoms = [0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i <= 6; i++) {
    let random = Math.floor(Math.random() * 45) + 1;

    for (let j = 0; j <= 6; j++) {
      if (randoms[j] == random) {
        randoms[i] = Math.floor(Math.random() * 45) + 1;
        break;
      } else {
        if (j == 6) {
          randoms[i] = random;
        }
      }
    }
  }

  for (let i = 0; i <= randoms.length - 2; i++) {
    let minIndex = i;

    for (let j = i + 1; j <= randoms.length - 2; j++) {
      if (randoms[minIndex] > randoms[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let swap = randoms[minIndex];
      randoms[minIndex] = randoms[i];
      randoms[i] = swap;
    }
  }

  return res.send({
    Random1: randoms[0],
    Random2: randoms[1],
    Random3: randoms[2],
    Random4: randoms[3],
    Random5: randoms[4],
    Random6: randoms[5],
    Random7: randoms[6]
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/random.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aC0yMDIxLy4vcGFnZXMvYXBpL3JhbmRvbS5qcyJdLCJuYW1lcyI6WyJyYW5kb20iLCJyZXEiLCJyZXMiLCJyYW5kb21zIiwiaSIsIk1hdGgiLCJmbG9vciIsImoiLCJsZW5ndGgiLCJtaW5JbmRleCIsInN3YXAiLCJzZW5kIiwiUmFuZG9tMSIsIlJhbmRvbTIiLCJSYW5kb20zIiwiUmFuZG9tNCIsIlJhbmRvbTUiLCJSYW5kb202IiwiUmFuZG9tNyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsR0FBckIsRUFBeUI7QUFDcEMsTUFBSUMsT0FBTyxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFkOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxJQUFFLENBQWxCLEVBQW9CQSxDQUFDLEVBQXJCLEVBQXdCO0FBQ3BCLFFBQUlKLE1BQU0sR0FBR0ssSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0wsTUFBTCxLQUFnQixFQUEzQixJQUFpQyxDQUE5Qzs7QUFDQSxTQUFJLElBQUlPLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsSUFBRSxDQUFsQixFQUFxQkEsQ0FBQyxFQUF0QixFQUF5QjtBQUVyQixVQUFHSixPQUFPLENBQUNJLENBQUQsQ0FBUCxJQUFjUCxNQUFqQixFQUF3QjtBQUNwQkcsZUFBTyxDQUFDQyxDQUFELENBQVAsR0FBYUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0wsTUFBTCxLQUFnQixFQUEzQixJQUFpQyxDQUE5QztBQUNBO0FBQ0gsT0FIRCxNQUdNO0FBQ0YsWUFBSU8sQ0FBQyxJQUFJLENBQVQsRUFBVztBQUNQSixpQkFBTyxDQUFDQyxDQUFELENBQVAsR0FBYUosTUFBYjtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUlELE9BQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSUQsT0FBTyxDQUFDSyxNQUFSLEdBQWUsQ0FBcEMsRUFBdUNKLENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsUUFBSUssUUFBUSxHQUFHTCxDQUFmOztBQUNBLFNBQUssSUFBSUcsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBakIsRUFBb0JHLENBQUMsSUFBSUosT0FBTyxDQUFDSyxNQUFSLEdBQWUsQ0FBeEMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDNUMsVUFBSUosT0FBTyxDQUFDTSxRQUFELENBQVAsR0FBb0JOLE9BQU8sQ0FBQ0ksQ0FBRCxDQUEvQixFQUFvQztBQUNoQ0UsZ0JBQVEsR0FBR0YsQ0FBWDtBQUNIO0FBQ0o7O0FBQ0QsUUFBSUUsUUFBUSxLQUFLTCxDQUFqQixFQUFvQjtBQUNoQixVQUFJTSxJQUFJLEdBQUdQLE9BQU8sQ0FBQ00sUUFBRCxDQUFsQjtBQUNBTixhQUFPLENBQUNNLFFBQUQsQ0FBUCxHQUFvQk4sT0FBTyxDQUFDQyxDQUFELENBQTNCO0FBQ0FELGFBQU8sQ0FBQ0MsQ0FBRCxDQUFQLEdBQWFNLElBQWI7QUFDSDtBQUNKOztBQUVELFNBQU9SLEdBQUcsQ0FBQ1MsSUFBSixDQUFTO0FBQUVDLFdBQU8sRUFBRVQsT0FBTyxDQUFDLENBQUQsQ0FBbEI7QUFBc0JVLFdBQU8sRUFBRVYsT0FBTyxDQUFDLENBQUQsQ0FBdEM7QUFBMENXLFdBQU8sRUFBRVgsT0FBTyxDQUFDLENBQUQsQ0FBMUQ7QUFBK0RZLFdBQU8sRUFBRVosT0FBTyxDQUFDLENBQUQsQ0FBL0U7QUFBbUZhLFdBQU8sRUFBRWIsT0FBTyxDQUFDLENBQUQsQ0FBbkc7QUFBdUdjLFdBQU8sRUFBRWQsT0FBTyxDQUFDLENBQUQsQ0FBdkg7QUFBMkhlLFdBQU8sRUFBRWYsT0FBTyxDQUFDLENBQUQ7QUFBM0ksR0FBVCxDQUFQO0FBQ0gsQyIsImZpbGUiOiJwYWdlcy9hcGkvcmFuZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tKHJlcSwgcmVzKXtcclxuICAgIGxldCByYW5kb21zID0gWzAsMCwwLDAsMCwwLDBdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaTw9NjtpKyspe1xyXG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0NSkgKyAxXHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgajw9NjsgaisrKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHJhbmRvbXNbal0gPT0gcmFuZG9tKXtcclxuICAgICAgICAgICAgICAgIHJhbmRvbXNbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0NSkgKyAxXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGogPT0gNil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tc1tpXSA9IHJhbmRvbVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmFuZG9tcy5sZW5ndGgtMjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG1pbkluZGV4ID0gaTtcclxuICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPD0gcmFuZG9tcy5sZW5ndGgtMjsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyYW5kb21zW21pbkluZGV4XSA+IHJhbmRvbXNbal0pIHtcclxuICAgICAgICAgICAgICAgIG1pbkluZGV4ID0galxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtaW5JbmRleCAhPT0gaSkge1xyXG4gICAgICAgICAgICBsZXQgc3dhcCA9IHJhbmRvbXNbbWluSW5kZXhdO1xyXG4gICAgICAgICAgICByYW5kb21zW21pbkluZGV4XSA9IHJhbmRvbXNbaV07XHJcbiAgICAgICAgICAgIHJhbmRvbXNbaV0gPSBzd2FwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzLnNlbmQoeyBSYW5kb20xOiByYW5kb21zWzBdLFJhbmRvbTI6IHJhbmRvbXNbMV0sUmFuZG9tMzogcmFuZG9tc1syXSwgUmFuZG9tNDogcmFuZG9tc1szXSxSYW5kb201OiByYW5kb21zWzRdLFJhbmRvbTY6IHJhbmRvbXNbNV0sUmFuZG9tNzogcmFuZG9tc1s2XX0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
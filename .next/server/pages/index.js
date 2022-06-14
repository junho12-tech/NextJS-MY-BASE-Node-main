(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ sex; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\glwns\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\JunhoWeb\\NextJS-MY-BASE-Node-main\\pages\\index.js";




function sex() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_1___default()('/api/random', _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__.default);

  function Reset() {
    return router.reload;
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "\uC5D0\uB7EC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this);
  }

  if (!data) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "\uB85C\uB529"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        textAlign: 'center',
        height: '100%'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\uB85C\uB610\uBC88\uD638\uCD94\uCCA8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "LOTTO",
          children: "\uAE08\uC8FC \uB85C\uB610 \uB2F9\uCCA8 \uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 23
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "circleContainer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: data.Random1 <= 10 ? "radious-yellow" : data.Random1 <= 20 ? "radious-blue" : data.Random1 <= 30 ? "radious-red" : data.Random1 <= 40 ? "radious-black" : data.Random1 <= 45 ? "radious-green" : "radious-gray",
            style: {
              marginRight: '30px'
            },
            children: data.Random1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 27
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: data.Random2 <= 10 ? "radious-yellow" : data.Random2 <= 20 ? "radious-blue" : data.Random2 <= 30 ? "radious-red" : data.Random2 <= 40 ? "radious-black" : data.Random2 <= 45 ? "radious-green" : "radious-gray",
            style: {
              marginRight: '30px'
            },
            children: data.Random2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 27
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: data.Random3 <= 10 ? "radious-yellow" : data.Random3 <= 20 ? "radious-blue" : data.Random3 <= 30 ? "radious-red" : data.Random3 <= 40 ? "radious-black" : data.Random3 <= 45 ? "radious-green" : "radious-gray",
            style: {
              marginRight: '30px'
            },
            children: data.Random3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 27
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: data.Random4 <= 10 ? "radious-yellow" : data.Random4 <= 20 ? "radious-blue" : data.Random4 <= 30 ? "radious-red" : data.Random4 <= 40 ? "radious-black" : data.Random4 <= 45 ? "radious-green" : "radious-gray",
            style: {
              marginRight: '30px'
            },
            children: data.Random4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 27
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: data.Random5 <= 10 ? "radious-yellow" : data.Random5 <= 20 ? "radious-blue" : data.Random5 <= 30 ? "radious-red" : data.Random5 <= 40 ? "radious-black" : data.Random5 <= 45 ? "radious-green" : "radious-gray",
            style: {
              marginRight: '30px'
            },
            children: data.Random5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 27
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: data.Random6 <= 10 ? "radious-yellow" : data.Random6 <= 20 ? "radious-blue" : data.Random6 <= 30 ? "radious-red" : data.Random6 <= 40 ? "radious-black" : data.Random6 <= 45 ? "radious-green" : "radious-gray",
            style: {
              marginRight: '30px'
            },
            children: data.Random6
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 27
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "radious-plus",
            style: {
              marginRight: '30px'
            },
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 27
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            style: {
              marginRight: '30px'
            },
            className: data.Random7 <= 10 ? "radious-yellow" : data.Random7 <= 20 ? "radious-blue" : data.Random7 <= 30 ? "radious-red" : data.Random7 <= 40 ? "radious-black" : data.Random7 <= 45 ? "radious-green" : "radious-gray",
            children: data.Random7
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 27
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          className: "resetbtn",
          onClick: Reset(),
          style: {
            marginBottom: '10px'
          },
          children: "\uB9AC\uC14B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 134
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          className: "resetbtn",
          onClick: Reset(),
          style: {
            marginBottom: '700px'
          },
          children: "\uBC88\uD638 \uB9AC\uC2A4\uD2B8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this);
  }
}

/***/ }),

/***/ "./utils/fetcher.js":
/*!**************************!*\
  !*** ./utils/fetcher.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unfetch */ "unfetch");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_0__);


const fetcher = async (...args) => {
  const response = await unfetch__WEBPACK_IMPORTED_MODULE_0___default()(...args);
  return response.json();
};

/* harmony default export */ __webpack_exports__["default"] = (fetcher);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ }),

/***/ "unfetch":
/*!**************************!*\
  !*** external "unfetch" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("unfetch");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aC0yMDIxLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGgtMjAyMS8uL3V0aWxzL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGgtMjAyMS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdGgtMjAyMS9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovL3RoLTIwMjEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90aC0yMDIxL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vdGgtMjAyMS9leHRlcm5hbCBcInVuZmV0Y2hcIiJdLCJuYW1lcyI6WyJzZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXRhIiwiZXJyb3IiLCJ1c2VTV1IiLCJmZXRjaGVyIiwiUmVzZXQiLCJyZWxvYWQiLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJSYW5kb20xIiwibWFyZ2luUmlnaHQiLCJSYW5kb20yIiwiUmFuZG9tMyIsIlJhbmRvbTQiLCJSYW5kb201IiwiUmFuZG9tNiIsIlJhbmRvbTciLCJtYXJnaW5Cb3R0b20iLCJhcmdzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLEdBQVQsR0FBYztBQUN6QixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBa0JDLDBDQUFNLENBQUMsYUFBRCxFQUFnQkMsbURBQWhCLENBQTlCOztBQUNBLFdBQVNDLEtBQVQsR0FBaUI7QUFDYixXQUFPTixNQUFNLENBQUNPLE1BQWQ7QUFDSDs7QUFDRCxNQUFJSixLQUFKLEVBQVU7QUFDTix3QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBS0g7O0FBQ0QsTUFBSSxD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SUFBVCxFQUFQO0FBQ0gsQ0FIRDs7QUFJQSwrREFBZWpCLE9BQWYsRTs7Ozs7Ozs7Ozs7QUNMQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vdXRpbHMvZmV0Y2hlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNleCgpe1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL3JhbmRvbScsIGZldGNoZXIpXG4gICAgZnVuY3Rpb24gUmVzZXQoKSB7XG4gICAgICAgIHJldHVybiByb3V0ZXIucmVsb2FkXG4gICAgfVxuICAgIGlmIChlcnJvcil7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIOyXkOufrFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgaWYgKCFkYXRhKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAg66Gc65SpXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1lbHNlIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIGhlaWdodDogJzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgPHRpdGxlPuuhnOuYkOuyiO2YuOy2lOyyqDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIkxPVFRPXCI+6riI7KO8IOuhnOuYkCDri7nssqgg67KI7Zi4PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaXJjbGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb20xIDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTEgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb20xIDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTEgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb20xIDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTF9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb20yIDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTIgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb20yIDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTIgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb20yIDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTJ9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb20zIDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTMgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb20zIDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTMgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb20zIDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb200IDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTQgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb200IDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTQgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb200IDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb201IDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTUgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb201IDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTUgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb201IDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb202IDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTYgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb202IDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTYgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb202IDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTZ9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJhZGlvdXMtcGx1c1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319ID4rPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319IGNsYXNzTmFtZT17ZGF0YS5SYW5kb203IDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTcgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb203IDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTcgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb203IDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9PntkYXRhLlJhbmRvbTd9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwicmVzZXRidG5cIiBvbkNsaWNrPXtSZXNldCgpfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzEwcHgnfX0gPuumrOyFizwvQnV0dG9uPiA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInJlc2V0YnRuXCIgb25DbGljaz17UmVzZXQoKX0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3MDBweCd9fT7rsojtmLgg66as7Iqk7Yq4PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59IiwiaW1wb3J0IGZldGNoIGZyb20gXCJ1bmZldGNoXCI7IFxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICguLi5hcmdzKSA9PiB7IFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goLi4uYXJncyk7IFxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IFxufTsgXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmZldGNoXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
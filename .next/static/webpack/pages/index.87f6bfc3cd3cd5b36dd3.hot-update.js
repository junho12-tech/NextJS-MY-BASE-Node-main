self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ sex; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\glwns\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\JunhoWeb\\NextJS-MY-BASE-Node-main\\pages\\index.js",
    _s = $RefreshSig$();





function sex() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)('/api/random', _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__.default),
      data = _useSWR.data,
      error = _useSWR.error;

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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
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

_s(sex, "F2OQGCTB9lgwThKfzWI7sczFgbA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, swr__WEBPACK_IMPORTED_MODULE_1__.default];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic2V4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU1dSIiwiZmV0Y2hlciIsImRhdGEiLCJlcnJvciIsIlJlc2V0IiwicmVsb2FkIiwidGV4dEFsaWduIiwiaGVpZ2h0IiwiUmFuZG9tMSIsIm1hcmdpblJpZ2h0IiwiUmFuZG9tMiIsIlJhbmRvbTMiLCJSYW5kb200IiwiUmFuZG9tNSIsIlJhbmRvbTYiLCJSYW5kb203IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsR0FBVCxHQUFjO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRHlCLGdCQUVEQyw0Q0FBTSxDQUFDLGFBQUQsRUFBZ0JDLG1EQUFoQixDQUZMO0FBQUEsTUFFakJDLElBRmlCLFdBRWpCQSxJQUZpQjtBQUFBLE1BRVhDLEtBRlcsV0FFWEEsS0FGVzs7QUFHekIsV0FBU0MsS0FBVCxHQUFpQjtBQUNiLFdBQU9OLE1BQU0sQ0FBQ08sTUFBZDtBQUNIOztBQUNELE1BQUlGLEtBQUosRUFBVTtBQUNOLHdCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSDs7QUFDRCxNQUFJLENBQUNELElBQUwsRUFBVTtBQUNOLHdCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSCxHQU5ELE1BTU07QUFDRix3QkFDSTtBQUFLLFdBQUssRUFBRTtBQUFDSSxpQkFBUyxFQUFFLFFBQVo7QUFBc0JDLGNBQU0sRUFBRTtBQUE5QixPQUFaO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVRO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFB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QUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFZSSw4REFBQyxtREFBRDtBQUFRLGlCQUFPLEVBQUMsU0FBaEI7QUFBMEIsbUJBQVMsRUFBQyxVQUFwQztBQUErQyxpQkFBTyxFQUFFWCxLQUFLLEVBQTdEO0FBQWlFLGVBQUssRUFBRTtBQUFDWSx3QkFBWSxFQUFFO0FBQWYsV0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkosb0JBWWlIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWmpILGVBYUksOERBQUMsbURBQUQ7QUFBUSxpQkFBTyxFQUFDLFNBQWhCO0FBQTBCLG1CQUFTLEVBQUMsVUFBcEM7QUFBK0MsaUJBQU8sRUFBRVosS0FBSyxFQUE3RDtBQUFpRSxlQUFLLEVBQUU7QUFBQ1ksd0JBQVksRUFBRTtBQUFmLFdBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBb0JIO0FBQ0o7O0dBekN1Qm5CLEc7VUFDTEUsa0QsRUFDU0Msd0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODdmNmJmYzNjZDNjZDViMzZkZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vdXRpbHMvZmV0Y2hlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNleCgpe1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL3JhbmRvbScsIGZldGNoZXIpXG4gICAgZnVuY3Rpb24gUmVzZXQoKSB7XG4gICAgICAgIHJldHVybiByb3V0ZXIucmVsb2FkXG4gICAgfVxuICAgIGlmIChlcnJvcil7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIOyXkOufrFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgaWYgKCFkYXRhKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAg66Gc65SpXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1lbHNlIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIGhlaWdodDogJzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgPHRpdGxlPuuhnOuYkOuyiO2YuOy2lOyyqDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIkxPVFRPXCI+6riI7KO8IOuhnOuYkCDri7nssqgg67KI7Zi4PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaXJjbGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb20xIDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTEgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb20xIDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTEgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb20xIDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTF9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb20yIDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTIgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb20yIDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTIgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb20yIDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTJ9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb20zIDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTMgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb20zIDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTMgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb20zIDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb200IDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTQgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb200IDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTQgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb200IDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb201IDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTUgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb201IDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTUgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb201IDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0YS5SYW5kb202IDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTYgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb202IDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTYgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb202IDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319PntkYXRhLlJhbmRvbTZ9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJhZGlvdXMtcGx1c1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319ID4rPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICczMHB4J319IGNsYXNzTmFtZT17ZGF0YS5SYW5kb203IDw9IDEwP1wicmFkaW91cy15ZWxsb3dcIjpkYXRhLlJhbmRvbTcgPD0gMjA/XCJyYWRpb3VzLWJsdWVcIjogZGF0YS5SYW5kb203IDw9IDMwP1wicmFkaW91cy1yZWRcIjpkYXRhLlJhbmRvbTcgPD0gNDA/XCJyYWRpb3VzLWJsYWNrXCI6ZGF0YS5SYW5kb203IDw9IDQ1P1wicmFkaW91cy1ncmVlblwiOlwicmFkaW91cy1ncmF5XCJ9PntkYXRhLlJhbmRvbTd9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwicmVzZXRidG5cIiBvbkNsaWNrPXtSZXNldCgpfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzEwcHgnfX0gPuumrOyFizwvQnV0dG9uPiA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInJlc2V0YnRuXCIgb25DbGljaz17UmVzZXQoKX0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3MDBweCd9fT7rsojtmLgg66as7Iqk7Yq4PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar _jsxFileName = \"/Users/jinwoohan/Documents/GitHub/react-tutorial/Chapter23-Nextjs/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\nvar DUMMY_MEETUPS = [{\n  id: \"m1\",\n  title: \"First meeetup\",\n  image: \"https://upload.wikimedia.org/wikipedia/commons/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg\",\n  address: \"Some address\",\n  description: \"First meetup at here\"\n}, {\n  id: \"m2\",\n  title: \"Second meeetup\",\n  image: \"https://upload.wikimedia.org/wikipedia/commons/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg\",\n  address: \"Some address 2\",\n  description: \"Second meetup at here\"\n}, {\n  id: \"m3\",\n  title: \"Third meeetup\",\n  image: \"https://upload.wikimedia.org/wikipedia/commons/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg\",\n  address: \"Some address 3\",\n  description: \"Third meetup at here\"\n}];\nvar __N_SSG = true;\nfunction HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      loadedMeetups = _useState[0],\n      setLoadedMeetups = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setLoadedMeetups(DUMMY_MEETUPS);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: loadedMeetups\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 10\n  }, this);\n}\n\n_s(HomePage, \"lt95aOlOC9RW+nrRzHOiZRPQygU=\");\n\n_c = HomePage;\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsImxvYWRlZE1lZXR1cHMiLCJzZXRMb2FkZWRNZWV0dXBzIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsZUFGVDtBQUdFQyxPQUFLLEVBQ0gsb0dBSko7QUFLRUMsU0FBTyxFQUFFLGNBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGdCQUZUO0FBR0VDLE9BQUssRUFDSCxvR0FKSjtBQUtFQyxTQUFPLEVBQUUsZ0JBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FUb0IsRUFpQnBCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxlQUZUO0FBR0VDLE9BQUssRUFDSCxvR0FKSjtBQUtFQyxTQUFPLEVBQUUsZ0JBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FqQm9CLENBQXRCOztBQTJCZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQzFCQyxhQUQwQjtBQUFBLE1BQ1hDLGdCQURXOztBQUVqQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RELG9CQUFnQixDQUFDVCxhQUFELENBQWhCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFUTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0FOdUJGLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuICB7XG4gICAgaWQ6IFwibTFcIixcbiAgICB0aXRsZTogXCJGaXJzdCBtZWVldHVwXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jNS9Ub2t5b19TaGlidXlhX1NjcmFtYmxlX0Nyb3NzaW5nXzIwMTgtMTAtMDkuanBnXCIsXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGaXJzdCBtZWV0dXAgYXQgaGVyZVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibTJcIixcbiAgICB0aXRsZTogXCJTZWNvbmQgbWVlZXR1cFwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2MvYzUvVG9reW9fU2hpYnV5YV9TY3JhbWJsZV9Dcm9zc2luZ18yMDE4LTEwLTA5LmpwZ1wiLFxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZWNvbmQgbWVldHVwIGF0IGhlcmVcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIm0zXCIsXG4gICAgdGl0bGU6IFwiVGhpcmQgbWVlZXR1cFwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2MvYzUvVG9reW9fU2hpYnV5YV9TY3JhbWJsZV9Dcm9zc2luZ18yMDE4LTEwLTA5LmpwZ1wiLFxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlyZCBtZWV0dXAgYXQgaGVyZVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xuICB9LCBbXSk7XG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfT48L01lZXR1cExpc3Q+O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _jsxFileName = "C:\\NodeJS\\react-twitter\\prepare\\front\\components\\FollowList.js",
    _this = undefined,
    _s = $RefreshSig$();








var FollowList = function FollowList(_ref) {
  _s();

  var header = _ref.header,
      data = _ref.data;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var onCancel = function onCancel(id) {
    return function () {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["UNFOLLOW_REQUEST"],
        data: id
      });
    };
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
    style: {
      marginBottom: 20
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }, _this),
    loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        children: "\uB354 \uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 70
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, _this),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
        style: {
          marginTop: 20
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["StopOutlined"], {
            onClick: onCancel(item.id)
          }, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 27
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
            description: item.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(FollowList, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c = FollowList;
FollowList.prototype = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2FuY2VsIiwiaWQiLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsIm1hcmdpbkJvdHRvbSIsImd1dHRlciIsInhzIiwibWQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJpdGVtIiwibWFyZ2luVG9wIiwibmlja25hbWUiLCJwcm90b3R5cGUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvQjtBQUFBOztBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDckMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxFQUFEO0FBQUEsV0FBUSxZQUFNO0FBQzdCSCxjQUFRLENBQUM7QUFDUEksWUFBSSxFQUFFQywrREFEQztBQUVQTixZQUFJLEVBQUVJO0FBRkMsT0FBRCxDQUFSO0FBSUQsS0FMZ0I7QUFBQSxHQUFqQjs7QUFNQSxzQkFDRSxxRUFBQyx5Q0FBRDtBQUNFLFNBQUssRUFBRTtBQUFDRyxrQkFBWSxFQUFFO0FBQWYsS0FEVDtBQUVFLFFBQUksRUFBRTtBQUFDQyxZQUFNLEVBQUMsQ0FBUjtBQUFXQyxRQUFFLEVBQUMsQ0FBZDtBQUFpQkMsUUFBRSxFQUFDO0FBQXBCLEtBRlI7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFVBQU0sZUFBRTtBQUFBLGdCQUFNWDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKVjtBQUtFLFlBQVEsZUFBRTtBQUFLLFdBQUssRUFBRTtBQUFDWSxpQkFBUyxFQUFFLFFBQVo7QUFBc0JDLGNBQU0sRUFBRTtBQUE5QixPQUFaO0FBQUEsNkJBQXFELHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMWjtBQU1FLFlBQVEsTUFOVjtBQU9FLGNBQVUsRUFBRVosSUFQZDtBQVFFLGNBQVUsRUFBRSxvQkFBQ2EsSUFBRDtBQUFBLDBCQUNWLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGFBQUssRUFBRTtBQUFDQyxtQkFBUyxFQUFFO0FBQVosU0FBbEI7QUFBQSwrQkFDRSxxRUFBQyx5Q0FBRDtBQUFNLGlCQUFPLEVBQUUsY0FBQyxxRUFBQyw4REFBRDtBQUF5QixtQkFBTyxFQUFFWCxRQUFRLENBQUNVLElBQUksQ0FBQ1QsRUFBTjtBQUExQyxhQUFrQixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFELENBQWY7QUFBQSxpQ0FDRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyx1QkFBVyxFQUFFUyxJQUFJLENBQUNFO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUE7QUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0ExQkQ7O0dBQU1qQixVO1VBQ2FJLHVEOzs7S0FEYkosVTtBQTRCTkEsVUFBVSxDQUFDa0IsU0FBWCxHQUF1QjtBQUNyQmpCLFFBQU0sRUFBRWtCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREo7QUFFckJuQixNQUFJLEVBQUVpQixpREFBUyxDQUFDRyxLQUFWLENBQWdCRDtBQUZELENBQXZCO0FBS2VyQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjExODc3Y2Q0YWM4Y2E2M2FlYzQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge0xpc3QsIEJ1dHRvbiwgQ2FyZH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7U3RvcE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7VU5GT0xMT1dfUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBGb2xsb3dMaXN0ID0gKHtoZWFkZXIsIGRhdGF9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG9uQ2FuY2VsID0gKGlkKSA9PiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGlkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RcclxuICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX1cclxuICAgICAgZ3JpZD17e2d1dHRlcjo0LCB4czoyLCBtZDozfX1cclxuICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxyXG4gICAgICBsb2FkTW9yZT17PGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCd9fT48QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj48L2Rpdj59XHJcbiAgICAgIGJvcmRlcmVkXHJcbiAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17e21hcmdpblRvcDogMjB9fT5cclxuICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiBvbkNsaWNrPXtvbkNhbmNlbChpdGVtLmlkKX0gLz5dfT5cclxuICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKVxyXG59O1xyXG5cclxuRm9sbG93TGlzdC5wcm90b3R5cGUgPSB7XHJcbiAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=
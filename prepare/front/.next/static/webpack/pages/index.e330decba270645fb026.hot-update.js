webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
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



var _jsxFileName = "C:\\NodeJS\\react-twitter\\prepare\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();







var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PostImages, {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 34
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {}, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {}, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "danger",
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 19
        }, _this),
        title: post.User.nickname,
        description: post.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_s(PostCard, "FJdoDJNyUlJ5WKWdRipc5DguCUQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJDb21tZW50cyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDM0IsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSw2QkFBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQXRCLG1EQUFXLGVBQWVKLEVBQTFCO0FBQUEsR0FBRCxDQUF0QjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMseUNBQUQ7QUFDRSxXQUFLLEVBQUVELElBQUksQ0FBQ00sTUFBTCxDQUFZLENBQVosa0JBQWtCLHFFQUFDLFVBQUQ7QUFBWSxjQUFNLEVBQUVOLElBQUksQ0FBQ007QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQzQjtBQUVFLGFBQU8sRUFBRSxjQUNQLHFFQUFDLGlFQUFELE1BQXFCLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETyxlQUVQLHFFQUFDLCtEQUFELE1BQW1CLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGTyxlQUdQLHFFQUFDLGlFQUFELE1BQXFCLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFITyxlQUlQLHFFQUFDLDRDQUFEO0FBQW9CLGVBQU8sZUFDekIscUVBQUMsMkNBQUQsQ0FBUSxLQUFSO0FBQUEsb0JBQ0dMLEVBQUUsSUFBSUQsSUFBSSxDQUFDTyxJQUFMLENBQVVOLEVBQVYsS0FBaUJBLEVBQXZCLGdCQUVDO0FBQUEsb0NBQ0UscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQywyQ0FBRDtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLDBCQUZELGdCQU9DLHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBLCtCQVlFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRixTQUFhLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpPLENBRlg7QUFBQSw2QkFzQkUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsY0FBTSxlQUFFLHFFQUFDLDJDQUFEO0FBQUEsb0JBQVNELElBQUksQ0FBQ08sSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVjtBQUVFLGFBQUssRUFBRVIsSUFBSSxDQUFDTyxJQUFMLENBQVVDLFFBRm5CO0FBR0UsbUJBQVcsRUFBRVIsSUFBSSxDQUFDUztBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQ0QsQ0FwQ0Q7O0dBQU1WLFE7VUFDT0csdUQ7OztLQURQSCxRO0FBc0NOQSxRQUFRLENBQUNXLFNBQVQsR0FBcUI7QUFDbkJWLE1BQUksRUFBRVcsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNwQlgsTUFBRSxFQUFFVSxpREFBUyxDQUFDRSxNQURNO0FBRXBCTixRQUFJLEVBQUVJLGlEQUFTLENBQUNHLE1BRkk7QUFHcEJMLFdBQU8sRUFBRUUsaURBQVMsQ0FBQ0ksTUFIQztBQUlwQkMsYUFBUyxFQUFFTCxpREFBUyxDQUFDRyxNQUpEO0FBS3BCRyxZQUFRLEVBQUVOLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNHLE1BQTVCLENBTFU7QUFNcEJSLFVBQU0sRUFBRUssaURBQVMsQ0FBQ08sT0FBVixDQUFrQlAsaURBQVMsQ0FBQ0csTUFBNUI7QUFOWSxHQUFoQixFQU9ISztBQVJnQixDQUFyQjtBQVdlcEIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTMzMGRlY2JhMjcwNjQ1ZmIwMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7QnV0dG9uLCBDYXJkLCBQb3BvdmVyLCBBdmF0YXJ9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1JldHdlZXRPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDYXJkIFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIi8+LFxyXG4gICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiAvPixcclxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIC8+LFxyXG4gICAgICAgICAgPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCBcclxuICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiPuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuY29udGVudH1cclxuICAgICAgICAvPiAgICAgICAgXHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgey8qPENvbW1lbnRGb3JtIC8+Ki99XHJcbiAgICAgIHsvKjxDb21tZW50cyAvPiovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
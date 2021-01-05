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
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");



var _jsxFileName = "C:\\NodeJS\\react-twitter\\prepare\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      commentFormOpened = _useState2[0],
      setCommentFormOpened = _useState2[1];

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      marginBottom: 20
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 34
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartTwoTone"], {
        twoToneColor: "eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
        onClick: onToggleLike
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "danger",
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 19
        }, _this),
        title: post.User.nickname,
        description: post.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(PostCard, "qjo02WruhXZcdwWdlG/xwVw2yKY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50IiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiQ29tbWVudHMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEtBQUQsQ0FEUDtBQUFBLE1BQ3BCQyxLQURvQjtBQUFBLE1BQ2JDLFFBRGE7O0FBQUEsbUJBRXVCRixzREFBUSxDQUFDLEtBQUQsQ0FGL0I7QUFBQSxNQUVwQkcsaUJBRm9CO0FBQUEsTUFFREMsb0JBRkM7O0FBRzNCLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3JDSixZQUFRLENBQUMsVUFBQ0ssSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBUjtBQUNELEdBRitCLEVBRTdCLEVBRjZCLENBQWhDO0FBR0EsTUFBTUMsZUFBZSxHQUFHRix5REFBVyxDQUFDLFlBQU07QUFDeENGLHdCQUFvQixDQUFDLFVBQUNHLElBQUQ7QUFBQSxhQUFVLENBQUNBLElBQVg7QUFBQSxLQUFELENBQXBCO0FBQ0QsR0FGa0MsRUFFaEMsRUFGZ0MsQ0FBbkM7QUFHQSxNQUFNRSxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLDZCQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBdEIsbURBQVcsZUFBZUosRUFBMUI7QUFBQSxHQUFELENBQXRCO0FBQ0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ0ssa0JBQVksRUFBRTtBQUFmLEtBQVo7QUFBQSwyQkFDRSxxRUFBQyx5Q0FBRDtBQUNFLFdBQUssRUFBRWYsSUFBSSxDQUFDZ0IsTUFBTCxDQUFZLENBQVosa0JBQWtCLHFFQUFDLG1EQUFEO0FBQVksY0FBTSxFQUFFaEIsSUFBSSxDQUFDZ0I7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQzQjtBQUVFLGFBQU8sRUFBRSxjQUNQLHFFQUFDLGlFQUFELE1BQXFCLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETyxFQUVQZCxLQUFLLGdCQUNELHFFQUFDLDhEQUFEO0FBQWMsb0JBQVksRUFBQyxRQUEzQjtBQUFnRCxlQUFPLEVBQUVJO0FBQXpELFNBQXdDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQyxnQkFFRCxxRUFBQywrREFBRDtBQUFlLGVBQU8sRUFBRUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpHLGVBS1AscUVBQUMsaUVBQUQ7QUFBK0IsZUFBTyxFQUFFRztBQUF4QyxTQUFxQixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTE8sZUFNUCxxRUFBQyw0Q0FBRDtBQUFvQixlQUFPLGVBQ3pCLHFFQUFDLDJDQUFELENBQVEsS0FBUjtBQUFBLG9CQUNHQyxFQUFFLElBQUlWLElBQUksQ0FBQ2lCLElBQUwsQ0FBVVAsRUFBVixLQUFpQkEsRUFBdkIsZ0JBRUM7QUFBQSxvQ0FDRSxxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLDJDQUFEO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUEsMEJBRkQsZ0JBT0MscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUEsK0JBWUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGLFNBQWEsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTk8sQ0FGWDtBQUFBLDZCQXdCRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxjQUFNLGVBQUUscUVBQUMsMkNBQUQ7QUFBQSxvQkFBU1YsSUFBSSxDQUFDaUIsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVjtBQUVFLGFBQUssRUFBRWxCLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUMsUUFGbkI7QUFHRSxtQkFBVyxFQUFFbEIsSUFBSSxDQUFDbUI7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBOUNEOztHQUFNcEIsUTtVQVNPWSx1RDs7O0tBVFBaLFE7QUFnRE5BLFFBQVEsQ0FBQ3FCLFNBQVQsR0FBcUI7QUFDbkJwQixNQUFJLEVBQUVxQixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3BCWixNQUFFLEVBQUVXLGlEQUFTLENBQUNFLE1BRE07QUFFcEJOLFFBQUksRUFBRUksaURBQVMsQ0FBQ0csTUFGSTtBQUdwQkwsV0FBTyxFQUFFRSxpREFBUyxDQUFDSSxNQUhDO0FBSXBCQyxhQUFTLEVBQUVMLGlEQUFTLENBQUNHLE1BSkQ7QUFLcEJHLFlBQVEsRUFBRU4saURBQVMsQ0FBQ08sT0FBVixDQUFrQlAsaURBQVMsQ0FBQ0csTUFBNUIsQ0FMVTtBQU1wQlIsVUFBTSxFQUFFSyxpREFBUyxDQUFDTyxPQUFWLENBQWtCUCxpREFBUyxDQUFDRyxNQUE1QjtBQU5ZLEdBQWhCLEVBT0hLO0FBUmdCLENBQXJCO0FBV2U5Qix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMTkwYzBlZTMwOTg1N2EyOGQ5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7QnV0dG9uLCBDYXJkLCBQb3BvdmVyLCBBdmF0YXJ9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1JldHdlZXRPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkLCBIZWFydFR3b1RvbmV9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4ge1xyXG4gIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldExpa2VkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XHJcbiAgICAgIDxDYXJkIFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIi8+LFxyXG4gICAgICAgICAgbGlrZWRcclxuICAgICAgICAgICAgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cImViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfSAvPlxyXG4gICAgICAgICAgICA6IDxIZWFydE91dGxpbmVkIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gLz4sXHJcbiAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9Lz4sXHJcbiAgICAgICAgICA8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KFxyXG4gICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkIFxyXG4gICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICApfT5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgIC8+ICAgICAgICBcclxuICAgICAgPC9DYXJkPlxyXG4gICAgICB7Lyo8Q29tbWVudEZvcm0gLz4qL31cclxuICAgICAgey8qPENvbW1lbnRzIC8+Ki99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9
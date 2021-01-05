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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");




var _jsxFileName = "C:\\NodeJS\\react-twitter\\prepare\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      liked = _useState2[0],
      setLiked = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      commentFormOpened = _useState4[0],
      setCommentFormOpened = _useState4[1];

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      marginBottom: 20
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 34
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {}, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageOutlined"], {}, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "danger",
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 19
        }, _this),
        title: post.User.nickname,
        description: post.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(PostCard, "jl0v4CYAMSMd8SVe4SymEl8Ql2U=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiQ29tbWVudHMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsa0JBQ0RDLFFBQVEsQ0FBQyxLQUFELENBRFA7QUFBQTtBQUFBLE1BQ3BCQyxLQURvQjtBQUFBLE1BQ2JDLFFBRGE7O0FBQUEsbUJBRXVCRixRQUFRLENBQUMsS0FBRCxDQUYvQjtBQUFBO0FBQUEsTUFFcEJHLGlCQUZvQjtBQUFBLE1BRURDLG9CQUZDOztBQUkzQixNQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLDZCQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBdEIsbURBQVcsZUFBZUosRUFBMUI7QUFBQSxHQUFELENBQXRCO0FBQ0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ0ssa0JBQVksRUFBRTtBQUFmLEtBQVo7QUFBQSwyQkFDRSxxRUFBQyx5Q0FBRDtBQUNFLFdBQUssRUFBRVgsSUFBSSxDQUFDWSxNQUFMLENBQVksQ0FBWixrQkFBa0IscUVBQUMsbURBQUQ7QUFBWSxjQUFNLEVBQUVaLElBQUksQ0FBQ1k7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQzQjtBQUVFLGFBQU8sRUFBRSxjQUNQLHFFQUFDLGlFQUFELE1BQXFCLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETyxlQUVQLHFFQUFDLCtEQUFELE1BQW1CLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGTyxlQUdQLHFFQUFDLGlFQUFELE1BQXFCLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFITyxlQUlQLHFFQUFDLDRDQUFEO0FBQW9CLGVBQU8sZUFDekIscUVBQUMsMkNBQUQsQ0FBUSxLQUFSO0FBQUEsb0JBQ0dOLEVBQUUsSUFBSU4sSUFBSSxDQUFDYSxJQUFMLENBQVVQLEVBQVYsS0FBaUJBLEVBQXZCLGdCQUVDO0FBQUEsb0NBQ0UscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQywyQ0FBRDtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLDBCQUZELGdCQU9DLHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBLCtCQVlFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRixTQUFhLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpPLENBRlg7QUFBQSw2QkFzQkUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsY0FBTSxlQUFFLHFFQUFDLDJDQUFEO0FBQUEsb0JBQVNOLElBQUksQ0FBQ2EsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVjtBQUVFLGFBQUssRUFBRWQsSUFBSSxDQUFDYSxJQUFMLENBQVVDLFFBRm5CO0FBR0UsbUJBQVcsRUFBRWQsSUFBSSxDQUFDZTtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQ0QsQ0F2Q0Q7O0dBQU1oQixRO1VBSU9RLHVEOzs7S0FKUFIsUTtBQXlDTkEsUUFBUSxDQUFDaUIsU0FBVCxHQUFxQjtBQUNuQmhCLE1BQUksRUFBRWlCLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDcEJaLE1BQUUsRUFBRVcsaURBQVMsQ0FBQ0UsTUFETTtBQUVwQk4sUUFBSSxFQUFFSSxpREFBUyxDQUFDRyxNQUZJO0FBR3BCTCxXQUFPLEVBQUVFLGlEQUFTLENBQUNJLE1BSEM7QUFJcEJDLGFBQVMsRUFBRUwsaURBQVMsQ0FBQ0csTUFKRDtBQUtwQkcsWUFBUSxFQUFFTixpREFBUyxDQUFDTyxPQUFWLENBQWtCUCxpREFBUyxDQUFDRyxNQUE1QixDQUxVO0FBTXBCUixVQUFNLEVBQUVLLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNHLE1BQTVCO0FBTlksR0FBaEIsRUFPSEs7QUFSZ0IsQ0FBckI7QUFXZTFCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQyMmY2ZTg4ZjI4MmFiODM4NDQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2FyZCwgUG9wb3ZlciwgQXZhdGFyfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtSZXR3ZWV0T3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRUd29Ub25lfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IHtcclxuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fT5cclxuICAgICAgPENhcmQgXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiLz4sXHJcbiAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIC8+LFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgLz4sXHJcbiAgICAgICAgICA8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KFxyXG4gICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkIFxyXG4gICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICApfT5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgIC8+ICAgICAgICBcclxuICAgICAgPC9DYXJkPlxyXG4gICAgICB7Lyo8Q29tbWVudEZvcm0gLz4qL31cclxuICAgICAgey8qPENvbW1lbnRzIC8+Ki99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9
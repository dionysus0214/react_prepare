webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\NodeJS\\react-twitter\\prepare\\front\\components\\PostCardContent.js",
    _this = undefined,
    _s = $RefreshSig$();






var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea;

var PostCardContent = function PostCardContent(_ref) {
  _s();

  var postData = _ref.postData,
      editMode = _ref.editMode,
      onChangePost = _ref.onChangePost,
      onCancelUpdate = _ref.onCancelUpdate;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      updatePostLoading = _useSelector.updatePostLoading,
      updatePostDone = _useSelector.updatePostDone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(postData),
      editText = _useState[0],
      setEditText = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (updatePostDone) {
      onCancelUpdate();
    }
  }, [updatePostDone]);
  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setEditText(e.target.value);
  });
  return (
    /*#__PURE__*/
    // 첫 번째 게시글 #해시태그 #해시태그
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: editMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
          value: editText,
          onChange: onChangeText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            loading: updatePostLoading,
            onClick: onChangePost(editText),
            children: "\uC218\uC815"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            type: "danger",
            onClick: onCancelUpdate,
            children: "\uCDE8\uC18C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : postData.split(/(#[^\s#]+)/g).map(function (v, i) {
        if (v.match(/(#[^\s#]+)/)) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/hashtag/".concat(v.slice(1)),
            prefetch: false,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: v
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 83
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 20
          }, _this);
        }

        return v;
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, _this)
  );
};

_s(PostCardContent, "TtzJjb8m3UZlCxRREZJyhMFauZk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = PostCardContent;
PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  editMode: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  onChangePost: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  onCancelUpdate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
PostCardContent.defaultProps = {
  editMode: false
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

var _c;

$RefreshReg$(_c, "PostCardContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIlBvc3RDYXJkQ29udGVudCIsInBvc3REYXRhIiwiZWRpdE1vZGUiLCJvbkNoYW5nZVBvc3QiLCJvbkNhbmNlbFVwZGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwidXBkYXRlUG9zdExvYWRpbmciLCJ1cGRhdGVQb3N0RG9uZSIsInVzZVN0YXRlIiwiZWRpdFRleHQiLCJzZXRFZGl0VGV4dCIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlVGV4dCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwic3BsaXQiLCJtYXAiLCJ2IiwiaSIsIm1hdGNoIiwic2xpY2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTs7QUFDUixJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQTBEO0FBQUE7O0FBQUEsTUFBdkRDLFFBQXVELFFBQXZEQSxRQUF1RDtBQUFBLE1BQTdDQyxRQUE2QyxRQUE3Q0EsUUFBNkM7QUFBQSxNQUFuQ0MsWUFBbUMsUUFBbkNBLFlBQW1DO0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjs7QUFBQSxxQkFDbENDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRHVCO0FBQUEsTUFDeEVDLGlCQUR3RSxnQkFDeEVBLGlCQUR3RTtBQUFBLE1BQ3JEQyxjQURxRCxnQkFDckRBLGNBRHFEOztBQUFBLGtCQUVoREMsc0RBQVEsQ0FBQ1QsUUFBRCxDQUZ3QztBQUFBLE1BRXpFVSxRQUZ5RTtBQUFBLE1BRS9EQyxXQUYrRDs7QUFJaEZDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlKLGNBQUosRUFBb0I7QUFDbEJMLG9CQUFjO0FBQ2Y7QUFDRixHQUpRLEVBSU4sQ0FBQ0ssY0FBRCxDQUpNLENBQVQ7QUFNQSxNQUFNSyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RDSixlQUFXLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxHQUYrQixDQUFoQztBQUlBO0FBQUE7QUFBUztBQUNQO0FBQUEsZ0JBQ0doQixRQUFRLGdCQUVMO0FBQUEsZ0NBQ0UscUVBQUMsUUFBRDtBQUFVLGVBQUssRUFBRVMsUUFBakI7QUFBMkIsa0JBQVEsRUFBRUc7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLDJDQUFELENBQVEsS0FBUjtBQUFBLGtDQUNFLHFFQUFDLDJDQUFEO0FBQVEsbUJBQU8sRUFBRU4saUJBQWpCO0FBQW9DLG1CQUFPLEVBQUVMLFlBQVksQ0FBQ1EsUUFBRCxDQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFPLEVBQUVQLGNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLHNCQUZLLEdBVUxILFFBQVEsQ0FBQ2tCLEtBQVQsQ0FBZSxhQUFmLEVBQThCQyxHQUE5QixDQUFrQyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUM1QyxZQUFJRCxDQUFDLENBQUNFLEtBQUYsQ0FBUSxZQUFSLENBQUosRUFBMkI7QUFDekIsOEJBQU8scUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxxQkFBY0YsQ0FBQyxDQUFDRyxLQUFGLENBQVEsQ0FBUixDQUFkLENBQVY7QUFBc0Msb0JBQVEsRUFBRSxLQUFoRDtBQUFBLG1DQUErRDtBQUFBLHdCQUFJSDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0QsYUFBNERDLENBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDRDs7QUFDRCxlQUFPRCxDQUFQO0FBQ0QsT0FMQztBQVhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQW9CRCxDQWxDRDs7R0FBTXJCLGU7VUFDMENLLHVEOzs7S0FEMUNMLGU7QUFvQ05BLGVBQWUsQ0FBQ3lCLFNBQWhCLEdBQTRCO0FBQzFCeEIsVUFBUSxFQUFFeUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFERDtBQUUxQjFCLFVBQVEsRUFBRXdCLGlEQUFTLENBQUNHLElBRk07QUFHMUIxQixjQUFZLEVBQUV1QixpREFBUyxDQUFDSSxJQUFWLENBQWVGLFVBSEg7QUFJMUJ4QixnQkFBYyxFQUFFc0IsaURBQVMsQ0FBQ0ksSUFBVixDQUFlRjtBQUpMLENBQTVCO0FBT0E1QixlQUFlLENBQUMrQixZQUFoQixHQUErQjtBQUM3QjdCLFVBQVEsRUFBRTtBQURtQixDQUEvQjtBQUllRiw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYWI4N2Q5YmNkNjJkNmI2ZmQ3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmNvbnN0IFBvc3RDYXJkQ29udGVudCA9ICh7IHBvc3REYXRhLCBlZGl0TW9kZSwgb25DaGFuZ2VQb3N0LCBvbkNhbmNlbFVwZGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgeyB1cGRhdGVQb3N0TG9hZGluZywgdXBkYXRlUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgW2VkaXRUZXh0LCBzZXRFZGl0VGV4dF0gPSB1c2VTdGF0ZShwb3N0RGF0YSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXBkYXRlUG9zdERvbmUpIHtcclxuICAgICAgb25DYW5jZWxVcGRhdGUoKTtcclxuICAgIH1cclxuICB9LCBbdXBkYXRlUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldEVkaXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuICggLy8g7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7ZW07Iuc7YOc6re4XHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZWRpdE1vZGVcclxuICAgICAgICA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSB2YWx1ZT17ZWRpdFRleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt1cGRhdGVQb3N0TG9hZGluZ30gb25DbGljaz17b25DaGFuZ2VQb3N0KGVkaXRUZXh0KX0+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17b25DYW5jZWxVcGRhdGV9Puy3qOyGjDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgICA6IHBvc3REYXRhLnNwbGl0KC8oI1teXFxzI10rKS9nKS5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzI10rKS8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt2LnNsaWNlKDEpfWB9IHByZWZldGNoPXtmYWxzZX0ga2V5PXtpfT48YT57dn08L2E+PC9MaW5rPjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdERhdGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlZGl0TW9kZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb25DaGFuZ2VQb3N0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uQ2FuY2VsVXBkYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuUG9zdENhcmRDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICBlZGl0TW9kZTogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
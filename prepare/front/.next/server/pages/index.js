module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");

var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\components\\AppLayout.js";










const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search).withConfig({
  displayName: "AppLayout__SearchInput",
  componentId: "sc-1x6xxdo-0"
})(["vertical-align:middle;"]);

const AppLayout = ({
  children
}) => {
  const [searchInput, onChangeSearchInput] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"])('');
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user);
  const onSearch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
      mode: "horizontal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\uB514\uC624\uB2C8\uC18C\uC2A4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 26
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\uD504\uB85C\uD544"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SearchInput, {
          enterButton: true,
          value: searchInput,
          onChange: onChangeSearchInput,
          onSearch: onSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      gutter: 8,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 6,
        children: me ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginForm__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 35
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 12,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://github.com/dionysus0214/react_twitter",
          target: "_blank",
          rel: "noreferrer noopener",
          children: "Made by dionysus"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

AppLayout.prototype = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");

var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\components\\CommentForm.js";







const CommentForm = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    addCommentDone,
    addCommentLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const [commentText, onChangeCommentText, setCommentText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [commentText, id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      style: {
        position: 'relative',
        margin: 0
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        style: {
          position: 'absolute',
          right: 0,
          bottom: -40,
          zIndex: 1
        },
        type: "primary",
        htmlType: "submit",
        loading: addCommentLoading,
        children: "\uC220\uC220"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");

var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\components\\FollowButton.js";






const FollowButton = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    me,
    followLoading,
    unfollowLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(v => v.id === post.User.id);
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);

  if (post.User.id === me.id) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    children: isFollowing ? '언팔로우' : '팔로우'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

/***/ }),

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/ImagesZoom/styles.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");

var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\components\\ImagesZoom\\index.js";






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Overlay"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["CloseBtn"], {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["SlickWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {
          initialSlide: 0,
          afterChange: slide => setCurrentSlide(slide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["ImgWrapper"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: `${_config_config__WEBPACK_IMPORTED_MODULE_5__["backUrl"]}/${v.src}`,
              alt: v.src
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, undefined)
          }, v.src, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Indicator"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [currentSlide + 1, ' ', "/", images.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

/***/ }),

/***/ "./components/ImagesZoom/styles.js":
/*!*****************************************!*\
  !*** ./components/ImagesZoom/styles.js ***!
  \*****************************************/
/*! exports provided: Global, Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseBtn", function() { return CloseBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickWrapper", function() { return SlickWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWrapper", function() { return ImgWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);


const Global = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  .slick-slide {
    display: inline-block;
  }
  .ant-card-cover {
    transform: none !important;
  }
`;
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Overlay",
  componentId: "r2o2ee-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "styles__Header",
  componentId: "r2o2ee-1"
})(["height:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}"]);
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CloseOutlined"]).withConfig({
  displayName: "styles__CloseBtn",
  componentId: "r2o2ee-2"
})(["position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;"]);
const SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SlickWrapper",
  componentId: "r2o2ee-3"
})(["height:calc(100% - 44px);background:#090909;"]);
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ImgWrapper",
  componentId: "r2o2ee-4"
})(["padding:32px;text-align:center;$img{margin:0 auto;max-height:750px;}"]);
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Indicator",
  componentId: "r2o2ee-5"
})(["text-align:center;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;display:inline-block;text-align:center;color:white;font-size:15px;}"]);

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");

var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\components\\LoginForm.js";







const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "LoginForm__ButtonWrapper",
  componentId: "k4bay5-0"
})(["margin-top:10px;"]);
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_2__["Form"]).withConfig({
  displayName: "LoginForm__FormWrapper",
  componentId: "k4bay5-1"
})(["padding:10px;"]);

const LoginForm = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    logInLoading,
    logInError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])('');
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    console.log(email, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["loginRequestAction"])({
      email,
      password
    }));
  }, [email, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormWrapper, {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "user-email",
        children: "\uC774\uBA54\uC77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        name: "user-email",
        type: "email",
        value: email,
        onChange: onChangeEmail,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "user-password",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        name: "user-id",
        type: "password",
        value: password,
        onChange: onChangePassword,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: logInLoading,
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 30
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");


var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\components\\PostCard.js";












moment__WEBPACK_IMPORTED_MODULE_7___default.a.locale('ko');

const PostCard = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    removePostLoading,
    retweetError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.post);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const onLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  const onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  const liked = post.Likers.find(v => v.id === id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      marginBottom: 20
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 34
      }, undefined),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, undefined), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartTwoTone"], {
        twoToneColor: "red",
        onClick: onUnLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
        onClick: onLike
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 19
            }, undefined)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, undefined),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, undefined)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, undefined)],
      title: post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null,
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 22
      }, undefined),
      children: post.RetweetId && post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        cover: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          images: post.Retweet.Images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 46
        }, undefined),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            float: 'right'
          },
          children: moment__WEBPACK_IMPORTED_MODULE_7___default()(post.createdAt).format('YYYY.MM.DD')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: `/user/${post.Retweet.User.id}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                children: post.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 22
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 17
          }, undefined),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
            postData: post.Retweet.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 28
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            float: 'right'
          },
          children: moment__WEBPACK_IMPORTED_MODULE_7___default()(post.createdAt).format('YYYY.MM.DD')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: `/user/${post.User.id}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                children: post.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 22
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 17
          }, undefined),
          title: post.User.nickname,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
            postData: post.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 28
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
        header: `${post.Comments.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
            author: item.User.nickname,
            avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
              href: `/user/${item.User.id}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                  children: post.User.nickname[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 26
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 21
            }, undefined),
            content: item.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, undefined);
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\components\\PostCardContent.js";






const PostCardContent = ({
  postData
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: postData.split(/(#[^\s#]+)/g).map((v, i) => {
    if (v.match(/(#[^\s#]+)/)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/hashtag/${v.slice(1)}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: v
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 62
        }, undefined)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 16
      }, undefined);
    }

    return v;
  })
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ }),

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/config */ "./config/config.js");

var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\components\\PostForm.js";







const PostForm = () => {
  const {
    imagePaths,
    addPostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const [text, onChangeText, setText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    const formData = new FormData();
    imagePaths.forEach(p => {
      formData.append('image', p);
    });
    formData.append('content', text);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  });
  const onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["REMOVE_IMAGE"],
      data: index
    });
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 148,
      placeholder: "\uC5B4\uB5A4 \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChangeImages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        style: {
          float: 'right'
        },
        htmlType: "submit",
        children: "\uC220\uC220"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: imagePaths.map((v, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: 'inline-block'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `${_config_config__WEBPACK_IMPORTED_MODULE_6__["backUrl"]}/${v}`,
          style: {
            width: '200px'
          },
          alt: v
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            onClick: onRemoveImage(i),
            children: "\uC81C\uAC70"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, undefined)]
      }, v, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./config/config.js");


var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\components\\PostImages.js";






const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        role: "presentation",
        src: `${_config_config__WEBPACK_IMPORTED_MODULE_5__["backUrl"]}/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: images,
        onCLose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 28
      }, undefined)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: '50%',
          display: 'inline-block'
        },
        src: `${_config_config__WEBPACK_IMPORTED_MODULE_5__["backUrl"]}/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: '50%',
          display: 'inline-block'
        },
        src: `${_config_config__WEBPACK_IMPORTED_MODULE_5__["backUrl"]}/${images[1].src}`,
        alt: images[1].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: images,
        onCLose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 28
      }, undefined)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: '50%'
        },
        src: `${_config_config__WEBPACK_IMPORTED_MODULE_5__["backUrl"]}/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        role: "presentation",
        style: {
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'middle'
        },
        onClick: onZoom,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354 \uBCF4\uAE30"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
      images: images,
      onCLose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 26
    }, undefined)]
  }, void 0, true);
};

PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");

var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\components\\UserProfile.js";






const UserProfile = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    me,
    logOutLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["logoutRequestAction"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/user/${me.id}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: ["\uC220\uC220", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 60
          }, undefined), me.Posts.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 55
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }, undefined)
    }, "twit", false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: ["\uD314\uB85C\uC789", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 59
          }, undefined), me.Followings.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 53
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 31
      }, undefined)
    }, "followings", false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: ["\uD314\uB85C\uC6CC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 59
          }, undefined), me.Followers.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 53
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 31
      }, undefined)
    }, "followings", false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined)],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/user/${me.id}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
            children: me.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 16
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: onLogOut,
      loading: logOutLoading,
      children: "\uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: backUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backUrl", function() { return backUrl; });
const backUrl = 'http://13.209.76.127';

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");

var _jsxFileName = "C:\\vscode\\react-twitter\\prepare\\front\\pages\\index.js";











const Home = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading,
    retweetError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LOAD_POSTS_REQUEST"],
            lastId
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 14
    }, undefined), mainPosts.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      post: post
    }, post.id, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 32
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_10__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOAD_MY_INFO_REQUEST"]
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LOAD_POSTS_REQUEST"]
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_3__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");




const initialState = {
  user: {},
  post: {}
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  mainPosts: [],
  imagePaths: [],
  singlePost: null,
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
};
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      break;

    case RETWEET_SUCCESS:
      {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }

    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      break;

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;

    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data;
      break;

    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;

    case LOAD_USER_POSTS_REQUEST:
    case LOAD_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePosts = action.data.length === 10;
      break;

    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      draft.imagePaths = [];
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = false;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      const post = draft.mainPosts.find(v => v.id === action.data.PostId);
      post.Comments.unshift(action.data);
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  me: null,
  userInfo: null
};
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerError = null;
      draft.removeFollowerDone = false;
      break;

    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
      draft.removeFollowerDone = true;
      break;

    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;

    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsError = null;
      draft.loadFollowingsDone = false;
      break;

    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.me.Followings = action.data;
      draft.loadFollowingsDone = true;
      break;

    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;

    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersError = null;
      draft.loadFollowersDone = false;
      break;

    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.me.Followers = action.data;
      draft.loadFollowersDone = true;
      break;

    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data;
      draft.loadMyInfoDone = true;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;

    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;

    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data.UserId
      });
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
      draft.unfollowDone = true;
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = _config_config__WEBPACK_IMPORTED_MODULE_4__["backUrl"];
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function* loadMyInfo() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followings', data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
});

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW1hZ2VzWm9vbS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJTZWFyY2hJbnB1dCIsInN0eWxlZCIsIklucHV0IiwiU2VhcmNoIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJzZWFyY2hJbnB1dCIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJ1c2VJbnB1dCIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJvblNlYXJjaCIsInVzZUNhbGxiYWNrIiwiUm91dGVyIiwicHVzaCIsInByb3RvdHlwZSIsIlByb3RvdHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsIkNvbW1lbnRGb3JtIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudExvYWRpbmciLCJjb21tZW50VGV4dCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsInVzZUVmZmVjdCIsIm9uU3VibWl0Q29tbWVudCIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJ1c2VySWQiLCJwb3NpdGlvbiIsIm1hcmdpbiIsInJpZ2h0IiwiYm90dG9tIiwiekluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiRm9sbG93QnV0dG9uIiwiZm9sbG93TG9hZGluZyIsInVuZm9sbG93TG9hZGluZyIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwiVXNlciIsIm9uQ2xpY2tCdXR0b24iLCJVTkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwib25DbG9zZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInVzZVN0YXRlIiwic2xpZGUiLCJtYXAiLCJiYWNrVXJsIiwic3JjIiwibGVuZ3RoIiwiYXJyYXlPZiIsImZ1bmMiLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIk92ZXJsYXkiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJDbG9zZUJ0biIsIkNsb3NlT3V0bGluZWQiLCJTbGlja1dyYXBwZXIiLCJJbWdXcmFwcGVyIiwiSW5kaWNhdG9yIiwiQnV0dG9uV3JhcHBlciIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIkxvZ2luRm9ybSIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJhbGVydCIsIm9uU3VibWl0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJtb21lbnQiLCJsb2NhbGUiLCJQb3N0Q2FyZCIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmV0d2VldEVycm9yIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsIm9uTGlrZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwib25Ub2dnbGVDb21tZW50IiwicHJldiIsIm9uUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJvblJldHdlZXQiLCJSRVRXRUVUX1JFUVVFU1QiLCJsaWtlZCIsIkxpa2VycyIsIm1hcmdpbkJvdHRvbSIsIkltYWdlcyIsIlJldHdlZXRJZCIsIm5pY2tuYW1lIiwiUmV0d2VldCIsImZsb2F0IiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiQ29tbWVudHMiLCJpdGVtIiwic2hhcGUiLCJudW1iZXIiLCJzdHJpbmciLCJvYmplY3RPZiIsImFueSIsIlBvc3RDYXJkQ29udGVudCIsInBvc3REYXRhIiwic3BsaXQiLCJpIiwibWF0Y2giLCJzbGljZSIsIlBvc3RGb3JtIiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwidGV4dCIsIm9uQ2hhbmdlVGV4dCIsInNldFRleHQiLCJvblN1Ym1pdCIsInRyaW0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInAiLCJhcHBlbmQiLCJBRERfUE9TVF9SRVFVRVNUIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwiZGlzcGxheSIsIndpZHRoIiwiUG9zdEltYWdlcyIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiVXNlclByb2ZpbGUiLCJsb2dPdXRMb2FkaW5nIiwib25Mb2dPdXQiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiUG9zdHMiLCJGb2xsb3dlcnMiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSG9tZSIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJvblNjcm9sbCIsInNjcm9sbFkiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFNlcnZlclNpZGVQcm9wcyIsIndyYXBwZXIiLCJjb250ZXh0IiwiY29va2llIiwicmVxIiwiaGVhZGVycyIsImF4aW9zIiwiZGVmYXVsdHMiLCJDb29raWUiLCJzdG9yZSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiRU5EIiwic2FnYVRhc2siLCJ0b1Byb21pc2UiLCJpbml0aWFsU3RhdGUiLCJyb290UmVkdWNlciIsImFjdGlvbiIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiY29tYmluZVJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJzaW5nbGVQb3N0IiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImZpbHRlciIsIlBvc3RJZCIsIlVzZXJJZCIsImNvbmNhdCIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luRG9uZSIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwidXNlckluZm8iLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJwdXQiLCJyZXNwb25zZSIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJkZWxldGUiLCJ1bmxpa2VQb3N0IiwibG9hZFBvc3RBUEkiLCJsb2FkUG9zdCIsImxvYWRVc2VyUG9zdHNBUEkiLCJsb2FkVXNlclBvc3RzIiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsImxvYWRIYXNodGFnUG9zdHMiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QVBJIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwid2F0Y2hSZXR3ZWV0IiwidGFrZUxhdGVzdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExvYWRVc2VyUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRGb2xsb3dlcnMiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImxvZ2dlck1pZGRsZXdhcmUiLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImVuYWJsZUVTNSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7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QUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvdG90eXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtNZW51LCBJbnB1dCwgUm93LCBDb2x9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJzsgXHJcblxyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZSc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICB2ZXJ0aWNhbC1hbGlnbiA6IG1pZGRsZTtcclxuYDtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHtzZWFyY2hJbnB1dH1gKTtcclxuICB9LCBbc2VhcmNoSW5wdXRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+65SU7Jik64uI7IaM7IqkPC9hPjwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGE+7ZSE66Gc7ZWEPC9hPjwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgIGVudGVyQnV0dG9uXHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPiAgICAgICBcclxuICAgICAgPC9NZW51PlxyXG4gICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgIHttZSA/IDxVc2VyUHJvZmlsZSAvPiA6IDxMb2dpbkZvcm0gLz59XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGlvbnlzdXMwMjE0L3JlYWN0X3R3aXR0ZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+TWFkZSBieSBkaW9ueXN1czwvYT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3RvdHlwZSA9IHtcclxuICBjaGlsZHJlbjogUHJvdG90eXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7IiwiaW1wb3J0IHtGb3JtLCBJbnB1dCwgQnV0dG9ufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHtBRERfQ09NTUVOVF9SRVFVRVNUfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKHtwb3N0fSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IHthZGRDb21tZW50RG9uZSwgYWRkQ29tbWVudExvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtjb250ZW50OiBjb21tZW50VGV4dCwgcG9zdElkOiBwb3N0LmlkLCB1c2VySWQ6IGlkfSxcclxuICAgIH0pO1xyXG4gIH0sIFtjb21tZW50VGV4dCwgaWRdKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luOiAwfX0+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IHJvd3M9ezR9IC8+XHJcbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMCwgYm90dG9tOiAtNDAsIHpJbmRleDogMX19IHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXthZGRDb21tZW50TG9hZGluZ30+7Iig7IigPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge0ZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7cG9zdH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qge21lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmKGlzRm9sbG93aW5nKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbaXNGb2xsb3dpbmddKTtcclxuICBcclxuICBpZiAocG9zdC5Vc2VyLmlkID09PSBtZS5pZCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybihcclxuICAgIDxCdXR0b24gbG9hZGluZz17Zm9sbG93TG9hZGluZyB8fCB1bmZvbGxvd0xvYWRpbmd9IG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259PlxyXG4gICAgICB7aXNGb2xsb3dpbmcgPyAn7Ja47YyU66Gc7JqwJyA6ICftjJTroZzsmrAnfVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBTbGljayBmcm9tICdyZWFjdC1zbGljayc7XHJcblxyXG5pbXBvcnQge092ZXJsYXksIEdsb2JhbCwgSGVhZGVyLCBDbG9zZUJ0biwgSW1nV3JhcHBlciwgSW5kaWNhdG9yLCBTbGlja1dyYXBwZXJ9IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtiYWNrVXJsfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnJztcclxuXHJcbmNvbnN0IEltYWdlc1pvb20gPSAoe2ltYWdlcywgb25DbG9zZX0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxPdmVybGF5PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxyXG4gICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXtvbkNsb3NlfT5YPC9DbG9zZUJ0bj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxTbGlja1dyYXBwZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTbGlja1xyXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XHJcbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XHJcbiAgICAgICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEltZ1dyYXBwZXIga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YmFja1VybH0vJHt2LnNyY31gfSBhbHQ9e3Yuc3JjfSAvPlxyXG4gICAgICAgICAgICAgIDwvSW1nV3JhcHBlcj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NsaWNrPlxyXG4gICAgICAgICAgPEluZGljYXRvcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7Y3VycmVudFNsaWRlICsgMX1cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIC9cclxuICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0luZGljYXRvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGlja1dyYXBwZXI+XHJcbiAgICA8L092ZXJsYXk+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTsiLCJpbXBvcnQgc3R5bGVkLCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtDbG9zZU91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgLnNsaWNrLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLmFudC1jYXJkLWNvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuIHBvc2l0aW9uOiBmaXhlZDtcclxuIHotaW5kZXg6IDUwMDA7XHJcbiB0b3A6IDA7XHJcbiBsZWZ0OiAwO1xyXG4gcmlnaHQ6IDA7XHJcbiBib3R0b206IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG5gO1xyXG4gIFxyXG5leHBvcnQgY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQoQ2xvc2VPdXRsaW5lZClgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XHJcbiAgYmFja2dyb3VuZDogIzA5MDkwOTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJGltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbmA7IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Zvcm0sIElucHV0LCBCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7bG9naW5SZXF1ZXN0QWN0aW9ufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3AgOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbiAgcGFkZGluZyA6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHtsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3J9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpOyBcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobG9nSW5FcnJvcikge1xyXG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIH1cclxuICB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKHtlbWFpbCwgcGFzc3dvcmR9KSk7XHJcbiAgfSwgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1lbWFpbFwiPuydtOuplOydvDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gcmVxdWlyZWQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSByZXF1aXJlZCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPjxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgPC9Gb3JtV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7QnV0dG9uLCBDYXJkLCBQb3BvdmVyLCBBdmF0YXIsIExpc3QsIENvbW1lbnR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1JldHdlZXRPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkLCBIZWFydFR3b1RvbmV9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuaW1wb3J0IHtMSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVUV0VFVF9SRVFVRVNUfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tICcuL0ZvbGxvd0J1dHRvbic7XHJcblxyXG5tb21lbnQubG9jYWxlKCdrbycpO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHtyZW1vdmVQb3N0TG9hZGluZywgcmV0d2VldEVycm9yfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuXHJcbiAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSwgW2lkXSk7XHJcbiAgY29uc3Qgb25Vbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZighaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3QgbGlrZWQgPSBwb3N0Lkxpa2Vycy5maW5kKCh2KSA9PiB2LmlkID09PSBpZCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XHJcbiAgICAgIDxDYXJkIFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9IC8+LFxyXG4gICAgICAgICAgbGlrZWRcclxuICAgICAgICAgICAgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cInJlZFwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Vbkxpa2V9IC8+XHJcbiAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQgb25DbGljaz17b25MaWtlfSAvPixcclxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0vPixcclxuICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgXHJcbiAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIiBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30gb25DbGljaz17b25SZW1vdmVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+fVxyXG4gICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICBdfVxyXG4gICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXRJZCA/IGAke3Bvc3QuVXNlci5uaWNrbmFtZX3ri5jsnbQg66as7Yq47JyX7ZWY7IWo7Iq164uI64ukLmAgOiBudWxsfVxyXG4gICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Bvc3QuUmV0d2VldElkICYmIHBvc3QuUmV0d2VldFxyXG4gICAgICAgID8gKFxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgY292ZXI9e3Bvc3QuUmV0d2VldC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LlJldHdlZXQuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX0+e21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdZWVlZLk1NLkREJyl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICBhdmF0YXI9eyhcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3Bvc3QuUmV0d2VldC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT48QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LlJldHdlZXQuY29udGVudH0gLz59ICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApXHJcbiAgICAgICAgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCd9fT57bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVkuTU0uREQnKX08L2Rpdj5cclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7cG9zdC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT48QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn0gIFxyXG4gICAgICAgICAgICAvPiBcclxuICAgICAgICAgIDwvPiBcclxuICAgICAgICApfVxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7aXRlbS5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIFJldHdlZXRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFJldHdlZXQ6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtCdXR0b24sIElucHV0fSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgUG9zdENhcmRDb250ZW50ID0gKHtwb3N0RGF0YX0pID0+IChcclxuICA8ZGl2PlxyXG4gICAge3Bvc3REYXRhLnNwbGl0KC8oI1teXFxzI10rKS9nKS5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgaWYodi5tYXRjaCgvKCNbXlxccyNdKykvKSkge1xyXG4gICAgICAgIHJldHVybiA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt2LnNsaWNlKDEpfWB9IGtleT17aX0+PGE+e3Z9PC9hPjwvTGluaz5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdjtcclxuICAgIH0pfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuUG9zdENhcmRDb250ZW50LnByb3BUeXBlcyA9IHtcclxuICBwb3N0RGF0YTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRDb250ZW50OyIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Zvcm0sIElucHV0LCBCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHtVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSwgQUREX1BPU1RfUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7YmFja1VybH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7aW1hZ2VQYXRocywgYWRkUG9zdERvbmV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3RleHQsIG9uQ2hhbmdlVGV4dCwgc2V0VGV4dF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihhZGRQb3N0RG9uZSkge1xyXG4gICAgICBzZXRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZighdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7XHJcbiAgICB9KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHRleHQpO1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9LCBbdGV4dCwgaW1hZ2VQYXRoc10pO1xyXG5cclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZikgPT4ge1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKTtcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBzdHlsZT17e21hcmdpbjogJzEwcHggMCAyMHB4J319IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSBtYXhMZW5ndGg9ezE0OH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7J287J20IOyeiOyXiOuCmOyalD9cIiAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj7siKDsiKA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7YmFja1VybH0vJHt2fWB9IHN0eWxlPXt7d2lkdGg6ICcyMDBweCd9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblJlbW92ZUltYWdlKGkpfT7soJzqsbA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7UGx1c091dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgSW1hZ2VzWm9vbSBmcm9tICcuL0ltYWdlc1pvb20nO1xyXG5pbXBvcnQge2JhY2tVcmx9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xyXG5cclxuY29uc3QgUG9zdEltYWdlcyA9ICh7aW1hZ2VzfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dJbWFnZXNab29tKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0ltYWdlc1pvb20oZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYoaW1hZ2VzLmxlbmd0aCA9PT0gMSApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3JjPXtgJHtiYWNrVXJsfS8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNMb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZihpbWFnZXMubGVuZ3RoID09PSAyICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17e3dpZHRoOiAnNTAlJywgZGlzcGxheTogJ2lubGluZS1ibG9jayd9fSBzcmM9e2Ake2JhY2tVcmx9LyR7aW1hZ2VzWzBdLnNyY31gfSBhbHQ9e2ltYWdlc1swXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17e3dpZHRoOiAnNTAlJywgZGlzcGxheTogJ2lubGluZS1ibG9jayd9fSBzcmM9e2Ake2JhY2tVcmx9LyR7aW1hZ2VzWzFdLnNyY31gfSBhbHQ9e2ltYWdlc1sxXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ0xvc2U9e29uQ2xvc2V9IC8+fVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7d2lkdGg6ICc1MCUnfX0gc3JjPXtgJHtiYWNrVXJsfS8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzUwJScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGx1c091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtpbWFnZXMubGVuZ3RoIC0gMX3qsJzsnZgg7IKs7KeEIOuNlCDrs7TquLBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DTG9zZT17b25DbG9zZX0gLz59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlczsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge0NhcmQsIEF2YXRhciwgQnV0dG9ufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtsb2dvdXRSZXF1ZXN0QWN0aW9ufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7bWUsIGxvZ091dExvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj48TGluayBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT48YT7siKDsiKA8YnIgLz57bWUuUG9zdHMubGVuZ3RofTwvYT48L0xpbms+PC9kaXY+LFxyXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPjxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxhPu2MlOuhnOyeiTxiciAvPnttZS5Gb2xsb3dpbmdzLmxlbmd0aH08L2E+PC9MaW5rPjwvZGl2PixcclxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj48TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT7tjJTroZzsm4w8YnIgLz57bWUuRm9sbG93ZXJzLmxlbmd0aH08L2E+PC9MaW5rPjwvZGl2PixcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7bWUuaWR9YH0+XHJcbiAgICAgICAgICAgIDxhPjxBdmF0YXI+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ091dH0gbG9hZGluZz17bG9nT3V0TG9hZGluZ30+66Gc6re47JWE7JuDPC9CdXR0b24+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyIsImV4cG9ydCBjb25zdCBiYWNrVXJsID0gJ2h0dHA6Ly8xMy4yMDkuNzYuMTI3JzsiLCJpbXBvcnQge3VzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQoaW5pdGlhbFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xyXG59IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge0VORH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7TE9BRF9QT1NUU19SRVFVRVNUfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHtMT0FEX01ZX0lORk9fUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgcmV0d2VldEVycm9yfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHJldHdlZXRFcnJvcikge1xyXG4gICAgICBhbGVydChyZXR3ZWV0RXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtyZXR3ZWV0RXJyb3JdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LSAzMDApIHtcclxuICAgICAgICBpZihoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGxhc3RJZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcsIG1haW5Qb3N0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICBpZihjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH1cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7XHJcbiAgICBcclxuICB9LFxyXG4gIHBvc3Q6IHtcclxuICAgIFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcbiAgcmV0d2VldExvYWRpbmc6IGZhbHNlLFxyXG4gIHJldHdlZXREb25lOiBmYWxzZSxcclxuICByZXR3ZWV0RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgdXNlckluZm86IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJzsgXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHthbGwsIGZvcmt9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCB7YmFja1VybH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gYmFja1VybDtcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICBmb3JrKHVzZXJTYWdhKSxcclxuICBdKTtcclxufSIsImltcG9ydCB7YWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBwdXQsIHRocm90dGxlLCBjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLCBVTkxJS0VfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLCBMSUtFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUU19GQUlMVVJFLCBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gIFJFVFdFRVRfRkFJTFVSRSwgUkVUV0VFVF9SRVFVRVNULCBSRVRXRUVUX1NVQ0NFU1MsIFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQge0FERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRX0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2goZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2goZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEhhc2h0YWdQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2goZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsICAgICAgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsICAgICAgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2goZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgXSk7XHJcbn0iLCJpbXBvcnQge2FsbCwgZm9yaywgdGFrZUxhdGVzdCwgcHV0LCBjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICBMT0dfSU5fRkFJTFVSRSwgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIFxyXG4gIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLCBVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9GQUlMVVJFLCBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSwgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2goZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2goZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2goZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywge25pY2tuYW1lOiBkYXRhfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VycycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2goZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dpbmdzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2VyQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gIF0pO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsImltcG9ydCB7ZW5hYmxlRVM1LCBwcm9kdWNlfSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xyXG4gIGVuYWJsZUVTNSgpO1xyXG4gIHJldHVybiBwcm9kdWNlKC4uLmFyZ3MpO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
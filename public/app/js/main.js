/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/bootstrap/constants.js":
/*!*******************************************!*\
  !*** ./components/bootstrap/constants.js ***!
  \*******************************************/
/*! exports provided: SIZES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZES", function() { return SIZES; });
/**
 * Base sizes
 *
 * @type {{sm: string, lg: string}}
 */
var SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

/***/ }),

/***/ "./components/dropzone/DropzoneBuilder.js":
/*!************************************************!*\
  !*** ./components/dropzone/DropzoneBuilder.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "../../../node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Loading text
 * It will be shown after the start of image uploading
 *
 * @type {string}
 */

var LOADING_TEXT = 'Loading...';
/**
 * Dropzone builder
 */

var _default =
/*#__PURE__*/
function () {
  /**
   * Constructor
   *
   * @param dropzoneContainer
   * @param config
   */
  function _default(dropzoneContainer) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, _default);

    this._config = config;
    this._dropzoneContainer = dropzoneContainer;
    this._cancelButton = $(dropzoneContainer).find('.dropzone-cancel');
  }
  /**
   * Set url to uploading
   *
   * @param url
   */


  _createClass(_default, [{
    key: "setUploadUrl",
    value: function setUploadUrl(url) {
      this._uploadUrl = url;
      return this;
    }
    /**
     * Set default preview image
     *
     * @param name
     * @param url
     */

  }, {
    key: "setPreview",
    value: function setPreview(name, url) {
      this._preview = {
        name: name,
        url: url
      };
      return this;
    }
    /**
     * Set error handler
     *
     * @param callback
     */

  }, {
    key: "error",
    value: function error(callback) {
      this._errorCallback = callback;
      return this;
    }
    /**
     * Set cancel handler
     *
     * @param callback
     */

  }, {
    key: "cancel",
    value: function cancel(callback) {
      this._cancelCallback = callback;
      return this;
    }
    /**
     * Set success handler
     *
     * @param callback
     */

  }, {
    key: "success",
    value: function success(callback) {
      this._successCallback = callback;
      return this;
    }
    /**
     * Build dropzone
     * @returns {Dropzone}
     */

  }, {
    key: "build",
    value: function build() {
      /**
       * this
       */
      var _dropzoneBuilder = this;
      /**
       * Call after fail
       */


      var dropzoneFail = function dropzoneFail() {
        $(_dropzoneBuilder._dropzoneContainer).removeClass('dz-started');
        $(_dropzoneBuilder._dropzoneContainer).find('.dz-preview').remove();
      };
      /**
       * Default configuration
       *
       * @type object
       */


      var config = {
        url: this._uploadUrl,
        thumbnailWidth: null,
        thumbnailHeight: null,
        uploadMultiple: false,
        acceptedFiles: 'image/*',
        headers: {
          'x-csrf-token': CSRF_TOKEN
        },
        init: function init() {
          /**
           * Set current image in the dropzone if it exists
           */
          if (!!_dropzoneBuilder._preview && !!_dropzoneBuilder._preview.url) {
            this.emit("addedfile", _dropzoneBuilder._preview);
            this.emit("thumbnail", _dropzoneBuilder._preview, _dropzoneBuilder._preview.url);
          }
          /**
           * Added file handler
           */


          this.on("addedfile", function () {
            $(_dropzoneBuilder._dropzoneContainer).find('.dz-filename span').text(LOADING_TEXT);
          });
          /**
           * Error handler
           */

          this.on("error", function (file, response) {
            dropzoneFail();

            if (!!_dropzoneBuilder._errorCallback) {
              _dropzoneBuilder._errorCallback(file, response);
            }
          });
          /**
           * Success handler
           */

          this.on("success", function (file, response) {
            if (!!_dropzoneBuilder._successCallback) {
              _dropzoneBuilder._successCallback(file, response);
            }
          });
        }
      };
      /**
       * Clear button handler
       * Clear file info in dropzone
       */

      if (!!this._cancelButton) {
        this._cancelButton.click(function () {
          dropzoneFail();

          if (!!_dropzoneBuilder._cancelCallback) {
            _dropzoneBuilder._cancelCallback();
          }
        });
      }
      /**
       * Dropzone build
       */


      return new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a(this._dropzoneContainer, _objectSpread({}, config, this._config));
    }
  }]);

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/http/RequestBuilder.js":
/*!*******************************************!*\
  !*** ./components/http/RequestBuilder.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var _successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./successHandler */ "./components/http/successHandler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * HTTP Request Builder
 */

var _default =
/*#__PURE__*/
function () {
  function _default(url) {
    _classCallCheck(this, _default);

    this._url = url;
    this._method = 'get';
    this._data = {};
    this._error = _errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"];
    this._success = _successHandler__WEBPACK_IMPORTED_MODULE_1__["default"];

    this._complete = function () {};
  }

  _createClass(_default, [{
    key: "method",
    value: function method(_method) {
      this._method = _method;
      return this;
    }
  }, {
    key: "data",
    value: function data(_data) {
      this._data = _data;
      return this;
    }
  }, {
    key: "error",
    value: function error(fn) {
      this._error = fn;
      return this;
    }
  }, {
    key: "success",
    value: function success(fn) {
      this._success = fn;
      return this;
    }
  }, {
    key: "complete",
    value: function complete(fn) {
      this._complete = fn;
      return this;
    }
  }, {
    key: "send",
    value: function send() {
      var _this = this;

      $.ajax({
        url: this._url,
        type: this._method,
        data: this._data,
        error: function error(response) {
          if (!!response.responseJSON) {
            _this._error(response.responseJSON);
          }
        },
        success: this._success,
        complete: this._complete
      });
    }
  }]);

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/http/errorHandler.js":
/*!*****************************************!*\
  !*** ./components/http/errorHandler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/**
 * Base error handler
 *
 * @param response
 */

/* harmony default export */ __webpack_exports__["default"] = (function (response) {
  /**
   * Redirect to the route
   */
  if (!!response.route) {
    location.href = response.route;
    return;
  }
  /**
   * Show main error message
   */


  if (!!response.message) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__["default"])(response.message);
  }
  /**
   * Show all messages
   */


  if (!!response.errors) {
    Object.keys(response.errors).map(function (key) {
      response.errors[key].map(function (error) {
        Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__["default"])(error);
      });
    });
  }
});

/***/ }),

/***/ "./components/http/index.js":
/*!**********************************!*\
  !*** ./components/http/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestBuilder */ "./components/http/RequestBuilder.js");


/***/ }),

/***/ "./components/http/successHandler.js":
/*!*******************************************!*\
  !*** ./components/http/successHandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");

/**
 * Base error handler
 *
 * @param response
 */

/* harmony default export */ __webpack_exports__["default"] = (function (response) {
  /**
   * Show main error message
   */
  console.log(response.message);

  if (!!response.message) {
    Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_0__["default"])(response.message);
  }
});

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./components/modal/index.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ "./components/observer/index.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "./components/http/index.js");




/***/ }),

/***/ "./components/modal/ModalBuilder.js":
/*!******************************************!*\
  !*** ./components/modal/ModalBuilder.js ***!
  \******************************************/
/*! exports provided: default, getModalCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModalCounter", function() { return getModalCounter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var modalsContainer = $('body');
var MODAL_SIZES = {
  sm: 'modal-sm',
  md: 'modal-md',
  lg: 'modal-lg'
};
/**
 * Unique index of the modal
 *
 * @type {number}
 */

var modalIndex = 0;
/**
 * Counter of the modals at the page
 *
 * @type {number}
 */

var modalCounter = 0;
/**
 * Modal Builder
 */

var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);

    modalIndex++;
    this._id = 'modals-container-item-' + modalIndex;
  }

  _createClass(_default, [{
    key: "size",
    value: function size(_size) {
      if (!!MODAL_SIZES[_size]) {
        this._size = MODAL_SIZES[_size];
      }

      return this;
    }
  }, {
    key: "header",
    value: function header(_header) {
      this._header = _header;
      return this;
    }
  }, {
    key: "body",
    value: function body(_body) {
      this._body = _body;
      return this;
    }
  }, {
    key: "footer",
    value: function footer(_footer) {
      this._footer = _footer;
      return this;
    }
  }, {
    key: "dataset",
    value: function dataset(_dataset) {
      this._dataset = _dataset;
      return this;
    }
  }, {
    key: "_getID",
    value: function _getID() {
      return this._id;
    }
  }, {
    key: "_getSize",
    value: function _getSize() {
      return !!this._size ? this._size : MODAL_SIZES.md;
    }
  }, {
    key: "_getHeader",
    value: function _getHeader() {
      if (!!this._header) {
        return "\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">\xD7</span>\n                    </button>\n                   <h4 class=\"modal-title\">".concat(this._header, "</h4>\n                </div>");
      }

      return '';
    }
  }, {
    key: "_getFooter",
    value: function _getFooter() {
      var result = null;

      if (!!this._footer) {
        result = $("<div class=\"modal-footer\"></div>").append($("\n                    <button type=\"button\" class=\"btn btn-default btn-sm\" data-dismiss=\"modal\">\n                        Cancel\n                    </button>\n                ")).append(this._footer);
      }

      return result;
    }
  }, {
    key: "_getBody",
    value: function _getBody() {
      var result = null;

      if (!!this._body) {
        result = $("<div class=\"modal-body\"></div>").append(this._body);
      }

      return result;
    }
    /**
     * Set callback that will be call before build modal
     *
     * @param callback
     */

  }, {
    key: "beforeBuild",
    value: function beforeBuild(callback) {
      this._beforeBuildCallback = callback;
      return this;
    }
  }, {
    key: "_beforeBuild",
    value: function _beforeBuild() {
      if (typeof this._beforeBuildCallback === "function") {
        this._beforeBuildCallback();
      }
    }
    /**
     * Set callback that will be call after build modal
     *
     * @param callback
     */

  }, {
    key: "afterBuild",
    value: function afterBuild(callback) {
      this._afterBuildCallback = callback;
      return this;
    }
  }, {
    key: "_afterBuild",
    value: function _afterBuild() {
      if (typeof this._afterBuildCallback === "function") {
        this._afterBuildCallback();
      }
    }
  }, {
    key: "modal",
    value: function modal(content) {
      var _this = this;

      /**
       * Data attributes
       * @type {Array}
       */
      var dataset = [];

      if (!!this._dataset) {
        for (var name in this._dataset) {
          dataset.push("data-".concat(name, "=\"").concat(this._dataset[name], "\""));
        }
      }

      var html = $("\n            <div id=\"".concat(this._getID(), "\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" ").concat(dataset.join(' '), ">\n                <div class=\"modal-dialog modal-dialog-centered ").concat(this._getSize(), "\">\n                    <div class=\"modal-content\"></div>\n                </div>\n            </div>"));

      if (!!content) {
        this.body(content);
      }
      /**
       * Call the beforeBuild callback
       */


      this._beforeBuild();

      html.find('.modal-content').append(this._getHeader()).append(this._getBody()).append(this._getFooter());
      modalsContainer.append(html);
      /**
       * Call the afterBuild callback
       */

      this._afterBuild();
      /**
       * update counter of modals at the page
       */


      modalCounter++;
      $('#' + this._getID()).on('hidden.bs.modal', function () {
        modalCounter--;
        $('#' + _this._getID()).off('hidden.bs.modal').remove();
      }).modal();
    }
  }]);

  return _default;
}();
/**
 * Get counter of modals at the page
 *
 * @returns {number}
 */



function getModalCounter() {
  return modalCounter;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var _modalConfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalConfirm */ "./components/modal/modalConfirm.js");



/***/ }),

/***/ "./components/modal/modalConfirm.js":
/*!******************************************!*\
  !*** ./components/modal/modalConfirm.js ***!
  \******************************************/
/*! exports provided: modalConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalConfirm", function() { return modalConfirm; });
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");


/**
 * Modal confirm
 *
 * @param message
 * @param callback
 */

function modalConfirm(message, callback) {
  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header(message).footer($('<button/>', {
    'class': 'btn btn-sm btn-success',
    'text': 'Confirm',
    'data-dismiss': 'modal',
    'click': callback
  })).modal();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/notify/base.js":
/*!***********************************!*\
  !*** ./components/notify/base.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return notify; });
/**
 * Notify helper
 *
 * @param message
 * @param type
 */
function notify(message, type) {
  $.notify({
    message: message
  }, {
    type: type,
    z_index: 1051
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/notify/notifyError.js":
/*!******************************************!*\
  !*** ./components/notify/notifyError.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/notify/base.js");

/* harmony default export */ __webpack_exports__["default"] = (function (message) {
  Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])(message, 'danger');
});

/***/ }),

/***/ "./components/notify/notifySuccess.js":
/*!********************************************!*\
  !*** ./components/notify/notifySuccess.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/notify/base.js");

/* harmony default export */ __webpack_exports__["default"] = (function (message) {
  Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])(message, 'success');
});

/***/ }),

/***/ "./components/observer/EventObserver.js":
/*!**********************************************!*\
  !*** ./components/observer/EventObserver.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Event observer
 */
var EventObserver =
/*#__PURE__*/
function () {
  function EventObserver() {
    _classCallCheck(this, EventObserver);

    this.subscribers = {};
  }

  _createClass(EventObserver, [{
    key: "subscribe",
    value: function subscribe(event, handler) {
      this._log('subscribe', event);

      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }

      this.subscribers[event].push(handler);
      return this;
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, data) {
      this._log('dispatch', event);

      if (!!this.subscribers[event]) {
        this.subscribers[event].forEach(function (handler) {
          handler(data, handler);
        });
      }

      return this;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(event, state) {
      this._log('unsubscribe', event);

      if (!!this.subscribers[event]) {
        this.subscribers[event] = this.subscribers[event].filter(function (handler) {
          return handler !== state;
        });
      }
    }
  }, {
    key: "_log",
    value: function _log(method, event) {
      console.log(method.toUpperCase(), ':', '[', event, ']');
    }
  }]);

  return EventObserver;
}();

var observer = new EventObserver();
/* harmony default export */ __webpack_exports__["default"] = (observer);

/***/ }),

/***/ "./components/observer/index.js":
/*!**************************************!*\
  !*** ./components/observer/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventObserver */ "./components/observer/EventObserver.js");


/***/ }),

/***/ "./exceptions/SavedItemNotFound.js":
/*!*****************************************!*\
  !*** ./exceptions/SavedItemNotFound.js ***!
  \*****************************************/
/*! exports provided: SavedItemNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedItemNotFound", function() { return SavedItemNotFound; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Saved item not found
 *
 * Using in fastSave handler
 */
var SavedItemNotFound =
/*#__PURE__*/
function (_Error) {
  _inherits(SavedItemNotFound, _Error);

  function SavedItemNotFound() {
    _classCallCheck(this, SavedItemNotFound);

    var message = 'SavedItemNotFound';
    return _possibleConstructorReturn(this, _getPrototypeOf(SavedItemNotFound).call(this, message));
  }

  return SavedItemNotFound;
}(_wrapNativeSuper(Error));

/***/ }),

/***/ "./handlers/addEmbed.js":
/*!******************************!*\
  !*** ./handlers/addEmbed.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");

/**
 * Add embed element
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentButton = $(this);
  var target = currentButton.data('target');
  var template = currentButton.data('template');
  var idPlaceholder = currentButton.data('idplacepolder');
  var rowId = currentButton.data('rowid');
  currentButton.data('rowid', ++rowId);
  var embedForm = $('#' + template).html();
  var embedBlockId = rowId + new Date().getTime().toString(16);
  embedForm = embedForm.replace(/%embedBlockId%/g, embedBlockId);

  if (!!idPlaceholder) {
    embedForm = embedForm.replace(new RegExp(idPlaceholder, "g"), rowId);
  }

  $('#' + target).append(embedForm);
  /**
   * Event dispatch
   */

  var event = currentButton.data('event');

  if (event && event.length) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(event, {
      embedBlockId: embedBlockId
    });
  }

  currentButton.trigger('ai_animation');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/ajaxPagination.js":
/*!************************************!*\
  !*** ./handlers/ajaxPagination.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 *Ajax pagination
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var container = $(this).parents('.ajax-pagination').data('container');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).method('get').success(function (response) {
    $('#' + container).replaceWith(response);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/confirmModal.js":
/*!**********************************!*\
  !*** ./handlers/confirmModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");





/**
 * Open confirm modal before action
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var dataSet = this.dataset;
  var url = this.href;
  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__["SIZES"].sm).header(dataSet.header).footer($('<button/>', {
    'class': (dataSet.btnClass || 'btn-sm btn-success') + ' btn',
    'text': dataSet.btnName || 'Confirm',
    'click': function click() {
      var currentButton = $(this);

      if (currentButton.hasClass('loading')) {
        return false;
      }

      currentButton.addClass('loading');
      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](url).method(dataSet.method || 'get').success(function (response) {
        if (!!dataSet.event) {
          components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(dataSet.event, response);
        }

        if (parseInt(dataSet.reload) === 1) {
          location.reload();
        }

        if (parseInt(dataSet.dismiss) === 1) {
          currentButton.closest('.modal').modal('hide');
        }

        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(response);
      }).complete(function () {
        currentButton.removeClass('loading');
      }).send();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/fastSave.js":
/*!******************************!*\
  !*** ./handlers/fastSave.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");



/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = currentBtn.closest('.fast-save-container');

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(savedItem)).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/fastSavePage.js":
/*!**********************************!*\
  !*** ./handlers/fastSavePage.js ***!
  \**********************************/
/*! exports provided: CONTAINER_SELECTOR, default, markChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_SELECTOR", function() { return CONTAINER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChanged", function() { return markChanged; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");




var CONTAINER_SELECTOR = '.fast-save-page-container';
/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $(CONTAINER_SELECTOR);

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).send();
  return false;
});
/**
 * Mark form's elements as changed
 */

function markChanged() {
  $(this).addClass('changed');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/index.js":
/*!***************************!*\
  !*** ./handlers/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _fastSave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fastSave */ "./handlers/fastSave.js");
/* harmony import */ var _addEmbed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEmbed */ "./handlers/addEmbed.js");
/* harmony import */ var _removeEmbed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeEmbed */ "./handlers/removeEmbed.js");
/* harmony import */ var _submitForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitForm */ "./handlers/submitForm.js");
/* harmony import */ var _ajaxPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajaxPagination */ "./handlers/ajaxPagination.js");
/* harmony import */ var _confirmModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmModal */ "./handlers/confirmModal.js");
/* harmony import */ var _modalData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalData */ "./handlers/modalData.js");
/* harmony import */ var _fastSavePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fastSavePage */ "./handlers/fastSavePage.js");








$(document)
/**
 * Open modal with data from server by request
 */
.on('click', '.ajax-modal-action', _modalData__WEBPACK_IMPORTED_MODULE_6__["default"])
/**
 * Open confirm modal
 */
.on('click', '.ajax-confirm-action', _confirmModal__WEBPACK_IMPORTED_MODULE_5__["default"])
/**
 * Submit form data
 */
.on('click', '.ajax-submit-action', _submitForm__WEBPACK_IMPORTED_MODULE_3__["default"])
/**
 * Submit form data
 */
.on('click', '.ajax-pagination a', _ajaxPagination__WEBPACK_IMPORTED_MODULE_4__["default"])
/**
 * Add embed element
 */
.on('click', '.add-embed', _addEmbed__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Remove embed element
 */
.on('click', '.rm-embed', _removeEmbed__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Fast save the data of an entity
 */
.on('click', '.fast-save', _fastSave__WEBPACK_IMPORTED_MODULE_0__["default"])
/**
 * Mark inputs as changed
 */
.on('change', "".concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_7__["CONTAINER_SELECTOR"], " input, ").concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_7__["CONTAINER_SELECTOR"], " select, ").concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_7__["CONTAINER_SELECTOR"], " textarea"), _fastSavePage__WEBPACK_IMPORTED_MODULE_7__["markChanged"]);
/**
 * Fast save data on the page
 */

$('.fast-save-page').click(_fastSavePage__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/modalData.js":
/*!*******************************!*\
  !*** ./handlers/modalData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");




/**
 * Open modal with form by request
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var _this = this;

  e.preventDefault();
  var currentButton = $(this);

  if (currentButton.hasClass('loading')) {
    return false;
  }

  currentButton.addClass('loading');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](this.href).method(this.dataset.method || 'get').success(function (response) {
    new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__["SIZES"].lg).dataset({
      reload: _this.dataset.reload || 1
    }).header(_this.dataset.header).afterBuild(function () {
      if (!!_this.dataset.event) {
        components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_this.dataset.event, response);
      }
    }).modal(response);
  }).complete(function () {
    currentButton.removeClass('loading');
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/removeEmbed.js":
/*!*********************************!*\
  !*** ./handlers/removeEmbed.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");


/**
 * Remove embeded element
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var parent = !!this.dataset.parent ? $(this).closest(this.dataset.parent) : $(this).parent();

  if (!this.dataset.id) {
    parent.remove();
    return;
  }

  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header('Are you sure?').footer($('<button/>', {
    'class': 'btn btn-sm btn-danger',
    'text': 'Delete',
    'data-dismiss': 'modal',
    'click': function click() {
      parent.remove();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/submitForm.js":
/*!********************************!*\
  !*** ./handlers/submitForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





/**
 * Submit form
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var _this = this;

  e.preventDefault();
  var currentButton = $(this);

  if (currentButton.hasClass('loading')) {
    return false;
  }

  currentButton.addClass('loading');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this.href).data(currentButton.closest('form').serializeArray()).method(this.dataset.method || 'get').success(function (response) {
    if (!!_this.dataset.event) {
      components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_this.dataset.event, response);
    }

    if (canReload(_this)) {
      location.reload();
    }

    if (parseInt(_this.dataset.dismiss) === 1) {
      currentButton.closest('.modal').modal('hide');
    }

    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).complete(function () {
    currentButton.removeClass('loading');
  }).send();
  return false;
});
/**
 * Can reload the page
 *
 * @param button
 * @returns {boolean}
 */

function canReload(button) {
  if (parseInt(button.dataset.reload) === 1) {
    if (Object(components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_2__["getModalCounter"])() < 2) {
      var dataReload = $(button).closest('.modal').data('reload');

      if (_typeof(dataReload) === ( true ? "undefined" : undefined) || dataReload === false || parseInt(dataReload) === 1) {
        return true;
      }
    }
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./helpers/getFilePath.js":
/*!********************************!*\
  !*** ./helpers/getFilePath.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getSubFolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSubFolder */ "./helpers/getSubFolder.js");

/**
 * Get file path from storage with sub folders
 *
 * @param {string} rootFolder Root folder in the storage
 * @param {string} fileName   File name
 *
 * @returns {string}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (rootFolder, fileName) {
  return '/storage/' + rootFolder + '/' + Object(_getSubFolder__WEBPACK_IMPORTED_MODULE_0__["default"])(fileName) + '/' + fileName;
});

/***/ }),

/***/ "./helpers/getFormData.js":
/*!********************************!*\
  !*** ./helpers/getFormData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Get form data
 *
 * @param {jQuery} form Form element
 *
 * @returns {{}}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (form) {
  var formData = {};
  var formItems = form.find('input, select');

  if (!formItems.length) {
    formItems = form;
  }

  formItems.each(function () {
    var currentItem = $(this);

    switch (currentItem.attr('type')) {
      case 'radio':
      case 'checkbox':
        formData[currentItem.attr('name')] = !!currentItem.prop("checked") * 1;
        break;

      default:
        formData[currentItem.attr('name')] = currentItem.val();
    }
  });
  return formData;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./helpers/getSubFolder.js":
/*!*********************************!*\
  !*** ./helpers/getSubFolder.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blueimp-md5 */ "../../../node_modules/blueimp-md5/js/md5.js");
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blueimp_md5__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Get sub folders of the file
 *
 * Result of the function looks like: a1/b2/c3
 * Where md5 of the file = a1b2c3.........
 *
 * @param {string} fileName Name of the file
 *
 * @returns {string}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (fileName) {
  var fileNameHash = blueimp_md5__WEBPACK_IMPORTED_MODULE_0___default()(fileName).substring(0, 6);
  var pathParts = fileNameHash.match(/.{1,2}/g);
  return pathParts.join('/');
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/bootstrap */ "./vendor/bootstrap/index.js");
/* harmony import */ var bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-colorpicker */ "../../../node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js");
/* harmony import */ var bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css */ "../../../node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css");
/* harmony import */ var bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! font-awesome/scss/font-awesome.scss */ "../../../node_modules/font-awesome/scss/font-awesome.scss");
/* harmony import */ var font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor/animate */ "./vendor/animate/index.js");
/* harmony import */ var _vendor_bootstrap_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor/bootstrap-confirmation */ "./vendor/bootstrap-confirmation/index.js");
/* harmony import */ var _vendor_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor/bootstrap-datetimepicker */ "./vendor/bootstrap-datetimepicker/index.js");
/* harmony import */ var _vendor_bootstrap_notify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor/bootstrap-notify */ "./vendor/bootstrap-notify/index.js");
/* harmony import */ var _vendor_select2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendor/select2 */ "./vendor/select2/index.js");
/* harmony import */ var _vendor_ekko_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vendor/ekko-lightbox */ "./vendor/ekko-lightbox/index.js");
/* harmony import */ var _vendor_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vendor/theme */ "./vendor/theme/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./components/index.js");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./handlers */ "./handlers/index.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_14__);
/**
 * jQuery
 */

window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
/**
 * Bootstrap
 */


/**
 * Bootstrap Ccolorpicker
 */



/**
 * Font Awesome
 */


/**
 * External modules
 * TODO: get by npm
 */








/**
 * Components
 */


/**
 * Handlers
 */


/**
 * Styles
 */


/**
 * Modules loader
 */

var path = location.pathname.split('/');

var context = __webpack_require__("./modules sync recursive module\\.js$");

if (path[1].length > 2) {
  /**
   * To creating different files for each module
   * (Don't forget npm i --save-dev bundle-loader)
   * const context = require.context('bundle-loader!modules', true, /index\.js$/);
   */
  context.keys().map(function (module) {
    if (module.split('/')[1] === 'settings') {
      if (path[2] !== undefined && module.split('/')[3] === path[2]) {
        console.log('MODULE:', path[2]);
        context(module);
      }
    }

    if (module.split('/')[1] === path[1]) {
      console.log('MODULE:', path[1]);
      context(module);
    }

    if (path[1].length === 0) {
      context('./default/module.js');
    }
  });
} else {
  console.log('MODULE: public');
  context('./public/module.js');
}

/***/ }),

/***/ "./listeners/awardCreate.js":
/*!**********************************!*\
  !*** ./listeners/awardCreate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], self);
    var currentBtn = $(_this);
    var editBtn = $('#' + _this.dataset.templateId).html().replace(new RegExp(_this.dataset.templatePlaceholder, "g"), data.award_id);
    currentBtn.parent().append(editBtn);
    currentBtn.remove();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./listeners/awardDelete.js":
/*!**********************************!*\
  !*** ./listeners/awardDelete.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], self);
    var createBtn = $('#' + _this.dataset.templateId).html();
    var parent = $(_this).parent();
    parent.children().remove();
    parent.append(createBtn);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./listeners/dropZoneInit.js":
/*!***********************************!*\
  !*** ./listeners/dropZoneInit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");
/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");




/**
 * Dropzone init after the modal opened
 */

/* harmony default export */ __webpack_exports__["default"] = (function (EVENT_NAME) {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(EVENT_NAME, function () {
    /**
     * Dropzone container
     *
     * @type {HTMLElement | null}
     */
    var dropzoneElement = document.getElementById('dropzone');
    /**
     * Preview URL hidden input
     *
     * @type {HTMLElement | null}
     */

    var previewURL = document.getElementById('preview-url');
    /**
     * Dropzone initialization
     */

    var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](dropzoneElement).setUploadUrl(dropzoneElement.dataset.url).error(function (file, response) {
      Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      $('#preview-url').val('');
    }).cancel(function () {
      $('#preview-url').val('');
    }).success(function (file, response) {
      $('.dz-filename span').text(response.file_name);
      previewURL.value = response.file_name;
    });
    /**
     * Set preview
     */

    if (previewURL.value.length) {
      dropzoneBuilder.setPreview(previewURL.value, Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__["default"])(dropzoneElement.dataset.folder, previewURL.value));
    }
    /**
     * Dropzone build
     */


    dropzoneBuilder.build();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules sync recursive module\\.js$":
/*!**********************************!*\
  !*** ./modules sync module\.js$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./action-type/module.js": "./modules/action-type/module.js",
	"./announcements/module.js": "./modules/announcements/module.js",
	"./assets/module.js": "./modules/assets/module.js",
	"./award/module.js": "./modules/award/module.js",
	"./banner/module.js": "./modules/banner/module.js",
	"./cert-setup/module.js": "./modules/cert-setup/module.js",
	"./cert-users/module.js": "./modules/cert-users/module.js",
	"./cert/module.js": "./modules/cert/module.js",
	"./cms-adps/module.js": "./modules/cms-adps/module.js",
	"./cms-roles/module.js": "./modules/cms-roles/module.js",
	"./cms-user-actions/module.js": "./modules/cms-user-actions/module.js",
	"./cms-users/module.js": "./modules/cms-users/module.js",
	"./collection/module.js": "./modules/collection/module.js",
	"./daily-loot/module.js": "./modules/daily-loot/module.js",
	"./default/module.js": "./modules/default/module.js",
	"./deploy/module.js": "./modules/deploy/module.js",
	"./dpa/module.js": "./modules/dpa/module.js",
	"./dye/module.js": "./modules/dye/module.js",
	"./fingerprint-form/module.js": "./modules/fingerprint-form/module.js",
	"./fingerprint/module.js": "./modules/fingerprint/module.js",
	"./gift-wrap/module.js": "./modules/gift-wrap/module.js",
	"./group-edit/module.js": "./modules/group-edit/module.js",
	"./group-event/module.js": "./modules/group-event/module.js",
	"./group/module.js": "./modules/group/module.js",
	"./levels/module.js": "./modules/levels/module.js",
	"./linked-assets/module.js": "./modules/linked-assets/module.js",
	"./localization/module.js": "./modules/localization/module.js",
	"./magic/module.js": "./modules/magic/module.js",
	"./makeup-kit-asset/module.js": "./modules/makeup-kit-asset/module.js",
	"./makeup-kit/module.js": "./modules/makeup-kit/module.js",
	"./meal-ingredients/module.js": "./modules/meal-ingredients/module.js",
	"./meal/module.js": "./modules/meal/module.js",
	"./neighbor-activity/module.js": "./modules/neighbor-activity/module.js",
	"./nla-asset/module.js": "./modules/nla-asset/module.js",
	"./nla-category/module.js": "./modules/nla-category/module.js",
	"./nla-section/module.js": "./modules/nla-section/module.js",
	"./product/module.js": "./modules/product/module.js",
	"./public/module.js": "./modules/public/module.js",
	"./settings/module.js": "./modules/settings/module.js",
	"./settings/modules/ai_animation/module.js": "./modules/settings/modules/ai_animation/module.js",
	"./shop-department/module.js": "./modules/shop-department/module.js",
	"./sound/module.js": "./modules/sound/module.js",
	"./special-prizes-form/module.js": "./modules/special-prizes-form/module.js",
	"./special-prizes/module.js": "./modules/special-prizes/module.js",
	"./tamatool/module.js": "./modules/tamatool/module.js",
	"./trophies/module.js": "./modules/trophies/module.js",
	"./trophy-cup-users/module.js": "./modules/trophy-cup-users/module.js",
	"./users/module.js": "./modules/users/module.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./modules sync recursive module\\.js$";

/***/ }),

/***/ "./modules/action-type/constants.js":
/*!******************************************!*\
  !*** ./modules/action-type/constants.js ***!
  \******************************************/
/*! exports provided: ACTION_TYPE_STATES_CHANGED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPE_STATES_CHANGED", function() { return ACTION_TYPE_STATES_CHANGED; });
var ACTION_TYPE_STATES_CHANGED = 'ACTION_TYPE_STATES_CHANGED';

/***/ }),

/***/ "./modules/action-type/handlers/collapseState.js":
/*!*******************************************************!*\
  !*** ./modules/action-type/handlers/collapseState.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Collapse state
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var parent = $(this).closest('.action-type-state');
  parent.toggleClass('down');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/handlers/collapseStates.js":
/*!********************************************************!*\
  !*** ./modules/action-type/handlers/collapseStates.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Collapse states
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  $('.action-type-state').toggleClass('down');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/handlers/removeActionTypeState.js":
/*!***************************************************************!*\
  !*** ./modules/action-type/handlers/removeActionTypeState.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");





/**
 * Remove the State of the Action Type
 * at the modal
 * with confirm
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentElement = $(this);
  var parent = currentElement.closest('.action-type-state');

  if (!currentElement.data('id')) {
    parent.remove();
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPE_STATES_CHANGED"], {});
    return false;
  }

  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header('Are you sure?').footer($('<button/>', {
    'class': 'btn btn-sm btn-danger',
    'text': 'Delete',
    'data-dismiss': 'modal',
    'click': function click() {
      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](currentElement.data('url')).method('DELETE').success(function () {
        parent.remove();
        components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPE_STATES_CHANGED"], {});
      }).send();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/listeners/updateIndexes.js":
/*!********************************************************!*\
  !*** ./modules/action-type/listeners/updateIndexes.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");


/**
 * Update indexes of the states
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPE_STATES_CHANGED"], function () {
    var index = 1;
    $('.index').each(function (_, item) {
      $(item).val(index++);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/module.js":
/*!***************************************!*\
  !*** ./modules/action-type/module.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _listeners_updateIndexes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/updateIndexes */ "./modules/action-type/listeners/updateIndexes.js");
/* harmony import */ var _handlers_collapseState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/collapseState */ "./modules/action-type/handlers/collapseState.js");
/* harmony import */ var _handlers_collapseStates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/collapseStates */ "./modules/action-type/handlers/collapseStates.js");
/* harmony import */ var _handlers_removeActionTypeState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/removeActionTypeState */ "./modules/action-type/handlers/removeActionTypeState.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./modules/action-type/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Update indexes
 */

Object(_listeners_updateIndexes__WEBPACK_IMPORTED_MODULE_0__["default"])();
$(document)
/**
 * Collapse one state
 */
.on('click', '.collapse-link', _handlers_collapseState__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Collapse all states
 */
.on('click', '.hide-states', _handlers_collapseStates__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Remove state
 */
.on('click', '.rm-action-type-states', _handlers_removeActionTypeState__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/style.scss":
/*!****************************************!*\
  !*** ./modules/action-type/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/announcements/handlers/addNewRow.js":
/*!*****************************************************!*\
  !*** ./modules/announcements/handlers/addNewRow.js ***!
  \*****************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the announcements config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#announcements > tbody');
  var lastID = tbody.find("tr").last().find('.ann_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#announcements_template').html().replace(/%announcement_id%/g, i + incrementId);
    tbody.append(trLast);
    tbody.find('.select2').select2();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/announcements/handlers/saveState.js":
/*!*****************************************************!*\
  !*** ./modules/announcements/handlers/saveState.js ***!
  \*****************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Update row to the announcements config grid
 *
 * @returns {boolean}
 */

function saveState() {
  var award = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var route = $(this).data('route');
  var container = $('.announcements-save-page-container');
  var data = container.find("." + award + "changed input, ." + award + "changed select").serializeArray();

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to save!');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).success(function (resp) {
    container.find('tr.' + award + 'changed').removeClass(award + 'changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(resp);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/announcements/module.js":
/*!*****************************************!*\
  !*** ./modules/announcements/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/announcements/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/announcements/handlers/saveState.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");






$(document)
/**
 * Add next rows to the announcements grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Mark row as changed for select2
 */
.on('input', ':checkbox', function () {
  $(this).attr("checked", !$(this).attr("checked"));
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Create award and save announcement
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_5__["default"].bind(_this)();
  $(this).closest('tr').addClass('award-changed');
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_2__["AWARD_CREATE"], function (data, self) {
    Object(_handlers_saveState__WEBPACK_IMPORTED_MODULE_1__["saveState"])('award-');
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  var saveButton = $('.save-page');
  $(this).closest('tr').addClass('award-changed');
  $(this).closest('tr').find('input[name="award_id"]').val(0);
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_4__["default"].bind(_this, saveButton)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_2__["AWARD_DELETE"], function (data, self) {
    Object(_handlers_saveState__WEBPACK_IMPORTED_MODULE_1__["saveState"])('award-');
  });
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the announcements page
 */

$('.save-page').click(function () {
  return Object(_handlers_saveState__WEBPACK_IMPORTED_MODULE_1__["saveState"])();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/changeType.js":
/*!***********************************************!*\
  !*** ./modules/assets/handlers/changeType.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * SUB_TYPES - it is a global object
 * Inited in asset/form.blade.php
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  setSubtypes(this.value, this.dataset.subtype);
});
var assetFormSubtype = $("#subtype");
var assetFormActionType = $('#asset-form-action-type');
var assetFormCollection = $('#asset-form-collection');
var prices = $('.prices');

function setSubtypes(type, subtype) {
  assetFormSubtype.empty().select2({
    data: SUB_TYPES[type]
  }).val(subtype).change();
  /**
   * Default state
   */

  hide(assetFormActionType);
  hide(assetFormCollection);
  show(prices);

  switch (parseInt(type)) {
    // Furniture
    case 1:
      show(assetFormActionType);
      break;
    // Clothes

    case 2:
      show(assetFormCollection);
      break;
    // Body Part

    case 5:
      hide(prices);
      break;
  }
}

function hide(element) {
  element.addClass('hide');
}

function show(element) {
  element.removeClass('hide');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/getLastCollectionNumber.js":
/*!************************************************************!*\
  !*** ./modules/assets/handlers/getLastCollectionNumber.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).success(function (result) {
    $('#collection-number').val(result.collection_id).removeClass('hide');
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/listeners/awardCreate.js":
/*!*************************************************!*\
  !*** ./modules/assets/listeners/awardCreate.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], self);
    var currentBtn = $(_this);
    var saveAssetBtn = currentBtn.closest('tr').find('.save-asset');
    var editBtn = $('#' + _this.dataset.templateId).html().replace(new RegExp(_this.dataset.templatePlaceholder, "g"), data.award_id);
    currentBtn.parent().append(editBtn);
    currentBtn.remove();
    saveAssetBtn.click();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/listeners/awardDelete.js":
/*!*************************************************!*\
  !*** ./modules/assets/listeners/awardDelete.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], self);
    var createBtn = $('#' + _this.dataset.templateId).html();
    var parent = $(_this).parent();
    parent.children().remove();
    parent.append(createBtn);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/module.js":
/*!**********************************!*\
  !*** ./modules/assets/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/awardCreate */ "./modules/assets/listeners/awardCreate.js");
/* harmony import */ var _listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners/awardDelete */ "./modules/assets/listeners/awardDelete.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/assets/handlers/changeType.js");
/* harmony import */ var _handlers_getLastCollectionNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/getLastCollectionNumber */ "./modules/assets/handlers/getLastCollectionNumber.js");




$('#assets-table').on('click', '.award-create', _listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete', _listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]);
$('#asset-form-type').change(_handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"]).change();
$('#get-last-collection-number').click(_handlers_getLastCollectionNumber__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/award/constants.js":
/*!************************************!*\
  !*** ./modules/award/constants.js ***!
  \************************************/
/*! exports provided: AWARD_CREATE, AWARD_DELETE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_CREATE", function() { return AWARD_CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_DELETE", function() { return AWARD_DELETE; });
var AWARD_CREATE = 'AWARD_CREATE';
var AWARD_DELETE = 'AWARD_DELETE';

/***/ }),

/***/ "./modules/award/module.js":
/*!*********************************!*\
  !*** ./modules/award/module.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./modules/banner/constants.js":
/*!*************************************!*\
  !*** ./modules/banner/constants.js ***!
  \*************************************/
/*! exports provided: BANNER_SHOW_FORM, TYPE_SELECT_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANNER_SHOW_FORM", function() { return BANNER_SHOW_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_SELECT_ID", function() { return TYPE_SELECT_ID; });
/**
 * Show form event
 *
 * @type {string}
 */
var BANNER_SHOW_FORM = 'BANNER_SHOW_FORM';
/**
 * Id of type's select
 *
 * @type {string}
 */

var TYPE_SELECT_ID = 'banner-type';

/***/ }),

/***/ "./modules/banner/handlers/changeType.js":
/*!***********************************************!*\
  !*** ./modules/banner/handlers/changeType.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");

/**
 * Change type handler
 * Hide/show some fields
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var select = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__["TYPE_SELECT_ID"]);

  if (!select || select.selectedIndex === -1) {
    return false;
  }

  if (select.options.length && select.options[select.selectedIndex]) {
    var selectedElement = select.options[select.selectedIndex];
    $('.banner-type').addClass('hide');
    $('.banner-type-' + selectedElement.value).removeClass('hide');
  }

  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/banner/handlers/showForm.js":
/*!*********************************************!*\
  !*** ./modules/banner/handlers/showForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/showForm */ "./modules/banner/listeners/showForm.js");



/**
 * Show form handler
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * Dropzone Init
   */
  Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__["BANNER_SHOW_FORM"]);
  /**
   * Init showForm listener
   */

  Object(_listeners_showForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./modules/banner/listeners/showForm.js":
/*!**********************************************!*\
  !*** ./modules/banner/listeners/showForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/changeType */ "./modules/banner/handlers/changeType.js");



/**
 * Show form listener
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["BANNER_SHOW_FORM"], function () {
    /**
     * Type select change trigger
     */
    Object(_handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"])();
    /**
     * Dates init
     */

    $('.banner-form .datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/banner/module.js":
/*!**********************************!*\
  !*** ./modules/banner/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showForm */ "./modules/banner/handlers/showForm.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/banner/handlers/changeType.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./modules/banner/constants.js");



/**
 * Show edit form of a banner
 */

$('.show-form').click(Object(_handlers_showForm__WEBPACK_IMPORTED_MODULE_0__["default"])());
$(document)
/**
 * Change type handler
 */
.on('change', '#' + _constants__WEBPACK_IMPORTED_MODULE_2__["TYPE_SELECT_ID"], _handlers_changeType__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert-setup/handlers/savePage.js":
/*!*************************************************!*\
  !*** ./modules/cert-setup/handlers/savePage.js ***!
  \*************************************************/
/*! exports provided: savePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePage", function() { return savePage; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");




/**
 * Save
 *
 * @returns {boolean}
 */

function savePage() {
  var container = $('#cert-save-container');
  var formItems = container.find(".changed select").serializeArray();
  var rows = container.find(".changed");

  if (!formItems.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__["default"])('Nothing to send!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(formItems).success(function (response) {
      if (!!response.errors) {
        Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      } else {
        rows.removeClass('changed');
        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
      }
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert-setup/module.js":
/*!**************************************!*\
  !*** ./modules/cert-setup/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/cert-setup/handlers/savePage.js");
/* harmony import */ var modules_cms_roles_handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/cms-roles/handlers/changeTab */ "./modules/cms-roles/handlers/changeTab.js");


$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', modules_cms_roles_handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__["changeTab"])
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
});
/**
 * Fast save data
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_0__["savePage"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert-users/handlers/saveState.js":
/*!**************************************************!*\
  !*** ./modules/cert-users/handlers/saveState.js ***!
  \**************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the magic config grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.cert-save-container');
  var data = container.find(".changed input");
  var formItems = container.find(".changed");
  console.log(formItems);

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).success(function (response) {
      formItems.removeClass('changed');
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert-users/module.js":
/*!**************************************!*\
  !*** ./modules/cert-users/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/cert-users/handlers/saveState.js");
/* harmony import */ var modules_cms_roles_handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/cms-roles/handlers/changeTab */ "./modules/cms-roles/handlers/changeTab.js");


$(document)
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"])
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', modules_cms_roles_handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__["changeTab"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert/handlers/findUser.js":
/*!*******************************************!*\
  !*** ./modules/cert/handlers/findUser.js ***!
  \*******************************************/
/*! exports provided: findUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUser", function() { return findUser; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Find User
 *
 * @returns {boolean}
 */

function findUser() {
  var prefix = $(this).data('prefix');
  var data = {
    uid: $('#' + prefix).val(),
    name: $('#' + prefix + '_name').val(),
    prefix: prefix
  };
  var user_template = $('#user_template').html();
  var insert_block = $('#' + prefix + '_list');

  if (!data.uid.length && !data.name.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to find!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      insert_block.html('');
      $(response.users).each(function (index, item) {
        insert_block.closest('table').css('display', 'inline-table');
        insert_block.append(user_template.replace(/%user_id%/g, item.id).replace('%pet_name%', item.pet).replace('%user_name%', item.first_name + ' ' + item.last_name).replace('%level%', item.xp).replace('%avatar%', item.avatar).replace(/%target%/g, prefix));
      });
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert/handlers/sendCert.js":
/*!*******************************************!*\
  !*** ./modules/cert/handlers/sendCert.js ***!
  \*******************************************/
/*! exports provided: sendCert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCert", function() { return sendCert; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");




/**
 * Send Gift
 *
 * @returns {boolean}
 */

function sendCert() {
  $(this).attr('disabled', true);
  setTimeout(function () {
    $('#send').removeAttr('disabled');
  }, 3000);
  var container = $('#cert-save-container');
  var formItems = container.find("input, textarea").serializeArray();

  if (!formItems.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__["default"])('Nothing to send!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(formItems).success(function (response) {
      if (!!response.errors) {
        Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      } else {
        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
        var trophy_cups_count = $('#cert_cups_count');
        trophy_cups_count.text(parseInt(trophy_cups_count.text()) + 1);
        $('.table').hide();
        $('#cert-save-container').find('input[type="text"], textarea').val('');
        var message_length = $('#news_message_length');
        message_length.text(message_length.data('length'));
        var name_length = $('#name_length');
        name_length.text(name_length.data('length'));
        var event_length = $('#event_length');
        event_length.text(event_length.data('length'));
        var group_length = $('#group_length');
        group_length.text(group_length.data('length'));
      }
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert/module.js":
/*!********************************!*\
  !*** ./modules/cert/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_sendCert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/sendCert */ "./modules/cert/handlers/sendCert.js");
/* harmony import */ var _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/findUser */ "./modules/cert/handlers/findUser.js");
/* harmony import */ var modules_cms_roles_handlers_changeTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/cms-roles/handlers/changeTab */ "./modules/cms-roles/handlers/changeTab.js");



$(document)
/**
 * Find user
 */
.on('click', '#find_sender, #find_receiver', _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__["findUser"])
/**
 * Save the row
 */
.on('click', '#send', _handlers_sendCert__WEBPACK_IMPORTED_MODULE_0__["sendCert"])
/**
 * Mark selected cert
 */
.on('click', '#assets_list img', function () {
  $('#assets_list').find('img').css('border', '');
  $(this).css('border', '3px solid #5c5c5c');
  $('#asset_id').val($(this).data('cert'));
})
/**
 * Mark selected row
 */
.on('click', '.table tr', function () {
  $(this).find('input[type="radio"]').prop("checked", true);
  $('#' + $(this).data('target') + '_uid').val($(this).data('uid'));
})
/**
 * Change limit counter
 */
.on('input', 'input, textarea', function () {
  var target = $(this).prop('name').replace('cert_data[', '').replace(']', '') + '_length';
  $('#' + target).text($(this).data('maxlength') - $(this).val().length);
})
/**
 * Remove entered data
 */
.on('click', '#cancel', function () {
  $('.table').hide();
  $(this).closest('table').find('input[type="text"], textarea').val('');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/copyAdp.js":
/*!**********************************************!*\
  !*** ./modules/cms-adps/handlers/copyAdp.js ***!
  \**********************************************/
/*! exports provided: copyAdp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAdp", function() { return copyAdp; });
/**
 * Handler for copy adp ids to clipboard
 */
function copyAdp(e) {
  e.preventDefault();
  var adpIdsField = $('input[name="adp_ids"]');
  var adpIds = [];
  $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
    adpIds.push($(item).data('id'));
  });
  adpIdsField.val(adpIds);
  adpIdsField.select();
  document.execCommand("copy"); // adpIdsField.val([]);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/copyAssets.js":
/*!*************************************************!*\
  !*** ./modules/cms-adps/handlers/copyAssets.js ***!
  \*************************************************/
/*! exports provided: copyAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAssets", function() { return copyAssets; });
/**
 * Handler for copy assets ids to clipboard
 */
function copyAssets(e) {
  e.preventDefault();
  var assetIdsField = $('input[name="asset_ids"]');
  var assetIds = [];
  $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
    assetIds.push($(item).data('asset-id'));
  });
  assetIdsField.val(assetIds);
  assetIdsField.select();
  document.execCommand("copy");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/hideArchive.js":
/*!**************************************************!*\
  !*** ./modules/cms-adps/handlers/hideArchive.js ***!
  \**************************************************/
/*! exports provided: hideArchive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideArchive", function() { return hideArchive; });
/**
 * Handler of archive categories on adp page
 */
function hideArchive(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.show-archive').removeClass('hidden');
  $('.archive-categories-list').html('');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/hideTasks.js":
/*!************************************************!*\
  !*** ./modules/cms-adps/handlers/hideTasks.js ***!
  \************************************************/
/*! exports provided: hideTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTasks", function() { return hideTasks; });
/**
 * Handler of tasks on adp page
 */
function hideTasks(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.show-tasks').removeClass('hidden');
  $('.tasks-list').hide('slow');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/showArchive.js":
/*!**************************************************!*\
  !*** ./modules/cms-adps/handlers/showArchive.js ***!
  \**************************************************/
/*! exports provided: showArchive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArchive", function() { return showArchive; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Handler of archive categories on adp page
 */

function showArchive(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.hide-archive').removeClass('hidden');
  var action = currentElement.attr('href');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    $('.archive-categories-list').html(response);
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/showTasks.js":
/*!************************************************!*\
  !*** ./modules/cms-adps/handlers/showTasks.js ***!
  \************************************************/
/*! exports provided: showTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTasks", function() { return showTasks; });
/**
 * Handler of tasks on adp page
 */
function showTasks(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.hide-tasks').removeClass('hidden');
  $('.tasks-list').show('slow');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/module.js":
/*!************************************!*\
  !*** ./modules/cms-adps/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showArchive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showArchive */ "./modules/cms-adps/handlers/showArchive.js");
/* harmony import */ var _handlers_hideArchive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/hideArchive */ "./modules/cms-adps/handlers/hideArchive.js");
/* harmony import */ var _handlers_hideTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/hideTasks */ "./modules/cms-adps/handlers/hideTasks.js");
/* harmony import */ var _handlers_showTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/showTasks */ "./modules/cms-adps/handlers/showTasks.js");
/* harmony import */ var _handlers_copyAdp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/copyAdp */ "./modules/cms-adps/handlers/copyAdp.js");
/* harmony import */ var _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/copyAssets */ "./modules/cms-adps/handlers/copyAssets.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./modules/cms-adps/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
//import {bundleVersionSelect} from "./handlers/bundleVersionSelect";







$(document)
/**
 * Show archive adp categories
 */
.on('click', '.show-archive', _handlers_showArchive__WEBPACK_IMPORTED_MODULE_0__["showArchive"])
/**
 * Hide archive adp categories
 */
.on('click', '.hide-archive', _handlers_hideArchive__WEBPACK_IMPORTED_MODULE_1__["hideArchive"])
/**
 * Hide adp tasks by status and user
 */
.on('click', '.hide-tasks', _handlers_hideTasks__WEBPACK_IMPORTED_MODULE_2__["hideTasks"])
/**
 * Show adp tasks by status and user
 */
.on('click', '.show-tasks', _handlers_showTasks__WEBPACK_IMPORTED_MODULE_3__["showTasks"])
/**
 * Show adp tasks by status and user
 */
.on('click', '.copy-adp', _handlers_copyAdp__WEBPACK_IMPORTED_MODULE_4__["copyAdp"])
/**
 * Show adp tasks by status and user
 */
.on('click', '.copy-assets', _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__["copyAssets"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/styles.scss":
/*!**************************************!*\
  !*** ./modules/cms-adps/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/cms-roles/handlers/changeTab.js":
/*!*************************************************!*\
  !*** ./modules/cms-roles/handlers/changeTab.js ***!
  \*************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-roles/module.js":
/*!*************************************!*\
  !*** ./modules/cms-roles/module.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/cms-roles/handlers/changeTab.js");

$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-user-actions/handlers/changeTab.js":
/*!********************************************************!*\
  !*** ./modules/cms-user-actions/handlers/changeTab.js ***!
  \********************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-user-actions/module.js":
/*!********************************************!*\
  !*** ./modules/cms-user-actions/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/cms-user-actions/handlers/changeTab.js");

$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Set cursor to parent node
 */
.on('mouseenter', 'td', function () {
  if ($(this).find('.hidden-wrapper').length) {
    $(this).css('cursor', 'pointer');
  }
})
/**
 * Open deploy info
 */
.on('click', 'td', function () {
  var wrapper = $(this).find('.hidden-wrapper');

  if (wrapper && wrapper.hasClass('open')) {
    if (!window.getSelection().toString().length) {
      wrapper.removeClass('open');
    } else {
      document.execCommand("copy");
    }
  } else {
    wrapper.addClass('open');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-users/handlers/changeTab.js":
/*!*************************************************!*\
  !*** ./modules/cms-users/handlers/changeTab.js ***!
  \*************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-users/module.js":
/*!*************************************!*\
  !*** ./modules/cms-users/module.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/cms-users/handlers/changeTab.js");

$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/constants.js":
/*!*****************************************!*\
  !*** ./modules/collection/constants.js ***!
  \*****************************************/
/*! exports provided: COLLECTION_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_SHOW_FORM", function() { return COLLECTION_SHOW_FORM; });
var COLLECTION_SHOW_FORM = 'COLLECTION_SHOW_FORM';

/***/ }),

/***/ "./modules/collection/handlers/fastSave.js":
/*!*************************************************!*\
  !*** ./modules/collection/handlers/fastSave.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");




var assetPreviewTemplate = $('#asset-preview-template').html();
/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $('.fast-save-container');

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.each(function () {
      var currentItem = $(this);

      if (currentItem.hasClass('asset-id') && !!response.assets[currentItem.val()]) {
        var currentAsset = response.assets[currentItem.val()];
        currentItem.closest('.slot').find('.asset-preview').html(assetPreviewTemplate.replace(new RegExp('%url%', "g"), currentAsset.preview_url).replace(new RegExp('%title%', "g"), currentAsset.name));
      }
    }).removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/hideAdditionalRows.js":
/*!***********************************************************!*\
  !*** ./modules/collection/handlers/hideAdditionalRows.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Hide additional rows
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  $('.additional-data').toggleClass('hide');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/markInputAsChanged.js":
/*!***********************************************************!*\
  !*** ./modules/collection/handlers/markInputAsChanged.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Mark input as changed
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(this).addClass('changed');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/sortableInit.js":
/*!*****************************************************!*\
  !*** ./modules/collection/handlers/sortableInit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  new sortablejs__WEBPACK_IMPORTED_MODULE_0___default.a(_this, {
    group: _this.dataset.group,
    removeCloneOnHide: true,
    onEnd: function onEnd(e) {
      $(e.target).find(_this.dataset.position).each(function (index) {
        var position = $(this);

        if (parseInt(position.val()) !== index) {
          position.val(index);
          position.change();
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/module.js":
/*!**************************************!*\
  !*** ./modules/collection/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./modules/collection/constants.js");
/* harmony import */ var _handlers_fastSave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/fastSave */ "./modules/collection/handlers/fastSave.js");
/* harmony import */ var _handlers_markInputAsChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/markInputAsChanged */ "./modules/collection/handlers/markInputAsChanged.js");
/* harmony import */ var _handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/sortableInit */ "./modules/collection/handlers/sortableInit.js");
/* harmony import */ var _handlers_hideAdditionalRows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/hideAdditionalRows */ "./modules/collection/handlers/hideAdditionalRows.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./modules/collection/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_SHOW_FORM"]));
/**
 * Fast save collection
 */

$('.collection-fast-save').click(_handlers_fastSave__WEBPACK_IMPORTED_MODULE_2__["default"]);
/**
 * Mark inputs as changed
 */

$('.fast-save-container').find('input').change(_handlers_markInputAsChanged__WEBPACK_IMPORTED_MODULE_3__["default"]);
/**
 * Sortable init
 */

$('.sortable').each(_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
/**
 * Hide additional rows
 */

$('.hide-slots').click(_handlers_hideAdditionalRows__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/style.scss":
/*!***************************************!*\
  !*** ./modules/collection/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/daily-loot/handlers/addNewRow.js":
/*!**************************************************!*\
  !*** ./modules/daily-loot/handlers/addNewRow.js ***!
  \**************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the sound config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#daily_loot > tbody');
  var trLast = $('#daily_loot_template').html();
  var lastIDS = [];
  var incrementId = 1;
  tbody.find("tr").each(function (n, item) {
    if (parseInt($(item).find('input').first().val())) {
      lastIDS.push(parseInt($(item).find('input').first().val()));
    }
  });

  if (lastIDS.length) {
    incrementId = Math.max.apply(Math, lastIDS) + 1 || 1;
  }

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%rowIndex%/g, i + incrementId));
    tbody.find("tr").last().find('input').first().val(i + incrementId);
    tbody.find('.datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/handlers/saveState.js":
/*!**************************************************!*\
  !*** ./modules/daily-loot/handlers/saveState.js ***!
  \**************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Update row to the sound config grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.daily-loot-save-container');
  var data = container.find(".changed input, .changed select").serializeArray();

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to save!');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).success(function (resp) {
    container.find('tr.changed').removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(resp);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/module.js":
/*!**************************************!*\
  !*** ./modules/daily-loot/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/daily-loot/handlers/saveState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/daily-loot/handlers/addNewRow.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./modules/daily-loot/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



$(document)
/**
 * Add next rows to the magic grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark the row as changed
 */
.on('click', '.remove-embed', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Switch page type
 */
.on('click', '.toggle-page-type', function () {
  location.href = location.pathname.slice(0, location.pathname.lastIndexOf('/')) + $(this).data('href');
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/style.scss":
/*!***************************************!*\
  !*** ./modules/daily-loot/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/default/module.js":
/*!***********************************!*\
  !*** ./modules/default/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('#common-menu').find('.common-menu-section').each(function () {
    if ($(this).find('li').length === 0) {
      $(this).closest('.common-menu-section').hide();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/handlers/changeTab.js":
/*!**********************************************!*\
  !*** ./modules/deploy/handlers/changeTab.js ***!
  \**********************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?direction=" + direction;
  history.pushState({
    id: 'deploy'
  }, 'Deploy', url);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/module.js":
/*!**********************************!*\
  !*** ./modules/deploy/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/deploy/handlers/changeTab.js");
/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");


$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Save all page
 */
.on('click', '.fast-save-page-custom', handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dpa/handlers/addNewRow.js":
/*!*******************************************!*\
  !*** ./modules/dpa/handlers/addNewRow.js ***!
  \*******************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the levels config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#dpa > tbody');
  var lastID = tbody.find("tr").last().find('.dpa_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#dpa_template').html().replace(/%dpa_id%/g, i + incrementId);
    tbody.append(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dpa/handlers/saveDpaState.js":
/*!**********************************************!*\
  !*** ./modules/dpa/handlers/saveDpaState.js ***!
  \**********************************************/
/*! exports provided: saveDpaState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDpaState", function() { return saveDpaState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the dpa config grid
 *
 * @returns {boolean}
 */

function saveDpaState(e) {
  e.preventDefault();
  var route = $(this).data('route');
  var data = $('.dpa-save-page-container').find(".changed input, .changed select").serializeArray();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dpa/module.js":
/*!*******************************!*\
  !*** ./modules/dpa/module.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/dpa/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveDpaState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/saveDpaState */ "./modules/dpa/handlers/saveDpaState.js");


$(document)
/**
 * Delete dpa
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Add next row to the dpa grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Add next row to the dpa grid
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Fast save data on the dyes page
 */
.on('click', '.dpa-save-page', _handlers_saveDpaState__WEBPACK_IMPORTED_MODULE_1__["saveDpaState"])
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/addNewRow.js":
/*!*******************************************!*\
  !*** ./modules/dye/handlers/addNewRow.js ***!
  \*******************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the dye config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#dye > tbody');
  var trLast = $('#dye_template').html();

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast);
    var lastRow = tbody.find("tr").last().find('.cp2');
    lastRow.each(function (index, item) {
      $(item).colorpicker({});
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/changeRowIndex.js":
/*!************************************************!*\
  !*** ./modules/dye/handlers/changeRowIndex.js ***!
  \************************************************/
/*! exports provided: changeRowIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRowIndex", function() { return changeRowIndex; });
/**
 * Change row index
 *
 * @returns {boolean}
 */
function changeRowIndex() {
  var rowIndex = $(this).val();
  var row = $(this).closest('tr').find('input, select');
  row.each(function (index, item) {
    var oldName = $(item).attr('name');
    var newName = oldName.slice(0, 4) + rowIndex + oldName.slice(oldName.indexOf(']'));
    $(item).attr('name', newName);
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/dyeSavePage.js":
/*!*********************************************!*\
  !*** ./modules/dye/handlers/dyeSavePage.js ***!
  \*********************************************/
/*! exports provided: DYE_CONTAINER_SELECTOR, default, markChangedTr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYE_CONTAINER_SELECTOR", function() { return DYE_CONTAINER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChangedTr", function() { return markChangedTr; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");




var DYE_CONTAINER_SELECTOR = '.dye-save-page-container';
/**
 * Fast save data from the dyes page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $(DYE_CONTAINER_SELECTOR);

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).send();
  return false;
});
/**
 * Mark form's tr as changed
 */

function markChangedTr() {
  $(this).closest('tr').addClass('changed');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/module.js":
/*!*******************************!*\
  !*** ./modules/dye/module.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/dye/handlers/addNewRow.js");
/* harmony import */ var _handlers_changeRowIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeRowIndex */ "./modules/dye/handlers/changeRowIndex.js");
/* harmony import */ var _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/dyeSavePage */ "./modules/dye/handlers/dyeSavePage.js");



$(document)
/**
 * Init color-picker inputs
 */
.ready(function () {
  $('.cp2').colorpicker().on('create', function (e) {
    $(document)
    /**
     * Mark tr as changed
     */
    .on('change', "".concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " input, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " select, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " textarea"), _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["markChangedTr"]).on('input', "".concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " input, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " select, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " textarea"), _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["markChangedTr"]);
  });
})
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Change row index
 */
.on('input', '.asset_id', _handlers_changeRowIndex__WEBPACK_IMPORTED_MODULE_1__["changeRowIndex"])
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.dye-save-page').click(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/fingerprint-form/handlers/saveFingerprint.js":
/*!**************************************************************!*\
  !*** ./modules/fingerprint-form/handlers/saveFingerprint.js ***!
  \**************************************************************/
/*! exports provided: saveFingerprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFingerprint", function() { return saveFingerprint; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");


function saveFingerprint(e) {
  e.preventDefault();
  var WebGLFingerPrint = {
    $defaultVars: [],
    FindFingerPrint: function FindFingerPrint() {
      var options = {
        excludes: {
          availableScreenResolution: true,
          enumerateDevices: true,
          doNotTrack: true // userAgent: true,
          // language: true,
          // audio: true,
          // fonts: true,
          // webdriver: true,
          // sessionStorage: true,
          // localStorage: true,
          // indexedDb: true,
          // plugins: true,
          // adBlock: true,
          // fontsFlash: true,
          // openDatabase: true,
          // canvas: true,
          // webgl: true,
          // deviceMemory: true,

        }
      };
      var fingerprint;

      var fingerPrintHandler = function fingerPrintHandler(components) {
        try {
          var values = components.map(function (component) {
            // console.log(component);
            return component.key + ': ' + component.value;
          });
          fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
          sendPromise(fingerprint, values); // console.log("JS1 finger print " + fingerprint);
        } catch (e) {// console.log("JS2 finger error ");
        }
      };

      if (window.requestIdleCallback) {
        requestIdleCallback(function () {
          Fingerprint2.get(options, fingerPrintHandler);
        });
      } else {
        setTimeout(function () {
          Fingerprint2.get(options, fingerPrintHandler);
        }, 0); //was time out 500
      } // console.log("JS3 finger print wait " + fingerprint);

    }
  };
  WebGLFingerPrint.FindFingerPrint();
  return false;
}

function sendPromise(fingerprint, values) {
  var comment = $('#comment').val();
  var name = $('#name').val();

  if (name.length && fingerprint.length) {
    console.log({
      name: name,
      comment: comment,
      fingerprint: fingerprint,
      values: values
    });
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($('#fingerprint').attr('action')).method('POST').data({
      name: name,
      comment: comment,
      fingerprint: fingerprint,
      values: values
    }).success(function (response) {
      // console.log(response);
      if (response.type === 'success') {
        $('#fingerprint').hide();
        Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__["default"])('Fingerprint saved');
      } else {}
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/fingerprint-form/module.js":
/*!********************************************!*\
  !*** ./modules/fingerprint-form/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveFingerprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveFingerprint */ "./modules/fingerprint-form/handlers/saveFingerprint.js");

$(document)
/**
 * Set cursor to parent node
 */
.on('mouseenter', 'td', function () {
  if ($(this).find('.hidden-wrapper').length) {
    $(this).css('cursor', 'pointer');
  }
})
/**
 * Open deploy info
 */
.on('click', 'td', function () {
  var wrapper = $(this).find('.hidden-wrapper');

  if (wrapper && wrapper.hasClass('open')) {
    if (!window.getSelection().toString().length) {
      wrapper.removeClass('open');
    } else {
      document.execCommand("copy");
    }
  } else {
    wrapper.addClass('open');
  }
})
/**
 * Form submit
 */
.on('submit', '#fingerprint', _handlers_saveFingerprint__WEBPACK_IMPORTED_MODULE_0__["saveFingerprint"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/fingerprint/handlers/saveFingerprint.js":
/*!*********************************************************!*\
  !*** ./modules/fingerprint/handlers/saveFingerprint.js ***!
  \*********************************************************/
/*! exports provided: saveFingerprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFingerprint", function() { return saveFingerprint; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");


function saveFingerprint(e) {
  e.preventDefault();
  var WebGLFingerPrint = {
    $defaultVars: [],
    FindFingerPrint: function FindFingerPrint() {
      var options = {
        excludes: {
          availableScreenResolution: true,
          enumerateDevices: true,
          doNotTrack: true // userAgent: true,
          // language: true,
          // audio: true,
          // fonts: true,
          // webdriver: true,
          // sessionStorage: true,
          // localStorage: true,
          // indexedDb: true,
          // plugins: true,
          // adBlock: true,
          // fontsFlash: true,
          // openDatabase: true,
          // canvas: true,
          // webgl: true,
          // deviceMemory: true,

        }
      };
      var fingerprint;

      var fingerPrintHandler = function fingerPrintHandler(components) {
        try {
          var values = components.map(function (component) {
            // console.log(component);
            return component.key + ': ' + component.value;
          });
          fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
          sendPromise(fingerprint, values); // console.log("JS1 finger print " + fingerprint);
        } catch (e) {// console.log("JS2 finger error ");
        }
      };

      if (window.requestIdleCallback) {
        requestIdleCallback(function () {
          Fingerprint2.get(options, fingerPrintHandler);
        });
      } else {
        setTimeout(function () {
          Fingerprint2.get(options, fingerPrintHandler);
        }, 0); //was time out 500
      } // console.log("JS3 finger print wait " + fingerprint);

    }
  };
  WebGLFingerPrint.FindFingerPrint();
  return false;
}

function sendPromise(fingerprint, values) {
  var comment = $('#comment').val();
  var name = $('#name').val();

  if (name.length && fingerprint.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($('#fingerprint').attr('action')).method('POST').data({
      name: name,
      comment: comment,
      fingerprint: fingerprint,
      values: values
    }).success(function (response) {
      if (response.type === 'success') {
        window.location.reload();
      }
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/fingerprint/module.js":
/*!***************************************!*\
  !*** ./modules/fingerprint/module.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveFingerprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveFingerprint */ "./modules/fingerprint/handlers/saveFingerprint.js");

$(document)
/**
 * Set cursor to parent node
 */
.on('mouseenter', 'td', function () {
  if ($(this).find('.hidden-wrapper').length) {
    $(this).css('cursor', 'pointer');
  }
})
/**
 * Open deploy info
 */
.on('click', 'td', function () {
  var wrapper = $(this).find('.hidden-wrapper');

  if (wrapper && wrapper.hasClass('open')) {
    if (!window.getSelection().toString().length) {
      wrapper.removeClass('open');
    } else {
      document.execCommand("copy");
    }
  } else {
    wrapper.addClass('open');
  }
})
/**
 * Form submit
 */
.on('submit', '#fingerprint', _handlers_saveFingerprint__WEBPACK_IMPORTED_MODULE_0__["saveFingerprint"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/constants.js":
/*!****************************************!*\
  !*** ./modules/gift-wrap/constants.js ***!
  \****************************************/
/*! exports provided: GIFT_WRAP_ROW_ADDED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIFT_WRAP_ROW_ADDED", function() { return GIFT_WRAP_ROW_ADDED; });
var GIFT_WRAP_ROW_ADDED = 'GIFT_WRAP_ROW_ADDED';

/***/ }),

/***/ "./modules/gift-wrap/handlers/assetChanged.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/assetChanged.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");

/**
 * Asset ID changed
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentInput = $(this);
  var assetID = currentInput.val();
  var parent = currentInput.closest('tr');
  /**
   * Check duplicated assets ids
   */

  var currentAssetDuplicate = $('#gift-wraps-container').find('.asset-id').filter(function (_, item) {
    return assetID === item.value;
  });

  if (currentAssetDuplicate.length > 1) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])({
      'message': 'Duplicate asset ' + assetID
    });
    return false;
  }
  /**
   * Update inputs names
   */


  parent.find('input').each(function () {
    this.name = this.name.replace(/\[[\d]+\]/g, "[".concat(assetID, "]"));
  });
  /**
   * Update href of the delete button
   */

  parent.find('.ajax-confirm-action-custom').each(function () {
    this.href = this.href.replace(/\/[\d]+$/g, "/".concat(assetID));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/fastSavePage.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/fastSavePage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var _helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/positionUpdate */ "./modules/gift-wrap/helpers/positionUpdate.js");



/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  try {
    var assets = {};
    $('#gift-wraps-container').find('.asset-id').each(function () {
      if (assets[this.value] === true) {
        throw new Error(this.value);
      }

      if (this.value.length) {
        assets[this.value] = true;
      }
    });
  } catch (err) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])({
      'message': 'Duplicate asset ' + err.message
    });
    return false;
  }
  /**
   * Position update
   */


  Object(_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this)(e);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/removeRow.js":
/*!*************************************************!*\
  !*** ./modules/gift-wrap/handlers/removeRow.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var handlers_confirmModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlers/confirmModal */ "./handlers/confirmModal.js");

/**
 * Remove embeded element
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var buttonUrl = this.href.split('/');
  var parent = $(this).closest('tr');
  e.preventDefault();

  if (parseInt(buttonUrl[buttonUrl.length - 1]) === 0) {
    parent.remove();
    return false;
  }

  handlers_confirmModal__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this)(e);
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/sortableInit.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/sortableInit.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_gift_wrap_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/gift-wrap/helpers/positionUpdate */ "./modules/gift-wrap/helpers/positionUpdate.js");


/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  new sortablejs__WEBPACK_IMPORTED_MODULE_0___default.a(_this, {
    removeCloneOnHide: true,
    onEnd: function onEnd() {
      Object(modules_gift_wrap_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  });
});

/***/ }),

/***/ "./modules/gift-wrap/helpers/positionUpdate.js":
/*!*****************************************************!*\
  !*** ./modules/gift-wrap/helpers/positionUpdate.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Position update
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.position').each(function (index) {
    var position = $(this);

    if (parseInt(position.val()) !== index) {
      position.val(index);
      position.change();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/listeners/addRow.js":
/*!***********************************************!*\
  !*** ./modules/gift-wrap/listeners/addRow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/gift-wrap/constants.js");


/**
 * Add new row to grid
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["GIFT_WRAP_ROW_ADDED"], function (data) {
    $('#gift-wrap-' + data.embedBlockId).find('.datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/module.js":
/*!*************************************!*\
  !*** ./modules/gift-wrap/module.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_sortableInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/sortableInit */ "./modules/gift-wrap/handlers/sortableInit.js");
/* harmony import */ var _handlers_assetChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/assetChanged */ "./modules/gift-wrap/handlers/assetChanged.js");
/* harmony import */ var _listeners_addRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/addRow */ "./modules/gift-wrap/listeners/addRow.js");
/* harmony import */ var _handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/fastSavePage */ "./modules/gift-wrap/handlers/fastSavePage.js");
/* harmony import */ var _handlers_removeRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/removeRow */ "./modules/gift-wrap/handlers/removeRow.js");





$(document)
/**
 * Change asset id in input
 */
.on('change', '.asset-id', _handlers_assetChanged__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Remove row
 */
.on('click', '.ajax-confirm-action-custom', _handlers_removeRow__WEBPACK_IMPORTED_MODULE_4__["default"]);
/**
 * Add row listener
 */

Object(_listeners_addRow__WEBPACK_IMPORTED_MODULE_2__["default"])();
/**
 * Sortable init
 */

$('.sortable').each(_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_0__["default"]);
/**
 * Save all page
 */

$('.fast-save-page-custom').click(_handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-edit/handlers/adminStore.js":
/*!***************************************************!*\
  !*** ./modules/group-edit/handlers/adminStore.js ***!
  \***************************************************/
/*! exports provided: adminStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminStore", function() { return adminStore; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Store User
 *
 * @returns {boolean}
 */

function adminStore() {
  var selected_id = $('#sender_list').find('[name="user_sender"]:checked').closest('tr').data('uid');

  if (!selected_id) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to find!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data({
      uid: selected_id
    }).success(function (response) {
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
      location.reload();
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-edit/handlers/changeTab.js":
/*!**************************************************!*\
  !*** ./modules/group-edit/handlers/changeTab.js ***!
  \**************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-edit/handlers/findUser.js":
/*!*************************************************!*\
  !*** ./modules/group-edit/handlers/findUser.js ***!
  \*************************************************/
/*! exports provided: findUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUser", function() { return findUser; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Find User
 *
 * @returns {boolean}
 */

function findUser() {
  var data = {
    uid: $('#sender').val(),
    name: $('#sender_name').val()
  };
  var user_template = $('#user_template').html();
  var insert_block = $('#sender_list');

  if (!data.uid.length && !data.name.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to find!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      insert_block.html('');
      $(response.users).each(function (index, item) {
        insert_block.closest('table').css('display', 'inline-table');
        insert_block.append(user_template.replace(/%user_id%/g, item.id).replace('%avatar%', item.avatar).replace('%pet_name%', item.pet).replace('%user_name%', item.first_name + ' ' + item.last_name).replace('%level%', item.xp));
      });
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-edit/handlers/setMain.js":
/*!************************************************!*\
  !*** ./modules/group-edit/handlers/setMain.js ***!
  \************************************************/
/*! exports provided: setMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMain", function() { return setMain; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Change main admin
 *
 * @returns {boolean}
 */

function setMain(e) {
  e.preventDefault();
  var is_main = $('#group-users').find('input[type="radio"]:checked').data('id');

  if (!is_main) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data({
      main_id: is_main
    }).success(function (response) {
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-edit/module.js":
/*!**************************************!*\
  !*** ./modules/group-edit/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/group-edit/handlers/changeTab.js");
/* harmony import */ var modules_group_edit_handlers_findUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/group-edit/handlers/findUser */ "./modules/group-edit/handlers/findUser.js");
/* harmony import */ var modules_group_edit_handlers_adminStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/group-edit/handlers/adminStore */ "./modules/group-edit/handlers/adminStore.js");
/* harmony import */ var modules_group_edit_handlers_setMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/group-edit/handlers/setMain */ "./modules/group-edit/handlers/setMain.js");




$(document)
/**
 * Find user
 */
.on('click', '#find_sender, #find_receiver', modules_group_edit_handlers_findUser__WEBPACK_IMPORTED_MODULE_1__["findUser"])
/**
 * Mark selected row
 */
.on('click', '.table tr', function () {
  $(this).find('input[type="radio"]').prop("checked", true);
  $('#sender_uid').val($(this).data('uid'));
})
/**
 * Store user to group
 */
.on('click', '#store', modules_group_edit_handlers_adminStore__WEBPACK_IMPORTED_MODULE_2__["adminStore"])
/**
 * Change main admin
 */
.on('click', '.update-row', modules_group_edit_handlers_setMain__WEBPACK_IMPORTED_MODULE_3__["setMain"])
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-event/handlers/addNewRow.js":
/*!***************************************************!*\
  !*** ./modules/group-event/handlers/addNewRow.js ***!
  \***************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the dye config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('tbody.group-event-save-container');
  var lastIDS = [];
  var incrementId = 1;
  tbody.find("tr").each(function (n, item) {
    lastIDS.push($(item).data('id'));
  });

  if (lastIDS.length) {
    incrementId = Math.max.apply(Math, lastIDS) + 1 || 1;
  }

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#template').html().replace(/%id%/g, i + incrementId);
    tbody.prepend(trLast);
    $('.date-field').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-event/handlers/changeTab.js":
/*!***************************************************!*\
  !*** ./modules/group-event/handlers/changeTab.js ***!
  \***************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-event/handlers/saveState.js":
/*!***************************************************!*\
  !*** ./modules/group-event/handlers/saveState.js ***!
  \***************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.group-event-save-container');
  var data = container.find(".changed input, .changed textarea");
  var formItems = container.find(".changed");

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      formItems.removeClass('changed');
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      setTimeout(function () {
        location.reload();
      }, 500);
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-event/module.js":
/*!***************************************!*\
  !*** ./modules/group-event/module.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/group-event/handlers/changeTab.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/group-event/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/group-event/handlers/saveState.js");



$(document).ready(function () {
  $(".date-field").datetimepicker({
    format: 'yyyy-mm-dd hh:ii:ss',
    autoclose: true,
    minView: '2'
  });
})
/**
 * Add next rows to the grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Change url on tab change
 */
.on('click', '.nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark the row as changed
 */
.on('change keyup paste', 'textarea', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark the row as changed
 */
.on('change', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
})
/**
 * Save state
 */
.on('click', '.save-page', _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__["saveState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group/handlers/changeTab.js":
/*!*********************************************!*\
  !*** ./modules/group/handlers/changeTab.js ***!
  \*********************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group/module.js":
/*!*********************************!*\
  !*** ./modules/group/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/group/handlers/changeTab.js");

$(document)
/**
 * Copy ids
 */
.on('click', '.copy', function () {
  $('#' + $(this).data('target')).select();
  document.execCommand("copy");
})
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/levels/handlers/addNewRow.js":
/*!**********************************************!*\
  !*** ./modules/levels/handlers/addNewRow.js ***!
  \**********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the levels config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#levels > tbody');

  for (var i = 0; i < add_counter; i++) {
    var lastID = tbody.find("tr").last().find('input[name="id"]').val();
    var incrementId = parseInt(lastID) || 0;
    var trLast = $('#level_template').html().replace(/%level_id%/g, ++incrementId);
    tbody.append(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/levels/handlers/saveLevelState.js":
/*!***************************************************!*\
  !*** ./modules/levels/handlers/saveLevelState.js ***!
  \***************************************************/
/*! exports provided: saveLevelState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLevelState", function() { return saveLevelState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the levels config grid
 *
 * @returns {boolean}
 */

function saveLevelState() {
  var rowToSave = $(this).parents('tr');
  var row = rowToSave.find(".editable select, .editable input").serializeArray();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](rowToSave.data('action')).method('PUT').data(row).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/levels/module.js":
/*!**********************************!*\
  !*** ./modules/levels/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveLevelState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveLevelState */ "./modules/levels/handlers/saveLevelState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/levels/handlers/addNewRow.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");






$(document)
/**
 * Create award and save level
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  var saveButton = $(this).closest('tr').find('.update-row');
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_2__["default"].bind(_this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_CREATE"], function (data, self) {
    saveButton.click();
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  var saveButton = $(this).closest('tr').find('.update-row');
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_3__["default"].bind(_this, saveButton)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_DELETE"], function (data, self) {
    saveButton.click();
  });
})
/**
 * Add next rows to the levels grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveLevelState__WEBPACK_IMPORTED_MODULE_0__["saveLevelState"])
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/linked-assets/handlers/showAsset.js":
/*!*****************************************************!*\
  !*** ./modules/linked-assets/handlers/showAsset.js ***!
  \*****************************************************/
/*! exports provided: showAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAsset", function() { return showAsset; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Handler for show asset
 */

function showAsset(e) {
  e.preventDefault();
  var currentElement = $(this);
  var action = SWOW_ASSET_ROUTE + '?id=' + currentElement.val();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    console.log(response);

    if (response.hasOwnProperty('data')) {
      if (response.data.hasOwnProperty('name')) {
        currentElement.parents('tr').find('.asset-name').html(response.data.name);
      }

      if (response.data.hasOwnProperty('preview_url')) {
        currentElement.parents('tr').find('.asset-preview img').attr('src', response.data.preview_url);
        currentElement.parents('tr').find('.asset-preview .list-thumbnail').data('full', response.data.preview_url);
      }
    }
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/linked-assets/module.js":
/*!*****************************************!*\
  !*** ./modules/linked-assets/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showAsset */ "./modules/linked-assets/handlers/showAsset.js");

$(document)
/**
 * Show asset
 */
.on('change', '.asset', _handlers_showAsset__WEBPACK_IMPORTED_MODULE_0__["showAsset"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/addNewRow.js":
/*!****************************************************!*\
  !*** ./modules/localization/handlers/addNewRow.js ***!
  \****************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the localization config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var tbody = $('#localizations > tbody');
  var template = $('#localization_template').html();
  tbody.append(template);
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/removeRow.js":
/*!****************************************************!*\
  !*** ./modules/localization/handlers/removeRow.js ***!
  \****************************************************/
/*! exports provided: removeRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRow", function() { return removeRow; });
/**
 * Remove not saved row
 *
 * @returns {boolean}
 */
function removeRow(e) {
  e.preventDefault();
  $(this).parents('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/saveLocalizationState.js":
/*!****************************************************************!*\
  !*** ./modules/localization/handlers/saveLocalizationState.js ***!
  \****************************************************************/
/*! exports provided: saveLocalizationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLocalizationState", function() { return saveLocalizationState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");



/**
 * Update row to the localization config grid
 *
 * @returns {boolean}
 */

function saveLocalizationState(e) {
  e.preventDefault();
  var currentBtn = $(this);
  var parent = currentBtn.closest('tr');
  var currentKey = parent.find('.localization-key').val();
  /**
   * Check duplicated keys
   *
   * @type {jQuery}
   */

  var currentKeyDuplicate = $('#localizations').find('.localization-key').filter(function (_, item) {
    return currentKey === item.value;
  });

  if (currentKeyDuplicate.length > 1) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__["default"])({
      'message': 'Duplicate key ' + currentKey
    });
    return false;
  }

  var data = parent.find('.editable input').serializeArray();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).success(function (response) {
    parent.find('.localization-key').attr('readonly', true);
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/module.js":
/*!****************************************!*\
  !*** ./modules/localization/module.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveLocalizationState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveLocalizationState */ "./modules/localization/handlers/saveLocalizationState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/localization/handlers/addNewRow.js");
/* harmony import */ var _handlers_removeRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/removeRow */ "./modules/localization/handlers/removeRow.js");



$(document)
/**
 * Add next rows to the localizations grid
 */
.on('click', '.create-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveLocalizationState__WEBPACK_IMPORTED_MODULE_0__["saveLocalizationState"])
/**
 * Remove the row
 */
.on('click', '.remove-row', _handlers_removeRow__WEBPACK_IMPORTED_MODULE_2__["removeRow"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/handlers/addNewRow.js":
/*!*********************************************!*\
  !*** ./modules/magic/handlers/addNewRow.js ***!
  \*********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the magic config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#magic > tbody');

  for (var i = 0; i < add_counter; i++) {
    var lastID = tbody.find("tr").last().find('input[name="id"]').val();
    var incrementId = parseInt(lastID) || 0;
    var trLast = $('#magic_template').html().replace(/%magic_id%/g, ++incrementId);
    tbody.append(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/handlers/saveMagicState.js":
/*!**************************************************!*\
  !*** ./modules/magic/handlers/saveMagicState.js ***!
  \**************************************************/
/*! exports provided: saveMagicState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMagicState", function() { return saveMagicState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the magic config grid
 *
 * @returns {boolean}
 */

function saveMagicState() {
  var data = $('.magic-save-container').find(".changed input");
  data.each(function (n, item) {
    $(item).attr('readonly', true);
  });

  if (data.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/module.js":
/*!*********************************!*\
  !*** ./modules/magic/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveMagicState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveMagicState */ "./modules/magic/handlers/saveMagicState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/magic/handlers/addNewRow.js");


$(document)
/**
 * Add next rows to the magic grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveMagicState__WEBPACK_IMPORTED_MODULE_0__["saveMagicState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js":
/*!*****************************************************************!*\
  !*** ./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Show last makeup kit ID
 *
 * @param e
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).success(function (result) {
    $('#last-makeup-kit-id').val(result.makeup_kit_id);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit-asset/module.js":
/*!********************************************!*\
  !*** ./modules/makeup-kit-asset/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_getLastMakeupKitID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/getLastMakeupKitID */ "./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js");

/**
 * Show last makeup kit ID at the body parts grid
 */

$('#get-last-makeup-kit-id').click(_handlers_getLastMakeupKitID__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit/constants.js":
/*!*****************************************!*\
  !*** ./modules/makeup-kit/constants.js ***!
  \*****************************************/
/*! exports provided: MAKEUP_KIT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKEUP_KIT_SHOW_FORM", function() { return MAKEUP_KIT_SHOW_FORM; });
var MAKEUP_KIT_SHOW_FORM = 'MAKEUP_KIT_SHOW_FORM';

/***/ }),

/***/ "./modules/makeup-kit/module.js":
/*!**************************************!*\
  !*** ./modules/makeup-kit/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var modules_makeup_kit_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/makeup-kit/constants */ "./modules/makeup-kit/constants.js");


/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(modules_makeup_kit_constants__WEBPACK_IMPORTED_MODULE_1__["MAKEUP_KIT_SHOW_FORM"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/handlers/addNewRow.js":
/*!********************************************************!*\
  !*** ./modules/meal-ingredients/handlers/addNewRow.js ***!
  \********************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the ingredient config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#meal_ingredients > tbody');
  var trLast = $('#meal_ingredients_template').html();
  var lastID = tbody.find("tr").last().find('.ingredient_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal-ingredient%/g, i + incrementId));
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/handlers/ingredientDelete.js":
/*!***************************************************************!*\
  !*** ./modules/meal-ingredients/handlers/ingredientDelete.js ***!
  \***************************************************************/
/*! exports provided: ingredientDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingredientDelete", function() { return ingredientDelete; });
/**
 * Hide row
 *
 * @returns {boolean}
 */
function ingredientDelete() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/handlers/savePage.js":
/*!*******************************************************!*\
  !*** ./modules/meal-ingredients/handlers/savePage.js ***!
  \*******************************************************/
/*! exports provided: saveMealIngredientsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMealIngredientsState", function() { return saveMealIngredientsState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the Meal Ingredients config grid
 *
 * @returns {boolean}
 */

function saveMealIngredientsState() {
  var route = $(this).data('route');
  var data = $('.meal-ingredients-save-page-container').find(".changed input");
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/module.js":
/*!********************************************!*\
  !*** ./modules/meal-ingredients/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal-ingredients/handlers/addNewRow.js");
/* harmony import */ var _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/ingredientDelete */ "./modules/meal-ingredients/handlers/ingredientDelete.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/meal-ingredients/handlers/savePage.js");



$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__["ingredientDelete"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * How many rows to add
 * Change counter
                 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["saveMealIngredientsState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/addNewRow.js":
/*!********************************************!*\
  !*** ./modules/meal/handlers/addNewRow.js ***!
  \********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the meal config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#meal > tbody');
  var trLast = $('#meal_template').html();
  var lastID = tbody.find("tr").last().find('.meal_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal%/g, i + incrementId));
    tbody.find('.select2').select2();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/mealDelete.js":
/*!*********************************************!*\
  !*** ./modules/meal/handlers/mealDelete.js ***!
  \*********************************************/
/*! exports provided: mealDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mealDelete", function() { return mealDelete; });
/**
 * Hide row
 *
 * @returns {boolean}
 */
function mealDelete() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/savePage.js":
/*!*******************************************!*\
  !*** ./modules/meal/handlers/savePage.js ***!
  \*******************************************/
/*! exports provided: saveMealState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMealState", function() { return saveMealState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");


/**
 * Update row to the Meal config grid
 *
 * @returns {boolean}
 */

function saveMealState() {
  var route = $(this).data('route');
  var tbody = $('.meal-save-page-container').find(".changed");
  var data = $('.meal-save-page-container').find(".changed input, .changed select").serializeArray();

  if (data.length === 0) {
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).send();
  tbody.each(function (n, item) {
    $(item).removeClass('changed');
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/module.js":
/*!********************************!*\
  !*** ./modules/meal/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal/handlers/addNewRow.js");
/* harmony import */ var _handlers_mealDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/mealDelete */ "./modules/meal/handlers/mealDelete.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/meal/handlers/savePage.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");







$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_mealDelete__WEBPACK_IMPORTED_MODULE_1__["mealDelete"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Create award and save meal
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_6__["default"].bind(_this)();
  $(this).closest('tr').addClass('changed');
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_3__["AWARD_CREATE"], function (data, self) {
    Object(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["saveMealState"])();
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  var saveButton = $('.save-page');
  $(this).closest('tr').addClass('changed');
  $(this).closest('tr').find('input[name="award_id"]').val(0);
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_5__["default"].bind(_this, saveButton)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_3__["AWARD_DELETE"], function (data, self) {
    saveButton.click();
  });
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["saveMealState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/constants.js":
/*!************************************************!*\
  !*** ./modules/neighbor-activity/constants.js ***!
  \************************************************/
/*! exports provided: NEIGHBOR_ACTIVITY_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEIGHBOR_ACTIVITY_SHOW_FORM", function() { return NEIGHBOR_ACTIVITY_SHOW_FORM; });
var NEIGHBOR_ACTIVITY_SHOW_FORM = 'NEIGHBOR_ACTIVITY_SHOW_FORM';

/***/ }),

/***/ "./modules/neighbor-activity/handlers/changeType.js":
/*!**********************************************************!*\
  !*** ./modules/neighbor-activity/handlers/changeType.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var TRASH = 'TRASH';
var TRASH_FIELDS_ID = 'trash-fields';
var SELECT_ID = 'neighbor-activity-type-id';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var select = document.getElementById(SELECT_ID);

  if (!select || select.selectedIndex === -1) {
    return false;
  }

  if (select.options.length && select.options[select.selectedIndex]) {
    var selectedElement = select.options[select.selectedIndex];
    var trashFields = $('#' + TRASH_FIELDS_ID);

    switch (selectedElement.text.toUpperCase()) {
      case TRASH:
        trashFields.removeClass('hide');
        break;

      default:
        trashFields.addClass('hide');
    }
  }

  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/listeners/showForm.js":
/*!*********************************************************!*\
  !*** ./modules/neighbor-activity/listeners/showForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/neighbor-activity/constants.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/changeType */ "./modules/neighbor-activity/handlers/changeType.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_ACTIVITY_SHOW_FORM"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_ACTIVITY_SHOW_FORM"], self);
    Object(_handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"])();
    $('.neighbor-activity-form .datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/module.js":
/*!*********************************************!*\
  !*** ./modules/neighbor-activity/module.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/neighbor-activity/handlers/changeType.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/neighbor-activity/listeners/showForm.js");




$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]).on('change', '.neighbor-activity-type', _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"]);
/**
 * Run the show form handler.
 * After click at create or edit button
 */

$('.show-form').click(_listeners_showForm__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-asset/handlers/assetTab.js":
/*!************************************************!*\
  !*** ./modules/nla-asset/handlers/assetTab.js ***!
  \************************************************/
/*! exports provided: assetTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assetTab", function() { return assetTab; });
/**
 * Handler for change tab
 */
function assetTab(e) {
  var currentElement = $(this).find('a');
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?activeTab=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-asset/handlers/changeTab.js":
/*!*************************************************!*\
  !*** ./modules/nla-asset/handlers/changeTab.js ***!
  \*************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-asset/handlers/saveState.js":
/*!*************************************************!*\
  !*** ./modules/nla-asset/handlers/saveState.js ***!
  \*************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the grid
 *
 * @returns {boolean}
 */

function saveState() {
  var category = $('[name="category"]').val();
  var asset_ids = $('[name="assets_ids"]');

  if (!asset_ids.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]('nla-assign').method('POST').data({
      asset_ids: asset_ids.val(),
      category: category
    }).success(function (response) {
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      asset_ids.val('');
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-asset/handlers/updateList.js":
/*!**************************************************!*\
  !*** ./modules/nla-asset/handlers/updateList.js ***!
  \**************************************************/
/*! exports provided: updateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateList", function() { return updateList; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the grid
 *
 * @returns {boolean}
 */

function updateList() {
  var assetIds = [];
  var category = $('[name="category"]').val();
  var asignList = $('tbody,container').find(':checkbox:checked');
  asignList.each(function (i, assetId) {
    assetIds.push($(assetId).data('asset'));
  });

  if (!assetIds.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    console.log($(this));
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data({
      asset_ids: assetIds,
      category: category
    }).success(function (response) {
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      asignList.prop("checked", false);
      location.reload();
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-asset/module.js":
/*!*************************************!*\
  !*** ./modules/nla-asset/module.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_assetTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/assetTab */ "./modules/nla-asset/handlers/assetTab.js");
/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/nla-asset/handlers/changeTab.js");
/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/nla-asset/handlers/saveState.js");
/* harmony import */ var _handlers_updateList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/updateList */ "./modules/nla-asset/handlers/updateList.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






$(document)
/**
 * Change url on tab change
 */
.on('click', '.nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__["changeTab"])
/**
 * Change url on tab change
 */
.on('click', '.asset-tab', _handlers_assetTab__WEBPACK_IMPORTED_MODULE_0__["assetTab"])
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Save state
 */
.on('click', '.update-assign', _handlers_updateList__WEBPACK_IMPORTED_MODULE_3__["updateList"]).on('click', '.ajax-submit-action', function () {
  $(this).append('<i class="fa fa-spinner fa-spin"></i>');
})
/**
 * Update nla list category
 */
.on('click', '.asset-assign', _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__["saveState"])
/**
 * NLA qty
 */
.on('change', '#qty', function () {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]('change-per-page').method('POST').data({
    record_per_page: $(this).val()
  }).success(function (response) {
    var _location$href$split = location.href.split('?'),
        _location$href$split2 = _slicedToArray(_location$href$split, 2),
        head = _location$href$split2[0],
        tail = _location$href$split2[1];

    location.href = head + '?' + tail.replace(new RegExp("page=[^&]*|page=[^&]*&"), '');
  }).send();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-category/handlers/addNewRow.js":
/*!****************************************************!*\
  !*** ./modules/nla-category/handlers/addNewRow.js ***!
  \****************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the dye config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('tbody.container');
  var lastIDS = [];
  var incrementId = 1;
  tbody.find("tr").each(function (n, item) {
    if ($(item).data('id')) {
      lastIDS.push($(item).data('id'));
    }
  });

  if (lastIDS.length) {
    incrementId = Math.max.apply(Math, lastIDS) + 1 || 1;
  }

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#template').html().replace(/%id%/g, i + incrementId);
    tbody.prepend(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-category/handlers/changeTab.js":
/*!****************************************************!*\
  !*** ./modules/nla-category/handlers/changeTab.js ***!
  \****************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-category/handlers/saveState.js":
/*!****************************************************!*\
  !*** ./modules/nla-category/handlers/saveState.js ***!
  \****************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.container');
  var data = container.find(".changed input, .changed select");
  var formItems = container.find(".changed");

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      formItems.removeClass('changed');
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      setTimeout(function () {
        location.reload();
      }, 500);
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-category/module.js":
/*!****************************************!*\
  !*** ./modules/nla-category/module.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/nla-category/handlers/changeTab.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/nla-category/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/nla-category/handlers/saveState.js");



$(document)
/**
 * Add next rows to the grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Change url on tab change
 */
.on('click', '.nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
})
/**
 * Save state
 */
.on('click', '.save-page', _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__["saveState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-section/handlers/addNewRow.js":
/*!***************************************************!*\
  !*** ./modules/nla-section/handlers/addNewRow.js ***!
  \***************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the dye config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('tbody.container');
  var lastIDS = [];
  var incrementId = 1;
  tbody.find("tr").each(function (n, item) {
    if ($(item).data('id')) {
      lastIDS.push($(item).data('id'));
    }
  });

  if (lastIDS.length) {
    incrementId = Math.max.apply(Math, lastIDS) + 1 || 1;
  }

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#template').html().replace(/%id%/g, i + incrementId);
    tbody.prepend(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-section/handlers/changeTab.js":
/*!***************************************************!*\
  !*** ./modules/nla-section/handlers/changeTab.js ***!
  \***************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-section/handlers/saveState.js":
/*!***************************************************!*\
  !*** ./modules/nla-section/handlers/saveState.js ***!
  \***************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.container');
  var data = container.find(".changed input");
  var formItems = container.find(".changed");

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      formItems.removeClass('changed');
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      setTimeout(function () {
        location.reload();
      }, 500);
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-section/module.js":
/*!***************************************!*\
  !*** ./modules/nla-section/module.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/nla-section/handlers/changeTab.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/nla-section/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/nla-section/handlers/saveState.js");



$(document)
/**
 * Add next rows to the grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Change url on tab change
 */
.on('click', '.nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
})
/**
 * Save state
 */
.on('click', '.save-page', _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__["saveState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/product/constants.js":
/*!**************************************!*\
  !*** ./modules/product/constants.js ***!
  \**************************************/
/*! exports provided: PRODUCT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SHOW_FORM", function() { return PRODUCT_SHOW_FORM; });
var PRODUCT_SHOW_FORM = 'PRODUCT_SHOW_FORM';

/***/ }),

/***/ "./modules/product/handlers/priceInit.js":
/*!***********************************************!*\
  !*** ./modules/product/handlers/priceInit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ "../../../node_modules/cleave.js/dist/cleave.js");
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cleave_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Price init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new cleave_js__WEBPACK_IMPORTED_MODULE_0___default.a(this, {
    numeral: true,
    prefix: '$ ',
    rawValueTrimPrefix: true,
    onValueChanged: function onValueChanged(e) {
      var value = parseInt(parseFloat(e.target.rawValue) * 100);
      var productPrice = $(this.element).closest('td').find('.product-price');

      if (value !== parseInt(productPrice.val())) {
        productPrice.val(value).change();
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/product/module.js":
/*!***********************************!*\
  !*** ./modules/product/module.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var modules_product_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/product/constants */ "./modules/product/constants.js");
/* harmony import */ var modules_product_handlers_priceInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/product/handlers/priceInit */ "./modules/product/handlers/priceInit.js");





$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_2__["default"])(modules_product_constants__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_SHOW_FORM"]));
/**
 * Price format
 */

$('.product-price-view').each(modules_product_handlers_priceInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/public/module.js":
/*!**********************************!*\
  !*** ./modules/public/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


$(document)
/**
 * NLA order
 */
.on('change', '#order', function () {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]('change-order').method('POST').data({
    order: $(this).val()
  }).success(function (response) {
    location.reload();
  }).send();
})
/**
 * NLA qty
 */
.on('change', '#qty', function () {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]('change-per-page').method('POST').data({
    record_per_page: $(this).val()
  }).success(function (response) {
    var _location$href$split = location.href.split('?'),
        _location$href$split2 = _slicedToArray(_location$href$split, 2),
        head = _location$href$split2[0],
        tail = _location$href$split2[1];

    location.href = head + '?' + tail.replace(new RegExp("page=[^&]*|page=[^&]*&"), '');
  }).send();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/handlers/dropzoneInit.js":
/*!***************************************************!*\
  !*** ./modules/settings/handlers/dropzoneInit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");



/**
 * Dropzone init
 *
 * @param _
 * @param item
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_, item) {
  var dropzoneContainer = $(item);
  var previewHiddenInput = dropzoneContainer.find('input');
  /**
   * Dropzone initialization
   */

  var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](item).setUploadUrl(dropzoneContainer.data('url')).error(function (file, response) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
    previewHiddenInput.val('');
  }).cancel(function () {
    previewHiddenInput.val('');
  }).success(function (file, response) {
    $('.dz-filename span').text(response.file_name);
    previewHiddenInput.val(response.file_name);
  });
  /**
   * Set preview
   */

  if (!!previewHiddenInput.val()) {
    dropzoneBuilder.setPreview(previewHiddenInput.val(), Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__["default"])(dropzoneContainer.data('folder'), previewHiddenInput.val()));
  }
  /**
   * Dropzone build
   */


  dropzoneBuilder.build();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/module.js":
/*!************************************!*\
  !*** ./modules/settings/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "../../../node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_dropzoneInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/dropzoneInit */ "./modules/settings/handlers/dropzoneInit.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");






/**
 * Turned off the Dropzone auto init
 *
 * @type {boolean}
 */

dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.autoDiscover = false;
/**
 * Dropzone init
 */

$('.dropzone').each(_handlers_dropzoneInit__WEBPACK_IMPORTED_MODULE_1__["default"]);
$(document)
/**
 * Create award and save row
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  var saveButton = $(this).closest('tr').find('.update-row');
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__["default"].bind(_this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_CREATE"], function (data, self) {
    saveButton.click();
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  var saveButton = $(this).closest('tr').find('.update-row');
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_4__["default"].bind(_this, saveButton)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_DELETE"], function (data, self) {
    saveButton.click();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/modules/ai_animation/module.js":
/*!*********************************************************!*\
  !*** ./modules/settings/modules/ai_animation/module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var WALK_CATEGORY = '6';
var RUN_CATEGORY = '7';
$(document).ready(function () {
  var select2 = $('.table').find('.embed-group select.select2');
  var selectVal = 0;
  select2.each(function (n, i) {
    selectVal = $(i).val();

    if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
      $(i).closest('.embed-group').find('.embed-group').find(".row:eq(1)").show();
    } else {
      $(i).closest('.embed-group').find('.embed-group').find(".row:eq(1)").hide();
    }
  });
})
/**
 * Show hide speed on trigger add-embed button
 */
.on('ai_animation', '.add-embed', function () {
  var embed = $(this).closest('.embed-group');
  var selectVal = embed.find('.select2').val();

  if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
    embed.find('.embed-group').find(".row:eq(1)").show();
  } else {
    embed.find('.embed-group').find(".row:eq(1)").hide();
  }
})
/**
 * Show hide speed
 */
.on('.select2').change(function (item) {
  var selectVal = $(item.target).val();

  if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
    $(item.target).closest('.embed-group').find('.embed-group').find(".row:eq(1)").show();
  } else {
    $(item.target).closest('.embed-group').find('.embed-group').find(".row:eq(1)").hide();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/constants.js":
/*!**********************************************!*\
  !*** ./modules/shop-department/constants.js ***!
  \**********************************************/
/*! exports provided: SHOP_DEPARTMENT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_DEPARTMENT_SHOW_FORM", function() { return SHOP_DEPARTMENT_SHOW_FORM; });
var SHOP_DEPARTMENT_SHOW_FORM = 'SHOP_DEPARTMENT_SHOW_FORM';

/***/ }),

/***/ "./modules/shop-department/handlers/addShop.js":
/*!*****************************************************!*\
  !*** ./modules/shop-department/handlers/addShop.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Add a new shop in a departments grid
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var table = currentBtn.closest('.shops-table').find('tbody');
  var departmentId = currentBtn.data('department');
  var counter = parseInt(currentBtn.data('count'));
  var template = $('#shop-template').html().replace(new RegExp('%departmentId%', "g"), departmentId).replace(new RegExp('%index%', "g"), counter++);
  currentBtn.data('count', counter);
  table.append(template);
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/fastSave.js":
/*!******************************************************!*\
  !*** ./modules/shop-department/handlers/fastSave.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");



/**
 * Fast save for shop department
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var dataNamePrefix = 'shop';
  var currentBtn = $(this);
  var fastSaveContainer = currentBtn.closest('.fast-save-container');

  if (!fastSaveContainer.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  var result = {};
  fastSaveContainer.find('tbody tr').each(function (index) {
    var formData = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])($(this));

    for (var i in formData) {
      var itemName = "".concat(dataNamePrefix, "[").concat(index, "][").concat(i, "]");
      result[itemName] = formData[i];
    }
  });
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(result).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/radioInput.js":
/*!********************************************************!*\
  !*** ./modules/shop-department/handlers/radioInput.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Radio input from checkbox
 * Because input[type=radio] did not work correctly
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentItem = $(this);
  var allItems = currentItem.closest('.table').find('.radio');
  allItems.prop('checked', false);
  allItems.removeClass('checked');
  currentItem.prop('checked', true);
  currentItem.addClass('checked');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/sortableInit.js":
/*!**********************************************************!*\
  !*** ./modules/shop-department/handlers/sortableInit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new sortablejs__WEBPACK_IMPORTED_MODULE_0___default.a(this, {
    group: 'shops',
    removeCloneOnHide: true,
    onEnd: function onEnd(e) {
      new Promise(function (resolve) {
        resolve({
          radio: $(e.item).find('.radio'),
          parent: $(e.item).closest('.table')
        });
      }).then(function (data) {
        if (data.parent.find('.radio.checked:gt(0)').length) {
          data.radio.removeClass('checked');
          data.radio.prop('checked', false);
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/listeners/showForm.js":
/*!*******************************************************!*\
  !*** ./modules/shop-department/listeners/showForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/shop-department/constants.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");
/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");





/**
 * Dropzone init after the modal opened
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["SHOP_DEPARTMENT_SHOW_FORM"], function () {
    /**
     * Preview
     */
    dropzoneInit(document.getElementById('dropzone'), document.getElementById('preview-url'));
    /**
     * Preview Small
     */

    dropzoneInit(document.getElementById('dropzone-small'), document.getElementById('preview-url-small'));
  });
});
/**
 * Dropzone Init
 *
 * @param {HTMLElement} dropzoneElement
 * @param {HTMLElement} previewUrlElement
 *
 * @returns {boolean}
 */

function dropzoneInit(dropzoneElement, previewUrlElement) {
  if (!dropzoneElement) {
    return false;
  }
  /**
   * Dropzone initialization
   */


  var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](dropzoneElement).setUploadUrl(dropzoneElement.dataset.url).error(function (file, response) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    $(previewUrlElement).val('');
  }).cancel(function () {
    $(previewUrlElement).val('');
  }).success(function (file, response) {
    $(dropzoneElement).find('.dz-filename span').text(response.file_name);
    previewUrlElement.value = response.file_name;
  });
  /**
   * Set preview
   */

  if (previewUrlElement.value.length) {
    dropzoneBuilder.setPreview(previewUrlElement.value, Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_3__["default"])(dropzoneElement.dataset.folder, previewUrlElement.value));
  }
  /**
   * Dropzone build
   */


  dropzoneBuilder.build();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/module.js":
/*!*******************************************!*\
  !*** ./modules/shop-department/module.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addShop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addShop */ "./modules/shop-department/handlers/addShop.js");
/* harmony import */ var _handlers_fastSave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/fastSave */ "./modules/shop-department/handlers/fastSave.js");
/* harmony import */ var _handlers_radioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/radioInput */ "./modules/shop-department/handlers/radioInput.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/shop-department/listeners/showForm.js");
/* harmony import */ var modules_shop_department_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/shop-department/handlers/sortableInit */ "./modules/shop-department/handlers/sortableInit.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./modules/shop-department/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Dropzone init
 */

Object(_listeners_showForm__WEBPACK_IMPORTED_MODULE_3__["default"])();
$(document)
/**
 * Radio buttons behavior
 */
.on('change', '.radio', _handlers_radioInput__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Document ready
 */
.ready(function () {
  /**
   * Add class to checked radios
   */
  $('.radio[checked]').addClass('checked');
  /**
   * Add a new shop in a departments grid
   */

  $('.add-shop').click(_handlers_addShop__WEBPACK_IMPORTED_MODULE_0__["default"]);
  /**
   * Fast save
   */

  $('.fast-save-shops').click(_handlers_fastSave__WEBPACK_IMPORTED_MODULE_1__["default"]);
  /**
   * Make tr to sortable
   */

  $('.sortable').each(modules_shop_department_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/styles.scss":
/*!*********************************************!*\
  !*** ./modules/shop-department/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/sound/handlers/addNewRow.js":
/*!*********************************************!*\
  !*** ./modules/sound/handlers/addNewRow.js ***!
  \*********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the sound config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#sound > tbody');
  var trLast = $('#sound_template').html();
  var lastID = tbody.find("tr").last().find('.sound_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%sound_id%/g, i + incrementId));
    tbody.find('.select2').select2();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/sound/handlers/saveSoundState.js":
/*!**************************************************!*\
  !*** ./modules/sound/handlers/saveSoundState.js ***!
  \**************************************************/
/*! exports provided: saveSoundState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSoundState", function() { return saveSoundState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the sound config grid
 *
 * @returns {boolean}
 */

function saveSoundState() {
  var data = $('.sound-save-container').find(".changed input, .changed select").serializeArray();

  if (data.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/sound/module.js":
/*!*********************************!*\
  !*** ./modules/sound/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveSoundState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveSoundState */ "./modules/sound/handlers/saveSoundState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/sound/handlers/addNewRow.js");


$(document)
/**
 * Add next rows to the sound grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveSoundState__WEBPACK_IMPORTED_MODULE_0__["saveSoundState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/special-prizes-form/handlers/findUser.js":
/*!**********************************************************!*\
  !*** ./modules/special-prizes-form/handlers/findUser.js ***!
  \**********************************************************/
/*! exports provided: findUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUser", function() { return findUser; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Find User
 *
 * @returns {boolean}
 */

function findUser() {
  var prefix = $(this).data('prefix');
  var data = {
    uid: $('#' + prefix).val(),
    name: $('#' + prefix + '_name').val(),
    prefix: prefix
  };
  var user_template = $('#user_template').html();
  var insert_block = $('#' + prefix + '_list');

  if (!data.uid.length && !data.name.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to find!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      insert_block.html('');
      $(response.users).each(function (index, item) {
        insert_block.closest('table').css('display', 'inline-table');
        insert_block.append(user_template.replace(/%user_id%/g, item.id).replace('%pet_name%', item.pet).replace('%user_name%', item.first_name + ' ' + item.last_name).replace('%level%', item.xp).replace('%avatar%', item.avatar).replace(/%target%/g, prefix));
      });
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/special-prizes-form/handlers/sendGift.js":
/*!**********************************************************!*\
  !*** ./modules/special-prizes-form/handlers/sendGift.js ***!
  \**********************************************************/
/*! exports provided: sendGift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendGift", function() { return sendGift; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");




/**
 * Send Gift
 *
 * @returns {boolean}
 */

function sendGift() {
  $(this).attr('disabled', true);
  setTimeout(function () {
    $('#send').removeAttr('disabled');
  }, 3000);
  var container = $('#send-container');
  var formItems = container.find("input, textarea").serializeArray();

  if (!formItems.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__["default"])('Nothing to send!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(formItems).success(function (response) {
      if (!!response.errors) {
        Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      } else {
        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
        $('.table').hide();
        var message_length = $('#message_length');
        message_length.text(message_length.data('length'));
      }
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/special-prizes-form/module.js":
/*!***********************************************!*\
  !*** ./modules/special-prizes-form/module.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_sendGift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/sendGift */ "./modules/special-prizes-form/handlers/sendGift.js");
/* harmony import */ var _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/findUser */ "./modules/special-prizes-form/handlers/findUser.js");


$(document)
/**
 * Find user
 */
.on('click', '#find_sender, #find_receiver', _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__["findUser"])
/**
 * Save the row
 */
.on('click', '#send', _handlers_sendGift__WEBPACK_IMPORTED_MODULE_0__["sendGift"])
/**
 * Mark selected row
 */
.on('click', '.table tr', function () {
  $(this).find('input[type="radio"]').prop("checked", true);
  $('#' + $(this).data('target') + '_uid').val($(this).data('uid'));
})
/**
 * Change limit counter
 */
.on('input', 'textarea', function () {
  var target = $(this).prop('name').replace('loot_data[', '').replace(']', '') + '_length';
  $('#' + target).text($(this).data('maxlength') - $(this).val().length);
})
/**
 * Mark selected asset
 */
.on('click', '#assets_list img', function () {
  $('#assets_list').find('img').css('border', '');
  $(this).css('border', '2px solid #c1c1c1');
  $('#asset_id').val($(this).data('prize'));
})
/**
 * Remove entered data
 */
.on('click', '#cancel', function () {
  $('.table').hide();
  $(this).closest('table').find('input[type="text"], textarea').val('');
})
/**
 * Redirect
 */
.on('click', '.redirect', function () {
  window.location = $(this).data('route');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/special-prizes/handlers/changeTab.js":
/*!******************************************************!*\
  !*** ./modules/special-prizes/handlers/changeTab.js ***!
  \******************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/special-prizes/module.js":
/*!******************************************!*\
  !*** ./modules/special-prizes/module.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/special-prizes/handlers/changeTab.js");

$(document).ready(function () {
  $(".special-prize-save-container label:contains('Limit')").css('padding', 0).html("Available");
  $('.special-prize-save-container input').attr('readonly', true).attr('disabled', true);
  $('.add-embed, .remove-embed').remove();
})
/**
 * Copy ids
 */
.on('click', '.copy', function () {
  $('#' + $(this).data('target')).select();
  document.execCommand("copy");
})
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/tamatool/constants.js":
/*!***************************************!*\
  !*** ./modules/tamatool/constants.js ***!
  \***************************************/
/*! exports provided: TAMATOOL_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAMATOOL_SHOW_FORM", function() { return TAMATOOL_SHOW_FORM; });
var TAMATOOL_SHOW_FORM = 'TAMATOOL_SHOW_FORM';

/***/ }),

/***/ "./modules/tamatool/listeners/showForm.js":
/*!************************************************!*\
  !*** ./modules/tamatool/listeners/showForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/tamatool/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["TAMATOOL_SHOW_FORM"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["TAMATOOL_SHOW_FORM"], self);
    $('.neighbor-activity-form .datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/tamatool/module.js":
/*!************************************!*\
  !*** ./modules/tamatool/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/tamatool/listeners/showForm.js");



$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * Run the show form handler.
 * After click at create or edit button
 */

$('.show-form').click(_listeners_showForm__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophies/handlers/findUser.js":
/*!***********************************************!*\
  !*** ./modules/trophies/handlers/findUser.js ***!
  \***********************************************/
/*! exports provided: findUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUser", function() { return findUser; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Find User
 *
 * @returns {boolean}
 */

function findUser() {
  var prefix = $(this).data('prefix');
  var data = {
    uid: $('#' + prefix).val(),
    name: $('#' + prefix + '_name').val(),
    prefix: prefix
  };
  var user_template = $('#user_template').html();
  var insert_block = $('#' + prefix + '_list');

  if (!data.uid.length && !data.name.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to find!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      insert_block.html('');
      $(response.users).each(function (index, item) {
        insert_block.closest('table').css('display', 'inline-table');
        insert_block.append(user_template.replace(/%user_id%/g, item.id).replace('%pet_name%', item.pet).replace('%user_name%', item.first_name + ' ' + item.last_name).replace('%level%', item.xp).replace('%avatar%', item.avatar).replace(/%target%/g, prefix));
      });
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophies/handlers/sendGift.js":
/*!***********************************************!*\
  !*** ./modules/trophies/handlers/sendGift.js ***!
  \***********************************************/
/*! exports provided: sendGift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendGift", function() { return sendGift; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");




/**
 * Send Gift
 *
 * @returns {boolean}
 */

function sendGift() {
  $(this).attr('disabled', true);
  setTimeout(function () {
    $('#send').removeAttr('disabled');
  }, 3000);
  var container = $('#trophy-save-container');
  var formItems = container.find("input, textarea").serializeArray();

  if (!formItems.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__["default"])('Nothing to send!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(formItems).success(function (response) {
      if (!!response.errors) {
        Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      } else {
        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
        var trophy_cups_count = $('#trophy_cups_count');
        trophy_cups_count.text(parseInt(trophy_cups_count.text()) + 1);
        $('.table').hide();
        $('#trophy-save-container').find('input[type="text"], textarea').val('');
        var message_length = $('#news_message_length');
        message_length.text(message_length.data('length'));
      }
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophies/module.js":
/*!************************************!*\
  !*** ./modules/trophies/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_sendGift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/sendGift */ "./modules/trophies/handlers/sendGift.js");
/* harmony import */ var _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/findUser */ "./modules/trophies/handlers/findUser.js");


$(document)
/**
 * Find user
 */
.on('click', '#find_sender, #find_receiver', _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__["findUser"])
/**
 * Save the row
 */
.on('click', '#send', _handlers_sendGift__WEBPACK_IMPORTED_MODULE_0__["sendGift"])
/**
 * Mark selected row
 */
.on('click', '.table tr', function () {
  $(this).find('input[type="radio"]').prop("checked", true);
  $('#' + $(this).data('target') + '_uid').val($(this).data('uid'));
})
/**
 * Change limit counter
 */
.on('input', 'textarea', function () {
  var target = $(this).prop('name').replace('cup_data[', '').replace(']', '') + '_length';
  $('#' + target).text($(this).data('maxlength') - $(this).val().length);
})
/**
 * Remove entered data
 */
.on('click', '#cancel', function () {
  $('.table').hide();
  $(this).closest('table').find('input[type="text"], textarea').val('');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophy-cup-users/handlers/changeTab.js":
/*!********************************************************!*\
  !*** ./modules/trophy-cup-users/handlers/changeTab.js ***!
  \********************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  history.pushState({
    id: 'trophy-cup-users'
  }, 'Trophy cup users', url);
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophy-cup-users/handlers/saveState.js":
/*!********************************************************!*\
  !*** ./modules/trophy-cup-users/handlers/saveState.js ***!
  \********************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the magic config grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.trophy-save-container');
  var data = container.find(".changed input");
  var formItems = container.find(".changed");

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).success(function (response) {
      formItems.removeClass('changed');
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophy-cup-users/module.js":
/*!********************************************!*\
  !*** ./modules/trophy-cup-users/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/trophy-cup-users/handlers/saveState.js");
/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/trophy-cup-users/handlers/changeTab.js");


$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__["changeTab"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/constants.js":
/*!************************************!*\
  !*** ./modules/users/constants.js ***!
  \************************************/
/*! exports provided: SEARCH_USER_ASSETS, SUBMIT_USER_PART_FORM, DELETE_NEIGHBOR, ADD_NEIGHBOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_ASSETS", function() { return SEARCH_USER_ASSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_USER_PART_FORM", function() { return SUBMIT_USER_PART_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NEIGHBOR", function() { return DELETE_NEIGHBOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEIGHBOR", function() { return ADD_NEIGHBOR; });
var SEARCH_USER_ASSETS = 'SEARCH_USER_ASSETS';
var SUBMIT_USER_PART_FORM = 'SUBMIT_USER_PART_FORM';
var DELETE_NEIGHBOR = 'DELETE_NEIGHBOR';
var ADD_NEIGHBOR = 'ADD_NEIGHBOR';

/***/ }),

/***/ "./modules/users/handlers/changePlacement.js":
/*!***************************************************!*\
  !*** ./modules/users/handlers/changePlacement.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Change placement select in Add Assets block
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var placementName = $('#placement-name');

  if ($(this).val() > 0) {
    placementName.attr('disabled', 'disabled');
  } else {
    placementName.removeAttr('disabled');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/changeRandomNeighbors.js":
/*!*********************************************************!*\
  !*** ./modules/users/handlers/changeRandomNeighbors.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Change mode for add neighbors
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var neighborsCount = $('#neighbors-count');

  if ($(this).is(':checked')) {
    neighborsCount.removeAttr('disabled');
  } else {
    neighborsCount.attr('disabled', 'disabled');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/hidePlacementAssets.js":
/*!*******************************************************!*\
  !*** ./modules/users/handlers/hidePlacementAssets.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Hide assets in placement
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.toggleClass('hide');
  currentElement.siblings('.load-assets').toggleClass('hide');
  $('#asset-container-' + currentElement.data('placement')).html('');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/loadPlacementAssets.js":
/*!*******************************************************!*\
  !*** ./modules/users/handlers/loadPlacementAssets.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * PLACEMENT_ASSETS_ROUTE - it is a global object
 * Inited in user/edit.blade.php
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentElement = $(this);
  var placement = currentElement.data('placement');
  currentElement.toggleClass('hide');
  currentElement.siblings('.hide-assets').toggleClass('hide');
  loadPart(PLACEMENT_ASSETS_ROUTE + '?placement=' + placement, $('#asset-container-' + placement));
  return false;
});
/**
 * Load part for edit user page
 */

function loadPart(action, element) {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    var items = $(response);
    items.find('.list-thumbnail').popover({
      container: 'body',
      html: true,
      trigger: 'hover',
      placement: 'right',
      content: function content() {
        return '<img src="' + $(this).data('full') + '">';
      }
    });
    element.replaceWith(items);
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/addNeighbor.js":
/*!************************************************!*\
  !*** ./modules/users/listeners/addNeighbor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Set neighbor as active
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["ADD_NEIGHBOR"], function (resp) {
    if (resp.type == 'success') {
      $('#delete-neighbor-' + resp.data.neighbor_id).removeClass('hidden');
      $('#add-neighbor-' + resp.data.neighbor_id).addClass('hidden');
      $('#neighbor-status-' + resp.data.neighbor_id).html(resp.data.status_text);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/deleteNeighbor.js":
/*!***************************************************!*\
  !*** ./modules/users/listeners/deleteNeighbor.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Set neighbor as deleted
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_NEIGHBOR"], function (resp) {
    if (resp.type == 'success') {
      $('#delete-neighbor-' + resp.data.neighbor_id).addClass('hidden');
      $('#add-neighbor-' + resp.data.neighbor_id).removeClass('hidden');
      $('#neighbor-status-' + resp.data.neighbor_id).html(resp.data.status_text);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/searchUserAssets.js":
/*!*****************************************************!*\
  !*** ./modules/users/listeners/searchUserAssets.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Search user assets
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["SEARCH_USER_ASSETS"], function (data) {
    $('#search-assets-container').html(data);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/submitUserPartForm.js":
/*!*******************************************************!*\
  !*** ./modules/users/listeners/submitUserPartForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");



/**
 * Submit user part form
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_2__["SUBMIT_USER_PART_FORM"], function (resp) {
    var form = $(resp.data);
    $('#' + resp.container).replaceWith(form);
    form.find('.select2').select2();
    Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__["default"])('User data updated');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/module.js":
/*!*********************************!*\
  !*** ./modules/users/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _listeners_searchUserAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/searchUserAssets */ "./modules/users/listeners/searchUserAssets.js");
/* harmony import */ var _listeners_submitUserPartForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners/submitUserPartForm */ "./modules/users/listeners/submitUserPartForm.js");
/* harmony import */ var _listeners_deleteNeighbor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/deleteNeighbor */ "./modules/users/listeners/deleteNeighbor.js");
/* harmony import */ var _listeners_addNeighbor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/addNeighbor */ "./modules/users/listeners/addNeighbor.js");
/* harmony import */ var _handlers_loadPlacementAssets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/loadPlacementAssets */ "./modules/users/handlers/loadPlacementAssets.js");
/* harmony import */ var _handlers_hidePlacementAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/hidePlacementAssets */ "./modules/users/handlers/hidePlacementAssets.js");
/* harmony import */ var _handlers_changePlacement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/changePlacement */ "./modules/users/handlers/changePlacement.js");
/* harmony import */ var _handlers_changeRandomNeighbors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handlers/changeRandomNeighbors */ "./modules/users/handlers/changeRandomNeighbors.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./modules/users/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);









/**
 * Search user assets listener
 */

Object(_listeners_searchUserAssets__WEBPACK_IMPORTED_MODULE_0__["default"])();
/**
 * Submit user part form listener
 */

Object(_listeners_submitUserPartForm__WEBPACK_IMPORTED_MODULE_1__["default"])();
/**
 * Delete Neighbor
 */

Object(_listeners_deleteNeighbor__WEBPACK_IMPORTED_MODULE_2__["default"])();
/**
 * Add Neighbor
 */

Object(_listeners_addNeighbor__WEBPACK_IMPORTED_MODULE_3__["default"])();
$(document)
/**
 * Load assets in placement
 */
.on('click', '.load-assets', _handlers_loadPlacementAssets__WEBPACK_IMPORTED_MODULE_4__["default"])
/**
 * Change placement in Add Assets block
 */
.on('change', '#placement-for-asset', _handlers_changePlacement__WEBPACK_IMPORTED_MODULE_6__["default"])
/**
 * Change mode for add neighbors
 */
.on('change', '#is-random-neighbors', _handlers_changeRandomNeighbors__WEBPACK_IMPORTED_MODULE_7__["default"])
/**
 * Hide assets in placement
 */
.on('click', '.hide-assets', _handlers_hidePlacementAssets__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/styles.scss":
/*!***********************************!*\
  !*** ./modules/users/styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxDb25maXJtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vYnNlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2FkZEVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2FqYXhQYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2NvbmZpcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9mYXN0U2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9mYXN0U2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvbW9kYWxEYXRhLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3JlbW92ZUVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3N1Ym1pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGaWxlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldEZvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0U3ViRm9sZGVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2Ryb3Bab25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzIHN5bmMgbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvbGlzdGVuZXJzL2F3YXJkQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2xpc3RlbmVycy9hd2FyZERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hd2FyZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NlcnQtc2V0dXAvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jZXJ0LXNldHVwL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NlcnQtdXNlcnMvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY2VydC11c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jZXJ0L2hhbmRsZXJzL2ZpbmRVc2VyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY2VydC9oYW5kbGVycy9zZW5kQ2VydC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NlcnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvY29weUFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9oaWRlQXJjaGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVUYXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL3Nob3dBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd1Rhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtcm9sZXMvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXJvbGVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtdXNlcnMvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXJzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9mYXN0U2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvaGlkZUFkZGl0aW9uYWxSb3dzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9tYXJrSW5wdXRBc0NoYW5nZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVmYXVsdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvc2F2ZURwYVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2R5ZS9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvY2hhbmdlUm93SW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvZHllU2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZmluZ2VycHJpbnQtZm9ybS9oYW5kbGVycy9zYXZlRmluZ2VycHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9maW5nZXJwcmludC1mb3JtL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2ZpbmdlcnByaW50L2hhbmRsZXJzL3NhdmVGaW5nZXJwcmludC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2ZpbmdlcnByaW50L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvYXNzZXRDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvc29ydGFibGVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbGlzdGVuZXJzL2FkZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1lZGl0L2hhbmRsZXJzL2FkbWluU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1lZGl0L2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwLWVkaXQvaGFuZGxlcnMvZmluZFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1lZGl0L2hhbmRsZXJzL3NldE1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1lZGl0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwLWV2ZW50L2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwLWV2ZW50L2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwLWV2ZW50L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwLWV2ZW50L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xldmVscy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sZXZlbHMvaGFuZGxlcnMvc2F2ZUxldmVsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sZXZlbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbGlua2VkLWFzc2V0cy9oYW5kbGVycy9zaG93QXNzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvcmVtb3ZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL3NhdmVMb2NhbGl6YXRpb25TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWdpYy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWdpYy9oYW5kbGVycy9zYXZlTWFnaWNTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQtYXNzZXQvaGFuZGxlcnMvZ2V0TGFzdE1ha2V1cEtpdElELmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvbWVhbERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtYXNzZXQvaGFuZGxlcnMvYXNzZXRUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtYXNzZXQvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWFzc2V0L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1hc3NldC9oYW5kbGVycy91cGRhdGVMaXN0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1jYXRlZ29yeS9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtY2F0ZWdvcnkvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWNhdGVnb3J5L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1jYXRlZ29yeS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvaGFuZGxlcnMvcHJpY2VJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wdWJsaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvaGFuZGxlcnMvZHJvcHpvbmVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9hZGRTaG9wLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2Zhc3RTYXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3JhZGlvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zb3VuZC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zb3VuZC9oYW5kbGVycy9zYXZlU291bmRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzLWZvcm0vaGFuZGxlcnMvZmluZFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zcGVjaWFsLXByaXplcy1mb3JtL2hhbmRsZXJzL3NlbmRHaWZ0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3BlY2lhbC1wcml6ZXMtZm9ybS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zcGVjaWFsLXByaXplcy9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zcGVjaWFsLXByaXplcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90cm9waGllcy9oYW5kbGVycy9maW5kVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Ryb3BoaWVzL2hhbmRsZXJzL3NlbmRHaWZ0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdHJvcGhpZXMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdHJvcGh5LWN1cC11c2Vycy9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90cm9waHktY3VwLXVzZXJzL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Ryb3BoeS1jdXAtdXNlcnMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlUmFuZG9tTmVpZ2hib3JzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvaGlkZVBsYWNlbWVudEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2xvYWRQbGFjZW1lbnRBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvYWRkTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwibm90aWZ5U3VjY2VzcyIsIm1vZGFsc0NvbnRhaW5lciIsIk1PREFMX1NJWkVTIiwibW9kYWxJbmRleCIsIm1vZGFsQ291bnRlciIsIl9pZCIsInNpemUiLCJfc2l6ZSIsImhlYWRlciIsIl9oZWFkZXIiLCJib2R5IiwiX2JvZHkiLCJmb290ZXIiLCJfZm9vdGVyIiwiZGF0YXNldCIsIl9kYXRhc2V0IiwicmVzdWx0IiwiYXBwZW5kIiwiX2JlZm9yZUJ1aWxkQ2FsbGJhY2siLCJfYWZ0ZXJCdWlsZENhbGxiYWNrIiwiY29udGVudCIsInB1c2giLCJodG1sIiwiX2dldElEIiwiam9pbiIsIl9nZXRTaXplIiwiX2JlZm9yZUJ1aWxkIiwiX2dldEhlYWRlciIsIl9nZXRCb2R5IiwiX2dldEZvb3RlciIsIl9hZnRlckJ1aWxkIiwib2ZmIiwibW9kYWwiLCJnZXRNb2RhbENvdW50ZXIiLCJtb2RhbENvbmZpcm0iLCJNb2RhbEJ1aWxkZXIiLCJub3RpZnkiLCJ6X2luZGV4IiwiRXZlbnRPYnNlcnZlciIsInN1YnNjcmliZXJzIiwiZXZlbnQiLCJoYW5kbGVyIiwiX2xvZyIsImZvckVhY2giLCJzdGF0ZSIsImZpbHRlciIsInRvVXBwZXJDYXNlIiwib2JzZXJ2ZXIiLCJTYXZlZEl0ZW1Ob3RGb3VuZCIsIkVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEJ1dHRvbiIsInRhcmdldCIsInRlbXBsYXRlIiwiaWRQbGFjZWhvbGRlciIsInJvd0lkIiwiZW1iZWRGb3JtIiwiZW1iZWRCbG9ja0lkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJsZW5ndGgiLCJkaXNwYXRjaCIsInRyaWdnZXIiLCJjb250YWluZXIiLCJwYXJlbnRzIiwiaHR0cCIsInJlcGxhY2VXaXRoIiwic2VuZCIsImRhdGFTZXQiLCJidG5DbGFzcyIsImJ0bk5hbWUiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwicGFyc2VJbnQiLCJyZWxvYWQiLCJkaXNtaXNzIiwiY2xvc2VzdCIsImN1cnJlbnRCdG4iLCJzYXZlZEl0ZW0iLCJhdHRyIiwiZ2V0Rm9ybURhdGEiLCJDT05UQUlORVJfU0VMRUNUT1IiLCJmb3JtSXRlbXMiLCJtYXJrQ2hhbmdlZCIsImRvY3VtZW50IiwibW9kYWxEYXRhIiwiY29uZmlybU1vZGFsIiwic3VibWl0Rm9ybSIsImFqYXhQYWdpbmF0aW9uIiwiYWRkRW1iZWQiLCJyZW1vdmVFbWJlZCIsImZhc3RTYXZlIiwiZmFzdFNhdmVQYWdlIiwiYWZ0ZXJCdWlsZCIsInBhcmVudCIsImlkIiwic2VyaWFsaXplQXJyYXkiLCJjYW5SZWxvYWQiLCJidXR0b24iLCJkYXRhUmVsb2FkIiwicm9vdEZvbGRlciIsImZpbGVOYW1lIiwiZ2V0U3ViRm9sZGVyIiwiZm9ybSIsImZvcm1EYXRhIiwiZWFjaCIsImN1cnJlbnRJdGVtIiwicHJvcCIsInZhbCIsImZpbGVOYW1lSGFzaCIsIm1kNSIsInN1YnN0cmluZyIsInBhdGhQYXJ0cyIsIm1hdGNoIiwid2luZG93IiwialF1ZXJ5IiwicGF0aCIsInBhdGhuYW1lIiwic3BsaXQiLCJjb250ZXh0IiwicmVxdWlyZSIsIm1vZHVsZSIsInVuZGVmaW5lZCIsInN1YnNjcmliZSIsIkFXQVJEX0NSRUFURSIsInNlbGYiLCJ1bnN1YnNjcmliZSIsImVkaXRCdG4iLCJ0ZW1wbGF0ZUlkIiwidGVtcGxhdGVQbGFjZWhvbGRlciIsImF3YXJkX2lkIiwiQVdBUkRfREVMRVRFIiwiY3JlYXRlQnRuIiwiY2hpbGRyZW4iLCJFVkVOVF9OQU1FIiwiZHJvcHpvbmVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2aWV3VVJMIiwiZHJvcHpvbmVCdWlsZGVyIiwiRHJvcHpvbmVCdWlsZGVyIiwic2V0VXBsb2FkVXJsIiwiY2FuY2VsIiwiZmlsZV9uYW1lIiwidmFsdWUiLCJzZXRQcmV2aWV3IiwiZ2V0RmlsZVBhdGgiLCJmb2xkZXIiLCJidWlsZCIsIkFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEIiwidG9nZ2xlQ2xhc3MiLCJjdXJyZW50RWxlbWVudCIsIlJlcXVlc3RCdWlsZGVyIiwiaW5kZXgiLCJfIiwiaXRlbSIsInVwZGF0ZUluZGV4ZXMiLCJjb2xsYXBzZVN0YXRlIiwiY29sbGFwc2VTdGF0ZXMiLCJyZW1vdmVBY3Rpb25UeXBlU3RhdGUiLCJhZGROZXdSb3ciLCJhZGRfY291bnRlciIsInRib2R5IiwibGFzdElEIiwibGFzdCIsImluY3JlbWVudElkIiwiaSIsInRyTGFzdCIsInNlbGVjdDIiLCJzYXZlU3RhdGUiLCJhd2FyZCIsInJlc3AiLCJjaGFuZ2UiLCJfdGhpcyIsImF3YXJkQ3JlYXRlIiwiYmluZCIsInNhdmVCdXR0b24iLCJhd2FyZERlbGV0ZSIsInNldFN1YnR5cGVzIiwic3VidHlwZSIsImFzc2V0Rm9ybVN1YnR5cGUiLCJhc3NldEZvcm1BY3Rpb25UeXBlIiwiYXNzZXRGb3JtQ29sbGVjdGlvbiIsInByaWNlcyIsImVtcHR5IiwiU1VCX1RZUEVTIiwiaGlkZSIsInNob3ciLCJlbGVtZW50IiwiY29sbGVjdGlvbl9pZCIsInNhdmVBc3NldEJ0biIsImNoYW5nZVR5cGUiLCJnZXRMYXN0Q29sbGVjdGlvbk51bWJlciIsIkJBTk5FUl9TSE9XX0ZPUk0iLCJUWVBFX1NFTEVDVF9JRCIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJvcHRpb25zIiwic2VsZWN0ZWRFbGVtZW50IiwiZHJvcFpvbmVJbml0Iiwic2hvd0Zvcm0iLCJkYXRldGltZXBpY2tlciIsImZvcm1hdCIsImF1dG9jbG9zZSIsIm1pblZpZXciLCJzYXZlUGFnZSIsInJvd3MiLCJjaGFuZ2VUYWIiLCJmaW5kVXNlciIsInByZWZpeCIsInVpZCIsInVzZXJfdGVtcGxhdGUiLCJpbnNlcnRfYmxvY2siLCJ1c2VycyIsImNzcyIsInBldCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJ4cCIsImF2YXRhciIsInNlbmRDZXJ0Iiwic2V0VGltZW91dCIsInJlbW92ZUF0dHIiLCJ0cm9waHlfY3Vwc19jb3VudCIsIm1lc3NhZ2VfbGVuZ3RoIiwibmFtZV9sZW5ndGgiLCJldmVudF9sZW5ndGgiLCJncm91cF9sZW5ndGgiLCJjb3B5QWRwIiwiYWRwSWRzRmllbGQiLCJhZHBJZHMiLCJuIiwiZXhlY0NvbW1hbmQiLCJjb3B5QXNzZXRzIiwiYXNzZXRJZHNGaWVsZCIsImFzc2V0SWRzIiwiaGlkZUFyY2hpdmUiLCJoaWRlVGFza3MiLCJzaG93QXJjaGl2ZSIsImFjdGlvbiIsInNob3dUYXNrcyIsImRpcmVjdGlvbiIsIndyYXBwZXIiLCJnZXRTZWxlY3Rpb24iLCJDT0xMRUNUSU9OX1NIT1dfRk9STSIsImFzc2V0UHJldmlld1RlbXBsYXRlIiwiYXNzZXRzIiwiY3VycmVudEFzc2V0IiwicHJldmlld191cmwiLCJTb3J0YWJsZSIsImdyb3VwIiwicmVtb3ZlQ2xvbmVPbkhpZGUiLCJvbkVuZCIsInBvc2l0aW9uIiwibWFya0lucHV0QXNDaGFuZ2VkIiwic29ydGFibGVJbml0IiwiaGlkZUFkZGl0aW9uYWxSb3dzIiwibGFzdElEUyIsImZpcnN0IiwiTWF0aCIsIm1heCIsImFwcGx5Iiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsInJlYWR5IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInNhdmVEcGFTdGF0ZSIsImxhc3RSb3ciLCJjb2xvcnBpY2tlciIsImNoYW5nZVJvd0luZGV4Iiwicm93SW5kZXgiLCJyb3ciLCJvbGROYW1lIiwibmV3TmFtZSIsImluZGV4T2YiLCJEWUVfQ09OVEFJTkVSX1NFTEVDVE9SIiwibWFya0NoYW5nZWRUciIsImR5ZVNhdmVQYWdlIiwic2F2ZUZpbmdlcnByaW50IiwiV2ViR0xGaW5nZXJQcmludCIsIiRkZWZhdWx0VmFycyIsIkZpbmRGaW5nZXJQcmludCIsImV4Y2x1ZGVzIiwiYXZhaWxhYmxlU2NyZWVuUmVzb2x1dGlvbiIsImVudW1lcmF0ZURldmljZXMiLCJkb05vdFRyYWNrIiwiZmluZ2VycHJpbnQiLCJmaW5nZXJQcmludEhhbmRsZXIiLCJjb21wb25lbnRzIiwidmFsdWVzIiwiY29tcG9uZW50IiwiRmluZ2VycHJpbnQyIiwieDY0aGFzaDEyOCIsInNlbmRQcm9taXNlIiwicmVxdWVzdElkbGVDYWxsYmFjayIsImdldCIsImNvbW1lbnQiLCJHSUZUX1dSQVBfUk9XX0FEREVEIiwiY3VycmVudElucHV0IiwiYXNzZXRJRCIsImN1cnJlbnRBc3NldER1cGxpY2F0ZSIsImVyciIsInBvc2l0aW9uVXBkYXRlIiwiYnV0dG9uVXJsIiwiYXNzZXRDaGFuZ2VkIiwicmVtb3ZlUm93IiwiYWRkUm93IiwiYWRtaW5TdG9yZSIsInNlbGVjdGVkX2lkIiwic2V0TWFpbiIsImlzX21haW4iLCJtYWluX2lkIiwicHJlcGVuZCIsInNhdmVMZXZlbFN0YXRlIiwicm93VG9TYXZlIiwic2hvd0Fzc2V0IiwiU1dPV19BU1NFVF9ST1VURSIsImhhc093blByb3BlcnR5Iiwic2F2ZUxvY2FsaXphdGlvblN0YXRlIiwiY3VycmVudEtleSIsImN1cnJlbnRLZXlEdXBsaWNhdGUiLCJzYXZlTWFnaWNTdGF0ZSIsIm1ha2V1cF9raXRfaWQiLCJnZXRMYXN0TWFrZXVwS2l0SUQiLCJNQUtFVVBfS0lUX1NIT1dfRk9STSIsImluZ3JlZGllbnREZWxldGUiLCJzYXZlTWVhbEluZ3JlZGllbnRzU3RhdGUiLCJtZWFsRGVsZXRlIiwic2F2ZU1lYWxTdGF0ZSIsIk5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSIsIlRSQVNIIiwiVFJBU0hfRklFTERTX0lEIiwiU0VMRUNUX0lEIiwidHJhc2hGaWVsZHMiLCJhc3NldFRhYiIsImNhdGVnb3J5IiwiYXNzZXRfaWRzIiwidXBkYXRlTGlzdCIsImFzaWduTGlzdCIsImFzc2V0SWQiLCJyZWNvcmRfcGVyX3BhZ2UiLCJoZWFkIiwidGFpbCIsIlBST0RVQ1RfU0hPV19GT1JNIiwiQ2xlYXZlIiwibnVtZXJhbCIsInJhd1ZhbHVlVHJpbVByZWZpeCIsIm9uVmFsdWVDaGFuZ2VkIiwicGFyc2VGbG9hdCIsInJhd1ZhbHVlIiwicHJvZHVjdFByaWNlIiwicHJpY2VJbml0Iiwib3JkZXIiLCJwcmV2aWV3SGlkZGVuSW5wdXQiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUluaXQiLCJXQUxLX0NBVEVHT1JZIiwiUlVOX0NBVEVHT1JZIiwic2VsZWN0VmFsIiwiZW1iZWQiLCJTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNIiwidGFibGUiLCJkZXBhcnRtZW50SWQiLCJjb3VudGVyIiwiZGF0YU5hbWVQcmVmaXgiLCJmYXN0U2F2ZUNvbnRhaW5lciIsIml0ZW1OYW1lIiwiYWxsSXRlbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJhZGlvIiwidGhlbiIsInByZXZpZXdVcmxFbGVtZW50IiwicmFkaW9JbnB1dCIsImFkZFNob3AiLCJzYXZlU291bmRTdGF0ZSIsInNlbmRHaWZ0IiwiVEFNQVRPT0xfU0hPV19GT1JNIiwiU0VBUkNIX1VTRVJfQVNTRVRTIiwiU1VCTUlUX1VTRVJfUEFSVF9GT1JNIiwiREVMRVRFX05FSUdIQk9SIiwiQUREX05FSUdIQk9SIiwicGxhY2VtZW50TmFtZSIsIm5laWdoYm9yc0NvdW50IiwiaXMiLCJzaWJsaW5ncyIsInBsYWNlbWVudCIsImxvYWRQYXJ0IiwiUExBQ0VNRU5UX0FTU0VUU19ST1VURSIsIml0ZW1zIiwicG9wb3ZlciIsIm5laWdoYm9yX2lkIiwic3RhdHVzX3RleHQiLCJzZWFyY2hVc2VyQXNzZXRzIiwic3VibWl0VXNlclBhcnRGb3JtIiwiZGVsZXRlTmVpZ2hib3IiLCJhZGROZWlnaGJvciIsImxvYWRQbGFjZW1lbnRBc3NldHMiLCJjaGFuZ2VQbGFjZW1lbnQiLCJjaGFuZ2VSYW5kb21OZWlnaGJvcnMiLCJoaWRlUGxhY2VtZW50QXNzZXRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FB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QUMsTUFBTXVPLElBQUksQ0FBQzNHLFNBQVosQ0FBRCxDQUF3QkcsV0FBeEIsQ0FBb0NxQyxJQUFwQztBQUNBQSxRQUFJLENBQUNuSyxJQUFMLENBQVUsVUFBVixFQUFzQm1PLE9BQXRCO0FBQ0EzSyxtRkFBYSxDQUFDLG1CQUFELENBQWI7QUFDSCxHQUxEO0FBTUgsQzs7Ozs7Ozs7Ozs7OztBQ2REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBNlksMkVBQWdCO0FBRWhCOzs7O0FBR0FDLDZFQUFrQjtBQUVsQjs7OztBQUdBQyx5RUFBYztBQUVkOzs7O0FBR0FDLHNFQUFXO0FBRVh6YyxDQUFDLENBQUNpSixRQUFEO0FBRUc7OztBQUZKLENBS0szSCxFQUxMLENBS1EsT0FMUixFQUtpQixjQUxqQixFQUtpQ29iLHFFQUxqQztBQU9JOzs7QUFQSixDQVVLcGIsRUFWTCxDQVVRLFFBVlIsRUFVa0Isc0JBVmxCLEVBVTBDcWIsaUVBVjFDO0FBWUk7OztBQVpKLENBZUtyYixFQWZMLENBZVEsUUFmUixFQWVrQixzQkFmbEIsRUFlMENzYix1RUFmMUM7QUFpQkk7OztBQWpCSixDQW9CS3RiLEVBcEJMLENBb0JRLE9BcEJSLEVBb0JpQixjQXBCakIsRUFvQmlDdWIscUVBcEJqQyxFOzs7Ozs7Ozs7Ozs7QUM5QkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipcbiAqIEJhc2Ugc2l6ZXNcbiAqXG4gKiBAdHlwZSB7e3NtOiBzdHJpbmcsIGxnOiBzdHJpbmd9fVxuICovXG5leHBvcnQgY29uc3QgU0laRVMgPSB7XG4gICAgc206ICdzbScsXG4gICAgbWQ6ICdtZCcsXG4gICAgbGc6ICdsZycsXG59O1xuIiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcblxuLyoqXG4gKiBMb2FkaW5nIHRleHRcbiAqIEl0IHdpbGwgYmUgc2hvd24gYWZ0ZXIgdGhlIHN0YXJ0IG9mIGltYWdlIHVwbG9hZGluZ1xuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IExPQURJTkdfVEVYVCA9ICdMb2FkaW5nLi4uJztcblxuLyoqXG4gKiBEcm9wem9uZSBidWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZHJvcHpvbmVDb250YWluZXJcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJvcHpvbmVDb250YWluZXIsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fZHJvcHpvbmVDb250YWluZXIgPSBkcm9wem9uZUNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uID0gJChkcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmRyb3B6b25lLWNhbmNlbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB1cmwgdG8gdXBsb2FkaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc2V0VXBsb2FkVXJsKHVybCkge1xuICAgICAgICB0aGlzLl91cGxvYWRVcmwgPSB1cmw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBkZWZhdWx0IHByZXZpZXcgaW1hZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHNldFByZXZpZXcobmFtZSwgdXJsKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpZXcgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBlcnJvciBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBlcnJvcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lcnJvckNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYW5jZWwgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgY2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzdWNjZXNzIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIHN1Y2Nlc3MoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fc3VjY2Vzc0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGRyb3B6b25lXG4gICAgICogQHJldHVybnMge0Ryb3B6b25lfVxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgX2Ryb3B6b25lQnVpbGRlciA9IHRoaXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgYWZ0ZXIgZmFpbFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVGYWlsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2R6LXN0YXJ0ZWQnKTtcbiAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kei1wcmV2aWV3JykucmVtb3ZlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlndXJhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHVybDogdGhpcy5fdXBsb2FkVXJsLFxuICAgICAgICAgICAgdGh1bWJuYWlsV2lkdGg6IG51bGwsXG4gICAgICAgICAgICB0aHVtYm5haWxIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICB1cGxvYWRNdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvKicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gtY3NyZi10b2tlbic6IENTUkZfVE9LRU5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFNldCBjdXJyZW50IGltYWdlIGluIHRoZSBkcm9wem9uZSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3ICYmICEhX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiYWRkZWRmaWxlXCIsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ0aHVtYm5haWxcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldywgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEFkZGVkIGZpbGUgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQoTE9BRElOR19URVhUKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKGZpbGUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3B6b25lRmFpbCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKGZpbGUsIHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBTdWNjZXNzIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCBmdW5jdGlvbiAoZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9zdWNjZXNzQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXIgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgICogQ2xlYXIgZmlsZSBpbmZvIGluIGRyb3B6b25lXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoISF0aGlzLl9jYW5jZWxCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XG4gICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fY2FuY2VsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIG5ldyBEcm9wem9uZSh0aGlzLl9kcm9wem9uZUNvbnRhaW5lciwgey4uLmNvbmZpZywgLi4udGhpcy5fY29uZmlnfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tICcuL2Vycm9ySGFuZGxlcic7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcIi4vc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBIVFRQIFJlcXVlc3QgQnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9tZXRob2QgPSAnZ2V0JztcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLl9lcnJvciA9IGVycm9ySGFuZGxlcjtcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IHN1Y2Nlc3NIYW5kbGVyO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIH1cblxuICAgIG1ldGhvZChtZXRob2QpIHtcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gbWV0aG9kO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlcnJvcihmbikge1xuICAgICAgICB0aGlzLl9lcnJvciA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN1Y2Nlc3MoZm4pIHtcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKGZuKSB7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2VuZCgpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdGhpcy5fdXJsLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5fbWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5fZGF0YSxcbiAgICAgICAgICAgIGVycm9yOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2UucmVzcG9uc2VKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yKHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuX3N1Y2Nlc3MsXG4gICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5fY29tcGxldGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQmFzZSBlcnJvciBoYW5kbGVyXG4gKlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdGhlIHJvdXRlXG4gICAgICovXG4gICAgaWYgKCEhcmVzcG9uc2Uucm91dGUpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJvdXRlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBtYWluIGVycm9yIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5tZXNzYWdlKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYWxsIG1lc3NhZ2VzXG4gICAgICovXG4gICAgaWYoISFyZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UuZXJyb3JzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JzW2tleV0ubWFwKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vUmVxdWVzdEJ1aWxkZXInO1xuIiwiaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcblxuLyoqXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLyoqXG4gICAgICogU2hvdyBtYWluIGVycm9yIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICBpZiAoISFyZXNwb25zZS5tZXNzYWdlKSB7XG4gICAgICAgIG5vdGlmeVN1Y2Nlc3MocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL21vZGFsJztcbmltcG9ydCAnLi9vYnNlcnZlcic7XG5pbXBvcnQgJy4vaHR0cCc7XG4iLCJjb25zdCBtb2RhbHNDb250YWluZXIgPSAkKCdib2R5Jyk7XG5cbmNvbnN0IE1PREFMX1NJWkVTID0ge1xuICAgIHNtOiAnbW9kYWwtc20nLFxuICAgIG1kOiAnbW9kYWwtbWQnLFxuICAgIGxnOiAnbW9kYWwtbGcnLFxufTtcblxuLyoqXG4gKiBVbmlxdWUgaW5kZXggb2YgdGhlIG1vZGFsXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IG1vZGFsSW5kZXggPSAwO1xuXG4vKipcbiAqIENvdW50ZXIgb2YgdGhlIG1vZGFscyBhdCB0aGUgcGFnZVxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmxldCBtb2RhbENvdW50ZXIgPSAwO1xuXG4vKipcbiAqIE1vZGFsIEJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIG1vZGFsSW5kZXgrKztcbiAgICAgICAgdGhpcy5faWQgPSAnbW9kYWxzLWNvbnRhaW5lci1pdGVtLScgKyBtb2RhbEluZGV4O1xuICAgIH1cblxuICAgIHNpemUoc2l6ZSkge1xuICAgICAgICBpZiAoISFNT0RBTF9TSVpFU1tzaXplXSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IE1PREFMX1NJWkVTW3NpemVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZGVyKGhlYWRlcikge1xuICAgICAgICB0aGlzLl9oZWFkZXIgPSBoZWFkZXI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYm9keShib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBib2R5O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZvb3Rlcihmb290ZXIpIHtcbiAgICAgICAgdGhpcy5fZm9vdGVyID0gZm9vdGVyO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGFzZXQoZGF0YXNldCkge1xuICAgICAgICB0aGlzLl9kYXRhc2V0ID0gZGF0YXNldDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfZ2V0SUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBfZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fc2l6ZSA/IHRoaXMuX3NpemUgOiBNT0RBTF9TSVpFUy5tZDtcbiAgICB9XG5cbiAgICBfZ2V0SGVhZGVyKCkge1xuICAgICAgICBpZiAoISF0aGlzLl9oZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiR7dGhpcy5faGVhZGVyfTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgX2dldEZvb3RlcigpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmICghIXRoaXMuX2Zvb3Rlcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gJChgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPjwvZGl2PmApXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgkKGBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBgKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2Zvb3Rlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfZ2V0Qm9keSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmICghIXRoaXMuX2JvZHkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICQoYDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+PC9kaXY+YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2JvZHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGJlZm9yZSBidWlsZCBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgYmVmb3JlQnVpbGQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfYmVmb3JlQnVpbGQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYWZ0ZXIgYnVpbGQgbW9kYWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGFmdGVyQnVpbGQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9hZnRlckJ1aWxkKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vZGFsKGNvbnRlbnQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERhdGEgYXR0cmlidXRlc1xuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgZGF0YXNldCA9IFtdO1xuICAgICAgICBpZiAoISF0aGlzLl9kYXRhc2V0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMuX2RhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICBkYXRhc2V0LnB1c2goYGRhdGEtJHtuYW1lfT1cIiR7dGhpcy5fZGF0YXNldFtuYW1lXX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGh0bWwgPSAkKGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIkeyB0aGlzLl9nZXRJRCgpIH1cIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiICR7ZGF0YXNldC5qb2luKCcgJyl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkICR7dGhpcy5fZ2V0U2l6ZSgpfVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YCk7XG5cbiAgICAgICAgaWYgKCEhY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5ib2R5KGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgdGhlIGJlZm9yZUJ1aWxkIGNhbGxiYWNrXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZCgpO1xuXG4gICAgICAgIGh0bWwuZmluZCgnLm1vZGFsLWNvbnRlbnQnKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRIZWFkZXIoKSlcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0Qm9keSgpKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRGb290ZXIoKSk7XG5cbiAgICAgICAgbW9kYWxzQ29udGFpbmVyLmFwcGVuZChodG1sKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCB0aGUgYWZ0ZXJCdWlsZCBjYWxsYmFja1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB1cGRhdGUgY291bnRlciBvZiBtb2RhbHMgYXQgdGhlIHBhZ2VcbiAgICAgICAgICovXG4gICAgICAgIG1vZGFsQ291bnRlcisrO1xuXG4gICAgICAgICQoJyMnICsgdGhpcy5fZ2V0SUQoKSlcbiAgICAgICAgICAgIC5vbignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsQ291bnRlci0tO1xuICAgICAgICAgICAgICAgICQoJyMnICsgdGhpcy5fZ2V0SUQoKSlcbiAgICAgICAgICAgICAgICAgICAgLm9mZignaGlkZGVuLmJzLm1vZGFsJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tb2RhbCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgY291bnRlciBvZiBtb2RhbHMgYXQgdGhlIHBhZ2VcbiAqXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxDb3VudGVyKCkge1xuICAgIHJldHVybiBtb2RhbENvdW50ZXI7XG59XG4iLCJpbXBvcnQgJy4vTW9kYWxCdWlsZGVyJ1xuaW1wb3J0ICcuL21vZGFsQ29uZmlybSdcbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5cbi8qKlxuICogTW9kYWwgY29uZmlybVxuICpcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsQ29uZmlybShtZXNzYWdlLCBjYWxsYmFjaykge1xuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcihtZXNzYWdlKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1zdWNjZXNzJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0NvbmZpcm0nLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiBjYWxsYmFja1xuICAgICAgICB9KSlcbiAgICAgICAgLm1vZGFsKCk7XG59XG4iLCIvKipcbiAqIE5vdGlmeSBoZWxwZXJcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHBhcmFtIHR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2UsIHR5cGUpIHtcbiAgICAkLm5vdGlmeSh7bWVzc2FnZTogbWVzc2FnZX0se1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB6X2luZGV4OiAxMDUxXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgbm90aWZ5IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBub3RpZnkobWVzc2FnZSwgJ2RhbmdlcicpO1xufVxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbm90aWZ5KG1lc3NhZ2UsICdzdWNjZXNzJyk7XG59XG4iLCIvKipcbiAqIEV2ZW50IG9ic2VydmVyXG4gKi9cbmNsYXNzIEV2ZW50T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fbG9nKCdzdWJzY3JpYmUnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goaGFuZGxlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2ggKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX2xvZygnZGlzcGF0Y2gnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCEhdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihkYXRhLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdW5zdWJzY3JpYmUgKGV2ZW50LCBzdGF0ZSkge1xuICAgICAgICB0aGlzLl9sb2coJ3Vuc3Vic2NyaWJlJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmZpbHRlcihoYW5kbGVyID0+IGhhbmRsZXIgIT09IHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9sb2cobWV0aG9kLCBldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhtZXRob2QudG9VcHBlckNhc2UoKSwgJzonLCAnWycsIGV2ZW50LCAnXScpO1xuICAgIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgRXZlbnRPYnNlcnZlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcjtcbiIsImltcG9ydCAnLi9FdmVudE9ic2VydmVyJztcbiIsIi8qKlxuICogU2F2ZWQgaXRlbSBub3QgZm91bmRcbiAqXG4gKiBVc2luZyBpbiBmYXN0U2F2ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBTYXZlZEl0ZW1Ob3RGb3VuZCBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdTYXZlZEl0ZW1Ob3RGb3VuZCc7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIH1cbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5cbi8qKlxuICogQWRkIGVtYmVkIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHRhcmdldCA9IGN1cnJlbnRCdXR0b24uZGF0YSgndGFyZ2V0Jyk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RlbXBsYXRlJyk7XG4gICAgY29uc3QgaWRQbGFjZWhvbGRlciA9IGN1cnJlbnRCdXR0b24uZGF0YSgnaWRwbGFjZXBvbGRlcicpO1xuXG4gICAgbGV0IHJvd0lkID0gY3VycmVudEJ1dHRvbi5kYXRhKCdyb3dpZCcpO1xuICAgIGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnLCArK3Jvd0lkKTtcblxuICAgIGxldCBlbWJlZEZvcm0gPSAkKCcjJysgdGVtcGxhdGUpLmh0bWwoKTtcbiAgICBjb25zdCBlbWJlZEJsb2NrSWQgPSByb3dJZCArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSkudG9TdHJpbmcoMTYpO1xuICAgIGVtYmVkRm9ybSA9IGVtYmVkRm9ybS5yZXBsYWNlKC8lZW1iZWRCbG9ja0lkJS9nLCBlbWJlZEJsb2NrSWQpO1xuXG4gICAgaWYgKCEhaWRQbGFjZWhvbGRlcikge1xuICAgICAgICBlbWJlZEZvcm0gPSBlbWJlZEZvcm0ucmVwbGFjZSggbmV3IFJlZ0V4cChpZFBsYWNlaG9sZGVyLCBcImdcIiksIHJvd0lkKVxuICAgIH1cblxuICAgICQoJyMnICsgdGFyZ2V0KS5hcHBlbmQoZW1iZWRGb3JtKTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGRpc3BhdGNoXG4gICAgICovXG4gICAgY29uc3QgZXZlbnQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2V2ZW50Jyk7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50Lmxlbmd0aCkge1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChldmVudCwge1xuICAgICAgICAgICAgZW1iZWRCbG9ja0lkOiBlbWJlZEJsb2NrSWRcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY3VycmVudEJ1dHRvbi50cmlnZ2VyKCdhaV9hbmltYXRpb24nKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKkFqYXggcGFnaW5hdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnRzKCcuYWpheC1wYWdpbmF0aW9uJykuZGF0YSgnY29udGFpbmVyJyk7XG4gICBcbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICQoJyMnICsgY29udGFpbmVyKS5yZXBsYWNlV2l0aChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuIiwiaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIE9wZW4gY29uZmlybSBtb2RhbCBiZWZvcmUgYWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkYXRhU2V0ID0gdGhpcy5kYXRhc2V0O1xuICAgIGNvbnN0IHVybCA9IHRoaXMuaHJlZjtcblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcihkYXRhU2V0LmhlYWRlcilcbiAgICAgICAgLmZvb3RlcihcbiAgICAgICAgICAgICQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAoZGF0YVNldC5idG5DbGFzcyB8fCAnYnRuLXNtIGJ0bi1zdWNjZXNzJykgKyAnIGJ0bicsXG4gICAgICAgICAgICAgICAgJ3RleHQnOiBkYXRhU2V0LmJ0bk5hbWUgfHwgJ0NvbmZpcm0nLFxuICAgICAgICAgICAgICAgICdjbGljayc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXcgaHR0cCh1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWV0aG9kKGRhdGFTZXQubWV0aG9kIHx8ICdnZXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWRhdGFTZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LnJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRhdGFTZXQuZGlzbWlzcykgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLm1vZGFsKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZ2V0Rm9ybURhdGEoc2F2ZWRJdGVtKSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbmV4cG9ydCBjb25zdCBDT05UQUlORVJfU0VMRUNUT1IgPSAnLmZhc3Qtc2F2ZS1wYWdlLWNvbnRhaW5lcic7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoQ09OVEFJTkVSX1NFTEVDVE9SKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBNYXJrIGZvcm0ncyBlbGVtZW50cyBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZCgpIHtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59XG4iLCJpbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vZmFzdFNhdmVcIjtcbmltcG9ydCBhZGRFbWJlZCBmcm9tIFwiLi9hZGRFbWJlZFwiO1xuaW1wb3J0IHJlbW92ZUVtYmVkIGZyb20gXCIuL3JlbW92ZUVtYmVkXCI7XG5pbXBvcnQgc3VibWl0Rm9ybSBmcm9tIFwiLi9zdWJtaXRGb3JtXCI7XG5pbXBvcnQgYWpheFBhZ2luYXRpb24gZnJvbSBcIi4vYWpheFBhZ2luYXRpb25cIjtcbmltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcIi4vY29uZmlybU1vZGFsXCI7XG5pbXBvcnQgbW9kYWxEYXRhIGZyb20gXCIuL21vZGFsRGF0YVwiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSwge0NPTlRBSU5FUl9TRUxFQ1RPUiwgbWFya0NoYW5nZWR9IGZyb20gXCIuL2Zhc3RTYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBtb2RhbCB3aXRoIGRhdGEgZnJvbSBzZXJ2ZXIgYnkgcmVxdWVzdFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtbW9kYWwtYWN0aW9uJywgbW9kYWxEYXRhKVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBjb25maXJtIG1vZGFsXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1jb25maXJtLWFjdGlvbicsIGNvbmZpcm1Nb2RhbClcblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LXN1Ym1pdC1hY3Rpb24nLCBzdWJtaXRGb3JtKVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGZvcm0gZGF0YVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtcGFnaW5hdGlvbiBhJywgYWpheFBhZ2luYXRpb24pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgZW1iZWQgZWxlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1lbWJlZCcsIGFkZEVtYmVkKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtYmVkIGVsZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5ybS1lbWJlZCcsIHJlbW92ZUVtYmVkKVxuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIHRoZSBkYXRhIG9mIGFuIGVudGl0eVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmZhc3Qtc2F2ZScsIGZhc3RTYXZlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayBpbnB1dHMgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgYCR7Q09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtDT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtDT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWQpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBwYWdlXG4gKi9cbiQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7XG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBPcGVuIG1vZGFsIHdpdGggZm9ybSBieSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5tZXRob2QodGhpcy5kYXRhc2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNpemUoU0laRVMubGcpXG4gICAgICAgICAgICAgICAgLmRhdGFzZXQoe1xuICAgICAgICAgICAgICAgICAgICByZWxvYWQ6IHRoaXMuZGF0YXNldC5yZWxvYWQgfHwgMSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5oZWFkZXIodGhpcy5kYXRhc2V0LmhlYWRlcilcbiAgICAgICAgICAgICAgICAuYWZ0ZXJCdWlsZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tb2RhbChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuXG4vKipcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSAhIXRoaXMuZGF0YXNldC5wYXJlbnQgPyAkKHRoaXMpLmNsb3Nlc3QodGhpcy5kYXRhc2V0LnBhcmVudCkgOiAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgaWYgKCF0aGlzLmRhdGFzZXQuaWQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKCdBcmUgeW91IHN1cmU/JylcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0RlbGV0ZScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7Z2V0TW9kYWxDb3VudGVyfSBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogU3VibWl0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgIG5ldyBodHRwKHRoaXMuaHJlZilcbiAgICAgICAgLmRhdGEoY3VycmVudEJ1dHRvbi5jbG9zZXN0KCdmb3JtJykuc2VyaWFsaXplQXJyYXkoKSlcbiAgICAgICAgLm1ldGhvZCh0aGlzLmRhdGFzZXQubWV0aG9kIHx8ICdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaCh0aGlzLmRhdGFzZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhblJlbG9hZCh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5kYXRhc2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2FuIHJlbG9hZCB0aGUgcGFnZVxuICpcbiAqIEBwYXJhbSBidXR0b25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjYW5SZWxvYWQoYnV0dG9uKSB7XG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvbi5kYXRhc2V0LnJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgaWYgKGdldE1vZGFsQ291bnRlcigpIDwgMikge1xuICAgICAgICAgICAgY29uc3QgZGF0YVJlbG9hZCA9ICQoYnV0dG9uKS5jbG9zZXN0KCcubW9kYWwnKS5kYXRhKCdyZWxvYWQnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVJlbG9hZCA9PT0gdHlwZW9mIHVuZGVmaW5lZCB8fCBkYXRhUmVsb2FkID09PSBmYWxzZSB8fCBwYXJzZUludChkYXRhUmVsb2FkKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGdldFN1YkZvbGRlciBmcm9tIFwiLi9nZXRTdWJGb2xkZXJcIjtcblxuLyoqXG4gKiBHZXQgZmlsZSBwYXRoIGZyb20gc3RvcmFnZSB3aXRoIHN1YiBmb2xkZXJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJvb3RGb2xkZXIgUm9vdCBmb2xkZXIgaW4gdGhlIHN0b3JhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAgIEZpbGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyb290Rm9sZGVyLCBmaWxlTmFtZSkge1xuICAgIHJldHVybiAnL3N0b3JhZ2UvJyArIHJvb3RGb2xkZXIgKyAnLycgKyBnZXRTdWJGb2xkZXIoZmlsZU5hbWUpICsgJy8nICsgZmlsZU5hbWU7XG59XG4iLCIvKipcbiAqIEdldCBmb3JtIGRhdGFcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gZm9ybSBGb3JtIGVsZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuXG4gICAgbGV0IGZvcm1JdGVtcyA9IGZvcm0uZmluZCgnaW5wdXQsIHNlbGVjdCcpO1xuICAgIGlmICghZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBmb3JtSXRlbXMgPSBmb3JtO1xuICAgIH1cblxuICAgIGZvcm1JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKSkge1xuICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZvcm1EYXRhW2N1cnJlbnRJdGVtLmF0dHIoJ25hbWUnKV0gPSAhIWN1cnJlbnRJdGVtLnByb3AoIFwiY2hlY2tlZFwiICkgKiAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gY3VycmVudEl0ZW0udmFsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtRGF0YTtcbn1cbiIsImltcG9ydCBtZDUgZnJvbSAnYmx1ZWltcC1tZDUnO1xuXG4vKipcbiAqIEdldCBzdWIgZm9sZGVycyBvZiB0aGUgZmlsZVxuICpcbiAqIFJlc3VsdCBvZiB0aGUgZnVuY3Rpb24gbG9va3MgbGlrZTogYTEvYjIvYzNcbiAqIFdoZXJlIG1kNSBvZiB0aGUgZmlsZSA9IGExYjJjMy4uLi4uLi4uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIHRoZSBmaWxlXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZpbGVOYW1lKSB7XG4gICAgY29uc3QgZmlsZU5hbWVIYXNoID0gbWQ1KGZpbGVOYW1lKS5zdWJzdHJpbmcoMCwgNik7XG4gICAgY29uc3QgcGF0aFBhcnRzID0gZmlsZU5hbWVIYXNoLm1hdGNoKC8uezEsMn0vZyk7XG4gICAgcmV0dXJuIHBhdGhQYXJ0cy5qb2luKCcvJyk7XG59XG4iLCIvKipcbiAqIGpRdWVyeVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LiQgPSAkO1xud2luZG93LmpRdWVyeSA9ICQ7XG5cbi8qKlxuICogQm9vdHN0cmFwXG4gKi9cbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwJztcblxuLyoqXG4gKiBCb290c3RyYXAgQ2NvbG9ycGlja2VyXG4gKi9cbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyJztcbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyL2Rpc3QvY3NzL2Jvb3RzdHJhcC1jb2xvcnBpY2tlci5jc3MnO1xuXG4vKipcbiAqIEZvbnQgQXdlc29tZVxuICovXG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9zY3NzL2ZvbnQtYXdlc29tZS5zY3NzJztcblxuLyoqXG4gKiBFeHRlcm5hbCBtb2R1bGVzXG4gKiBUT0RPOiBnZXQgYnkgbnBtXG4gKi9cbmltcG9ydCAnLi92ZW5kb3IvYW5pbWF0ZSc7XG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1jb25maXJtYXRpb24nO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtbm90aWZ5JztcbmltcG9ydCAnLi92ZW5kb3Ivc2VsZWN0Mic7XG5pbXBvcnQgJy4vdmVuZG9yL2Vra28tbGlnaHRib3gnO1xuaW1wb3J0ICcuL3ZlbmRvci90aGVtZSc7XG5cbi8qKlxuICogQ29tcG9uZW50c1xuICovXG5pbXBvcnQgJy4vY29tcG9uZW50cyc7XG5cbi8qKlxuICogSGFuZGxlcnNcbiAqL1xuaW1wb3J0ICcuL2hhbmRsZXJzJztcblxuLyoqXG4gKiBTdHlsZXNcbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuLyoqXG4gKiBNb2R1bGVzIGxvYWRlclxuICovXG5jb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcbmNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJ21vZHVsZXMnLCB0cnVlLCAvbW9kdWxlXFwuanMkLyk7XG5pZiAocGF0aFsxXS5sZW5ndGggPiAyKSB7XG4gICAgLyoqXG4gICAgICogVG8gY3JlYXRpbmcgZGlmZmVyZW50IGZpbGVzIGZvciBlYWNoIG1vZHVsZVxuICAgICAqIChEb24ndCBmb3JnZXQgbnBtIGkgLS1zYXZlLWRldiBidW5kbGUtbG9hZGVyKVxuICAgICAqIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJ2J1bmRsZS1sb2FkZXIhbW9kdWxlcycsIHRydWUsIC9pbmRleFxcLmpzJC8pO1xuICAgICAqL1xuICAgIGNvbnRleHQua2V5cygpLm1hcChtb2R1bGUgPT4ge1xuICAgICAgICBpZiAobW9kdWxlLnNwbGl0KCcvJylbMV0gPT09ICdzZXR0aW5ncycpIHtcbiAgICAgICAgICAgIGlmIChwYXRoWzJdICE9PSB1bmRlZmluZWQgJiYgbW9kdWxlLnNwbGl0KCcvJylbM10gPT09IHBhdGhbMl0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTU9EVUxFOicsIHBhdGhbMl0pO1xuICAgICAgICAgICAgICAgIGNvbnRleHQobW9kdWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2R1bGUuc3BsaXQoJy8nKVsxXSA9PT0gcGF0aFsxXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01PRFVMRTonLCBwYXRoWzFdKTtcbiAgICAgICAgICAgIGNvbnRleHQobW9kdWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhdGhbMV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb250ZXh0KCcuL2RlZmF1bHQvbW9kdWxlLmpzJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ01PRFVMRTogcHVibGljJyk7XG4gICAgY29udGV4dCgnLi9wdWJsaWMvbW9kdWxlLmpzJyk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCBzZWxmKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9ICQoJyMnICsgdGhpcy5kYXRhc2V0LnRlbXBsYXRlSWQpXG4gICAgICAgICAgICAuaHRtbCgpXG4gICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCh0aGlzLmRhdGFzZXQudGVtcGxhdGVQbGFjZWhvbGRlciwgXCJnXCIpLCBkYXRhLmF3YXJkX2lkKTtcblxuICAgICAgICBjdXJyZW50QnRuLnBhcmVudCgpLmFwcGVuZChlZGl0QnRuKTtcbiAgICAgICAgY3VycmVudEJ0bi5yZW1vdmUoKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIHNlbGYpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0biA9ICQoJyMnICsgdGhpcy5kYXRhc2V0LnRlbXBsYXRlSWQpLmh0bWwoKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcblxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZChjcmVhdGVCdG4pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0IGFmdGVyIHRoZSBtb2RhbCBvcGVuZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKEVWRU5UX05BTUUpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoRVZFTlRfTkFNRSwgKCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgY29udGFpbmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlldyBVUkwgaGlkZGVuIGlucHV0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBwcmV2aWV3VVJMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGRyb3B6b25lRWxlbWVudClcbiAgICAgICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxuICAgICAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgJCgnI3ByZXZpZXctdXJsJykudmFsKCcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcjcHJldmlldy11cmwnKS52YWwoJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdVUkwudmFsdWUgPSByZXNwb25zZS5maWxlX25hbWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHByZXZpZXdcbiAgICAgICAgICovXG4gICAgICAgIGlmIChwcmV2aWV3VVJMLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdVUkwudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LmZvbGRlciwgcHJldmlld1VSTC52YWx1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbiAgICB9KTtcbn1cblxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FjdGlvbi10eXBlL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanNcIixcblx0XCIuL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9hc3NldHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fzc2V0cy9tb2R1bGUuanNcIixcblx0XCIuL2F3YXJkL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hd2FyZC9tb2R1bGUuanNcIixcblx0XCIuL2Jhbm5lci9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYmFubmVyL21vZHVsZS5qc1wiLFxuXHRcIi4vY2VydC1zZXR1cC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY2VydC1zZXR1cC9tb2R1bGUuanNcIixcblx0XCIuL2NlcnQtdXNlcnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2NlcnQtdXNlcnMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jZXJ0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jZXJ0L21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLWFkcHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy1hZHBzL21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLXJvbGVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtcm9sZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLXVzZXJzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtdXNlcnMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jb2xsZWN0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vZGFpbHktbG9vdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGFpbHktbG9vdC9tb2R1bGUuanNcIixcblx0XCIuL2RlZmF1bHQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZXBsb3kvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanNcIixcblx0XCIuL2RwYS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHBhL21vZHVsZS5qc1wiLFxuXHRcIi4vZHllL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9keWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9maW5nZXJwcmludC1mb3JtL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9maW5nZXJwcmludC1mb3JtL21vZHVsZS5qc1wiLFxuXHRcIi4vZmluZ2VycHJpbnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2ZpbmdlcnByaW50L21vZHVsZS5qc1wiLFxuXHRcIi4vZ2lmdC13cmFwL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9naWZ0LXdyYXAvbW9kdWxlLmpzXCIsXG5cdFwiLi9ncm91cC1lZGl0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ncm91cC1lZGl0L21vZHVsZS5qc1wiLFxuXHRcIi4vZ3JvdXAtZXZlbnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2dyb3VwLWV2ZW50L21vZHVsZS5qc1wiLFxuXHRcIi4vZ3JvdXAvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2dyb3VwL21vZHVsZS5qc1wiLFxuXHRcIi4vbGV2ZWxzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9sZXZlbHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9sb2NhbGl6YXRpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWdpYy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanNcIixcblx0XCIuL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsL21vZHVsZS5qc1wiLFxuXHRcIi4vbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qc1wiLFxuXHRcIi4vbmxhLWFzc2V0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ubGEtYXNzZXQvbW9kdWxlLmpzXCIsXG5cdFwiLi9ubGEtY2F0ZWdvcnkvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25sYS1jYXRlZ29yeS9tb2R1bGUuanNcIixcblx0XCIuL25sYS1zZWN0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ubGEtc2VjdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL3Byb2R1Y3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9wdWJsaWMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3B1YmxpYy9tb2R1bGUuanNcIixcblx0XCIuL3NldHRpbmdzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGUuanNcIixcblx0XCIuL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGVzL2FpX2FuaW1hdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qc1wiLFxuXHRcIi4vc291bmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NvdW5kL21vZHVsZS5qc1wiLFxuXHRcIi4vc3BlY2lhbC1wcml6ZXMtZm9ybS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc3BlY2lhbC1wcml6ZXMtZm9ybS9tb2R1bGUuanNcIixcblx0XCIuL3NwZWNpYWwtcHJpemVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zcGVjaWFsLXByaXplcy9tb2R1bGUuanNcIixcblx0XCIuL3RhbWF0b29sL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy90YW1hdG9vbC9tb2R1bGUuanNcIixcblx0XCIuL3Ryb3BoaWVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy90cm9waGllcy9tb2R1bGUuanNcIixcblx0XCIuL3Ryb3BoeS1jdXAtdXNlcnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Ryb3BoeS1jdXAtdXNlcnMvbW9kdWxlLmpzXCIsXG5cdFwiLi91c2Vycy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdXNlcnMvbW9kdWxlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbW9kdWxlcyBzeW5jIHJlY3Vyc2l2ZSBtb2R1bGVcXFxcLmpzJFwiOyIsImV4cG9ydCBjb25zdCBBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCA9ICdBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCc7XG4iLCIvKipcbiAqIENvbGxhcHNlIHN0YXRlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5hY3Rpb24tdHlwZS1zdGF0ZScpO1xuICAgIHBhcmVudC50b2dnbGVDbGFzcygnZG93bicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBDb2xsYXBzZSBzdGF0ZXNcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJy5hY3Rpb24tdHlwZS1zdGF0ZScpLnRvZ2dsZUNsYXNzKCdkb3duJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIFN0YXRlIG9mIHRoZSBBY3Rpb24gVHlwZVxuICogYXQgdGhlIG1vZGFsXG4gKiB3aXRoIGNvbmZpcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50RWxlbWVudC5jbG9zZXN0KCcuYWN0aW9uLXR5cGUtc3RhdGUnKTtcblxuICAgIGlmICghY3VycmVudEVsZW1lbnQuZGF0YSgnaWQnKSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIoJ0FyZSB5b3Ugc3VyZT8nKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInLFxuICAgICAgICAgICAgJ3RleHQnOiAnRGVsZXRlJyxcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxuICAgICAgICAgICAgJ2NsaWNrJzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ldyBSZXF1ZXN0QnVpbGRlcihjdXJyZW50RWxlbWVudC5kYXRhKCd1cmwnKSlcbiAgICAgICAgICAgICAgICAgICAgLm1ldGhvZCgnREVMRVRFJylcbiAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3MoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUR9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBpbmRleGVzIG9mIHRoZSBzdGF0ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwgKCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAxO1xuXG4gICAgICAgICQoJy5pbmRleCcpLmVhY2goKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICQoaXRlbSkudmFsKGluZGV4KyspO1xuICAgICAgICB9KVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHVwZGF0ZUluZGV4ZXMgZnJvbSBcIi4vbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXNcIjtcbmltcG9ydCBjb2xsYXBzZVN0YXRlIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVcIjtcbmltcG9ydCBjb2xsYXBzZVN0YXRlcyBmcm9tIFwiLi9oYW5kbGVycy9jb2xsYXBzZVN0YXRlc1wiO1xuaW1wb3J0IHJlbW92ZUFjdGlvblR5cGVTdGF0ZSBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVBY3Rpb25UeXBlU3RhdGVcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbi8qKlxuICogVXBkYXRlIGluZGV4ZXNcbiAqL1xudXBkYXRlSW5kZXhlcygpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2Ugb25lIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29sbGFwc2UtbGluaycsIGNvbGxhcHNlU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZSBhbGwgc3RhdGVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1zdGF0ZXMnLCBjb2xsYXBzZVN0YXRlcylcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJtLWFjdGlvbi10eXBlLXN0YXRlcycsIHJlbW92ZUFjdGlvblR5cGVTdGF0ZSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGFubm91bmNlbWVudHMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2Fubm91bmNlbWVudHMgPiB0Ym9keScpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmFubl9pZCcpLnZhbCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjYW5ub3VuY2VtZW50c190ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8lYW5ub3VuY2VtZW50X2lkJS9nLCBpICsgaW5jcmVtZW50SWQpO1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBhbm5vdW5jZW1lbnRzIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKGF3YXJkID0gJycpIHtcbiAgICBjb25zdCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuYW5ub3VuY2VtZW50cy1zYXZlLXBhZ2UtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLlwiICsgYXdhcmQgKyBcImNoYW5nZWQgaW5wdXQsIC5cIiArIGF3YXJkICsgXCJjaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ3RyLicgKyBhd2FyZCArICdjaGFuZ2VkJykucmVtb3ZlQ2xhc3MoYXdhcmQgKyAnY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGFubm91bmNlbWVudHMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWQgZm9yIHNlbGVjdDJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJzpjaGVja2JveCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5hdHRyKFwiY2hlY2tlZFwiLCAhJCh0aGlzKS5hdHRyKFwiY2hlY2tlZFwiKSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBhbm5vdW5jZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnYXdhcmQtY2hhbmdlZCcpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlU3RhdGUoJ2F3YXJkLScpXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKCcuc2F2ZS1wYWdlJyk7XG5cbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdhd2FyZC1jaGFuZ2VkJyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCdpbnB1dFtuYW1lPVwiYXdhcmRfaWRcIl0nKS52YWwoMCk7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcywgc2F2ZUJ1dHRvbikoKTtcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVTdGF0ZSgnYXdhcmQtJylcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgYW5ub3VuY2VtZW50cyBwYWdlXG4gICAgICovXG4gICAgJCgnLnNhdmUtcGFnZScpLmNsaWNrKCgpID0+IHNhdmVTdGF0ZSgpKTtcbiIsIi8qKlxuICogU1VCX1RZUEVTIC0gaXQgaXMgYSBnbG9iYWwgb2JqZWN0XG4gKiBJbml0ZWQgaW4gYXNzZXQvZm9ybS5ibGFkZS5waHBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIHNldFN1YnR5cGVzKHRoaXMudmFsdWUsIHRoaXMuZGF0YXNldC5zdWJ0eXBlKTtcbn1cblxuY29uc3QgYXNzZXRGb3JtU3VidHlwZSA9ICQoXCIjc3VidHlwZVwiKTtcbmNvbnN0IGFzc2V0Rm9ybUFjdGlvblR5cGUgPSAkKCcjYXNzZXQtZm9ybS1hY3Rpb24tdHlwZScpO1xuY29uc3QgYXNzZXRGb3JtQ29sbGVjdGlvbiA9ICQoJyNhc3NldC1mb3JtLWNvbGxlY3Rpb24nKTtcbmNvbnN0IHByaWNlcyA9ICQoJy5wcmljZXMnKTtcblxuZnVuY3Rpb24gc2V0U3VidHlwZXModHlwZSwgc3VidHlwZSkge1xuICAgIGFzc2V0Rm9ybVN1YnR5cGVcbiAgICAgICAgLmVtcHR5KClcbiAgICAgICAgLnNlbGVjdDIoe1xuICAgICAgICAgICAgZGF0YTogU1VCX1RZUEVTW3R5cGVdXG4gICAgICAgIH0pXG4gICAgICAgIC52YWwoc3VidHlwZSlcbiAgICAgICAgLmNoYW5nZSgpO1xuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBzdGF0ZVxuICAgICAqL1xuICAgIGhpZGUoYXNzZXRGb3JtQWN0aW9uVHlwZSk7XG4gICAgaGlkZShhc3NldEZvcm1Db2xsZWN0aW9uKTtcbiAgICBzaG93KHByaWNlcyk7XG5cbiAgICBzd2l0Y2ggKHBhcnNlSW50KHR5cGUpKSB7XG5cbiAgICAgICAgLy8gRnVybml0dXJlXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHNob3coYXNzZXRGb3JtQWN0aW9uVHlwZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBDbG90aGVzXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHNob3coYXNzZXRGb3JtQ29sbGVjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBCb2R5IFBhcnRcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgaGlkZShwcmljZXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbn0iLCJpbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXG4gICAgICAgIC5zdWNjZXNzKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAkKCcjY29sbGVjdGlvbi1udW1iZXInKVxuICAgICAgICAgICAgICAgIC52YWwocmVzdWx0LmNvbGxlY3Rpb25faWQpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IHNhdmVBc3NldEJ0biA9IGN1cnJlbnRCdG4uY2xvc2VzdCgndHInKS5maW5kKCcuc2F2ZS1hc3NldCcpO1xuICAgICAgICBjb25zdCBlZGl0QnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZClcbiAgICAgICAgICAgIC5odG1sKClcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKHRoaXMuZGF0YXNldC50ZW1wbGF0ZVBsYWNlaG9sZGVyLCBcImdcIiksIGRhdGEuYXdhcmRfaWQpO1xuXG4gICAgICAgIGN1cnJlbnRCdG4ucGFyZW50KCkuYXBwZW5kKGVkaXRCdG4pO1xuICAgICAgICBjdXJyZW50QnRuLnJlbW92ZSgpO1xuXG4gICAgICAgIHNhdmVBc3NldEJ0bi5jbGljaygpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZCkuaHRtbCgpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kKGNyZWF0ZUJ0bik7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcIi4vbGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcIi4vbGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5pbXBvcnQgZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIgZnJvbSBcIi4vaGFuZGxlcnMvZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXJcIjtcblxuJCgnI2Fzc2V0cy10YWJsZScpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlJywgYXdhcmREZWxldGUpO1xuXG4kKCcjYXNzZXQtZm9ybS10eXBlJylcbiAgICAuY2hhbmdlKGNoYW5nZVR5cGUpXG4gICAgLmNoYW5nZSgpO1xuXG4kKCcjZ2V0LWxhc3QtY29sbGVjdGlvbi1udW1iZXInKS5jbGljayhnZXRMYXN0Q29sbGVjdGlvbk51bWJlcik7XG4iLCJleHBvcnQgY29uc3QgQVdBUkRfQ1JFQVRFID0gJ0FXQVJEX0NSRUFURSc7XG5leHBvcnQgY29uc3QgQVdBUkRfREVMRVRFID0gJ0FXQVJEX0RFTEVURSc7XG4iLCIvKipcbiAqIFNob3cgZm9ybSBldmVudFxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBCQU5ORVJfU0hPV19GT1JNID0gJ0JBTk5FUl9TSE9XX0ZPUk0nO1xuXG4vKipcbiAqIElkIG9mIHR5cGUncyBzZWxlY3RcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVFlQRV9TRUxFQ1RfSUQgPSAnYmFubmVyLXR5cGUnO1xuIiwiaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIENoYW5nZSB0eXBlIGhhbmRsZXJcbiAqIEhpZGUvc2hvdyBzb21lIGZpZWxkc1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoVFlQRV9TRUxFQ1RfSUQpO1xuXG4gICAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgICAgICQoJy5iYW5uZXItdHlwZScpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICQoJy5iYW5uZXItdHlwZS0nICsgc2VsZWN0ZWRFbGVtZW50LnZhbHVlKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7QkFOTkVSX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuLyoqXG4gKiBTaG93IGZvcm0gaGFuZGxlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgSW5pdFxuICAgICAqL1xuICAgIGRyb3Bab25lSW5pdChCQU5ORVJfU0hPV19GT1JNKTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgc2hvd0Zvcm0gbGlzdGVuZXJcbiAgICAgKi9cbiAgICBzaG93Rm9ybSgpO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QkFOTkVSX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4uL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcblxuLyoqXG4gKiBTaG93IGZvcm0gbGlzdGVuZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShCQU5ORVJfU0hPV19GT1JNLCAoKSA9PiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFR5cGUgc2VsZWN0IGNoYW5nZSB0cmlnZ2VyXG4gICAgICAgICAqL1xuICAgICAgICBjaGFuZ2VUeXBlKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERhdGVzIGluaXRcbiAgICAgICAgICovXG4gICAgICAgICQoJy5iYW5uZXItZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2hhbmRsZXJzL3Nob3dGb3JtXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5pbXBvcnQge1RZUEVfU0VMRUNUX0lEfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTaG93IGVkaXQgZm9ybSBvZiBhIGJhbm5lclxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soc2hvd0Zvcm0oKSk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdHlwZSBoYW5kbGVyXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnIycgKyBUWVBFX1NFTEVDVF9JRCwgY2hhbmdlVHlwZSk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFNhdmVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQYWdlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcjY2VydC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgY29uc3Qgcm93cyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWRcIik7XG5cbiAgICBpZighZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzZW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZm9ybUl0ZW1zKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKXtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3dzLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVQYWdlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCJtb2R1bGVzL2Ntcy1yb2xlcy9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YVxuICovXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZVBhZ2UpO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuY2VydC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWRcIik7XG5jb25zb2xlLmxvZyhmb3JtSXRlbXMpO1xuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcbmltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwibW9kdWxlcy9jbXMtcm9sZXMvaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbi8qKlxuICogU2F2ZSB0aGUgcm93XG4gKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBGaW5kIFVzZXJcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRVc2VyKCkge1xuICAgIGNvbnN0IHByZWZpeCA9ICQodGhpcykuZGF0YSgncHJlZml4Jyk7XG4gICAgY29uc3QgZGF0YSA9IHt1aWQ6ICQoJyMnICsgcHJlZml4KS52YWwoKSwgbmFtZTogJCgnIycgKyBwcmVmaXggKyAnX25hbWUnKS52YWwoKSwgcHJlZml4OiBwcmVmaXh9O1xuICAgIGNvbnN0IHVzZXJfdGVtcGxhdGUgPSAkKCcjdXNlcl90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBpbnNlcnRfYmxvY2sgPSAkKCcjJyArIHByZWZpeCArICdfbGlzdCcpO1xuICAgIGlmICghZGF0YS51aWQubGVuZ3RoICYmICFkYXRhLm5hbWUubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIGZpbmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAkKHJlc3BvbnNlLnVzZXJzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suY2xvc2VzdCgndGFibGUnKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5hcHBlbmQodXNlcl90ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyV1c2VyX2lkJS9nLCBpdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVwZXRfbmFtZSUnLCBpdGVtLnBldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcldXNlcl9uYW1lJScsIGl0ZW0uZmlyc3RfbmFtZSArICcgJyArIGl0ZW0ubGFzdF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVsZXZlbCUnLCBpdGVtLnhwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVhdmF0YXIlJywgaXRlbS5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJXRhcmdldCUvZywgcHJlZml4KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogU2VuZCBHaWZ0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kQ2VydCAoKSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNzZW5kJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9LCAzMDAwKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNjZXJ0LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCJpbnB1dCwgdGV4dGFyZWFcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuXG4gICAgaWYoIWZvcm1JdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2VuZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGZvcm1JdGVtcylcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZighIXJlc3BvbnNlLmVycm9ycyl7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHJvcGh5X2N1cHNfY291bnQgPSAkKCcjY2VydF9jdXBzX2NvdW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRyb3BoeV9jdXBzX2NvdW50LnRleHQocGFyc2VJbnQodHJvcGh5X2N1cHNfY291bnQudGV4dCgpKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAkKCcudGFibGUnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNjZXJ0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhJykudmFsKCcnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9sZW5ndGggPSAkKCcjbmV3c19tZXNzYWdlX2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2xlbmd0aC50ZXh0KG1lc3NhZ2VfbGVuZ3RoLmRhdGEoJ2xlbmd0aCcpKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZV9sZW5ndGggPSAkKCcjbmFtZV9sZW5ndGgnKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZV9sZW5ndGgudGV4dChuYW1lX2xlbmd0aC5kYXRhKCdsZW5ndGgnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50X2xlbmd0aCA9ICQoJyNldmVudF9sZW5ndGgnKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRfbGVuZ3RoLnRleHQoZXZlbnRfbGVuZ3RoLmRhdGEoJ2xlbmd0aCcpKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdXBfbGVuZ3RoID0gJCgnI2dyb3VwX2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBncm91cF9sZW5ndGgudGV4dChncm91cF9sZW5ndGguZGF0YSgnbGVuZ3RoJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2VuZENlcnR9IGZyb20gXCIuL2hhbmRsZXJzL3NlbmRDZXJ0XCI7XG5pbXBvcnQge2ZpbmRVc2VyfSBmcm9tIFwiLi9oYW5kbGVycy9maW5kVXNlclwiO1xuaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCJtb2R1bGVzL2Ntcy1yb2xlcy9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2ZpbmRfc2VuZGVyLCAjZmluZF9yZWNlaXZlcicsIGZpbmRVc2VyKVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjc2VuZCcsIHNlbmRDZXJ0KVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCBjZXJ0XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjYXNzZXRzX2xpc3QgaW1nJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjYXNzZXRzX2xpc3QnKS5maW5kKCdpbWcnKS5jc3MoJ2JvcmRlcicsICcnKTtcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlcicsICczcHggc29saWQgIzVjNWM1YycpO1xuICAgICAgICAkKCcjYXNzZXRfaWQnKS52YWwoJCh0aGlzKS5kYXRhKCdjZXJ0JykpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHNlbGVjdGVkIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnRhYmxlIHRyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAkKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0JykgKyAnX3VpZCcpLnZhbCgkKHRoaXMpLmRhdGEoJ3VpZCcpKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbGltaXQgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQsIHRleHRhcmVhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5yZXBsYWNlKCdjZXJ0X2RhdGFbJywgJycpLnJlcGxhY2UoJ10nLCAnJykgKyAnX2xlbmd0aCc7XG4gICAgICAgICQoJyMnICsgdGFyZ2V0KS50ZXh0KCQodGhpcykuZGF0YSgnbWF4bGVuZ3RoJykgLSAkKHRoaXMpLnZhbCgpLmxlbmd0aCk7XG4gICAgfSlcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50ZXJlZCBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjY2FuY2VsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcudGFibGUnKS5oaWRlKCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEnKS52YWwoJycpXG4gICAgfSk7XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYWRwIGlkcyB0byBjbGlwYm9hcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBZHAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZHBJZHNGaWVsZCA9ICQoJ2lucHV0W25hbWU9XCJhZHBfaWRzXCJdJyk7XG4gICAgbGV0IGFkcElkcyA9IFtdO1xuXG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBhZHBJZHMucHVzaCgkKGl0ZW0pLmRhdGEoJ2lkJykpXG4gICAgfSk7XG5cbiAgICBhZHBJZHNGaWVsZC52YWwoYWRwSWRzKTtcbiAgICBhZHBJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgLy8gYWRwSWRzRmllbGQudmFsKFtdKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY29weSBhc3NldHMgaWRzIHRvIGNsaXBib2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUFzc2V0cyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYXNzZXRJZHNGaWVsZCA9ICQoJ2lucHV0W25hbWU9XCJhc3NldF9pZHNcIl0nKTtcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcblxuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgYXNzZXRJZHMucHVzaCgkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJykpXG4gICAgfSk7XG5cbiAgICBhc3NldElkc0ZpZWxkLnZhbChhc3NldElkcyk7XG4gICAgYXNzZXRJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgYXJjaGl2ZSBjYXRlZ29yaWVzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQXJjaGl2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnNob3ctYXJjaGl2ZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuYXJjaGl2ZS1jYXRlZ29yaWVzLWxpc3QnKS5odG1sKCcnKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiB0YXNrcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGlkZVRhc2tzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuc2hvdy10YXNrcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcudGFza3MtbGlzdCcpLmhpZGUoJ3Nsb3cnKTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FyY2hpdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5oaWRlLWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgXG4gICAgbGV0IGFjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKTtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5hcmNoaXZlLWNhdGVnb3JpZXMtbGlzdCcpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgXG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgdGFza3Mgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmhpZGUtdGFza3MnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnRhc2tzLWxpc3QnKS5zaG93KCdzbG93Jyk7XG59XG4iLCIvL2ltcG9ydCB7YnVuZGxlVmVyc2lvblNlbGVjdH0gZnJvbSBcIi4vaGFuZGxlcnMvYnVuZGxlVmVyc2lvblNlbGVjdFwiO1xuaW1wb3J0IHtzaG93QXJjaGl2ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0FyY2hpdmVcIjtcbmltcG9ydCB7aGlkZUFyY2hpdmV9IGZyb20gXCIuL2hhbmRsZXJzL2hpZGVBcmNoaXZlXCI7XG5pbXBvcnQge2hpZGVUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZVRhc2tzXCI7XG5pbXBvcnQge3Nob3dUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd1Rhc2tzXCI7XG5pbXBvcnQge2NvcHlBZHB9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBZHBcIjtcbmltcG9ydCB7Y29weUFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFzc2V0c1wiO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIFNob3cgYXJjaGl2ZSBhZHAgY2F0ZWdvcmllc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNob3ctYXJjaGl2ZScsIHNob3dBcmNoaXZlKVxuICAgIC8qKlxuICAgICAqIEhpZGUgYXJjaGl2ZSBhZHAgY2F0ZWdvcmllc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtYXJjaGl2ZScsIGhpZGVBcmNoaXZlKVxuICAgIC8qKlxuICAgICAqIEhpZGUgYWRwIHRhc2tzIGJ5IHN0YXR1cyBhbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtdGFza3MnLCBoaWRlVGFza3MpXG4gICAgLyoqXG4gICAgICogU2hvdyBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy10YXNrcycsIHNob3dUYXNrcylcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFkcCcsIGNvcHlBZHApXG4gICAgLyoqXG4gICAgICogU2hvdyBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weS1hc3NldHMnLCBjb3B5QXNzZXRzKTtcbiAgICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKTtcblxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJzb3IgdG8gcGFyZW50IG5vZGVcbiAgICAgKi9cbiAgICAub24oJ21vdXNlZW50ZXInLCAndGQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGRlcGxveSBpbmZvXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9ICQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKHdyYXBwZXIgJiYgd3JhcHBlci5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpO1xuXG4iLCJleHBvcnQgY29uc3QgQ09MTEVDVElPTl9TSE9XX0ZPUk0gPSAnQ09MTEVDVElPTl9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuY29uc3QgYXNzZXRQcmV2aWV3VGVtcGxhdGUgPSAkKCcjYXNzZXQtcHJldmlldy10ZW1wbGF0ZScpLmh0bWwoKTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5oYXNDbGFzcygnYXNzZXQtaWQnKSAmJiAhIXJlc3BvbnNlLmFzc2V0c1tjdXJyZW50SXRlbS52YWwoKV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFzc2V0ID0gcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuc2xvdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmFzc2V0LXByZXZpZXcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoYXNzZXRQcmV2aWV3VGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXVybCUnLCBcImdcIiksIGN1cnJlbnRBc3NldC5wcmV2aWV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXRpdGxlJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0Lm5hbWUpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKCcuYWRkaXRpb25hbC1kYXRhJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogTWFyayBpbnB1dCBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIG5ldyBTb3J0YWJsZShfdGhpcywge1xuICAgICAgICBncm91cDogX3RoaXMuZGF0YXNldC5ncm91cCxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5maW5kKF90aGlzLmRhdGFzZXQucG9zaXRpb24pLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnZhbChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge0NPTExFQ1RJT05fU0hPV19GT1JNfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xuaW1wb3J0IG1hcmtJbnB1dEFzQ2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9tYXJrSW5wdXRBc0NoYW5nZWRcIjtcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XG5pbXBvcnQgaGlkZUFkZGl0aW9uYWxSb3dzIGZyb20gXCIuL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93c1wiO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChDT0xMRUNUSU9OX1NIT1dfRk9STSkpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBjb2xsZWN0aW9uXG4gKi9cbiQoJy5jb2xsZWN0aW9uLWZhc3Qtc2F2ZScpLmNsaWNrKGZhc3RTYXZlKTtcblxuLyoqXG4gKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXG4gKi9cbiQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXQnKS5jaGFuZ2UobWFya0lucHV0QXNDaGFuZ2VkKTtcblxuLyoqXG4gKiBTb3J0YWJsZSBpbml0XG4gKi9cbiQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcblxuLyoqXG4gKiBIaWRlIGFkZGl0aW9uYWwgcm93c1xuICovXG4kKCcuaGlkZS1zbG90cycpLmNsaWNrKGhpZGVBZGRpdGlvbmFsUm93cyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNkYWlseV9sb290ID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZGFpbHlfbG9vdF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBsZXQgbGFzdElEUyA9IFtdO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IDE7XG4gICAgdGJvZHkuZmluZChcInRyXCIpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgaWYocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKXtcbiAgICAgICAgICAgIGxhc3RJRFMucHVzaChwYXJzZUludCgkKGl0ZW0pLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihsYXN0SURTLmxlbmd0aCl7XG4gICAgICAgIGluY3JlbWVudElkID0gKE1hdGgubWF4LmFwcGx5KE1hdGgsbGFzdElEUykgKyAxKSB8fCAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVyb3dJbmRleCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbChpICsgaW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmZpbmQoJy5kYXRlcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuZGFpbHktbG9vdC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ3RyLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFN3aXRjaCBwYWdlIHR5cGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50b2dnbGUtcGFnZS10eXBlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMCwgbG9jYXRpb24ucGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSkgKyAkKHRoaXMpLmRhdGEoJ2hyZWYnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcjY29tbW9uLW1lbnUnKS5maW5kKCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmKCQodGhpcykuZmluZCgnbGknKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiXG4vKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZGlyZWN0aW9uPVwiICsgZGlyZWN0aW9uO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgaWQ6ICdkZXBsb3knXG4gICAgfSwgJ0RlcGxveScsIHVybCk7XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQgZmFzdFNhdmVQYWdlIGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG4gICAgLyoqXG4gICAgICogU2F2ZSBhbGwgcGFnZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScsIGZhc3RTYXZlUGFnZSkiLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxldmVscyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHBhID4gdGJvZHknKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5kcGFfaWQnKS52YWwoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyNkcGFfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWRwYV9pZCUvZywgaSArIGluY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRHBhU3RhdGUgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgbGV0IGRhdGEgPSAkKCcuZHBhLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVEcGFTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZURwYVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgZHBhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRwYS1zYXZlLXBhZ2UnLCBzYXZlRHBhU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2R5ZSA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2R5ZV90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcblxuICAgICAgICBsZXQgbGFzdFJvdyA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmNwMicpO1xuICAgICAgICBsYXN0Um93LmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAkKGl0ZW0pLmNvbG9ycGlja2VyKHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIENoYW5nZSByb3cgaW5kZXhcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJvd0luZGV4KCkge1xuICAgIGxldCByb3dJbmRleCA9ICQodGhpcykudmFsKCk7XG4gICAgbGV0IHJvdyA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCdpbnB1dCwgc2VsZWN0Jyk7XG5cbiAgICByb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgbGV0IG9sZE5hbWUgPSAkKGl0ZW0pLmF0dHIoJ25hbWUnKTtcbiAgICAgICAgbGV0IG5ld05hbWUgPSBvbGROYW1lLnNsaWNlKDAsIDQpICsgcm93SW5kZXggKyAgb2xkTmFtZS5zbGljZShvbGROYW1lLmluZGV4T2YoJ10nKSk7XG4gICAgICAgICQoaXRlbSkuYXR0cignbmFtZScsIG5ld05hbWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IERZRV9DT05UQUlORVJfU0VMRUNUT1IgPSAnLmR5ZS1zYXZlLXBhZ2UtY29udGFpbmVyJztcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBkeWVzIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUik7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTWFyayBmb3JtJ3MgdHIgYXMgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWRUcigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7Y2hhbmdlUm93SW5kZXh9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4XCI7XG5pbXBvcnQgZHllU2F2ZVBhZ2UsIHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SLCBtYXJrQ2hhbmdlZFRyfSBmcm9tIFwiLi9oYW5kbGVycy9keWVTYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjb2xvci1waWNrZXIgaW5wdXRzXG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuY3AyJykuY29sb3JwaWNrZXIoKVxuICAgICAgICAgICAgLm9uKCdjcmVhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBNYXJrIHRyIGFzIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgYCR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWRUcilcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdpbnB1dCcsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHJvdyBpbmRleFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFzc2V0X2lkJywgY2hhbmdlUm93SW5kZXgpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICAgICAqL1xuICAgICQoJy5keWUtc2F2ZS1wYWdlJykuY2xpY2soZHllU2F2ZVBhZ2UpO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVGaW5nZXJwcmludChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IFdlYkdMRmluZ2VyUHJpbnQgPVxuICAgICAgICB7XG4gICAgICAgICAgICAkZGVmYXVsdFZhcnM6IFtdLFxuXG4gICAgICAgICAgICBGaW5kRmluZ2VyUHJpbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZVNjcmVlblJlc29sdXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhdGVEZXZpY2VzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9Ob3RUcmFjazogdHJ1ZSxcbi8vIHVzZXJBZ2VudDogdHJ1ZSxcbi8vIGxhbmd1YWdlOiB0cnVlLFxuLy8gYXVkaW86IHRydWUsXG4vLyBmb250czogdHJ1ZSxcbi8vIHdlYmRyaXZlcjogdHJ1ZSxcbi8vIHNlc3Npb25TdG9yYWdlOiB0cnVlLFxuLy8gbG9jYWxTdG9yYWdlOiB0cnVlLFxuLy8gaW5kZXhlZERiOiB0cnVlLFxuLy8gcGx1Z2luczogdHJ1ZSxcbi8vIGFkQmxvY2s6IHRydWUsXG4vLyBmb250c0ZsYXNoOiB0cnVlLFxuLy8gb3BlbkRhdGFiYXNlOiB0cnVlLFxuLy8gY2FudmFzOiB0cnVlLFxuLy8gd2ViZ2w6IHRydWUsXG4vLyBkZXZpY2VNZW1vcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBmaW5nZXJwcmludDtcblxuICAgICAgICAgICAgICAgIGxldCBmaW5nZXJQcmludEhhbmRsZXIgPSBmdW5jdGlvbiAoY29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGNvbXBvbmVudHMubWFwKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQua2V5ICsgJzogJyArIGNvbXBvbmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5nZXJwcmludCA9IEZpbmdlcnByaW50Mi54NjRoYXNoMTI4KHZhbHVlcy5qb2luKCcnKSwgMzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFByb21pc2UoZmluZ2VycHJpbnQsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkpTMSBmaW5nZXIgcHJpbnQgXCIgKyBmaW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlMyIGZpbmdlciBlcnJvciBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRmluZ2VycHJpbnQyLmdldChvcHRpb25zLCBmaW5nZXJQcmludEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmdlcnByaW50Mi5nZXQob3B0aW9ucywgZmluZ2VyUHJpbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7IC8vd2FzIHRpbWUgb3V0IDUwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkpTMyBmaW5nZXIgcHJpbnQgd2FpdCBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIFdlYkdMRmluZ2VyUHJpbnQuRmluZEZpbmdlclByaW50KCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNlbmRQcm9taXNlKGZpbmdlcnByaW50LCB2YWx1ZXMpIHtcbiAgICBjb25zdCBjb21tZW50ID0gJCgnI2NvbW1lbnQnKS52YWwoKTtcbiAgICBjb25zdCBuYW1lID0gJCgnI25hbWUnKS52YWwoKTtcbiAgICBpZiAobmFtZS5sZW5ndGggJiYgZmluZ2VycHJpbnQubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHtuYW1lOiBuYW1lLCBjb21tZW50OiBjb21tZW50LCBmaW5nZXJwcmludDogZmluZ2VycHJpbnQsIHZhbHVlczogdmFsdWVzfSk7XG4gICAgICAgIG5ldyBodHRwKCQoJyNmaW5nZXJwcmludCcpLmF0dHIoJ2FjdGlvbicpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7bmFtZTogbmFtZSwgY29tbWVudDogY29tbWVudCwgZmluZ2VycHJpbnQ6IGZpbmdlcnByaW50LCB2YWx1ZXM6IHZhbHVlc30pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2ZpbmdlcnByaW50JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBub3RpZnlTdWNjZXNzKCdGaW5nZXJwcmludCBzYXZlZCcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge3NhdmVGaW5nZXJwcmludH0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZUZpbmdlcnByaW50XCI7XG5cbiQoZG9jdW1lbnQpXG5cbi8qKlxuICogU2V0IGN1cnNvciB0byBwYXJlbnQgbm9kZVxuICovXG4gICAgLm9uKCdtb3VzZWVudGVyJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICdwb2ludGVyJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBkZXBsb3kgaW5mb1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAndGQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSAkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpO1xuXG4gICAgICAgIGlmICh3cmFwcGVyICYmIHdyYXBwZXIuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdvcGVuJylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBGb3JtIHN1Ym1pdFxuICAgICAqL1xuICAgIC5vbignc3VibWl0JywgJyNmaW5nZXJwcmludCcsIHNhdmVGaW5nZXJwcmludCk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUZpbmdlcnByaW50KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgV2ViR0xGaW5nZXJQcmludCA9XG4gICAgICAgIHtcbiAgICAgICAgICAgICRkZWZhdWx0VmFyczogW10sXG5cbiAgICAgICAgICAgIEZpbmRGaW5nZXJQcmludDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBleGNsdWRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlU2NyZWVuUmVzb2x1dGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmF0ZURldmljZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb05vdFRyYWNrOiB0cnVlLFxuLy8gdXNlckFnZW50OiB0cnVlLFxuLy8gbGFuZ3VhZ2U6IHRydWUsXG4vLyBhdWRpbzogdHJ1ZSxcbi8vIGZvbnRzOiB0cnVlLFxuLy8gd2ViZHJpdmVyOiB0cnVlLFxuLy8gc2Vzc2lvblN0b3JhZ2U6IHRydWUsXG4vLyBsb2NhbFN0b3JhZ2U6IHRydWUsXG4vLyBpbmRleGVkRGI6IHRydWUsXG4vLyBwbHVnaW5zOiB0cnVlLFxuLy8gYWRCbG9jazogdHJ1ZSxcbi8vIGZvbnRzRmxhc2g6IHRydWUsXG4vLyBvcGVuRGF0YWJhc2U6IHRydWUsXG4vLyBjYW52YXM6IHRydWUsXG4vLyB3ZWJnbDogdHJ1ZSxcbi8vIGRldmljZU1lbW9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGZpbmdlcnByaW50O1xuXG4gICAgICAgICAgICAgICAgbGV0IGZpbmdlclByaW50SGFuZGxlciA9IGZ1bmN0aW9uIChjb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gY29tcG9uZW50cy5tYXAoZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5rZXkgKyAnOiAnICsgY29tcG9uZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50ID0gRmluZ2VycHJpbnQyLng2NGhhc2gxMjgodmFsdWVzLmpvaW4oJycpLCAzMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kUHJvbWlzZShmaW5nZXJwcmludCwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlMxIGZpbmdlciBwcmludCBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJKUzIgZmluZ2VyIGVycm9yIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5nZXJwcmludDIuZ2V0KG9wdGlvbnMsIGZpbmdlclByaW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRmluZ2VycHJpbnQyLmdldChvcHRpb25zLCBmaW5nZXJQcmludEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTsgLy93YXMgdGltZSBvdXQgNTAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlMzIGZpbmdlciBwcmludCB3YWl0IFwiICsgZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgV2ViR0xGaW5nZXJQcmludC5GaW5kRmluZ2VyUHJpbnQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VuZFByb21pc2UoZmluZ2VycHJpbnQsIHZhbHVlcykge1xuICAgIGNvbnN0IGNvbW1lbnQgPSAkKCcjY29tbWVudCcpLnZhbCgpO1xuICAgIGNvbnN0IG5hbWUgPSAkKCcjbmFtZScpLnZhbCgpO1xuXG4gICAgaWYgKG5hbWUubGVuZ3RoICYmIGZpbmdlcnByaW50Lmxlbmd0aCkge1xuICAgICAgICBuZXcgaHR0cCgkKCcjZmluZ2VycHJpbnQnKS5hdHRyKCdhY3Rpb24nKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe25hbWU6IG5hbWUsIGNvbW1lbnQ6IGNvbW1lbnQsIGZpbmdlcnByaW50OiBmaW5nZXJwcmludCwgdmFsdWVzOiB2YWx1ZXN9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtzYXZlRmluZ2VycHJpbnR9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVGaW5nZXJwcmludFwiO1xuXG4kKGRvY3VtZW50KVxuXG4vKipcbiAqIFNldCBjdXJzb3IgdG8gcGFyZW50IG5vZGVcbiAqL1xuICAgIC5vbignbW91c2VlbnRlcicsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gZGVwbG95IGluZm9cbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKTtcblxuICAgICAgICBpZiAod3JhcHBlciAmJiB3cmFwcGVyLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnb3BlbicpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRm9ybSBzdWJtaXRcbiAgICAgKi9cbiAgICAub24oJ3N1Ym1pdCcsICcjZmluZ2VycHJpbnQnLCBzYXZlRmluZ2VycHJpbnQpO1xuIiwiZXhwb3J0IGNvbnN0IEdJRlRfV1JBUF9ST1dfQURERUQgPSAnR0lGVF9XUkFQX1JPV19BRERFRCc7XG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5cbi8qKlxuICogQXNzZXQgSUQgY2hhbmdlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudElucHV0ID0gJCh0aGlzKTtcbiAgICBjb25zdCBhc3NldElEID0gY3VycmVudElucHV0LnZhbCgpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRJbnB1dC5jbG9zZXN0KCd0cicpO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBhc3NldHMgaWRzXG4gICAgICovXG4gICAgY29uc3QgY3VycmVudEFzc2V0RHVwbGljYXRlID0gJCgnI2dpZnQtd3JhcHMtY29udGFpbmVyJykuZmluZCgnLmFzc2V0LWlkJykuZmlsdGVyKChfLCBpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBhc3NldElEID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGN1cnJlbnRBc3NldER1cGxpY2F0ZS5sZW5ndGggPiAxKXtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUgYXNzZXQgJyArIGFzc2V0SUR9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBpbnB1dHMgbmFtZXNcbiAgICAgKi9cbiAgICBwYXJlbnQuZmluZCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLnJlcGxhY2UoIC9cXFtbXFxkXStcXF0vZywgYFske2Fzc2V0SUR9XWApO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGhyZWYgb2YgdGhlIGRlbGV0ZSBidXR0b25cbiAgICAgKi9cbiAgICBwYXJlbnQuZmluZCgnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaHJlZiA9IHRoaXMuaHJlZi5yZXBsYWNlKCAvXFwvW1xcZF0rJC9nLCBgLyR7YXNzZXRJRH1gKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IHBvc2l0aW9uVXBkYXRlIGZyb20gXCIuLi9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlXCI7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHt9O1xuICAgICAgICAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhc3NldHNbdGhpcy52YWx1ZV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFzc2V0c1t0aGlzLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgZXJyLm1lc3NhZ2V9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBvc2l0aW9uIHVwZGF0ZVxuICAgICAqL1xuICAgIHBvc2l0aW9uVXBkYXRlKCk7XG5cbiAgICBmYXN0U2F2ZVBhZ2UuYmluZCh0aGlzKShlKTtcbn1cbiIsImltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcImhhbmRsZXJzL2NvbmZpcm1Nb2RhbFwiO1xuXG4vKipcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBidXR0b25VcmwgPSB0aGlzLmhyZWYuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAocGFyc2VJbnQoYnV0dG9uVXJsW2J1dHRvblVybC5sZW5ndGggLSAxXSkgPT09IDApIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uZmlybU1vZGFsLmJpbmQodGhpcykoZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIm1vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwb3NpdGlvblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIFBvc2l0aW9uIHVwZGF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBvc2l0aW9uJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xuICAgICAgICBpZiAocGFyc2VJbnQocG9zaXRpb24udmFsKCkpICE9PSBpbmRleCkge1xuICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4KTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtHSUZUX1dSQVBfUk9XX0FEREVEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQWRkIG5ldyByb3cgdG8gZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEdJRlRfV1JBUF9ST1dfQURERUQsIGRhdGEgPT4ge1xuICAgICAgICAkKCcjZ2lmdC13cmFwLScgKyBkYXRhLmVtYmVkQmxvY2tJZClcbiAgICAgICAgICAgIC5maW5kKCcuZGF0ZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBhc3NldENoYW5nZWQgZnJvbSBcIi4vaGFuZGxlcnMvYXNzZXRDaGFuZ2VkXCI7XG5pbXBvcnQgYWRkUm93IGZyb20gXCIuL2xpc3RlbmVycy9hZGRSb3dcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgcmVtb3ZlUm93IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGFzc2V0IGlkIGluIGlucHV0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0LWlkJywgYXNzZXRDaGFuZ2VkKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJywgcmVtb3ZlUm93KTtcblxuLyoqXG4gKiBBZGQgcm93IGxpc3RlbmVyXG4gKi9cbmFkZFJvdygpO1xuXG4vKipcbiAqIFNvcnRhYmxlIGluaXRcbiAqL1xuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4vKipcbiAqIFNhdmUgYWxsIHBhZ2VcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBTdG9yZSBVc2VyXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZG1pblN0b3JlKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX2lkID0gJCgnI3NlbmRlcl9saXN0JykuZmluZCgnW25hbWU9XCJ1c2VyX3NlbmRlclwiXTpjaGVja2VkJykuY2xvc2VzdCgndHInKS5kYXRhKCd1aWQnKTtcblxuICAgIGlmICghc2VsZWN0ZWRfaWQpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gZmluZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHt1aWQ6IHNlbGVjdGVkX2lkfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBGaW5kIFVzZXJcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRVc2VyKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7dWlkOiAkKCcjc2VuZGVyJykudmFsKCksIG5hbWU6ICQoJyNzZW5kZXJfbmFtZScpLnZhbCgpfTtcbiAgICBjb25zdCB1c2VyX3RlbXBsYXRlID0gJCgnI3VzZXJfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgaW5zZXJ0X2Jsb2NrID0gJCgnI3NlbmRlcl9saXN0Jyk7XG5cbiAgICBpZiAoIWRhdGEudWlkLmxlbmd0aCAmJiAhZGF0YS5uYW1lLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBmaW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgJChyZXNwb25zZS51c2VycykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmNsb3Nlc3QoJ3RhYmxlJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS10YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suYXBwZW5kKHVzZXJfdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8ldXNlcl9pZCUvZywgaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclYXZhdGFyJScsIGl0ZW0uYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVwZXRfbmFtZSUnLCBpdGVtLnBldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcldXNlcl9uYW1lJScsIGl0ZW0uZmlyc3RfbmFtZSArICcgJyArIGl0ZW0ubGFzdF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVsZXZlbCUnLCBpdGVtLnhwKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogQ2hhbmdlIG1haW4gYWRtaW5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldE1haW4oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpc19tYWluID0gJCgnI2dyb3VwLXVzZXJzJykuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKS5kYXRhKCdpZCcpO1xuXG4gICAgaWYgKCFpc19tYWluKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKHttYWluX2lkOiBpc19tYWlufSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQge2ZpbmRVc2VyfSBmcm9tIFwibW9kdWxlcy9ncm91cC1lZGl0L2hhbmRsZXJzL2ZpbmRVc2VyXCI7XG5pbXBvcnQge2FkbWluU3RvcmV9IGZyb20gXCJtb2R1bGVzL2dyb3VwLWVkaXQvaGFuZGxlcnMvYWRtaW5TdG9yZVwiO1xuaW1wb3J0IHtzZXRNYWlufSBmcm9tIFwibW9kdWxlcy9ncm91cC1lZGl0L2hhbmRsZXJzL3NldE1haW5cIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2ZpbmRfc2VuZGVyLCAjZmluZF9yZWNlaXZlcicsIGZpbmRVc2VyKVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50YWJsZSB0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgJCgnI3NlbmRlcl91aWQnKS52YWwoJCh0aGlzKS5kYXRhKCd1aWQnKSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU3RvcmUgdXNlciB0byBncm91cFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI3N0b3JlJywgYWRtaW5TdG9yZSlcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtYWluIGFkbWluXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNldE1haW4pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCd0Ym9keS5ncm91cC1ldmVudC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IGxhc3RJRFMgPSBbXTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xuICAgIHRib2R5LmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGxhc3RJRFMucHVzaCgkKGl0ZW0pLmRhdGEoJ2lkJykpO1xuICAgIH0pO1xuXG4gICAgaWYobGFzdElEUy5sZW5ndGgpe1xuICAgICAgICBpbmNyZW1lbnRJZCA9IChNYXRoLm1heC5hcHBseShNYXRoLGxhc3RJRFMpICsgMSkgfHwgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyN0ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8laWQlL2csIGkgKyBpbmNyZW1lbnRJZCk7XG4gICAgICAgIHRib2R5LnByZXBlbmQodHJMYXN0KTtcbiAgICAgICAgJCgnLmRhdGUtZmllbGQnKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5ncm91cC1ldmVudC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCB0ZXh0YXJlYVwiKTtcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkXCIpO1xuXG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLmRhdGUtZmllbGRcIikuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlIGtleXVwIHBhc3RlJywgJ3RleHRhcmVhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2F2ZS1wYWdlJywgc2F2ZVN0YXRlKTtcblxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENvcHkgaWRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKS5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxldmVscyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGxldCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGxldCB0Ym9keSA9ICQoJyNsZXZlbHMgPiB0Ym9keScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0W25hbWU9XCJpZFwiXScpLnZhbCgpO1xuICAgICAgICBsZXQgaW5jcmVtZW50SWQgPSBwYXJzZUludChsYXN0SUQpIHx8IDA7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjbGV2ZWxfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWxldmVsX2lkJS9nLCArK2luY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbGV2ZWxzIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTGV2ZWxTdGF0ZSAoKSB7XG4gICAgbGV0IHJvd1RvU2F2ZSA9ICQodGhpcykucGFyZW50cygndHInKTtcbiAgICBsZXQgcm93ID0gcm93VG9TYXZlLmZpbmQoXCIuZWRpdGFibGUgc2VsZWN0LCAuZWRpdGFibGUgaW5wdXRcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIG5ldyBodHRwKHJvd1RvU2F2ZS5kYXRhKCdhY3Rpb24nKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEocm93KVxuICAgICAgICAuc2VuZCgpO1xufVxuIiwiaW1wb3J0IHtzYXZlTGV2ZWxTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZUxldmVsU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIGxldmVsXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJy51cGRhdGUtcm93Jyk7XG5cbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJy51cGRhdGUtcm93Jyk7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcywgc2F2ZUJ1dHRvbikoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbGV2ZWxzIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTGV2ZWxTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc2hvdyBhc3NldFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Fzc2V0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCBhY3Rpb24gPSBTV09XX0FTU0VUX1JPVVRFICsgJz9pZD0nICsgY3VycmVudEVsZW1lbnQudmFsKCk7XG4gICAgbmV3IGh0dHAoYWN0aW9uKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKSB7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LW5hbWUnKS5odG1sKHJlc3BvbnNlLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ3ByZXZpZXdfdXJsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyBpbWcnKS5hdHRyKCdzcmMnLCByZXNwb25zZS5kYXRhLnByZXZpZXdfdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyAubGlzdC10aHVtYm5haWwnKS5kYXRhKCdmdWxsJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG4iLCJcbmltcG9ydCB7c2hvd0Fzc2V0fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXNzZXRcIjtcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBTaG93IGFzc2V0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0Jywgc2hvd0Fzc2V0KVxuXG4gICAgIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBsZXQgdGJvZHkgPSAkKCcjbG9jYWxpemF0aW9ucyA+IHRib2R5Jyk7XG4gICAgbGV0IHRlbXBsYXRlID0gJCgnI2xvY2FsaXphdGlvbl90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIHRib2R5LmFwcGVuZCh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFJlbW92ZSBub3Qgc2F2ZWQgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSb3coZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQodGhpcykucGFyZW50cygndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbG9jYWxpemF0aW9uIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxpemF0aW9uU3RhdGUgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJ3RyJyk7XG4gICAgY29uc3QgY3VycmVudEtleSA9IHBhcmVudC5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLnZhbCgpO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBrZXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7alF1ZXJ5fVxuICAgICAqL1xuICAgIGNvbnN0IGN1cnJlbnRLZXlEdXBsaWNhdGUgPSAkKCcjbG9jYWxpemF0aW9ucycpLmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykuZmlsdGVyKChfLCBpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBjdXJyZW50S2V5ID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuICAgIGlmIChjdXJyZW50S2V5RHVwbGljYXRlLmxlbmd0aCA+IDEpe1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBrZXkgJyArIGN1cnJlbnRLZXl9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBwYXJlbnQuZmluZCgnLmVkaXRhYmxlIGlucHV0Jykuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS5hdHRyKCdyZWFkb25seScsIHRydWUpO1xuXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVMb2NhbGl6YXRpb25TdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3JlbW92ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlUm93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsb2NhbGl6YXRpb25zIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jcmVhdGUtcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVMb2NhbGl6YXRpb25TdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLXJvdycsIHJlbW92ZVJvdyk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtYWdpYyA+IHRib2R5Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXRbbmFtZT1cImlkXCJdJykudmFsKCk7XG4gICAgICAgIGxldCBpbmNyZW1lbnRJZCA9IHBhcnNlSW50KGxhc3RJRCkgfHwgMDtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyNtYWdpY190ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8lbWFnaWNfaWQlL2csICsraW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1hZ2ljU3RhdGUgKCkge1xuICAgIGNvbnN0IGRhdGEgPSAkKCcubWFnaWMtc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIik7XG5cbiAgICBkYXRhLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgJChpdGVtKS5hdHRyKCdyZWFkb25seScsIHRydWUpXG4gICAgfSk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCkge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlTWFnaWNTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZU1hZ2ljU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTWFnaWNTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBTaG93IGxhc3QgbWFrZXVwIGtpdCBJRFxuICpcbiAqIEBwYXJhbSBlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBuZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5ocmVmKVxuICAgICAgICAuc3VjY2VzcyhyZXN1bHQgPT4ge1xuICAgICAgICAgICAgJCgnI2xhc3QtbWFrZXVwLWtpdC1pZCcpXG4gICAgICAgICAgICAgICAgLnZhbChyZXN1bHQubWFrZXVwX2tpdF9pZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGdldExhc3RNYWtldXBLaXRJRCBmcm9tIFwiLi9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SURcIjtcblxuLyoqXG4gKiBTaG93IGxhc3QgbWFrZXVwIGtpdCBJRCBhdCB0aGUgYm9keSBwYXJ0cyBncmlkXG4gKi9cbiQoJyNnZXQtbGFzdC1tYWtldXAta2l0LWlkJylcbiAgICAuY2xpY2soZ2V0TGFzdE1ha2V1cEtpdElEKTtcbiIsImV4cG9ydCBjb25zdCBNQUtFVVBfS0lUX1NIT1dfRk9STSA9ICdNQUtFVVBfS0lUX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge01BS0VVUF9LSVRfU0hPV19GT1JNfSBmcm9tIFwibW9kdWxlcy9tYWtldXAta2l0L2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXG4gKi9cbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoTUFLRVVQX0tJVF9TSE9XX0ZPUk0pKTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgaW5ncmVkaWVudCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbF9pbmdyZWRpZW50cyA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI21lYWxfaW5ncmVkaWVudHNfdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuaW5ncmVkaWVudF9pZCcpLnRleHQoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbC1pbmdyZWRpZW50JS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmdyZWRpZW50RGVsZXRlKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBNZWFsIEluZ3JlZGllbnRzIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWVhbEluZ3JlZGllbnRzU3RhdGUgKCkge1xuICAgIGxldCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBsZXQgZGF0YSA9ICQoJy5tZWFsLWluZ3JlZGllbnRzLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIik7XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7aW5ncmVkaWVudERlbGV0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZVwiO1xuaW1wb3J0IHtzYXZlTWVhbEluZ3JlZGllbnRzU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBpbmdyZWRpZW50RGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcbiAqL1xuJCgnLnNhdmUtcGFnZScpLmNsaWNrKHNhdmVNZWFsSW5ncmVkaWVudHNTdGF0ZSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWwgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLm1lYWxfaWQnKS50ZXh0KCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lYWxEZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIE1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVNZWFsU3RhdGUgKCkge1xuICAgIGNvbnN0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnLm1lYWwtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZFwiKTtcbiAgICBjb25zdCBkYXRhID0gJCgnLm1lYWwtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICB0Ym9keS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7bWVhbERlbGV0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvbWVhbERlbGV0ZVwiO1xuaW1wb3J0IHtzYXZlTWVhbFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBtZWFsRGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgbWVhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVNZWFsU3RhdGUoKVxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gJCgnLnNhdmUtcGFnZScpO1xuXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnaW5wdXRbbmFtZT1cImF3YXJkX2lkXCJdJykudmFsKDApO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMsIHNhdmVCdXR0b24pKCk7XG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICovXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZU1lYWxTdGF0ZSk7XG4iLCJleHBvcnQgY29uc3QgTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNID0gJ05FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSc7XG4iLCJjb25zdCBUUkFTSCA9ICdUUkFTSCc7XG5jb25zdCBUUkFTSF9GSUVMRFNfSUQgPSAndHJhc2gtZmllbGRzJztcbmNvbnN0IFNFTEVDVF9JRCA9ICduZWlnaGJvci1hY3Rpdml0eS10eXBlLWlkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNFTEVDVF9JRCk7XG5cbiAgICBpZiAoIXNlbGVjdCB8fCBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3Qub3B0aW9ucy5sZW5ndGggJiYgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XG5cbiAgICAgICAgY29uc3QgdHJhc2hGaWVsZHMgPSAkKCcjJyArIFRSQVNIX0ZJRUxEU19JRCk7XG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRFbGVtZW50LnRleHQudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBUUkFTSDpcbiAgICAgICAgICAgICAgICB0cmFzaEZpZWxkcy5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0cmFzaEZpZWxkcy5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7TkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNLCBzZWxmKTtcblxuICAgICAgICBjaGFuZ2VUeXBlKCk7XG5cbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSAnLi9oYW5kbGVycy9jaGFuZ2VUeXBlJztcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKVxuICAgIC5vbignY2hhbmdlJywgJy5uZWlnaGJvci1hY3Rpdml0eS10eXBlJywgY2hhbmdlVHlwZSk7XG5cbi8qKlxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxuICovXG4kKCcuc2hvdy1mb3JtJylcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NldFRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpLmZpbmQoJ2EnKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2FjdGl2ZVRhYj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSAkKCdbbmFtZT1cImNhdGVnb3J5XCJdJykudmFsKCk7XG4gICAgY29uc3QgYXNzZXRfaWRzID0gJCgnW25hbWU9XCJhc3NldHNfaWRzXCJdJyk7XG5cbiAgICBpZighYXNzZXRfaWRzLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCdubGEtYXNzaWduJylcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe2Fzc2V0X2lkczogYXNzZXRfaWRzLnZhbCgpLCBjYXRlZ29yeTogY2F0ZWdvcnl9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBhc3NldF9pZHMudmFsKCcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGlzdCAoKSB7XG4gICAgY29uc3QgYXNzZXRJZHMgPSBbXTtcbiAgICBjb25zdCBjYXRlZ29yeSA9ICQoJ1tuYW1lPVwiY2F0ZWdvcnlcIl0nKS52YWwoKTtcbiAgICBjb25zdCBhc2lnbkxpc3QgPSAkKCd0Ym9keSxjb250YWluZXInKS5maW5kKCc6Y2hlY2tib3g6Y2hlY2tlZCcpO1xuICAgIGFzaWduTGlzdC5lYWNoKGZ1bmN0aW9uIChpLCBhc3NldElkKSB7XG4gICAgICAgIGFzc2V0SWRzLnB1c2goJChhc3NldElkKS5kYXRhKCdhc3NldCcpKVxuICAgIH0pO1xuXG4gICAgaWYoIWFzc2V0SWRzLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykpO1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHthc3NldF9pZHM6IGFzc2V0SWRzLCBjYXRlZ29yeTogY2F0ZWdvcnl9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBhc2lnbkxpc3QucHJvcCggXCJjaGVja2VkXCIsIGZhbHNlICk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YXNzZXRUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2Fzc2V0VGFiXCI7XG5pbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5pbXBvcnQge3VwZGF0ZUxpc3R9IGZyb20gXCIuL2hhbmRsZXJzL3VwZGF0ZUxpc3RcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXNzZXQtdGFiJywgYXNzZXRUYWIpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLWFzc2lnbicsIHVwZGF0ZUxpc3QpXG5cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LXN1Ym1pdC1hY3Rpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuYXBwZW5kKCc8aSBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4nKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgbmxhIGxpc3QgY2F0ZWdvcnlcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hc3NldC1hc3NpZ24nLCBzYXZlU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBOTEEgcXR5XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI3F0eScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IGh0dHAoJ2NoYW5nZS1wZXItcGFnZScpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHtyZWNvcmRfcGVyX3BhZ2U6ICQodGhpcykudmFsKCl9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFsgaGVhZCwgdGFpbCBdID0gbG9jYXRpb24uaHJlZi5zcGxpdCggJz8nICk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGhlYWQgKyAnPycgKyB0YWlsLnJlcGxhY2UobmV3IFJlZ0V4cChgcGFnZT1bXiZdKnxwYWdlPVteJl0qJmApLCAnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9KTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgndGJvZHkuY29udGFpbmVyJyk7XG5cbiAgICBsZXQgbGFzdElEUyA9IFtdO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IDE7XG4gICAgdGJvZHkuZmluZChcInRyXCIpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgaWYgKCQoaXRlbSkuZGF0YSgnaWQnKSkge1xuICAgICAgICAgICAgbGFzdElEUy5wdXNoKCQoaXRlbSkuZGF0YSgnaWQnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobGFzdElEUy5sZW5ndGgpIHtcbiAgICAgICAgaW5jcmVtZW50SWQgPSAoTWF0aC5tYXguYXBwbHkoTWF0aCwgbGFzdElEUykgKyAxKSB8fCAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVpZCUvZywgaSArIGluY3JlbWVudElkKTtcbiAgICAgICAgdGJvZHkucHJlcGVuZCh0ckxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLmNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIik7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZFwiKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNhdmUtcGFnZScsIHNhdmVTdGF0ZSk7XG5cbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJ3Rib2R5LmNvbnRhaW5lcicpO1xuXG4gICAgbGV0IGxhc3RJRFMgPSBbXTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xuICAgIHRib2R5LmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGlmICgkKGl0ZW0pLmRhdGEoJ2lkJykpIHtcbiAgICAgICAgICAgIGxhc3RJRFMucHVzaCgkKGl0ZW0pLmRhdGEoJ2lkJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGxhc3RJRFMubGVuZ3RoKSB7XG4gICAgICAgIGluY3JlbWVudElkID0gKE1hdGgubWF4LmFwcGx5KE1hdGgsIGxhc3RJRFMpICsgMSkgfHwgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyN0ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8laWQlL2csIGkgKyBpbmNyZW1lbnRJZCk7XG4gICAgICAgIHRib2R5LnByZXBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKTtcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkXCIpO1xuXG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNhdmUtcGFnZScsIHNhdmVTdGF0ZSk7XG5cbiIsImV4cG9ydCBjb25zdCBQUk9EVUNUX1NIT1dfRk9STSA9ICdQUk9EVUNUX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgQ2xlYXZlIGZyb20gXCJjbGVhdmUuanNcIjtcblxuLyoqXG4gKiBQcmljZSBpbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIG5ldyBDbGVhdmUodGhpcywge1xuICAgICAgICBudW1lcmFsOiB0cnVlLFxuICAgICAgICBwcmVmaXg6ICckICcsXG4gICAgICAgIHJhd1ZhbHVlVHJpbVByZWZpeDogdHJ1ZSxcbiAgICAgICAgb25WYWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChwYXJzZUZsb2F0KGUudGFyZ2V0LnJhd1ZhbHVlKSAqIDEwMCk7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdFByaWNlID0gJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJ3RkJykuZmluZCgnLnByb2R1Y3QtcHJpY2UnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBwYXJzZUludChwcm9kdWN0UHJpY2UudmFsKCkpKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlXG4gICAgICAgICAgICAgICAgICAgIC52YWwodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtQUk9EVUNUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9jb25zdGFudHNcIjtcbmltcG9ydCBwcmljZUluaXQgZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9oYW5kbGVycy9wcmljZUluaXRcIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKTtcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KFBST0RVQ1RfU0hPV19GT1JNKSk7XG5cbi8qKlxuICogUHJpY2UgZm9ybWF0XG4gKi9cbiQoJy5wcm9kdWN0LXByaWNlLXZpZXcnKS5lYWNoKHByaWNlSW5pdCk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBOTEEgb3JkZXJcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjb3JkZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ldyBodHRwKCdjaGFuZ2Utb3JkZXInKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7b3JkZXI6ICQodGhpcykudmFsKCl9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE5MQSBxdHlcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjcXR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXcgaHR0cCgnY2hhbmdlLXBlci1wYWdlJylcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe3JlY29yZF9wZXJfcGFnZTogJCh0aGlzKS52YWwoKX0pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgWyBoZWFkLCB0YWlsIF0gPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCAnPycgKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gaGVhZCArICc/JyArIHRhaWwucmVwbGFjZShuZXcgUmVnRXhwKGBwYWdlPVteJl0qfHBhZ2U9W14mXSomYCksICcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH0pO1xuIiwiaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqXG4gKiBAcGFyYW0gX1xuICogQHBhcmFtIGl0ZW1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKF8sIGl0ZW0pIHtcbiAgICBjb25zdCBkcm9wem9uZUNvbnRhaW5lciA9ICQoaXRlbSk7XG4gICAgY29uc3QgcHJldmlld0hpZGRlbklucHV0ID0gZHJvcHpvbmVDb250YWluZXIuZmluZCgnaW5wdXQnKTtcblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihpdGVtKVxuICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lQ29udGFpbmVyLmRhdGEoJ3VybCcpKVxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHByZXZpZXdcbiAgICAgKi9cbiAgICBpZiAoISFwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCkpIHtcbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAuc2V0UHJldmlldyhcbiAgICAgICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCksXG4gICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVDb250YWluZXIuZGF0YSgnZm9sZGVyJyksIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgKi9cbiAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbn0iLCJpbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuaW1wb3J0IGRyb3B6b25lSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9kcm9wem9uZUluaXRcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFR1cm5lZCBvZmYgdGhlIERyb3B6b25lIGF1dG8gaW5pdFxuICpcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5Ecm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKi9cbiQoJy5kcm9wem9uZScpLmVhY2goZHJvcHpvbmVJbml0KTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnLnVwZGF0ZS1yb3cnKTtcblxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnLnVwZGF0ZS1yb3cnKTtcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzLCBzYXZlQnV0dG9uKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0pIiwiY29uc3QgV0FMS19DQVRFR09SWSA9ICc2JztcbmNvbnN0IFJVTl9DQVRFR09SWSA9JzcnO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxlY3QyID0gJCgnLnRhYmxlJykuZmluZCgnLmVtYmVkLWdyb3VwIHNlbGVjdC5zZWxlY3QyJyk7XG4gICAgICAgIGxldCBzZWxlY3RWYWwgPSAwO1xuICAgICAgICBzZWxlY3QyLmVhY2goZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbCA9ICQoaSkudmFsKCk7XG4gICAgICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcbiAgICAgICAgICAgICAgICAkKGkpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChpKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNob3cgaGlkZSBzcGVlZCBvbiB0cmlnZ2VyIGFkZC1lbWJlZCBidXR0b25cbiAgICAgKi9cbiAgICAub24oJ2FpX2FuaW1hdGlvbicsICcuYWRkLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBlbWJlZCA9ICQodGhpcykuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdFZhbCA9IGVtYmVkLmZpbmQoJy5zZWxlY3QyJykudmFsKCk7XG4gICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgZW1iZWQuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW1iZWQuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNob3cgaGlkZSBzcGVlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gJChpdGVtLnRhcmdldCkudmFsKCk7XG4gICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSA9ICdTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNJztcbiIsIi8qKlxuICogQWRkIGEgbmV3IHNob3AgaW4gYSBkZXBhcnRtZW50cyBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgdGFibGUgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJy5zaG9wcy10YWJsZScpLmZpbmQoJ3Rib2R5Jyk7XG4gICAgY29uc3QgZGVwYXJ0bWVudElkID0gY3VycmVudEJ0bi5kYXRhKCdkZXBhcnRtZW50Jyk7XG4gICAgbGV0IGNvdW50ZXIgPSBwYXJzZUludChjdXJyZW50QnRuLmRhdGEoJ2NvdW50JykpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gJCgnI3Nob3AtdGVtcGxhdGUnKVxuICAgICAgICAuaHRtbCgpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVkZXBhcnRtZW50SWQlJywgXCJnXCIpLCBkZXBhcnRtZW50SWQpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVpbmRleCUnLCBcImdcIiksIGNvdW50ZXIrKyk7XG5cbiAgICBjdXJyZW50QnRuLmRhdGEoJ2NvdW50JywgY291bnRlcik7XG5cbiAgICB0YWJsZS5hcHBlbmQodGVtcGxhdGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZm9yIHNob3AgZGVwYXJ0bWVudFxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YU5hbWVQcmVmaXggPSAnc2hvcCc7XG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgZmFzdFNhdmVDb250YWluZXIgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJy5mYXN0LXNhdmUtY29udGFpbmVyJyk7XG5cbiAgICBpZiAoIWZhc3RTYXZlQ29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIGZhc3RTYXZlQ29udGFpbmVyLmZpbmQoJ3Rib2R5IHRyJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gZ2V0Rm9ybURhdGEoJCh0aGlzKSk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybURhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gYCR7ZGF0YU5hbWVQcmVmaXh9WyR7aW5kZXh9XVske2l9XWA7XG4gICAgICAgICAgICByZXN1bHRbaXRlbU5hbWVdID0gZm9ybURhdGFbaV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShyZXN1bHQpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFJhZGlvIGlucHV0IGZyb20gY2hlY2tib3hcbiAqIEJlY2F1c2UgaW5wdXRbdHlwZT1yYWRpb10gZGlkIG5vdCB3b3JrIGNvcnJlY3RseVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gY3VycmVudEl0ZW0uY2xvc2VzdCgnLnRhYmxlJykuZmluZCgnLnJhZGlvJyk7XG5cbiAgICBhbGxJdGVtcy5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgIGFsbEl0ZW1zLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XG5cbiAgICBjdXJyZW50SXRlbS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgY3VycmVudEl0ZW0uYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgU29ydGFibGUodGhpcywge1xuICAgICAgICBncm91cDogJ3Nob3BzJyxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICByYWRpbzogJChlLml0ZW0pLmZpbmQoJy5yYWRpbycpLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6ICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucGFyZW50LmZpbmQoJy5yYWRpby5jaGVja2VkOmd0KDApJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmFkaW8ucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSwgKCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlld1xuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVJbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwnKSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXcgU21hbGxcbiAgICAgICAgICovXG4gICAgICAgIGRyb3B6b25lSW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUtc21hbGwnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsLXNtYWxsJykpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIERyb3B6b25lIEluaXRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkcm9wem9uZUVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZpZXdVcmxFbGVtZW50XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRyb3B6b25lSW5pdChkcm9wem9uZUVsZW1lbnQsIHByZXZpZXdVcmxFbGVtZW50KSB7XG4gICAgaWYgKCFkcm9wem9uZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihkcm9wem9uZUVsZW1lbnQpXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgJChwcmV2aWV3VXJsRWxlbWVudCkudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAkKHByZXZpZXdVcmxFbGVtZW50KS52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICQoZHJvcHpvbmVFbGVtZW50KS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlID0gcmVzcG9uc2UuZmlsZV9uYW1lO1xuICAgICAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNldCBwcmV2aWV3XG4gICAgICovXG4gICAgaWYgKHByZXZpZXdVcmxFbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LmZvbGRlciwgcHJldmlld1VybEVsZW1lbnQudmFsdWUpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICovXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG59IiwiaW1wb3J0IGFkZFNob3AgZnJvbSBcIi4vaGFuZGxlcnMvYWRkU2hvcFwiO1xuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XG5pbXBvcnQgcmFkaW9JbnB1dCBmcm9tIFwiLi9oYW5kbGVycy9yYWRpb0lucHV0XCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5pbXBvcnQgc29ydGFibGVJbml0IGZyb20gXCJtb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKi9cbnNob3dGb3JtKCk7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogUmFkaW8gYnV0dG9ucyBiZWhhdmlvclxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5yYWRpbycsIHJhZGlvSW5wdXQpXG5cbiAgICAvKipcbiAgICAgKiBEb2N1bWVudCByZWFkeVxuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgY2xhc3MgdG8gY2hlY2tlZCByYWRpb3NcbiAgICAgICAgICovXG4gICAgICAgICQoJy5yYWRpb1tjaGVja2VkXScpLmFkZENsYXNzKCdjaGVja2VkJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhIG5ldyBzaG9wIGluIGEgZGVwYXJ0bWVudHMgZ3JpZFxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmFkZC1zaG9wJykuY2xpY2soYWRkU2hvcCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZhc3Qgc2F2ZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmZhc3Qtc2F2ZS1zaG9wcycpLmNsaWNrKGZhc3RTYXZlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSB0ciB0byBzb3J0YWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNzb3VuZCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI3NvdW5kX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLnNvdW5kX2lkJykudmFsKCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lc291bmRfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTb3VuZFN0YXRlICgpIHtcbiAgICBjb25zdCBkYXRhID0gJCgnLnNvdW5kLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTb3VuZFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU291bmRTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVTb3VuZFN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogRmluZCBVc2VyXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVXNlcigpIHtcbiAgICBjb25zdCBwcmVmaXggPSAkKHRoaXMpLmRhdGEoJ3ByZWZpeCcpO1xuICAgIGNvbnN0IGRhdGEgPSB7dWlkOiAkKCcjJyArIHByZWZpeCkudmFsKCksIG5hbWU6ICQoJyMnICsgcHJlZml4ICsgJ19uYW1lJykudmFsKCksIHByZWZpeDogcHJlZml4fTtcbiAgICBjb25zdCB1c2VyX3RlbXBsYXRlID0gJCgnI3VzZXJfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgaW5zZXJ0X2Jsb2NrID0gJCgnIycgKyBwcmVmaXggKyAnX2xpc3QnKTtcblxuICAgIGlmICghZGF0YS51aWQubGVuZ3RoICYmICFkYXRhLm5hbWUubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIGZpbmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAkKHJlc3BvbnNlLnVzZXJzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suY2xvc2VzdCgndGFibGUnKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5hcHBlbmQodXNlcl90ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyV1c2VyX2lkJS9nLCBpdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVwZXRfbmFtZSUnLCBpdGVtLnBldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcldXNlcl9uYW1lJScsIGl0ZW0uZmlyc3RfbmFtZSArICcgJyArIGl0ZW0ubGFzdF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVsZXZlbCUnLCBpdGVtLnhwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVhdmF0YXIlJywgaXRlbS5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJXRhcmdldCUvZywgcHJlZml4KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogU2VuZCBHaWZ0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kR2lmdCAoKSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNzZW5kJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9LCAzMDAwKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNzZW5kLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiaW5wdXQsIHRleHRhcmVhXCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzZW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZm9ybUl0ZW1zKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKXtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICQoJy50YWJsZScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VfbGVuZ3RoID0gJCgnI21lc3NhZ2VfbGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfbGVuZ3RoLnRleHQobWVzc2FnZV9sZW5ndGguZGF0YSgnbGVuZ3RoJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2VuZEdpZnR9IGZyb20gXCIuL2hhbmRsZXJzL3NlbmRHaWZ0XCI7XG5pbXBvcnQge2ZpbmRVc2VyfSBmcm9tIFwiLi9oYW5kbGVycy9maW5kVXNlclwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogRmluZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjZmluZF9zZW5kZXIsICNmaW5kX3JlY2VpdmVyJywgZmluZFVzZXIpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNzZW5kJywgc2VuZEdpZnQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHNlbGVjdGVkIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnRhYmxlIHRyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAkKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0JykgKyAnX3VpZCcpLnZhbCgkKHRoaXMpLmRhdGEoJ3VpZCcpKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbGltaXQgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAndGV4dGFyZWEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykucHJvcCgnbmFtZScpLnJlcGxhY2UoJ2xvb3RfZGF0YVsnLCAnJykucmVwbGFjZSgnXScsICcnKSArICdfbGVuZ3RoJztcbiAgICAgICAgJCgnIycgKyB0YXJnZXQpLnRleHQoJCh0aGlzKS5kYXRhKCdtYXhsZW5ndGgnKSAtICQodGhpcykudmFsKCkubGVuZ3RoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCBhc3NldFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2Fzc2V0c19saXN0IGltZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2Fzc2V0c19saXN0JykuZmluZCgnaW1nJykuY3NzKCdib3JkZXInLCAnJyk7XG4gICAgICAgICQodGhpcykuY3NzKCdib3JkZXInLCAnMnB4IHNvbGlkICNjMWMxYzEnKTtcbiAgICAgICAgJCgnI2Fzc2V0X2lkJykudmFsKCQodGhpcykuZGF0YSgncHJpemUnKSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbnRlcmVkIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNjYW5jZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy50YWJsZScpLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCB0ZXh0YXJlYScpLnZhbCgnJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZWRpcmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpXG4gICAgfSk7XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5zcGVjaWFsLXByaXplLXNhdmUtY29udGFpbmVyIGxhYmVsOmNvbnRhaW5zKCdMaW1pdCcpXCIpLmNzcygncGFkZGluZycsIDApLmh0bWwoXCJBdmFpbGFibGVcIik7XG4gICAgICAgICQoJy5zcGVjaWFsLXByaXplLXNhdmUtY29udGFpbmVyIGlucHV0JykuYXR0cigncmVhZG9ubHknLCB0cnVlKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAkKCcuYWRkLWVtYmVkLCAucmVtb3ZlLWVtYmVkJykucmVtb3ZlKCk7XG5cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ29weSBpZHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0JykpLnNlbGVjdCgpO1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYik7XG5cbiIsImV4cG9ydCBjb25zdCBUQU1BVE9PTF9TSE9XX0ZPUk0gPSAnVEFNQVRPT0xfU0hPV19GT1JNJztcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1RBTUFUT09MX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFRBTUFUT09MX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCBzZWxmKTtcblxuICAgICAgICAkKCcubmVpZ2hib3ItYWN0aXZpdHktZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XG5cbi8qKlxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxuICovXG4kKCcuc2hvdy1mb3JtJylcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBGaW5kIFVzZXJcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRVc2VyKCkge1xuICAgIGNvbnN0IHByZWZpeCA9ICQodGhpcykuZGF0YSgncHJlZml4Jyk7XG4gICAgY29uc3QgZGF0YSA9IHt1aWQ6ICQoJyMnICsgcHJlZml4KS52YWwoKSwgbmFtZTogJCgnIycgKyBwcmVmaXggKyAnX25hbWUnKS52YWwoKSwgcHJlZml4OiBwcmVmaXh9O1xuICAgIGNvbnN0IHVzZXJfdGVtcGxhdGUgPSAkKCcjdXNlcl90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBpbnNlcnRfYmxvY2sgPSAkKCcjJyArIHByZWZpeCArICdfbGlzdCcpO1xuXG4gICAgaWYgKCFkYXRhLnVpZC5sZW5ndGggJiYgIWRhdGEubmFtZS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gZmluZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgICQocmVzcG9uc2UudXNlcnMpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5jbG9zZXN0KCd0YWJsZScpLmNzcygnZGlzcGxheScsICdpbmxpbmUtdGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmFwcGVuZCh1c2VyX3RlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJXVzZXJfaWQlL2csIGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXBldF9uYW1lJScsIGl0ZW0ucGV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyV1c2VyX25hbWUlJywgaXRlbS5maXJzdF9uYW1lICsgJyAnICsgaXRlbS5sYXN0X25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJWxldmVsJScsIGl0ZW0ueHApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJWF2YXRhciUnLCBpdGVtLmF2YXRhcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8ldGFyZ2V0JS9nLCBwcmVmaXgpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBTZW5kIEdpZnRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRHaWZ0ICgpIHtcbiAgICAkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI3NlbmQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH0sIDMwMDApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnI3Ryb3BoeS1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiaW5wdXQsIHRleHRhcmVhXCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzZW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZm9ybUl0ZW1zKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKXtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0cm9waHlfY3Vwc19jb3VudCA9ICQoJyN0cm9waHlfY3Vwc19jb3VudCcpO1xuICAgICAgICAgICAgICAgICAgICB0cm9waHlfY3Vwc19jb3VudC50ZXh0KHBhcnNlSW50KHRyb3BoeV9jdXBzX2NvdW50LnRleHQoKSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRhYmxlJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjdHJvcGh5LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhJykudmFsKCcnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9sZW5ndGggPSAkKCcjbmV3c19tZXNzYWdlX2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2xlbmd0aC50ZXh0KG1lc3NhZ2VfbGVuZ3RoLmRhdGEoJ2xlbmd0aCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NlbmRHaWZ0fSBmcm9tIFwiLi9oYW5kbGVycy9zZW5kR2lmdFwiO1xuaW1wb3J0IHtmaW5kVXNlcn0gZnJvbSBcIi4vaGFuZGxlcnMvZmluZFVzZXJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2ZpbmRfc2VuZGVyLCAjZmluZF9yZWNlaXZlcicsIGZpbmRVc2VyKVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjc2VuZCcsIHNlbmRHaWZ0KVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50YWJsZSB0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgJCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpICsgJ191aWQnKS52YWwoJCh0aGlzKS5kYXRhKCd1aWQnKSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGxpbWl0IGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ3RleHRhcmVhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5yZXBsYWNlKCdjdXBfZGF0YVsnLCAnJykucmVwbGFjZSgnXScsICcnKSArICdfbGVuZ3RoJztcbiAgICAgICAgJCgnIycgKyB0YXJnZXQpLnRleHQoJCh0aGlzKS5kYXRhKCdtYXhsZW5ndGgnKSAtICQodGhpcykudmFsKCkubGVuZ3RoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVudGVyZWQgZGF0YVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2NhbmNlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnRhYmxlJykuaGlkZSgpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhJykudmFsKCcnKVxuICAgIH0pO1xuIiwiXG4vKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgaWQ6ICd0cm9waHktY3VwLXVzZXJzJ1xuICAgIH0sICdUcm9waHkgY3VwIHVzZXJzJywgdXJsKTtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLnRyb3BoeS1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWRcIik7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5pbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pO1xuIiwiZXhwb3J0IGNvbnN0IFNFQVJDSF9VU0VSX0FTU0VUUyA9ICdTRUFSQ0hfVVNFUl9BU1NFVFMnO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9VU0VSX1BBUlRfRk9STSA9ICdTVUJNSVRfVVNFUl9QQVJUX0ZPUk0nO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ORUlHSEJPUiA9ICdERUxFVEVfTkVJR0hCT1InO1xuZXhwb3J0IGNvbnN0IEFERF9ORUlHSEJPUiA9ICdBRERfTkVJR0hCT1InOyIsIi8qKlxuICogQ2hhbmdlIHBsYWNlbWVudCBzZWxlY3QgaW4gQWRkIEFzc2V0cyBibG9ja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGxhY2VtZW50TmFtZSA9ICQoJyNwbGFjZW1lbnQtbmFtZScpO1xuICAgIGlmICgkKHRoaXMpLnZhbCgpID4gMCkge1xuICAgICAgICBwbGFjZW1lbnROYW1lLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2VtZW50TmFtZS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5laWdoYm9yc0NvdW50ID0gJCgnI25laWdoYm9ycy1jb3VudCcpO1xuICAgIGlmKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgbmVpZ2hib3JzQ291bnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZWlnaGJvcnNDb3VudC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5sb2FkLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgY3VycmVudEVsZW1lbnQuZGF0YSgncGxhY2VtZW50JykpLmh0bWwoJycpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgLSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAqIEluaXRlZCBpbiB1c2VyL2VkaXQuYmxhZGUucGhwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCBwbGFjZW1lbnQgPSBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKTtcblxuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5oaWRlLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG5cbiAgICBsb2FkUGFydChQTEFDRU1FTlRfQVNTRVRTX1JPVVRFICsgJz9wbGFjZW1lbnQ9JyArIHBsYWNlbWVudCwgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgcGxhY2VtZW50KSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTG9hZCBwYXJ0IGZvciBlZGl0IHVzZXIgcGFnZVxuICovXG5mdW5jdGlvbiBsb2FkUGFydChhY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gJChyZXNwb25zZSk7XG4gICAgICAgICAgICBpdGVtcy5maW5kKCcubGlzdC10aHVtYm5haWwnKS5wb3BvdmVyKHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cIicgKyAkKHRoaXMpLmRhdGEoJ2Z1bGwnKSArICdcIj4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChpdGVtcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59IiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUREX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IG5laWdoYm9yIGFzIGFjdGl2ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFERF9ORUlHSEJPUiwgcmVzcCA9PiB7XG4gICAgICAgIGlmIChyZXNwLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAkKCcjZGVsZXRlLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNhZGQtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI25laWdoYm9yLXN0YXR1cy0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5odG1sKHJlc3AuZGF0YS5zdGF0dXNfdGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0RFTEVURV9ORUlHSEJPUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNldCBuZWlnaGJvciBhcyBkZWxldGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoREVMRVRFX05FSUdIQk9SLCByZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3AudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjbmVpZ2hib3Itc3RhdHVzLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmh0bWwocmVzcC5kYXRhLnN0YXR1c190ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7U0VBUkNIX1VTRVJfQVNTRVRTfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2VhcmNoIHVzZXIgYXNzZXRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0VBUkNIX1VTRVJfQVNTRVRTLCBkYXRhID0+IHtcbiAgICAgICAgJCgnI3NlYXJjaC1hc3NldHMtY29udGFpbmVyJykuaHRtbChkYXRhKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuaW1wb3J0IHtTVUJNSVRfVVNFUl9QQVJUX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTdWJtaXQgdXNlciBwYXJ0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTVUJNSVRfVVNFUl9QQVJUX0ZPUk0sIHJlc3AgPT4ge1xuICAgICAgICBsZXQgZm9ybSA9ICQocmVzcC5kYXRhKTtcbiAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XG4gICAgICAgIGZvcm0uZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgICAgIG5vdGlmeVN1Y2Nlc3MoJ1VzZXIgZGF0YSB1cGRhdGVkJyk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc2VhcmNoVXNlckFzc2V0cyBmcm9tIFwiLi9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0c1wiO1xuaW1wb3J0IHN1Ym1pdFVzZXJQYXJ0Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc3VibWl0VXNlclBhcnRGb3JtXCI7XG5pbXBvcnQgZGVsZXRlTmVpZ2hib3IgZnJvbSBcIi4vbGlzdGVuZXJzL2RlbGV0ZU5laWdoYm9yXCI7XG5pbXBvcnQgYWRkTmVpZ2hib3IgZnJvbSBcIi4vbGlzdGVuZXJzL2FkZE5laWdoYm9yXCI7XG5pbXBvcnQgbG9hZFBsYWNlbWVudEFzc2V0cyBmcm9tIFwiLi9oYW5kbGVycy9sb2FkUGxhY2VtZW50QXNzZXRzXCI7XG5pbXBvcnQgaGlkZVBsYWNlbWVudEFzc2V0cyBmcm9tIFwiLi9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzXCI7XG5pbXBvcnQgY2hhbmdlUGxhY2VtZW50IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVBsYWNlbWVudFwiO1xuaW1wb3J0IGNoYW5nZVJhbmRvbU5laWdoYm9ycyBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnNcIjtcbmltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLyoqXG4gKiBTZWFyY2ggdXNlciBhc3NldHMgbGlzdGVuZXJcbiAqL1xuc2VhcmNoVXNlckFzc2V0cygpO1xuXG4vKipcbiAqIFN1Ym1pdCB1c2VyIHBhcnQgZm9ybSBsaXN0ZW5lclxuICovXG5zdWJtaXRVc2VyUGFydEZvcm0oKTtcblxuLyoqXG4gKiBEZWxldGUgTmVpZ2hib3JcbiAqL1xuZGVsZXRlTmVpZ2hib3IoKTtcblxuLyoqXG4gKiBBZGQgTmVpZ2hib3JcbiAqL1xuYWRkTmVpZ2hib3IoKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIExvYWQgYXNzZXRzIGluIHBsYWNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmxvYWQtYXNzZXRzJywgbG9hZFBsYWNlbWVudEFzc2V0cylcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBwbGFjZW1lbnQgaW4gQWRkIEFzc2V0cyBibG9ja1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNwbGFjZW1lbnQtZm9yLWFzc2V0JywgY2hhbmdlUGxhY2VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjaXMtcmFuZG9tLW5laWdoYm9ycycsIGNoYW5nZVJhbmRvbU5laWdoYm9ycylcblxuICAgIC8qKlxuICAgICAqIEhpZGUgYXNzZXRzIGluIHBsYWNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtYXNzZXRzJywgaGlkZVBsYWNlbWVudEFzc2V0cyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
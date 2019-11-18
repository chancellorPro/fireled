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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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


      return new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a(this._dropzoneContainer, _objectSpread({}, config, {}, this._config));
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
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
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

    if (response.type !== 'error' && canReload(_this)) {
      location.reload();
    }

    if (parseInt(_this.dataset.dismiss) === 1) {
      currentButton.closest('.modal').modal('hide');
    }

    if (response.type === 'error') {
      Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(response);
    } else {
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
    }
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
	"./action-log/module.js": "./modules/action-log/module.js",
	"./action-type/module.js": "./modules/action-type/module.js",
	"./add-me/module.js": "./modules/add-me/module.js",
	"./announcements/module.js": "./modules/announcements/module.js",
	"./assets-log/module.js": "./modules/assets-log/module.js",
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
	"./crop/module.js": "./modules/crop/module.js",
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
	"./home/module.js": "./modules/home/module.js",
	"./levels/module.js": "./modules/levels/module.js",
	"./linked-assets/module.js": "./modules/linked-assets/module.js",
	"./localization/module.js": "./modules/localization/module.js",
	"./magic/module.js": "./modules/magic/module.js",
	"./makeup-kit-asset/module.js": "./modules/makeup-kit-asset/module.js",
	"./makeup-kit/module.js": "./modules/makeup-kit/module.js",
	"./meal-ingredient-groups/module.js": "./modules/meal-ingredient-groups/module.js",
	"./meal-ingredients/module.js": "./modules/meal-ingredients/module.js",
	"./meal/module.js": "./modules/meal/module.js",
	"./neighbor-activity/module.js": "./modules/neighbor-activity/module.js",
	"./news-gifts-log/module.js": "./modules/news-gifts-log/module.js",
	"./nla-asset/module.js": "./modules/nla-asset/module.js",
	"./nla-category/module.js": "./modules/nla-category/module.js",
	"./nla-section/module.js": "./modules/nla-section/module.js",
	"./product/module.js": "./modules/product/module.js",
	"./public/module.js": "./modules/public/module.js",
	"./purchase/module.js": "./modules/purchase/module.js",
	"./settings/module.js": "./modules/settings/module.js",
	"./settings/modules/ai_animation/module.js": "./modules/settings/modules/ai_animation/module.js",
	"./shop-department/module.js": "./modules/shop-department/module.js",
	"./shop-releases/module.js": "./modules/shop-releases/module.js",
	"./shop-stats/module.js": "./modules/shop-stats/module.js",
	"./sound/module.js": "./modules/sound/module.js",
	"./special-prizes-form/module.js": "./modules/special-prizes-form/module.js",
	"./special-prizes/module.js": "./modules/special-prizes/module.js",
	"./subtype-attributes/module.js": "./modules/subtype-attributes/module.js",
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

/***/ "./modules/action-log/module.js":
/*!**************************************!*\
  !*** ./modules/action-log/module.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).on('click', '#product_id', function () {
  $('#product_id').prev('.select2-container').find('.select2-search__field').focus();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

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

/***/ "./modules/add-me/handlers/saveState.js":
/*!**********************************************!*\
  !*** ./modules/add-me/handlers/saveState.js ***!
  \**********************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");




/**
 * Update row
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.save-container');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_3__["default"])(container.find(".changed input"));

  if (!Object.keys(data).length) {
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

/***/ "./modules/add-me/module.js":
/*!**********************************!*\
  !*** ./modules/add-me/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/add-me/handlers/saveState.js");

$(document)
/**
 * Mark the row as changed
 */
.on('click', 'input[type="checkbox"]', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Save the row
 */
.on('click', '.save-page', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

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

/***/ "./modules/assets-log/module.js":
/*!**************************************!*\
  !*** ./modules/assets-log/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./modules/assets-log/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);

$(document).on('click', '.toggle_ids', function () {
  if ($(this).next().height() > 0) {
    $(this).text($(this).text().replace('Hide', 'Show'));
    $(this).next().height(0);
  } else {
    $(this).text($(this).text().replace('Show', 'Hide'));
    $(this).text().replace('Show', 'Hide');
    $(this).next().height('100%');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets-log/styles.scss":
/*!****************************************!*\
  !*** ./modules/assets-log/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](_this, {
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

/***/ "./modules/crop/handlers/addRow.js":
/*!*****************************************!*\
  !*** ./modules/crop/handlers/addRow.js ***!
  \*****************************************/
/*! exports provided: addRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRow", function() { return addRow; });
/**
 * Add rows to the grid
 *
 * @returns {boolean}
 */
function addRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#crops > tbody');
  var trLast = $('#crop_template').html();
  var lastID = tbody.find("tr").last().find('.crop_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%crop%/g, i + incrementId));
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/crop/handlers/deleteRow.js":
/*!********************************************!*\
  !*** ./modules/crop/handlers/deleteRow.js ***!
  \********************************************/
/*! exports provided: deleteRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRow", function() { return deleteRow; });
/**
 * Delete row
 *
 * @returns {boolean}
 */
function deleteRow() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/crop/module.js":
/*!********************************!*\
  !*** ./modules/crop/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addRow */ "./modules/crop/handlers/addRow.js");
/* harmony import */ var _handlers_deleteRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/deleteRow */ "./modules/crop/handlers/deleteRow.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");





$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-row', _handlers_addRow__WEBPACK_IMPORTED_MODULE_0__["addRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_deleteRow__WEBPACK_IMPORTED_MODULE_1__["deleteRow"])
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
})
/**
 * Create award
 */
.on('click', '.award-create-button', function () {
  var row = $(this).closest('tr');
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__["default"].bind(this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(AWARD_CREATED, function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(AWARD_CREATED, self);
    new Promise(function (resolve) {
      resolve(row.addClass('changed'));
    }).then(function () {
      $('.fast-save-page').click();
    });
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var row = $(this).closest('tr');
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(AWARD_DELETE, function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(AWARD_DELETE, self);
    new Promise(function (resolve) {
      resolve(row.addClass('changed'));
    }).then(function () {
      $('.fast-save-page').click();
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

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
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var modules_gift_wrap_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/gift-wrap/helpers/positionUpdate */ "./modules/gift-wrap/helpers/positionUpdate.js");


/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](_this, {
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

/***/ "./modules/home/module.js":
/*!********************************!*\
  !*** ./modules/home/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





$(document)
/**
 * Price recount
 */
.on('input', '.recount', function () {
  var price = $('.basket-price').data('price');
  $(this).closest('.row').find('.item-sum').text(price * $(this).val());
  var totalSum = 0;
  $('.item-sum').each(function () {
    totalSum += parseInt($(this).text());
  });
  $('#total-sum').text(totalSum);
}).on('click', '.item-remove', function (e) {
  e.preventDefault();
  $(this).closest('.x_panel').hide();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).attr('href')).method('POST').success(function (resp) {
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(resp);
  }).send();
}).on('click', '#order-send', function () {
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_3__["default"])($('.recount'));
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(_objectSpread({}, data)).success(function (resp) {
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(resp);
    $('.basket-hide').click();
  }).send();
});
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

/***/ "./modules/meal-ingredient-groups/handlers/addNewRow.js":
/*!**************************************************************!*\
  !*** ./modules/meal-ingredient-groups/handlers/addNewRow.js ***!
  \**************************************************************/
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
  var tbody = $('#meal_ingredient_groups > tbody');
  var trLast = $('#meal_ingredient_groups_template').html();
  var lastID = tbody.find("tr").last().find('.group_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal-ingredient-group%/g, i + incrementId));
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredient-groups/handlers/ingredientDelete.js":
/*!*********************************************************************!*\
  !*** ./modules/meal-ingredient-groups/handlers/ingredientDelete.js ***!
  \*********************************************************************/
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

/***/ "./modules/meal-ingredient-groups/module.js":
/*!**************************************************!*\
  !*** ./modules/meal-ingredient-groups/module.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal-ingredient-groups/handlers/addNewRow.js");
/* harmony import */ var _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/ingredientDelete */ "./modules/meal-ingredient-groups/handlers/ingredientDelete.js");


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

/***/ "./modules/news-gifts-log/module.js":
/*!******************************************!*\
  !*** ./modules/news-gifts-log/module.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./modules/news-gifts-log/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./modules/news-gifts-log/styles.scss":
/*!********************************************!*\
  !*** ./modules/news-gifts-log/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ "../../../node_modules/cleave.js/dist/cleave-esm.js");

/**
 * Price init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new cleave_js__WEBPACK_IMPORTED_MODULE_0__["default"](this, {
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

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

/***/ "./modules/purchase/module.js":
/*!************************************!*\
  !*** ./modules/purchase/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./modules/purchase/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./modules/purchase/style.scss":
/*!*************************************!*\
  !*** ./modules/purchase/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](this, {
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

/***/ "./modules/shop-releases/handlers/addNewRow.js":
/*!*****************************************************!*\
  !*** ./modules/shop-releases/handlers/addNewRow.js ***!
  \*****************************************************/
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
  var tbody = $('#release > tbody');
  var trLast = $('#release_template').html();
  var lastID = tbody.find("tr").last().find('.release_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%release%/g, i + incrementId));
    tbody.find('.select2').select2();
    tbody.find('.datetimepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-releases/handlers/savePage.js":
/*!****************************************************!*\
  !*** ./modules/shop-releases/handlers/savePage.js ***!
  \****************************************************/
/*! exports provided: savePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePage", function() { return savePage; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");


/**
 * Update row to the Meal config grid
 *
 * @returns {boolean}
 */

function savePage() {
  var route = $(this).data('route');
  var tbody = $('.release-save-container').find(".changed");
  var data = $('.release-save-container').find(".changed input, .changed select, .changed textarea").serializeArray();

  if (data.length === 0) {
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('POST').data(data).send();
  tbody.each(function (n, item) {
    $(item).removeClass('changed');
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-releases/module.js":
/*!*****************************************!*\
  !*** ./modules/shop-releases/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/shop-releases/handlers/addNewRow.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/shop-releases/handlers/savePage.js");


$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
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
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_1__["savePage"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-stats/module.js":
/*!**************************************!*\
  !*** ./modules/shop-stats/module.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).on('click', 'tr', function () {
  $(this).find('td').each(function () {
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
      $(this).css('background', '#e7e7e7');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

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

/***/ "./modules/subtype-attributes/module.js":
/*!**********************************************!*\
  !*** ./modules/subtype-attributes/module.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./modules/subtype-attributes/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./modules/subtype-attributes/styles.scss":
/*!************************************************!*\
  !*** ./modules/subtype-attributes/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxDb25maXJtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vYnNlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2FkZEVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2FqYXhQYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2NvbmZpcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9mYXN0U2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9mYXN0U2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvbW9kYWxEYXRhLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3JlbW92ZUVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3N1Ym1pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGaWxlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldEZvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0U3ViRm9sZGVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2Ryb3Bab25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzIHN5bmMgbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLWxvZy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9oYW5kbGVycy9jb2xsYXBzZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9oYW5kbGVycy9yZW1vdmVBY3Rpb25UeXBlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9saXN0ZW5lcnMvdXBkYXRlSW5kZXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hZGQtbWUvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWRkLW1lL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzLWxvZy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9jaGFuZ2VUeXBlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXdhcmQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9oYW5kbGVycy9jaGFuZ2VUeXBlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2hhbmRsZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jZXJ0LXNldHVwL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY2VydC1zZXR1cC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jZXJ0LXVzZXJzL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NlcnQtdXNlcnMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY2VydC9oYW5kbGVycy9maW5kVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NlcnQvaGFuZGxlcnMvc2VuZENlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jZXJ0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvaGlkZUFyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9oaWRlVGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9zaG93QXJjaGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL3Nob3dUYXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXJvbGVzL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1yb2xlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXJzL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvaGFuZGxlcnMvYWRkUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9oYW5kbGVycy9kZWxldGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3Qvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2R5ZVNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2ZpbmdlcnByaW50LWZvcm0vaGFuZGxlcnMvc2F2ZUZpbmdlcnByaW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZmluZ2VycHJpbnQtZm9ybS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9maW5nZXJwcmludC9oYW5kbGVycy9zYXZlRmluZ2VycHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9maW5nZXJwcmludC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Fzc2V0Q2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9mYXN0U2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvcmVtb3ZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2xpc3RlbmVycy9hZGRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZWRpdC9oYW5kbGVycy9hZG1pblN0b3JlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZWRpdC9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1lZGl0L2hhbmRsZXJzL2ZpbmRVc2VyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZWRpdC9oYW5kbGVycy9zZXRNYWluLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZWRpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1ldmVudC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1ldmVudC9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1ldmVudC9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1ldmVudC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ob21lL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xldmVscy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sZXZlbHMvaGFuZGxlcnMvc2F2ZUxldmVsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sZXZlbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbGlua2VkLWFzc2V0cy9oYW5kbGVycy9zaG93QXNzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvcmVtb3ZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL3NhdmVMb2NhbGl6YXRpb25TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWdpYy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWdpYy9oYW5kbGVycy9zYXZlTWFnaWNTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQtYXNzZXQvaGFuZGxlcnMvZ2V0TGFzdE1ha2V1cEtpdElELmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50LWdyb3Vwcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsL2hhbmRsZXJzL21lYWxEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9oYW5kbGVycy9jaGFuZ2VUeXBlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtYXNzZXQvaGFuZGxlcnMvYXNzZXRUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtYXNzZXQvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWFzc2V0L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1hc3NldC9oYW5kbGVycy91cGRhdGVMaXN0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1jYXRlZ29yeS9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtY2F0ZWdvcnkvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWNhdGVnb3J5L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1jYXRlZ29yeS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvaGFuZGxlcnMvcHJpY2VJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wdWJsaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2Uvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2Ryb3B6b25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvYWRkU2hvcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9mYXN0U2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9yYWRpb0lucHV0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3BlY2lhbC1wcml6ZXMtZm9ybS9oYW5kbGVycy9maW5kVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzLWZvcm0vaGFuZGxlcnMvc2VuZEdpZnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zcGVjaWFsLXByaXplcy1mb3JtL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zdWJ0eXBlLWF0dHJpYnV0ZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90cm9waGllcy9oYW5kbGVycy9maW5kVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Ryb3BoaWVzL2hhbmRsZXJzL3NlbmRHaWZ0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdHJvcGhpZXMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdHJvcGh5LWN1cC11c2Vycy9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90cm9waHktY3VwLXVzZXJzL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Ryb3BoeS1jdXAtdXNlcnMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlUmFuZG9tTmVpZ2hib3JzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvaGlkZVBsYWNlbWVudEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2xvYWRQbGFjZW1lbnRBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvYWRkTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJjb250ZW50IiwicHVzaCIsImh0bWwiLCJfZ2V0SUQiLCJqb2luIiwiX2dldFNpemUiLCJfYmVmb3JlQnVpbGQiLCJfZ2V0SGVhZGVyIiwiX2dldEJvZHkiLCJfZ2V0Rm9vdGVyIiwiX2FmdGVyQnVpbGQiLCJvZmYiLCJtb2RhbCIsImdldE1vZGFsQ291bnRlciIsIm1vZGFsQ29uZmlybSIsIk1vZGFsQnVpbGRlciIsIm5vdGlmeSIsInpfaW5kZXgiLCJFdmVudE9ic2VydmVyIiwic3Vic2NyaWJlcnMiLCJldmVudCIsImhhbmRsZXIiLCJfbG9nIiwiZm9yRWFjaCIsInN0YXRlIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInRvVXBwZXJDYXNlIiwib2JzZXJ2ZXIiLCJTYXZlZEl0ZW1Ob3RGb3VuZCIsIkVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEJ1dHRvbiIsInRhcmdldCIsInRlbXBsYXRlIiwiaWRQbGFjZWhvbGRlciIsInJvd0lkIiwiZW1iZWRGb3JtIiwiZW1iZWRCbG9ja0lkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJsZW5ndGgiLCJkaXNwYXRjaCIsInRyaWdnZXIiLCJjb250YWluZXIiLCJwYXJlbnRzIiwiaHR0cCIsInJlcGxhY2VXaXRoIiwic2VuZCIsImRhdGFTZXQiLCJidG5DbGFzcyIsImJ0bk5hbWUiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwicGFyc2VJbnQiLCJyZWxvYWQiLCJkaXNtaXNzIiwiY2xvc2VzdCIsImN1cnJlbnRCdG4iLCJzYXZlZEl0ZW0iLCJhdHRyIiwiZ2V0Rm9ybURhdGEiLCJDT05UQUlORVJfU0VMRUNUT1IiLCJmb3JtSXRlbXMiLCJtYXJrQ2hhbmdlZCIsImRvY3VtZW50IiwibW9kYWxEYXRhIiwiY29uZmlybU1vZGFsIiwic3VibWl0Rm9ybSIsImFqYXhQYWdpbmF0aW9uIiwiYWRkRW1iZWQiLCJyZW1vdmVFbWJlZCIsImZhc3RTYXZlIiwiZmFzdFNhdmVQYWdlIiwiYWZ0ZXJCdWlsZCIsInBhcmVudCIsImlkIiwic2VyaWFsaXplQXJyYXkiLCJjYW5SZWxvYWQiLCJidXR0b24iLCJkYXRhUmVsb2FkIiwicm9vdEZvbGRlciIsImZpbGVOYW1lIiwiZ2V0U3ViRm9sZGVyIiwiZm9ybSIsImZvcm1EYXRhIiwiZWFjaCIsImN1cnJlbnRJdGVtIiwicHJvcCIsInZhbCIsImZpbGVOYW1lSGFzaCIsIm1kNSIsInN1YnN0cmluZyIsInBhdGhQYXJ0cyIsIm1hdGNoIiwid2luZG93IiwialF1ZXJ5IiwicGF0aCIsInBhdGhuYW1lIiwic3BsaXQiLCJjb250ZXh0IiwicmVxdWlyZSIsIm1vZHVsZSIsInVuZGVmaW5lZCIsInN1YnNjcmliZSIsIkFXQVJEX0NSRUFURSIsInNlbGYiLCJ1bnN1YnNjcmliZSIsImVkaXRCdG4iLCJ0ZW1wbGF0ZUlkIiwidGVtcGxhdGVQbGFjZWhvbGRlciIsImF3YXJkX2lkIiwiQVdBUkRfREVMRVRFIiwiY3JlYXRlQnRuIiwiY2hpbGRyZW4iLCJFVkVOVF9OQU1FIiwiZHJvcHpvbmVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2aWV3VVJMIiwiZHJvcHpvbmVCdWlsZGVyIiwiRHJvcHpvbmVCdWlsZGVyIiwic2V0VXBsb2FkVXJsIiwiY2FuY2VsIiwiZmlsZV9uYW1lIiwidmFsdWUiLCJzZXRQcmV2aWV3IiwiZ2V0RmlsZVBhdGgiLCJmb2xkZXIiLCJidWlsZCIsInByZXYiLCJmb2N1cyIsIkFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEIiwidG9nZ2xlQ2xhc3MiLCJjdXJyZW50RWxlbWVudCIsIlJlcXVlc3RCdWlsZGVyIiwiaW5kZXgiLCJfIiwiaXRlbSIsInVwZGF0ZUluZGV4ZXMiLCJjb2xsYXBzZVN0YXRlIiwiY29sbGFwc2VTdGF0ZXMiLCJyZW1vdmVBY3Rpb25UeXBlU3RhdGUiLCJzYXZlU3RhdGUiLCJyZXNwIiwiYWRkTmV3Um93IiwiYWRkX2NvdW50ZXIiLCJ0Ym9keSIsImxhc3RJRCIsImxhc3QiLCJpbmNyZW1lbnRJZCIsImkiLCJ0ckxhc3QiLCJzZWxlY3QyIiwiYXdhcmQiLCJjaGFuZ2UiLCJfdGhpcyIsImF3YXJkQ3JlYXRlIiwiYmluZCIsInNhdmVCdXR0b24iLCJhd2FyZERlbGV0ZSIsIm5leHQiLCJoZWlnaHQiLCJzZXRTdWJ0eXBlcyIsInN1YnR5cGUiLCJhc3NldEZvcm1TdWJ0eXBlIiwiYXNzZXRGb3JtQWN0aW9uVHlwZSIsImFzc2V0Rm9ybUNvbGxlY3Rpb24iLCJwcmljZXMiLCJlbXB0eSIsIlNVQl9UWVBFUyIsImhpZGUiLCJzaG93IiwiZWxlbWVudCIsImNvbGxlY3Rpb25faWQiLCJzYXZlQXNzZXRCdG4iLCJjaGFuZ2VUeXBlIiwiZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIiLCJCQU5ORVJfU0hPV19GT1JNIiwiVFlQRV9TRUxFQ1RfSUQiLCJzZWxlY3QiLCJzZWxlY3RlZEluZGV4Iiwib3B0aW9ucyIsInNlbGVjdGVkRWxlbWVudCIsImRyb3Bab25lSW5pdCIsInNob3dGb3JtIiwiZGF0ZXRpbWVwaWNrZXIiLCJmb3JtYXQiLCJhdXRvY2xvc2UiLCJtaW5WaWV3Iiwic2F2ZVBhZ2UiLCJyb3dzIiwiY2hhbmdlVGFiIiwiZmluZFVzZXIiLCJwcmVmaXgiLCJ1aWQiLCJ1c2VyX3RlbXBsYXRlIiwiaW5zZXJ0X2Jsb2NrIiwidXNlcnMiLCJjc3MiLCJwZXQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwieHAiLCJhdmF0YXIiLCJzZW5kQ2VydCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyIiwidHJvcGh5X2N1cHNfY291bnQiLCJtZXNzYWdlX2xlbmd0aCIsIm5hbWVfbGVuZ3RoIiwiZXZlbnRfbGVuZ3RoIiwiZ3JvdXBfbGVuZ3RoIiwiY29weUFkcCIsImFkcElkc0ZpZWxkIiwiYWRwSWRzIiwibiIsImV4ZWNDb21tYW5kIiwiY29weUFzc2V0cyIsImFzc2V0SWRzRmllbGQiLCJhc3NldElkcyIsImhpZGVBcmNoaXZlIiwiaGlkZVRhc2tzIiwic2hvd0FyY2hpdmUiLCJhY3Rpb24iLCJzaG93VGFza3MiLCJkaXJlY3Rpb24iLCJ3cmFwcGVyIiwiZ2V0U2VsZWN0aW9uIiwiQ09MTEVDVElPTl9TSE9XX0ZPUk0iLCJhc3NldFByZXZpZXdUZW1wbGF0ZSIsImFzc2V0cyIsImN1cnJlbnRBc3NldCIsInByZXZpZXdfdXJsIiwiU29ydGFibGUiLCJncm91cCIsInJlbW92ZUNsb25lT25IaWRlIiwib25FbmQiLCJwb3NpdGlvbiIsIm1hcmtJbnB1dEFzQ2hhbmdlZCIsInNvcnRhYmxlSW5pdCIsImhpZGVBZGRpdGlvbmFsUm93cyIsImFkZFJvdyIsImRlbGV0ZVJvdyIsInJvdyIsIkFXQVJEX0NSRUFURUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJsYXN0SURTIiwiZmlyc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJzbGljZSIsImxhc3RJbmRleE9mIiwicmVhZHkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2F2ZURwYVN0YXRlIiwibGFzdFJvdyIsImNvbG9ycGlja2VyIiwiY2hhbmdlUm93SW5kZXgiLCJyb3dJbmRleCIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiaW5kZXhPZiIsIkRZRV9DT05UQUlORVJfU0VMRUNUT1IiLCJtYXJrQ2hhbmdlZFRyIiwiZHllU2F2ZVBhZ2UiLCJzYXZlRmluZ2VycHJpbnQiLCJXZWJHTEZpbmdlclByaW50IiwiJGRlZmF1bHRWYXJzIiwiRmluZEZpbmdlclByaW50IiwiZXhjbHVkZXMiLCJhdmFpbGFibGVTY3JlZW5SZXNvbHV0aW9uIiwiZW51bWVyYXRlRGV2aWNlcyIsImRvTm90VHJhY2siLCJmaW5nZXJwcmludCIsImZpbmdlclByaW50SGFuZGxlciIsImNvbXBvbmVudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnQiLCJGaW5nZXJwcmludDIiLCJ4NjRoYXNoMTI4Iiwic2VuZFByb21pc2UiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiZ2V0IiwiY29tbWVudCIsIkdJRlRfV1JBUF9ST1dfQURERUQiLCJjdXJyZW50SW5wdXQiLCJhc3NldElEIiwiY3VycmVudEFzc2V0RHVwbGljYXRlIiwiZXJyIiwicG9zaXRpb25VcGRhdGUiLCJidXR0b25VcmwiLCJhc3NldENoYW5nZWQiLCJyZW1vdmVSb3ciLCJhZG1pblN0b3JlIiwic2VsZWN0ZWRfaWQiLCJzZXRNYWluIiwiaXNfbWFpbiIsIm1haW5faWQiLCJwcmVwZW5kIiwicHJpY2UiLCJ0b3RhbFN1bSIsInNhdmVMZXZlbFN0YXRlIiwicm93VG9TYXZlIiwic2hvd0Fzc2V0IiwiU1dPV19BU1NFVF9ST1VURSIsImhhc093blByb3BlcnR5Iiwic2F2ZUxvY2FsaXphdGlvblN0YXRlIiwiY3VycmVudEtleSIsImN1cnJlbnRLZXlEdXBsaWNhdGUiLCJzYXZlTWFnaWNTdGF0ZSIsIm1ha2V1cF9raXRfaWQiLCJnZXRMYXN0TWFrZXVwS2l0SUQiLCJNQUtFVVBfS0lUX1NIT1dfRk9STSIsImluZ3JlZGllbnREZWxldGUiLCJzYXZlTWVhbEluZ3JlZGllbnRzU3RhdGUiLCJtZWFsRGVsZXRlIiwic2F2ZU1lYWxTdGF0ZSIsIk5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSIsIlRSQVNIIiwiVFJBU0hfRklFTERTX0lEIiwiU0VMRUNUX0lEIiwidHJhc2hGaWVsZHMiLCJhc3NldFRhYiIsImNhdGVnb3J5IiwiYXNzZXRfaWRzIiwidXBkYXRlTGlzdCIsImFzaWduTGlzdCIsImFzc2V0SWQiLCJyZWNvcmRfcGVyX3BhZ2UiLCJoZWFkIiwidGFpbCIsIlBST0RVQ1RfU0hPV19GT1JNIiwiQ2xlYXZlIiwibnVtZXJhbCIsInJhd1ZhbHVlVHJpbVByZWZpeCIsIm9uVmFsdWVDaGFuZ2VkIiwicGFyc2VGbG9hdCIsInJhd1ZhbHVlIiwicHJvZHVjdFByaWNlIiwicHJpY2VJbml0Iiwib3JkZXIiLCJwcmV2aWV3SGlkZGVuSW5wdXQiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUluaXQiLCJXQUxLX0NBVEVHT1JZIiwiUlVOX0NBVEVHT1JZIiwic2VsZWN0VmFsIiwiZW1iZWQiLCJTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNIiwidGFibGUiLCJkZXBhcnRtZW50SWQiLCJjb3VudGVyIiwiZGF0YU5hbWVQcmVmaXgiLCJmYXN0U2F2ZUNvbnRhaW5lciIsIml0ZW1OYW1lIiwiYWxsSXRlbXMiLCJyYWRpbyIsInByZXZpZXdVcmxFbGVtZW50IiwicmFkaW9JbnB1dCIsImFkZFNob3AiLCJzYXZlU291bmRTdGF0ZSIsInNlbmRHaWZ0IiwiVEFNQVRPT0xfU0hPV19GT1JNIiwiU0VBUkNIX1VTRVJfQVNTRVRTIiwiU1VCTUlUX1VTRVJfUEFSVF9GT1JNIiwiREVMRVRFX05FSUdIQk9SIiwiQUREX05FSUdIQk9SIiwicGxhY2VtZW50TmFtZSIsIm5laWdoYm9yc0NvdW50IiwiaXMiLCJzaWJsaW5ncyIsInBsYWNlbWVudCIsImxvYWRQYXJ0IiwiUExBQ0VNRU5UX0FTU0VUU19ST1VURSIsIml0ZW1zIiwicG9wb3ZlciIsIm5laWdoYm9yX2lkIiwic3RhdHVzX3RleHQiLCJzZWFyY2hVc2VyQXNzZXRzIiwic3VibWl0VXNlclBhcnRGb3JtIiwiZGVsZXRlTmVpZ2hib3IiLCJhZGROZWlnaGJvciIsImxvYWRQbGFjZW1lbnRBc3NldHMiLCJjaGFuZ2VQbGFjZW1lbnQiLCJjaGFuZ2VSYW5kb21OZWlnaGJvcnMiLCJoaWRlUGxhY2VtZW50QXNzZXRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFF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R0FDLHNFQUFXO0FBRVhqZCxDQUFDLENBQUNpSixRQUFEO0FBRUc7OztBQUZKLENBS0szSCxFQUxMLENBS1EsT0FMUixFQUtpQixjQUxqQixFQUtpQzRiLHFFQUxqQztBQU9JOzs7QUFQSixDQVVLNWIsRUFWTCxDQVVRLFFBVlIsRUFVa0Isc0JBVmxCLEVBVTBDNmIsaUVBVjFDO0FBWUk7OztBQVpKLENBZUs3YixFQWZMLENBZVEsUUFmUixFQWVrQixzQkFmbEIsRUFlMEM4Yix1RUFmMUM7QUFpQkk7OztBQWpCSixDQW9CSzliLEVBcEJMLENBb0JRLE9BcEJSLEVBb0JpQixjQXBCakIsRUFvQmlDK2IscUVBcEJqQyxFOzs7Ozs7Ozs7Ozs7QUM5QkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKlxuICogQmFzZSBzaXplc1xuICpcbiAqIEB0eXBlIHt7c206IHN0cmluZywgbGc6IHN0cmluZ319XG4gKi9cbmV4cG9ydCBjb25zdCBTSVpFUyA9IHtcbiAgICBzbTogJ3NtJyxcbiAgICBtZDogJ21kJyxcbiAgICBsZzogJ2xnJyxcbn07XG4iLCJpbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuXG4vKipcbiAqIExvYWRpbmcgdGV4dFxuICogSXQgd2lsbCBiZSBzaG93biBhZnRlciB0aGUgc3RhcnQgb2YgaW1hZ2UgdXBsb2FkaW5nXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgTE9BRElOR19URVhUID0gJ0xvYWRpbmcuLi4nO1xuXG4vKipcbiAqIERyb3B6b25lIGJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkcm9wem9uZUNvbnRhaW5lclxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihkcm9wem9uZUNvbnRhaW5lciwgY29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9kcm9wem9uZUNvbnRhaW5lciA9IGRyb3B6b25lQ29udGFpbmVyO1xuICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24gPSAkKGRyb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHJvcHpvbmUtY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVybCB0byB1cGxvYWRpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBzZXRVcGxvYWRVcmwodXJsKSB7XG4gICAgICAgIHRoaXMuX3VwbG9hZFVybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGRlZmF1bHQgcHJldmlldyBpbWFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc2V0UHJldmlldyhuYW1lLCB1cmwpIHtcbiAgICAgICAgdGhpcy5fcHJldmlldyA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGVycm9yIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGVycm9yKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2Vycm9yQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbmNlbCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBjYW5jZWwoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fY2FuY2VsQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHN1Y2Nlc3MgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgc3VjY2VzcyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9zdWNjZXNzQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgZHJvcHpvbmVcbiAgICAgKiBAcmV0dXJucyB7RHJvcHpvbmV9XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBfZHJvcHpvbmVCdWlsZGVyID0gdGhpcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCBhZnRlciBmYWlsXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUZhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnZHotc3RhcnRlZCcpO1xuICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmR6LXByZXZpZXcnKS5yZW1vdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgdXJsOiB0aGlzLl91cGxvYWRVcmwsXG4gICAgICAgICAgICB0aHVtYm5haWxXaWR0aDogbnVsbCxcbiAgICAgICAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgIHVwbG9hZE11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6ICdpbWFnZS8qJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1jc3JmLXRva2VuJzogQ1NSRl9UT0tFTlxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU2V0IGN1cnJlbnQgaW1hZ2UgaW4gdGhlIGRyb3B6b25lIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcgJiYgISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LnVybCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInRodW1ibmFpbFwiLCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LnVybCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQWRkZWQgZmlsZSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChMT0FESU5HX1RFWFQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJlcnJvclwiLCBmdW5jdGlvbiAoZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX2Vycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX2Vycm9yQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFN1Y2Nlc3MgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsIGZ1bmN0aW9uIChmaWxlLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9zdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX3N1Y2Nlc3NDYWxsYmFjayhmaWxlLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhciBidXR0b24gaGFuZGxlclxuICAgICAgICAgKiBDbGVhciBmaWxlIGluZm8gaW4gZHJvcHpvbmVcbiAgICAgICAgICovXG4gICAgICAgIGlmICghIXRoaXMuX2NhbmNlbEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUZhaWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9jYW5jZWxDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9jYW5jZWxDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gbmV3IERyb3B6b25lKHRoaXMuX2Ryb3B6b25lQ29udGFpbmVyLCB7Li4uY29uZmlnLCAuLi50aGlzLl9jb25maWd9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vZXJyb3JIYW5kbGVyJztcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiLi9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEhUVFAgUmVxdWVzdCBCdWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuX21ldGhvZCA9ICdnZXQnO1xuICAgICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICB0aGlzLl9zdWNjZXNzID0gc3VjY2Vzc0hhbmRsZXI7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuXG4gICAgbWV0aG9kKG1ldGhvZCkge1xuICAgICAgICB0aGlzLl9tZXRob2QgPSBtZXRob2Q7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVycm9yKGZuKSB7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3VjY2Vzcyhmbikge1xuICAgICAgICB0aGlzLl9zdWNjZXNzID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29tcGxldGUoZm4pIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZW5kKCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLl91cmwsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLl9tZXRob2QsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLl9kYXRhLFxuICAgICAgICAgICAgZXJyb3I6IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFyZXNwb25zZS5yZXNwb25zZUpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IocmVzcG9uc2UucmVzcG9uc2VKU09OKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogdGhpcy5fc3VjY2VzcyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiB0aGlzLl9jb21wbGV0ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB0aGUgcm91dGVcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5yb3V0ZSkge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gcmVzcG9uc2Uucm91dGU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IG1haW4gZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBhbGwgbWVzc2FnZXNcbiAgICAgKi9cbiAgICBpZighIXJlc3BvbnNlLmVycm9ycykge1xuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZS5lcnJvcnMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZS5lcnJvcnNba2V5XS5tYXAoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGlmeUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9SZXF1ZXN0QnVpbGRlcic7XG4iLCJpbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuXG4vKipcbiAqIEJhc2UgZXJyb3IgaGFuZGxlclxuICpcbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvKipcbiAgICAgKiBTaG93IG1haW4gZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcbiAgICAgICAgbm90aWZ5U3VjY2VzcyhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vbW9kYWwnO1xuaW1wb3J0ICcuL29ic2VydmVyJztcbmltcG9ydCAnLi9odHRwJztcbiIsImNvbnN0IG1vZGFsc0NvbnRhaW5lciA9ICQoJ2JvZHknKTtcblxuY29uc3QgTU9EQUxfU0laRVMgPSB7XG4gICAgc206ICdtb2RhbC1zbScsXG4gICAgbWQ6ICdtb2RhbC1tZCcsXG4gICAgbGc6ICdtb2RhbC1sZycsXG59O1xuXG4vKipcbiAqIFVuaXF1ZSBpbmRleCBvZiB0aGUgbW9kYWxcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbW9kYWxJbmRleCA9IDA7XG5cbi8qKlxuICogQ291bnRlciBvZiB0aGUgbW9kYWxzIGF0IHRoZSBwYWdlXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IG1vZGFsQ291bnRlciA9IDA7XG5cbi8qKlxuICogTW9kYWwgQnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbW9kYWxJbmRleCsrO1xuICAgICAgICB0aGlzLl9pZCA9ICdtb2RhbHMtY29udGFpbmVyLWl0ZW0tJyArIG1vZGFsSW5kZXg7XG4gICAgfVxuXG4gICAgc2l6ZShzaXplKSB7XG4gICAgICAgIGlmICghIU1PREFMX1NJWkVTW3NpemVdKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gTU9EQUxfU0laRVNbc2l6ZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWFkZXIoaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuX2hlYWRlciA9IGhlYWRlcjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBib2R5KGJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keSA9IGJvZHk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZm9vdGVyKGZvb3Rlcikge1xuICAgICAgICB0aGlzLl9mb290ZXIgPSBmb290ZXI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGF0YXNldChkYXRhc2V0KSB7XG4gICAgICAgIHRoaXMuX2RhdGFzZXQgPSBkYXRhc2V0O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9nZXRJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIF9nZXRTaXplKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9zaXplID8gdGhpcy5fc2l6ZSA6IE1PREFMX1NJWkVTLm1kO1xuICAgIH1cblxuICAgIF9nZXRIZWFkZXIoKSB7XG4gICAgICAgIGlmICghIXRoaXMuX2hlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JHt0aGlzLl9oZWFkZXJ9PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBfZ2V0Rm9vdGVyKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKCEhdGhpcy5fZm9vdGVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkKGA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+PC9kaXY+YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCQoYFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIGApKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZm9vdGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9nZXRCb2R5KCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKCEhdGhpcy5fYm9keSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gJChgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj48L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fYm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYmVmb3JlIGJ1aWxkIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBiZWZvcmVCdWlsZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9iZWZvcmVCdWlsZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBhZnRlciBidWlsZCBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgYWZ0ZXJCdWlsZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2FmdGVyQnVpbGQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9kYWwoY29udGVudCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogRGF0YSBhdHRyaWJ1dGVzXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGxldCBkYXRhc2V0ID0gW107XG4gICAgICAgIGlmICghIXRoaXMuX2RhdGFzZXQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5fZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIGRhdGFzZXQucHVzaChgZGF0YS0ke25hbWV9PVwiJHt0aGlzLl9kYXRhc2V0W25hbWVdfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaHRtbCA9ICQoYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7IHRoaXMuX2dldElEKCkgfVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgJHtkYXRhc2V0LmpvaW4oJyAnKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgJHt0aGlzLl9nZXRTaXplKCl9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gKTtcblxuICAgICAgICBpZiAoISFjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkoY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCB0aGUgYmVmb3JlQnVpbGQgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkKCk7XG5cbiAgICAgICAgaHRtbC5maW5kKCcubW9kYWwtY29udGVudCcpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEhlYWRlcigpKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRCb2R5KCkpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEZvb3RlcigpKTtcblxuICAgICAgICBtb2RhbHNDb250YWluZXIuYXBwZW5kKGh0bWwpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIHRoZSBhZnRlckJ1aWxkIGNhbGxiYWNrXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9hZnRlckJ1aWxkKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHVwZGF0ZSBjb3VudGVyIG9mIG1vZGFscyBhdCB0aGUgcGFnZVxuICAgICAgICAgKi9cbiAgICAgICAgbW9kYWxDb3VudGVyKys7XG5cbiAgICAgICAgJCgnIycgKyB0aGlzLl9nZXRJRCgpKVxuICAgICAgICAgICAgLm9uKCdoaWRkZW4uYnMubW9kYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9kYWxDb3VudGVyLS07XG4gICAgICAgICAgICAgICAgJCgnIycgKyB0aGlzLl9nZXRJRCgpKVxuICAgICAgICAgICAgICAgICAgICAub2ZmKCdoaWRkZW4uYnMubW9kYWwnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1vZGFsKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEdldCBjb3VudGVyIG9mIG1vZGFscyBhdCB0aGUgcGFnZVxuICpcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RhbENvdW50ZXIoKSB7XG4gICAgcmV0dXJuIG1vZGFsQ291bnRlcjtcbn1cbiIsImltcG9ydCAnLi9Nb2RhbEJ1aWxkZXInXG5pbXBvcnQgJy4vbW9kYWxDb25maXJtJ1xuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBNb2RhbCBjb25maXJtXG4gKlxuICogQHBhcmFtIG1lc3NhZ2VcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gbW9kYWxDb25maXJtKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKG1lc3NhZ2UpXG4gICAgICAgIC5mb290ZXIoJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgJ3RleHQnOiAnQ29uZmlybScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6IGNhbGxiYWNrXG4gICAgICAgIH0pKVxuICAgICAgICAubW9kYWwoKTtcbn1cbiIsIi8qKlxuICogTm90aWZ5IGhlbHBlclxuICpcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKiBAcGFyYW0gdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZnkobWVzc2FnZSwgdHlwZSkge1xuICAgICQubm90aWZ5KHttZXNzYWdlOiBtZXNzYWdlfSx7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHpfaW5kZXg6IDEwNTFcbiAgICB9KTtcbn1cbiIsImltcG9ydCBub3RpZnkgZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIG5vdGlmeShtZXNzYWdlLCAnZGFuZ2VyJyk7XG59XG4iLCJpbXBvcnQgbm90aWZ5IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBub3RpZnkobWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcbn1cbiIsIi8qKlxuICogRXZlbnQgb2JzZXJ2ZXJcbiAqL1xuY2xhc3MgRXZlbnRPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZXJzID0ge307XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlIChldmVudCwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLl9sb2coJ3N1YnNjcmliZScsIGV2ZW50KTtcblxuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0ucHVzaChoYW5kbGVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkaXNwYXRjaCAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fbG9nKCdkaXNwYXRjaCcsIGV2ZW50KTtcblxuICAgICAgICBpZiAoISF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0uZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGRhdGEsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1bnN1YnNjcmliZSAoZXZlbnQsIHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2xvZygndW5zdWJzY3JpYmUnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCEhdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gdGhpcy5zdWJzY3JpYmVyc1tldmVudF0uZmlsdGVyKGhhbmRsZXIgPT4gaGFuZGxlciAhPT0gc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2xvZyhtZXRob2QsIGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1ldGhvZC50b1VwcGVyQ2FzZSgpLCAnOicsICdbJywgZXZlbnQsICddJyk7XG4gICAgfVxufVxuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBFdmVudE9ic2VydmVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyO1xuIiwiaW1wb3J0ICcuL0V2ZW50T2JzZXJ2ZXInO1xuIiwiLyoqXG4gKiBTYXZlZCBpdGVtIG5vdCBmb3VuZFxuICpcbiAqIFVzaW5nIGluIGZhc3RTYXZlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFNhdmVkSXRlbU5vdEZvdW5kIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1NhdmVkSXRlbU5vdEZvdW5kJztcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcblxuLyoqXG4gKiBBZGQgZW1iZWQgZWxlbWVudFxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG4gICAgY29uc3QgdGFyZ2V0ID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0YXJnZXQnKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGN1cnJlbnRCdXR0b24uZGF0YSgndGVtcGxhdGUnKTtcbiAgICBjb25zdCBpZFBsYWNlaG9sZGVyID0gY3VycmVudEJ1dHRvbi5kYXRhKCdpZHBsYWNlcG9sZGVyJyk7XG5cbiAgICBsZXQgcm93SWQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3Jvd2lkJyk7XG4gICAgY3VycmVudEJ1dHRvbi5kYXRhKCdyb3dpZCcsICsrcm93SWQpO1xuXG4gICAgbGV0IGVtYmVkRm9ybSA9ICQoJyMnKyB0ZW1wbGF0ZSkuaHRtbCgpO1xuICAgIGNvbnN0IGVtYmVkQmxvY2tJZCA9IHJvd0lkICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKS50b1N0cmluZygxNik7XG4gICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoLyVlbWJlZEJsb2NrSWQlL2csIGVtYmVkQmxvY2tJZCk7XG5cbiAgICBpZiAoISFpZFBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGVtYmVkRm9ybSA9IGVtYmVkRm9ybS5yZXBsYWNlKCBuZXcgUmVnRXhwKGlkUGxhY2Vob2xkZXIsIFwiZ1wiKSwgcm93SWQpXG4gICAgfVxuXG4gICAgJCgnIycgKyB0YXJnZXQpLmFwcGVuZChlbWJlZEZvcm0pO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgZGlzcGF0Y2hcbiAgICAgKi9cbiAgICBjb25zdCBldmVudCA9IGN1cnJlbnRCdXR0b24uZGF0YSgnZXZlbnQnKTtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQubGVuZ3RoKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGV2ZW50LCB7XG4gICAgICAgICAgICBlbWJlZEJsb2NrSWQ6IGVtYmVkQmxvY2tJZFxuICAgICAgICB9KVxuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLnRyaWdnZXIoJ2FpX2FuaW1hdGlvbicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqQWpheCBwYWdpbmF0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSAkKHRoaXMpLnBhcmVudHMoJy5hamF4LXBhZ2luYXRpb24nKS5kYXRhKCdjb250YWluZXInKTtcbiAgIFxuICAgIG5ldyBodHRwKHRoaXMuaHJlZilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgJCgnIycgKyBjb250YWluZXIpLnJlcGxhY2VXaXRoKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogT3BlbiBjb25maXJtIG1vZGFsIGJlZm9yZSBhY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XG4gICAgY29uc3QgdXJsID0gdGhpcy5ocmVmO1xuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKGRhdGFTZXQuaGVhZGVyKVxuICAgICAgICAuZm9vdGVyKFxuICAgICAgICAgICAgJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgICAgICdjbGFzcyc6IChkYXRhU2V0LmJ0bkNsYXNzIHx8ICdidG4tc20gYnRuLXN1Y2Nlc3MnKSArICcgYnRuJyxcbiAgICAgICAgICAgICAgICAndGV4dCc6IGRhdGFTZXQuYnRuTmFtZSB8fCAnQ29uZmlybScsXG4gICAgICAgICAgICAgICAgJ2NsaWNrJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ldyBodHRwKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZXRob2QoZGF0YVNldC5tZXRob2QgfHwgJ2dldCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhZGF0YVNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChkYXRhU2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRhdGFTZXQucmVsb2FkKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0YVNldC5kaXNtaXNzKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLmNsb3Nlc3QoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAubW9kYWwoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSBjdXJyZW50QnRuLmNsb3Nlc3QoJy5mYXN0LXNhdmUtY29udGFpbmVyJyk7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShnZXRGb3JtRGF0YShzYXZlZEl0ZW0pKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9TRUxFQ1RPUiA9ICcuZmFzdC1zYXZlLXBhZ2UtY29udGFpbmVyJztcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJChDT05UQUlORVJfU0VMRUNUT1IpO1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxuICAgICAqL1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIE1hcmsgZm9ybSdzIGVsZW1lbnRzIGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9mYXN0U2F2ZVwiO1xuaW1wb3J0IGFkZEVtYmVkIGZyb20gXCIuL2FkZEVtYmVkXCI7XG5pbXBvcnQgcmVtb3ZlRW1iZWQgZnJvbSBcIi4vcmVtb3ZlRW1iZWRcIjtcbmltcG9ydCBzdWJtaXRGb3JtIGZyb20gXCIuL3N1Ym1pdEZvcm1cIjtcbmltcG9ydCBhamF4UGFnaW5hdGlvbiBmcm9tIFwiLi9hamF4UGFnaW5hdGlvblwiO1xuaW1wb3J0IGNvbmZpcm1Nb2RhbCBmcm9tIFwiLi9jb25maXJtTW9kYWxcIjtcbmltcG9ydCBtb2RhbERhdGEgZnJvbSBcIi4vbW9kYWxEYXRhXCI7XG5pbXBvcnQgZmFzdFNhdmVQYWdlLCB7Q09OVEFJTkVSX1NFTEVDVE9SLCBtYXJrQ2hhbmdlZH0gZnJvbSBcIi4vZmFzdFNhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIG1vZGFsIHdpdGggZGF0YSBmcm9tIHNlcnZlciBieSByZXF1ZXN0XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1tb2RhbC1hY3Rpb24nLCBtb2RhbERhdGEpXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGNvbmZpcm0gbW9kYWxcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LWNvbmZpcm0tYWN0aW9uJywgY29uZmlybU1vZGFsKVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGZvcm0gZGF0YVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtc3VibWl0LWFjdGlvbicsIHN1Ym1pdEZvcm0pXG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1wYWdpbmF0aW9uIGEnLCBhamF4UGFnaW5hdGlvbilcblxuICAgIC8qKlxuICAgICAqIEFkZCBlbWJlZCBlbGVtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLWVtYmVkJywgYWRkRW1iZWQpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1iZWQgZWxlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJtLWVtYmVkJywgcmVtb3ZlRW1iZWQpXG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgdGhlIGRhdGEgb2YgYW4gZW50aXR5XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZmFzdC1zYXZlJywgZmFzdFNhdmUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCBgJHtDT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZCk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIHBhZ2VcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soZmFzdFNhdmVQYWdlKTtcbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIE9wZW4gbW9kYWwgd2l0aCBmb3JtIGJ5IHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgIG5ldyBodHRwKHRoaXMuaHJlZilcbiAgICAgICAgLm1ldGhvZCh0aGlzLmRhdGFzZXQubWV0aG9kIHx8ICdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2l6ZShTSVpFUy5sZylcbiAgICAgICAgICAgICAgICAuZGF0YXNldCh7XG4gICAgICAgICAgICAgICAgICAgIHJlbG9hZDogdGhpcy5kYXRhc2V0LnJlbG9hZCB8fCAxLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmhlYWRlcih0aGlzLmRhdGFzZXQuaGVhZGVyKVxuICAgICAgICAgICAgICAgIC5hZnRlckJ1aWxkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaCh0aGlzLmRhdGFzZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1vZGFsKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5cbi8qKlxuICogUmVtb3ZlIGVtYmVkZWQgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmVudCA9ICEhdGhpcy5kYXRhc2V0LnBhcmVudCA/ICQodGhpcykuY2xvc2VzdCh0aGlzLmRhdGFzZXQucGFyZW50KSA6ICQodGhpcykucGFyZW50KCk7XG5cbiAgICBpZiAoIXRoaXMuZGF0YXNldC5pZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIoJ0FyZSB5b3Ugc3VyZT8nKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInLFxuICAgICAgICAgICAgJ3RleHQnOiAnRGVsZXRlJyxcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxuICAgICAgICAgICAgJ2NsaWNrJzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICAgICAgLm1vZGFsKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtnZXRNb2RhbENvdW50ZXJ9IGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBTdWJtaXQgZm9ybVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAuZGF0YShjdXJyZW50QnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKS5zZXJpYWxpemVBcnJheSgpKVxuICAgICAgICAubWV0aG9kKHRoaXMuZGF0YXNldC5tZXRob2QgfHwgJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghIXRoaXMuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSAhPT0gJ2Vycm9yJyAmJiBjYW5SZWxvYWQodGhpcykpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuZGF0YXNldC5kaXNtaXNzKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocmVzcG9uc2UudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDYW4gcmVsb2FkIHRoZSBwYWdlXG4gKlxuICogQHBhcmFtIGJ1dHRvblxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNhblJlbG9hZChidXR0b24pIHtcbiAgICBpZiAocGFyc2VJbnQoYnV0dG9uLmRhdGFzZXQucmVsb2FkKSA9PT0gMSkge1xuICAgICAgICBpZiAoZ2V0TW9kYWxDb3VudGVyKCkgPCAyKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhUmVsb2FkID0gJChidXR0b24pLmNsb3Nlc3QoJy5tb2RhbCcpLmRhdGEoJ3JlbG9hZCcpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhUmVsb2FkID09PSB0eXBlb2YgdW5kZWZpbmVkIHx8IGRhdGFSZWxvYWQgPT09IGZhbHNlIHx8IHBhcnNlSW50KGRhdGFSZWxvYWQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgZ2V0U3ViRm9sZGVyIGZyb20gXCIuL2dldFN1YkZvbGRlclwiO1xuXG4vKipcbiAqIEdldCBmaWxlIHBhdGggZnJvbSBzdG9yYWdlIHdpdGggc3ViIGZvbGRlcnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcm9vdEZvbGRlciBSb290IGZvbGRlciBpbiB0aGUgc3RvcmFnZVxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lICAgRmlsZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJvb3RGb2xkZXIsIGZpbGVOYW1lKSB7XG4gICAgcmV0dXJuICcvc3RvcmFnZS8nICsgcm9vdEZvbGRlciArICcvJyArIGdldFN1YkZvbGRlcihmaWxlTmFtZSkgKyAnLycgKyBmaWxlTmFtZTtcbn1cbiIsIi8qKlxuICogR2V0IGZvcm0gZGF0YVxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBmb3JtIEZvcm0gZWxlbWVudFxuICpcbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZm9ybSkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0ge307XG5cbiAgICBsZXQgZm9ybUl0ZW1zID0gZm9ybS5maW5kKCdpbnB1dCwgc2VsZWN0Jyk7XG4gICAgaWYgKCFmb3JtSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGZvcm1JdGVtcyA9IGZvcm07XG4gICAgfVxuXG4gICAgZm9ybUl0ZW1zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgICAgIHN3aXRjaCAoY3VycmVudEl0ZW0uYXR0cigndHlwZScpKSB7XG4gICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgZm9ybURhdGFbY3VycmVudEl0ZW0uYXR0cignbmFtZScpXSA9ICEhY3VycmVudEl0ZW0ucHJvcCggXCJjaGVja2VkXCIgKSAqIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZvcm1EYXRhW2N1cnJlbnRJdGVtLmF0dHIoJ25hbWUnKV0gPSBjdXJyZW50SXRlbS52YWwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xufVxuIiwiaW1wb3J0IG1kNSBmcm9tICdibHVlaW1wLW1kNSc7XG5cbi8qKlxuICogR2V0IHN1YiBmb2xkZXJzIG9mIHRoZSBmaWxlXG4gKlxuICogUmVzdWx0IG9mIHRoZSBmdW5jdGlvbiBsb29rcyBsaWtlOiBhMS9iMi9jM1xuICogV2hlcmUgbWQ1IG9mIHRoZSBmaWxlID0gYTFiMmMzLi4uLi4uLi4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgdGhlIGZpbGVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZmlsZU5hbWUpIHtcbiAgICBjb25zdCBmaWxlTmFtZUhhc2ggPSBtZDUoZmlsZU5hbWUpLnN1YnN0cmluZygwLCA2KTtcbiAgICBjb25zdCBwYXRoUGFydHMgPSBmaWxlTmFtZUhhc2gubWF0Y2goLy57MSwyfS9nKTtcbiAgICByZXR1cm4gcGF0aFBhcnRzLmpvaW4oJy8nKTtcbn1cbiIsIi8qKlxuICogalF1ZXJ5XG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuJCA9ICQ7XG53aW5kb3cualF1ZXJ5ID0gJDtcblxuLyoqXG4gKiBCb290c3RyYXBcbiAqL1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAnO1xuXG4vKipcbiAqIEJvb3RzdHJhcCBDY29sb3JwaWNrZXJcbiAqL1xuaW1wb3J0ICdib290c3RyYXAtY29sb3JwaWNrZXInO1xuaW1wb3J0ICdib290c3RyYXAtY29sb3JwaWNrZXIvZGlzdC9jc3MvYm9vdHN0cmFwLWNvbG9ycGlja2VyLmNzcyc7XG5cbi8qKlxuICogRm9udCBBd2Vzb21lXG4gKi9cbmltcG9ydCAnZm9udC1hd2Vzb21lL3Njc3MvZm9udC1hd2Vzb21lLnNjc3MnO1xuXG4vKipcbiAqIEV4dGVybmFsIG1vZHVsZXNcbiAqIFRPRE86IGdldCBieSBucG1cbiAqL1xuaW1wb3J0ICcuL3ZlbmRvci9hbmltYXRlJztcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLWNvbmZpcm1hdGlvbic7XG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcic7XG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1ub3RpZnknO1xuaW1wb3J0ICcuL3ZlbmRvci9zZWxlY3QyJztcbmltcG9ydCAnLi92ZW5kb3IvZWtrby1saWdodGJveCc7XG5pbXBvcnQgJy4vdmVuZG9yL3RoZW1lJztcblxuLyoqXG4gKiBDb21wb25lbnRzXG4gKi9cbmltcG9ydCAnLi9jb21wb25lbnRzJztcblxuLyoqXG4gKiBIYW5kbGVyc1xuICovXG5pbXBvcnQgJy4vaGFuZGxlcnMnO1xuXG4vKipcbiAqIFN0eWxlc1xuICovXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG4vKipcbiAqIE1vZHVsZXMgbG9hZGVyXG4gKi9cbmNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xuY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnbW9kdWxlcycsIHRydWUsIC9tb2R1bGVcXC5qcyQvKTtcbmlmIChwYXRoWzFdLmxlbmd0aCA+IDIpIHtcbiAgICAvKipcbiAgICAgKiBUbyBjcmVhdGluZyBkaWZmZXJlbnQgZmlsZXMgZm9yIGVhY2ggbW9kdWxlXG4gICAgICogKERvbid0IGZvcmdldCBucG0gaSAtLXNhdmUtZGV2IGJ1bmRsZS1sb2FkZXIpXG4gICAgICogY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnYnVuZGxlLWxvYWRlciFtb2R1bGVzJywgdHJ1ZSwgL2luZGV4XFwuanMkLyk7XG4gICAgICovXG4gICAgY29udGV4dC5rZXlzKCkubWFwKG1vZHVsZSA9PiB7XG4gICAgICAgIGlmIChtb2R1bGUuc3BsaXQoJy8nKVsxXSA9PT0gJ3NldHRpbmdzJykge1xuICAgICAgICAgICAgaWYgKHBhdGhbMl0gIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuc3BsaXQoJy8nKVszXSA9PT0gcGF0aFsyXSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6JywgcGF0aFsyXSk7XG4gICAgICAgICAgICAgICAgY29udGV4dChtb2R1bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZHVsZS5zcGxpdCgnLycpWzFdID09PSBwYXRoWzFdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTU9EVUxFOicsIHBhdGhbMV0pO1xuICAgICAgICAgICAgY29udGV4dChtb2R1bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocGF0aFsxXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnRleHQoJy4vZGVmYXVsdC9tb2R1bGUuanMnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnTU9EVUxFOiBwdWJsaWMnKTtcbiAgICBjb250ZXh0KCcuL3B1YmxpYy9tb2R1bGUuanMnKTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIHNlbGYpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBlZGl0QnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZClcbiAgICAgICAgICAgIC5odG1sKClcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKHRoaXMuZGF0YXNldC50ZW1wbGF0ZVBsYWNlaG9sZGVyLCBcImdcIiksIGRhdGEuYXdhcmRfaWQpO1xuXG4gICAgICAgIGN1cnJlbnRCdG4ucGFyZW50KCkuYXBwZW5kKGVkaXRCdG4pO1xuICAgICAgICBjdXJyZW50QnRuLnJlbW92ZSgpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZCkuaHRtbCgpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kKGNyZWF0ZUJ0bik7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5pbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXQgYWZ0ZXIgdGhlIG1vZGFsIG9wZW5lZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoRVZFTlRfTkFNRSkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShFVkVOVF9OQU1FLCAoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBjb250YWluZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3B6b25lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZScpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3IFVSTCBoaWRkZW4gaW5wdXRcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHByZXZpZXdVUkwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoZHJvcHpvbmVFbGVtZW50KVxuICAgICAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC51cmwpXG4gICAgICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAkKCcjcHJldmlldy11cmwnKS52YWwoJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJyNwcmV2aWV3LXVybCcpLnZhbCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgICAgICAgICAgcHJldmlld1VSTC52YWx1ZSA9IHJlc3BvbnNlLmZpbGVfbmFtZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgcHJldmlld1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHByZXZpZXdVUkwudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgICAgICAuc2V0UHJldmlldyhcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1VSTC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQuZm9sZGVyLCBwcmV2aWV3VVJMLnZhbHVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgICAgICovXG4gICAgICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xuICAgIH0pO1xufVxuXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWN0aW9uLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWN0aW9uLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL2FjdGlvbi10eXBlL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanNcIixcblx0XCIuL2FkZC1tZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWRkLW1lL21vZHVsZS5qc1wiLFxuXHRcIi4vYW5ub3VuY2VtZW50cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYW5ub3VuY2VtZW50cy9tb2R1bGUuanNcIixcblx0XCIuL2Fzc2V0cy1sb2cvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fzc2V0cy1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9hc3NldHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fzc2V0cy9tb2R1bGUuanNcIixcblx0XCIuL2F3YXJkL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hd2FyZC9tb2R1bGUuanNcIixcblx0XCIuL2Jhbm5lci9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYmFubmVyL21vZHVsZS5qc1wiLFxuXHRcIi4vY2VydC1zZXR1cC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY2VydC1zZXR1cC9tb2R1bGUuanNcIixcblx0XCIuL2NlcnQtdXNlcnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2NlcnQtdXNlcnMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jZXJ0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jZXJ0L21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLWFkcHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy1hZHBzL21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLXJvbGVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtcm9sZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLXVzZXJzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtdXNlcnMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jb2xsZWN0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vY3JvcC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY3JvcC9tb2R1bGUuanNcIixcblx0XCIuL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZWZhdWx0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qc1wiLFxuXHRcIi4vZGVwbG95L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzXCIsXG5cdFwiLi9kcGEvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RwYS9tb2R1bGUuanNcIixcblx0XCIuL2R5ZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHllL21vZHVsZS5qc1wiLFxuXHRcIi4vZmluZ2VycHJpbnQtZm9ybS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZmluZ2VycHJpbnQtZm9ybS9tb2R1bGUuanNcIixcblx0XCIuL2ZpbmdlcnByaW50L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9maW5nZXJwcmludC9tb2R1bGUuanNcIixcblx0XCIuL2dpZnQtd3JhcC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZ2lmdC13cmFwL21vZHVsZS5qc1wiLFxuXHRcIi4vZ3JvdXAtZWRpdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZ3JvdXAtZWRpdC9tb2R1bGUuanNcIixcblx0XCIuL2dyb3VwLWV2ZW50L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ncm91cC1ldmVudC9tb2R1bGUuanNcIixcblx0XCIuL2dyb3VwL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ncm91cC9tb2R1bGUuanNcIixcblx0XCIuL2hvbWUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2hvbWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9sZXZlbHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2xldmVscy9tb2R1bGUuanNcIixcblx0XCIuL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9sb2NhbGl6YXRpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL21hZ2ljL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWdpYy9tb2R1bGUuanNcIixcblx0XCIuL21ha2V1cC1raXQtYXNzZXQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21ha2V1cC1raXQtYXNzZXQvbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWtldXAta2l0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWtldXAta2l0L21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC1pbmdyZWRpZW50LWdyb3Vwcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50LWdyb3Vwcy9tb2R1bGUuanNcIixcblx0XCIuL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsL21vZHVsZS5qc1wiLFxuXHRcIi4vbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qc1wiLFxuXHRcIi4vbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vbmxhLWFzc2V0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ubGEtYXNzZXQvbW9kdWxlLmpzXCIsXG5cdFwiLi9ubGEtY2F0ZWdvcnkvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25sYS1jYXRlZ29yeS9tb2R1bGUuanNcIixcblx0XCIuL25sYS1zZWN0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ubGEtc2VjdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL3Byb2R1Y3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9wdWJsaWMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3B1YmxpYy9tb2R1bGUuanNcIixcblx0XCIuL3B1cmNoYXNlL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9wdXJjaGFzZS9tb2R1bGUuanNcIixcblx0XCIuL3NldHRpbmdzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGUuanNcIixcblx0XCIuL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGVzL2FpX2FuaW1hdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1yZWxlYXNlcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanNcIixcblx0XCIuL3Nob3Atc3RhdHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3Atc3RhdHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9zb3VuZC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc291bmQvbW9kdWxlLmpzXCIsXG5cdFwiLi9zcGVjaWFsLXByaXplcy1mb3JtL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zcGVjaWFsLXByaXplcy1mb3JtL21vZHVsZS5qc1wiLFxuXHRcIi4vc3BlY2lhbC1wcml6ZXMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzL21vZHVsZS5qc1wiLFxuXHRcIi4vc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi90YW1hdG9vbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzXCIsXG5cdFwiLi90cm9waGllcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdHJvcGhpZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi90cm9waHktY3VwLXVzZXJzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy90cm9waHktY3VwLXVzZXJzL21vZHVsZS5qc1wiLFxuXHRcIi4vdXNlcnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3VzZXJzL21vZHVsZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL21vZHVsZXMgc3luYyByZWN1cnNpdmUgbW9kdWxlXFxcXC5qcyRcIjsiLCIkKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICcjcHJvZHVjdF9pZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI3Byb2R1Y3RfaWQnKS5wcmV2KCcuc2VsZWN0Mi1jb250YWluZXInKS5maW5kKCcuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkJykuZm9jdXMoKVxuICAgIH0pO1xuIiwiZXhwb3J0IGNvbnN0IEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEID0gJ0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEJztcbiIsIi8qKlxuICogQ29sbGFwc2Ugc3RhdGVcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgnLmFjdGlvbi10eXBlLXN0YXRlJyk7XG4gICAgcGFyZW50LnRvZ2dsZUNsYXNzKCdkb3duJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIENvbGxhcHNlIHN0YXRlc1xuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCgnLmFjdGlvbi10eXBlLXN0YXRlJykudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUR9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgU3RhdGUgb2YgdGhlIEFjdGlvbiBUeXBlXG4gKiBhdCB0aGUgbW9kYWxcbiAqIHdpdGggY29uZmlybVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRFbGVtZW50LmNsb3Nlc3QoJy5hY3Rpb24tdHlwZS1zdGF0ZScpO1xuXG4gICAgaWYgKCFjdXJyZW50RWxlbWVudC5kYXRhKCdpZCcpKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsIHt9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXG4gICAgICAgIC5mb290ZXIoJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLWRhbmdlcicsXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3IFJlcXVlc3RCdWlsZGVyKGN1cnJlbnRFbGVtZW50LmRhdGEoJ3VybCcpKVxuICAgICAgICAgICAgICAgICAgICAubWV0aG9kKCdERUxFVEUnKVxuICAgICAgICAgICAgICAgICAgICAuc3VjY2VzcygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwge30pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc2VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICAgICAgLm1vZGFsKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRH0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogVXBkYXRlIGluZGV4ZXMgb2YgdGhlIHN0YXRlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCAoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG5cbiAgICAgICAgJCgnLmluZGV4JykuZWFjaCgoXywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgJChpdGVtKS52YWwoaW5kZXgrKyk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgdXBkYXRlSW5kZXhlcyBmcm9tIFwiLi9saXN0ZW5lcnMvdXBkYXRlSW5kZXhlc1wiO1xuaW1wb3J0IGNvbGxhcHNlU3RhdGUgZnJvbSBcIi4vaGFuZGxlcnMvY29sbGFwc2VTdGF0ZVwiO1xuaW1wb3J0IGNvbGxhcHNlU3RhdGVzIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzXCI7XG5pbXBvcnQgcmVtb3ZlQWN0aW9uVHlwZVN0YXRlIGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZUFjdGlvblR5cGVTdGF0ZVwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuLyoqXG4gKiBVcGRhdGUgaW5kZXhlc1xuICovXG51cGRhdGVJbmRleGVzKCk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZSBvbmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb2xsYXBzZS1saW5rJywgY29sbGFwc2VTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlIGFsbCBzdGF0ZXNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLXN0YXRlcycsIGNvbGxhcHNlU3RhdGVzKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tYWN0aW9uLXR5cGUtc3RhdGVzJywgcmVtb3ZlQWN0aW9uVHlwZVN0YXRlKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2F2ZS1wYWdlJywgc2F2ZVN0YXRlKTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgYW5ub3VuY2VtZW50cyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjYW5ub3VuY2VtZW50cyA+IHRib2R5Jyk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuYW5uX2lkJykudmFsKCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyNhbm5vdW5jZW1lbnRzX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVhbm5vdW5jZW1lbnRfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCk7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGFubm91bmNlbWVudHMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoYXdhcmQgPSAnJykge1xuICAgIGNvbnN0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5hbm5vdW5jZW1lbnRzLXNhdmUtcGFnZS1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuXCIgKyBhd2FyZCArIFwiY2hhbmdlZCBpbnB1dCwgLlwiICsgYXdhcmQgKyBcImNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICBjb250YWluZXIuZmluZCgndHIuJyArIGF3YXJkICsgJ2NoYW5nZWQnKS5yZW1vdmVDbGFzcyhhd2FyZCArICdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgYW5ub3VuY2VtZW50cyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZCBmb3Igc2VsZWN0MlxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnOmNoZWNrYm94JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmF0dHIoXCJjaGVja2VkXCIsICEkKHRoaXMpLmF0dHIoXCJjaGVja2VkXCIpKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIGFubm91bmNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdhd2FyZC1jaGFuZ2VkJyk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVTdGF0ZSgnYXdhcmQtJylcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQoJy5zYXZlLXBhZ2UnKTtcblxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2F3YXJkLWNoYW5nZWQnKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ2lucHV0W25hbWU9XCJhd2FyZF9pZFwiXScpLnZhbCgwKTtcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzLCBzYXZlQnV0dG9uKSgpO1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZVN0YXRlKCdhd2FyZC0nKVxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBhbm5vdW5jZW1lbnRzIHBhZ2VcbiAgICAgKi9cbiAgICAkKCcuc2F2ZS1wYWdlJykuY2xpY2soKCkgPT4gc2F2ZVN0YXRlKCkpO1xuIiwiXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICcudG9nZ2xlX2lkcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KCkgPiAwKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnSGlkZScsICdTaG93JykpO1xuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpKTtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogU1VCX1RZUEVTIC0gaXQgaXMgYSBnbG9iYWwgb2JqZWN0XG4gKiBJbml0ZWQgaW4gYXNzZXQvZm9ybS5ibGFkZS5waHBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIHNldFN1YnR5cGVzKHRoaXMudmFsdWUsIHRoaXMuZGF0YXNldC5zdWJ0eXBlKTtcbn1cblxuY29uc3QgYXNzZXRGb3JtU3VidHlwZSA9ICQoXCIjc3VidHlwZVwiKTtcbmNvbnN0IGFzc2V0Rm9ybUFjdGlvblR5cGUgPSAkKCcjYXNzZXQtZm9ybS1hY3Rpb24tdHlwZScpO1xuY29uc3QgYXNzZXRGb3JtQ29sbGVjdGlvbiA9ICQoJyNhc3NldC1mb3JtLWNvbGxlY3Rpb24nKTtcbmNvbnN0IHByaWNlcyA9ICQoJy5wcmljZXMnKTtcblxuZnVuY3Rpb24gc2V0U3VidHlwZXModHlwZSwgc3VidHlwZSkge1xuICAgIGFzc2V0Rm9ybVN1YnR5cGVcbiAgICAgICAgLmVtcHR5KClcbiAgICAgICAgLnNlbGVjdDIoe1xuICAgICAgICAgICAgZGF0YTogU1VCX1RZUEVTW3R5cGVdXG4gICAgICAgIH0pXG4gICAgICAgIC52YWwoc3VidHlwZSlcbiAgICAgICAgLmNoYW5nZSgpO1xuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBzdGF0ZVxuICAgICAqL1xuICAgIGhpZGUoYXNzZXRGb3JtQWN0aW9uVHlwZSk7XG4gICAgaGlkZShhc3NldEZvcm1Db2xsZWN0aW9uKTtcbiAgICBzaG93KHByaWNlcyk7XG5cbiAgICBzd2l0Y2ggKHBhcnNlSW50KHR5cGUpKSB7XG5cbiAgICAgICAgLy8gRnVybml0dXJlXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHNob3coYXNzZXRGb3JtQWN0aW9uVHlwZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBDbG90aGVzXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHNob3coYXNzZXRGb3JtQ29sbGVjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBCb2R5IFBhcnRcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgaGlkZShwcmljZXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbn0iLCJpbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXG4gICAgICAgIC5zdWNjZXNzKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAkKCcjY29sbGVjdGlvbi1udW1iZXInKVxuICAgICAgICAgICAgICAgIC52YWwocmVzdWx0LmNvbGxlY3Rpb25faWQpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IHNhdmVBc3NldEJ0biA9IGN1cnJlbnRCdG4uY2xvc2VzdCgndHInKS5maW5kKCcuc2F2ZS1hc3NldCcpO1xuICAgICAgICBjb25zdCBlZGl0QnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZClcbiAgICAgICAgICAgIC5odG1sKClcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKHRoaXMuZGF0YXNldC50ZW1wbGF0ZVBsYWNlaG9sZGVyLCBcImdcIiksIGRhdGEuYXdhcmRfaWQpO1xuXG4gICAgICAgIGN1cnJlbnRCdG4ucGFyZW50KCkuYXBwZW5kKGVkaXRCdG4pO1xuICAgICAgICBjdXJyZW50QnRuLnJlbW92ZSgpO1xuXG4gICAgICAgIHNhdmVBc3NldEJ0bi5jbGljaygpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZCkuaHRtbCgpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kKGNyZWF0ZUJ0bik7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcIi4vbGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcIi4vbGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5pbXBvcnQgZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIgZnJvbSBcIi4vaGFuZGxlcnMvZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXJcIjtcblxuJCgnI2Fzc2V0cy10YWJsZScpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlJywgYXdhcmREZWxldGUpO1xuXG4kKCcjYXNzZXQtZm9ybS10eXBlJylcbiAgICAuY2hhbmdlKGNoYW5nZVR5cGUpXG4gICAgLmNoYW5nZSgpO1xuXG4kKCcjZ2V0LWxhc3QtY29sbGVjdGlvbi1udW1iZXInKS5jbGljayhnZXRMYXN0Q29sbGVjdGlvbk51bWJlcik7XG4iLCJleHBvcnQgY29uc3QgQVdBUkRfQ1JFQVRFID0gJ0FXQVJEX0NSRUFURSc7XG5leHBvcnQgY29uc3QgQVdBUkRfREVMRVRFID0gJ0FXQVJEX0RFTEVURSc7XG4iLCIvKipcbiAqIFNob3cgZm9ybSBldmVudFxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBCQU5ORVJfU0hPV19GT1JNID0gJ0JBTk5FUl9TSE9XX0ZPUk0nO1xuXG4vKipcbiAqIElkIG9mIHR5cGUncyBzZWxlY3RcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVFlQRV9TRUxFQ1RfSUQgPSAnYmFubmVyLXR5cGUnO1xuIiwiaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIENoYW5nZSB0eXBlIGhhbmRsZXJcbiAqIEhpZGUvc2hvdyBzb21lIGZpZWxkc1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoVFlQRV9TRUxFQ1RfSUQpO1xuXG4gICAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgICAgICQoJy5iYW5uZXItdHlwZScpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICQoJy5iYW5uZXItdHlwZS0nICsgc2VsZWN0ZWRFbGVtZW50LnZhbHVlKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7QkFOTkVSX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuLyoqXG4gKiBTaG93IGZvcm0gaGFuZGxlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgSW5pdFxuICAgICAqL1xuICAgIGRyb3Bab25lSW5pdChCQU5ORVJfU0hPV19GT1JNKTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgc2hvd0Zvcm0gbGlzdGVuZXJcbiAgICAgKi9cbiAgICBzaG93Rm9ybSgpO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QkFOTkVSX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4uL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcblxuLyoqXG4gKiBTaG93IGZvcm0gbGlzdGVuZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShCQU5ORVJfU0hPV19GT1JNLCAoKSA9PiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFR5cGUgc2VsZWN0IGNoYW5nZSB0cmlnZ2VyXG4gICAgICAgICAqL1xuICAgICAgICBjaGFuZ2VUeXBlKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERhdGVzIGluaXRcbiAgICAgICAgICovXG4gICAgICAgICQoJy5iYW5uZXItZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2hhbmRsZXJzL3Nob3dGb3JtXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5pbXBvcnQge1RZUEVfU0VMRUNUX0lEfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTaG93IGVkaXQgZm9ybSBvZiBhIGJhbm5lclxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soc2hvd0Zvcm0oKSk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdHlwZSBoYW5kbGVyXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnIycgKyBUWVBFX1NFTEVDVF9JRCwgY2hhbmdlVHlwZSk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFNhdmVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQYWdlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcjY2VydC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgY29uc3Qgcm93cyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWRcIik7XG5cbiAgICBpZighZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzZW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZm9ybUl0ZW1zKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKXtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3dzLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVQYWdlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCJtb2R1bGVzL2Ntcy1yb2xlcy9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YVxuICovXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZVBhZ2UpO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuY2VydC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWRcIik7XG5jb25zb2xlLmxvZyhmb3JtSXRlbXMpO1xuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcbmltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwibW9kdWxlcy9jbXMtcm9sZXMvaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbi8qKlxuICogU2F2ZSB0aGUgcm93XG4gKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBGaW5kIFVzZXJcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRVc2VyKCkge1xuICAgIGNvbnN0IHByZWZpeCA9ICQodGhpcykuZGF0YSgncHJlZml4Jyk7XG4gICAgY29uc3QgZGF0YSA9IHt1aWQ6ICQoJyMnICsgcHJlZml4KS52YWwoKSwgbmFtZTogJCgnIycgKyBwcmVmaXggKyAnX25hbWUnKS52YWwoKSwgcHJlZml4OiBwcmVmaXh9O1xuICAgIGNvbnN0IHVzZXJfdGVtcGxhdGUgPSAkKCcjdXNlcl90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBpbnNlcnRfYmxvY2sgPSAkKCcjJyArIHByZWZpeCArICdfbGlzdCcpO1xuICAgIGlmICghZGF0YS51aWQubGVuZ3RoICYmICFkYXRhLm5hbWUubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIGZpbmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAkKHJlc3BvbnNlLnVzZXJzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suY2xvc2VzdCgndGFibGUnKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5hcHBlbmQodXNlcl90ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyV1c2VyX2lkJS9nLCBpdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVwZXRfbmFtZSUnLCBpdGVtLnBldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcldXNlcl9uYW1lJScsIGl0ZW0uZmlyc3RfbmFtZSArICcgJyArIGl0ZW0ubGFzdF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVsZXZlbCUnLCBpdGVtLnhwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVhdmF0YXIlJywgaXRlbS5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJXRhcmdldCUvZywgcHJlZml4KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogU2VuZCBHaWZ0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kQ2VydCAoKSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNzZW5kJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9LCAzMDAwKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNjZXJ0LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCJpbnB1dCwgdGV4dGFyZWFcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuXG4gICAgaWYoIWZvcm1JdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2VuZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGZvcm1JdGVtcylcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZighIXJlc3BvbnNlLmVycm9ycyl7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHJvcGh5X2N1cHNfY291bnQgPSAkKCcjY2VydF9jdXBzX2NvdW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRyb3BoeV9jdXBzX2NvdW50LnRleHQocGFyc2VJbnQodHJvcGh5X2N1cHNfY291bnQudGV4dCgpKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAkKCcudGFibGUnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNjZXJ0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhJykudmFsKCcnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9sZW5ndGggPSAkKCcjbmV3c19tZXNzYWdlX2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2xlbmd0aC50ZXh0KG1lc3NhZ2VfbGVuZ3RoLmRhdGEoJ2xlbmd0aCcpKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZV9sZW5ndGggPSAkKCcjbmFtZV9sZW5ndGgnKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZV9sZW5ndGgudGV4dChuYW1lX2xlbmd0aC5kYXRhKCdsZW5ndGgnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50X2xlbmd0aCA9ICQoJyNldmVudF9sZW5ndGgnKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRfbGVuZ3RoLnRleHQoZXZlbnRfbGVuZ3RoLmRhdGEoJ2xlbmd0aCcpKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdXBfbGVuZ3RoID0gJCgnI2dyb3VwX2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBncm91cF9sZW5ndGgudGV4dChncm91cF9sZW5ndGguZGF0YSgnbGVuZ3RoJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2VuZENlcnR9IGZyb20gXCIuL2hhbmRsZXJzL3NlbmRDZXJ0XCI7XG5pbXBvcnQge2ZpbmRVc2VyfSBmcm9tIFwiLi9oYW5kbGVycy9maW5kVXNlclwiO1xuaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCJtb2R1bGVzL2Ntcy1yb2xlcy9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2ZpbmRfc2VuZGVyLCAjZmluZF9yZWNlaXZlcicsIGZpbmRVc2VyKVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjc2VuZCcsIHNlbmRDZXJ0KVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCBjZXJ0XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjYXNzZXRzX2xpc3QgaW1nJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjYXNzZXRzX2xpc3QnKS5maW5kKCdpbWcnKS5jc3MoJ2JvcmRlcicsICcnKTtcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlcicsICczcHggc29saWQgIzVjNWM1YycpO1xuICAgICAgICAkKCcjYXNzZXRfaWQnKS52YWwoJCh0aGlzKS5kYXRhKCdjZXJ0JykpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHNlbGVjdGVkIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnRhYmxlIHRyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAkKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0JykgKyAnX3VpZCcpLnZhbCgkKHRoaXMpLmRhdGEoJ3VpZCcpKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbGltaXQgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQsIHRleHRhcmVhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5yZXBsYWNlKCdjZXJ0X2RhdGFbJywgJycpLnJlcGxhY2UoJ10nLCAnJykgKyAnX2xlbmd0aCc7XG4gICAgICAgICQoJyMnICsgdGFyZ2V0KS50ZXh0KCQodGhpcykuZGF0YSgnbWF4bGVuZ3RoJykgLSAkKHRoaXMpLnZhbCgpLmxlbmd0aCk7XG4gICAgfSlcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50ZXJlZCBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjY2FuY2VsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcudGFibGUnKS5oaWRlKCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEnKS52YWwoJycpXG4gICAgfSk7XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYWRwIGlkcyB0byBjbGlwYm9hcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBZHAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZHBJZHNGaWVsZCA9ICQoJ2lucHV0W25hbWU9XCJhZHBfaWRzXCJdJyk7XG4gICAgbGV0IGFkcElkcyA9IFtdO1xuXG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBhZHBJZHMucHVzaCgkKGl0ZW0pLmRhdGEoJ2lkJykpXG4gICAgfSk7XG5cbiAgICBhZHBJZHNGaWVsZC52YWwoYWRwSWRzKTtcbiAgICBhZHBJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgLy8gYWRwSWRzRmllbGQudmFsKFtdKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY29weSBhc3NldHMgaWRzIHRvIGNsaXBib2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUFzc2V0cyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYXNzZXRJZHNGaWVsZCA9ICQoJ2lucHV0W25hbWU9XCJhc3NldF9pZHNcIl0nKTtcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcblxuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgYXNzZXRJZHMucHVzaCgkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJykpXG4gICAgfSk7XG5cbiAgICBhc3NldElkc0ZpZWxkLnZhbChhc3NldElkcyk7XG4gICAgYXNzZXRJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgYXJjaGl2ZSBjYXRlZ29yaWVzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQXJjaGl2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnNob3ctYXJjaGl2ZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuYXJjaGl2ZS1jYXRlZ29yaWVzLWxpc3QnKS5odG1sKCcnKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiB0YXNrcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGlkZVRhc2tzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuc2hvdy10YXNrcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcudGFza3MtbGlzdCcpLmhpZGUoJ3Nsb3cnKTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FyY2hpdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5oaWRlLWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgXG4gICAgbGV0IGFjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKTtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5hcmNoaXZlLWNhdGVnb3JpZXMtbGlzdCcpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgXG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgdGFza3Mgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmhpZGUtdGFza3MnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnRhc2tzLWxpc3QnKS5zaG93KCdzbG93Jyk7XG59XG4iLCIvL2ltcG9ydCB7YnVuZGxlVmVyc2lvblNlbGVjdH0gZnJvbSBcIi4vaGFuZGxlcnMvYnVuZGxlVmVyc2lvblNlbGVjdFwiO1xuaW1wb3J0IHtzaG93QXJjaGl2ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0FyY2hpdmVcIjtcbmltcG9ydCB7aGlkZUFyY2hpdmV9IGZyb20gXCIuL2hhbmRsZXJzL2hpZGVBcmNoaXZlXCI7XG5pbXBvcnQge2hpZGVUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZVRhc2tzXCI7XG5pbXBvcnQge3Nob3dUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd1Rhc2tzXCI7XG5pbXBvcnQge2NvcHlBZHB9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBZHBcIjtcbmltcG9ydCB7Y29weUFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFzc2V0c1wiO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIFNob3cgYXJjaGl2ZSBhZHAgY2F0ZWdvcmllc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNob3ctYXJjaGl2ZScsIHNob3dBcmNoaXZlKVxuICAgIC8qKlxuICAgICAqIEhpZGUgYXJjaGl2ZSBhZHAgY2F0ZWdvcmllc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtYXJjaGl2ZScsIGhpZGVBcmNoaXZlKVxuICAgIC8qKlxuICAgICAqIEhpZGUgYWRwIHRhc2tzIGJ5IHN0YXR1cyBhbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtdGFza3MnLCBoaWRlVGFza3MpXG4gICAgLyoqXG4gICAgICogU2hvdyBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy10YXNrcycsIHNob3dUYXNrcylcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFkcCcsIGNvcHlBZHApXG4gICAgLyoqXG4gICAgICogU2hvdyBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weS1hc3NldHMnLCBjb3B5QXNzZXRzKTtcbiAgICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKTtcblxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJzb3IgdG8gcGFyZW50IG5vZGVcbiAgICAgKi9cbiAgICAub24oJ21vdXNlZW50ZXInLCAndGQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGRlcGxveSBpbmZvXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9ICQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKHdyYXBwZXIgJiYgd3JhcHBlci5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpO1xuXG4iLCJleHBvcnQgY29uc3QgQ09MTEVDVElPTl9TSE9XX0ZPUk0gPSAnQ09MTEVDVElPTl9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuY29uc3QgYXNzZXRQcmV2aWV3VGVtcGxhdGUgPSAkKCcjYXNzZXQtcHJldmlldy10ZW1wbGF0ZScpLmh0bWwoKTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5oYXNDbGFzcygnYXNzZXQtaWQnKSAmJiAhIXJlc3BvbnNlLmFzc2V0c1tjdXJyZW50SXRlbS52YWwoKV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFzc2V0ID0gcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuc2xvdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmFzc2V0LXByZXZpZXcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoYXNzZXRQcmV2aWV3VGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXVybCUnLCBcImdcIiksIGN1cnJlbnRBc3NldC5wcmV2aWV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXRpdGxlJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0Lm5hbWUpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKCcuYWRkaXRpb25hbC1kYXRhJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogTWFyayBpbnB1dCBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIG5ldyBTb3J0YWJsZShfdGhpcywge1xuICAgICAgICBncm91cDogX3RoaXMuZGF0YXNldC5ncm91cCxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5maW5kKF90aGlzLmRhdGFzZXQucG9zaXRpb24pLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnZhbChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge0NPTExFQ1RJT05fU0hPV19GT1JNfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xuaW1wb3J0IG1hcmtJbnB1dEFzQ2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9tYXJrSW5wdXRBc0NoYW5nZWRcIjtcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XG5pbXBvcnQgaGlkZUFkZGl0aW9uYWxSb3dzIGZyb20gXCIuL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93c1wiO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChDT0xMRUNUSU9OX1NIT1dfRk9STSkpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBjb2xsZWN0aW9uXG4gKi9cbiQoJy5jb2xsZWN0aW9uLWZhc3Qtc2F2ZScpLmNsaWNrKGZhc3RTYXZlKTtcblxuLyoqXG4gKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXG4gKi9cbiQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXQnKS5jaGFuZ2UobWFya0lucHV0QXNDaGFuZ2VkKTtcblxuLyoqXG4gKiBTb3J0YWJsZSBpbml0XG4gKi9cbiQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcblxuLyoqXG4gKiBIaWRlIGFkZGl0aW9uYWwgcm93c1xuICovXG4kKCcuaGlkZS1zbG90cycpLmNsaWNrKGhpZGVBZGRpdGlvbmFsUm93cyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCByb3dzIHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNjcm9wcyA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2Nyb3BfdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3JvcF9pZCcpLnRleHQoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lY3JvcCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBEZWxldGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVSb3coKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGRSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZFJvd1wiO1xuaW1wb3J0IHtkZWxldGVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2RlbGV0ZVJvd1wiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtcm93JywgYWRkUm93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBkZWxldGVSb3cpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQodGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQsIHNlbGYpO1xuXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocm93LmFkZENsYXNzKCdjaGFuZ2VkJykpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQodGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcblxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJvdy5hZGRDbGFzcygnY2hhbmdlZCcpKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZGFpbHlfbG9vdCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2RhaWx5X2xvb3RfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgbGV0IGxhc3RJRFMgPSBbXTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xuICAgIHRib2R5LmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KCQoaXRlbSkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbCgpKSl7XG4gICAgICAgICAgICBsYXN0SURTLnB1c2gocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYobGFzdElEUy5sZW5ndGgpe1xuICAgICAgICBpbmNyZW1lbnRJZCA9IChNYXRoLm1heC5hcHBseShNYXRoLGxhc3RJRFMpICsgMSkgfHwgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lcm93SW5kZXglL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoaSArIGluY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLmRhaWx5LWxvb3Qtc2F2ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2ggcGFnZSB0eXBlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudG9nZ2xlLXBhZ2UtdHlwZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDAsIGxvY2F0aW9uLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykpICsgJCh0aGlzKS5kYXRhKCdocmVmJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnI2NvbW1vbi1tZW51JykuZmluZCgnLmNvbW1vbi1tZW51LXNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZigkKHRoaXMpLmZpbmQoJ2xpJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNvbW1vbi1tZW51LXNlY3Rpb24nKS5oaWRlKClcbiAgICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsIlxuLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2RpcmVjdGlvbj1cIiArIGRpcmVjdGlvbjtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgIGlkOiAnZGVwbG95J1xuICAgIH0sICdEZXBsb3knLCB1cmwpO1xufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuICAgIC8qKlxuICAgICAqIFNhdmUgYWxsIHBhZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUtcGFnZS1jdXN0b20nLCBmYXN0U2F2ZVBhZ2UpIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsZXZlbHMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2RwYSA+IHRib2R5Jyk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuZHBhX2lkJykudmFsKCk7XG4gICAgbGV0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjZHBhX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVkcGFfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGRwYSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZURwYVN0YXRlIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGxldCBkYXRhID0gJCgnLmRwYS1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlRHBhU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGRwYVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93IHRvIHRoZSBkcGEgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93IHRvIHRoZSBkcGEgZ3JpZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kcGEtc2F2ZS1wYWdlJywgc2F2ZURwYVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNkeWUgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNkeWVfdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG5cbiAgICAgICAgbGV0IGxhc3RSb3cgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5jcDInKTtcbiAgICAgICAgbGFzdFJvdy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgJChpdGVtKS5jb2xvcnBpY2tlcih7fSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBDaGFuZ2Ugcm93IGluZGV4XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSb3dJbmRleCgpIHtcbiAgICBsZXQgcm93SW5kZXggPSAkKHRoaXMpLnZhbCgpO1xuICAgIGxldCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnaW5wdXQsIHNlbGVjdCcpO1xuXG4gICAgcm93LmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgIGxldCBvbGROYW1lID0gJChpdGVtKS5hdHRyKCduYW1lJyk7XG4gICAgICAgIGxldCBuZXdOYW1lID0gb2xkTmFtZS5zbGljZSgwLCA0KSArIHJvd0luZGV4ICsgIG9sZE5hbWUuc2xpY2Uob2xkTmFtZS5pbmRleE9mKCddJykpO1xuICAgICAgICAkKGl0ZW0pLmF0dHIoJ25hbWUnLCBuZXdOYW1lKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbmV4cG9ydCBjb25zdCBEWUVfQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5keWUtc2F2ZS1wYWdlLWNvbnRhaW5lcic7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgZHllcyBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKERZRV9DT05UQUlORVJfU0VMRUNUT1IpO1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxuICAgICAqL1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIE1hcmsgZm9ybSdzIHRyIGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkVHIoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge2NoYW5nZVJvd0luZGV4fSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VSb3dJbmRleFwiO1xuaW1wb3J0IGR5ZVNhdmVQYWdlLCB7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUiwgbWFya0NoYW5nZWRUcn0gZnJvbSBcIi4vaGFuZGxlcnMvZHllU2F2ZVBhZ2VcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEluaXQgY29sb3ItcGlja2VyIGlucHV0c1xuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmNwMicpLmNvbG9ycGlja2VyKClcbiAgICAgICAgICAgIC5vbignY3JlYXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KVxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogTWFyayB0ciBhcyBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAub24oJ2NoYW5nZScsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpXG4gICAgICAgICAgICAgICAgICAgIC5vbignaW5wdXQnLCBgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZFRyKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSByb3cgaW5kZXhcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hc3NldF9pZCcsIGNoYW5nZVJvd0luZGV4KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcbiAgICAgKi9cbiAgICAkKCcuZHllLXNhdmUtcGFnZScpLmNsaWNrKGR5ZVNhdmVQYWdlKTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRmluZ2VycHJpbnQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBXZWJHTEZpbmdlclByaW50ID1cbiAgICAgICAge1xuICAgICAgICAgICAgJGRlZmF1bHRWYXJzOiBbXSxcblxuICAgICAgICAgICAgRmluZEZpbmdlclByaW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVTY3JlZW5SZXNvbHV0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYXRlRGV2aWNlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvTm90VHJhY2s6IHRydWUsXG4vLyB1c2VyQWdlbnQ6IHRydWUsXG4vLyBsYW5ndWFnZTogdHJ1ZSxcbi8vIGF1ZGlvOiB0cnVlLFxuLy8gZm9udHM6IHRydWUsXG4vLyB3ZWJkcml2ZXI6IHRydWUsXG4vLyBzZXNzaW9uU3RvcmFnZTogdHJ1ZSxcbi8vIGxvY2FsU3RvcmFnZTogdHJ1ZSxcbi8vIGluZGV4ZWREYjogdHJ1ZSxcbi8vIHBsdWdpbnM6IHRydWUsXG4vLyBhZEJsb2NrOiB0cnVlLFxuLy8gZm9udHNGbGFzaDogdHJ1ZSxcbi8vIG9wZW5EYXRhYmFzZTogdHJ1ZSxcbi8vIGNhbnZhczogdHJ1ZSxcbi8vIHdlYmdsOiB0cnVlLFxuLy8gZGV2aWNlTWVtb3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgZmluZ2VycHJpbnQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgZmluZ2VyUHJpbnRIYW5kbGVyID0gZnVuY3Rpb24gKGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBjb21wb25lbnRzLm1hcChmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmtleSArICc6ICcgKyBjb21wb25lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQgPSBGaW5nZXJwcmludDIueDY0aGFzaDEyOCh2YWx1ZXMuam9pbignJyksIDMxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRQcm9taXNlKGZpbmdlcnByaW50LCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJKUzEgZmluZ2VyIHByaW50IFwiICsgZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkpTMiBmaW5nZXIgZXJyb3IgXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmdlcnByaW50Mi5nZXQob3B0aW9ucywgZmluZ2VyUHJpbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5nZXJwcmludDIuZ2V0KG9wdGlvbnMsIGZpbmdlclByaW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApOyAvL3dhcyB0aW1lIG91dCA1MDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJKUzMgZmluZ2VyIHByaW50IHdhaXQgXCIgKyBmaW5nZXJwcmludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICBXZWJHTEZpbmdlclByaW50LkZpbmRGaW5nZXJQcmludCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZW5kUHJvbWlzZShmaW5nZXJwcmludCwgdmFsdWVzKSB7XG4gICAgY29uc3QgY29tbWVudCA9ICQoJyNjb21tZW50JykudmFsKCk7XG4gICAgY29uc3QgbmFtZSA9ICQoJyNuYW1lJykudmFsKCk7XG4gICAgaWYgKG5hbWUubGVuZ3RoICYmIGZpbmdlcnByaW50Lmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZyh7bmFtZTogbmFtZSwgY29tbWVudDogY29tbWVudCwgZmluZ2VycHJpbnQ6IGZpbmdlcnByaW50LCB2YWx1ZXM6IHZhbHVlc30pO1xuICAgICAgICBuZXcgaHR0cCgkKCcjZmluZ2VycHJpbnQnKS5hdHRyKCdhY3Rpb24nKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe25hbWU6IG5hbWUsIGNvbW1lbnQ6IGNvbW1lbnQsIGZpbmdlcnByaW50OiBmaW5nZXJwcmludCwgdmFsdWVzOiB2YWx1ZXN9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNmaW5nZXJwcmludCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5U3VjY2VzcygnRmluZ2VycHJpbnQgc2F2ZWQnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtzYXZlRmluZ2VycHJpbnR9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVGaW5nZXJwcmludFwiO1xuXG4kKGRvY3VtZW50KVxuXG4vKipcbiAqIFNldCBjdXJzb3IgdG8gcGFyZW50IG5vZGVcbiAqL1xuICAgIC5vbignbW91c2VlbnRlcicsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gZGVwbG95IGluZm9cbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKTtcblxuICAgICAgICBpZiAod3JhcHBlciAmJiB3cmFwcGVyLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnb3BlbicpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRm9ybSBzdWJtaXRcbiAgICAgKi9cbiAgICAub24oJ3N1Ym1pdCcsICcjZmluZ2VycHJpbnQnLCBzYXZlRmluZ2VycHJpbnQpO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVGaW5nZXJwcmludChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IFdlYkdMRmluZ2VyUHJpbnQgPVxuICAgICAgICB7XG4gICAgICAgICAgICAkZGVmYXVsdFZhcnM6IFtdLFxuXG4gICAgICAgICAgICBGaW5kRmluZ2VyUHJpbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZVNjcmVlblJlc29sdXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhdGVEZXZpY2VzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9Ob3RUcmFjazogdHJ1ZSxcbi8vIHVzZXJBZ2VudDogdHJ1ZSxcbi8vIGxhbmd1YWdlOiB0cnVlLFxuLy8gYXVkaW86IHRydWUsXG4vLyBmb250czogdHJ1ZSxcbi8vIHdlYmRyaXZlcjogdHJ1ZSxcbi8vIHNlc3Npb25TdG9yYWdlOiB0cnVlLFxuLy8gbG9jYWxTdG9yYWdlOiB0cnVlLFxuLy8gaW5kZXhlZERiOiB0cnVlLFxuLy8gcGx1Z2luczogdHJ1ZSxcbi8vIGFkQmxvY2s6IHRydWUsXG4vLyBmb250c0ZsYXNoOiB0cnVlLFxuLy8gb3BlbkRhdGFiYXNlOiB0cnVlLFxuLy8gY2FudmFzOiB0cnVlLFxuLy8gd2ViZ2w6IHRydWUsXG4vLyBkZXZpY2VNZW1vcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBmaW5nZXJwcmludDtcblxuICAgICAgICAgICAgICAgIGxldCBmaW5nZXJQcmludEhhbmRsZXIgPSBmdW5jdGlvbiAoY29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGNvbXBvbmVudHMubWFwKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQua2V5ICsgJzogJyArIGNvbXBvbmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5nZXJwcmludCA9IEZpbmdlcnByaW50Mi54NjRoYXNoMTI4KHZhbHVlcy5qb2luKCcnKSwgMzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFByb21pc2UoZmluZ2VycHJpbnQsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkpTMSBmaW5nZXIgcHJpbnQgXCIgKyBmaW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlMyIGZpbmdlciBlcnJvciBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRmluZ2VycHJpbnQyLmdldChvcHRpb25zLCBmaW5nZXJQcmludEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmdlcnByaW50Mi5nZXQob3B0aW9ucywgZmluZ2VyUHJpbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7IC8vd2FzIHRpbWUgb3V0IDUwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkpTMyBmaW5nZXIgcHJpbnQgd2FpdCBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIFdlYkdMRmluZ2VyUHJpbnQuRmluZEZpbmdlclByaW50KCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNlbmRQcm9taXNlKGZpbmdlcnByaW50LCB2YWx1ZXMpIHtcbiAgICBjb25zdCBjb21tZW50ID0gJCgnI2NvbW1lbnQnKS52YWwoKTtcbiAgICBjb25zdCBuYW1lID0gJCgnI25hbWUnKS52YWwoKTtcblxuICAgIGlmIChuYW1lLmxlbmd0aCAmJiBmaW5nZXJwcmludC5sZW5ndGgpIHtcbiAgICAgICAgbmV3IGh0dHAoJCgnI2ZpbmdlcnByaW50JykuYXR0cignYWN0aW9uJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHtuYW1lOiBuYW1lLCBjb21tZW50OiBjb21tZW50LCBmaW5nZXJwcmludDogZmluZ2VycHJpbnQsIHZhbHVlczogdmFsdWVzfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7c2F2ZUZpbmdlcnByaW50fSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlRmluZ2VycHJpbnRcIjtcblxuJChkb2N1bWVudClcblxuLyoqXG4gKiBTZXQgY3Vyc29yIHRvIHBhcmVudCBub2RlXG4gKi9cbiAgICAub24oJ21vdXNlZW50ZXInLCAndGQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGRlcGxveSBpbmZvXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9ICQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKHdyYXBwZXIgJiYgd3JhcHBlci5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEZvcm0gc3VibWl0XG4gICAgICovXG4gICAgLm9uKCdzdWJtaXQnLCAnI2ZpbmdlcnByaW50Jywgc2F2ZUZpbmdlcnByaW50KTtcbiIsImV4cG9ydCBjb25zdCBHSUZUX1dSQVBfUk9XX0FEREVEID0gJ0dJRlRfV1JBUF9ST1dfQURERUQnO1xuIiwiaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuXG4vKipcbiAqIEFzc2V0IElEIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN1cnJlbnRJbnB1dCA9ICQodGhpcyk7XG4gICAgY29uc3QgYXNzZXRJRCA9IGN1cnJlbnRJbnB1dC52YWwoKTtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50SW5wdXQuY2xvc2VzdCgndHInKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGR1cGxpY2F0ZWQgYXNzZXRzIGlkc1xuICAgICAqL1xuICAgIGNvbnN0IGN1cnJlbnRBc3NldER1cGxpY2F0ZSA9ICQoJyNnaWZ0LXdyYXBzLWNvbnRhaW5lcicpLmZpbmQoJy5hc3NldC1pZCcpLmZpbHRlcigoXywgaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gYXNzZXRJRCA9PT0gaXRlbS52YWx1ZTtcbiAgICB9KTtcblxuICAgIGlmIChjdXJyZW50QXNzZXREdXBsaWNhdGUubGVuZ3RoID4gMSl7XG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGFzc2V0ICcgKyBhc3NldElEfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgaW5wdXRzIG5hbWVzXG4gICAgICovXG4gICAgcGFyZW50LmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZS5yZXBsYWNlKCAvXFxbW1xcZF0rXFxdL2csIGBbJHthc3NldElEfV1gKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBocmVmIG9mIHRoZSBkZWxldGUgYnV0dG9uXG4gICAgICovXG4gICAgcGFyZW50LmZpbmQoJy5hamF4LWNvbmZpcm0tYWN0aW9uLWN1c3RvbScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhyZWYgPSB0aGlzLmhyZWYucmVwbGFjZSggL1xcL1tcXGRdKyQvZywgYC8ke2Fzc2V0SUR9YCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgZmFzdFNhdmVQYWdlIGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBwb3NpdGlvblVwZGF0ZSBmcm9tIFwiLi4vaGVscGVycy9wb3NpdGlvblVwZGF0ZVwiO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhc3NldHMgPSB7fTtcbiAgICAgICAgJCgnI2dpZnQtd3JhcHMtY29udGFpbmVyJykuZmluZCgnLmFzc2V0LWlkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoYXNzZXRzW3RoaXMudmFsdWVdID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhc3NldHNbdGhpcy52YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUgYXNzZXQgJyArIGVyci5tZXNzYWdlfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiB1cGRhdGVcbiAgICAgKi9cbiAgICBwb3NpdGlvblVwZGF0ZSgpO1xuXG4gICAgZmFzdFNhdmVQYWdlLmJpbmQodGhpcykoZSk7XG59XG4iLCJpbXBvcnQgY29uZmlybU1vZGFsIGZyb20gXCJoYW5kbGVycy9jb25maXJtTW9kYWxcIjtcblxuLyoqXG4gKiBSZW1vdmUgZW1iZWRlZCBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgYnV0dG9uVXJsID0gdGhpcy5ocmVmLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvblVybFtidXR0b25VcmwubGVuZ3RoIC0gMV0pID09PSAwKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbmZpcm1Nb2RhbC5iaW5kKHRoaXMpKGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuaW1wb3J0IHBvc2l0aW9uVXBkYXRlIGZyb20gXCJtb2R1bGVzL2dpZnQtd3JhcC9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlXCI7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIG5ldyBTb3J0YWJsZShfdGhpcywge1xuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcG9zaXRpb25VcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyoqXG4gKiBQb3NpdGlvbiB1cGRhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgICQoJy5wb3NpdGlvbicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gJCh0aGlzKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KHBvc2l0aW9uLnZhbCgpKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnZhbChpbmRleCk7XG4gICAgICAgICAgICBwb3NpdGlvbi5jaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7R0lGVF9XUkFQX1JPV19BRERFRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIEFkZCBuZXcgcm93IHRvIGdyaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShHSUZUX1dSQVBfUk9XX0FEREVELCBkYXRhID0+IHtcbiAgICAgICAgJCgnI2dpZnQtd3JhcC0nICsgZGF0YS5lbWJlZEJsb2NrSWQpXG4gICAgICAgICAgICAuZmluZCgnLmRhdGVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XG5pbXBvcnQgYXNzZXRDaGFuZ2VkIGZyb20gXCIuL2hhbmRsZXJzL2Fzc2V0Q2hhbmdlZFwiO1xuaW1wb3J0IGFkZFJvdyBmcm9tIFwiLi9saXN0ZW5lcnMvYWRkUm93XCI7XG5pbXBvcnQgZmFzdFNhdmVQYWdlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHJlbW92ZVJvdyBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBhc3NldCBpZCBpbiBpbnB1dFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5hc3NldC1pZCcsIGFzc2V0Q2hhbmdlZClcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LWNvbmZpcm0tYWN0aW9uLWN1c3RvbScsIHJlbW92ZVJvdyk7XG5cbi8qKlxuICogQWRkIHJvdyBsaXN0ZW5lclxuICovXG5hZGRSb3coKTtcblxuLyoqXG4gKiBTb3J0YWJsZSBpbml0XG4gKi9cbiQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcblxuLyoqXG4gKiBTYXZlIGFsbCBwYWdlXG4gKi9cbiQoJy5mYXN0LXNhdmUtcGFnZS1jdXN0b20nKS5jbGljayhmYXN0U2F2ZVBhZ2UpOyIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogU3RvcmUgVXNlclxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRtaW5TdG9yZSgpIHtcbiAgICBjb25zdCBzZWxlY3RlZF9pZCA9ICQoJyNzZW5kZXJfbGlzdCcpLmZpbmQoJ1tuYW1lPVwidXNlcl9zZW5kZXJcIl06Y2hlY2tlZCcpLmNsb3Nlc3QoJ3RyJykuZGF0YSgndWlkJyk7XG5cbiAgICBpZiAoIXNlbGVjdGVkX2lkKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIGZpbmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7dWlkOiBzZWxlY3RlZF9pZH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogRmluZCBVc2VyXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVXNlcigpIHtcbiAgICBjb25zdCBkYXRhID0ge3VpZDogJCgnI3NlbmRlcicpLnZhbCgpLCBuYW1lOiAkKCcjc2VuZGVyX25hbWUnKS52YWwoKX07XG4gICAgY29uc3QgdXNlcl90ZW1wbGF0ZSA9ICQoJyN1c2VyX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGluc2VydF9ibG9jayA9ICQoJyNzZW5kZXJfbGlzdCcpO1xuXG4gICAgaWYgKCFkYXRhLnVpZC5sZW5ndGggJiYgIWRhdGEubmFtZS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gZmluZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgICQocmVzcG9uc2UudXNlcnMpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5jbG9zZXN0KCd0YWJsZScpLmNzcygnZGlzcGxheScsICdpbmxpbmUtdGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmFwcGVuZCh1c2VyX3RlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJXVzZXJfaWQlL2csIGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJWF2YXRhciUnLCBpdGVtLmF2YXRhcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclcGV0X25hbWUlJywgaXRlbS5wZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXVzZXJfbmFtZSUnLCBpdGVtLmZpcnN0X25hbWUgKyAnICcgKyBpdGVtLmxhc3RfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclbGV2ZWwlJywgaXRlbS54cClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIENoYW5nZSBtYWluIGFkbWluXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRNYWluKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaXNfbWFpbiA9ICQoJyNncm91cC11c2VycycpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJykuZGF0YSgnaWQnKTtcblxuICAgIGlmICghaXNfbWFpbikge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YSh7bWFpbl9pZDogaXNfbWFpbn0pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuaW1wb3J0IHtmaW5kVXNlcn0gZnJvbSBcIm1vZHVsZXMvZ3JvdXAtZWRpdC9oYW5kbGVycy9maW5kVXNlclwiO1xuaW1wb3J0IHthZG1pblN0b3JlfSBmcm9tIFwibW9kdWxlcy9ncm91cC1lZGl0L2hhbmRsZXJzL2FkbWluU3RvcmVcIjtcbmltcG9ydCB7c2V0TWFpbn0gZnJvbSBcIm1vZHVsZXMvZ3JvdXAtZWRpdC9oYW5kbGVycy9zZXRNYWluXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNmaW5kX3NlbmRlciwgI2ZpbmRfcmVjZWl2ZXInLCBmaW5kVXNlcilcblxuICAgIC8qKlxuICAgICAqIE1hcmsgc2VsZWN0ZWQgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudGFibGUgdHInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgICQoJyNzZW5kZXJfdWlkJykudmFsKCQodGhpcykuZGF0YSgndWlkJykpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFN0b3JlIHVzZXIgdG8gZ3JvdXBcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNzdG9yZScsIGFkbWluU3RvcmUpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbWFpbiBhZG1pblxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzZXRNYWluKVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgndGJvZHkuZ3JvdXAtZXZlbnQtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGxldCBsYXN0SURTID0gW107XG4gICAgbGV0IGluY3JlbWVudElkID0gMTtcbiAgICB0Ym9keS5maW5kKFwidHJcIikuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBsYXN0SURTLnB1c2goJChpdGVtKS5kYXRhKCdpZCcpKTtcbiAgICB9KTtcblxuICAgIGlmKGxhc3RJRFMubGVuZ3RoKXtcbiAgICAgICAgaW5jcmVtZW50SWQgPSAoTWF0aC5tYXguYXBwbHkoTWF0aCxsYXN0SURTKSArIDEpIHx8IDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWlkJS9nLCBpICsgaW5jcmVtZW50SWQpO1xuICAgICAgICB0Ym9keS5wcmVwZW5kKHRyTGFzdCk7XG4gICAgICAgICQoJy5kYXRlLWZpZWxkJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuZ3JvdXAtZXZlbnQtc2F2ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgdGV4dGFyZWFcIik7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZFwiKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5kYXRlLWZpZWxkXCIpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZSBrZXl1cCBwYXN0ZScsICd0ZXh0YXJlYScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNhdmUtcGFnZScsIHNhdmVTdGF0ZSk7XG5cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDb3B5IGlkc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSkuc2VsZWN0KCk7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKTtcblxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIFByaWNlIHJlY291bnRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5yZWNvdW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwcmljZSA9ICQoJy5iYXNrZXQtcHJpY2UnKS5kYXRhKCdwcmljZScpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5yb3cnKS5maW5kKCcuaXRlbS1zdW0nKS50ZXh0KChwcmljZSAqICQodGhpcykudmFsKCkpKTtcbiAgICAgICAgbGV0IHRvdGFsU3VtID0gMDtcbiAgICAgICAgJCgnLml0ZW0tc3VtJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b3RhbFN1bSArPSBwYXJzZUludCgkKHRoaXMpLnRleHQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcjdG90YWwtc3VtJykudGV4dCh0b3RhbFN1bSlcbiAgICB9KVxuXG4gICAgLm9uKCdjbGljaycsICcuaXRlbS1yZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLnhfcGFuZWwnKS5oaWRlKCk7XG5cbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5hdHRyKCdocmVmJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9KVxuXG4gICAgLm9uKCdjbGljaycsICcjb3JkZXItc2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBnZXRGb3JtRGF0YSgkKCcucmVjb3VudCcpKTtcblxuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHsuLi5kYXRhfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgICAgICAgICAgJCgnLmJhc2tldC1oaWRlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH0pXG47IiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsZXZlbHMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBsZXQgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBsZXQgdGJvZHkgPSAkKCcjbGV2ZWxzID4gdGJvZHknKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCdpbnB1dFtuYW1lPVwiaWRcIl0nKS52YWwoKTtcbiAgICAgICAgbGV0IGluY3JlbWVudElkID0gcGFyc2VJbnQobGFzdElEKSB8fCAwO1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI2xldmVsX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVsZXZlbF9pZCUvZywgKytpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGxldmVscyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxldmVsU3RhdGUgKCkge1xuICAgIGxldCByb3dUb1NhdmUgPSAkKHRoaXMpLnBhcmVudHMoJ3RyJyk7XG4gICAgbGV0IHJvdyA9IHJvd1RvU2F2ZS5maW5kKFwiLmVkaXRhYmxlIHNlbGVjdCwgLmVkaXRhYmxlIGlucHV0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBuZXcgaHR0cChyb3dUb1NhdmUuZGF0YSgnYWN0aW9uJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKHJvdylcbiAgICAgICAgLnNlbmQoKTtcbn1cbiIsImltcG9ydCB7c2F2ZUxldmVsU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVMZXZlbFN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBsZXZlbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMsIHNhdmVCdXR0b24pKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxldmVscyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZUxldmVsU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHNob3cgYXNzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dBc3NldChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgYWN0aW9uID0gU1dPV19BU1NFVF9ST1VURSArICc/aWQ9JyArIGN1cnJlbnRFbGVtZW50LnZhbCgpO1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSkge1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ25hbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1uYW1lJykuaHRtbChyZXNwb25zZS5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdwcmV2aWV3X3VybCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgLmxpc3QtdGh1bWJuYWlsJykuZGF0YSgnZnVsbCcsIHJlc3BvbnNlLmRhdGEucHJldmlld191cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufVxuIiwiXG5pbXBvcnQge3Nob3dBc3NldH0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0Fzc2V0XCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhc3NldFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5hc3NldCcsIHNob3dBc3NldClcblxuICAgICIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbG9jYWxpemF0aW9uIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgbGV0IHRib2R5ID0gJCgnI2xvY2FsaXphdGlvbnMgPiB0Ym9keScpO1xuICAgIGxldCB0ZW1wbGF0ZSA9ICQoJyNsb2NhbGl6YXRpb25fdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICB0Ym9keS5hcHBlbmQodGVtcGxhdGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBSZW1vdmUgbm90IHNhdmVkIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUm93KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGxvY2FsaXphdGlvbiBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsaXphdGlvblN0YXRlIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudEJ0bi5jbG9zZXN0KCd0cicpO1xuICAgIGNvbnN0IGN1cnJlbnRLZXkgPSBwYXJlbnQuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS52YWwoKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGR1cGxpY2F0ZWQga2V5c1xuICAgICAqXG4gICAgICogQHR5cGUge2pRdWVyeX1cbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50S2V5RHVwbGljYXRlID0gJCgnI2xvY2FsaXphdGlvbnMnKS5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmZpbHRlcigoXywgaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudEtleSA9PT0gaXRlbS52YWx1ZTtcbiAgICB9KTtcbiAgICBpZiAoY3VycmVudEtleUR1cGxpY2F0ZS5sZW5ndGggPiAxKXtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUga2V5ICcgKyBjdXJyZW50S2V5fSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gcGFyZW50LmZpbmQoJy5lZGl0YWJsZSBpbnB1dCcpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcGFyZW50LmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykuYXR0cigncmVhZG9ubHknLCB0cnVlKTtcblxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlTG9jYWxpemF0aW9uU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVMb2NhbGl6YXRpb25TdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtyZW1vdmVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbG9jYWxpemF0aW9ucyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY3JlYXRlLXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTG9jYWxpemF0aW9uU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1yb3cnLCByZW1vdmVSb3cpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWFnaWMgPiB0Ym9keScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0W25hbWU9XCJpZFwiXScpLnZhbCgpO1xuICAgICAgICBsZXQgaW5jcmVtZW50SWQgPSBwYXJzZUludChsYXN0SUQpIHx8IDA7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjbWFnaWNfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJW1hZ2ljX2lkJS9nLCArK2luY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVNYWdpY1N0YXRlICgpIHtcbiAgICBjb25zdCBkYXRhID0gJCgnLm1hZ2ljLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuXG4gICAgZGF0YS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkuYXR0cigncmVhZG9ubHknLCB0cnVlKVxuICAgIH0pO1xuXG4gICAgaWYoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZU1hZ2ljU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZU1hZ2ljU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsImltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSURcbiAqXG4gKiBAcGFyYW0gZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbmV3IFJlcXVlc3RCdWlsZGVyKHRoaXMuaHJlZilcbiAgICAgICAgLnN1Y2Nlc3MocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICQoJyNsYXN0LW1ha2V1cC1raXQtaWQnKVxuICAgICAgICAgICAgICAgIC52YWwocmVzdWx0Lm1ha2V1cF9raXRfaWQpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBnZXRMYXN0TWFrZXVwS2l0SUQgZnJvbSBcIi4vaGFuZGxlcnMvZ2V0TGFzdE1ha2V1cEtpdElEXCI7XG5cbi8qKlxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSUQgYXQgdGhlIGJvZHkgcGFydHMgZ3JpZFxuICovXG4kKCcjZ2V0LWxhc3QtbWFrZXVwLWtpdC1pZCcpXG4gICAgLmNsaWNrKGdldExhc3RNYWtldXBLaXRJRCk7XG4iLCJleHBvcnQgY29uc3QgTUFLRVVQX0tJVF9TSE9XX0ZPUk0gPSAnTUFLRVVQX0tJVF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtNQUtFVVBfS0lUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvbWFrZXVwLWtpdC9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KE1BS0VVUF9LSVRfU0hPV19GT1JNKSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGluZ3JlZGllbnQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWxfaW5ncmVkaWVudF9ncm91cHMgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmdyb3VwX2lkJykudGV4dCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQtZ3JvdXAlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZ3JlZGllbnREZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtpbmdyZWRpZW50RGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBpbmdyZWRpZW50RGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGluZ3JlZGllbnQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWxfaW5ncmVkaWVudHMgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX2luZ3JlZGllbnRzX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmluZ3JlZGllbnRfaWQnKS50ZXh0KCk7XG4gICAgbGV0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJW1lYWwtaW5ncmVkaWVudCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIaWRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5ncmVkaWVudERlbGV0ZSgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBJbmdyZWRpZW50cyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1lYWxJbmdyZWRpZW50c1N0YXRlICgpIHtcbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgbGV0IGRhdGEgPSAkKCcubWVhbC1pbmdyZWRpZW50cy1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge2luZ3JlZGllbnREZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGVcIjtcbmltcG9ydCB7c2F2ZU1lYWxJbmdyZWRpZW50c1N0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgaW5ncmVkaWVudERlbGV0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlTWVhbEluZ3JlZGllbnRzU3RhdGUpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5tZWFsX2lkJykudGV4dCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJW1lYWwlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZWFsRGVsZXRlKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBNZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWVhbFN0YXRlICgpIHtcbiAgICBjb25zdCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJy5tZWFsLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWRcIik7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5tZWFsLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgdGJvZHkuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge21lYWxEZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL21lYWxEZWxldGVcIjtcbmltcG9ydCB7c2F2ZU1lYWxTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgbWVhbERlbGV0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIG1lYWxcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlTWVhbFN0YXRlKClcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQoJy5zYXZlLXBhZ2UnKTtcblxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ2lucHV0W25hbWU9XCJhd2FyZF9pZFwiXScpLnZhbCgwKTtcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzLCBzYXZlQnV0dG9uKSgpO1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcbiAqL1xuJCgnLnNhdmUtcGFnZScpLmNsaWNrKHNhdmVNZWFsU3RhdGUpO1xuIiwiZXhwb3J0IGNvbnN0IE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSA9ICdORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0nO1xuIiwiY29uc3QgVFJBU0ggPSAnVFJBU0gnO1xuY29uc3QgVFJBU0hfRklFTERTX0lEID0gJ3RyYXNoLWZpZWxkcyc7XG5jb25zdCBTRUxFQ1RfSUQgPSAnbmVpZ2hib3ItYWN0aXZpdHktdHlwZS1pZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTRUxFQ1RfSUQpO1xuXG4gICAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgICAgIGNvbnN0IHRyYXNoRmllbGRzID0gJCgnIycgKyBUUkFTSF9GSUVMRFNfSUQpO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkRWxlbWVudC50ZXh0LnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgVFJBU0g6XG4gICAgICAgICAgICAgICAgdHJhc2hGaWVsZHMucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdHJhc2hGaWVsZHMuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge05FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4uL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSwgc2VsZik7XG5cbiAgICAgICAgY2hhbmdlVHlwZSgpO1xuXG4gICAgICAgICQoJy5uZWlnaGJvci1hY3Rpdml0eS1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gJy4vaGFuZGxlcnMvY2hhbmdlVHlwZSc7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSlcbiAgICAub24oJ2NoYW5nZScsICcubmVpZ2hib3ItYWN0aXZpdHktdHlwZScsIGNoYW5nZVR5cGUpO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXRUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKS5maW5kKCdhJyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9hY3RpdmVUYWI9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gJCgnW25hbWU9XCJjYXRlZ29yeVwiXScpLnZhbCgpO1xuICAgIGNvbnN0IGFzc2V0X2lkcyA9ICQoJ1tuYW1lPVwiYXNzZXRzX2lkc1wiXScpO1xuXG4gICAgaWYoIWFzc2V0X2lkcy5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgnbmxhLWFzc2lnbicpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHthc3NldF9pZHM6IGFzc2V0X2lkcy52YWwoKSwgY2F0ZWdvcnk6IGNhdGVnb3J5fSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgYXNzZXRfaWRzLnZhbCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxpc3QgKCkge1xuICAgIGNvbnN0IGFzc2V0SWRzID0gW107XG4gICAgY29uc3QgY2F0ZWdvcnkgPSAkKCdbbmFtZT1cImNhdGVnb3J5XCJdJykudmFsKCk7XG4gICAgY29uc3QgYXNpZ25MaXN0ID0gJCgndGJvZHksY29udGFpbmVyJykuZmluZCgnOmNoZWNrYm94OmNoZWNrZWQnKTtcbiAgICBhc2lnbkxpc3QuZWFjaChmdW5jdGlvbiAoaSwgYXNzZXRJZCkge1xuICAgICAgICBhc3NldElkcy5wdXNoKCQoYXNzZXRJZCkuZGF0YSgnYXNzZXQnKSlcbiAgICB9KTtcblxuICAgIGlmKCFhc3NldElkcy5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpKTtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7YXNzZXRfaWRzOiBhc3NldElkcywgY2F0ZWdvcnk6IGNhdGVnb3J5fSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgYXNpZ25MaXN0LnByb3AoIFwiY2hlY2tlZFwiLCBmYWxzZSApO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2Fzc2V0VGFifSBmcm9tIFwiLi9oYW5kbGVycy9hc3NldFRhYlwiO1xuaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuaW1wb3J0IHt1cGRhdGVMaXN0fSBmcm9tIFwiLi9oYW5kbGVycy91cGRhdGVMaXN0XCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFzc2V0LXRhYicsIGFzc2V0VGFiKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1hc3NpZ24nLCB1cGRhdGVMaXN0KVxuXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1zdWJtaXQtYWN0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+JylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIG5sYSBsaXN0IGNhdGVnb3J5XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXNzZXQtYXNzaWduJywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTkxBIHF0eVxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNxdHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ldyBodHRwKCdjaGFuZ2UtcGVyLXBhZ2UnKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7cmVjb3JkX3Blcl9wYWdlOiAkKHRoaXMpLnZhbCgpfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbIGhlYWQsIHRhaWwgXSA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoICc/JyApO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBoZWFkICsgJz8nICsgdGFpbC5yZXBsYWNlKG5ldyBSZWdFeHAoYHBhZ2U9W14mXSp8cGFnZT1bXiZdKiZgKSwgJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfSk7XG5cbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJ3Rib2R5LmNvbnRhaW5lcicpO1xuXG4gICAgbGV0IGxhc3RJRFMgPSBbXTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xuICAgIHRib2R5LmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGlmICgkKGl0ZW0pLmRhdGEoJ2lkJykpIHtcbiAgICAgICAgICAgIGxhc3RJRFMucHVzaCgkKGl0ZW0pLmRhdGEoJ2lkJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGxhc3RJRFMubGVuZ3RoKSB7XG4gICAgICAgIGluY3JlbWVudElkID0gKE1hdGgubWF4LmFwcGx5KE1hdGgsIGxhc3RJRFMpICsgMSkgfHwgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyN0ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8laWQlL2csIGkgKyBpbmNyZW1lbnRJZCk7XG4gICAgICAgIHRib2R5LnByZXBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWRcIik7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNhdmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zYXZlLXBhZ2UnLCBzYXZlU3RhdGUpO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCd0Ym9keS5jb250YWluZXInKTtcblxuICAgIGxldCBsYXN0SURTID0gW107XG4gICAgbGV0IGluY3JlbWVudElkID0gMTtcbiAgICB0Ym9keS5maW5kKFwidHJcIikuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBpZiAoJChpdGVtKS5kYXRhKCdpZCcpKSB7XG4gICAgICAgICAgICBsYXN0SURTLnB1c2goJChpdGVtKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChsYXN0SURTLmxlbmd0aCkge1xuICAgICAgICBpbmNyZW1lbnRJZCA9IChNYXRoLm1heC5hcHBseShNYXRoLCBsYXN0SURTKSArIDEpIHx8IDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWlkJS9nLCBpICsgaW5jcmVtZW50SWQpO1xuICAgICAgICB0Ym9keS5wcmVwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIik7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZFwiKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNhdmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zYXZlLXBhZ2UnLCBzYXZlU3RhdGUpO1xuXG4iLCJleHBvcnQgY29uc3QgUFJPRFVDVF9TSE9XX0ZPUk0gPSAnUFJPRFVDVF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IENsZWF2ZSBmcm9tIFwiY2xlYXZlLmpzXCI7XG5cbi8qKlxuICogUHJpY2UgaW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBuZXcgQ2xlYXZlKHRoaXMsIHtcbiAgICAgICAgbnVtZXJhbDogdHJ1ZSxcbiAgICAgICAgcHJlZml4OiAnJCAnLFxuICAgICAgICByYXdWYWx1ZVRyaW1QcmVmaXg6IHRydWUsXG4gICAgICAgIG9uVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQocGFyc2VGbG9hdChlLnRhcmdldC5yYXdWYWx1ZSkgKiAxMDApO1xuICAgICAgICAgICAgbGV0IHByb2R1Y3RQcmljZSA9ICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCd0ZCcpLmZpbmQoJy5wcm9kdWN0LXByaWNlJyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gcGFyc2VJbnQocHJvZHVjdFByaWNlLnZhbCgpKSkge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZVxuICAgICAgICAgICAgICAgICAgICAudmFsKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7UFJPRFVDVF9TSE9XX0ZPUk19IGZyb20gXCJtb2R1bGVzL3Byb2R1Y3QvY29uc3RhbnRzXCI7XG5pbXBvcnQgcHJpY2VJbml0IGZyb20gXCJtb2R1bGVzL3Byb2R1Y3QvaGFuZGxlcnMvcHJpY2VJbml0XCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChQUk9EVUNUX1NIT1dfRk9STSkpO1xuXG4vKipcbiAqIFByaWNlIGZvcm1hdFxuICovXG4kKCcucHJvZHVjdC1wcmljZS12aWV3JykuZWFjaChwcmljZUluaXQpO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTkxBIG9yZGVyXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI29yZGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXcgaHR0cCgnY2hhbmdlLW9yZGVyJylcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe29yZGVyOiAkKHRoaXMpLnZhbCgpfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBOTEEgcXR5XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI3F0eScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IGh0dHAoJ2NoYW5nZS1wZXItcGFnZScpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHtyZWNvcmRfcGVyX3BhZ2U6ICQodGhpcykudmFsKCl9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFsgaGVhZCwgdGFpbCBdID0gbG9jYXRpb24uaHJlZi5zcGxpdCggJz8nICk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGhlYWQgKyAnPycgKyB0YWlsLnJlcGxhY2UobmV3IFJlZ0V4cChgcGFnZT1bXiZdKnxwYWdlPVteJl0qJmApLCAnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9KTtcbiIsIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdFxuICpcbiAqIEBwYXJhbSBfXG4gKiBAcGFyYW0gaXRlbVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoXywgaXRlbSkge1xuICAgIGNvbnN0IGRyb3B6b25lQ29udGFpbmVyID0gJChpdGVtKTtcbiAgICBjb25zdCBwcmV2aWV3SGlkZGVuSW5wdXQgPSBkcm9wem9uZUNvbnRhaW5lci5maW5kKCdpbnB1dCcpO1xuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgKi9cbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGl0ZW0pXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVDb250YWluZXIuZGF0YSgndXJsJykpXG4gICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAkKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJldmlld1xuICAgICAqL1xuICAgIGlmICghIXByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSkge1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSxcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCdmb2xkZXInKSwgcHJldmlld0hpZGRlbklucHV0LnZhbCgpKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAqL1xuICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xufSIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XG5pbXBvcnQgZHJvcHpvbmVJbml0IGZyb20gXCIuL2hhbmRsZXJzL2Ryb3B6b25lSW5pdFwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogVHVybmVkIG9mZiB0aGUgRHJvcHpvbmUgYXV0byBpbml0XG4gKlxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqL1xuJCgnLmRyb3B6b25lJykuZWFjaChkcm9wem9uZUluaXQpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMsIHNhdmVCdXR0b24pKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSkiLCJjb25zdCBXQUxLX0NBVEVHT1JZID0gJzYnO1xuY29uc3QgUlVOX0NBVEVHT1JZID0nNyc7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdDIgPSAkKCcudGFibGUnKS5maW5kKCcuZW1iZWQtZ3JvdXAgc2VsZWN0LnNlbGVjdDInKTtcbiAgICAgICAgbGV0IHNlbGVjdFZhbCA9IDA7XG4gICAgICAgIHNlbGVjdDIuZWFjaChmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgICAgc2VsZWN0VmFsID0gJChpKS52YWwoKTtcbiAgICAgICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgICAgICQoaSkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGkpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNwZWVkIG9uIHRyaWdnZXIgYWRkLWVtYmVkIGJ1dHRvblxuICAgICAqL1xuICAgIC5vbignYWlfYW5pbWF0aW9uJywgJy5hZGQtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGVtYmVkID0gJCh0aGlzKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gZW1iZWQuZmluZCgnLnNlbGVjdDInKS52YWwoKTtcbiAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICBlbWJlZC5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbWJlZC5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNwZWVkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBjb25zdCBzZWxlY3RWYWwgPSAkKGl0ZW0udGFyZ2V0KS52YWwoKTtcbiAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiIsImV4cG9ydCBjb25zdCBTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNID0gJ1NIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0nO1xuIiwiLyoqXG4gKiBBZGQgYSBuZXcgc2hvcCBpbiBhIGRlcGFydG1lbnRzIGdyaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YWJsZSA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLnNob3BzLXRhYmxlJykuZmluZCgndGJvZHknKTtcbiAgICBjb25zdCBkZXBhcnRtZW50SWQgPSBjdXJyZW50QnRuLmRhdGEoJ2RlcGFydG1lbnQnKTtcbiAgICBsZXQgY291bnRlciA9IHBhcnNlSW50KGN1cnJlbnRCdG4uZGF0YSgnY291bnQnKSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSAkKCcjc2hvcC10ZW1wbGF0ZScpXG4gICAgICAgIC5odG1sKClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnJWRlcGFydG1lbnRJZCUnLCBcImdcIiksIGRlcGFydG1lbnRJZClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnJWluZGV4JScsIFwiZ1wiKSwgY291bnRlcisrKTtcblxuICAgIGN1cnJlbnRCdG4uZGF0YSgnY291bnQnLCBjb3VudGVyKTtcblxuICAgIHRhYmxlLmFwcGVuZCh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBmb3Igc2hvcCBkZXBhcnRtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkYXRhTmFtZVByZWZpeCA9ICdzaG9wJztcbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBmYXN0U2F2ZUNvbnRhaW5lciA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGlmICghZmFzdFNhdmVDb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgZmFzdFNhdmVDb250YWluZXIuZmluZCgndGJvZHkgdHInKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBnZXRGb3JtRGF0YSgkKHRoaXMpKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBgJHtkYXRhTmFtZVByZWZpeH1bJHtpbmRleH1dWyR7aX1dYDtcbiAgICAgICAgICAgIHJlc3VsdFtpdGVtTmFtZV0gPSBmb3JtRGF0YVtpXTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKHJlc3VsdClcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogUmFkaW8gaW5wdXQgZnJvbSBjaGVja2JveFxuICogQmVjYXVzZSBpbnB1dFt0eXBlPXJhZGlvXSBkaWQgbm90IHdvcmsgY29ycmVjdGx5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBjdXJyZW50SXRlbS5jbG9zZXN0KCcudGFibGUnKS5maW5kKCcucmFkaW8nKTtcblxuICAgIGFsbEl0ZW1zLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgYWxsSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcblxuICAgIGN1cnJlbnRJdGVtLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnY2hlY2tlZCcpO1xufVxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG5ldyBTb3J0YWJsZSh0aGlzLCB7XG4gICAgICAgIGdyb3VwOiAnc2hvcHMnLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJhZGlvOiAkKGUuaXRlbSkuZmluZCgnLnJhZGlvJyksXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogJChlLml0ZW0pLmNsb3Nlc3QoJy50YWJsZScpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXJlbnQuZmluZCgnLnJhZGlvLmNoZWNrZWQ6Z3QoMCknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYWRpby5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1NIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0IGFmdGVyIHRoZSBtb2RhbCBvcGVuZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNLCAoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3XG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybCcpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlldyBTbWFsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVJbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZS1zbWFsbCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwtc21hbGwnKSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRHJvcHpvbmUgSW5pdFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRyb3B6b25lRWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcHJldmlld1VybEVsZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZHJvcHpvbmVJbml0KGRyb3B6b25lRWxlbWVudCwgcHJldmlld1VybEVsZW1lbnQpIHtcbiAgICBpZiAoIWRyb3B6b25lRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgKi9cbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGRyb3B6b25lRWxlbWVudClcbiAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC51cmwpXG4gICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAkKHByZXZpZXdVcmxFbGVtZW50KS52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgICQocHJldmlld1VybEVsZW1lbnQpLnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJChkcm9wem9uZUVsZW1lbnQpLmZpbmQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUgPSByZXNwb25zZS5maWxlX25hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHByZXZpZXdcbiAgICAgKi9cbiAgICBpZiAocHJldmlld1VybEVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQuZm9sZGVyLCBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgKi9cbiAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbn0iLCJpbXBvcnQgYWRkU2hvcCBmcm9tIFwiLi9oYW5kbGVycy9hZGRTaG9wXCI7XG5pbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVcIjtcbmltcG9ydCByYWRpb0lucHV0IGZyb20gXCIuL2hhbmRsZXJzL3JhZGlvSW5wdXRcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIm1vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqL1xuc2hvd0Zvcm0oKTtcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBSYWRpbyBidXR0b25zIGJlaGF2aW9yXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnJhZGlvJywgcmFkaW9JbnB1dClcblxuICAgIC8qKlxuICAgICAqIERvY3VtZW50IHJlYWR5XG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBjbGFzcyB0byBjaGVja2VkIHJhZGlvc1xuICAgICAgICAgKi9cbiAgICAgICAgJCgnLnJhZGlvW2NoZWNrZWRdJykuYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGEgbmV3IHNob3AgaW4gYSBkZXBhcnRtZW50cyBncmlkXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuYWRkLXNob3AnKS5jbGljayhhZGRTaG9wKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmFzdCBzYXZlXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuZmFzdC1zYXZlLXNob3BzJykuY2xpY2soZmFzdFNhdmUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYWtlIHRyIHRvIHNvcnRhYmxlXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XG5cbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjcmVsZWFzZSA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI3JlbGVhc2VfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcucmVsZWFzZV9pZCcpLnZhbCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXJlbGVhc2UlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcblxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXRpbWVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBNZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUGFnZSAoKSB7XG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcucmVsZWFzZS1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZFwiKTtcbiAgICBjb25zdCBkYXRhID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdCwgLmNoYW5nZWQgdGV4dGFyZWFcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICB0Ym9keS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZVBhZ2V9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlUGFnZSk7XG4iLCIkKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCd0ZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYoJCh0aGlzKS5hdHRyKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kJywgJyNlN2U3ZTcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNzb3VuZCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI3NvdW5kX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLnNvdW5kX2lkJykudmFsKCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lc291bmRfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTb3VuZFN0YXRlICgpIHtcbiAgICBjb25zdCBkYXRhID0gJCgnLnNvdW5kLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTb3VuZFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU291bmRTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVTb3VuZFN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogRmluZCBVc2VyXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVXNlcigpIHtcbiAgICBjb25zdCBwcmVmaXggPSAkKHRoaXMpLmRhdGEoJ3ByZWZpeCcpO1xuICAgIGNvbnN0IGRhdGEgPSB7dWlkOiAkKCcjJyArIHByZWZpeCkudmFsKCksIG5hbWU6ICQoJyMnICsgcHJlZml4ICsgJ19uYW1lJykudmFsKCksIHByZWZpeDogcHJlZml4fTtcbiAgICBjb25zdCB1c2VyX3RlbXBsYXRlID0gJCgnI3VzZXJfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgaW5zZXJ0X2Jsb2NrID0gJCgnIycgKyBwcmVmaXggKyAnX2xpc3QnKTtcblxuICAgIGlmICghZGF0YS51aWQubGVuZ3RoICYmICFkYXRhLm5hbWUubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIGZpbmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAkKHJlc3BvbnNlLnVzZXJzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suY2xvc2VzdCgndGFibGUnKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5hcHBlbmQodXNlcl90ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyV1c2VyX2lkJS9nLCBpdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVwZXRfbmFtZSUnLCBpdGVtLnBldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcldXNlcl9uYW1lJScsIGl0ZW0uZmlyc3RfbmFtZSArICcgJyArIGl0ZW0ubGFzdF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVsZXZlbCUnLCBpdGVtLnhwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVhdmF0YXIlJywgaXRlbS5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJXRhcmdldCUvZywgcHJlZml4KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogU2VuZCBHaWZ0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kR2lmdCAoKSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNzZW5kJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9LCAzMDAwKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNzZW5kLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiaW5wdXQsIHRleHRhcmVhXCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzZW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZm9ybUl0ZW1zKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKXtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICQoJy50YWJsZScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VfbGVuZ3RoID0gJCgnI21lc3NhZ2VfbGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfbGVuZ3RoLnRleHQobWVzc2FnZV9sZW5ndGguZGF0YSgnbGVuZ3RoJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2VuZEdpZnR9IGZyb20gXCIuL2hhbmRsZXJzL3NlbmRHaWZ0XCI7XG5pbXBvcnQge2ZpbmRVc2VyfSBmcm9tIFwiLi9oYW5kbGVycy9maW5kVXNlclwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogRmluZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjZmluZF9zZW5kZXIsICNmaW5kX3JlY2VpdmVyJywgZmluZFVzZXIpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNzZW5kJywgc2VuZEdpZnQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHNlbGVjdGVkIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnRhYmxlIHRyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAkKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0JykgKyAnX3VpZCcpLnZhbCgkKHRoaXMpLmRhdGEoJ3VpZCcpKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbGltaXQgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAndGV4dGFyZWEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykucHJvcCgnbmFtZScpLnJlcGxhY2UoJ2xvb3RfZGF0YVsnLCAnJykucmVwbGFjZSgnXScsICcnKSArICdfbGVuZ3RoJztcbiAgICAgICAgJCgnIycgKyB0YXJnZXQpLnRleHQoJCh0aGlzKS5kYXRhKCdtYXhsZW5ndGgnKSAtICQodGhpcykudmFsKCkubGVuZ3RoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCBhc3NldFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2Fzc2V0c19saXN0IGltZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2Fzc2V0c19saXN0JykuZmluZCgnaW1nJykuY3NzKCdib3JkZXInLCAnJyk7XG4gICAgICAgICQodGhpcykuY3NzKCdib3JkZXInLCAnMnB4IHNvbGlkICNjMWMxYzEnKTtcbiAgICAgICAgJCgnI2Fzc2V0X2lkJykudmFsKCQodGhpcykuZGF0YSgncHJpemUnKSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbnRlcmVkIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNjYW5jZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy50YWJsZScpLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCB0ZXh0YXJlYScpLnZhbCgnJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZWRpcmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpXG4gICAgfSk7XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5zcGVjaWFsLXByaXplLXNhdmUtY29udGFpbmVyIGxhYmVsOmNvbnRhaW5zKCdMaW1pdCcpXCIpLmNzcygncGFkZGluZycsIDApLmh0bWwoXCJBdmFpbGFibGVcIik7XG4gICAgICAgICQoJy5zcGVjaWFsLXByaXplLXNhdmUtY29udGFpbmVyIGlucHV0JykuYXR0cigncmVhZG9ubHknLCB0cnVlKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAkKCcuYWRkLWVtYmVkLCAucmVtb3ZlLWVtYmVkJykucmVtb3ZlKCk7XG5cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ29weSBpZHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0JykpLnNlbGVjdCgpO1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYik7XG5cbiIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFRBTUFUT09MX1NIT1dfRk9STSA9ICdUQU1BVE9PTF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7VEFNQVRPT0xfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShUQU1BVE9PTF9TSE9XX0ZPUk0sIHNlbGYpO1xuXG4gICAgICAgICQoJy5uZWlnaGJvci1hY3Rpdml0eS1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKTtcblxuLyoqXG4gKiBSdW4gdGhlIHNob3cgZm9ybSBoYW5kbGVyLlxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXG4gKi9cbiQoJy5zaG93LWZvcm0nKVxuICAgIC5jbGljayhzaG93Rm9ybSk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEZpbmQgVXNlclxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFVzZXIoKSB7XG4gICAgY29uc3QgcHJlZml4ID0gJCh0aGlzKS5kYXRhKCdwcmVmaXgnKTtcbiAgICBjb25zdCBkYXRhID0ge3VpZDogJCgnIycgKyBwcmVmaXgpLnZhbCgpLCBuYW1lOiAkKCcjJyArIHByZWZpeCArICdfbmFtZScpLnZhbCgpLCBwcmVmaXg6IHByZWZpeH07XG4gICAgY29uc3QgdXNlcl90ZW1wbGF0ZSA9ICQoJyN1c2VyX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGluc2VydF9ibG9jayA9ICQoJyMnICsgcHJlZml4ICsgJ19saXN0Jyk7XG5cbiAgICBpZiAoIWRhdGEudWlkLmxlbmd0aCAmJiAhZGF0YS5uYW1lLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBmaW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgJChyZXNwb25zZS51c2VycykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmNsb3Nlc3QoJ3RhYmxlJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS10YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suYXBwZW5kKHVzZXJfdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8ldXNlcl9pZCUvZywgaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclcGV0X25hbWUlJywgaXRlbS5wZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXVzZXJfbmFtZSUnLCBpdGVtLmZpcnN0X25hbWUgKyAnICcgKyBpdGVtLmxhc3RfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclbGV2ZWwlJywgaXRlbS54cClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclYXZhdGFyJScsIGl0ZW0uYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyV0YXJnZXQlL2csIHByZWZpeClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFNlbmQgR2lmdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZEdpZnQgKCkge1xuICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjc2VuZCcpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgfSwgMzAwMCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcjdHJvcGh5LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCJpbnB1dCwgdGV4dGFyZWFcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKCFmb3JtSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNlbmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShmb3JtSXRlbXMpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoISFyZXNwb25zZS5lcnJvcnMpe1xuICAgICAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyb3BoeV9jdXBzX2NvdW50ID0gJCgnI3Ryb3BoeV9jdXBzX2NvdW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRyb3BoeV9jdXBzX2NvdW50LnRleHQocGFyc2VJbnQodHJvcGh5X2N1cHNfY291bnQudGV4dCgpKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAkKCcudGFibGUnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyN0cm9waHktc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEnKS52YWwoJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlX2xlbmd0aCA9ICQoJyNuZXdzX21lc3NhZ2VfbGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfbGVuZ3RoLnRleHQobWVzc2FnZV9sZW5ndGguZGF0YSgnbGVuZ3RoJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2VuZEdpZnR9IGZyb20gXCIuL2hhbmRsZXJzL3NlbmRHaWZ0XCI7XG5pbXBvcnQge2ZpbmRVc2VyfSBmcm9tIFwiLi9oYW5kbGVycy9maW5kVXNlclwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogRmluZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjZmluZF9zZW5kZXIsICNmaW5kX3JlY2VpdmVyJywgZmluZFVzZXIpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNzZW5kJywgc2VuZEdpZnQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHNlbGVjdGVkIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnRhYmxlIHRyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAkKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0JykgKyAnX3VpZCcpLnZhbCgkKHRoaXMpLmRhdGEoJ3VpZCcpKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbGltaXQgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAndGV4dGFyZWEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykucHJvcCgnbmFtZScpLnJlcGxhY2UoJ2N1cF9kYXRhWycsICcnKS5yZXBsYWNlKCddJywgJycpICsgJ19sZW5ndGgnO1xuICAgICAgICAkKCcjJyArIHRhcmdldCkudGV4dCgkKHRoaXMpLmRhdGEoJ21heGxlbmd0aCcpIC0gJCh0aGlzKS52YWwoKS5sZW5ndGgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50ZXJlZCBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjY2FuY2VsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcudGFibGUnKS5oaWRlKCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEnKS52YWwoJycpXG4gICAgfSk7XG4iLCJcbi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICBpZDogJ3Ryb3BoeS1jdXAtdXNlcnMnXG4gICAgfSwgJ1Ryb3BoeSBjdXAgdXNlcnMnLCB1cmwpO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcudHJvcGh5LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIik7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZFwiKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcbmltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgU0VBUkNIX1VTRVJfQVNTRVRTID0gJ1NFQVJDSF9VU0VSX0FTU0VUUyc7XG5leHBvcnQgY29uc3QgU1VCTUlUX1VTRVJfUEFSVF9GT1JNID0gJ1NVQk1JVF9VU0VSX1BBUlRfRk9STSc7XG5leHBvcnQgY29uc3QgREVMRVRFX05FSUdIQk9SID0gJ0RFTEVURV9ORUlHSEJPUic7XG5leHBvcnQgY29uc3QgQUREX05FSUdIQk9SID0gJ0FERF9ORUlHSEJPUic7IiwiLyoqXG4gKiBDaGFuZ2UgcGxhY2VtZW50IHNlbGVjdCBpbiBBZGQgQXNzZXRzIGJsb2NrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwbGFjZW1lbnROYW1lID0gJCgnI3BsYWNlbWVudC1uYW1lJyk7XG4gICAgaWYgKCQodGhpcykudmFsKCkgPiAwKSB7XG4gICAgICAgIHBsYWNlbWVudE5hbWUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZW1lbnROYW1lLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDaGFuZ2UgbW9kZSBmb3IgYWRkIG5laWdoYm9yc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmVpZ2hib3JzQ291bnQgPSAkKCcjbmVpZ2hib3JzLWNvdW50Jyk7XG4gICAgaWYoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICBuZWlnaGJvcnNDb3VudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5laWdoYm9yc0NvdW50LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBIaWRlIGFzc2V0cyBpbiBwbGFjZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmxvYWQtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICAkKCcjYXNzZXQtY29udGFpbmVyLScgKyBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKSkuaHRtbCgnJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogUExBQ0VNRU5UX0FTU0VUU19ST1VURSAtIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICogSW5pdGVkIGluIHVzZXIvZWRpdC5ibGFkZS5waHBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHBsYWNlbWVudCA9IGN1cnJlbnRFbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcpO1xuXG4gICAgY3VycmVudEVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmhpZGUtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIGxvYWRQYXJ0KFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgKyAnP3BsYWNlbWVudD0nICsgcGxhY2VtZW50LCAkKCcjYXNzZXQtY29udGFpbmVyLScgKyBwbGFjZW1lbnQpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBMb2FkIHBhcnQgZm9yIGVkaXQgdXNlciBwYWdlXG4gKi9cbmZ1bmN0aW9uIGxvYWRQYXJ0KGFjdGlvbiwgZWxlbWVudCkge1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSAkKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGl0ZW1zLmZpbmQoJy5saXN0LXRodW1ibmFpbCcpLnBvcG92ZXIoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiJyArICQodGhpcykuZGF0YSgnZnVsbCcpICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGl0ZW1zKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn0iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBRERfTkVJR0hCT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZXQgbmVpZ2hib3IgYXMgYWN0aXZlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUREX05FSUdIQk9SLCByZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3AudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjbmVpZ2hib3Itc3RhdHVzLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmh0bWwocmVzcC5kYXRhLnN0YXR1c190ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7REVMRVRFX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IG5laWdoYm9yIGFzIGRlbGV0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShERUxFVEVfTkVJR0hCT1IsIHJlc3AgPT4ge1xuICAgICAgICBpZiAocmVzcC50eXBlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgJCgnI2RlbGV0ZS1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjYWRkLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNuZWlnaGJvci1zdGF0dXMtJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuaHRtbChyZXNwLmRhdGEuc3RhdHVzX3RleHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtTRUFSQ0hfVVNFUl9BU1NFVFN9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZWFyY2ggdXNlciBhc3NldHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTRUFSQ0hfVVNFUl9BU1NFVFMsIGRhdGEgPT4ge1xuICAgICAgICAkKCcjc2VhcmNoLWFzc2V0cy1jb250YWluZXInKS5odG1sKGRhdGEpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5pbXBvcnQge1NVQk1JVF9VU0VSX1BBUlRfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFN1Ym1pdCB1c2VyIHBhcnQgZm9ybVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNVQk1JVF9VU0VSX1BBUlRfRk9STSwgcmVzcCA9PiB7XG4gICAgICAgIGxldCBmb3JtID0gJChyZXNwLmRhdGEpO1xuICAgICAgICAkKCcjJyArIHJlc3AuY29udGFpbmVyKS5yZXBsYWNlV2l0aChmb3JtKTtcbiAgICAgICAgZm9ybS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICAgICAgbm90aWZ5U3VjY2VzcygnVXNlciBkYXRhIHVwZGF0ZWQnKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzZWFyY2hVc2VyQXNzZXRzIGZyb20gXCIuL2xpc3RlbmVycy9zZWFyY2hVc2VyQXNzZXRzXCI7XG5pbXBvcnQgc3VibWl0VXNlclBhcnRGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm1cIjtcbmltcG9ydCBkZWxldGVOZWlnaGJvciBmcm9tIFwiLi9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3JcIjtcbmltcG9ydCBhZGROZWlnaGJvciBmcm9tIFwiLi9saXN0ZW5lcnMvYWRkTmVpZ2hib3JcIjtcbmltcG9ydCBsb2FkUGxhY2VtZW50QXNzZXRzIGZyb20gXCIuL2hhbmRsZXJzL2xvYWRQbGFjZW1lbnRBc3NldHNcIjtcbmltcG9ydCBoaWRlUGxhY2VtZW50QXNzZXRzIGZyb20gXCIuL2hhbmRsZXJzL2hpZGVQbGFjZW1lbnRBc3NldHNcIjtcbmltcG9ydCBjaGFuZ2VQbGFjZW1lbnQgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUGxhY2VtZW50XCI7XG5pbXBvcnQgY2hhbmdlUmFuZG9tTmVpZ2hib3JzIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVJhbmRvbU5laWdoYm9yc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vKipcbiAqIFNlYXJjaCB1c2VyIGFzc2V0cyBsaXN0ZW5lclxuICovXG5zZWFyY2hVc2VyQXNzZXRzKCk7XG5cbi8qKlxuICogU3VibWl0IHVzZXIgcGFydCBmb3JtIGxpc3RlbmVyXG4gKi9cbnN1Ym1pdFVzZXJQYXJ0Rm9ybSgpO1xuXG4vKipcbiAqIERlbGV0ZSBOZWlnaGJvclxuICovXG5kZWxldGVOZWlnaGJvcigpO1xuXG4vKipcbiAqIEFkZCBOZWlnaGJvclxuICovXG5hZGROZWlnaGJvcigpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhc3NldHMgaW4gcGxhY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcubG9hZC1hc3NldHMnLCBsb2FkUGxhY2VtZW50QXNzZXRzKVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHBsYWNlbWVudCBpbiBBZGQgQXNzZXRzIGJsb2NrXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI3BsYWNlbWVudC1mb3ItYXNzZXQnLCBjaGFuZ2VQbGFjZW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbW9kZSBmb3IgYWRkIG5laWdoYm9yc1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNpcy1yYW5kb20tbmVpZ2hib3JzJywgY2hhbmdlUmFuZG9tTmVpZ2hib3JzKVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hc3NldHMnLCBoaWRlUGxhY2VtZW50QXNzZXRzKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
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
	"./assets-log/module.js": "./modules/assets-log/module.js",
	"./award/module.js": "./modules/award/module.js",
	"./banner/module.js": "./modules/banner/module.js",
	"./cms-adps/module.js": "./modules/cms-adps/module.js",
	"./collection/module.js": "./modules/collection/module.js",
	"./daily-loot/module.js": "./modules/daily-loot/module.js",
	"./default/module.js": "./modules/default/module.js",
	"./deploy/module.js": "./modules/deploy/module.js",
	"./dpa/module.js": "./modules/dpa/module.js",
	"./dye/module.js": "./modules/dye/module.js",
	"./gift-wrap/module.js": "./modules/gift-wrap/module.js",
	"./home/module.js": "./modules/home/module.js",
	"./linked-assets/module.js": "./modules/linked-assets/module.js",
	"./localization/module.js": "./modules/localization/module.js",
	"./magic/module.js": "./modules/magic/module.js",
	"./makeup-kit-asset/module.js": "./modules/makeup-kit-asset/module.js",
	"./makeup-kit/module.js": "./modules/makeup-kit/module.js",
	"./meal/module.js": "./modules/meal/module.js",
	"./neighbor-activity/module.js": "./modules/neighbor-activity/module.js",
	"./news-gifts-log/module.js": "./modules/news-gifts-log/module.js",
	"./product/module.js": "./modules/product/module.js",
	"./public/module.js": "./modules/public/module.js",
	"./purchase/module.js": "./modules/purchase/module.js",
	"./settings/module.js": "./modules/settings/module.js",
	"./settings/modules/ai_animation/module.js": "./modules/settings/modules/ai_animation/module.js",
	"./shop-department/module.js": "./modules/shop-department/module.js",
	"./shop-releases/module.js": "./modules/shop-releases/module.js",
	"./shop-stats/module.js": "./modules/shop-stats/module.js",
	"./sound/module.js": "./modules/sound/module.js",
	"./subtype-attributes/module.js": "./modules/subtype-attributes/module.js",
	"./tamatool/module.js": "./modules/tamatool/module.js",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxDb25maXJtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vYnNlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2FkZEVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2FqYXhQYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2NvbmZpcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9mYXN0U2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9mYXN0U2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvbW9kYWxEYXRhLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3JlbW92ZUVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3N1Ym1pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGaWxlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldEZvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0U3ViRm9sZGVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2Ryb3Bab25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzIHN5bmMgbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLWxvZy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9oYW5kbGVycy9jb2xsYXBzZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9oYW5kbGVycy9yZW1vdmVBY3Rpb25UeXBlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9saXN0ZW5lcnMvdXBkYXRlSW5kZXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL3N0eWxlLnNjc3M/ZWZiZSIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FkZC1tZS9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hZGQtbWUvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzLWxvZy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMtbG9nL3N0eWxlcy5zY3NzP2NmYzUiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hd2FyZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvaGlkZUFyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9oaWRlVGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9zaG93QXJjaGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL3Nob3dUYXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL3N0eWxlcy5zY3NzPzJmNTMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2Nzcz9mOWYyIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9zdHlsZS5zY3NzPzZkZmEiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9oYW5kbGVycy9zYXZlRHBhU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2R5ZS9oYW5kbGVycy9jaGFuZ2VSb3dJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2R5ZS9oYW5kbGVycy9keWVTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2R5ZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Fzc2V0Q2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9mYXN0U2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvcmVtb3ZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2xpc3RlbmVycy9hZGRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvaG9tZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL2hhbmRsZXJzL3Nob3dBc3NldC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SUQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvbWVhbERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZXdzLWdpZnRzLWxvZy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZXdzLWdpZnRzLWxvZy9zdHlsZXMuc2Nzcz9jYTQxIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVibGljL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3B1cmNoYXNlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3B1cmNoYXNlL3N0eWxlLnNjc3M/MDQzYiIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2Ryb3B6b25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvYWRkU2hvcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9mYXN0U2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9yYWRpb0lucHV0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L3N0eWxlcy5zY3NzP2RjNTAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtcmVsZWFzZXMvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3Atc3RhdHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvaGFuZGxlcnMvc2F2ZVNvdW5kU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zb3VuZC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL3N0eWxlcy5zY3NzP2MwNmEiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvbG9hZFBsYWNlbWVudEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9hZGROZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9kZWxldGVOZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zZWFyY2hVc2VyQXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL3N1Ym1pdFVzZXJQYXJ0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL3N0eWxlcy5zY3NzPzY4MWEiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LnNjc3M/MWI2ZCJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJjb250ZW50IiwicHVzaCIsImh0bWwiLCJfZ2V0SUQiLCJqb2luIiwiX2dldFNpemUiLCJfYmVmb3JlQnVpbGQiLCJfZ2V0SGVhZGVyIiwiX2dldEJvZHkiLCJfZ2V0Rm9vdGVyIiwiX2FmdGVyQnVpbGQiLCJvZmYiLCJtb2RhbCIsImdldE1vZGFsQ291bnRlciIsIm1vZGFsQ29uZmlybSIsIk1vZGFsQnVpbGRlciIsIm5vdGlmeSIsInpfaW5kZXgiLCJFdmVudE9ic2VydmVyIiwic3Vic2NyaWJlcnMiLCJldmVudCIsImhhbmRsZXIiLCJfbG9nIiwiZm9yRWFjaCIsInN0YXRlIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInRvVXBwZXJDYXNlIiwib2JzZXJ2ZXIiLCJTYXZlZEl0ZW1Ob3RGb3VuZCIsIkVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEJ1dHRvbiIsInRhcmdldCIsInRlbXBsYXRlIiwiaWRQbGFjZWhvbGRlciIsInJvd0lkIiwiZW1iZWRGb3JtIiwiZW1iZWRCbG9ja0lkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJsZW5ndGgiLCJkaXNwYXRjaCIsInRyaWdnZXIiLCJjb250YWluZXIiLCJwYXJlbnRzIiwiaHR0cCIsInJlcGxhY2VXaXRoIiwic2VuZCIsImRhdGFTZXQiLCJidG5DbGFzcyIsImJ0bk5hbWUiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwicGFyc2VJbnQiLCJyZWxvYWQiLCJkaXNtaXNzIiwiY2xvc2VzdCIsImN1cnJlbnRCdG4iLCJzYXZlZEl0ZW0iLCJhdHRyIiwiZ2V0Rm9ybURhdGEiLCJDT05UQUlORVJfU0VMRUNUT1IiLCJmb3JtSXRlbXMiLCJtYXJrQ2hhbmdlZCIsImRvY3VtZW50IiwibW9kYWxEYXRhIiwiY29uZmlybU1vZGFsIiwic3VibWl0Rm9ybSIsImFqYXhQYWdpbmF0aW9uIiwiYWRkRW1iZWQiLCJyZW1vdmVFbWJlZCIsImZhc3RTYXZlIiwiZmFzdFNhdmVQYWdlIiwiYWZ0ZXJCdWlsZCIsInBhcmVudCIsImlkIiwic2VyaWFsaXplQXJyYXkiLCJjYW5SZWxvYWQiLCJidXR0b24iLCJkYXRhUmVsb2FkIiwicm9vdEZvbGRlciIsImZpbGVOYW1lIiwiZ2V0U3ViRm9sZGVyIiwiZm9ybSIsImZvcm1EYXRhIiwiZWFjaCIsImN1cnJlbnRJdGVtIiwicHJvcCIsInZhbCIsImZpbGVOYW1lSGFzaCIsIm1kNSIsInN1YnN0cmluZyIsInBhdGhQYXJ0cyIsIm1hdGNoIiwid2luZG93IiwialF1ZXJ5IiwicGF0aCIsInBhdGhuYW1lIiwic3BsaXQiLCJjb250ZXh0IiwicmVxdWlyZSIsIm1vZHVsZSIsInVuZGVmaW5lZCIsInN1YnNjcmliZSIsIkFXQVJEX0NSRUFURSIsInNlbGYiLCJ1bnN1YnNjcmliZSIsImVkaXRCdG4iLCJ0ZW1wbGF0ZUlkIiwidGVtcGxhdGVQbGFjZWhvbGRlciIsImF3YXJkX2lkIiwiQVdBUkRfREVMRVRFIiwiY3JlYXRlQnRuIiwiY2hpbGRyZW4iLCJFVkVOVF9OQU1FIiwiZHJvcHpvbmVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2aWV3VVJMIiwiZHJvcHpvbmVCdWlsZGVyIiwiRHJvcHpvbmVCdWlsZGVyIiwic2V0VXBsb2FkVXJsIiwiY2FuY2VsIiwiZmlsZV9uYW1lIiwidmFsdWUiLCJzZXRQcmV2aWV3IiwiZ2V0RmlsZVBhdGgiLCJmb2xkZXIiLCJidWlsZCIsInByZXYiLCJmb2N1cyIsIkFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEIiwidG9nZ2xlQ2xhc3MiLCJjdXJyZW50RWxlbWVudCIsIlJlcXVlc3RCdWlsZGVyIiwiaW5kZXgiLCJfIiwiaXRlbSIsInVwZGF0ZUluZGV4ZXMiLCJjb2xsYXBzZVN0YXRlIiwiY29sbGFwc2VTdGF0ZXMiLCJyZW1vdmVBY3Rpb25UeXBlU3RhdGUiLCJzYXZlU3RhdGUiLCJyZXNwIiwibmV4dCIsImhlaWdodCIsIkJBTk5FUl9TSE9XX0ZPUk0iLCJUWVBFX1NFTEVDVF9JRCIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJvcHRpb25zIiwic2VsZWN0ZWRFbGVtZW50IiwiZHJvcFpvbmVJbml0Iiwic2hvd0Zvcm0iLCJjaGFuZ2VUeXBlIiwiZGF0ZXRpbWVwaWNrZXIiLCJmb3JtYXQiLCJhdXRvY2xvc2UiLCJtaW5WaWV3IiwiY29weUFkcCIsImFkcElkc0ZpZWxkIiwiYWRwSWRzIiwibiIsImV4ZWNDb21tYW5kIiwiY29weUFzc2V0cyIsImFzc2V0SWRzRmllbGQiLCJhc3NldElkcyIsImhpZGVBcmNoaXZlIiwiaGlkZVRhc2tzIiwiaGlkZSIsInNob3dBcmNoaXZlIiwiYWN0aW9uIiwic2hvd1Rhc2tzIiwic2hvdyIsIkNPTExFQ1RJT05fU0hPV19GT1JNIiwiYXNzZXRQcmV2aWV3VGVtcGxhdGUiLCJhc3NldHMiLCJjdXJyZW50QXNzZXQiLCJwcmV2aWV3X3VybCIsIl90aGlzIiwiU29ydGFibGUiLCJncm91cCIsInJlbW92ZUNsb25lT25IaWRlIiwib25FbmQiLCJwb3NpdGlvbiIsImNoYW5nZSIsIm1hcmtJbnB1dEFzQ2hhbmdlZCIsInNvcnRhYmxlSW5pdCIsImhpZGVBZGRpdGlvbmFsUm93cyIsImFkZE5ld1JvdyIsImFkZF9jb3VudGVyIiwidGJvZHkiLCJ0ckxhc3QiLCJsYXN0SURTIiwiaW5jcmVtZW50SWQiLCJmaXJzdCIsIk1hdGgiLCJtYXgiLCJhcHBseSIsImkiLCJsYXN0Iiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsInJlYWR5IiwiY2hhbmdlVGFiIiwiZGlyZWN0aW9uIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImxhc3RJRCIsInNhdmVEcGFTdGF0ZSIsImxhc3RSb3ciLCJjb2xvcnBpY2tlciIsImNoYW5nZVJvd0luZGV4Iiwicm93SW5kZXgiLCJyb3ciLCJvbGROYW1lIiwibmV3TmFtZSIsImluZGV4T2YiLCJEWUVfQ09OVEFJTkVSX1NFTEVDVE9SIiwibWFya0NoYW5nZWRUciIsImR5ZVNhdmVQYWdlIiwiR0lGVF9XUkFQX1JPV19BRERFRCIsImN1cnJlbnRJbnB1dCIsImFzc2V0SUQiLCJjdXJyZW50QXNzZXREdXBsaWNhdGUiLCJlcnIiLCJwb3NpdGlvblVwZGF0ZSIsImJpbmQiLCJidXR0b25VcmwiLCJhc3NldENoYW5nZWQiLCJyZW1vdmVSb3ciLCJhZGRSb3ciLCJwcmljZSIsInRvdGFsU3VtIiwic2hvd0Fzc2V0IiwiU1dPV19BU1NFVF9ST1VURSIsImhhc093blByb3BlcnR5Iiwic2F2ZUxvY2FsaXphdGlvblN0YXRlIiwiY3VycmVudEtleSIsImN1cnJlbnRLZXlEdXBsaWNhdGUiLCJzYXZlTWFnaWNTdGF0ZSIsIm1ha2V1cF9raXRfaWQiLCJnZXRMYXN0TWFrZXVwS2l0SUQiLCJNQUtFVVBfS0lUX1NIT1dfRk9STSIsInNlbGVjdDIiLCJtZWFsRGVsZXRlIiwic2F2ZU1lYWxTdGF0ZSIsImF3YXJkQ3JlYXRlIiwic2F2ZUJ1dHRvbiIsImF3YXJkRGVsZXRlIiwiTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNIiwiVFJBU0giLCJUUkFTSF9GSUVMRFNfSUQiLCJTRUxFQ1RfSUQiLCJ0cmFzaEZpZWxkcyIsIlBST0RVQ1RfU0hPV19GT1JNIiwiQ2xlYXZlIiwibnVtZXJhbCIsInByZWZpeCIsInJhd1ZhbHVlVHJpbVByZWZpeCIsIm9uVmFsdWVDaGFuZ2VkIiwicGFyc2VGbG9hdCIsInJhd1ZhbHVlIiwicHJvZHVjdFByaWNlIiwiZWxlbWVudCIsInByaWNlSW5pdCIsIm9yZGVyIiwicmVjb3JkX3Blcl9wYWdlIiwiaGVhZCIsInRhaWwiLCJwcmV2aWV3SGlkZGVuSW5wdXQiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUluaXQiLCJXQUxLX0NBVEVHT1JZIiwiUlVOX0NBVEVHT1JZIiwic2VsZWN0VmFsIiwiZW1iZWQiLCJTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNIiwidGFibGUiLCJkZXBhcnRtZW50SWQiLCJjb3VudGVyIiwiZGF0YU5hbWVQcmVmaXgiLCJmYXN0U2F2ZUNvbnRhaW5lciIsIml0ZW1OYW1lIiwiYWxsSXRlbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJhZGlvIiwidGhlbiIsInByZXZpZXdVcmxFbGVtZW50IiwicmFkaW9JbnB1dCIsImFkZFNob3AiLCJzYXZlUGFnZSIsInJlbW92ZUF0dHIiLCJjc3MiLCJzYXZlU291bmRTdGF0ZSIsIlRBTUFUT09MX1NIT1dfRk9STSIsIlNFQVJDSF9VU0VSX0FTU0VUUyIsIlNVQk1JVF9VU0VSX1BBUlRfRk9STSIsIkRFTEVURV9ORUlHSEJPUiIsIkFERF9ORUlHSEJPUiIsInBsYWNlbWVudE5hbWUiLCJuZWlnaGJvcnNDb3VudCIsImlzIiwic2libGluZ3MiLCJwbGFjZW1lbnQiLCJsb2FkUGFydCIsIlBMQUNFTUVOVF9BU1NFVFNfUk9VVEUiLCJpdGVtcyIsInBvcG92ZXIiLCJuZWlnaGJvcl9pZCIsInN0YXR1c190ZXh0Iiwic2VhcmNoVXNlckFzc2V0cyIsInN1Ym1pdFVzZXJQYXJ0Rm9ybSIsImRlbGV0ZU5laWdoYm9yIiwiYWRkTmVpZ2hib3IiLCJsb2FkUGxhY2VtZW50QXNzZXRzIiwiY2hhbmdlUGxhY2VtZW50IiwiY2hhbmdlUmFuZG9tTmVpZ2hib3JzIiwiaGlkZVBsYWNlbWVudEFzc2V0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdC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QUdwSyxDQUFDLENBQUMrTixJQUFJLENBQUMxTCxJQUFOLENBQVo7QUFDQXJDLEtBQUMsQ0FBQyxNQUFNK04sSUFBSSxDQUFDbkcsU0FBWixDQUFELENBQXdCRyxXQUF4QixDQUFvQ3FDLElBQXBDO0FBQ0FBLFFBQUksQ0FBQ25LLElBQUwsQ0FBVSxVQUFWLEVBQXNCbVUsT0FBdEI7QUFDQTdRLG1GQUFhLENBQUMsbUJBQUQsQ0FBYjtBQUNILEdBTEQ7QUFNSCxDOzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0FpViwyRUFBZ0I7QUFFaEI7Ozs7QUFHQUMsNkVBQWtCO0FBRWxCOzs7O0FBR0FDLHlFQUFjO0FBRWQ7Ozs7QUFHQUMsc0VBQVc7QUFFWDNZLENBQUMsQ0FBQ2lKLFFBQUQ7QUFFRzs7O0FBRkosQ0FLSzNILEVBTEwsQ0FLUSxPQUxSLEVBS2lCLGNBTGpCLEVBS2lDc1gscUVBTGpDO0FBT0k7OztBQVBKLENBVUt0WCxFQVZMLENBVVEsUUFWUixFQVVrQixzQkFWbEIsRUFVMEN1WCxpRUFWMUM7QUFZSTs7O0FBWkosQ0FlS3ZYLEVBZkwsQ0FlUSxRQWZSLEVBZWtCLHNCQWZsQixFQWUwQ3dYLHVFQWYxQztBQWlCSTs7O0FBakJKLENBb0JLeFgsRUFwQkwsQ0FvQlEsT0FwQlIsRUFvQmlCLGNBcEJqQixFQW9CaUN5WCxxRUFwQmpDLEU7Ozs7Ozs7Ozs7OztBQzlCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqXG4gKiBCYXNlIHNpemVzXG4gKlxuICogQHR5cGUge3tzbTogc3RyaW5nLCBsZzogc3RyaW5nfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNJWkVTID0ge1xuICAgIHNtOiAnc20nLFxuICAgIG1kOiAnbWQnLFxuICAgIGxnOiAnbGcnLFxufTtcbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XG5cbi8qKlxuICogTG9hZGluZyB0ZXh0XG4gKiBJdCB3aWxsIGJlIHNob3duIGFmdGVyIHRoZSBzdGFydCBvZiBpbWFnZSB1cGxvYWRpbmdcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBMT0FESU5HX1RFWFQgPSAnTG9hZGluZy4uLic7XG5cbi8qKlxuICogRHJvcHpvbmUgYnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIGRyb3B6b25lQ29udGFpbmVyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyb3B6b25lQ29udGFpbmVyLCBjb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2Ryb3B6b25lQ29udGFpbmVyID0gZHJvcHpvbmVDb250YWluZXI7XG4gICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbiA9ICQoZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kcm9wem9uZS1jYW5jZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXJsIHRvIHVwbG9hZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHNldFVwbG9hZFVybCh1cmwpIHtcbiAgICAgICAgdGhpcy5fdXBsb2FkVXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZGVmYXVsdCBwcmV2aWV3IGltYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBzZXRQcmV2aWV3KG5hbWUsIHVybCkge1xuICAgICAgICB0aGlzLl9wcmV2aWV3ID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZXJyb3IgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZXJyb3IoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZXJyb3JDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FuY2VsIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGNhbmNlbChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9jYW5jZWxDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgc3VjY2VzcyBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzdWNjZXNzKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3NDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBkcm9wem9uZVxuICAgICAqIEByZXR1cm5zIHtEcm9wem9uZX1cbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IF9kcm9wem9uZUJ1aWxkZXIgPSB0aGlzO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIGFmdGVyIGZhaWxcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3B6b25lRmFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkei1zdGFydGVkJyk7XG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotcHJldmlldycpLnJlbW92ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VwbG9hZFVybCxcbiAgICAgICAgICAgIHRodW1ibmFpbFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgdGh1bWJuYWlsSGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogJ2ltYWdlLyonLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICd4LWNzcmYtdG9rZW4nOiBDU1JGX1RPS0VOXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBTZXQgY3VycmVudCBpbWFnZSBpbiB0aGUgZHJvcHpvbmUgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldyAmJiAhIV9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImFkZGVkZmlsZVwiLCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidGh1bWJuYWlsXCIsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcudXJsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBZGRlZCBmaWxlIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KExPQURJTkdfVEVYVCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFcnJvciBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcImVycm9yXCIsIGZ1bmN0aW9uIChmaWxlLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkcm9wem9uZUZhaWwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fZXJyb3JDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fZXJyb3JDYWxsYmFjayhmaWxlLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU3VjY2VzcyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInN1Y2Nlc3NcIiwgZnVuY3Rpb24gKGZpbGUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX3N1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fc3VjY2Vzc0NhbGxiYWNrKGZpbGUsIHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFyIGJ1dHRvbiBoYW5kbGVyXG4gICAgICAgICAqIENsZWFyIGZpbGUgaW5mbyBpbiBkcm9wem9uZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCEhdGhpcy5fY2FuY2VsQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRyb3B6b25lRmFpbCgpO1xuICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX2NhbmNlbENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX2NhbmNlbENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBuZXcgRHJvcHpvbmUodGhpcy5fZHJvcHpvbmVDb250YWluZXIsIHsuLi5jb25maWcsIC4uLnRoaXMuX2NvbmZpZ30pO1xuICAgIH1cbn1cbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi9lcnJvckhhbmRsZXInO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCIuL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogSFRUUCBSZXF1ZXN0IEJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gJ2dldCc7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvckhhbmRsZXI7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSBzdWNjZXNzSGFuZGxlcjtcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG5cbiAgICBtZXRob2QobWV0aG9kKSB7XG4gICAgICAgIHRoaXMuX21ldGhvZCA9IG1ldGhvZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZXJyb3IoZm4pIHtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdWNjZXNzKGZuKSB7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb21wbGV0ZShmbikge1xuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlbmQoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VybCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuX21ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuX2RhdGEsXG4gICAgICAgICAgICBlcnJvcjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXJlc3BvbnNlLnJlc3BvbnNlSlNPTikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihyZXNwb25zZS5yZXNwb25zZUpTT04pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLl9zdWNjZXNzLFxuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuX2NvbXBsZXRlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEJhc2UgZXJyb3IgaGFuZGxlclxuICpcbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIC8qKlxuICAgICAqIFJlZGlyZWN0IHRvIHRoZSByb3V0ZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLnJvdXRlKSB7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yb3V0ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgbWFpbiBlcnJvciBtZXNzYWdlXG4gICAgICovXG4gICAgaWYgKCEhcmVzcG9uc2UubWVzc2FnZSkge1xuICAgICAgICBub3RpZnlFcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGFsbCBtZXNzYWdlc1xuICAgICAqL1xuICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlLmVycm9ycykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1trZXldLm1hcChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL1JlcXVlc3RCdWlsZGVyJztcbiIsImltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5cbi8qKlxuICogQmFzZSBlcnJvciBoYW5kbGVyXG4gKlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIC8qKlxuICAgICAqIFNob3cgbWFpbiBlcnJvciBtZXNzYWdlXG4gICAgICovXG4gICAgaWYgKCEhcmVzcG9uc2UubWVzc2FnZSkge1xuICAgICAgICBub3RpZnlTdWNjZXNzKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9tb2RhbCc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXInO1xuaW1wb3J0ICcuL2h0dHAnO1xuIiwiY29uc3QgbW9kYWxzQ29udGFpbmVyID0gJCgnYm9keScpO1xuXG5jb25zdCBNT0RBTF9TSVpFUyA9IHtcbiAgICBzbTogJ21vZGFsLXNtJyxcbiAgICBtZDogJ21vZGFsLW1kJyxcbiAgICBsZzogJ21vZGFsLWxnJyxcbn07XG5cbi8qKlxuICogVW5pcXVlIGluZGV4IG9mIHRoZSBtb2RhbFxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmxldCBtb2RhbEluZGV4ID0gMDtcblxuLyoqXG4gKiBDb3VudGVyIG9mIHRoZSBtb2RhbHMgYXQgdGhlIHBhZ2VcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbW9kYWxDb3VudGVyID0gMDtcblxuLyoqXG4gKiBNb2RhbCBCdWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBtb2RhbEluZGV4Kys7XG4gICAgICAgIHRoaXMuX2lkID0gJ21vZGFscy1jb250YWluZXItaXRlbS0nICsgbW9kYWxJbmRleDtcbiAgICB9XG5cbiAgICBzaXplKHNpemUpIHtcbiAgICAgICAgaWYgKCEhTU9EQUxfU0laRVNbc2l6ZV0pIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSBNT0RBTF9TSVpFU1tzaXplXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhlYWRlcihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5faGVhZGVyID0gaGVhZGVyO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJvZHkoYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5ID0gYm9keTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmb290ZXIoZm9vdGVyKSB7XG4gICAgICAgIHRoaXMuX2Zvb3RlciA9IGZvb3RlcjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkYXRhc2V0KGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5fZGF0YXNldCA9IGRhdGFzZXQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2dldElEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgX2dldFNpemUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX3NpemUgPyB0aGlzLl9zaXplIDogTU9EQUxfU0laRVMubWQ7XG4gICAgfVxuXG4gICAgX2dldEhlYWRlcigpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5faGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4ke3RoaXMuX2hlYWRlcn08L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIF9nZXRGb290ZXIoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAoISF0aGlzLl9mb290ZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICQoYDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj48L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJChgXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgYCkpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9mb290ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2dldEJvZHkoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAoISF0aGlzLl9ib2R5KSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkKGA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPjwvZGl2PmApXG4gICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9ib2R5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBiZWZvcmUgYnVpbGQgbW9kYWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGJlZm9yZUJ1aWxkKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2JlZm9yZUJ1aWxkKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGFmdGVyIGJ1aWxkIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBhZnRlckJ1aWxkKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfYWZ0ZXJCdWlsZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2RhbChjb250ZW50KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGFzZXQgPSBbXTtcbiAgICAgICAgaWYgKCEhdGhpcy5fZGF0YXNldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLl9kYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgZGF0YXNldC5wdXNoKGBkYXRhLSR7bmFtZX09XCIke3RoaXMuX2RhdGFzZXRbbmFtZV19XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBodG1sID0gJChgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHsgdGhpcy5fZ2V0SUQoKSB9XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAke2RhdGFzZXQuam9pbignICcpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCAke3RoaXMuX2dldFNpemUoKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmApO1xuXG4gICAgICAgIGlmICghIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keShjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIHRoZSBiZWZvcmVCdWlsZCBjYWxsYmFja1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGQoKTtcblxuICAgICAgICBodG1sLmZpbmQoJy5tb2RhbC1jb250ZW50JylcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0SGVhZGVyKCkpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEJvZHkoKSlcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0Rm9vdGVyKCkpO1xuXG4gICAgICAgIG1vZGFsc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgdGhlIGFmdGVyQnVpbGQgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdXBkYXRlIGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gICAgICAgICAqL1xuICAgICAgICBtb2RhbENvdW50ZXIrKztcblxuICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbENvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubW9kYWwoKTtcbiAgICB9XG59XG5cbi8qKlxuICogR2V0IGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gKlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGFsQ291bnRlcigpIHtcbiAgICByZXR1cm4gbW9kYWxDb3VudGVyO1xufVxuIiwiaW1wb3J0ICcuL01vZGFsQnVpbGRlcidcbmltcG9ydCAnLi9tb2RhbENvbmZpcm0nXG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuXG4vKipcbiAqIE1vZGFsIGNvbmZpcm1cbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb2RhbENvbmZpcm0obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIobWVzc2FnZSlcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tc3VjY2VzcycsXG4gICAgICAgICAgICAndGV4dCc6ICdDb25maXJtJyxcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxuICAgICAgICAgICAgJ2NsaWNrJzogY2FsbGJhY2tcbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xufVxuIiwiLyoqXG4gKiBOb3RpZnkgaGVscGVyXG4gKlxuICogQHBhcmFtIG1lc3NhZ2VcbiAqIEBwYXJhbSB0eXBlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlLCB0eXBlKSB7XG4gICAgJC5ub3RpZnkoe21lc3NhZ2U6IG1lc3NhZ2V9LHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgel9pbmRleDogMTA1MVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbm90aWZ5KG1lc3NhZ2UsICdkYW5nZXInKTtcbn1cbiIsImltcG9ydCBub3RpZnkgZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIG5vdGlmeShtZXNzYWdlLCAnc3VjY2VzcycpO1xufVxuIiwiLyoqXG4gKiBFdmVudCBvYnNlcnZlclxuICovXG5jbGFzcyBFdmVudE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2xvZygnc3Vic2NyaWJlJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc3BhdGNoIChldmVudCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9sb2coJ2Rpc3BhdGNoJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoZGF0YSwgaGFuZGxlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlIChldmVudCwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fbG9nKCd1bnN1YnNjcmliZScsIGV2ZW50KTtcblxuICAgICAgICBpZiAoISF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5maWx0ZXIoaGFuZGxlciA9PiBoYW5kbGVyICE9PSBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobWV0aG9kLnRvVXBwZXJDYXNlKCksICc6JywgJ1snLCBldmVudCwgJ10nKTtcbiAgICB9XG59XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEV2ZW50T2JzZXJ2ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXI7XG4iLCJpbXBvcnQgJy4vRXZlbnRPYnNlcnZlcic7XG4iLCIvKipcbiAqIFNhdmVkIGl0ZW0gbm90IGZvdW5kXG4gKlxuICogVXNpbmcgaW4gZmFzdFNhdmUgaGFuZGxlclxuICovXG5leHBvcnQgY2xhc3MgU2F2ZWRJdGVtTm90Rm91bmQgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2F2ZWRJdGVtTm90Rm91bmQnO1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG4vKipcbiAqIEFkZCBlbWJlZCBlbGVtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RhcmdldCcpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0ZW1wbGF0ZScpO1xuICAgIGNvbnN0IGlkUGxhY2Vob2xkZXIgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2lkcGxhY2Vwb2xkZXInKTtcblxuICAgIGxldCByb3dJZCA9IGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnKTtcbiAgICBjdXJyZW50QnV0dG9uLmRhdGEoJ3Jvd2lkJywgKytyb3dJZCk7XG5cbiAgICBsZXQgZW1iZWRGb3JtID0gJCgnIycrIHRlbXBsYXRlKS5odG1sKCk7XG4gICAgY29uc3QgZW1iZWRCbG9ja0lkID0gcm93SWQgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLnRvU3RyaW5nKDE2KTtcbiAgICBlbWJlZEZvcm0gPSBlbWJlZEZvcm0ucmVwbGFjZSgvJWVtYmVkQmxvY2tJZCUvZywgZW1iZWRCbG9ja0lkKTtcblxuICAgIGlmICghIWlkUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoIG5ldyBSZWdFeHAoaWRQbGFjZWhvbGRlciwgXCJnXCIpLCByb3dJZClcbiAgICB9XG5cbiAgICAkKCcjJyArIHRhcmdldCkuYXBwZW5kKGVtYmVkRm9ybSk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBkaXNwYXRjaFxuICAgICAqL1xuICAgIGNvbnN0IGV2ZW50ID0gY3VycmVudEJ1dHRvbi5kYXRhKCdldmVudCcpO1xuICAgIGlmIChldmVudCAmJiBldmVudC5sZW5ndGgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZXZlbnQsIHtcbiAgICAgICAgICAgIGVtYmVkQmxvY2tJZDogZW1iZWRCbG9ja0lkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24udHJpZ2dlcignYWlfYW5pbWF0aW9uJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICpBamF4IHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQodGhpcykucGFyZW50cygnLmFqYXgtcGFnaW5hdGlvbicpLmRhdGEoJ2NvbnRhaW5lcicpO1xuICAgXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcikucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBPcGVuIGNvbmZpcm0gbW9kYWwgYmVmb3JlIGFjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmhyZWY7XG5cbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIoZGF0YVNldC5oZWFkZXIpXG4gICAgICAgIC5mb290ZXIoXG4gICAgICAgICAgICAkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogKGRhdGFTZXQuYnRuQ2xhc3MgfHwgJ2J0bi1zbSBidG4tc3VjY2VzcycpICsgJyBidG4nLFxuICAgICAgICAgICAgICAgICd0ZXh0JzogZGF0YVNldC5idG5OYW1lIHx8ICdDb25maXJtJyxcbiAgICAgICAgICAgICAgICAnY2xpY2snOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3IGh0dHAodXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1ldGhvZChkYXRhU2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0YVNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGdldEZvcm1EYXRhKHNhdmVkSXRlbSkpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5mYXN0LXNhdmUtcGFnZS1jb250YWluZXInO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKENPTlRBSU5FUl9TRUxFQ1RPUik7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTWFyayBmb3JtJ3MgZWxlbWVudHMgYXMgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQoKSB7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufVxuIiwiaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2Zhc3RTYXZlXCI7XG5pbXBvcnQgYWRkRW1iZWQgZnJvbSBcIi4vYWRkRW1iZWRcIjtcbmltcG9ydCByZW1vdmVFbWJlZCBmcm9tIFwiLi9yZW1vdmVFbWJlZFwiO1xuaW1wb3J0IHN1Ym1pdEZvcm0gZnJvbSBcIi4vc3VibWl0Rm9ybVwiO1xuaW1wb3J0IGFqYXhQYWdpbmF0aW9uIGZyb20gXCIuL2FqYXhQYWdpbmF0aW9uXCI7XG5pbXBvcnQgY29uZmlybU1vZGFsIGZyb20gXCIuL2NvbmZpcm1Nb2RhbFwiO1xuaW1wb3J0IG1vZGFsRGF0YSBmcm9tIFwiLi9tb2RhbERhdGFcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UsIHtDT05UQUlORVJfU0VMRUNUT1IsIG1hcmtDaGFuZ2VkfSBmcm9tIFwiLi9mYXN0U2F2ZVBhZ2VcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIE9wZW4gbW9kYWwgd2l0aCBkYXRhIGZyb20gc2VydmVyIGJ5IHJlcXVlc3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LW1vZGFsLWFjdGlvbicsIG1vZGFsRGF0YSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gY29uZmlybSBtb2RhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24nLCBjb25maXJtTW9kYWwpXG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1zdWJtaXQtYWN0aW9uJywgc3VibWl0Rm9ybSlcblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LXBhZ2luYXRpb24gYScsIGFqYXhQYWdpbmF0aW9uKVxuXG4gICAgLyoqXG4gICAgICogQWRkIGVtYmVkIGVsZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtZW1iZWQnLCBhZGRFbWJlZClcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbWJlZCBlbGVtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tZW1iZWQnLCByZW1vdmVFbWJlZClcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSB0aGUgZGF0YSBvZiBhbiBlbnRpdHlcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUnLCBmYXN0U2F2ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsIGAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7Q09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7Q09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkKTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgcGFnZVxuICovXG4kKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljayhmYXN0U2F2ZVBhZ2UpO1xuIiwiaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogT3BlbiBtb2RhbCB3aXRoIGZvcm0gYnkgcmVxdWVzdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKHRoaXMuZGF0YXNldC5tZXRob2QgfHwgJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zaXplKFNJWkVTLmxnKVxuICAgICAgICAgICAgICAgIC5kYXRhc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgcmVsb2FkOiB0aGlzLmRhdGFzZXQucmVsb2FkIHx8IDEsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuaGVhZGVyKHRoaXMuZGF0YXNldC5oZWFkZXIpXG4gICAgICAgICAgICAgICAgLmFmdGVyQnVpbGQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubW9kYWwocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBSZW1vdmUgZW1iZWRlZCBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gISF0aGlzLmRhdGFzZXQucGFyZW50ID8gJCh0aGlzKS5jbG9zZXN0KHRoaXMuZGF0YXNldC5wYXJlbnQpIDogJCh0aGlzKS5wYXJlbnQoKTtcblxuICAgIGlmICghdGhpcy5kYXRhc2V0LmlkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXG4gICAgICAgIC5mb290ZXIoJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLWRhbmdlcicsXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgICAubW9kYWwoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge2dldE1vZGFsQ291bnRlcn0gZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuXG4vKipcbiAqIFN1Ym1pdCBmb3JtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5kYXRhKGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCkpXG4gICAgICAgIC5tZXRob2QodGhpcy5kYXRhc2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlICE9PSAnZXJyb3InICYmIGNhblJlbG9hZCh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5kYXRhc2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihyZXNwb25zZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENhbiByZWxvYWQgdGhlIHBhZ2VcbiAqXG4gKiBAcGFyYW0gYnV0dG9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2FuUmVsb2FkKGJ1dHRvbikge1xuICAgIGlmIChwYXJzZUludChidXR0b24uZGF0YXNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgIGlmIChnZXRNb2RhbENvdW50ZXIoKSA8IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFSZWxvYWQgPSAkKGJ1dHRvbikuY2xvc2VzdCgnLm1vZGFsJykuZGF0YSgncmVsb2FkJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFSZWxvYWQgPT09IHR5cGVvZiB1bmRlZmluZWQgfHwgZGF0YVJlbG9hZCA9PT0gZmFsc2UgfHwgcGFyc2VJbnQoZGF0YVJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBnZXRTdWJGb2xkZXIgZnJvbSBcIi4vZ2V0U3ViRm9sZGVyXCI7XG5cbi8qKlxuICogR2V0IGZpbGUgcGF0aCBmcm9tIHN0b3JhZ2Ugd2l0aCBzdWIgZm9sZGVyc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb290Rm9sZGVyIFJvb3QgZm9sZGVyIGluIHRoZSBzdG9yYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgICBGaWxlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm9vdEZvbGRlciwgZmlsZU5hbWUpIHtcbiAgICByZXR1cm4gJy9zdG9yYWdlLycgKyByb290Rm9sZGVyICsgJy8nICsgZ2V0U3ViRm9sZGVyKGZpbGVOYW1lKSArICcvJyArIGZpbGVOYW1lO1xufVxuIiwiLyoqXG4gKiBHZXQgZm9ybSBkYXRhXG4gKlxuICogQHBhcmFtIHtqUXVlcnl9IGZvcm0gRm9ybSBlbGVtZW50XG4gKlxuICogQHJldHVybnMge3t9fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmb3JtKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSB7fTtcblxuICAgIGxldCBmb3JtSXRlbXMgPSBmb3JtLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcbiAgICBpZiAoIWZvcm1JdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgZm9ybUl0ZW1zID0gZm9ybTtcbiAgICB9XG5cbiAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcbiAgICAgICAgc3dpdGNoIChjdXJyZW50SXRlbS5hdHRyKCd0eXBlJykpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gISFjdXJyZW50SXRlbS5wcm9wKCBcImNoZWNrZWRcIiApICogMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZm9ybURhdGFbY3VycmVudEl0ZW0uYXR0cignbmFtZScpXSA9IGN1cnJlbnRJdGVtLnZhbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG59XG4iLCJpbXBvcnQgbWQ1IGZyb20gJ2JsdWVpbXAtbWQ1JztcblxuLyoqXG4gKiBHZXQgc3ViIGZvbGRlcnMgb2YgdGhlIGZpbGVcbiAqXG4gKiBSZXN1bHQgb2YgdGhlIGZ1bmN0aW9uIGxvb2tzIGxpa2U6IGExL2IyL2MzXG4gKiBXaGVyZSBtZDUgb2YgdGhlIGZpbGUgPSBhMWIyYzMuLi4uLi4uLi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiB0aGUgZmlsZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmaWxlTmFtZSkge1xuICAgIGNvbnN0IGZpbGVOYW1lSGFzaCA9IG1kNShmaWxlTmFtZSkuc3Vic3RyaW5nKDAsIDYpO1xuICAgIGNvbnN0IHBhdGhQYXJ0cyA9IGZpbGVOYW1lSGFzaC5tYXRjaCgvLnsxLDJ9L2cpO1xuICAgIHJldHVybiBwYXRoUGFydHMuam9pbignLycpO1xufVxuIiwiLyoqXG4gKiBqUXVlcnlcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbndpbmRvdy4kID0gJDtcbndpbmRvdy5qUXVlcnkgPSAkO1xuXG4vKipcbiAqIEJvb3RzdHJhcFxuICovXG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcCc7XG5cbi8qKlxuICogQm9vdHN0cmFwIENjb2xvcnBpY2tlclxuICovXG5pbXBvcnQgJ2Jvb3RzdHJhcC1jb2xvcnBpY2tlcic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1jb2xvcnBpY2tlci9kaXN0L2Nzcy9ib290c3RyYXAtY29sb3JwaWNrZXIuY3NzJztcblxuLyoqXG4gKiBGb250IEF3ZXNvbWVcbiAqL1xuaW1wb3J0ICdmb250LWF3ZXNvbWUvc2Nzcy9mb250LWF3ZXNvbWUuc2Nzcyc7XG5cbi8qKlxuICogRXh0ZXJuYWwgbW9kdWxlc1xuICogVE9ETzogZ2V0IGJ5IG5wbVxuICovXG5pbXBvcnQgJy4vdmVuZG9yL2FuaW1hdGUnO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtY29uZmlybWF0aW9uJztcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLW5vdGlmeSc7XG5pbXBvcnQgJy4vdmVuZG9yL3NlbGVjdDInO1xuaW1wb3J0ICcuL3ZlbmRvci9la2tvLWxpZ2h0Ym94JztcbmltcG9ydCAnLi92ZW5kb3IvdGhlbWUnO1xuXG4vKipcbiAqIENvbXBvbmVudHNcbiAqL1xuaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xuXG4vKipcbiAqIEhhbmRsZXJzXG4gKi9cbmltcG9ydCAnLi9oYW5kbGVycyc7XG5cbi8qKlxuICogU3R5bGVzXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbi8qKlxuICogTW9kdWxlcyBsb2FkZXJcbiAqL1xuY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5jb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCdtb2R1bGVzJywgdHJ1ZSwgL21vZHVsZVxcLmpzJC8pO1xuaWYgKHBhdGhbMV0ubGVuZ3RoID4gMikge1xuICAgIC8qKlxuICAgICAqIFRvIGNyZWF0aW5nIGRpZmZlcmVudCBmaWxlcyBmb3IgZWFjaCBtb2R1bGVcbiAgICAgKiAoRG9uJ3QgZm9yZ2V0IG5wbSBpIC0tc2F2ZS1kZXYgYnVuZGxlLWxvYWRlcilcbiAgICAgKiBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCdidW5kbGUtbG9hZGVyIW1vZHVsZXMnLCB0cnVlLCAvaW5kZXhcXC5qcyQvKTtcbiAgICAgKi9cbiAgICBjb250ZXh0LmtleXMoKS5tYXAobW9kdWxlID0+IHtcbiAgICAgICAgaWYgKG1vZHVsZS5zcGxpdCgnLycpWzFdID09PSAnc2V0dGluZ3MnKSB7XG4gICAgICAgICAgICBpZiAocGF0aFsyXSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5zcGxpdCgnLycpWzNdID09PSBwYXRoWzJdKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01PRFVMRTonLCBwYXRoWzJdKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0KG1vZHVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kdWxlLnNwbGl0KCcvJylbMV0gPT09IHBhdGhbMV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6JywgcGF0aFsxXSk7XG4gICAgICAgICAgICBjb250ZXh0KG1vZHVsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXRoWzFdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29udGV4dCgnLi9kZWZhdWx0L21vZHVsZS5qcycpO1xuICAgICAgICB9XG4gICAgfSk7XG59IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6IHB1YmxpYycpO1xuICAgIGNvbnRleHQoJy4vcHVibGljL21vZHVsZS5qcycpO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKVxuICAgICAgICAgICAgLmh0bWwoKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAodGhpcy5kYXRhc2V0LnRlbXBsYXRlUGxhY2Vob2xkZXIsIFwiZ1wiKSwgZGF0YS5hd2FyZF9pZCk7XG5cbiAgICAgICAgY3VycmVudEJ0bi5wYXJlbnQoKS5hcHBlbmQoZWRpdEJ0bik7XG4gICAgICAgIGN1cnJlbnRCdG4ucmVtb3ZlKCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKS5odG1sKCk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmQoY3JlYXRlQnRuKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChFVkVOVF9OQU1FKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEVWRU5UX05BTUUsICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGNvbnRhaW5lclxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXcgVVJMIGhpZGRlbiBpbnB1dFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcHJldmlld1VSTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihkcm9wem9uZUVsZW1lbnQpXG4gICAgICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LnVybClcbiAgICAgICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICQoJyNwcmV2aWV3LXVybCcpLnZhbCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnI3ByZXZpZXctdXJsJykudmFsKCcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgICAgICBwcmV2aWV3VVJMLnZhbHVlID0gcmVzcG9uc2UuZmlsZV9uYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBwcmV2aWV3XG4gICAgICAgICAqL1xuICAgICAgICBpZiAocHJldmlld1VSTC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3VVJMLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVUkwudmFsdWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG4gICAgfSk7XG59XG5cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hY3Rpb24tbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hY3Rpb24tbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vYWN0aW9uLXR5cGUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FjdGlvbi10eXBlL21vZHVsZS5qc1wiLFxuXHRcIi4vYWRkLW1lL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hZGQtbWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9hc3NldHMtbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hc3NldHMtbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vYXdhcmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2F3YXJkL21vZHVsZS5qc1wiLFxuXHRcIi4vYmFubmVyL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtYWRwcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY21zLWFkcHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jb2xsZWN0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vZGFpbHktbG9vdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGFpbHktbG9vdC9tb2R1bGUuanNcIixcblx0XCIuL2RlZmF1bHQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZXBsb3kvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanNcIixcblx0XCIuL2RwYS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHBhL21vZHVsZS5qc1wiLFxuXHRcIi4vZHllL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9keWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9naWZ0LXdyYXAvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanNcIixcblx0XCIuL2hvbWUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2hvbWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9sb2NhbGl6YXRpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWdpYy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanNcIixcblx0XCIuL21lYWwvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzXCIsXG5cdFwiLi9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzXCIsXG5cdFwiLi9uZXdzLWdpZnRzLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9wcm9kdWN0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9wcm9kdWN0L21vZHVsZS5qc1wiLFxuXHRcIi4vcHVibGljL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9wdWJsaWMvbW9kdWxlLmpzXCIsXG5cdFwiLi9wdXJjaGFzZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzXCIsXG5cdFwiLi9zZXR0aW5ncy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzXCIsXG5cdFwiLi9zZXR0aW5ncy9tb2R1bGVzL2FpX2FuaW1hdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanNcIixcblx0XCIuL3Nob3AtcmVsZWFzZXMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtcmVsZWFzZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLXN0YXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vc291bmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NvdW5kL21vZHVsZS5qc1wiLFxuXHRcIi4vc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi90YW1hdG9vbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzXCIsXG5cdFwiLi91c2Vycy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdXNlcnMvbW9kdWxlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbW9kdWxlcyBzeW5jIHJlY3Vyc2l2ZSBtb2R1bGVcXFxcLmpzJFwiOyIsIiQoZG9jdW1lbnQpXG5cbiAgICAub24oJ2NsaWNrJywgJyNwcm9kdWN0X2lkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjcHJvZHVjdF9pZCcpLnByZXYoJy5zZWxlY3QyLWNvbnRhaW5lcicpLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKS5mb2N1cygpXG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQgPSAnQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQnO1xuIiwiLyoqXG4gKiBDb2xsYXBzZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcuYWN0aW9uLXR5cGUtc3RhdGUnKTtcbiAgICBwYXJlbnQudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogQ29sbGFwc2Ugc3RhdGVzXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKCcuYWN0aW9uLXR5cGUtc3RhdGUnKS50b2dnbGVDbGFzcygnZG93bicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRH0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBTdGF0ZSBvZiB0aGUgQWN0aW9uIFR5cGVcbiAqIGF0IHRoZSBtb2RhbFxuICogd2l0aCBjb25maXJtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudEVsZW1lbnQuY2xvc2VzdCgnLmFjdGlvbi10eXBlLXN0YXRlJyk7XG5cbiAgICBpZiAoIWN1cnJlbnRFbGVtZW50LmRhdGEoJ2lkJykpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwge30pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKCdBcmUgeW91IHN1cmU/JylcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0RlbGV0ZScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXcgUmVxdWVzdEJ1aWxkZXIoY3VycmVudEVsZW1lbnQuZGF0YSgndXJsJykpXG4gICAgICAgICAgICAgICAgICAgIC5tZXRob2QoJ0RFTEVURScpXG4gICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgICAubW9kYWwoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBVcGRhdGUgaW5kZXhlcyBvZiB0aGUgc3RhdGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcblxuICAgICAgICAkKCcuaW5kZXgnKS5lYWNoKChfLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAkKGl0ZW0pLnZhbChpbmRleCsrKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cbiIsImltcG9ydCB1cGRhdGVJbmRleGVzIGZyb20gXCIuL2xpc3RlbmVycy91cGRhdGVJbmRleGVzXCI7XG5pbXBvcnQgY29sbGFwc2VTdGF0ZSBmcm9tIFwiLi9oYW5kbGVycy9jb2xsYXBzZVN0YXRlXCI7XG5pbXBvcnQgY29sbGFwc2VTdGF0ZXMgZnJvbSBcIi4vaGFuZGxlcnMvY29sbGFwc2VTdGF0ZXNcIjtcbmltcG9ydCByZW1vdmVBY3Rpb25UeXBlU3RhdGUgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBpbmRleGVzXG4gKi9cbnVwZGF0ZUluZGV4ZXMoKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlIG9uZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvbGxhcHNlLWxpbmsnLCBjb2xsYXBzZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2UgYWxsIHN0YXRlc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtc3RhdGVzJywgY29sbGFwc2VTdGF0ZXMpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5ybS1hY3Rpb24tdHlwZS1zdGF0ZXMnLCByZW1vdmVBY3Rpb25UeXBlU3RhdGUpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLnNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIikpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ3RyLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zYXZlLXBhZ2UnLCBzYXZlU3RhdGUpO1xuIiwiXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICcudG9nZ2xlX2lkcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KCkgPiAwKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnSGlkZScsICdTaG93JykpO1xuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpKTtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBBV0FSRF9DUkVBVEUgPSAnQVdBUkRfQ1JFQVRFJztcbmV4cG9ydCBjb25zdCBBV0FSRF9ERUxFVEUgPSAnQVdBUkRfREVMRVRFJztcbiIsIi8qKlxuICogU2hvdyBmb3JtIGV2ZW50XG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEJBTk5FUl9TSE9XX0ZPUk0gPSAnQkFOTkVSX1NIT1dfRk9STSc7XG5cbi8qKlxuICogSWQgb2YgdHlwZSdzIHNlbGVjdFxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBUWVBFX1NFTEVDVF9JRCA9ICdiYW5uZXItdHlwZSc7XG4iLCJpbXBvcnQge1RZUEVfU0VMRUNUX0lEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQ2hhbmdlIHR5cGUgaGFuZGxlclxuICogSGlkZS9zaG93IHNvbWUgZmllbGRzXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUWVBFX1NFTEVDVF9JRCk7XG5cbiAgICBpZiAoIXNlbGVjdCB8fCBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3Qub3B0aW9ucy5sZW5ndGggJiYgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XG5cbiAgICAgICAgJCgnLmJhbm5lci10eXBlJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgJCgnLmJhbm5lci10eXBlLScgKyBzZWxlY3RlZEVsZW1lbnQudmFsdWUpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtCQU5ORVJfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4uL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4vKipcbiAqIFNob3cgZm9ybSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBJbml0XG4gICAgICovXG4gICAgZHJvcFpvbmVJbml0KEJBTk5FUl9TSE9XX0ZPUk0pO1xuXG4gICAgLyoqXG4gICAgICogSW5pdCBzaG93Rm9ybSBsaXN0ZW5lclxuICAgICAqL1xuICAgIHNob3dGb3JtKCk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtCQU5ORVJfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuXG4vKipcbiAqIFNob3cgZm9ybSBsaXN0ZW5lclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEJBTk5FUl9TSE9XX0ZPUk0sICgpID0+IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHlwZSBzZWxlY3QgY2hhbmdlIHRyaWdnZXJcbiAgICAgICAgICovXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0ZXMgaW5pdFxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmJhbm5lci1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0Zvcm1cIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcbmltcG9ydCB7VFlQRV9TRUxFQ1RfSUR9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNob3cgZWRpdCBmb3JtIG9mIGEgYmFubmVyXG4gKi9cbiQoJy5zaG93LWZvcm0nKS5jbGljayhzaG93Rm9ybSgpKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0eXBlIGhhbmRsZXJcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjJyArIFRZUEVfU0VMRUNUX0lELCBjaGFuZ2VUeXBlKTtcbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY29weSBhZHAgaWRzIHRvIGNsaXBib2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUFkcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkcElkc0ZpZWxkID0gJCgnaW5wdXRbbmFtZT1cImFkcF9pZHNcIl0nKTtcbiAgICBsZXQgYWRwSWRzID0gW107XG5cbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGFkcElkcy5wdXNoKCQoaXRlbSkuZGF0YSgnaWQnKSlcbiAgICB9KTtcblxuICAgIGFkcElkc0ZpZWxkLnZhbChhZHBJZHMpO1xuICAgIGFkcElkc0ZpZWxkLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAvLyBhZHBJZHNGaWVsZC52YWwoW10pO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFzc2V0cyBpZHMgdG8gY2xpcGJvYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5QXNzZXRzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBhc3NldElkc0ZpZWxkID0gJCgnaW5wdXRbbmFtZT1cImFzc2V0X2lkc1wiXScpO1xuICAgIGxldCBhc3NldElkcyA9IFtdO1xuXG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBhc3NldElkcy5wdXNoKCQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKSlcbiAgICB9KTtcblxuICAgIGFzc2V0SWRzRmllbGQudmFsKGFzc2V0SWRzKTtcbiAgICBhc3NldElkc0ZpZWxkLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiBhcmNoaXZlIGNhdGVnb3JpZXMgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBcmNoaXZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuc2hvdy1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5hcmNoaXZlLWNhdGVnb3JpZXMtbGlzdCcpLmh0bWwoJycpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIG9mIHRhc2tzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlVGFza3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5zaG93LXRhc2tzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy50YXNrcy1saXN0JykuaGlkZSgnc2xvdycpO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEhhbmRsZXIgb2YgYXJjaGl2ZSBjYXRlZ29yaWVzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93QXJjaGl2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmhpZGUtYXJjaGl2ZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBcbiAgICBsZXQgYWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpO1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmFyY2hpdmUtY2F0ZWdvcmllcy1saXN0JykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICBcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiB0YXNrcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuaGlkZS10YXNrcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcudGFza3MtbGlzdCcpLnNob3coJ3Nsb3cnKTtcbn1cbiIsIi8vaW1wb3J0IHtidW5kbGVWZXJzaW9uU2VsZWN0fSBmcm9tIFwiLi9oYW5kbGVycy9idW5kbGVWZXJzaW9uU2VsZWN0XCI7XG5pbXBvcnQge3Nob3dBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXJjaGl2ZVwiO1xuaW1wb3J0IHtoaWRlQXJjaGl2ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFyY2hpdmVcIjtcbmltcG9ydCB7aGlkZVRhc2tzfSBmcm9tIFwiLi9oYW5kbGVycy9oaWRlVGFza3NcIjtcbmltcG9ydCB7c2hvd1Rhc2tzfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93VGFza3NcIjtcbmltcG9ydCB7Y29weUFkcH0gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFkcFwiO1xuaW1wb3J0IHtjb3B5QXNzZXRzfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QXNzZXRzXCI7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1hcmNoaXZlJywgc2hvd0FyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hcmNoaXZlJywgaGlkZUFyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS10YXNrcycsIGhpZGVUYXNrcylcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LXRhc2tzJywgc2hvd1Rhc2tzKVxuICAgIC8qKlxuICAgICAqIFNob3cgYWRwIHRhc2tzIGJ5IHN0YXR1cyBhbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHktYWRwJywgY29weUFkcClcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFzc2V0cycsIGNvcHlBc3NldHMpO1xuICAgICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBDT0xMRUNUSU9OX1NIT1dfRk9STSA9ICdDT0xMRUNUSU9OX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5jb25zdCBhc3NldFByZXZpZXdUZW1wbGF0ZSA9ICQoJyNhc3NldC1wcmV2aWV3LXRlbXBsYXRlJykuaHRtbCgpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxuICAgICAqL1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGZvcm1JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmhhc0NsYXNzKCdhc3NldC1pZCcpICYmICEhcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QXNzZXQgPSByZXNwb25zZS5hc3NldHNbY3VycmVudEl0ZW0udmFsKCldO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5zbG90JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuYXNzZXQtcHJldmlldycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChhc3NldFByZXZpZXdUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldXJsJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0LnByZXZpZXdfdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldGl0bGUlJywgXCJnXCIpLCBjdXJyZW50QXNzZXQubmFtZSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSBhZGRpdGlvbmFsIHJvd3NcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJy5hZGRpdGlvbmFsLWRhdGEnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBNYXJrIGlucHV0IGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XG4gICAgICAgIGdyb3VwOiBfdGhpcy5kYXRhc2V0Lmdyb3VwLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmZpbmQoX3RoaXMuZGF0YXNldC5wb3NpdGlvbikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHBvc2l0aW9uLnZhbCgpKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7Q09MTEVDVElPTl9TSE9XX0ZPUk19IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XG5pbXBvcnQgbWFya0lucHV0QXNDaGFuZ2VkIGZyb20gXCIuL2hhbmRsZXJzL21hcmtJbnB1dEFzQ2hhbmdlZFwiO1xuaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBoaWRlQWRkaXRpb25hbFJvd3MgZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFkZGl0aW9uYWxSb3dzXCI7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KENPTExFQ1RJT05fU0hPV19GT1JNKSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGNvbGxlY3Rpb25cbiAqL1xuJCgnLmNvbGxlY3Rpb24tZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xuXG4vKipcbiAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dCcpLmNoYW5nZShtYXJrSW5wdXRBc0NoYW5nZWQpO1xuXG4vKipcbiAqIFNvcnRhYmxlIGluaXRcbiAqL1xuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4vKipcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXG4gKi9cbiQoJy5oaWRlLXNsb3RzJykuY2xpY2soaGlkZUFkZGl0aW9uYWxSb3dzKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2RhaWx5X2xvb3QgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNkYWlseV9sb290X3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGxldCBsYXN0SURTID0gW107XG4gICAgbGV0IGluY3JlbWVudElkID0gMTtcbiAgICB0Ym9keS5maW5kKFwidHJcIikuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBpZihwYXJzZUludCgkKGl0ZW0pLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoKSkpe1xuICAgICAgICAgICAgbGFzdElEUy5wdXNoKHBhcnNlSW50KCQoaXRlbSkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbCgpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGxhc3RJRFMubGVuZ3RoKXtcbiAgICAgICAgaW5jcmVtZW50SWQgPSAoTWF0aC5tYXguYXBwbHkoTWF0aCxsYXN0SURTKSArIDEpIHx8IDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXJvd0luZGV4JS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKGkgKyBpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuZmluZCgnLmRhdGVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5kYWlseS1sb290LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZmluZCgndHIuY2hhbmdlZCcpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoIHBhZ2UgdHlwZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnRvZ2dsZS1wYWdlLXR5cGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5wYXRobmFtZS5zbGljZSgwLCBsb2NhdGlvbi5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpKSArICQodGhpcykuZGF0YSgnaHJlZicpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJyNjb21tb24tbWVudScpLmZpbmQoJy5jb21tb24tbWVudS1zZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYoJCh0aGlzKS5maW5kKCdsaScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jb21tb24tbWVudS1zZWN0aW9uJykuaGlkZSgpXG4gICAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJcbi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9kaXJlY3Rpb249XCIgKyBkaXJlY3Rpb247XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICBpZDogJ2RlcGxveSdcbiAgICB9LCAnRGVwbG95JywgdXJsKTtcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYilcbiAgICAvKipcbiAgICAgKiBTYXZlIGFsbCBwYWdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJywgZmFzdFNhdmVQYWdlKSIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbGV2ZWxzIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNkcGEgPiB0Ym9keScpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmRwYV9pZCcpLnZhbCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI2RwYV90ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8lZHBhX2lkJS9nLCBpICsgaW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBkcGEgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEcGFTdGF0ZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBsZXQgZGF0YSA9ICQoJy5kcGEtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZURwYVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlRHBhU3RhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBkcGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZHBhLXNhdmUtcGFnZScsIHNhdmVEcGFTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHllID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZHllX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuXG4gICAgICAgIGxldCBsYXN0Um93ID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3AyJyk7XG4gICAgICAgIGxhc3RSb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICQoaXRlbSkuY29sb3JwaWNrZXIoe30pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogQ2hhbmdlIHJvdyBpbmRleFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUm93SW5kZXgoKSB7XG4gICAgbGV0IHJvd0luZGV4ID0gJCh0aGlzKS52YWwoKTtcbiAgICBsZXQgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcblxuICAgIHJvdy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICBsZXQgb2xkTmFtZSA9ICQoaXRlbSkuYXR0cignbmFtZScpO1xuICAgICAgICBsZXQgbmV3TmFtZSA9IG9sZE5hbWUuc2xpY2UoMCwgNCkgKyByb3dJbmRleCArICBvbGROYW1lLnNsaWNlKG9sZE5hbWUuaW5kZXhPZignXScpKTtcbiAgICAgICAgJChpdGVtKS5hdHRyKCduYW1lJywgbmV3TmFtZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3QgRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUiA9ICcuZHllLXNhdmUtcGFnZS1jb250YWluZXInO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGR5ZXMgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJChEWUVfQ09OVEFJTkVSX1NFTEVDVE9SKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBNYXJrIGZvcm0ncyB0ciBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZFRyKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtjaGFuZ2VSb3dJbmRleH0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUm93SW5kZXhcIjtcbmltcG9ydCBkeWVTYXZlUGFnZSwge0RZRV9DT05UQUlORVJfU0VMRUNUT1IsIG1hcmtDaGFuZ2VkVHJ9IGZyb20gXCIuL2hhbmRsZXJzL2R5ZVNhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNvbG9yLXBpY2tlciBpbnB1dHNcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5jcDInKS5jb2xvcnBpY2tlcigpXG4gICAgICAgICAgICAub24oJ2NyZWF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudClcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE1hcmsgdHIgYXMgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCBgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZFRyKVxuICAgICAgICAgICAgICAgICAgICAub24oJ2lucHV0JywgYCR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWRUcik7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2Ugcm93IGluZGV4XG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYXNzZXRfaWQnLCBjaGFuZ2VSb3dJbmRleClcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gICAgICovXG4gICAgJCgnLmR5ZS1zYXZlLXBhZ2UnKS5jbGljayhkeWVTYXZlUGFnZSk7XG4iLCJleHBvcnQgY29uc3QgR0lGVF9XUkFQX1JPV19BRERFRCA9ICdHSUZUX1dSQVBfUk9XX0FEREVEJztcbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBBc3NldCBJRCBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50SW5wdXQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IGFzc2V0SUQgPSBjdXJyZW50SW5wdXQudmFsKCk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudElucHV0LmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBkdXBsaWNhdGVkIGFzc2V0cyBpZHNcbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50QXNzZXREdXBsaWNhdGUgPSAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5maWx0ZXIoKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGFzc2V0SUQgPT09IGl0ZW0udmFsdWU7XG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudEFzc2V0RHVwbGljYXRlLmxlbmd0aCA+IDEpe1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgYXNzZXRJRH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGlucHV0cyBuYW1lc1xuICAgICAqL1xuICAgIHBhcmVudC5maW5kKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUucmVwbGFjZSggL1xcW1tcXGRdK1xcXS9nLCBgWyR7YXNzZXRJRH1dYCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgaHJlZiBvZiB0aGUgZGVsZXRlIGJ1dHRvblxuICAgICAqL1xuICAgIHBhcmVudC5maW5kKCcuYWpheC1jb25maXJtLWFjdGlvbi1jdXN0b20nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ocmVmID0gdGhpcy5ocmVmLnJlcGxhY2UoIC9cXC9bXFxkXSskL2csIGAvJHthc3NldElEfWApO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIi4uL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXNzZXRzID0ge307XG4gICAgICAgICQoJyNnaWZ0LXdyYXBzLWNvbnRhaW5lcicpLmZpbmQoJy5hc3NldC1pZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGFzc2V0c1t0aGlzLnZhbHVlXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRzW3RoaXMudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGFzc2V0ICcgKyBlcnIubWVzc2FnZX0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gdXBkYXRlXG4gICAgICovXG4gICAgcG9zaXRpb25VcGRhdGUoKTtcblxuICAgIGZhc3RTYXZlUGFnZS5iaW5kKHRoaXMpKGUpO1xufVxuIiwiaW1wb3J0IGNvbmZpcm1Nb2RhbCBmcm9tIFwiaGFuZGxlcnMvY29uZmlybU1vZGFsXCI7XG5cbi8qKlxuICogUmVtb3ZlIGVtYmVkZWQgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGJ1dHRvblVybCA9IHRoaXMuaHJlZi5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgndHInKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChwYXJzZUludChidXR0b25VcmxbYnV0dG9uVXJsLmxlbmd0aCAtIDFdKSA9PT0gMCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25maXJtTW9kYWwuYmluZCh0aGlzKShlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcbmltcG9ydCBwb3NpdGlvblVwZGF0ZSBmcm9tIFwibW9kdWxlcy9naWZ0LXdyYXAvaGVscGVycy9wb3NpdGlvblVwZGF0ZVwiO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBuZXcgU29ydGFibGUoX3RoaXMsIHtcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qKlxuICogUG9zaXRpb24gdXBkYXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucG9zaXRpb24nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XG4gICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICBwb3NpdGlvbi52YWwoaW5kZXgpO1xuICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0dJRlRfV1JBUF9ST1dfQURERUR9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBBZGQgbmV3IHJvdyB0byBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoR0lGVF9XUkFQX1JPV19BRERFRCwgZGF0YSA9PiB7XG4gICAgICAgICQoJyNnaWZ0LXdyYXAtJyArIGRhdGEuZW1iZWRCbG9ja0lkKVxuICAgICAgICAgICAgLmZpbmQoJy5kYXRlcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc29ydGFibGVJbml0IGZyb20gXCIuL2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xuaW1wb3J0IGFzc2V0Q2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9hc3NldENoYW5nZWRcIjtcbmltcG9ydCBhZGRSb3cgZnJvbSBcIi4vbGlzdGVuZXJzL2FkZFJvd1wiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCByZW1vdmVSb3cgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlUm93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgYXNzZXQgaWQgaW4gaW5wdXRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuYXNzZXQtaWQnLCBhc3NldENoYW5nZWQpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1jb25maXJtLWFjdGlvbi1jdXN0b20nLCByZW1vdmVSb3cpO1xuXG4vKipcbiAqIEFkZCByb3cgbGlzdGVuZXJcbiAqL1xuYWRkUm93KCk7XG5cbi8qKlxuICogU29ydGFibGUgaW5pdFxuICovXG4kKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XG5cbi8qKlxuICogU2F2ZSBhbGwgcGFnZVxuICovXG4kKCcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJykuY2xpY2soZmFzdFNhdmVQYWdlKTsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogUHJpY2UgcmVjb3VudFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLnJlY291bnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHByaWNlID0gJCgnLmJhc2tldC1wcmljZScpLmRhdGEoJ3ByaWNlJyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLnJvdycpLmZpbmQoJy5pdGVtLXN1bScpLnRleHQoKHByaWNlICogJCh0aGlzKS52YWwoKSkpO1xuICAgICAgICBsZXQgdG90YWxTdW0gPSAwO1xuICAgICAgICAkKCcuaXRlbS1zdW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRvdGFsU3VtICs9IHBhcnNlSW50KCQodGhpcykudGV4dCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJyN0b3RhbC1zdW0nKS50ZXh0KHRvdGFsU3VtKVxuICAgIH0pXG5cbiAgICAub24oJ2NsaWNrJywgJy5pdGVtLXJlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcueF9wYW5lbCcpLmhpZGUoKTtcblxuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH0pXG5cbiAgICAub24oJ2NsaWNrJywgJyNvcmRlci1zZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9IGdldEZvcm1EYXRhKCQoJy5yZWNvdW50JykpO1xuXG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoey4uLmRhdGF9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcbiAgICAgICAgICAgICAgICAkKCcuYmFza2V0LWhpZGUnKS5jbGljaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfSlcbjsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc2hvdyBhc3NldFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Fzc2V0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCBhY3Rpb24gPSBTV09XX0FTU0VUX1JPVVRFICsgJz9pZD0nICsgY3VycmVudEVsZW1lbnQudmFsKCk7XG4gICAgbmV3IGh0dHAoYWN0aW9uKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKSB7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LW5hbWUnKS5odG1sKHJlc3BvbnNlLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ3ByZXZpZXdfdXJsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyBpbWcnKS5hdHRyKCdzcmMnLCByZXNwb25zZS5kYXRhLnByZXZpZXdfdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyAubGlzdC10aHVtYm5haWwnKS5kYXRhKCdmdWxsJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG4iLCJcbmltcG9ydCB7c2hvd0Fzc2V0fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXNzZXRcIjtcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBTaG93IGFzc2V0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0Jywgc2hvd0Fzc2V0KVxuXG4gICAgIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBsZXQgdGJvZHkgPSAkKCcjbG9jYWxpemF0aW9ucyA+IHRib2R5Jyk7XG4gICAgbGV0IHRlbXBsYXRlID0gJCgnI2xvY2FsaXphdGlvbl90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIHRib2R5LmFwcGVuZCh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFJlbW92ZSBub3Qgc2F2ZWQgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSb3coZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQodGhpcykucGFyZW50cygndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbG9jYWxpemF0aW9uIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxpemF0aW9uU3RhdGUgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJ3RyJyk7XG4gICAgY29uc3QgY3VycmVudEtleSA9IHBhcmVudC5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLnZhbCgpO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBrZXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7alF1ZXJ5fVxuICAgICAqL1xuICAgIGNvbnN0IGN1cnJlbnRLZXlEdXBsaWNhdGUgPSAkKCcjbG9jYWxpemF0aW9ucycpLmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykuZmlsdGVyKChfLCBpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBjdXJyZW50S2V5ID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuICAgIGlmIChjdXJyZW50S2V5RHVwbGljYXRlLmxlbmd0aCA+IDEpe1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBrZXkgJyArIGN1cnJlbnRLZXl9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBwYXJlbnQuZmluZCgnLmVkaXRhYmxlIGlucHV0Jykuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS5hdHRyKCdyZWFkb25seScsIHRydWUpO1xuXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVMb2NhbGl6YXRpb25TdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3JlbW92ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlUm93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsb2NhbGl6YXRpb25zIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jcmVhdGUtcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVMb2NhbGl6YXRpb25TdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLXJvdycsIHJlbW92ZVJvdyk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtYWdpYyA+IHRib2R5Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXRbbmFtZT1cImlkXCJdJykudmFsKCk7XG4gICAgICAgIGxldCBpbmNyZW1lbnRJZCA9IHBhcnNlSW50KGxhc3RJRCkgfHwgMDtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyNtYWdpY190ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8lbWFnaWNfaWQlL2csICsraW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1hZ2ljU3RhdGUgKCkge1xuICAgIGNvbnN0IGRhdGEgPSAkKCcubWFnaWMtc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIik7XG5cbiAgICBkYXRhLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgJChpdGVtKS5hdHRyKCdyZWFkb25seScsIHRydWUpXG4gICAgfSk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCkge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlTWFnaWNTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZU1hZ2ljU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTWFnaWNTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBTaG93IGxhc3QgbWFrZXVwIGtpdCBJRFxuICpcbiAqIEBwYXJhbSBlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBuZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5ocmVmKVxuICAgICAgICAuc3VjY2VzcyhyZXN1bHQgPT4ge1xuICAgICAgICAgICAgJCgnI2xhc3QtbWFrZXVwLWtpdC1pZCcpXG4gICAgICAgICAgICAgICAgLnZhbChyZXN1bHQubWFrZXVwX2tpdF9pZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGdldExhc3RNYWtldXBLaXRJRCBmcm9tIFwiLi9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SURcIjtcblxuLyoqXG4gKiBTaG93IGxhc3QgbWFrZXVwIGtpdCBJRCBhdCB0aGUgYm9keSBwYXJ0cyBncmlkXG4gKi9cbiQoJyNnZXQtbGFzdC1tYWtldXAta2l0LWlkJylcbiAgICAuY2xpY2soZ2V0TGFzdE1ha2V1cEtpdElEKTtcbiIsImV4cG9ydCBjb25zdCBNQUtFVVBfS0lUX1NIT1dfRk9STSA9ICdNQUtFVVBfS0lUX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge01BS0VVUF9LSVRfU0hPV19GT1JNfSBmcm9tIFwibW9kdWxlcy9tYWtldXAta2l0L2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXG4gKi9cbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoTUFLRVVQX0tJVF9TSE9XX0ZPUk0pKTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI21lYWxfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcubWVhbF9pZCcpLnRleHQoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIaWRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVhbERlbGV0ZSgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1lYWxTdGF0ZSAoKSB7XG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkXCIpO1xuICAgIGNvbnN0IGRhdGEgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHRib2R5LmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHttZWFsRGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9tZWFsRGVsZXRlXCI7XG5pbXBvcnQge3NhdmVNZWFsU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIG1lYWxEZWxldGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBtZWFsXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZU1lYWxTdGF0ZSgpXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKCcuc2F2ZS1wYWdlJyk7XG5cbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCdpbnB1dFtuYW1lPVwiYXdhcmRfaWRcIl0nKS52YWwoMCk7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcywgc2F2ZUJ1dHRvbikoKTtcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlTWVhbFN0YXRlKTtcbiIsImV4cG9ydCBjb25zdCBORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0gPSAnTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNJztcbiIsImNvbnN0IFRSQVNIID0gJ1RSQVNIJztcbmNvbnN0IFRSQVNIX0ZJRUxEU19JRCA9ICd0cmFzaC1maWVsZHMnO1xuY29uc3QgU0VMRUNUX0lEID0gJ25laWdoYm9yLWFjdGl2aXR5LXR5cGUtaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU0VMRUNUX0lEKTtcblxuICAgIGlmICghc2VsZWN0IHx8IHNlbGVjdC5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdC5vcHRpb25zLmxlbmd0aCAmJiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0pIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcblxuICAgICAgICBjb25zdCB0cmFzaEZpZWxkcyA9ICQoJyMnICsgVFJBU0hfRklFTERTX0lEKTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZEVsZW1lbnQudGV4dC50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlIFRSQVNIOlxuICAgICAgICAgICAgICAgIHRyYXNoRmllbGRzLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRyYXNoRmllbGRzLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0sIHNlbGYpO1xuXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcblxuICAgICAgICAkKCcubmVpZ2hib3ItYWN0aXZpdHktZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tICcuL2hhbmRsZXJzL2NoYW5nZVR5cGUnO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpXG4gICAgLm9uKCdjaGFuZ2UnLCAnLm5laWdoYm9yLWFjdGl2aXR5LXR5cGUnLCBjaGFuZ2VUeXBlKTtcblxuLyoqXG4gKiBSdW4gdGhlIHNob3cgZm9ybSBoYW5kbGVyLlxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXG4gKi9cbiQoJy5zaG93LWZvcm0nKVxuICAgIC5jbGljayhzaG93Rm9ybSk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgUFJPRFVDVF9TSE9XX0ZPUk0gPSAnUFJPRFVDVF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IENsZWF2ZSBmcm9tIFwiY2xlYXZlLmpzXCI7XG5cbi8qKlxuICogUHJpY2UgaW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBuZXcgQ2xlYXZlKHRoaXMsIHtcbiAgICAgICAgbnVtZXJhbDogdHJ1ZSxcbiAgICAgICAgcHJlZml4OiAnJCAnLFxuICAgICAgICByYXdWYWx1ZVRyaW1QcmVmaXg6IHRydWUsXG4gICAgICAgIG9uVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQocGFyc2VGbG9hdChlLnRhcmdldC5yYXdWYWx1ZSkgKiAxMDApO1xuICAgICAgICAgICAgbGV0IHByb2R1Y3RQcmljZSA9ICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCd0ZCcpLmZpbmQoJy5wcm9kdWN0LXByaWNlJyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gcGFyc2VJbnQocHJvZHVjdFByaWNlLnZhbCgpKSkge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZVxuICAgICAgICAgICAgICAgICAgICAudmFsKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7UFJPRFVDVF9TSE9XX0ZPUk19IGZyb20gXCJtb2R1bGVzL3Byb2R1Y3QvY29uc3RhbnRzXCI7XG5pbXBvcnQgcHJpY2VJbml0IGZyb20gXCJtb2R1bGVzL3Byb2R1Y3QvaGFuZGxlcnMvcHJpY2VJbml0XCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChQUk9EVUNUX1NIT1dfRk9STSkpO1xuXG4vKipcbiAqIFByaWNlIGZvcm1hdFxuICovXG4kKCcucHJvZHVjdC1wcmljZS12aWV3JykuZWFjaChwcmljZUluaXQpO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTkxBIG9yZGVyXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI29yZGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXcgaHR0cCgnY2hhbmdlLW9yZGVyJylcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe29yZGVyOiAkKHRoaXMpLnZhbCgpfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBOTEEgcXR5XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI3F0eScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IGh0dHAoJ2NoYW5nZS1wZXItcGFnZScpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHtyZWNvcmRfcGVyX3BhZ2U6ICQodGhpcykudmFsKCl9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFsgaGVhZCwgdGFpbCBdID0gbG9jYXRpb24uaHJlZi5zcGxpdCggJz8nICk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGhlYWQgKyAnPycgKyB0YWlsLnJlcGxhY2UobmV3IFJlZ0V4cChgcGFnZT1bXiZdKnxwYWdlPVteJl0qJmApLCAnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9KTtcbiIsIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdFxuICpcbiAqIEBwYXJhbSBfXG4gKiBAcGFyYW0gaXRlbVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoXywgaXRlbSkge1xuICAgIGNvbnN0IGRyb3B6b25lQ29udGFpbmVyID0gJChpdGVtKTtcbiAgICBjb25zdCBwcmV2aWV3SGlkZGVuSW5wdXQgPSBkcm9wem9uZUNvbnRhaW5lci5maW5kKCdpbnB1dCcpO1xuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgKi9cbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGl0ZW0pXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVDb250YWluZXIuZGF0YSgndXJsJykpXG4gICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAkKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJldmlld1xuICAgICAqL1xuICAgIGlmICghIXByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSkge1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSxcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCdmb2xkZXInKSwgcHJldmlld0hpZGRlbklucHV0LnZhbCgpKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAqL1xuICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xufSIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XG5pbXBvcnQgZHJvcHpvbmVJbml0IGZyb20gXCIuL2hhbmRsZXJzL2Ryb3B6b25lSW5pdFwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogVHVybmVkIG9mZiB0aGUgRHJvcHpvbmUgYXV0byBpbml0XG4gKlxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqL1xuJCgnLmRyb3B6b25lJykuZWFjaChkcm9wem9uZUluaXQpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMsIHNhdmVCdXR0b24pKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSkiLCJjb25zdCBXQUxLX0NBVEVHT1JZID0gJzYnO1xuY29uc3QgUlVOX0NBVEVHT1JZID0nNyc7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdDIgPSAkKCcudGFibGUnKS5maW5kKCcuZW1iZWQtZ3JvdXAgc2VsZWN0LnNlbGVjdDInKTtcbiAgICAgICAgbGV0IHNlbGVjdFZhbCA9IDA7XG4gICAgICAgIHNlbGVjdDIuZWFjaChmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgICAgc2VsZWN0VmFsID0gJChpKS52YWwoKTtcbiAgICAgICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgICAgICQoaSkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGkpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNwZWVkIG9uIHRyaWdnZXIgYWRkLWVtYmVkIGJ1dHRvblxuICAgICAqL1xuICAgIC5vbignYWlfYW5pbWF0aW9uJywgJy5hZGQtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGVtYmVkID0gJCh0aGlzKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gZW1iZWQuZmluZCgnLnNlbGVjdDInKS52YWwoKTtcbiAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICBlbWJlZC5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbWJlZC5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNwZWVkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBjb25zdCBzZWxlY3RWYWwgPSAkKGl0ZW0udGFyZ2V0KS52YWwoKTtcbiAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiIsImV4cG9ydCBjb25zdCBTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNID0gJ1NIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0nO1xuIiwiLyoqXG4gKiBBZGQgYSBuZXcgc2hvcCBpbiBhIGRlcGFydG1lbnRzIGdyaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YWJsZSA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLnNob3BzLXRhYmxlJykuZmluZCgndGJvZHknKTtcbiAgICBjb25zdCBkZXBhcnRtZW50SWQgPSBjdXJyZW50QnRuLmRhdGEoJ2RlcGFydG1lbnQnKTtcbiAgICBsZXQgY291bnRlciA9IHBhcnNlSW50KGN1cnJlbnRCdG4uZGF0YSgnY291bnQnKSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSAkKCcjc2hvcC10ZW1wbGF0ZScpXG4gICAgICAgIC5odG1sKClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnJWRlcGFydG1lbnRJZCUnLCBcImdcIiksIGRlcGFydG1lbnRJZClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnJWluZGV4JScsIFwiZ1wiKSwgY291bnRlcisrKTtcblxuICAgIGN1cnJlbnRCdG4uZGF0YSgnY291bnQnLCBjb3VudGVyKTtcblxuICAgIHRhYmxlLmFwcGVuZCh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBmb3Igc2hvcCBkZXBhcnRtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkYXRhTmFtZVByZWZpeCA9ICdzaG9wJztcbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBmYXN0U2F2ZUNvbnRhaW5lciA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGlmICghZmFzdFNhdmVDb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgZmFzdFNhdmVDb250YWluZXIuZmluZCgndGJvZHkgdHInKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBnZXRGb3JtRGF0YSgkKHRoaXMpKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBgJHtkYXRhTmFtZVByZWZpeH1bJHtpbmRleH1dWyR7aX1dYDtcbiAgICAgICAgICAgIHJlc3VsdFtpdGVtTmFtZV0gPSBmb3JtRGF0YVtpXTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKHJlc3VsdClcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogUmFkaW8gaW5wdXQgZnJvbSBjaGVja2JveFxuICogQmVjYXVzZSBpbnB1dFt0eXBlPXJhZGlvXSBkaWQgbm90IHdvcmsgY29ycmVjdGx5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBjdXJyZW50SXRlbS5jbG9zZXN0KCcudGFibGUnKS5maW5kKCcucmFkaW8nKTtcblxuICAgIGFsbEl0ZW1zLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgYWxsSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcblxuICAgIGN1cnJlbnRJdGVtLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnY2hlY2tlZCcpO1xufVxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG5ldyBTb3J0YWJsZSh0aGlzLCB7XG4gICAgICAgIGdyb3VwOiAnc2hvcHMnLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJhZGlvOiAkKGUuaXRlbSkuZmluZCgnLnJhZGlvJyksXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogJChlLml0ZW0pLmNsb3Nlc3QoJy50YWJsZScpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXJlbnQuZmluZCgnLnJhZGlvLmNoZWNrZWQ6Z3QoMCknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYWRpby5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1NIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0IGFmdGVyIHRoZSBtb2RhbCBvcGVuZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNLCAoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3XG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybCcpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlldyBTbWFsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVJbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZS1zbWFsbCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwtc21hbGwnKSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRHJvcHpvbmUgSW5pdFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRyb3B6b25lRWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcHJldmlld1VybEVsZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZHJvcHpvbmVJbml0KGRyb3B6b25lRWxlbWVudCwgcHJldmlld1VybEVsZW1lbnQpIHtcbiAgICBpZiAoIWRyb3B6b25lRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgKi9cbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGRyb3B6b25lRWxlbWVudClcbiAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC51cmwpXG4gICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAkKHByZXZpZXdVcmxFbGVtZW50KS52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgICQocHJldmlld1VybEVsZW1lbnQpLnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJChkcm9wem9uZUVsZW1lbnQpLmZpbmQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUgPSByZXNwb25zZS5maWxlX25hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHByZXZpZXdcbiAgICAgKi9cbiAgICBpZiAocHJldmlld1VybEVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQuZm9sZGVyLCBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgKi9cbiAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbn0iLCJpbXBvcnQgYWRkU2hvcCBmcm9tIFwiLi9oYW5kbGVycy9hZGRTaG9wXCI7XG5pbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVcIjtcbmltcG9ydCByYWRpb0lucHV0IGZyb20gXCIuL2hhbmRsZXJzL3JhZGlvSW5wdXRcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIm1vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqL1xuc2hvd0Zvcm0oKTtcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBSYWRpbyBidXR0b25zIGJlaGF2aW9yXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnJhZGlvJywgcmFkaW9JbnB1dClcblxuICAgIC8qKlxuICAgICAqIERvY3VtZW50IHJlYWR5XG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBjbGFzcyB0byBjaGVja2VkIHJhZGlvc1xuICAgICAgICAgKi9cbiAgICAgICAgJCgnLnJhZGlvW2NoZWNrZWRdJykuYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGEgbmV3IHNob3AgaW4gYSBkZXBhcnRtZW50cyBncmlkXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuYWRkLXNob3AnKS5jbGljayhhZGRTaG9wKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmFzdCBzYXZlXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuZmFzdC1zYXZlLXNob3BzJykuY2xpY2soZmFzdFNhdmUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYWtlIHRyIHRvIHNvcnRhYmxlXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XG5cbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjcmVsZWFzZSA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI3JlbGVhc2VfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcucmVsZWFzZV9pZCcpLnZhbCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXJlbGVhc2UlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcblxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXRpbWVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBNZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUGFnZSAoKSB7XG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcucmVsZWFzZS1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZFwiKTtcbiAgICBjb25zdCBkYXRhID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdCwgLmNoYW5nZWQgdGV4dGFyZWFcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICB0Ym9keS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZVBhZ2V9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlUGFnZSk7XG4iLCIkKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCd0ZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYoJCh0aGlzKS5hdHRyKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kJywgJyNlN2U3ZTcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNzb3VuZCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI3NvdW5kX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLnNvdW5kX2lkJykudmFsKCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lc291bmRfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTb3VuZFN0YXRlICgpIHtcbiAgICBjb25zdCBkYXRhID0gJCgnLnNvdW5kLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTb3VuZFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU291bmRTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVTb3VuZFN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFRBTUFUT09MX1NIT1dfRk9STSA9ICdUQU1BVE9PTF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7VEFNQVRPT0xfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShUQU1BVE9PTF9TSE9XX0ZPUk0sIHNlbGYpO1xuXG4gICAgICAgICQoJy5uZWlnaGJvci1hY3Rpdml0eS1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKTtcblxuLyoqXG4gKiBSdW4gdGhlIHNob3cgZm9ybSBoYW5kbGVyLlxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXG4gKi9cbiQoJy5zaG93LWZvcm0nKVxuICAgIC5jbGljayhzaG93Rm9ybSk7XG4iLCJleHBvcnQgY29uc3QgU0VBUkNIX1VTRVJfQVNTRVRTID0gJ1NFQVJDSF9VU0VSX0FTU0VUUyc7XG5leHBvcnQgY29uc3QgU1VCTUlUX1VTRVJfUEFSVF9GT1JNID0gJ1NVQk1JVF9VU0VSX1BBUlRfRk9STSc7XG5leHBvcnQgY29uc3QgREVMRVRFX05FSUdIQk9SID0gJ0RFTEVURV9ORUlHSEJPUic7XG5leHBvcnQgY29uc3QgQUREX05FSUdIQk9SID0gJ0FERF9ORUlHSEJPUic7IiwiLyoqXG4gKiBDaGFuZ2UgcGxhY2VtZW50IHNlbGVjdCBpbiBBZGQgQXNzZXRzIGJsb2NrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwbGFjZW1lbnROYW1lID0gJCgnI3BsYWNlbWVudC1uYW1lJyk7XG4gICAgaWYgKCQodGhpcykudmFsKCkgPiAwKSB7XG4gICAgICAgIHBsYWNlbWVudE5hbWUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZW1lbnROYW1lLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDaGFuZ2UgbW9kZSBmb3IgYWRkIG5laWdoYm9yc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmVpZ2hib3JzQ291bnQgPSAkKCcjbmVpZ2hib3JzLWNvdW50Jyk7XG4gICAgaWYoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICBuZWlnaGJvcnNDb3VudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5laWdoYm9yc0NvdW50LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBIaWRlIGFzc2V0cyBpbiBwbGFjZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmxvYWQtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICAkKCcjYXNzZXQtY29udGFpbmVyLScgKyBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKSkuaHRtbCgnJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogUExBQ0VNRU5UX0FTU0VUU19ST1VURSAtIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICogSW5pdGVkIGluIHVzZXIvZWRpdC5ibGFkZS5waHBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHBsYWNlbWVudCA9IGN1cnJlbnRFbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcpO1xuXG4gICAgY3VycmVudEVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmhpZGUtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIGxvYWRQYXJ0KFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgKyAnP3BsYWNlbWVudD0nICsgcGxhY2VtZW50LCAkKCcjYXNzZXQtY29udGFpbmVyLScgKyBwbGFjZW1lbnQpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBMb2FkIHBhcnQgZm9yIGVkaXQgdXNlciBwYWdlXG4gKi9cbmZ1bmN0aW9uIGxvYWRQYXJ0KGFjdGlvbiwgZWxlbWVudCkge1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSAkKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGl0ZW1zLmZpbmQoJy5saXN0LXRodW1ibmFpbCcpLnBvcG92ZXIoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiJyArICQodGhpcykuZGF0YSgnZnVsbCcpICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGl0ZW1zKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn0iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBRERfTkVJR0hCT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZXQgbmVpZ2hib3IgYXMgYWN0aXZlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUREX05FSUdIQk9SLCByZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3AudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjbmVpZ2hib3Itc3RhdHVzLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmh0bWwocmVzcC5kYXRhLnN0YXR1c190ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7REVMRVRFX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IG5laWdoYm9yIGFzIGRlbGV0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShERUxFVEVfTkVJR0hCT1IsIHJlc3AgPT4ge1xuICAgICAgICBpZiAocmVzcC50eXBlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgJCgnI2RlbGV0ZS1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjYWRkLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNuZWlnaGJvci1zdGF0dXMtJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuaHRtbChyZXNwLmRhdGEuc3RhdHVzX3RleHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtTRUFSQ0hfVVNFUl9BU1NFVFN9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZWFyY2ggdXNlciBhc3NldHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTRUFSQ0hfVVNFUl9BU1NFVFMsIGRhdGEgPT4ge1xuICAgICAgICAkKCcjc2VhcmNoLWFzc2V0cy1jb250YWluZXInKS5odG1sKGRhdGEpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5pbXBvcnQge1NVQk1JVF9VU0VSX1BBUlRfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFN1Ym1pdCB1c2VyIHBhcnQgZm9ybVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNVQk1JVF9VU0VSX1BBUlRfRk9STSwgcmVzcCA9PiB7XG4gICAgICAgIGxldCBmb3JtID0gJChyZXNwLmRhdGEpO1xuICAgICAgICAkKCcjJyArIHJlc3AuY29udGFpbmVyKS5yZXBsYWNlV2l0aChmb3JtKTtcbiAgICAgICAgZm9ybS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICAgICAgbm90aWZ5U3VjY2VzcygnVXNlciBkYXRhIHVwZGF0ZWQnKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzZWFyY2hVc2VyQXNzZXRzIGZyb20gXCIuL2xpc3RlbmVycy9zZWFyY2hVc2VyQXNzZXRzXCI7XG5pbXBvcnQgc3VibWl0VXNlclBhcnRGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm1cIjtcbmltcG9ydCBkZWxldGVOZWlnaGJvciBmcm9tIFwiLi9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3JcIjtcbmltcG9ydCBhZGROZWlnaGJvciBmcm9tIFwiLi9saXN0ZW5lcnMvYWRkTmVpZ2hib3JcIjtcbmltcG9ydCBsb2FkUGxhY2VtZW50QXNzZXRzIGZyb20gXCIuL2hhbmRsZXJzL2xvYWRQbGFjZW1lbnRBc3NldHNcIjtcbmltcG9ydCBoaWRlUGxhY2VtZW50QXNzZXRzIGZyb20gXCIuL2hhbmRsZXJzL2hpZGVQbGFjZW1lbnRBc3NldHNcIjtcbmltcG9ydCBjaGFuZ2VQbGFjZW1lbnQgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUGxhY2VtZW50XCI7XG5pbXBvcnQgY2hhbmdlUmFuZG9tTmVpZ2hib3JzIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVJhbmRvbU5laWdoYm9yc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vKipcbiAqIFNlYXJjaCB1c2VyIGFzc2V0cyBsaXN0ZW5lclxuICovXG5zZWFyY2hVc2VyQXNzZXRzKCk7XG5cbi8qKlxuICogU3VibWl0IHVzZXIgcGFydCBmb3JtIGxpc3RlbmVyXG4gKi9cbnN1Ym1pdFVzZXJQYXJ0Rm9ybSgpO1xuXG4vKipcbiAqIERlbGV0ZSBOZWlnaGJvclxuICovXG5kZWxldGVOZWlnaGJvcigpO1xuXG4vKipcbiAqIEFkZCBOZWlnaGJvclxuICovXG5hZGROZWlnaGJvcigpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhc3NldHMgaW4gcGxhY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcubG9hZC1hc3NldHMnLCBsb2FkUGxhY2VtZW50QXNzZXRzKVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHBsYWNlbWVudCBpbiBBZGQgQXNzZXRzIGJsb2NrXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI3BsYWNlbWVudC1mb3ItYXNzZXQnLCBjaGFuZ2VQbGFjZW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbW9kZSBmb3IgYWRkIG5laWdoYm9yc1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNpcy1yYW5kb20tbmVpZ2hib3JzJywgY2hhbmdlUmFuZG9tTmVpZ2hib3JzKVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hc3NldHMnLCBoaWRlUGxhY2VtZW50QXNzZXRzKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
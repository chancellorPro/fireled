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
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').success(function (resp) {
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(resp);
    $('.basket-hide').click();
  }).send();
});
$('#phone', '#form').keydown(function (e) {
  var key = e.which || e.charCode || e.keyCode || 0;
  $phone = $(this); // Don't let them remove the starting '('

  if ($phone.val().length === 1 && (key === 8 || key === 46)) {
    $phone.val('(');
    return false;
  } // Reset if they highlight and type over first char.
  else if ($phone.val().charAt(0) !== '(') {
      $phone.val('(' + $phone.val());
    } // Auto-format- do not expose the mask as the user begins to type


  if (key !== 8 && key !== 9) {
    if ($phone.val().length === 4) {
      $phone.val($phone.val() + ')');
    }

    if ($phone.val().length === 5) {
      $phone.val($phone.val() + ' ');
    }

    if ($phone.val().length === 9) {
      $phone.val($phone.val() + '-');
    }
  } // Allow numeric (and tab, backspace, delete) keys only


  return key == 8 || key == 9 || key == 46 || key >= 48 && key <= 57 || key >= 96 && key <= 105;
}).bind('focus click', function () {
  $phone = $(this);

  if ($phone.val().length === 0) {
    $phone.val('(');
  } else {
    var val = $phone.val();
    $phone.val('').val(val); // Ensure cursor remains at the end
  }
}).blur(function () {
  $phone = $(this);

  if ($phone.val() === '(') {
    $phone.val('');
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxDb25maXJtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vYnNlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2FkZEVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2FqYXhQYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2NvbmZpcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9mYXN0U2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9mYXN0U2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvbW9kYWxEYXRhLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3JlbW92ZUVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3N1Ym1pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGaWxlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldEZvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0U3ViRm9sZGVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2Ryb3Bab25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzIHN5bmMgbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLWxvZy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9oYW5kbGVycy9jb2xsYXBzZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9oYW5kbGVycy9yZW1vdmVBY3Rpb25UeXBlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9saXN0ZW5lcnMvdXBkYXRlSW5kZXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hZGQtbWUvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWRkLW1lL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzLWxvZy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9jaGFuZ2VUeXBlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXdhcmQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9oYW5kbGVycy9jaGFuZ2VUeXBlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2hhbmRsZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jZXJ0LXNldHVwL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY2VydC1zZXR1cC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jZXJ0LXVzZXJzL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NlcnQtdXNlcnMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY2VydC9oYW5kbGVycy9maW5kVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NlcnQvaGFuZGxlcnMvc2VuZENlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jZXJ0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvaGlkZUFyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9oaWRlVGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9zaG93QXJjaGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL3Nob3dUYXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXJvbGVzL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1yb2xlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXJzL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvaGFuZGxlcnMvYWRkUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9oYW5kbGVycy9kZWxldGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3Qvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2R5ZVNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2ZpbmdlcnByaW50LWZvcm0vaGFuZGxlcnMvc2F2ZUZpbmdlcnByaW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZmluZ2VycHJpbnQtZm9ybS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9maW5nZXJwcmludC9oYW5kbGVycy9zYXZlRmluZ2VycHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9maW5nZXJwcmludC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Fzc2V0Q2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9mYXN0U2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvcmVtb3ZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2xpc3RlbmVycy9hZGRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZWRpdC9oYW5kbGVycy9hZG1pblN0b3JlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZWRpdC9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1lZGl0L2hhbmRsZXJzL2ZpbmRVc2VyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZWRpdC9oYW5kbGVycy9zZXRNYWluLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZWRpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1ldmVudC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1ldmVudC9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1ldmVudC9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC1ldmVudC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ncm91cC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ob21lL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xldmVscy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sZXZlbHMvaGFuZGxlcnMvc2F2ZUxldmVsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sZXZlbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbGlua2VkLWFzc2V0cy9oYW5kbGVycy9zaG93QXNzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvcmVtb3ZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL3NhdmVMb2NhbGl6YXRpb25TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWdpYy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWdpYy9oYW5kbGVycy9zYXZlTWFnaWNTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQtYXNzZXQvaGFuZGxlcnMvZ2V0TGFzdE1ha2V1cEtpdElELmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50LWdyb3Vwcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsL2hhbmRsZXJzL21lYWxEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9oYW5kbGVycy9jaGFuZ2VUeXBlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtYXNzZXQvaGFuZGxlcnMvYXNzZXRUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtYXNzZXQvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWFzc2V0L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1hc3NldC9oYW5kbGVycy91cGRhdGVMaXN0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1jYXRlZ29yeS9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtY2F0ZWdvcnkvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWNhdGVnb3J5L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1jYXRlZ29yeS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtc2VjdGlvbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvaGFuZGxlcnMvcHJpY2VJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wdWJsaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2Uvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2Ryb3B6b25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvYWRkU2hvcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9mYXN0U2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9yYWRpb0lucHV0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3BlY2lhbC1wcml6ZXMtZm9ybS9oYW5kbGVycy9maW5kVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzLWZvcm0vaGFuZGxlcnMvc2VuZEdpZnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zcGVjaWFsLXByaXplcy1mb3JtL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zdWJ0eXBlLWF0dHJpYnV0ZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90cm9waGllcy9oYW5kbGVycy9maW5kVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Ryb3BoaWVzL2hhbmRsZXJzL3NlbmRHaWZ0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdHJvcGhpZXMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdHJvcGh5LWN1cC11c2Vycy9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90cm9waHktY3VwLXVzZXJzL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Ryb3BoeS1jdXAtdXNlcnMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlUmFuZG9tTmVpZ2hib3JzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvaGlkZVBsYWNlbWVudEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2xvYWRQbGFjZW1lbnRBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvYWRkTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJjb250ZW50IiwicHVzaCIsImh0bWwiLCJfZ2V0SUQiLCJqb2luIiwiX2dldFNpemUiLCJfYmVmb3JlQnVpbGQiLCJfZ2V0SGVhZGVyIiwiX2dldEJvZHkiLCJfZ2V0Rm9vdGVyIiwiX2FmdGVyQnVpbGQiLCJvZmYiLCJtb2RhbCIsImdldE1vZGFsQ291bnRlciIsIm1vZGFsQ29uZmlybSIsIk1vZGFsQnVpbGRlciIsIm5vdGlmeSIsInpfaW5kZXgiLCJFdmVudE9ic2VydmVyIiwic3Vic2NyaWJlcnMiLCJldmVudCIsImhhbmRsZXIiLCJfbG9nIiwiZm9yRWFjaCIsInN0YXRlIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInRvVXBwZXJDYXNlIiwib2JzZXJ2ZXIiLCJTYXZlZEl0ZW1Ob3RGb3VuZCIsIkVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEJ1dHRvbiIsInRhcmdldCIsInRlbXBsYXRlIiwiaWRQbGFjZWhvbGRlciIsInJvd0lkIiwiZW1iZWRGb3JtIiwiZW1iZWRCbG9ja0lkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJsZW5ndGgiLCJkaXNwYXRjaCIsInRyaWdnZXIiLCJjb250YWluZXIiLCJwYXJlbnRzIiwiaHR0cCIsInJlcGxhY2VXaXRoIiwic2VuZCIsImRhdGFTZXQiLCJidG5DbGFzcyIsImJ0bk5hbWUiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwicGFyc2VJbnQiLCJyZWxvYWQiLCJkaXNtaXNzIiwiY2xvc2VzdCIsImN1cnJlbnRCdG4iLCJzYXZlZEl0ZW0iLCJhdHRyIiwiZ2V0Rm9ybURhdGEiLCJDT05UQUlORVJfU0VMRUNUT1IiLCJmb3JtSXRlbXMiLCJtYXJrQ2hhbmdlZCIsImRvY3VtZW50IiwibW9kYWxEYXRhIiwiY29uZmlybU1vZGFsIiwic3VibWl0Rm9ybSIsImFqYXhQYWdpbmF0aW9uIiwiYWRkRW1iZWQiLCJyZW1vdmVFbWJlZCIsImZhc3RTYXZlIiwiZmFzdFNhdmVQYWdlIiwiYWZ0ZXJCdWlsZCIsInBhcmVudCIsImlkIiwic2VyaWFsaXplQXJyYXkiLCJjYW5SZWxvYWQiLCJidXR0b24iLCJkYXRhUmVsb2FkIiwicm9vdEZvbGRlciIsImZpbGVOYW1lIiwiZ2V0U3ViRm9sZGVyIiwiZm9ybSIsImZvcm1EYXRhIiwiZWFjaCIsImN1cnJlbnRJdGVtIiwicHJvcCIsInZhbCIsImZpbGVOYW1lSGFzaCIsIm1kNSIsInN1YnN0cmluZyIsInBhdGhQYXJ0cyIsIm1hdGNoIiwid2luZG93IiwialF1ZXJ5IiwicGF0aCIsInBhdGhuYW1lIiwic3BsaXQiLCJjb250ZXh0IiwicmVxdWlyZSIsIm1vZHVsZSIsInVuZGVmaW5lZCIsInN1YnNjcmliZSIsIkFXQVJEX0NSRUFURSIsInNlbGYiLCJ1bnN1YnNjcmliZSIsImVkaXRCdG4iLCJ0ZW1wbGF0ZUlkIiwidGVtcGxhdGVQbGFjZWhvbGRlciIsImF3YXJkX2lkIiwiQVdBUkRfREVMRVRFIiwiY3JlYXRlQnRuIiwiY2hpbGRyZW4iLCJFVkVOVF9OQU1FIiwiZHJvcHpvbmVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2aWV3VVJMIiwiZHJvcHpvbmVCdWlsZGVyIiwiRHJvcHpvbmVCdWlsZGVyIiwic2V0VXBsb2FkVXJsIiwiY2FuY2VsIiwiZmlsZV9uYW1lIiwidmFsdWUiLCJzZXRQcmV2aWV3IiwiZ2V0RmlsZVBhdGgiLCJmb2xkZXIiLCJidWlsZCIsInByZXYiLCJmb2N1cyIsIkFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEIiwidG9nZ2xlQ2xhc3MiLCJjdXJyZW50RWxlbWVudCIsIlJlcXVlc3RCdWlsZGVyIiwiaW5kZXgiLCJfIiwiaXRlbSIsInVwZGF0ZUluZGV4ZXMiLCJjb2xsYXBzZVN0YXRlIiwiY29sbGFwc2VTdGF0ZXMiLCJyZW1vdmVBY3Rpb25UeXBlU3RhdGUiLCJzYXZlU3RhdGUiLCJyZXNwIiwiYWRkTmV3Um93IiwiYWRkX2NvdW50ZXIiLCJ0Ym9keSIsImxhc3RJRCIsImxhc3QiLCJpbmNyZW1lbnRJZCIsImkiLCJ0ckxhc3QiLCJzZWxlY3QyIiwiYXdhcmQiLCJjaGFuZ2UiLCJfdGhpcyIsImF3YXJkQ3JlYXRlIiwiYmluZCIsInNhdmVCdXR0b24iLCJhd2FyZERlbGV0ZSIsIm5leHQiLCJoZWlnaHQiLCJzZXRTdWJ0eXBlcyIsInN1YnR5cGUiLCJhc3NldEZvcm1TdWJ0eXBlIiwiYXNzZXRGb3JtQWN0aW9uVHlwZSIsImFzc2V0Rm9ybUNvbGxlY3Rpb24iLCJwcmljZXMiLCJlbXB0eSIsIlNVQl9UWVBFUyIsImhpZGUiLCJzaG93IiwiZWxlbWVudCIsImNvbGxlY3Rpb25faWQiLCJzYXZlQXNzZXRCdG4iLCJjaGFuZ2VUeXBlIiwiZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIiLCJCQU5ORVJfU0hPV19GT1JNIiwiVFlQRV9TRUxFQ1RfSUQiLCJzZWxlY3QiLCJzZWxlY3RlZEluZGV4Iiwib3B0aW9ucyIsInNlbGVjdGVkRWxlbWVudCIsImRyb3Bab25lSW5pdCIsInNob3dGb3JtIiwiZGF0ZXRpbWVwaWNrZXIiLCJmb3JtYXQiLCJhdXRvY2xvc2UiLCJtaW5WaWV3Iiwic2F2ZVBhZ2UiLCJyb3dzIiwiY2hhbmdlVGFiIiwiZmluZFVzZXIiLCJwcmVmaXgiLCJ1aWQiLCJ1c2VyX3RlbXBsYXRlIiwiaW5zZXJ0X2Jsb2NrIiwidXNlcnMiLCJjc3MiLCJwZXQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwieHAiLCJhdmF0YXIiLCJzZW5kQ2VydCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyIiwidHJvcGh5X2N1cHNfY291bnQiLCJtZXNzYWdlX2xlbmd0aCIsIm5hbWVfbGVuZ3RoIiwiZXZlbnRfbGVuZ3RoIiwiZ3JvdXBfbGVuZ3RoIiwiY29weUFkcCIsImFkcElkc0ZpZWxkIiwiYWRwSWRzIiwibiIsImV4ZWNDb21tYW5kIiwiY29weUFzc2V0cyIsImFzc2V0SWRzRmllbGQiLCJhc3NldElkcyIsImhpZGVBcmNoaXZlIiwiaGlkZVRhc2tzIiwic2hvd0FyY2hpdmUiLCJhY3Rpb24iLCJzaG93VGFza3MiLCJkaXJlY3Rpb24iLCJ3cmFwcGVyIiwiZ2V0U2VsZWN0aW9uIiwiQ09MTEVDVElPTl9TSE9XX0ZPUk0iLCJhc3NldFByZXZpZXdUZW1wbGF0ZSIsImFzc2V0cyIsImN1cnJlbnRBc3NldCIsInByZXZpZXdfdXJsIiwiU29ydGFibGUiLCJncm91cCIsInJlbW92ZUNsb25lT25IaWRlIiwib25FbmQiLCJwb3NpdGlvbiIsIm1hcmtJbnB1dEFzQ2hhbmdlZCIsInNvcnRhYmxlSW5pdCIsImhpZGVBZGRpdGlvbmFsUm93cyIsImFkZFJvdyIsImRlbGV0ZVJvdyIsInJvdyIsIkFXQVJEX0NSRUFURUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJsYXN0SURTIiwiZmlyc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJzbGljZSIsImxhc3RJbmRleE9mIiwicmVhZHkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2F2ZURwYVN0YXRlIiwibGFzdFJvdyIsImNvbG9ycGlja2VyIiwiY2hhbmdlUm93SW5kZXgiLCJyb3dJbmRleCIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiaW5kZXhPZiIsIkRZRV9DT05UQUlORVJfU0VMRUNUT1IiLCJtYXJrQ2hhbmdlZFRyIiwiZHllU2F2ZVBhZ2UiLCJzYXZlRmluZ2VycHJpbnQiLCJXZWJHTEZpbmdlclByaW50IiwiJGRlZmF1bHRWYXJzIiwiRmluZEZpbmdlclByaW50IiwiZXhjbHVkZXMiLCJhdmFpbGFibGVTY3JlZW5SZXNvbHV0aW9uIiwiZW51bWVyYXRlRGV2aWNlcyIsImRvTm90VHJhY2siLCJmaW5nZXJwcmludCIsImZpbmdlclByaW50SGFuZGxlciIsImNvbXBvbmVudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnQiLCJGaW5nZXJwcmludDIiLCJ4NjRoYXNoMTI4Iiwic2VuZFByb21pc2UiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiZ2V0IiwiY29tbWVudCIsIkdJRlRfV1JBUF9ST1dfQURERUQiLCJjdXJyZW50SW5wdXQiLCJhc3NldElEIiwiY3VycmVudEFzc2V0RHVwbGljYXRlIiwiZXJyIiwicG9zaXRpb25VcGRhdGUiLCJidXR0b25VcmwiLCJhc3NldENoYW5nZWQiLCJyZW1vdmVSb3ciLCJhZG1pblN0b3JlIiwic2VsZWN0ZWRfaWQiLCJzZXRNYWluIiwiaXNfbWFpbiIsIm1haW5faWQiLCJwcmVwZW5kIiwicHJpY2UiLCJ0b3RhbFN1bSIsImtleWRvd24iLCJ3aGljaCIsImNoYXJDb2RlIiwia2V5Q29kZSIsIiRwaG9uZSIsImNoYXJBdCIsImJsdXIiLCJzYXZlTGV2ZWxTdGF0ZSIsInJvd1RvU2F2ZSIsInNob3dBc3NldCIsIlNXT1dfQVNTRVRfUk9VVEUiLCJoYXNPd25Qcm9wZXJ0eSIsInNhdmVMb2NhbGl6YXRpb25TdGF0ZSIsImN1cnJlbnRLZXkiLCJjdXJyZW50S2V5RHVwbGljYXRlIiwic2F2ZU1hZ2ljU3RhdGUiLCJtYWtldXBfa2l0X2lkIiwiZ2V0TGFzdE1ha2V1cEtpdElEIiwiTUFLRVVQX0tJVF9TSE9XX0ZPUk0iLCJpbmdyZWRpZW50RGVsZXRlIiwic2F2ZU1lYWxJbmdyZWRpZW50c1N0YXRlIiwibWVhbERlbGV0ZSIsInNhdmVNZWFsU3RhdGUiLCJORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0iLCJUUkFTSCIsIlRSQVNIX0ZJRUxEU19JRCIsIlNFTEVDVF9JRCIsInRyYXNoRmllbGRzIiwiYXNzZXRUYWIiLCJjYXRlZ29yeSIsImFzc2V0X2lkcyIsInVwZGF0ZUxpc3QiLCJhc2lnbkxpc3QiLCJhc3NldElkIiwicmVjb3JkX3Blcl9wYWdlIiwiaGVhZCIsInRhaWwiLCJQUk9EVUNUX1NIT1dfRk9STSIsIkNsZWF2ZSIsIm51bWVyYWwiLCJyYXdWYWx1ZVRyaW1QcmVmaXgiLCJvblZhbHVlQ2hhbmdlZCIsInBhcnNlRmxvYXQiLCJyYXdWYWx1ZSIsInByb2R1Y3RQcmljZSIsInByaWNlSW5pdCIsIm9yZGVyIiwicHJldmlld0hpZGRlbklucHV0IiwiYXV0b0Rpc2NvdmVyIiwiZHJvcHpvbmVJbml0IiwiV0FMS19DQVRFR09SWSIsIlJVTl9DQVRFR09SWSIsInNlbGVjdFZhbCIsImVtYmVkIiwiU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSIsInRhYmxlIiwiZGVwYXJ0bWVudElkIiwiY291bnRlciIsImRhdGFOYW1lUHJlZml4IiwiZmFzdFNhdmVDb250YWluZXIiLCJpdGVtTmFtZSIsImFsbEl0ZW1zIiwicmFkaW8iLCJwcmV2aWV3VXJsRWxlbWVudCIsInJhZGlvSW5wdXQiLCJhZGRTaG9wIiwic2F2ZVNvdW5kU3RhdGUiLCJzZW5kR2lmdCIsIlRBTUFUT09MX1NIT1dfRk9STSIsIlNFQVJDSF9VU0VSX0FTU0VUUyIsIlNVQk1JVF9VU0VSX1BBUlRfRk9STSIsIkRFTEVURV9ORUlHSEJPUiIsIkFERF9ORUlHSEJPUiIsInBsYWNlbWVudE5hbWUiLCJuZWlnaGJvcnNDb3VudCIsImlzIiwic2libGluZ3MiLCJwbGFjZW1lbnQiLCJsb2FkUGFydCIsIlBMQUNFTUVOVF9BU1NFVFNfUk9VVEUiLCJpdGVtcyIsInBvcG92ZXIiLCJuZWlnaGJvcl9pZCIsInN0YXR1c190ZXh0Iiwic2VhcmNoVXNlckFzc2V0cyIsInN1Ym1pdFVzZXJQYXJ0Rm9ybSIsImRlbGV0ZU5laWdoYm9yIiwiYWRkTmVpZ2hib3IiLCJsb2FkUGxhY2VtZW50QXNzZXRzIiwiY2hhbmdlUGxhY2VtZW50IiwiY2hhbmdlUmFuZG9tTmVpZ2hib3JzIiwiaGlkZVBsYWNlbWVudEFzc2V0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FB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MUM7QUFZSTs7O0FBWkosQ0FlS3BjLEVBZkwsQ0FlUSxRQWZSLEVBZWtCLHNCQWZsQixFQWUwQ3FjLHVFQWYxQztBQWlCSTs7O0FBakJKLENBb0JLcmMsRUFwQkwsQ0FvQlEsT0FwQlIsRUFvQmlCLGNBcEJqQixFQW9CaUNzYyxxRUFwQmpDLEU7Ozs7Ozs7Ozs7OztBQzlCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqXG4gKiBCYXNlIHNpemVzXG4gKlxuICogQHR5cGUge3tzbTogc3RyaW5nLCBsZzogc3RyaW5nfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNJWkVTID0ge1xuICAgIHNtOiAnc20nLFxuICAgIG1kOiAnbWQnLFxuICAgIGxnOiAnbGcnLFxufTtcbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XG5cbi8qKlxuICogTG9hZGluZyB0ZXh0XG4gKiBJdCB3aWxsIGJlIHNob3duIGFmdGVyIHRoZSBzdGFydCBvZiBpbWFnZSB1cGxvYWRpbmdcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBMT0FESU5HX1RFWFQgPSAnTG9hZGluZy4uLic7XG5cbi8qKlxuICogRHJvcHpvbmUgYnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIGRyb3B6b25lQ29udGFpbmVyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyb3B6b25lQ29udGFpbmVyLCBjb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2Ryb3B6b25lQ29udGFpbmVyID0gZHJvcHpvbmVDb250YWluZXI7XG4gICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbiA9ICQoZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kcm9wem9uZS1jYW5jZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXJsIHRvIHVwbG9hZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHNldFVwbG9hZFVybCh1cmwpIHtcbiAgICAgICAgdGhpcy5fdXBsb2FkVXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZGVmYXVsdCBwcmV2aWV3IGltYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBzZXRQcmV2aWV3KG5hbWUsIHVybCkge1xuICAgICAgICB0aGlzLl9wcmV2aWV3ID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZXJyb3IgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZXJyb3IoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZXJyb3JDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FuY2VsIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGNhbmNlbChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9jYW5jZWxDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgc3VjY2VzcyBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzdWNjZXNzKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3NDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBkcm9wem9uZVxuICAgICAqIEByZXR1cm5zIHtEcm9wem9uZX1cbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IF9kcm9wem9uZUJ1aWxkZXIgPSB0aGlzO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIGFmdGVyIGZhaWxcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3B6b25lRmFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkei1zdGFydGVkJyk7XG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotcHJldmlldycpLnJlbW92ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VwbG9hZFVybCxcbiAgICAgICAgICAgIHRodW1ibmFpbFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgdGh1bWJuYWlsSGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogJ2ltYWdlLyonLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICd4LWNzcmYtdG9rZW4nOiBDU1JGX1RPS0VOXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBTZXQgY3VycmVudCBpbWFnZSBpbiB0aGUgZHJvcHpvbmUgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldyAmJiAhIV9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImFkZGVkZmlsZVwiLCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidGh1bWJuYWlsXCIsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcudXJsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBZGRlZCBmaWxlIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KExPQURJTkdfVEVYVCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFcnJvciBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcImVycm9yXCIsIGZ1bmN0aW9uIChmaWxlLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkcm9wem9uZUZhaWwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fZXJyb3JDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fZXJyb3JDYWxsYmFjayhmaWxlLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU3VjY2VzcyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInN1Y2Nlc3NcIiwgZnVuY3Rpb24gKGZpbGUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX3N1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fc3VjY2Vzc0NhbGxiYWNrKGZpbGUsIHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFyIGJ1dHRvbiBoYW5kbGVyXG4gICAgICAgICAqIENsZWFyIGZpbGUgaW5mbyBpbiBkcm9wem9uZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCEhdGhpcy5fY2FuY2VsQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRyb3B6b25lRmFpbCgpO1xuICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX2NhbmNlbENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX2NhbmNlbENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBuZXcgRHJvcHpvbmUodGhpcy5fZHJvcHpvbmVDb250YWluZXIsIHsuLi5jb25maWcsIC4uLnRoaXMuX2NvbmZpZ30pO1xuICAgIH1cbn1cbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi9lcnJvckhhbmRsZXInO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCIuL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogSFRUUCBSZXF1ZXN0IEJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gJ2dldCc7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvckhhbmRsZXI7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSBzdWNjZXNzSGFuZGxlcjtcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG5cbiAgICBtZXRob2QobWV0aG9kKSB7XG4gICAgICAgIHRoaXMuX21ldGhvZCA9IG1ldGhvZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZXJyb3IoZm4pIHtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdWNjZXNzKGZuKSB7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb21wbGV0ZShmbikge1xuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlbmQoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VybCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuX21ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuX2RhdGEsXG4gICAgICAgICAgICBlcnJvcjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXJlc3BvbnNlLnJlc3BvbnNlSlNPTikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihyZXNwb25zZS5yZXNwb25zZUpTT04pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLl9zdWNjZXNzLFxuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuX2NvbXBsZXRlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEJhc2UgZXJyb3IgaGFuZGxlclxuICpcbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIC8qKlxuICAgICAqIFJlZGlyZWN0IHRvIHRoZSByb3V0ZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLnJvdXRlKSB7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yb3V0ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgbWFpbiBlcnJvciBtZXNzYWdlXG4gICAgICovXG4gICAgaWYgKCEhcmVzcG9uc2UubWVzc2FnZSkge1xuICAgICAgICBub3RpZnlFcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGFsbCBtZXNzYWdlc1xuICAgICAqL1xuICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlLmVycm9ycykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1trZXldLm1hcChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL1JlcXVlc3RCdWlsZGVyJztcbiIsImltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5cbi8qKlxuICogQmFzZSBlcnJvciBoYW5kbGVyXG4gKlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIC8qKlxuICAgICAqIFNob3cgbWFpbiBlcnJvciBtZXNzYWdlXG4gICAgICovXG4gICAgaWYgKCEhcmVzcG9uc2UubWVzc2FnZSkge1xuICAgICAgICBub3RpZnlTdWNjZXNzKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9tb2RhbCc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXInO1xuaW1wb3J0ICcuL2h0dHAnO1xuIiwiY29uc3QgbW9kYWxzQ29udGFpbmVyID0gJCgnYm9keScpO1xuXG5jb25zdCBNT0RBTF9TSVpFUyA9IHtcbiAgICBzbTogJ21vZGFsLXNtJyxcbiAgICBtZDogJ21vZGFsLW1kJyxcbiAgICBsZzogJ21vZGFsLWxnJyxcbn07XG5cbi8qKlxuICogVW5pcXVlIGluZGV4IG9mIHRoZSBtb2RhbFxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmxldCBtb2RhbEluZGV4ID0gMDtcblxuLyoqXG4gKiBDb3VudGVyIG9mIHRoZSBtb2RhbHMgYXQgdGhlIHBhZ2VcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbW9kYWxDb3VudGVyID0gMDtcblxuLyoqXG4gKiBNb2RhbCBCdWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBtb2RhbEluZGV4Kys7XG4gICAgICAgIHRoaXMuX2lkID0gJ21vZGFscy1jb250YWluZXItaXRlbS0nICsgbW9kYWxJbmRleDtcbiAgICB9XG5cbiAgICBzaXplKHNpemUpIHtcbiAgICAgICAgaWYgKCEhTU9EQUxfU0laRVNbc2l6ZV0pIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSBNT0RBTF9TSVpFU1tzaXplXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhlYWRlcihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5faGVhZGVyID0gaGVhZGVyO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJvZHkoYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5ID0gYm9keTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmb290ZXIoZm9vdGVyKSB7XG4gICAgICAgIHRoaXMuX2Zvb3RlciA9IGZvb3RlcjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkYXRhc2V0KGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5fZGF0YXNldCA9IGRhdGFzZXQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2dldElEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgX2dldFNpemUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX3NpemUgPyB0aGlzLl9zaXplIDogTU9EQUxfU0laRVMubWQ7XG4gICAgfVxuXG4gICAgX2dldEhlYWRlcigpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5faGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4ke3RoaXMuX2hlYWRlcn08L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIF9nZXRGb290ZXIoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAoISF0aGlzLl9mb290ZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICQoYDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj48L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJChgXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgYCkpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9mb290ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2dldEJvZHkoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAoISF0aGlzLl9ib2R5KSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkKGA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPjwvZGl2PmApXG4gICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9ib2R5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBiZWZvcmUgYnVpbGQgbW9kYWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGJlZm9yZUJ1aWxkKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2JlZm9yZUJ1aWxkKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGFmdGVyIGJ1aWxkIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBhZnRlckJ1aWxkKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfYWZ0ZXJCdWlsZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2RhbChjb250ZW50KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGFzZXQgPSBbXTtcbiAgICAgICAgaWYgKCEhdGhpcy5fZGF0YXNldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLl9kYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgZGF0YXNldC5wdXNoKGBkYXRhLSR7bmFtZX09XCIke3RoaXMuX2RhdGFzZXRbbmFtZV19XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBodG1sID0gJChgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHsgdGhpcy5fZ2V0SUQoKSB9XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAke2RhdGFzZXQuam9pbignICcpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCAke3RoaXMuX2dldFNpemUoKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmApO1xuXG4gICAgICAgIGlmICghIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keShjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIHRoZSBiZWZvcmVCdWlsZCBjYWxsYmFja1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGQoKTtcblxuICAgICAgICBodG1sLmZpbmQoJy5tb2RhbC1jb250ZW50JylcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0SGVhZGVyKCkpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEJvZHkoKSlcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0Rm9vdGVyKCkpO1xuXG4gICAgICAgIG1vZGFsc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgdGhlIGFmdGVyQnVpbGQgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdXBkYXRlIGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gICAgICAgICAqL1xuICAgICAgICBtb2RhbENvdW50ZXIrKztcblxuICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbENvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubW9kYWwoKTtcbiAgICB9XG59XG5cbi8qKlxuICogR2V0IGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gKlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGFsQ291bnRlcigpIHtcbiAgICByZXR1cm4gbW9kYWxDb3VudGVyO1xufVxuIiwiaW1wb3J0ICcuL01vZGFsQnVpbGRlcidcbmltcG9ydCAnLi9tb2RhbENvbmZpcm0nXG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuXG4vKipcbiAqIE1vZGFsIGNvbmZpcm1cbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb2RhbENvbmZpcm0obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIobWVzc2FnZSlcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tc3VjY2VzcycsXG4gICAgICAgICAgICAndGV4dCc6ICdDb25maXJtJyxcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxuICAgICAgICAgICAgJ2NsaWNrJzogY2FsbGJhY2tcbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xufVxuIiwiLyoqXG4gKiBOb3RpZnkgaGVscGVyXG4gKlxuICogQHBhcmFtIG1lc3NhZ2VcbiAqIEBwYXJhbSB0eXBlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlLCB0eXBlKSB7XG4gICAgJC5ub3RpZnkoe21lc3NhZ2U6IG1lc3NhZ2V9LHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgel9pbmRleDogMTA1MVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbm90aWZ5KG1lc3NhZ2UsICdkYW5nZXInKTtcbn1cbiIsImltcG9ydCBub3RpZnkgZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIG5vdGlmeShtZXNzYWdlLCAnc3VjY2VzcycpO1xufVxuIiwiLyoqXG4gKiBFdmVudCBvYnNlcnZlclxuICovXG5jbGFzcyBFdmVudE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2xvZygnc3Vic2NyaWJlJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc3BhdGNoIChldmVudCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9sb2coJ2Rpc3BhdGNoJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoZGF0YSwgaGFuZGxlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlIChldmVudCwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fbG9nKCd1bnN1YnNjcmliZScsIGV2ZW50KTtcblxuICAgICAgICBpZiAoISF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5maWx0ZXIoaGFuZGxlciA9PiBoYW5kbGVyICE9PSBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobWV0aG9kLnRvVXBwZXJDYXNlKCksICc6JywgJ1snLCBldmVudCwgJ10nKTtcbiAgICB9XG59XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEV2ZW50T2JzZXJ2ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXI7XG4iLCJpbXBvcnQgJy4vRXZlbnRPYnNlcnZlcic7XG4iLCIvKipcbiAqIFNhdmVkIGl0ZW0gbm90IGZvdW5kXG4gKlxuICogVXNpbmcgaW4gZmFzdFNhdmUgaGFuZGxlclxuICovXG5leHBvcnQgY2xhc3MgU2F2ZWRJdGVtTm90Rm91bmQgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2F2ZWRJdGVtTm90Rm91bmQnO1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG4vKipcbiAqIEFkZCBlbWJlZCBlbGVtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RhcmdldCcpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0ZW1wbGF0ZScpO1xuICAgIGNvbnN0IGlkUGxhY2Vob2xkZXIgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2lkcGxhY2Vwb2xkZXInKTtcblxuICAgIGxldCByb3dJZCA9IGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnKTtcbiAgICBjdXJyZW50QnV0dG9uLmRhdGEoJ3Jvd2lkJywgKytyb3dJZCk7XG5cbiAgICBsZXQgZW1iZWRGb3JtID0gJCgnIycrIHRlbXBsYXRlKS5odG1sKCk7XG4gICAgY29uc3QgZW1iZWRCbG9ja0lkID0gcm93SWQgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLnRvU3RyaW5nKDE2KTtcbiAgICBlbWJlZEZvcm0gPSBlbWJlZEZvcm0ucmVwbGFjZSgvJWVtYmVkQmxvY2tJZCUvZywgZW1iZWRCbG9ja0lkKTtcblxuICAgIGlmICghIWlkUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoIG5ldyBSZWdFeHAoaWRQbGFjZWhvbGRlciwgXCJnXCIpLCByb3dJZClcbiAgICB9XG5cbiAgICAkKCcjJyArIHRhcmdldCkuYXBwZW5kKGVtYmVkRm9ybSk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBkaXNwYXRjaFxuICAgICAqL1xuICAgIGNvbnN0IGV2ZW50ID0gY3VycmVudEJ1dHRvbi5kYXRhKCdldmVudCcpO1xuICAgIGlmIChldmVudCAmJiBldmVudC5sZW5ndGgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZXZlbnQsIHtcbiAgICAgICAgICAgIGVtYmVkQmxvY2tJZDogZW1iZWRCbG9ja0lkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24udHJpZ2dlcignYWlfYW5pbWF0aW9uJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICpBamF4IHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQodGhpcykucGFyZW50cygnLmFqYXgtcGFnaW5hdGlvbicpLmRhdGEoJ2NvbnRhaW5lcicpO1xuICAgXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcikucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBPcGVuIGNvbmZpcm0gbW9kYWwgYmVmb3JlIGFjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmhyZWY7XG5cbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIoZGF0YVNldC5oZWFkZXIpXG4gICAgICAgIC5mb290ZXIoXG4gICAgICAgICAgICAkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogKGRhdGFTZXQuYnRuQ2xhc3MgfHwgJ2J0bi1zbSBidG4tc3VjY2VzcycpICsgJyBidG4nLFxuICAgICAgICAgICAgICAgICd0ZXh0JzogZGF0YVNldC5idG5OYW1lIHx8ICdDb25maXJtJyxcbiAgICAgICAgICAgICAgICAnY2xpY2snOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3IGh0dHAodXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1ldGhvZChkYXRhU2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0YVNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGdldEZvcm1EYXRhKHNhdmVkSXRlbSkpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5mYXN0LXNhdmUtcGFnZS1jb250YWluZXInO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKENPTlRBSU5FUl9TRUxFQ1RPUik7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTWFyayBmb3JtJ3MgZWxlbWVudHMgYXMgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQoKSB7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufVxuIiwiaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2Zhc3RTYXZlXCI7XG5pbXBvcnQgYWRkRW1iZWQgZnJvbSBcIi4vYWRkRW1iZWRcIjtcbmltcG9ydCByZW1vdmVFbWJlZCBmcm9tIFwiLi9yZW1vdmVFbWJlZFwiO1xuaW1wb3J0IHN1Ym1pdEZvcm0gZnJvbSBcIi4vc3VibWl0Rm9ybVwiO1xuaW1wb3J0IGFqYXhQYWdpbmF0aW9uIGZyb20gXCIuL2FqYXhQYWdpbmF0aW9uXCI7XG5pbXBvcnQgY29uZmlybU1vZGFsIGZyb20gXCIuL2NvbmZpcm1Nb2RhbFwiO1xuaW1wb3J0IG1vZGFsRGF0YSBmcm9tIFwiLi9tb2RhbERhdGFcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UsIHtDT05UQUlORVJfU0VMRUNUT1IsIG1hcmtDaGFuZ2VkfSBmcm9tIFwiLi9mYXN0U2F2ZVBhZ2VcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIE9wZW4gbW9kYWwgd2l0aCBkYXRhIGZyb20gc2VydmVyIGJ5IHJlcXVlc3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LW1vZGFsLWFjdGlvbicsIG1vZGFsRGF0YSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gY29uZmlybSBtb2RhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24nLCBjb25maXJtTW9kYWwpXG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1zdWJtaXQtYWN0aW9uJywgc3VibWl0Rm9ybSlcblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LXBhZ2luYXRpb24gYScsIGFqYXhQYWdpbmF0aW9uKVxuXG4gICAgLyoqXG4gICAgICogQWRkIGVtYmVkIGVsZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtZW1iZWQnLCBhZGRFbWJlZClcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbWJlZCBlbGVtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tZW1iZWQnLCByZW1vdmVFbWJlZClcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSB0aGUgZGF0YSBvZiBhbiBlbnRpdHlcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUnLCBmYXN0U2F2ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsIGAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7Q09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7Q09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkKTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgcGFnZVxuICovXG4kKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljayhmYXN0U2F2ZVBhZ2UpO1xuIiwiaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogT3BlbiBtb2RhbCB3aXRoIGZvcm0gYnkgcmVxdWVzdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKHRoaXMuZGF0YXNldC5tZXRob2QgfHwgJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zaXplKFNJWkVTLmxnKVxuICAgICAgICAgICAgICAgIC5kYXRhc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgcmVsb2FkOiB0aGlzLmRhdGFzZXQucmVsb2FkIHx8IDEsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuaGVhZGVyKHRoaXMuZGF0YXNldC5oZWFkZXIpXG4gICAgICAgICAgICAgICAgLmFmdGVyQnVpbGQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubW9kYWwocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBSZW1vdmUgZW1iZWRlZCBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gISF0aGlzLmRhdGFzZXQucGFyZW50ID8gJCh0aGlzKS5jbG9zZXN0KHRoaXMuZGF0YXNldC5wYXJlbnQpIDogJCh0aGlzKS5wYXJlbnQoKTtcblxuICAgIGlmICghdGhpcy5kYXRhc2V0LmlkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXG4gICAgICAgIC5mb290ZXIoJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLWRhbmdlcicsXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgICAubW9kYWwoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge2dldE1vZGFsQ291bnRlcn0gZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuXG4vKipcbiAqIFN1Ym1pdCBmb3JtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5kYXRhKGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCkpXG4gICAgICAgIC5tZXRob2QodGhpcy5kYXRhc2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlICE9PSAnZXJyb3InICYmIGNhblJlbG9hZCh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5kYXRhc2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihyZXNwb25zZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENhbiByZWxvYWQgdGhlIHBhZ2VcbiAqXG4gKiBAcGFyYW0gYnV0dG9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2FuUmVsb2FkKGJ1dHRvbikge1xuICAgIGlmIChwYXJzZUludChidXR0b24uZGF0YXNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgIGlmIChnZXRNb2RhbENvdW50ZXIoKSA8IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFSZWxvYWQgPSAkKGJ1dHRvbikuY2xvc2VzdCgnLm1vZGFsJykuZGF0YSgncmVsb2FkJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFSZWxvYWQgPT09IHR5cGVvZiB1bmRlZmluZWQgfHwgZGF0YVJlbG9hZCA9PT0gZmFsc2UgfHwgcGFyc2VJbnQoZGF0YVJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBnZXRTdWJGb2xkZXIgZnJvbSBcIi4vZ2V0U3ViRm9sZGVyXCI7XG5cbi8qKlxuICogR2V0IGZpbGUgcGF0aCBmcm9tIHN0b3JhZ2Ugd2l0aCBzdWIgZm9sZGVyc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb290Rm9sZGVyIFJvb3QgZm9sZGVyIGluIHRoZSBzdG9yYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgICBGaWxlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm9vdEZvbGRlciwgZmlsZU5hbWUpIHtcbiAgICByZXR1cm4gJy9zdG9yYWdlLycgKyByb290Rm9sZGVyICsgJy8nICsgZ2V0U3ViRm9sZGVyKGZpbGVOYW1lKSArICcvJyArIGZpbGVOYW1lO1xufVxuIiwiLyoqXG4gKiBHZXQgZm9ybSBkYXRhXG4gKlxuICogQHBhcmFtIHtqUXVlcnl9IGZvcm0gRm9ybSBlbGVtZW50XG4gKlxuICogQHJldHVybnMge3t9fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmb3JtKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSB7fTtcblxuICAgIGxldCBmb3JtSXRlbXMgPSBmb3JtLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcbiAgICBpZiAoIWZvcm1JdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgZm9ybUl0ZW1zID0gZm9ybTtcbiAgICB9XG5cbiAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcbiAgICAgICAgc3dpdGNoIChjdXJyZW50SXRlbS5hdHRyKCd0eXBlJykpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gISFjdXJyZW50SXRlbS5wcm9wKCBcImNoZWNrZWRcIiApICogMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZm9ybURhdGFbY3VycmVudEl0ZW0uYXR0cignbmFtZScpXSA9IGN1cnJlbnRJdGVtLnZhbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG59XG4iLCJpbXBvcnQgbWQ1IGZyb20gJ2JsdWVpbXAtbWQ1JztcblxuLyoqXG4gKiBHZXQgc3ViIGZvbGRlcnMgb2YgdGhlIGZpbGVcbiAqXG4gKiBSZXN1bHQgb2YgdGhlIGZ1bmN0aW9uIGxvb2tzIGxpa2U6IGExL2IyL2MzXG4gKiBXaGVyZSBtZDUgb2YgdGhlIGZpbGUgPSBhMWIyYzMuLi4uLi4uLi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiB0aGUgZmlsZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmaWxlTmFtZSkge1xuICAgIGNvbnN0IGZpbGVOYW1lSGFzaCA9IG1kNShmaWxlTmFtZSkuc3Vic3RyaW5nKDAsIDYpO1xuICAgIGNvbnN0IHBhdGhQYXJ0cyA9IGZpbGVOYW1lSGFzaC5tYXRjaCgvLnsxLDJ9L2cpO1xuICAgIHJldHVybiBwYXRoUGFydHMuam9pbignLycpO1xufVxuIiwiLyoqXG4gKiBqUXVlcnlcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbndpbmRvdy4kID0gJDtcbndpbmRvdy5qUXVlcnkgPSAkO1xuXG4vKipcbiAqIEJvb3RzdHJhcFxuICovXG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcCc7XG5cbi8qKlxuICogQm9vdHN0cmFwIENjb2xvcnBpY2tlclxuICovXG5pbXBvcnQgJ2Jvb3RzdHJhcC1jb2xvcnBpY2tlcic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1jb2xvcnBpY2tlci9kaXN0L2Nzcy9ib290c3RyYXAtY29sb3JwaWNrZXIuY3NzJztcblxuLyoqXG4gKiBGb250IEF3ZXNvbWVcbiAqL1xuaW1wb3J0ICdmb250LWF3ZXNvbWUvc2Nzcy9mb250LWF3ZXNvbWUuc2Nzcyc7XG5cbi8qKlxuICogRXh0ZXJuYWwgbW9kdWxlc1xuICogVE9ETzogZ2V0IGJ5IG5wbVxuICovXG5pbXBvcnQgJy4vdmVuZG9yL2FuaW1hdGUnO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtY29uZmlybWF0aW9uJztcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLW5vdGlmeSc7XG5pbXBvcnQgJy4vdmVuZG9yL3NlbGVjdDInO1xuaW1wb3J0ICcuL3ZlbmRvci9la2tvLWxpZ2h0Ym94JztcbmltcG9ydCAnLi92ZW5kb3IvdGhlbWUnO1xuXG4vKipcbiAqIENvbXBvbmVudHNcbiAqL1xuaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xuXG4vKipcbiAqIEhhbmRsZXJzXG4gKi9cbmltcG9ydCAnLi9oYW5kbGVycyc7XG5cbi8qKlxuICogU3R5bGVzXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbi8qKlxuICogTW9kdWxlcyBsb2FkZXJcbiAqL1xuY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5jb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCdtb2R1bGVzJywgdHJ1ZSwgL21vZHVsZVxcLmpzJC8pO1xuaWYgKHBhdGhbMV0ubGVuZ3RoID4gMikge1xuICAgIC8qKlxuICAgICAqIFRvIGNyZWF0aW5nIGRpZmZlcmVudCBmaWxlcyBmb3IgZWFjaCBtb2R1bGVcbiAgICAgKiAoRG9uJ3QgZm9yZ2V0IG5wbSBpIC0tc2F2ZS1kZXYgYnVuZGxlLWxvYWRlcilcbiAgICAgKiBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCdidW5kbGUtbG9hZGVyIW1vZHVsZXMnLCB0cnVlLCAvaW5kZXhcXC5qcyQvKTtcbiAgICAgKi9cbiAgICBjb250ZXh0LmtleXMoKS5tYXAobW9kdWxlID0+IHtcbiAgICAgICAgaWYgKG1vZHVsZS5zcGxpdCgnLycpWzFdID09PSAnc2V0dGluZ3MnKSB7XG4gICAgICAgICAgICBpZiAocGF0aFsyXSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5zcGxpdCgnLycpWzNdID09PSBwYXRoWzJdKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01PRFVMRTonLCBwYXRoWzJdKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0KG1vZHVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kdWxlLnNwbGl0KCcvJylbMV0gPT09IHBhdGhbMV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6JywgcGF0aFsxXSk7XG4gICAgICAgICAgICBjb250ZXh0KG1vZHVsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXRoWzFdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29udGV4dCgnLi9kZWZhdWx0L21vZHVsZS5qcycpO1xuICAgICAgICB9XG4gICAgfSk7XG59IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6IHB1YmxpYycpO1xuICAgIGNvbnRleHQoJy4vcHVibGljL21vZHVsZS5qcycpO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKVxuICAgICAgICAgICAgLmh0bWwoKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAodGhpcy5kYXRhc2V0LnRlbXBsYXRlUGxhY2Vob2xkZXIsIFwiZ1wiKSwgZGF0YS5hd2FyZF9pZCk7XG5cbiAgICAgICAgY3VycmVudEJ0bi5wYXJlbnQoKS5hcHBlbmQoZWRpdEJ0bik7XG4gICAgICAgIGN1cnJlbnRCdG4ucmVtb3ZlKCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKS5odG1sKCk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmQoY3JlYXRlQnRuKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChFVkVOVF9OQU1FKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEVWRU5UX05BTUUsICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGNvbnRhaW5lclxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXcgVVJMIGhpZGRlbiBpbnB1dFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcHJldmlld1VSTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihkcm9wem9uZUVsZW1lbnQpXG4gICAgICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LnVybClcbiAgICAgICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICQoJyNwcmV2aWV3LXVybCcpLnZhbCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnI3ByZXZpZXctdXJsJykudmFsKCcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgICAgICBwcmV2aWV3VVJMLnZhbHVlID0gcmVzcG9uc2UuZmlsZV9uYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBwcmV2aWV3XG4gICAgICAgICAqL1xuICAgICAgICBpZiAocHJldmlld1VSTC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3VVJMLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVUkwudmFsdWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG4gICAgfSk7XG59XG5cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hY3Rpb24tbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hY3Rpb24tbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vYWN0aW9uLXR5cGUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FjdGlvbi10eXBlL21vZHVsZS5qc1wiLFxuXHRcIi4vYWRkLW1lL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hZGQtbWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9hbm5vdW5jZW1lbnRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL21vZHVsZS5qc1wiLFxuXHRcIi4vYXNzZXRzLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXNzZXRzLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL2Fzc2V0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vYXdhcmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2F3YXJkL21vZHVsZS5qc1wiLFxuXHRcIi4vYmFubmVyL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzXCIsXG5cdFwiLi9jZXJ0LXNldHVwL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jZXJ0LXNldHVwL21vZHVsZS5qc1wiLFxuXHRcIi4vY2VydC11c2Vycy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY2VydC11c2Vycy9tb2R1bGUuanNcIixcblx0XCIuL2NlcnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2NlcnQvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtYWRwcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY21zLWFkcHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtcm9sZXMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy1yb2xlcy9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtdXNlcnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy11c2Vycy9tb2R1bGUuanNcIixcblx0XCIuL2NvbGxlY3Rpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2NvbGxlY3Rpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9jcm9wL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jcm9wL21vZHVsZS5qc1wiLFxuXHRcIi4vZGFpbHktbG9vdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGFpbHktbG9vdC9tb2R1bGUuanNcIixcblx0XCIuL2RlZmF1bHQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZXBsb3kvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanNcIixcblx0XCIuL2RwYS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHBhL21vZHVsZS5qc1wiLFxuXHRcIi4vZHllL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9keWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9maW5nZXJwcmludC1mb3JtL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9maW5nZXJwcmludC1mb3JtL21vZHVsZS5qc1wiLFxuXHRcIi4vZmluZ2VycHJpbnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2ZpbmdlcnByaW50L21vZHVsZS5qc1wiLFxuXHRcIi4vZ2lmdC13cmFwL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9naWZ0LXdyYXAvbW9kdWxlLmpzXCIsXG5cdFwiLi9ncm91cC1lZGl0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ncm91cC1lZGl0L21vZHVsZS5qc1wiLFxuXHRcIi4vZ3JvdXAtZXZlbnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2dyb3VwLWV2ZW50L21vZHVsZS5qc1wiLFxuXHRcIi4vZ3JvdXAvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2dyb3VwL21vZHVsZS5qc1wiLFxuXHRcIi4vaG9tZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvaG9tZS9tb2R1bGUuanNcIixcblx0XCIuL2xldmVscy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbGV2ZWxzL21vZHVsZS5qc1wiLFxuXHRcIi4vbGlua2VkLWFzc2V0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbGlua2VkLWFzc2V0cy9tb2R1bGUuanNcIixcblx0XCIuL2xvY2FsaXphdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vbWFnaWMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21hZ2ljL21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanNcIixcblx0XCIuL21ha2V1cC1raXQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21ha2V1cC1raXQvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC1pbmdyZWRpZW50cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9tb2R1bGUuanNcIixcblx0XCIuL21lYWwvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzXCIsXG5cdFwiLi9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzXCIsXG5cdFwiLi9uZXdzLWdpZnRzLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9ubGEtYXNzZXQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25sYS1hc3NldC9tb2R1bGUuanNcIixcblx0XCIuL25sYS1jYXRlZ29yeS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmxhLWNhdGVnb3J5L21vZHVsZS5qc1wiLFxuXHRcIi4vbmxhLXNlY3Rpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25sYS1zZWN0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vcHJvZHVjdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvcHJvZHVjdC9tb2R1bGUuanNcIixcblx0XCIuL3B1YmxpYy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvcHVibGljL21vZHVsZS5qc1wiLFxuXHRcIi4vcHVyY2hhc2UvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3B1cmNoYXNlL21vZHVsZS5qc1wiLFxuXHRcIi4vc2V0dGluZ3MvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZS5qc1wiLFxuXHRcIi4vc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLXJlbGVhc2VzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1zdGF0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1zdGF0cy9tb2R1bGUuanNcIixcblx0XCIuL3NvdW5kL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zb3VuZC9tb2R1bGUuanNcIixcblx0XCIuL3NwZWNpYWwtcHJpemVzLWZvcm0vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzLWZvcm0vbW9kdWxlLmpzXCIsXG5cdFwiLi9zcGVjaWFsLXByaXplcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc3BlY2lhbC1wcml6ZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9tb2R1bGUuanNcIixcblx0XCIuL3RhbWF0b29sL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy90YW1hdG9vbC9tb2R1bGUuanNcIixcblx0XCIuL3Ryb3BoaWVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy90cm9waGllcy9tb2R1bGUuanNcIixcblx0XCIuL3Ryb3BoeS1jdXAtdXNlcnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Ryb3BoeS1jdXAtdXNlcnMvbW9kdWxlLmpzXCIsXG5cdFwiLi91c2Vycy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdXNlcnMvbW9kdWxlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbW9kdWxlcyBzeW5jIHJlY3Vyc2l2ZSBtb2R1bGVcXFxcLmpzJFwiOyIsIiQoZG9jdW1lbnQpXG5cbiAgICAub24oJ2NsaWNrJywgJyNwcm9kdWN0X2lkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjcHJvZHVjdF9pZCcpLnByZXYoJy5zZWxlY3QyLWNvbnRhaW5lcicpLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKS5mb2N1cygpXG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQgPSAnQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQnO1xuIiwiLyoqXG4gKiBDb2xsYXBzZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcuYWN0aW9uLXR5cGUtc3RhdGUnKTtcbiAgICBwYXJlbnQudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogQ29sbGFwc2Ugc3RhdGVzXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKCcuYWN0aW9uLXR5cGUtc3RhdGUnKS50b2dnbGVDbGFzcygnZG93bicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRH0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBTdGF0ZSBvZiB0aGUgQWN0aW9uIFR5cGVcbiAqIGF0IHRoZSBtb2RhbFxuICogd2l0aCBjb25maXJtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudEVsZW1lbnQuY2xvc2VzdCgnLmFjdGlvbi10eXBlLXN0YXRlJyk7XG5cbiAgICBpZiAoIWN1cnJlbnRFbGVtZW50LmRhdGEoJ2lkJykpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwge30pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKCdBcmUgeW91IHN1cmU/JylcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0RlbGV0ZScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXcgUmVxdWVzdEJ1aWxkZXIoY3VycmVudEVsZW1lbnQuZGF0YSgndXJsJykpXG4gICAgICAgICAgICAgICAgICAgIC5tZXRob2QoJ0RFTEVURScpXG4gICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgICAubW9kYWwoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBVcGRhdGUgaW5kZXhlcyBvZiB0aGUgc3RhdGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcblxuICAgICAgICAkKCcuaW5kZXgnKS5lYWNoKChfLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAkKGl0ZW0pLnZhbChpbmRleCsrKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cbiIsImltcG9ydCB1cGRhdGVJbmRleGVzIGZyb20gXCIuL2xpc3RlbmVycy91cGRhdGVJbmRleGVzXCI7XG5pbXBvcnQgY29sbGFwc2VTdGF0ZSBmcm9tIFwiLi9oYW5kbGVycy9jb2xsYXBzZVN0YXRlXCI7XG5pbXBvcnQgY29sbGFwc2VTdGF0ZXMgZnJvbSBcIi4vaGFuZGxlcnMvY29sbGFwc2VTdGF0ZXNcIjtcbmltcG9ydCByZW1vdmVBY3Rpb25UeXBlU3RhdGUgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBpbmRleGVzXG4gKi9cbnVwZGF0ZUluZGV4ZXMoKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlIG9uZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvbGxhcHNlLWxpbmsnLCBjb2xsYXBzZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2UgYWxsIHN0YXRlc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtc3RhdGVzJywgY29sbGFwc2VTdGF0ZXMpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5ybS1hY3Rpb24tdHlwZS1zdGF0ZXMnLCByZW1vdmVBY3Rpb25UeXBlU3RhdGUpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLnNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIikpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ3RyLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zYXZlLXBhZ2UnLCBzYXZlU3RhdGUpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBhbm5vdW5jZW1lbnRzIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNhbm5vdW5jZW1lbnRzID4gdGJvZHknKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5hbm5faWQnKS52YWwoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI2Fubm91bmNlbWVudHNfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWFubm91bmNlbWVudF9pZCUvZywgaSArIGluY3JlbWVudElkKTtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgYW5ub3VuY2VtZW50cyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlIChhd2FyZCA9ICcnKSB7XG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLmFubm91bmNlbWVudHMtc2F2ZS1wYWdlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5cIiArIGF3YXJkICsgXCJjaGFuZ2VkIGlucHV0LCAuXCIgKyBhd2FyZCArIFwiY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci4nICsgYXdhcmQgKyAnY2hhbmdlZCcpLnJlbW92ZUNsYXNzKGF3YXJkICsgJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBhbm5vdW5jZW1lbnRzIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkIGZvciBzZWxlY3QyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICc6Y2hlY2tib3gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuYXR0cihcImNoZWNrZWRcIiwgISQodGhpcykuYXR0cihcImNoZWNrZWRcIikpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgYW5ub3VuY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2F3YXJkLWNoYW5nZWQnKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZVN0YXRlKCdhd2FyZC0nKVxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gJCgnLnNhdmUtcGFnZScpO1xuXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnYXdhcmQtY2hhbmdlZCcpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnaW5wdXRbbmFtZT1cImF3YXJkX2lkXCJdJykudmFsKDApO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMsIHNhdmVCdXR0b24pKCk7XG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlU3RhdGUoJ2F3YXJkLScpXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGFubm91bmNlbWVudHMgcGFnZVxuICAgICAqL1xuICAgICQoJy5zYXZlLXBhZ2UnKS5jbGljaygoKSA9PiBzYXZlU3RhdGUoKSk7XG4iLCJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAub24oJ2NsaWNrJywgJy50b2dnbGVfaWRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLm5leHQoKS5oZWlnaHQoKSA+IDApIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgkKHRoaXMpLnRleHQoKS5yZXBsYWNlKCdIaWRlJywgJ1Nob3cnKSk7XG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5oZWlnaHQoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnU2hvdycsICdIaWRlJykpO1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnU2hvdycsICdIaWRlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5oZWlnaHQoJzEwMCUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBTVUJfVFlQRVMgLSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAqIEluaXRlZCBpbiBhc3NldC9mb3JtLmJsYWRlLnBocFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgc2V0U3VidHlwZXModGhpcy52YWx1ZSwgdGhpcy5kYXRhc2V0LnN1YnR5cGUpO1xufVxuXG5jb25zdCBhc3NldEZvcm1TdWJ0eXBlID0gJChcIiNzdWJ0eXBlXCIpO1xuY29uc3QgYXNzZXRGb3JtQWN0aW9uVHlwZSA9ICQoJyNhc3NldC1mb3JtLWFjdGlvbi10eXBlJyk7XG5jb25zdCBhc3NldEZvcm1Db2xsZWN0aW9uID0gJCgnI2Fzc2V0LWZvcm0tY29sbGVjdGlvbicpO1xuY29uc3QgcHJpY2VzID0gJCgnLnByaWNlcycpO1xuXG5mdW5jdGlvbiBzZXRTdWJ0eXBlcyh0eXBlLCBzdWJ0eXBlKSB7XG4gICAgYXNzZXRGb3JtU3VidHlwZVxuICAgICAgICAuZW1wdHkoKVxuICAgICAgICAuc2VsZWN0Mih7XG4gICAgICAgICAgICBkYXRhOiBTVUJfVFlQRVNbdHlwZV1cbiAgICAgICAgfSlcbiAgICAgICAgLnZhbChzdWJ0eXBlKVxuICAgICAgICAuY2hhbmdlKCk7XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IHN0YXRlXG4gICAgICovXG4gICAgaGlkZShhc3NldEZvcm1BY3Rpb25UeXBlKTtcbiAgICBoaWRlKGFzc2V0Rm9ybUNvbGxlY3Rpb24pO1xuICAgIHNob3cocHJpY2VzKTtcblxuICAgIHN3aXRjaCAocGFyc2VJbnQodHlwZSkpIHtcblxuICAgICAgICAvLyBGdXJuaXR1cmVcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc2hvdyhhc3NldEZvcm1BY3Rpb25UeXBlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIENsb3RoZXNcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc2hvdyhhc3NldEZvcm1Db2xsZWN0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEJvZHkgUGFydFxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBoaWRlKHByaWNlcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhpZGUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gc2hvdyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaGlkZScpO1xufSIsImltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbmV3IFJlcXVlc3RCdWlsZGVyKHRoaXMuaHJlZilcbiAgICAgICAgLnN1Y2Nlc3MocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICQoJyNjb2xsZWN0aW9uLW51bWJlcicpXG4gICAgICAgICAgICAgICAgLnZhbChyZXN1bHQuY29sbGVjdGlvbl9pZClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCBzZWxmKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3Qgc2F2ZUFzc2V0QnRuID0gY3VycmVudEJ0bi5jbG9zZXN0KCd0cicpLmZpbmQoJy5zYXZlLWFzc2V0Jyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKVxuICAgICAgICAgICAgLmh0bWwoKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAodGhpcy5kYXRhc2V0LnRlbXBsYXRlUGxhY2Vob2xkZXIsIFwiZ1wiKSwgZGF0YS5hd2FyZF9pZCk7XG5cbiAgICAgICAgY3VycmVudEJ0bi5wYXJlbnQoKS5hcHBlbmQoZWRpdEJ0bik7XG4gICAgICAgIGN1cnJlbnRCdG4ucmVtb3ZlKCk7XG5cbiAgICAgICAgc2F2ZUFzc2V0QnRuLmNsaWNrKCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKS5odG1sKCk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmQoY3JlYXRlQnRuKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwiLi9saXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwiLi9saXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcbmltcG9ydCBnZXRMYXN0Q29sbGVjdGlvbk51bWJlciBmcm9tIFwiLi9oYW5kbGVycy9nZXRMYXN0Q29sbGVjdGlvbk51bWJlclwiO1xuXG4kKCcjYXNzZXRzLXRhYmxlJylcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUnLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUnLCBhd2FyZERlbGV0ZSk7XG5cbiQoJyNhc3NldC1mb3JtLXR5cGUnKVxuICAgIC5jaGFuZ2UoY2hhbmdlVHlwZSlcbiAgICAuY2hhbmdlKCk7XG5cbiQoJyNnZXQtbGFzdC1jb2xsZWN0aW9uLW51bWJlcicpLmNsaWNrKGdldExhc3RDb2xsZWN0aW9uTnVtYmVyKTtcbiIsImV4cG9ydCBjb25zdCBBV0FSRF9DUkVBVEUgPSAnQVdBUkRfQ1JFQVRFJztcbmV4cG9ydCBjb25zdCBBV0FSRF9ERUxFVEUgPSAnQVdBUkRfREVMRVRFJztcbiIsIi8qKlxuICogU2hvdyBmb3JtIGV2ZW50XG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEJBTk5FUl9TSE9XX0ZPUk0gPSAnQkFOTkVSX1NIT1dfRk9STSc7XG5cbi8qKlxuICogSWQgb2YgdHlwZSdzIHNlbGVjdFxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBUWVBFX1NFTEVDVF9JRCA9ICdiYW5uZXItdHlwZSc7XG4iLCJpbXBvcnQge1RZUEVfU0VMRUNUX0lEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQ2hhbmdlIHR5cGUgaGFuZGxlclxuICogSGlkZS9zaG93IHNvbWUgZmllbGRzXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUWVBFX1NFTEVDVF9JRCk7XG5cbiAgICBpZiAoIXNlbGVjdCB8fCBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3Qub3B0aW9ucy5sZW5ndGggJiYgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XG5cbiAgICAgICAgJCgnLmJhbm5lci10eXBlJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgJCgnLmJhbm5lci10eXBlLScgKyBzZWxlY3RlZEVsZW1lbnQudmFsdWUpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtCQU5ORVJfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4uL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4vKipcbiAqIFNob3cgZm9ybSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBJbml0XG4gICAgICovXG4gICAgZHJvcFpvbmVJbml0KEJBTk5FUl9TSE9XX0ZPUk0pO1xuXG4gICAgLyoqXG4gICAgICogSW5pdCBzaG93Rm9ybSBsaXN0ZW5lclxuICAgICAqL1xuICAgIHNob3dGb3JtKCk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtCQU5ORVJfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuXG4vKipcbiAqIFNob3cgZm9ybSBsaXN0ZW5lclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEJBTk5FUl9TSE9XX0ZPUk0sICgpID0+IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHlwZSBzZWxlY3QgY2hhbmdlIHRyaWdnZXJcbiAgICAgICAgICovXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0ZXMgaW5pdFxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmJhbm5lci1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0Zvcm1cIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcbmltcG9ydCB7VFlQRV9TRUxFQ1RfSUR9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNob3cgZWRpdCBmb3JtIG9mIGEgYmFubmVyXG4gKi9cbiQoJy5zaG93LWZvcm0nKS5jbGljayhzaG93Rm9ybSgpKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0eXBlIGhhbmRsZXJcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjJyArIFRZUEVfU0VMRUNUX0lELCBjaGFuZ2VUeXBlKTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogU2F2ZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBhZ2UgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNjZXJ0LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcbiAgICBjb25zdCByb3dzID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZFwiKTtcblxuICAgIGlmKCFmb3JtSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNlbmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShmb3JtSXRlbXMpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoISFyZXNwb25zZS5lcnJvcnMpe1xuICAgICAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3MucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZVBhZ2V9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5pbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIm1vZHVsZXMvY21zLXJvbGVzL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlUGFnZSk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIG1hZ2ljIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5jZXJ0LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIik7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZFwiKTtcbmNvbnNvbGUubG9nKGZvcm1JdGVtcyk7XG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCJtb2R1bGVzL2Ntcy1yb2xlcy9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuLyoqXG4gKiBTYXZlIHRoZSByb3dcbiAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEZpbmQgVXNlclxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFVzZXIoKSB7XG4gICAgY29uc3QgcHJlZml4ID0gJCh0aGlzKS5kYXRhKCdwcmVmaXgnKTtcbiAgICBjb25zdCBkYXRhID0ge3VpZDogJCgnIycgKyBwcmVmaXgpLnZhbCgpLCBuYW1lOiAkKCcjJyArIHByZWZpeCArICdfbmFtZScpLnZhbCgpLCBwcmVmaXg6IHByZWZpeH07XG4gICAgY29uc3QgdXNlcl90ZW1wbGF0ZSA9ICQoJyN1c2VyX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGluc2VydF9ibG9jayA9ICQoJyMnICsgcHJlZml4ICsgJ19saXN0Jyk7XG4gICAgaWYgKCFkYXRhLnVpZC5sZW5ndGggJiYgIWRhdGEubmFtZS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gZmluZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgICQocmVzcG9uc2UudXNlcnMpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5jbG9zZXN0KCd0YWJsZScpLmNzcygnZGlzcGxheScsICdpbmxpbmUtdGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmFwcGVuZCh1c2VyX3RlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJXVzZXJfaWQlL2csIGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXBldF9uYW1lJScsIGl0ZW0ucGV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyV1c2VyX25hbWUlJywgaXRlbS5maXJzdF9uYW1lICsgJyAnICsgaXRlbS5sYXN0X25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJWxldmVsJScsIGl0ZW0ueHApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJWF2YXRhciUnLCBpdGVtLmF2YXRhcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8ldGFyZ2V0JS9nLCBwcmVmaXgpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBTZW5kIEdpZnRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDZXJ0ICgpIHtcbiAgICAkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI3NlbmQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH0sIDMwMDApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnI2NlcnQtc2F2ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBjb250YWluZXIuZmluZChcImlucHV0LCB0ZXh0YXJlYVwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG5cbiAgICBpZighZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzZW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZm9ybUl0ZW1zKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKXtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0cm9waHlfY3Vwc19jb3VudCA9ICQoJyNjZXJ0X2N1cHNfY291bnQnKTtcbiAgICAgICAgICAgICAgICAgICAgdHJvcGh5X2N1cHNfY291bnQudGV4dChwYXJzZUludCh0cm9waHlfY3Vwc19jb3VudC50ZXh0KCkpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICQoJy50YWJsZScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NlcnQtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEnKS52YWwoJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlX2xlbmd0aCA9ICQoJyNuZXdzX21lc3NhZ2VfbGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfbGVuZ3RoLnRleHQobWVzc2FnZV9sZW5ndGguZGF0YSgnbGVuZ3RoJykpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lX2xlbmd0aCA9ICQoJyNuYW1lX2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lX2xlbmd0aC50ZXh0KG5hbWVfbGVuZ3RoLmRhdGEoJ2xlbmd0aCcpKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnRfbGVuZ3RoID0gJCgnI2V2ZW50X2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBldmVudF9sZW5ndGgudGV4dChldmVudF9sZW5ndGguZGF0YSgnbGVuZ3RoJykpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBncm91cF9sZW5ndGggPSAkKCcjZ3JvdXBfbGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwX2xlbmd0aC50ZXh0KGdyb3VwX2xlbmd0aC5kYXRhKCdsZW5ndGgnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzZW5kQ2VydH0gZnJvbSBcIi4vaGFuZGxlcnMvc2VuZENlcnRcIjtcbmltcG9ydCB7ZmluZFVzZXJ9IGZyb20gXCIuL2hhbmRsZXJzL2ZpbmRVc2VyXCI7XG5pbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIm1vZHVsZXMvY21zLXJvbGVzL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogRmluZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjZmluZF9zZW5kZXIsICNmaW5kX3JlY2VpdmVyJywgZmluZFVzZXIpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNzZW5kJywgc2VuZENlcnQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHNlbGVjdGVkIGNlcnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNhc3NldHNfbGlzdCBpbWcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNhc3NldHNfbGlzdCcpLmZpbmQoJ2ltZycpLmNzcygnYm9yZGVyJywgJycpO1xuICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyJywgJzNweCBzb2xpZCAjNWM1YzVjJyk7XG4gICAgICAgICQoJyNhc3NldF9pZCcpLnZhbCgkKHRoaXMpLmRhdGEoJ2NlcnQnKSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgc2VsZWN0ZWQgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudGFibGUgdHInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgICQoJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSArICdfdWlkJykudmFsKCQodGhpcykuZGF0YSgndWlkJykpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBsaW1pdCBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCwgdGV4dGFyZWEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykucHJvcCgnbmFtZScpLnJlcGxhY2UoJ2NlcnRfZGF0YVsnLCAnJykucmVwbGFjZSgnXScsICcnKSArICdfbGVuZ3RoJztcbiAgICAgICAgJCgnIycgKyB0YXJnZXQpLnRleHQoJCh0aGlzKS5kYXRhKCdtYXhsZW5ndGgnKSAtICQodGhpcykudmFsKCkubGVuZ3RoKTtcbiAgICB9KVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbnRlcmVkIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNjYW5jZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy50YWJsZScpLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCB0ZXh0YXJlYScpLnZhbCgnJylcbiAgICB9KTtcbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY29weSBhZHAgaWRzIHRvIGNsaXBib2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUFkcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkcElkc0ZpZWxkID0gJCgnaW5wdXRbbmFtZT1cImFkcF9pZHNcIl0nKTtcbiAgICBsZXQgYWRwSWRzID0gW107XG5cbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGFkcElkcy5wdXNoKCQoaXRlbSkuZGF0YSgnaWQnKSlcbiAgICB9KTtcblxuICAgIGFkcElkc0ZpZWxkLnZhbChhZHBJZHMpO1xuICAgIGFkcElkc0ZpZWxkLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAvLyBhZHBJZHNGaWVsZC52YWwoW10pO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFzc2V0cyBpZHMgdG8gY2xpcGJvYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5QXNzZXRzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBhc3NldElkc0ZpZWxkID0gJCgnaW5wdXRbbmFtZT1cImFzc2V0X2lkc1wiXScpO1xuICAgIGxldCBhc3NldElkcyA9IFtdO1xuXG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBhc3NldElkcy5wdXNoKCQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKSlcbiAgICB9KTtcblxuICAgIGFzc2V0SWRzRmllbGQudmFsKGFzc2V0SWRzKTtcbiAgICBhc3NldElkc0ZpZWxkLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiBhcmNoaXZlIGNhdGVnb3JpZXMgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBcmNoaXZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuc2hvdy1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5hcmNoaXZlLWNhdGVnb3JpZXMtbGlzdCcpLmh0bWwoJycpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIG9mIHRhc2tzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlVGFza3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5zaG93LXRhc2tzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy50YXNrcy1saXN0JykuaGlkZSgnc2xvdycpO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEhhbmRsZXIgb2YgYXJjaGl2ZSBjYXRlZ29yaWVzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93QXJjaGl2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmhpZGUtYXJjaGl2ZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBcbiAgICBsZXQgYWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpO1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmFyY2hpdmUtY2F0ZWdvcmllcy1saXN0JykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICBcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiB0YXNrcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuaGlkZS10YXNrcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcudGFza3MtbGlzdCcpLnNob3coJ3Nsb3cnKTtcbn1cbiIsIi8vaW1wb3J0IHtidW5kbGVWZXJzaW9uU2VsZWN0fSBmcm9tIFwiLi9oYW5kbGVycy9idW5kbGVWZXJzaW9uU2VsZWN0XCI7XG5pbXBvcnQge3Nob3dBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXJjaGl2ZVwiO1xuaW1wb3J0IHtoaWRlQXJjaGl2ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFyY2hpdmVcIjtcbmltcG9ydCB7aGlkZVRhc2tzfSBmcm9tIFwiLi9oYW5kbGVycy9oaWRlVGFza3NcIjtcbmltcG9ydCB7c2hvd1Rhc2tzfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93VGFza3NcIjtcbmltcG9ydCB7Y29weUFkcH0gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFkcFwiO1xuaW1wb3J0IHtjb3B5QXNzZXRzfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QXNzZXRzXCI7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1hcmNoaXZlJywgc2hvd0FyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hcmNoaXZlJywgaGlkZUFyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS10YXNrcycsIGhpZGVUYXNrcylcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LXRhc2tzJywgc2hvd1Rhc2tzKVxuICAgIC8qKlxuICAgICAqIFNob3cgYWRwIHRhc2tzIGJ5IHN0YXR1cyBhbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHktYWRwJywgY29weUFkcClcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFzc2V0cycsIGNvcHlBc3NldHMpO1xuICAgICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpO1xuXG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogU2V0IGN1cnNvciB0byBwYXJlbnQgbm9kZVxuICAgICAqL1xuICAgIC5vbignbW91c2VlbnRlcicsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gZGVwbG95IGluZm9cbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKTtcblxuICAgICAgICBpZiAod3JhcHBlciAmJiB3cmFwcGVyLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnb3BlbicpXG4gICAgICAgIH1cbiAgICB9KTtcblxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYik7XG5cbiIsImV4cG9ydCBjb25zdCBDT0xMRUNUSU9OX1NIT1dfRk9STSA9ICdDT0xMRUNUSU9OX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5jb25zdCBhc3NldFByZXZpZXdUZW1wbGF0ZSA9ICQoJyNhc3NldC1wcmV2aWV3LXRlbXBsYXRlJykuaHRtbCgpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxuICAgICAqL1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGZvcm1JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmhhc0NsYXNzKCdhc3NldC1pZCcpICYmICEhcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QXNzZXQgPSByZXNwb25zZS5hc3NldHNbY3VycmVudEl0ZW0udmFsKCldO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5zbG90JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuYXNzZXQtcHJldmlldycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChhc3NldFByZXZpZXdUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldXJsJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0LnByZXZpZXdfdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldGl0bGUlJywgXCJnXCIpLCBjdXJyZW50QXNzZXQubmFtZSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSBhZGRpdGlvbmFsIHJvd3NcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJy5hZGRpdGlvbmFsLWRhdGEnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBNYXJrIGlucHV0IGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XG4gICAgICAgIGdyb3VwOiBfdGhpcy5kYXRhc2V0Lmdyb3VwLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmZpbmQoX3RoaXMuZGF0YXNldC5wb3NpdGlvbikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHBvc2l0aW9uLnZhbCgpKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7Q09MTEVDVElPTl9TSE9XX0ZPUk19IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XG5pbXBvcnQgbWFya0lucHV0QXNDaGFuZ2VkIGZyb20gXCIuL2hhbmRsZXJzL21hcmtJbnB1dEFzQ2hhbmdlZFwiO1xuaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBoaWRlQWRkaXRpb25hbFJvd3MgZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFkZGl0aW9uYWxSb3dzXCI7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KENPTExFQ1RJT05fU0hPV19GT1JNKSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGNvbGxlY3Rpb25cbiAqL1xuJCgnLmNvbGxlY3Rpb24tZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xuXG4vKipcbiAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dCcpLmNoYW5nZShtYXJrSW5wdXRBc0NoYW5nZWQpO1xuXG4vKipcbiAqIFNvcnRhYmxlIGluaXRcbiAqL1xuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4vKipcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXG4gKi9cbiQoJy5oaWRlLXNsb3RzJykuY2xpY2soaGlkZUFkZGl0aW9uYWxSb3dzKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIHJvd3MgdG8gdGhlIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2Nyb3BzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjY3JvcF90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5jcm9wX2lkJykudGV4dCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVjcm9wJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIERlbGV0ZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVJvdygpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZFJvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkUm93XCI7XG5pbXBvcnQge2RlbGV0ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvZGVsZXRlUm93XCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1yb3cnLCBhZGRSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGRlbGV0ZVJvdylcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZCh0aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgc2VsZik7XG5cbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyb3cuYWRkQ2xhc3MoJ2NoYW5nZWQnKSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZCh0aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIHNlbGYpO1xuXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocm93LmFkZENsYXNzKCdjaGFuZ2VkJykpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNkYWlseV9sb290ID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZGFpbHlfbG9vdF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBsZXQgbGFzdElEUyA9IFtdO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IDE7XG4gICAgdGJvZHkuZmluZChcInRyXCIpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgaWYocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKXtcbiAgICAgICAgICAgIGxhc3RJRFMucHVzaChwYXJzZUludCgkKGl0ZW0pLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihsYXN0SURTLmxlbmd0aCl7XG4gICAgICAgIGluY3JlbWVudElkID0gKE1hdGgubWF4LmFwcGx5KE1hdGgsbGFzdElEUykgKyAxKSB8fCAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVyb3dJbmRleCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbChpICsgaW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmZpbmQoJy5kYXRlcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuZGFpbHktbG9vdC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ3RyLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFN3aXRjaCBwYWdlIHR5cGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50b2dnbGUtcGFnZS10eXBlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMCwgbG9jYXRpb24ucGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSkgKyAkKHRoaXMpLmRhdGEoJ2hyZWYnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcjY29tbW9uLW1lbnUnKS5maW5kKCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmKCQodGhpcykuZmluZCgnbGknKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiXG4vKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZGlyZWN0aW9uPVwiICsgZGlyZWN0aW9uO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgaWQ6ICdkZXBsb3knXG4gICAgfSwgJ0RlcGxveScsIHVybCk7XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQgZmFzdFNhdmVQYWdlIGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG4gICAgLyoqXG4gICAgICogU2F2ZSBhbGwgcGFnZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScsIGZhc3RTYXZlUGFnZSkiLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxldmVscyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHBhID4gdGJvZHknKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5kcGFfaWQnKS52YWwoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyNkcGFfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWRwYV9pZCUvZywgaSArIGluY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRHBhU3RhdGUgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgbGV0IGRhdGEgPSAkKCcuZHBhLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVEcGFTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZURwYVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgZHBhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRwYS1zYXZlLXBhZ2UnLCBzYXZlRHBhU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2R5ZSA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2R5ZV90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcblxuICAgICAgICBsZXQgbGFzdFJvdyA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmNwMicpO1xuICAgICAgICBsYXN0Um93LmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAkKGl0ZW0pLmNvbG9ycGlja2VyKHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIENoYW5nZSByb3cgaW5kZXhcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJvd0luZGV4KCkge1xuICAgIGxldCByb3dJbmRleCA9ICQodGhpcykudmFsKCk7XG4gICAgbGV0IHJvdyA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCdpbnB1dCwgc2VsZWN0Jyk7XG5cbiAgICByb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgbGV0IG9sZE5hbWUgPSAkKGl0ZW0pLmF0dHIoJ25hbWUnKTtcbiAgICAgICAgbGV0IG5ld05hbWUgPSBvbGROYW1lLnNsaWNlKDAsIDQpICsgcm93SW5kZXggKyAgb2xkTmFtZS5zbGljZShvbGROYW1lLmluZGV4T2YoJ10nKSk7XG4gICAgICAgICQoaXRlbSkuYXR0cignbmFtZScsIG5ld05hbWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IERZRV9DT05UQUlORVJfU0VMRUNUT1IgPSAnLmR5ZS1zYXZlLXBhZ2UtY29udGFpbmVyJztcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBkeWVzIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUik7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTWFyayBmb3JtJ3MgdHIgYXMgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWRUcigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7Y2hhbmdlUm93SW5kZXh9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4XCI7XG5pbXBvcnQgZHllU2F2ZVBhZ2UsIHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SLCBtYXJrQ2hhbmdlZFRyfSBmcm9tIFwiLi9oYW5kbGVycy9keWVTYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjb2xvci1waWNrZXIgaW5wdXRzXG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuY3AyJykuY29sb3JwaWNrZXIoKVxuICAgICAgICAgICAgLm9uKCdjcmVhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBNYXJrIHRyIGFzIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgYCR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWRUcilcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdpbnB1dCcsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHJvdyBpbmRleFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFzc2V0X2lkJywgY2hhbmdlUm93SW5kZXgpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICAgICAqL1xuICAgICQoJy5keWUtc2F2ZS1wYWdlJykuY2xpY2soZHllU2F2ZVBhZ2UpO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVGaW5nZXJwcmludChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IFdlYkdMRmluZ2VyUHJpbnQgPVxuICAgICAgICB7XG4gICAgICAgICAgICAkZGVmYXVsdFZhcnM6IFtdLFxuXG4gICAgICAgICAgICBGaW5kRmluZ2VyUHJpbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZVNjcmVlblJlc29sdXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhdGVEZXZpY2VzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9Ob3RUcmFjazogdHJ1ZSxcbi8vIHVzZXJBZ2VudDogdHJ1ZSxcbi8vIGxhbmd1YWdlOiB0cnVlLFxuLy8gYXVkaW86IHRydWUsXG4vLyBmb250czogdHJ1ZSxcbi8vIHdlYmRyaXZlcjogdHJ1ZSxcbi8vIHNlc3Npb25TdG9yYWdlOiB0cnVlLFxuLy8gbG9jYWxTdG9yYWdlOiB0cnVlLFxuLy8gaW5kZXhlZERiOiB0cnVlLFxuLy8gcGx1Z2luczogdHJ1ZSxcbi8vIGFkQmxvY2s6IHRydWUsXG4vLyBmb250c0ZsYXNoOiB0cnVlLFxuLy8gb3BlbkRhdGFiYXNlOiB0cnVlLFxuLy8gY2FudmFzOiB0cnVlLFxuLy8gd2ViZ2w6IHRydWUsXG4vLyBkZXZpY2VNZW1vcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBmaW5nZXJwcmludDtcblxuICAgICAgICAgICAgICAgIGxldCBmaW5nZXJQcmludEhhbmRsZXIgPSBmdW5jdGlvbiAoY29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGNvbXBvbmVudHMubWFwKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQua2V5ICsgJzogJyArIGNvbXBvbmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5nZXJwcmludCA9IEZpbmdlcnByaW50Mi54NjRoYXNoMTI4KHZhbHVlcy5qb2luKCcnKSwgMzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFByb21pc2UoZmluZ2VycHJpbnQsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkpTMSBmaW5nZXIgcHJpbnQgXCIgKyBmaW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlMyIGZpbmdlciBlcnJvciBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRmluZ2VycHJpbnQyLmdldChvcHRpb25zLCBmaW5nZXJQcmludEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmdlcnByaW50Mi5nZXQob3B0aW9ucywgZmluZ2VyUHJpbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7IC8vd2FzIHRpbWUgb3V0IDUwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkpTMyBmaW5nZXIgcHJpbnQgd2FpdCBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIFdlYkdMRmluZ2VyUHJpbnQuRmluZEZpbmdlclByaW50KCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNlbmRQcm9taXNlKGZpbmdlcnByaW50LCB2YWx1ZXMpIHtcbiAgICBjb25zdCBjb21tZW50ID0gJCgnI2NvbW1lbnQnKS52YWwoKTtcbiAgICBjb25zdCBuYW1lID0gJCgnI25hbWUnKS52YWwoKTtcbiAgICBpZiAobmFtZS5sZW5ndGggJiYgZmluZ2VycHJpbnQubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHtuYW1lOiBuYW1lLCBjb21tZW50OiBjb21tZW50LCBmaW5nZXJwcmludDogZmluZ2VycHJpbnQsIHZhbHVlczogdmFsdWVzfSk7XG4gICAgICAgIG5ldyBodHRwKCQoJyNmaW5nZXJwcmludCcpLmF0dHIoJ2FjdGlvbicpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7bmFtZTogbmFtZSwgY29tbWVudDogY29tbWVudCwgZmluZ2VycHJpbnQ6IGZpbmdlcnByaW50LCB2YWx1ZXM6IHZhbHVlc30pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2ZpbmdlcnByaW50JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBub3RpZnlTdWNjZXNzKCdGaW5nZXJwcmludCBzYXZlZCcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge3NhdmVGaW5nZXJwcmludH0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZUZpbmdlcnByaW50XCI7XG5cbiQoZG9jdW1lbnQpXG5cbi8qKlxuICogU2V0IGN1cnNvciB0byBwYXJlbnQgbm9kZVxuICovXG4gICAgLm9uKCdtb3VzZWVudGVyJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICdwb2ludGVyJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBkZXBsb3kgaW5mb1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAndGQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSAkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpO1xuXG4gICAgICAgIGlmICh3cmFwcGVyICYmIHdyYXBwZXIuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdvcGVuJylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBGb3JtIHN1Ym1pdFxuICAgICAqL1xuICAgIC5vbignc3VibWl0JywgJyNmaW5nZXJwcmludCcsIHNhdmVGaW5nZXJwcmludCk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUZpbmdlcnByaW50KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgV2ViR0xGaW5nZXJQcmludCA9XG4gICAgICAgIHtcbiAgICAgICAgICAgICRkZWZhdWx0VmFyczogW10sXG5cbiAgICAgICAgICAgIEZpbmRGaW5nZXJQcmludDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBleGNsdWRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlU2NyZWVuUmVzb2x1dGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmF0ZURldmljZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb05vdFRyYWNrOiB0cnVlLFxuLy8gdXNlckFnZW50OiB0cnVlLFxuLy8gbGFuZ3VhZ2U6IHRydWUsXG4vLyBhdWRpbzogdHJ1ZSxcbi8vIGZvbnRzOiB0cnVlLFxuLy8gd2ViZHJpdmVyOiB0cnVlLFxuLy8gc2Vzc2lvblN0b3JhZ2U6IHRydWUsXG4vLyBsb2NhbFN0b3JhZ2U6IHRydWUsXG4vLyBpbmRleGVkRGI6IHRydWUsXG4vLyBwbHVnaW5zOiB0cnVlLFxuLy8gYWRCbG9jazogdHJ1ZSxcbi8vIGZvbnRzRmxhc2g6IHRydWUsXG4vLyBvcGVuRGF0YWJhc2U6IHRydWUsXG4vLyBjYW52YXM6IHRydWUsXG4vLyB3ZWJnbDogdHJ1ZSxcbi8vIGRldmljZU1lbW9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGZpbmdlcnByaW50O1xuXG4gICAgICAgICAgICAgICAgbGV0IGZpbmdlclByaW50SGFuZGxlciA9IGZ1bmN0aW9uIChjb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gY29tcG9uZW50cy5tYXAoZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5rZXkgKyAnOiAnICsgY29tcG9uZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50ID0gRmluZ2VycHJpbnQyLng2NGhhc2gxMjgodmFsdWVzLmpvaW4oJycpLCAzMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kUHJvbWlzZShmaW5nZXJwcmludCwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlMxIGZpbmdlciBwcmludCBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJKUzIgZmluZ2VyIGVycm9yIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5nZXJwcmludDIuZ2V0KG9wdGlvbnMsIGZpbmdlclByaW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRmluZ2VycHJpbnQyLmdldChvcHRpb25zLCBmaW5nZXJQcmludEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTsgLy93YXMgdGltZSBvdXQgNTAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlMzIGZpbmdlciBwcmludCB3YWl0IFwiICsgZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgV2ViR0xGaW5nZXJQcmludC5GaW5kRmluZ2VyUHJpbnQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VuZFByb21pc2UoZmluZ2VycHJpbnQsIHZhbHVlcykge1xuICAgIGNvbnN0IGNvbW1lbnQgPSAkKCcjY29tbWVudCcpLnZhbCgpO1xuICAgIGNvbnN0IG5hbWUgPSAkKCcjbmFtZScpLnZhbCgpO1xuXG4gICAgaWYgKG5hbWUubGVuZ3RoICYmIGZpbmdlcnByaW50Lmxlbmd0aCkge1xuICAgICAgICBuZXcgaHR0cCgkKCcjZmluZ2VycHJpbnQnKS5hdHRyKCdhY3Rpb24nKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe25hbWU6IG5hbWUsIGNvbW1lbnQ6IGNvbW1lbnQsIGZpbmdlcnByaW50OiBmaW5nZXJwcmludCwgdmFsdWVzOiB2YWx1ZXN9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtzYXZlRmluZ2VycHJpbnR9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVGaW5nZXJwcmludFwiO1xuXG4kKGRvY3VtZW50KVxuXG4vKipcbiAqIFNldCBjdXJzb3IgdG8gcGFyZW50IG5vZGVcbiAqL1xuICAgIC5vbignbW91c2VlbnRlcicsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gZGVwbG95IGluZm9cbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKTtcblxuICAgICAgICBpZiAod3JhcHBlciAmJiB3cmFwcGVyLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnb3BlbicpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRm9ybSBzdWJtaXRcbiAgICAgKi9cbiAgICAub24oJ3N1Ym1pdCcsICcjZmluZ2VycHJpbnQnLCBzYXZlRmluZ2VycHJpbnQpO1xuIiwiZXhwb3J0IGNvbnN0IEdJRlRfV1JBUF9ST1dfQURERUQgPSAnR0lGVF9XUkFQX1JPV19BRERFRCc7XG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5cbi8qKlxuICogQXNzZXQgSUQgY2hhbmdlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudElucHV0ID0gJCh0aGlzKTtcbiAgICBjb25zdCBhc3NldElEID0gY3VycmVudElucHV0LnZhbCgpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRJbnB1dC5jbG9zZXN0KCd0cicpO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBhc3NldHMgaWRzXG4gICAgICovXG4gICAgY29uc3QgY3VycmVudEFzc2V0RHVwbGljYXRlID0gJCgnI2dpZnQtd3JhcHMtY29udGFpbmVyJykuZmluZCgnLmFzc2V0LWlkJykuZmlsdGVyKChfLCBpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBhc3NldElEID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGN1cnJlbnRBc3NldER1cGxpY2F0ZS5sZW5ndGggPiAxKXtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUgYXNzZXQgJyArIGFzc2V0SUR9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBpbnB1dHMgbmFtZXNcbiAgICAgKi9cbiAgICBwYXJlbnQuZmluZCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLnJlcGxhY2UoIC9cXFtbXFxkXStcXF0vZywgYFske2Fzc2V0SUR9XWApO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGhyZWYgb2YgdGhlIGRlbGV0ZSBidXR0b25cbiAgICAgKi9cbiAgICBwYXJlbnQuZmluZCgnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaHJlZiA9IHRoaXMuaHJlZi5yZXBsYWNlKCAvXFwvW1xcZF0rJC9nLCBgLyR7YXNzZXRJRH1gKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IHBvc2l0aW9uVXBkYXRlIGZyb20gXCIuLi9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlXCI7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHt9O1xuICAgICAgICAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhc3NldHNbdGhpcy52YWx1ZV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFzc2V0c1t0aGlzLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgZXJyLm1lc3NhZ2V9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBvc2l0aW9uIHVwZGF0ZVxuICAgICAqL1xuICAgIHBvc2l0aW9uVXBkYXRlKCk7XG5cbiAgICBmYXN0U2F2ZVBhZ2UuYmluZCh0aGlzKShlKTtcbn1cbiIsImltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcImhhbmRsZXJzL2NvbmZpcm1Nb2RhbFwiO1xuXG4vKipcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBidXR0b25VcmwgPSB0aGlzLmhyZWYuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAocGFyc2VJbnQoYnV0dG9uVXJsW2J1dHRvblVybC5sZW5ndGggLSAxXSkgPT09IDApIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uZmlybU1vZGFsLmJpbmQodGhpcykoZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIm1vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwb3NpdGlvblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIFBvc2l0aW9uIHVwZGF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBvc2l0aW9uJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xuICAgICAgICBpZiAocGFyc2VJbnQocG9zaXRpb24udmFsKCkpICE9PSBpbmRleCkge1xuICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4KTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtHSUZUX1dSQVBfUk9XX0FEREVEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQWRkIG5ldyByb3cgdG8gZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEdJRlRfV1JBUF9ST1dfQURERUQsIGRhdGEgPT4ge1xuICAgICAgICAkKCcjZ2lmdC13cmFwLScgKyBkYXRhLmVtYmVkQmxvY2tJZClcbiAgICAgICAgICAgIC5maW5kKCcuZGF0ZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBhc3NldENoYW5nZWQgZnJvbSBcIi4vaGFuZGxlcnMvYXNzZXRDaGFuZ2VkXCI7XG5pbXBvcnQgYWRkUm93IGZyb20gXCIuL2xpc3RlbmVycy9hZGRSb3dcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgcmVtb3ZlUm93IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGFzc2V0IGlkIGluIGlucHV0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0LWlkJywgYXNzZXRDaGFuZ2VkKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJywgcmVtb3ZlUm93KTtcblxuLyoqXG4gKiBBZGQgcm93IGxpc3RlbmVyXG4gKi9cbmFkZFJvdygpO1xuXG4vKipcbiAqIFNvcnRhYmxlIGluaXRcbiAqL1xuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4vKipcbiAqIFNhdmUgYWxsIHBhZ2VcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBTdG9yZSBVc2VyXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZG1pblN0b3JlKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX2lkID0gJCgnI3NlbmRlcl9saXN0JykuZmluZCgnW25hbWU9XCJ1c2VyX3NlbmRlclwiXTpjaGVja2VkJykuY2xvc2VzdCgndHInKS5kYXRhKCd1aWQnKTtcblxuICAgIGlmICghc2VsZWN0ZWRfaWQpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gZmluZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHt1aWQ6IHNlbGVjdGVkX2lkfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBGaW5kIFVzZXJcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRVc2VyKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7dWlkOiAkKCcjc2VuZGVyJykudmFsKCksIG5hbWU6ICQoJyNzZW5kZXJfbmFtZScpLnZhbCgpfTtcbiAgICBjb25zdCB1c2VyX3RlbXBsYXRlID0gJCgnI3VzZXJfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgaW5zZXJ0X2Jsb2NrID0gJCgnI3NlbmRlcl9saXN0Jyk7XG5cbiAgICBpZiAoIWRhdGEudWlkLmxlbmd0aCAmJiAhZGF0YS5uYW1lLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBmaW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgJChyZXNwb25zZS51c2VycykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmNsb3Nlc3QoJ3RhYmxlJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS10YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suYXBwZW5kKHVzZXJfdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8ldXNlcl9pZCUvZywgaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclYXZhdGFyJScsIGl0ZW0uYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVwZXRfbmFtZSUnLCBpdGVtLnBldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcldXNlcl9uYW1lJScsIGl0ZW0uZmlyc3RfbmFtZSArICcgJyArIGl0ZW0ubGFzdF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVsZXZlbCUnLCBpdGVtLnhwKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogQ2hhbmdlIG1haW4gYWRtaW5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldE1haW4oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpc19tYWluID0gJCgnI2dyb3VwLXVzZXJzJykuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKS5kYXRhKCdpZCcpO1xuXG4gICAgaWYgKCFpc19tYWluKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKHttYWluX2lkOiBpc19tYWlufSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQge2ZpbmRVc2VyfSBmcm9tIFwibW9kdWxlcy9ncm91cC1lZGl0L2hhbmRsZXJzL2ZpbmRVc2VyXCI7XG5pbXBvcnQge2FkbWluU3RvcmV9IGZyb20gXCJtb2R1bGVzL2dyb3VwLWVkaXQvaGFuZGxlcnMvYWRtaW5TdG9yZVwiO1xuaW1wb3J0IHtzZXRNYWlufSBmcm9tIFwibW9kdWxlcy9ncm91cC1lZGl0L2hhbmRsZXJzL3NldE1haW5cIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2ZpbmRfc2VuZGVyLCAjZmluZF9yZWNlaXZlcicsIGZpbmRVc2VyKVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50YWJsZSB0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgJCgnI3NlbmRlcl91aWQnKS52YWwoJCh0aGlzKS5kYXRhKCd1aWQnKSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU3RvcmUgdXNlciB0byBncm91cFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI3N0b3JlJywgYWRtaW5TdG9yZSlcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtYWluIGFkbWluXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNldE1haW4pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCd0Ym9keS5ncm91cC1ldmVudC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IGxhc3RJRFMgPSBbXTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xuICAgIHRib2R5LmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGxhc3RJRFMucHVzaCgkKGl0ZW0pLmRhdGEoJ2lkJykpO1xuICAgIH0pO1xuXG4gICAgaWYobGFzdElEUy5sZW5ndGgpe1xuICAgICAgICBpbmNyZW1lbnRJZCA9IChNYXRoLm1heC5hcHBseShNYXRoLGxhc3RJRFMpICsgMSkgfHwgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyN0ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8laWQlL2csIGkgKyBpbmNyZW1lbnRJZCk7XG4gICAgICAgIHRib2R5LnByZXBlbmQodHJMYXN0KTtcbiAgICAgICAgJCgnLmRhdGUtZmllbGQnKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5ncm91cC1ldmVudC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCB0ZXh0YXJlYVwiKTtcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkXCIpO1xuXG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLmRhdGUtZmllbGRcIikuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlIGtleXVwIHBhc3RlJywgJ3RleHRhcmVhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2F2ZS1wYWdlJywgc2F2ZVN0YXRlKTtcblxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENvcHkgaWRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKS5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpO1xuXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogUHJpY2UgcmVjb3VudFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLnJlY291bnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHByaWNlID0gJCgnLmJhc2tldC1wcmljZScpLmRhdGEoJ3ByaWNlJyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLnJvdycpLmZpbmQoJy5pdGVtLXN1bScpLnRleHQoKHByaWNlICogJCh0aGlzKS52YWwoKSkpO1xuICAgICAgICBsZXQgdG90YWxTdW0gPSAwO1xuICAgICAgICAkKCcuaXRlbS1zdW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRvdGFsU3VtICs9IHBhcnNlSW50KCQodGhpcykudGV4dCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJyN0b3RhbC1zdW0nKS50ZXh0KHRvdGFsU3VtKVxuICAgIH0pXG5cbiAgICAub24oJ2NsaWNrJywgJy5pdGVtLXJlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcueF9wYW5lbCcpLmhpZGUoKTtcblxuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH0pXG5cbiAgICAub24oJ2NsaWNrJywgJyNvcmRlci1zZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgICAgICAgICAgJCgnLmJhc2tldC1oaWRlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH0pO1xuXG4kKCcjcGhvbmUnLCAnI2Zvcm0nKVxuXG4gICAgLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGtleSA9IGUud2hpY2ggfHwgZS5jaGFyQ29kZSB8fCBlLmtleUNvZGUgfHwgMDtcbiAgICAgICAgJHBob25lID0gJCh0aGlzKTtcblxuICAgICAgICAvLyBEb24ndCBsZXQgdGhlbSByZW1vdmUgdGhlIHN0YXJ0aW5nICcoJ1xuICAgICAgICBpZiAoJHBob25lLnZhbCgpLmxlbmd0aCA9PT0gMSAmJiAoa2V5ID09PSA4IHx8IGtleSA9PT0gNDYpKSB7XG4gICAgICAgICAgICAkcGhvbmUudmFsKCcoJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgaWYgdGhleSBoaWdobGlnaHQgYW5kIHR5cGUgb3ZlciBmaXJzdCBjaGFyLlxuICAgICAgICBlbHNlIGlmICgkcGhvbmUudmFsKCkuY2hhckF0KDApICE9PSAnKCcpIHtcbiAgICAgICAgICAgICRwaG9uZS52YWwoJygnKyRwaG9uZS52YWwoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdXRvLWZvcm1hdC0gZG8gbm90IGV4cG9zZSB0aGUgbWFzayBhcyB0aGUgdXNlciBiZWdpbnMgdG8gdHlwZVxuICAgICAgICBpZiAoa2V5ICE9PSA4ICYmIGtleSAhPT0gOSkge1xuICAgICAgICAgICAgaWYgKCRwaG9uZS52YWwoKS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICAkcGhvbmUudmFsKCRwaG9uZS52YWwoKSArICcpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJHBob25lLnZhbCgpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgICAgICRwaG9uZS52YWwoJHBob25lLnZhbCgpICsgJyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkcGhvbmUudmFsKCkubGVuZ3RoID09PSA5KSB7XG4gICAgICAgICAgICAgICAgJHBob25lLnZhbCgkcGhvbmUudmFsKCkgKyAnLScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgbnVtZXJpYyAoYW5kIHRhYiwgYmFja3NwYWNlLCBkZWxldGUpIGtleXMgb25seVxuICAgICAgICByZXR1cm4gKGtleSA9PSA4IHx8XG4gICAgICAgICAgICBrZXkgPT0gOSB8fFxuICAgICAgICAgICAga2V5ID09IDQ2IHx8XG4gICAgICAgICAgICAoa2V5ID49IDQ4ICYmIGtleSA8PSA1NykgfHxcbiAgICAgICAgICAgIChrZXkgPj0gOTYgJiYga2V5IDw9IDEwNSkpO1xuICAgIH0pXG5cbiAgICAuYmluZCgnZm9jdXMgY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwaG9uZSA9ICQodGhpcyk7XG5cbiAgICAgICAgaWYgKCRwaG9uZS52YWwoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICRwaG9uZS52YWwoJygnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSAkcGhvbmUudmFsKCk7XG4gICAgICAgICAgICAkcGhvbmUudmFsKCcnKS52YWwodmFsKTsgLy8gRW5zdXJlIGN1cnNvciByZW1haW5zIGF0IHRoZSBlbmRcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAuYmx1cihmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwaG9uZSA9ICQodGhpcyk7XG5cbiAgICAgICAgaWYgKCRwaG9uZS52YWwoKSA9PT0gJygnKSB7XG4gICAgICAgICAgICAkcGhvbmUudmFsKCcnKTtcbiAgICAgICAgfVxuICAgIH0pOyIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbGV2ZWxzIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgbGV0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgbGV0IHRib2R5ID0gJCgnI2xldmVscyA+IHRib2R5Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXRbbmFtZT1cImlkXCJdJykudmFsKCk7XG4gICAgICAgIGxldCBpbmNyZW1lbnRJZCA9IHBhcnNlSW50KGxhc3RJRCkgfHwgMDtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyNsZXZlbF90ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8lbGV2ZWxfaWQlL2csICsraW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBsZXZlbHMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMZXZlbFN0YXRlICgpIHtcbiAgICBsZXQgcm93VG9TYXZlID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpO1xuICAgIGxldCByb3cgPSByb3dUb1NhdmUuZmluZChcIi5lZGl0YWJsZSBzZWxlY3QsIC5lZGl0YWJsZSBpbnB1dFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgbmV3IGh0dHAocm93VG9TYXZlLmRhdGEoJ2FjdGlvbicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShyb3cpXG4gICAgICAgIC5zZW5kKCk7XG59XG4iLCJpbXBvcnQge3NhdmVMZXZlbFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlTGV2ZWxTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgbGV2ZWxcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnLnVwZGF0ZS1yb3cnKTtcblxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnLnVwZGF0ZS1yb3cnKTtcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzLCBzYXZlQnV0dG9uKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsZXZlbHMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVMZXZlbFN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciBzaG93IGFzc2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93QXNzZXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IGFjdGlvbiA9IFNXT1dfQVNTRVRfUk9VVEUgKyAnP2lkPScgKyBjdXJyZW50RWxlbWVudC52YWwoKTtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdkYXRhJykpIHtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCduYW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtbmFtZScpLmh0bWwocmVzcG9uc2UuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5oYXNPd25Qcm9wZXJ0eSgncHJldmlld191cmwnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1wcmV2aWV3IGltZycpLmF0dHIoJ3NyYycsIHJlc3BvbnNlLmRhdGEucHJldmlld191cmwpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1wcmV2aWV3IC5saXN0LXRodW1ibmFpbCcpLmRhdGEoJ2Z1bGwnLCByZXNwb25zZS5kYXRhLnByZXZpZXdfdXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn1cbiIsIlxuaW1wb3J0IHtzaG93QXNzZXR9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dBc3NldFwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIFNob3cgYXNzZXRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuYXNzZXQnLCBzaG93QXNzZXQpXG5cbiAgICAiLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxvY2FsaXphdGlvbiBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGxldCB0Ym9keSA9ICQoJyNsb2NhbGl6YXRpb25zID4gdGJvZHknKTtcbiAgICBsZXQgdGVtcGxhdGUgPSAkKCcjbG9jYWxpemF0aW9uX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgdGJvZHkuYXBwZW5kKHRlbXBsYXRlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogUmVtb3ZlIG5vdCBzYXZlZCByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvdyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbGl6YXRpb25TdGF0ZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRCdG4uY2xvc2VzdCgndHInKTtcbiAgICBjb25zdCBjdXJyZW50S2V5ID0gcGFyZW50LmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykudmFsKCk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBkdXBsaWNhdGVkIGtleXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtqUXVlcnl9XG4gICAgICovXG4gICAgY29uc3QgY3VycmVudEtleUR1cGxpY2F0ZSA9ICQoJyNsb2NhbGl6YXRpb25zJykuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS5maWx0ZXIoKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRLZXkgPT09IGl0ZW0udmFsdWU7XG4gICAgfSk7XG4gICAgaWYgKGN1cnJlbnRLZXlEdXBsaWNhdGUubGVuZ3RoID4gMSl7XG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGtleSAnICsgY3VycmVudEtleX0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHBhcmVudC5maW5kKCcuZWRpdGFibGUgaW5wdXQnKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZUxvY2FsaXphdGlvblN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlTG9jYWxpemF0aW9uU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7cmVtb3ZlUm93fSBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxvY2FsaXphdGlvbnMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNyZWF0ZS1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZUxvY2FsaXphdGlvblN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtcm93JywgcmVtb3ZlUm93KTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21hZ2ljID4gdGJvZHknKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCdpbnB1dFtuYW1lPVwiaWRcIl0nKS52YWwoKTtcbiAgICAgICAgbGV0IGluY3JlbWVudElkID0gcGFyc2VJbnQobGFzdElEKSB8fCAwO1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI21hZ2ljX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVtYWdpY19pZCUvZywgKytpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIG1hZ2ljIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWFnaWNTdGF0ZSAoKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5tYWdpYy1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKTtcblxuICAgIGRhdGEuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAkKGl0ZW0pLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSlcbiAgICB9KTtcblxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVNYWdpY1N0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlTWFnaWNTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVNYWdpY1N0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCJpbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFNob3cgbGFzdCBtYWtldXAga2l0IElEXG4gKlxuICogQHBhcmFtIGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXG4gICAgICAgIC5zdWNjZXNzKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAkKCcjbGFzdC1tYWtldXAta2l0LWlkJylcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5tYWtldXBfa2l0X2lkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgZ2V0TGFzdE1ha2V1cEtpdElEIGZyb20gXCIuL2hhbmRsZXJzL2dldExhc3RNYWtldXBLaXRJRFwiO1xuXG4vKipcbiAqIFNob3cgbGFzdCBtYWtldXAga2l0IElEIGF0IHRoZSBib2R5IHBhcnRzIGdyaWRcbiAqL1xuJCgnI2dldC1sYXN0LW1ha2V1cC1raXQtaWQnKVxuICAgIC5jbGljayhnZXRMYXN0TWFrZXVwS2l0SUQpO1xuIiwiZXhwb3J0IGNvbnN0IE1BS0VVUF9LSVRfU0hPV19GT1JNID0gJ01BS0VVUF9LSVRfU0hPV19GT1JNJztcbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7TUFLRVVQX0tJVF9TSE9XX0ZPUk19IGZyb20gXCJtb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChNQUtFVVBfS0lUX1NIT1dfRk9STSkpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBpbmdyZWRpZW50IGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50X2dyb3Vwc190ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5ncm91cF9pZCcpLnRleHQoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbC1pbmdyZWRpZW50LWdyb3VwJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmdyZWRpZW50RGVsZXRlKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7aW5ncmVkaWVudERlbGV0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgaW5ncmVkaWVudERlbGV0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBpbmdyZWRpZW50IGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsX2luZ3JlZGllbnRzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50c190ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5pbmdyZWRpZW50X2lkJykudGV4dCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZ3JlZGllbnREZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIE1lYWwgSW5ncmVkaWVudHMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVNZWFsSW5ncmVkaWVudHNTdGF0ZSAoKSB7XG4gICAgbGV0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGxldCBkYXRhID0gJCgnLm1lYWwtaW5ncmVkaWVudHMtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKTtcblxuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtpbmdyZWRpZW50RGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlXCI7XG5pbXBvcnQge3NhdmVNZWFsSW5ncmVkaWVudHNTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGluZ3JlZGllbnREZWxldGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICovXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZU1lYWxJbmdyZWRpZW50c1N0YXRlKTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI21lYWxfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcubWVhbF9pZCcpLnRleHQoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIaWRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVhbERlbGV0ZSgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1lYWxTdGF0ZSAoKSB7XG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkXCIpO1xuICAgIGNvbnN0IGRhdGEgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHRib2R5LmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHttZWFsRGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9tZWFsRGVsZXRlXCI7XG5pbXBvcnQge3NhdmVNZWFsU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIG1lYWxEZWxldGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBtZWFsXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZU1lYWxTdGF0ZSgpXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKCcuc2F2ZS1wYWdlJyk7XG5cbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCdpbnB1dFtuYW1lPVwiYXdhcmRfaWRcIl0nKS52YWwoMCk7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcywgc2F2ZUJ1dHRvbikoKTtcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlTWVhbFN0YXRlKTtcbiIsImV4cG9ydCBjb25zdCBORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0gPSAnTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNJztcbiIsImNvbnN0IFRSQVNIID0gJ1RSQVNIJztcbmNvbnN0IFRSQVNIX0ZJRUxEU19JRCA9ICd0cmFzaC1maWVsZHMnO1xuY29uc3QgU0VMRUNUX0lEID0gJ25laWdoYm9yLWFjdGl2aXR5LXR5cGUtaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU0VMRUNUX0lEKTtcblxuICAgIGlmICghc2VsZWN0IHx8IHNlbGVjdC5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdC5vcHRpb25zLmxlbmd0aCAmJiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0pIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcblxuICAgICAgICBjb25zdCB0cmFzaEZpZWxkcyA9ICQoJyMnICsgVFJBU0hfRklFTERTX0lEKTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZEVsZW1lbnQudGV4dC50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlIFRSQVNIOlxuICAgICAgICAgICAgICAgIHRyYXNoRmllbGRzLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRyYXNoRmllbGRzLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0sIHNlbGYpO1xuXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcblxuICAgICAgICAkKCcubmVpZ2hib3ItYWN0aXZpdHktZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tICcuL2hhbmRsZXJzL2NoYW5nZVR5cGUnO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpXG4gICAgLm9uKCdjaGFuZ2UnLCAnLm5laWdoYm9yLWFjdGl2aXR5LXR5cGUnLCBjaGFuZ2VUeXBlKTtcblxuLyoqXG4gKiBSdW4gdGhlIHNob3cgZm9ybSBoYW5kbGVyLlxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXG4gKi9cbiQoJy5zaG93LWZvcm0nKVxuICAgIC5jbGljayhzaG93Rm9ybSk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2V0VGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcykuZmluZCgnYScpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/YWN0aXZlVGFiPVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9ICQoJ1tuYW1lPVwiY2F0ZWdvcnlcIl0nKS52YWwoKTtcbiAgICBjb25zdCBhc3NldF9pZHMgPSAkKCdbbmFtZT1cImFzc2V0c19pZHNcIl0nKTtcblxuICAgIGlmKCFhc3NldF9pZHMubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJ25sYS1hc3NpZ24nKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7YXNzZXRfaWRzOiBhc3NldF9pZHMudmFsKCksIGNhdGVnb3J5OiBjYXRlZ29yeX0pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGFzc2V0X2lkcy52YWwoJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMaXN0ICgpIHtcbiAgICBjb25zdCBhc3NldElkcyA9IFtdO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gJCgnW25hbWU9XCJjYXRlZ29yeVwiXScpLnZhbCgpO1xuICAgIGNvbnN0IGFzaWduTGlzdCA9ICQoJ3Rib2R5LGNvbnRhaW5lcicpLmZpbmQoJzpjaGVja2JveDpjaGVja2VkJyk7XG4gICAgYXNpZ25MaXN0LmVhY2goZnVuY3Rpb24gKGksIGFzc2V0SWQpIHtcbiAgICAgICAgYXNzZXRJZHMucHVzaCgkKGFzc2V0SWQpLmRhdGEoJ2Fzc2V0JykpXG4gICAgfSk7XG5cbiAgICBpZighYXNzZXRJZHMubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKSk7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe2Fzc2V0X2lkczogYXNzZXRJZHMsIGNhdGVnb3J5OiBjYXRlZ29yeX0pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGFzaWduTGlzdC5wcm9wKCBcImNoZWNrZWRcIiwgZmFsc2UgKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthc3NldFRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvYXNzZXRUYWJcIjtcbmltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcbmltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcbmltcG9ydCB7dXBkYXRlTGlzdH0gZnJvbSBcIi4vaGFuZGxlcnMvdXBkYXRlTGlzdFwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hc3NldC10YWInLCBhc3NldFRhYilcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNhdmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtYXNzaWduJywgdXBkYXRlTGlzdClcblxuICAgIC5vbignY2xpY2snLCAnLmFqYXgtc3VibWl0LWFjdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPicpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBubGEgbGlzdCBjYXRlZ29yeVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFzc2V0LWFzc2lnbicsIHNhdmVTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE5MQSBxdHlcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjcXR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXcgaHR0cCgnY2hhbmdlLXBlci1wYWdlJylcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe3JlY29yZF9wZXJfcGFnZTogJCh0aGlzKS52YWwoKX0pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgWyBoZWFkLCB0YWlsIF0gPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCAnPycgKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gaGVhZCArICc/JyArIHRhaWwucmVwbGFjZShuZXcgUmVnRXhwKGBwYWdlPVteJl0qfHBhZ2U9W14mXSomYCksICcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH0pO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCd0Ym9keS5jb250YWluZXInKTtcblxuICAgIGxldCBsYXN0SURTID0gW107XG4gICAgbGV0IGluY3JlbWVudElkID0gMTtcbiAgICB0Ym9keS5maW5kKFwidHJcIikuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBpZiAoJChpdGVtKS5kYXRhKCdpZCcpKSB7XG4gICAgICAgICAgICBsYXN0SURTLnB1c2goJChpdGVtKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChsYXN0SURTLmxlbmd0aCkge1xuICAgICAgICBpbmNyZW1lbnRJZCA9IChNYXRoLm1heC5hcHBseShNYXRoLCBsYXN0SURTKSArIDEpIHx8IDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWlkJS9nLCBpICsgaW5jcmVtZW50SWQpO1xuICAgICAgICB0Ym9keS5wcmVwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKTtcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkXCIpO1xuXG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2F2ZS1wYWdlJywgc2F2ZVN0YXRlKTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgndGJvZHkuY29udGFpbmVyJyk7XG5cbiAgICBsZXQgbGFzdElEUyA9IFtdO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IDE7XG4gICAgdGJvZHkuZmluZChcInRyXCIpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgaWYgKCQoaXRlbSkuZGF0YSgnaWQnKSkge1xuICAgICAgICAgICAgbGFzdElEUy5wdXNoKCQoaXRlbSkuZGF0YSgnaWQnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobGFzdElEUy5sZW5ndGgpIHtcbiAgICAgICAgaW5jcmVtZW50SWQgPSAoTWF0aC5tYXguYXBwbHkoTWF0aCwgbGFzdElEUykgKyAxKSB8fCAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVpZCUvZywgaSArIGluY3JlbWVudElkKTtcbiAgICAgICAgdGJvZHkucHJlcGVuZCh0ckxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLmNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWRcIik7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2F2ZS1wYWdlJywgc2F2ZVN0YXRlKTtcblxuIiwiZXhwb3J0IGNvbnN0IFBST0RVQ1RfU0hPV19GT1JNID0gJ1BST0RVQ1RfU0hPV19GT1JNJztcbiIsImltcG9ydCBDbGVhdmUgZnJvbSBcImNsZWF2ZS5qc1wiO1xuXG4vKipcbiAqIFByaWNlIGluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgbmV3IENsZWF2ZSh0aGlzLCB7XG4gICAgICAgIG51bWVyYWw6IHRydWUsXG4gICAgICAgIHByZWZpeDogJyQgJyxcbiAgICAgICAgcmF3VmFsdWVUcmltUHJlZml4OiB0cnVlLFxuICAgICAgICBvblZhbHVlQ2hhbmdlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KHBhcnNlRmxvYXQoZS50YXJnZXQucmF3VmFsdWUpICogMTAwKTtcbiAgICAgICAgICAgIGxldCBwcm9kdWN0UHJpY2UgPSAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgndGQnKS5maW5kKCcucHJvZHVjdC1wcmljZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHBhcnNlSW50KHByb2R1Y3RQcmljZS52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgLnZhbCh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59IiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge1BST0RVQ1RfU0hPV19GT1JNfSBmcm9tIFwibW9kdWxlcy9wcm9kdWN0L2NvbnN0YW50c1wiO1xuaW1wb3J0IHByaWNlSW5pdCBmcm9tIFwibW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdFwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpO1xuXG4vKipcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXG4gKi9cbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoUFJPRFVDVF9TSE9XX0ZPUk0pKTtcblxuLyoqXG4gKiBQcmljZSBmb3JtYXRcbiAqL1xuJCgnLnByb2R1Y3QtcHJpY2UtdmlldycpLmVhY2gocHJpY2VJbml0KTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIE5MQSBvcmRlclxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNvcmRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IGh0dHAoJ2NoYW5nZS1vcmRlcicpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHtvcmRlcjogJCh0aGlzKS52YWwoKX0pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTkxBIHF0eVxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNxdHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ldyBodHRwKCdjaGFuZ2UtcGVyLXBhZ2UnKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7cmVjb3JkX3Blcl9wYWdlOiAkKHRoaXMpLnZhbCgpfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbIGhlYWQsIHRhaWwgXSA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoICc/JyApO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBoZWFkICsgJz8nICsgdGFpbC5yZXBsYWNlKG5ldyBSZWdFeHAoYHBhZ2U9W14mXSp8cGFnZT1bXiZdKiZgKSwgJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfSk7XG4iLCJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqXG4gKiBAcGFyYW0gX1xuICogQHBhcmFtIGl0ZW1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKF8sIGl0ZW0pIHtcbiAgICBjb25zdCBkcm9wem9uZUNvbnRhaW5lciA9ICQoaXRlbSk7XG4gICAgY29uc3QgcHJldmlld0hpZGRlbklucHV0ID0gZHJvcHpvbmVDb250YWluZXIuZmluZCgnaW5wdXQnKTtcblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihpdGVtKVxuICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lQ29udGFpbmVyLmRhdGEoJ3VybCcpKVxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHByZXZpZXdcbiAgICAgKi9cbiAgICBpZiAoISFwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCkpIHtcbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAuc2V0UHJldmlldyhcbiAgICAgICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCksXG4gICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVDb250YWluZXIuZGF0YSgnZm9sZGVyJyksIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgKi9cbiAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbn0iLCJpbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuaW1wb3J0IGRyb3B6b25lSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9kcm9wem9uZUluaXRcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFR1cm5lZCBvZmYgdGhlIERyb3B6b25lIGF1dG8gaW5pdFxuICpcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5Ecm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKi9cbiQoJy5kcm9wem9uZScpLmVhY2goZHJvcHpvbmVJbml0KTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnLnVwZGF0ZS1yb3cnKTtcblxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnLnVwZGF0ZS1yb3cnKTtcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzLCBzYXZlQnV0dG9uKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0pIiwiY29uc3QgV0FMS19DQVRFR09SWSA9ICc2JztcbmNvbnN0IFJVTl9DQVRFR09SWSA9JzcnO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxlY3QyID0gJCgnLnRhYmxlJykuZmluZCgnLmVtYmVkLWdyb3VwIHNlbGVjdC5zZWxlY3QyJyk7XG4gICAgICAgIGxldCBzZWxlY3RWYWwgPSAwO1xuICAgICAgICBzZWxlY3QyLmVhY2goZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbCA9ICQoaSkudmFsKCk7XG4gICAgICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcbiAgICAgICAgICAgICAgICAkKGkpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChpKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNob3cgaGlkZSBzcGVlZCBvbiB0cmlnZ2VyIGFkZC1lbWJlZCBidXR0b25cbiAgICAgKi9cbiAgICAub24oJ2FpX2FuaW1hdGlvbicsICcuYWRkLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBlbWJlZCA9ICQodGhpcykuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdFZhbCA9IGVtYmVkLmZpbmQoJy5zZWxlY3QyJykudmFsKCk7XG4gICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgZW1iZWQuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW1iZWQuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNob3cgaGlkZSBzcGVlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gJChpdGVtLnRhcmdldCkudmFsKCk7XG4gICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSA9ICdTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNJztcbiIsIi8qKlxuICogQWRkIGEgbmV3IHNob3AgaW4gYSBkZXBhcnRtZW50cyBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgdGFibGUgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJy5zaG9wcy10YWJsZScpLmZpbmQoJ3Rib2R5Jyk7XG4gICAgY29uc3QgZGVwYXJ0bWVudElkID0gY3VycmVudEJ0bi5kYXRhKCdkZXBhcnRtZW50Jyk7XG4gICAgbGV0IGNvdW50ZXIgPSBwYXJzZUludChjdXJyZW50QnRuLmRhdGEoJ2NvdW50JykpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gJCgnI3Nob3AtdGVtcGxhdGUnKVxuICAgICAgICAuaHRtbCgpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVkZXBhcnRtZW50SWQlJywgXCJnXCIpLCBkZXBhcnRtZW50SWQpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVpbmRleCUnLCBcImdcIiksIGNvdW50ZXIrKyk7XG5cbiAgICBjdXJyZW50QnRuLmRhdGEoJ2NvdW50JywgY291bnRlcik7XG5cbiAgICB0YWJsZS5hcHBlbmQodGVtcGxhdGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZm9yIHNob3AgZGVwYXJ0bWVudFxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YU5hbWVQcmVmaXggPSAnc2hvcCc7XG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgZmFzdFNhdmVDb250YWluZXIgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJy5mYXN0LXNhdmUtY29udGFpbmVyJyk7XG5cbiAgICBpZiAoIWZhc3RTYXZlQ29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIGZhc3RTYXZlQ29udGFpbmVyLmZpbmQoJ3Rib2R5IHRyJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gZ2V0Rm9ybURhdGEoJCh0aGlzKSk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybURhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gYCR7ZGF0YU5hbWVQcmVmaXh9WyR7aW5kZXh9XVske2l9XWA7XG4gICAgICAgICAgICByZXN1bHRbaXRlbU5hbWVdID0gZm9ybURhdGFbaV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShyZXN1bHQpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFJhZGlvIGlucHV0IGZyb20gY2hlY2tib3hcbiAqIEJlY2F1c2UgaW5wdXRbdHlwZT1yYWRpb10gZGlkIG5vdCB3b3JrIGNvcnJlY3RseVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gY3VycmVudEl0ZW0uY2xvc2VzdCgnLnRhYmxlJykuZmluZCgnLnJhZGlvJyk7XG5cbiAgICBhbGxJdGVtcy5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgIGFsbEl0ZW1zLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XG5cbiAgICBjdXJyZW50SXRlbS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgY3VycmVudEl0ZW0uYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgU29ydGFibGUodGhpcywge1xuICAgICAgICBncm91cDogJ3Nob3BzJyxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICByYWRpbzogJChlLml0ZW0pLmZpbmQoJy5yYWRpbycpLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6ICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucGFyZW50LmZpbmQoJy5yYWRpby5jaGVja2VkOmd0KDApJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmFkaW8ucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSwgKCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlld1xuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVJbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwnKSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXcgU21hbGxcbiAgICAgICAgICovXG4gICAgICAgIGRyb3B6b25lSW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUtc21hbGwnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsLXNtYWxsJykpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIERyb3B6b25lIEluaXRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkcm9wem9uZUVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZpZXdVcmxFbGVtZW50XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRyb3B6b25lSW5pdChkcm9wem9uZUVsZW1lbnQsIHByZXZpZXdVcmxFbGVtZW50KSB7XG4gICAgaWYgKCFkcm9wem9uZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihkcm9wem9uZUVsZW1lbnQpXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgJChwcmV2aWV3VXJsRWxlbWVudCkudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAkKHByZXZpZXdVcmxFbGVtZW50KS52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICQoZHJvcHpvbmVFbGVtZW50KS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlID0gcmVzcG9uc2UuZmlsZV9uYW1lO1xuICAgICAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNldCBwcmV2aWV3XG4gICAgICovXG4gICAgaWYgKHByZXZpZXdVcmxFbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LmZvbGRlciwgcHJldmlld1VybEVsZW1lbnQudmFsdWUpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICovXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG59IiwiaW1wb3J0IGFkZFNob3AgZnJvbSBcIi4vaGFuZGxlcnMvYWRkU2hvcFwiO1xuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XG5pbXBvcnQgcmFkaW9JbnB1dCBmcm9tIFwiLi9oYW5kbGVycy9yYWRpb0lucHV0XCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5pbXBvcnQgc29ydGFibGVJbml0IGZyb20gXCJtb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKi9cbnNob3dGb3JtKCk7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogUmFkaW8gYnV0dG9ucyBiZWhhdmlvclxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5yYWRpbycsIHJhZGlvSW5wdXQpXG5cbiAgICAvKipcbiAgICAgKiBEb2N1bWVudCByZWFkeVxuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgY2xhc3MgdG8gY2hlY2tlZCByYWRpb3NcbiAgICAgICAgICovXG4gICAgICAgICQoJy5yYWRpb1tjaGVja2VkXScpLmFkZENsYXNzKCdjaGVja2VkJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhIG5ldyBzaG9wIGluIGEgZGVwYXJ0bWVudHMgZ3JpZFxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmFkZC1zaG9wJykuY2xpY2soYWRkU2hvcCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZhc3Qgc2F2ZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmZhc3Qtc2F2ZS1zaG9wcycpLmNsaWNrKGZhc3RTYXZlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSB0ciB0byBzb3J0YWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI3JlbGVhc2UgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNyZWxlYXNlX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLnJlbGVhc2VfaWQnKS52YWwoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVyZWxlYXNlJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG5cbiAgICAgICAgdGJvZHkuZmluZCgnLmRhdGV0aW1lcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBhZ2UgKCkge1xuICAgIGNvbnN0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWRcIik7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5yZWxlYXNlLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3QsIC5jaGFuZ2VkIHRleHRhcmVhXCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgdGJvZHkuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVQYWdlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICovXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZVBhZ2UpO1xuIiwiJChkb2N1bWVudClcblxuICAgIC5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgndGQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKCQodGhpcykuYXR0cignc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZCcsICcjZTdlN2U3Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjc291bmQgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNzb3VuZF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5zb3VuZF9pZCcpLnZhbCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXNvdW5kX2lkJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU291bmRTdGF0ZSAoKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5zb3VuZC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCkge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU291bmRTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVNvdW5kU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU291bmRTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEZpbmQgVXNlclxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFVzZXIoKSB7XG4gICAgY29uc3QgcHJlZml4ID0gJCh0aGlzKS5kYXRhKCdwcmVmaXgnKTtcbiAgICBjb25zdCBkYXRhID0ge3VpZDogJCgnIycgKyBwcmVmaXgpLnZhbCgpLCBuYW1lOiAkKCcjJyArIHByZWZpeCArICdfbmFtZScpLnZhbCgpLCBwcmVmaXg6IHByZWZpeH07XG4gICAgY29uc3QgdXNlcl90ZW1wbGF0ZSA9ICQoJyN1c2VyX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGluc2VydF9ibG9jayA9ICQoJyMnICsgcHJlZml4ICsgJ19saXN0Jyk7XG5cbiAgICBpZiAoIWRhdGEudWlkLmxlbmd0aCAmJiAhZGF0YS5uYW1lLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBmaW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgJChyZXNwb25zZS51c2VycykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmNsb3Nlc3QoJ3RhYmxlJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS10YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suYXBwZW5kKHVzZXJfdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8ldXNlcl9pZCUvZywgaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclcGV0X25hbWUlJywgaXRlbS5wZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXVzZXJfbmFtZSUnLCBpdGVtLmZpcnN0X25hbWUgKyAnICcgKyBpdGVtLmxhc3RfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclbGV2ZWwlJywgaXRlbS54cClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclYXZhdGFyJScsIGl0ZW0uYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyV0YXJnZXQlL2csIHByZWZpeClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFNlbmQgR2lmdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZEdpZnQgKCkge1xuICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjc2VuZCcpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgfSwgMzAwMCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcjc2VuZC1jb250YWluZXInKTtcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBjb250YWluZXIuZmluZChcImlucHV0LCB0ZXh0YXJlYVwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoIWZvcm1JdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2VuZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGZvcm1JdGVtcylcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZighIXJlc3BvbnNlLmVycm9ycyl7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAkKCcudGFibGUnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlX2xlbmd0aCA9ICQoJyNtZXNzYWdlX2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2xlbmd0aC50ZXh0KG1lc3NhZ2VfbGVuZ3RoLmRhdGEoJ2xlbmd0aCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NlbmRHaWZ0fSBmcm9tIFwiLi9oYW5kbGVycy9zZW5kR2lmdFwiO1xuaW1wb3J0IHtmaW5kVXNlcn0gZnJvbSBcIi4vaGFuZGxlcnMvZmluZFVzZXJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2ZpbmRfc2VuZGVyLCAjZmluZF9yZWNlaXZlcicsIGZpbmRVc2VyKVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjc2VuZCcsIHNlbmRHaWZ0KVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50YWJsZSB0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgJCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpICsgJ191aWQnKS52YWwoJCh0aGlzKS5kYXRhKCd1aWQnKSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGxpbWl0IGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ3RleHRhcmVhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5yZXBsYWNlKCdsb290X2RhdGFbJywgJycpLnJlcGxhY2UoJ10nLCAnJykgKyAnX2xlbmd0aCc7XG4gICAgICAgICQoJyMnICsgdGFyZ2V0KS50ZXh0KCQodGhpcykuZGF0YSgnbWF4bGVuZ3RoJykgLSAkKHRoaXMpLnZhbCgpLmxlbmd0aCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgc2VsZWN0ZWQgYXNzZXRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNhc3NldHNfbGlzdCBpbWcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNhc3NldHNfbGlzdCcpLmZpbmQoJ2ltZycpLmNzcygnYm9yZGVyJywgJycpO1xuICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyJywgJzJweCBzb2xpZCAjYzFjMWMxJyk7XG4gICAgICAgICQoJyNhc3NldF9pZCcpLnZhbCgkKHRoaXMpLmRhdGEoJ3ByaXplJykpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50ZXJlZCBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjY2FuY2VsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcudGFibGUnKS5oaWRlKCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEnKS52YWwoJycpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlZGlyZWN0XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucmVkaXJlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgncm91dGUnKVxuICAgIH0pO1xuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIuc3BlY2lhbC1wcml6ZS1zYXZlLWNvbnRhaW5lciBsYWJlbDpjb250YWlucygnTGltaXQnKVwiKS5jc3MoJ3BhZGRpbmcnLCAwKS5odG1sKFwiQXZhaWxhYmxlXCIpO1xuICAgICAgICAkKCcuc3BlY2lhbC1wcml6ZS1zYXZlLWNvbnRhaW5lciBpbnB1dCcpLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSkuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgJCgnLmFkZC1lbWJlZCwgLnJlbW92ZS1lbWJlZCcpLnJlbW92ZSgpO1xuXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENvcHkgaWRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKS5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpO1xuXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBUQU1BVE9PTF9TSE9XX0ZPUk0gPSAnVEFNQVRPT0xfU0hPV19GT1JNJztcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1RBTUFUT09MX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFRBTUFUT09MX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCBzZWxmKTtcblxuICAgICAgICAkKCcubmVpZ2hib3ItYWN0aXZpdHktZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XG5cbi8qKlxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxuICovXG4kKCcuc2hvdy1mb3JtJylcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBGaW5kIFVzZXJcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRVc2VyKCkge1xuICAgIGNvbnN0IHByZWZpeCA9ICQodGhpcykuZGF0YSgncHJlZml4Jyk7XG4gICAgY29uc3QgZGF0YSA9IHt1aWQ6ICQoJyMnICsgcHJlZml4KS52YWwoKSwgbmFtZTogJCgnIycgKyBwcmVmaXggKyAnX25hbWUnKS52YWwoKSwgcHJlZml4OiBwcmVmaXh9O1xuICAgIGNvbnN0IHVzZXJfdGVtcGxhdGUgPSAkKCcjdXNlcl90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBpbnNlcnRfYmxvY2sgPSAkKCcjJyArIHByZWZpeCArICdfbGlzdCcpO1xuXG4gICAgaWYgKCFkYXRhLnVpZC5sZW5ndGggJiYgIWRhdGEubmFtZS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gZmluZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgICQocmVzcG9uc2UudXNlcnMpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5jbG9zZXN0KCd0YWJsZScpLmNzcygnZGlzcGxheScsICdpbmxpbmUtdGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmFwcGVuZCh1c2VyX3RlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJXVzZXJfaWQlL2csIGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXBldF9uYW1lJScsIGl0ZW0ucGV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyV1c2VyX25hbWUlJywgaXRlbS5maXJzdF9uYW1lICsgJyAnICsgaXRlbS5sYXN0X25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJWxldmVsJScsIGl0ZW0ueHApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJWF2YXRhciUnLCBpdGVtLmF2YXRhcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8ldGFyZ2V0JS9nLCBwcmVmaXgpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBTZW5kIEdpZnRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRHaWZ0ICgpIHtcbiAgICAkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI3NlbmQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH0sIDMwMDApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnI3Ryb3BoeS1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiaW5wdXQsIHRleHRhcmVhXCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzZW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZm9ybUl0ZW1zKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKXtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0cm9waHlfY3Vwc19jb3VudCA9ICQoJyN0cm9waHlfY3Vwc19jb3VudCcpO1xuICAgICAgICAgICAgICAgICAgICB0cm9waHlfY3Vwc19jb3VudC50ZXh0KHBhcnNlSW50KHRyb3BoeV9jdXBzX2NvdW50LnRleHQoKSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRhYmxlJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjdHJvcGh5LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhJykudmFsKCcnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9sZW5ndGggPSAkKCcjbmV3c19tZXNzYWdlX2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2xlbmd0aC50ZXh0KG1lc3NhZ2VfbGVuZ3RoLmRhdGEoJ2xlbmd0aCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NlbmRHaWZ0fSBmcm9tIFwiLi9oYW5kbGVycy9zZW5kR2lmdFwiO1xuaW1wb3J0IHtmaW5kVXNlcn0gZnJvbSBcIi4vaGFuZGxlcnMvZmluZFVzZXJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2ZpbmRfc2VuZGVyLCAjZmluZF9yZWNlaXZlcicsIGZpbmRVc2VyKVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjc2VuZCcsIHNlbmRHaWZ0KVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50YWJsZSB0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgJCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpICsgJ191aWQnKS52YWwoJCh0aGlzKS5kYXRhKCd1aWQnKSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGxpbWl0IGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ3RleHRhcmVhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5yZXBsYWNlKCdjdXBfZGF0YVsnLCAnJykucmVwbGFjZSgnXScsICcnKSArICdfbGVuZ3RoJztcbiAgICAgICAgJCgnIycgKyB0YXJnZXQpLnRleHQoJCh0aGlzKS5kYXRhKCdtYXhsZW5ndGgnKSAtICQodGhpcykudmFsKCkubGVuZ3RoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVudGVyZWQgZGF0YVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2NhbmNlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnRhYmxlJykuaGlkZSgpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhJykudmFsKCcnKVxuICAgIH0pO1xuIiwiXG4vKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgaWQ6ICd0cm9waHktY3VwLXVzZXJzJ1xuICAgIH0sICdUcm9waHkgY3VwIHVzZXJzJywgdXJsKTtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLnRyb3BoeS1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWRcIik7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5pbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pO1xuIiwiZXhwb3J0IGNvbnN0IFNFQVJDSF9VU0VSX0FTU0VUUyA9ICdTRUFSQ0hfVVNFUl9BU1NFVFMnO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9VU0VSX1BBUlRfRk9STSA9ICdTVUJNSVRfVVNFUl9QQVJUX0ZPUk0nO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ORUlHSEJPUiA9ICdERUxFVEVfTkVJR0hCT1InO1xuZXhwb3J0IGNvbnN0IEFERF9ORUlHSEJPUiA9ICdBRERfTkVJR0hCT1InOyIsIi8qKlxuICogQ2hhbmdlIHBsYWNlbWVudCBzZWxlY3QgaW4gQWRkIEFzc2V0cyBibG9ja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGxhY2VtZW50TmFtZSA9ICQoJyNwbGFjZW1lbnQtbmFtZScpO1xuICAgIGlmICgkKHRoaXMpLnZhbCgpID4gMCkge1xuICAgICAgICBwbGFjZW1lbnROYW1lLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2VtZW50TmFtZS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5laWdoYm9yc0NvdW50ID0gJCgnI25laWdoYm9ycy1jb3VudCcpO1xuICAgIGlmKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgbmVpZ2hib3JzQ291bnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZWlnaGJvcnNDb3VudC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5sb2FkLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgY3VycmVudEVsZW1lbnQuZGF0YSgncGxhY2VtZW50JykpLmh0bWwoJycpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgLSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAqIEluaXRlZCBpbiB1c2VyL2VkaXQuYmxhZGUucGhwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCBwbGFjZW1lbnQgPSBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKTtcblxuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5oaWRlLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG5cbiAgICBsb2FkUGFydChQTEFDRU1FTlRfQVNTRVRTX1JPVVRFICsgJz9wbGFjZW1lbnQ9JyArIHBsYWNlbWVudCwgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgcGxhY2VtZW50KSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTG9hZCBwYXJ0IGZvciBlZGl0IHVzZXIgcGFnZVxuICovXG5mdW5jdGlvbiBsb2FkUGFydChhY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gJChyZXNwb25zZSk7XG4gICAgICAgICAgICBpdGVtcy5maW5kKCcubGlzdC10aHVtYm5haWwnKS5wb3BvdmVyKHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cIicgKyAkKHRoaXMpLmRhdGEoJ2Z1bGwnKSArICdcIj4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChpdGVtcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59IiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUREX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IG5laWdoYm9yIGFzIGFjdGl2ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFERF9ORUlHSEJPUiwgcmVzcCA9PiB7XG4gICAgICAgIGlmIChyZXNwLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAkKCcjZGVsZXRlLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNhZGQtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI25laWdoYm9yLXN0YXR1cy0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5odG1sKHJlc3AuZGF0YS5zdGF0dXNfdGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0RFTEVURV9ORUlHSEJPUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNldCBuZWlnaGJvciBhcyBkZWxldGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoREVMRVRFX05FSUdIQk9SLCByZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3AudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjbmVpZ2hib3Itc3RhdHVzLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmh0bWwocmVzcC5kYXRhLnN0YXR1c190ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7U0VBUkNIX1VTRVJfQVNTRVRTfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2VhcmNoIHVzZXIgYXNzZXRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0VBUkNIX1VTRVJfQVNTRVRTLCBkYXRhID0+IHtcbiAgICAgICAgJCgnI3NlYXJjaC1hc3NldHMtY29udGFpbmVyJykuaHRtbChkYXRhKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuaW1wb3J0IHtTVUJNSVRfVVNFUl9QQVJUX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTdWJtaXQgdXNlciBwYXJ0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTVUJNSVRfVVNFUl9QQVJUX0ZPUk0sIHJlc3AgPT4ge1xuICAgICAgICBsZXQgZm9ybSA9ICQocmVzcC5kYXRhKTtcbiAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XG4gICAgICAgIGZvcm0uZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgICAgIG5vdGlmeVN1Y2Nlc3MoJ1VzZXIgZGF0YSB1cGRhdGVkJyk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc2VhcmNoVXNlckFzc2V0cyBmcm9tIFwiLi9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0c1wiO1xuaW1wb3J0IHN1Ym1pdFVzZXJQYXJ0Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc3VibWl0VXNlclBhcnRGb3JtXCI7XG5pbXBvcnQgZGVsZXRlTmVpZ2hib3IgZnJvbSBcIi4vbGlzdGVuZXJzL2RlbGV0ZU5laWdoYm9yXCI7XG5pbXBvcnQgYWRkTmVpZ2hib3IgZnJvbSBcIi4vbGlzdGVuZXJzL2FkZE5laWdoYm9yXCI7XG5pbXBvcnQgbG9hZFBsYWNlbWVudEFzc2V0cyBmcm9tIFwiLi9oYW5kbGVycy9sb2FkUGxhY2VtZW50QXNzZXRzXCI7XG5pbXBvcnQgaGlkZVBsYWNlbWVudEFzc2V0cyBmcm9tIFwiLi9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzXCI7XG5pbXBvcnQgY2hhbmdlUGxhY2VtZW50IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVBsYWNlbWVudFwiO1xuaW1wb3J0IGNoYW5nZVJhbmRvbU5laWdoYm9ycyBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnNcIjtcbmltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLyoqXG4gKiBTZWFyY2ggdXNlciBhc3NldHMgbGlzdGVuZXJcbiAqL1xuc2VhcmNoVXNlckFzc2V0cygpO1xuXG4vKipcbiAqIFN1Ym1pdCB1c2VyIHBhcnQgZm9ybSBsaXN0ZW5lclxuICovXG5zdWJtaXRVc2VyUGFydEZvcm0oKTtcblxuLyoqXG4gKiBEZWxldGUgTmVpZ2hib3JcbiAqL1xuZGVsZXRlTmVpZ2hib3IoKTtcblxuLyoqXG4gKiBBZGQgTmVpZ2hib3JcbiAqL1xuYWRkTmVpZ2hib3IoKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIExvYWQgYXNzZXRzIGluIHBsYWNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmxvYWQtYXNzZXRzJywgbG9hZFBsYWNlbWVudEFzc2V0cylcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBwbGFjZW1lbnQgaW4gQWRkIEFzc2V0cyBibG9ja1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNwbGFjZW1lbnQtZm9yLWFzc2V0JywgY2hhbmdlUGxhY2VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjaXMtcmFuZG9tLW5laWdoYm9ycycsIGNoYW5nZVJhbmRvbU5laWdoYm9ycylcblxuICAgIC8qKlxuICAgICAqIEhpZGUgYXNzZXRzIGluIHBsYWNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtYXNzZXRzJywgaGlkZVBsYWNlbWVudEFzc2V0cyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
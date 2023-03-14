/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\r\n\tbox-sizing:border-box;\r\n\tmargin: 0;\r\n}\r\n\r\nbody {\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\tbackground-size: cover;\r\n\tbackground-attachment: fixed;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\tcolor:white;\r\n\tpadding:0;\r\n\tmargin:0;\r\n\toverflow-x:hidden;\r\n}\r\n\r\n.temperature {\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.overlay {\r\n\tposition: absolute;\r\n\tinset: 0;\r\n\tbackground:rgba(0,0,0,0.2);\r\n\theight:100%;\r\n}\r\n\r\n.page-content {\r\n\tposition:relative;\r\n\tmargin:0 auto;\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 340px 1fr;\r\n\tmin-height:100vh;\r\n}\t\r\n\r\n.main-container, .info-container {\r\n\tpadding:40px 40px;\r\n}\r\n\t\r\n.main-container {\r\n\tbackground:rgba(0,0,0,0.8);\r\n\twidth:100%;\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:60px;\r\n}\r\n\r\n#city-name {\r\n\tcolor: #a5a5a5;\r\n}\r\n\r\n.main-weather-details {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n#weather-desc {\r\n\ttext-align: right;\r\n}\r\n\r\n\r\n.main-weather-details > * {\r\n\tborder-block-end: 1px solid #828282;\r\n\tpadding:12px 0;\r\n\tfont-size: 17px;\r\n\twidth:100%;\r\n}\r\n\r\n.weather-column {\r\n\tdisplay:flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\nh1 {\r\n\tfont-size:48px;\r\n\tfont-weight: 900;\r\n}\r\n\r\nh2 {\r\n\tfont-size:28px;\r\n}\r\n\r\n.search-container {\r\n\ttext-align:center;\r\n\tposition:relative;\r\n}\r\n\r\n#search {\r\n\tborder:none;\r\n\tborder-block-end: 1px solid white;\r\n\tpadding:10px 15px;\r\n\tbackground:none;\r\n\twidth:100%;\r\n\toutline:none;\r\n\tcolor:white;\r\n}\r\n\r\n.search-icon {\r\n\tposition: absolute;\r\n\tright:5%;\r\n\tbottom:0;\r\n\ttransform: translate(0,-50%);\r\n\tfont-size: 15px;\r\n}\r\n\r\n#search::placeholder {\r\n\tcolor:#ccc;\r\n}\r\n\r\n.info-container {\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n\tgap:20px;\r\n}\r\n\r\n.button-container {\r\n\tdisplay:flex;\r\n\tgap:10px;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.toggle-container {\r\n\twidth:50px;\r\n\theight:20px;\r\n\tborder-radius:12px;\r\n\tbackground:white;\r\n\tposition:relative;\r\n\tborder:1px solid white;\r\n\ttransition: all .3s ease-in-out;\r\n}\r\n\r\n.toggle-container:hover {\r\n\tcursor:pointer;\r\n}\r\n\r\n.toggle {\r\n\tposition:absolute;\r\n\theight:100%;\r\n\twidth:20px;\r\n\ttransform: scale(1.2);\r\n\tbox-shadow: 0 0 .5em rgba(0,0,0,0.5);\r\n\tbackground:black;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius:12px;\r\n}\r\n\r\n.farenheit {\r\n\tright:0;\r\n}\r\n\r\n.forecast-container {\r\n\tbackground:white;\r\n\tcolor: black;\r\n\tborder-radius:12px;\r\n\tpadding:20px;\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:20px;\r\n\tbox-shadow:0 0 1em rgba(0,0,0,0.3);\r\n}\r\n\r\n.forecast-tab-container {\r\n\tborder-bottom: 1px solid #ccc;\r\n\tdisplay:flex;\r\n\tgap:20px;\r\n\tpadding:0 16px 10px;\r\n\tfont-size:16px;\r\n\tfont-weight: 700;\r\n\tcolor:#a3a3a3;\r\n}\r\n\r\n.daily {\r\n\tdisplay:flex;\r\n\tgap:20px;\r\n}\r\n\r\n.hour-container {\r\n\tflex:1;\r\n}\r\n\r\n.hourly {\r\n\tdisplay:grid;\r\n\tgrid-template-columns: repeat(2, 1fr);\r\n\tgrid-gap:40px 20px;\r\n}\r\n\r\n.forecast-card {\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n\ttext-align:center;\r\n\tflex:1;\r\n\r\n\tbox-shadow: 0 0 0.3em rgba(0,0,0,0.3);\r\n\tpadding:12px;\r\n\tborder-radius:12px;\r\n}\r\n\r\n.hour-card {\r\n\tpadding:20px;\r\n\tfont-size:16px;\r\n\tborder:1px solid #ccc;\r\n\tdisplay: flex;\r\n\tjustify-content:space-between;\r\n}\r\n\r\n@media (max-width: 800px){\r\n\r\n.page-content {\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 1fr;\r\n}\r\n\r\n.overlay {\r\n\theight:0;\r\n}\r\n\r\n.forecast-card {\r\n\tdisplay:grid;\r\n\tgrid-template-columns: repeat(2, 1fr);\r\n\tgap:30px;\r\n}\r\n\r\n.weekday {\r\n\tgrid-column: 1/-1;\r\n}\r\n\r\n.main-container {\r\n\tpadding:60px 20px;\r\n\tgap: 15px;\r\n}\r\n\r\n.info-container {\r\n\tpadding:5px;\r\n\tgap:5px;\r\n}\r\n\r\n.forecast-container {\r\n\tborder-radius: 0;\r\n\twidth:100vw;\r\n}\r\n\r\n.daily {\r\n\tdisplay:flex;\r\n\tflex-direction: row;\r\n\tgap:0;\r\n\tborder: none;\r\n\toverflow-x: auto;\r\n}\r\n\r\n.forecast-card {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.hourly {\r\n\tgrid-template-columns: 1fr;\r\n}\r\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,SAAS;AACV;;AAEA;CACC,mDAA0C;CAC1C,sBAAsB;CACtB,4BAA4B;CAC5B,kCAAkC;CAClC,WAAW;CACX,SAAS;CACT,QAAQ;CACR,iBAAiB;AAClB;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,0BAA0B;CAC1B,WAAW;AACZ;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,YAAY;CACZ,gCAAgC;CAChC,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,0BAA0B;CAC1B,UAAU;CACV,YAAY;CACZ,sBAAsB;CACtB,QAAQ;AACT;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,YAAY;CACZ,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;AAClB;;;AAGA;CACC,mCAAmC;CACnC,cAAc;CACd,eAAe;CACf,UAAU;AACX;;AAEA;CACC,YAAY;CACZ,8BAA8B;AAC/B;;AAEA;CACC,cAAc;CACd,gBAAgB;AACjB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,iCAAiC;CACjC,iBAAiB;CACjB,eAAe;CACf,UAAU;CACV,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,QAAQ;CACR,4BAA4B;CAC5B,eAAe;AAChB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,YAAY;CACZ,qBAAqB;CACrB,QAAQ;AACT;;AAEA;CACC,YAAY;CACZ,QAAQ;CACR,qBAAqB;AACtB;;AAEA;CACC,UAAU;CACV,WAAW;CACX,kBAAkB;CAClB,gBAAgB;CAChB,iBAAiB;CACjB,sBAAsB;CACtB,+BAA+B;AAChC;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,WAAW;CACX,UAAU;CACV,qBAAqB;CACrB,oCAAoC;CACpC,gBAAgB;CAChB,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,gBAAgB;CAChB,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,YAAY;CACZ,sBAAsB;CACtB,QAAQ;CACR,kCAAkC;AACnC;;AAEA;CACC,6BAA6B;CAC7B,YAAY;CACZ,QAAQ;CACR,mBAAmB;CACnB,cAAc;CACd,gBAAgB;CAChB,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,QAAQ;AACT;;AAEA;CACC,MAAM;AACP;;AAEA;CACC,YAAY;CACZ,qCAAqC;CACrC,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,qBAAqB;CACrB,iBAAiB;CACjB,MAAM;;CAEN,qCAAqC;CACrC,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,cAAc;CACd,qBAAqB;CACrB,aAAa;CACb,6BAA6B;AAC9B;;AAEA;;AAEA;CACC,YAAY;CACZ,0BAA0B;AAC3B;;AAEA;CACC,QAAQ;AACT;;AAEA;CACC,YAAY;CACZ,qCAAqC;CACrC,QAAQ;AACT;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,SAAS;AACV;;AAEA;CACC,WAAW;CACX,OAAO;AACR;;AAEA;CACC,gBAAgB;CAChB,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,mBAAmB;CACnB,KAAK;CACL,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,0BAA0B;AAC3B;AACA","sourcesContent":["*, *::before, *::after {\r\n\tbox-sizing:border-box;\r\n\tmargin: 0;\r\n}\r\n\r\nbody {\r\n\tbackground: url('./assets/background.jpg');\r\n\tbackground-size: cover;\r\n\tbackground-attachment: fixed;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\tcolor:white;\r\n\tpadding:0;\r\n\tmargin:0;\r\n\toverflow-x:hidden;\r\n}\r\n\r\n.temperature {\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.overlay {\r\n\tposition: absolute;\r\n\tinset: 0;\r\n\tbackground:rgba(0,0,0,0.2);\r\n\theight:100%;\r\n}\r\n\r\n.page-content {\r\n\tposition:relative;\r\n\tmargin:0 auto;\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 340px 1fr;\r\n\tmin-height:100vh;\r\n}\t\r\n\r\n.main-container, .info-container {\r\n\tpadding:40px 40px;\r\n}\r\n\t\r\n.main-container {\r\n\tbackground:rgba(0,0,0,0.8);\r\n\twidth:100%;\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:60px;\r\n}\r\n\r\n#city-name {\r\n\tcolor: #a5a5a5;\r\n}\r\n\r\n.main-weather-details {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n#weather-desc {\r\n\ttext-align: right;\r\n}\r\n\r\n\r\n.main-weather-details > * {\r\n\tborder-block-end: 1px solid #828282;\r\n\tpadding:12px 0;\r\n\tfont-size: 17px;\r\n\twidth:100%;\r\n}\r\n\r\n.weather-column {\r\n\tdisplay:flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\nh1 {\r\n\tfont-size:48px;\r\n\tfont-weight: 900;\r\n}\r\n\r\nh2 {\r\n\tfont-size:28px;\r\n}\r\n\r\n.search-container {\r\n\ttext-align:center;\r\n\tposition:relative;\r\n}\r\n\r\n#search {\r\n\tborder:none;\r\n\tborder-block-end: 1px solid white;\r\n\tpadding:10px 15px;\r\n\tbackground:none;\r\n\twidth:100%;\r\n\toutline:none;\r\n\tcolor:white;\r\n}\r\n\r\n.search-icon {\r\n\tposition: absolute;\r\n\tright:5%;\r\n\tbottom:0;\r\n\ttransform: translate(0,-50%);\r\n\tfont-size: 15px;\r\n}\r\n\r\n#search::placeholder {\r\n\tcolor:#ccc;\r\n}\r\n\r\n.info-container {\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n\tgap:20px;\r\n}\r\n\r\n.button-container {\r\n\tdisplay:flex;\r\n\tgap:10px;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.toggle-container {\r\n\twidth:50px;\r\n\theight:20px;\r\n\tborder-radius:12px;\r\n\tbackground:white;\r\n\tposition:relative;\r\n\tborder:1px solid white;\r\n\ttransition: all .3s ease-in-out;\r\n}\r\n\r\n.toggle-container:hover {\r\n\tcursor:pointer;\r\n}\r\n\r\n.toggle {\r\n\tposition:absolute;\r\n\theight:100%;\r\n\twidth:20px;\r\n\ttransform: scale(1.2);\r\n\tbox-shadow: 0 0 .5em rgba(0,0,0,0.5);\r\n\tbackground:black;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius:12px;\r\n}\r\n\r\n.farenheit {\r\n\tright:0;\r\n}\r\n\r\n.forecast-container {\r\n\tbackground:white;\r\n\tcolor: black;\r\n\tborder-radius:12px;\r\n\tpadding:20px;\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:20px;\r\n\tbox-shadow:0 0 1em rgba(0,0,0,0.3);\r\n}\r\n\r\n.forecast-tab-container {\r\n\tborder-bottom: 1px solid #ccc;\r\n\tdisplay:flex;\r\n\tgap:20px;\r\n\tpadding:0 16px 10px;\r\n\tfont-size:16px;\r\n\tfont-weight: 700;\r\n\tcolor:#a3a3a3;\r\n}\r\n\r\n.daily {\r\n\tdisplay:flex;\r\n\tgap:20px;\r\n}\r\n\r\n.hour-container {\r\n\tflex:1;\r\n}\r\n\r\n.hourly {\r\n\tdisplay:grid;\r\n\tgrid-template-columns: repeat(2, 1fr);\r\n\tgrid-gap:40px 20px;\r\n}\r\n\r\n.forecast-card {\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n\ttext-align:center;\r\n\tflex:1;\r\n\r\n\tbox-shadow: 0 0 0.3em rgba(0,0,0,0.3);\r\n\tpadding:12px;\r\n\tborder-radius:12px;\r\n}\r\n\r\n.hour-card {\r\n\tpadding:20px;\r\n\tfont-size:16px;\r\n\tborder:1px solid #ccc;\r\n\tdisplay: flex;\r\n\tjustify-content:space-between;\r\n}\r\n\r\n@media (max-width: 800px){\r\n\r\n.page-content {\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 1fr;\r\n}\r\n\r\n.overlay {\r\n\theight:0;\r\n}\r\n\r\n.forecast-card {\r\n\tdisplay:grid;\r\n\tgrid-template-columns: repeat(2, 1fr);\r\n\tgap:30px;\r\n}\r\n\r\n.weekday {\r\n\tgrid-column: 1/-1;\r\n}\r\n\r\n.main-container {\r\n\tpadding:60px 20px;\r\n\tgap: 15px;\r\n}\r\n\r\n.info-container {\r\n\tpadding:5px;\r\n\tgap:5px;\r\n}\r\n\r\n.forecast-container {\r\n\tborder-radius: 0;\r\n\twidth:100vw;\r\n}\r\n\r\n.daily {\r\n\tdisplay:flex;\r\n\tflex-direction: row;\r\n\tgap:0;\r\n\tborder: none;\r\n\toverflow-x: auto;\r\n}\r\n\r\n.forecast-card {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.hourly {\r\n\tgrid-template-columns: 1fr;\r\n}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/DOM.js":
/*!***********************!*\
  !*** ./src/js/DOM.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/js/weather.js");


const DOM = (() => {
	const search = document.querySelector('#searchCity');
	const searchInput = search.querySelector('#search');
	const cityName = document.querySelector('#city-name');
	const weatherDesc = document.querySelector('#weather-desc');
	const rainChance = document.querySelector('#rain-chance');
	const feelsLike = document.querySelector('#feels-like');
	const temperature = document.querySelector('#temperature');
	const humidity = document.querySelector('#humidity');
	const date = document.querySelector('#date');
	const forecastDaily = document.querySelector('.daily');
	const forecastHourly = document.querySelector('.hourly');
	const toggleContainer = document.querySelector('.toggle-container');
	const toggle = toggleContainer.querySelector('.toggle');

	let unitCode = "°C";
	let city = 'Philippines';

	const toggleReading = () => {
		unitCode = unitCode === "°C" ? "°F" : "°C";
		toggle.classList.toggle('farenheit');
		toggleContainer.classList.toggle('farenheit-container');
		displayData(city);
	};

	const getWeatherIcon = (iconcode, container) => {
		const img = document.createElement('img');
		img.src = `https://openweathermap.org/img/w/${iconcode}.png`;
		img.classList.add('weather-icon');
		container.appendChild(img);
	};

	const resetForecastContainer = (element) => {
		while(element.lastChild) {
			element.removeChild(element.firstChild);
		}
	};

	const createForecastCard = (weather, idx) => {
		const div = document.createElement('div');
		div.classList.add('forecast-card');

		const date = document.createElement('p');
		date.classList.add('weekday');
		date.textContent = idx === 0 ? "Today" : weather.date;
		
		const imgContainer = document.createElement('div');
		getWeatherIcon(weather.icon, imgContainer);
		
		const h2 = document.createElement('h2');
		h2.textContent = Math.floor(weather.temp) + unitCode;
		
		div.appendChild(date);
		div.appendChild(imgContainer);
		div.appendChild(h2);
		forecastDaily.appendChild(div);
	};

	const createHourlyList = (obj) => {
		const container = document.createElement('div');
		container.classList.add('hour-card');
		const time = document.createElement('p');
		time.textContent = obj.time;
		const desc = document.createElement('p');
		desc.textContent = obj.description;
		const temp = document.createElement('p');
		temp.textContent = `${obj.temp} ${unitCode}`;

		container.appendChild(time);
		container.appendChild(desc);
		container.appendChild(temp);
		forecastHourly.appendChild(container);
	};

	const generateDailyCards = (obj) => {
		resetForecastContainer(forecastDaily);
		obj.forEach((i, idx) => createForecastCard(i, idx));
	};

	const generateHourlyList = (obj) => {
		resetForecastContainer(forecastHourly);
		obj.forEach(i => createHourlyList(i));
	};

	const displayData = async (location) => {
		const obj = await _weather_js__WEBPACK_IMPORTED_MODULE_0__["default"].getWeather(searchInput.value || location, unitCode);
		if(Object.keys(obj).length == 0) {
			alert("City not found");
			searchInput.value = "";
			return;
		}

		city = obj.name;
		cityName.textContent = `${obj.name}, ${obj.country}`;
		temperature.textContent = `${obj.temp} ${unitCode}`;
		weatherDesc.textContent = obj.description.charAt(0).toUpperCase() + obj.description.slice(1);
		feelsLike.textContent = `${obj.feels} ${unitCode}`;
		rainChance.textContent = `${obj.daily[0].pop * 100} %`;
		humidity.textContent = obj.humidity + " %";

		generateDailyCards(obj.daily);
		generateHourlyList(obj.hourly);
	};

	const searchCity = (e) => {
		e.preventDefault();
		displayData();
	};

	const init = () => {
		displayData(city);
	};

	search.addEventListener('submit', searchCity);
	toggleContainer.addEventListener('click', toggleReading);

	init();
})();



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = (() => {
	const apiKey = "0227985e5e46cf9a2c09ca948590846a";
	let measureUnit = "";

	const useMeasureUnit = (unit) => {
		measureUnit = unit === "°C" ? "metric" : "imperial";
	};

	const LocationData = (obj) => {
		return {
			lon: obj.coord.lon, 
			lat: obj.coord.lat,
			name: obj.name,
			feels: obj.main.feels_like, 
			temp: obj.main.temp,
			description: obj.weather[0].description,
			icon: obj.weather[0].icon,
			country: obj.sys.country,
			humidity:obj.main.humidity,
		};
	};

	const ForecastData = (obj) => {
		let dateString = obj.dt_txt.split(" ");
		dateString = new Date(dateString[0])
			.toLocaleString("en-US", {
				weekday : "short",
			});

		let timeString = new Date(obj.dt_txt)
			.toLocaleTimeString("en-us", {
				hour12: false,
				hour: "2-digit",
				minute: "2-digit",
			});

		return {
			pop: obj.pop,
			temp: obj.main.temp,
			description: obj.weather[0].description,
			date: dateString,
			time: timeString,
			icon: obj.weather[0].icon,
		};
	};

	const weatherForecastData = (forecast) => {
		const dailyList = [
			forecast.list[2], 
			forecast.list[10],
			forecast.list[18],
			forecast.list[26],
			forecast.list[34],
		];
		
		const daily = dailyList.map( i => ForecastData(i));
		const hourlyList = forecast.list.slice(0,8);
		const hourly = hourlyList.map( i => ForecastData(i));	

		return {
			daily: daily,
			hourly: hourly,
		};
	};

	const getLocationWeather = async (location) => {
		const response = await fetch(`
			https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=${measureUnit},
			{mode: 'cors'}
		`);

		if(response.status == 200) {
			const responseObj = await response.json();
			return LocationData(responseObj);
		}

		return "not found";
	};

	const getLocationForecast = async(lat, lon) => {
		const response = await fetch(`
			https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${measureUnit},
			{mode: 'cors'}
		`);
		const obj = await response.json();
		return weatherForecastData(obj);
	};

	const getWeather = async (location, unit) => {
		// console.log(unit);
		useMeasureUnit(unit); 
		
		const data = {};
		const locationWeather = await getLocationWeather(location);
		if(locationWeather === "not found") {
			return data;
		}
		
		const locationForecast = await getLocationForecast(locationWeather.lat, locationWeather.lon);
		Object.assign(
			data,
			locationWeather,
			locationForecast
		);

		return data;
	};

	return {
		getWeather,
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather); 

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _js_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/DOM */ "./src/js/DOM.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNPO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxuXFx0cGFkZGluZzowO1xcclxcblxcdG1hcmdpbjowO1xcclxcblxcdG92ZXJmbG93LXg6aGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmUge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0aW5zZXQ6IDA7XFxyXFxuXFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7XFxyXFxuXFx0aGVpZ2h0OjEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRlbnQge1xcclxcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcblxcdG1hcmdpbjowIGF1dG87XFxyXFxuXFx0ZGlzcGxheTpncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzQwcHggMWZyO1xcclxcblxcdG1pbi1oZWlnaHQ6MTAwdmg7XFxyXFxufVxcdFxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciwgLmluZm8tY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOjQwcHggNDBweDtcXHJcXG59XFxyXFxuXFx0XFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC44KTtcXHJcXG5cXHR3aWR0aDoxMDAlO1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDo2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2l0eS1uYW1lIHtcXHJcXG5cXHRjb2xvcjogI2E1YTVhNTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4td2VhdGhlci1kZXRhaWxzIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXItZGVzYyB7XFxyXFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tYWluLXdlYXRoZXItZGV0YWlscyA+ICoge1xcclxcblxcdGJvcmRlci1ibG9jay1lbmQ6IDFweCBzb2xpZCAjODI4MjgyO1xcclxcblxcdHBhZGRpbmc6MTJweCAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTdweDtcXHJcXG5cXHR3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1jb2x1bW4ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRmb250LXNpemU6NDhweDtcXHJcXG5cXHRmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0Zm9udC1zaXplOjI4cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaCB7XFxyXFxuXFx0Ym9yZGVyOm5vbmU7XFxyXFxuXFx0Ym9yZGVyLWJsb2NrLWVuZDogMXB4IHNvbGlkIHdoaXRlO1xcclxcblxcdHBhZGRpbmc6MTBweCAxNXB4O1xcclxcblxcdGJhY2tncm91bmQ6bm9uZTtcXHJcXG5cXHR3aWR0aDoxMDAlO1xcclxcblxcdG91dGxpbmU6bm9uZTtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pY29uIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0cmlnaHQ6NSU7XFxyXFxuXFx0Ym90dG9tOjA7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNTAlKTtcXHJcXG5cXHRmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2g6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjojY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuXFx0Z2FwOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0Z2FwOjEwcHg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6NTBweDtcXHJcXG5cXHRoZWlnaHQ6MjBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxuXFx0YmFja2dyb3VuZDp3aGl0ZTtcXHJcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG5cXHRib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtY29udGFpbmVyOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZSB7XFxyXFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxyXFxuXFx0aGVpZ2h0OjEwMCU7XFxyXFxuXFx0d2lkdGg6MjBweDtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuXFx0Ym94LXNoYWRvdzogMCAwIC41ZW0gcmdiYSgwLDAsMCwwLjUpO1xcclxcblxcdGJhY2tncm91bmQ6YmxhY2s7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxufVxcclxcblxcclxcbi5mYXJlbmhlaXQge1xcclxcblxcdHJpZ2h0OjA7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcclxcblxcdGJhY2tncm91bmQ6d2hpdGU7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGJvcmRlci1yYWRpdXM6MTJweDtcXHJcXG5cXHRwYWRkaW5nOjIwcHg7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOjIwcHg7XFxyXFxuXFx0Ym94LXNoYWRvdzowIDAgMWVtIHJnYmEoMCwwLDAsMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LXRhYi1jb250YWluZXIge1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRnYXA6MjBweDtcXHJcXG5cXHRwYWRkaW5nOjAgMTZweCAxMHB4O1xcclxcblxcdGZvbnQtc2l6ZToxNnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0Y29sb3I6I2EzYTNhMztcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5IHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0Z2FwOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob3VyLWNvbnRhaW5lciB7XFxyXFxuXFx0ZmxleDoxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5IHtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHRncmlkLWdhcDo0MHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1jYXJkIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcclxcblxcdGZsZXg6MTtcXHJcXG5cXHJcXG5cXHRib3gtc2hhZG93OiAwIDAgMC4zZW0gcmdiYSgwLDAsMCwwLjMpO1xcclxcblxcdHBhZGRpbmc6MTJweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxufVxcclxcblxcclxcbi5ob3VyLWNhcmQge1xcclxcblxcdHBhZGRpbmc6MjBweDtcXHJcXG5cXHRmb250LXNpemU6MTZweDtcXHJcXG5cXHRib3JkZXI6MXB4IHNvbGlkICNjY2M7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KXtcXHJcXG5cXHJcXG4ucGFnZS1jb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG5cXHRoZWlnaHQ6MDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LWNhcmQge1xcclxcblxcdGRpc3BsYXk6Z3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcdGdhcDozMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla2RheSB7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IDEvLTE7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuXFx0cGFkZGluZzo2MHB4IDIwcHg7XFxyXFxuXFx0Z2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6NXB4O1xcclxcblxcdGdhcDo1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuXFx0d2lkdGg6MTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5kYWlseSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0Z2FwOjA7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1jYXJkIHtcXHJcXG5cXHRib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5IHtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG59XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHFCQUFxQjtDQUNyQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxtREFBMEM7Q0FDMUMsc0JBQXNCO0NBQ3RCLDRCQUE0QjtDQUM1QixrQ0FBa0M7Q0FDbEMsV0FBVztDQUNYLFNBQVM7Q0FDVCxRQUFRO0NBQ1IsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUiwwQkFBMEI7Q0FDMUIsV0FBVztBQUNaOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixZQUFZO0NBQ1osZ0NBQWdDO0NBQ2hDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixVQUFVO0NBQ1YsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOzs7QUFHQTtDQUNDLG1DQUFtQztDQUNuQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFlBQVk7Q0FDWiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxpQ0FBaUM7Q0FDakMsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixVQUFVO0NBQ1YsWUFBWTtDQUNaLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsUUFBUTtDQUNSLDRCQUE0QjtDQUM1QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osUUFBUTtDQUNSLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsc0JBQXNCO0NBQ3RCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsVUFBVTtDQUNWLHFCQUFxQjtDQUNyQixvQ0FBb0M7Q0FDcEMsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixRQUFRO0NBQ1Isa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLFlBQVk7Q0FDWixRQUFRO0NBQ1IsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFFBQVE7QUFDVDs7QUFFQTtDQUNDLE1BQU07QUFDUDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixxQ0FBcUM7Q0FDckMsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsTUFBTTs7Q0FFTixxQ0FBcUM7Q0FDckMsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYiw2QkFBNkI7QUFDOUI7O0FBRUE7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsUUFBUTtBQUNUOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHFDQUFxQztDQUNyQyxRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLE9BQU87QUFDUjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLEtBQUs7Q0FDTCxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzpib3JkZXItYm94O1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0YmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZycpO1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG5cXHRmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdHBhZGRpbmc6MDtcXHJcXG5cXHRtYXJnaW46MDtcXHJcXG5cXHRvdmVyZmxvdy14OmhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGluc2V0OiAwO1xcclxcblxcdGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO1xcclxcblxcdGhlaWdodDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1jb250ZW50IHtcXHJcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG5cXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdGRpc3BsYXk6Z3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM0MHB4IDFmcjtcXHJcXG5cXHRtaW4taGVpZ2h0OjEwMHZoO1xcclxcbn1cXHRcXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIsIC5pbmZvLWNvbnRhaW5lciB7XFxyXFxuXFx0cGFkZGluZzo0MHB4IDQwcHg7XFxyXFxufVxcclxcblxcdFxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuXFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuOCk7XFxyXFxuXFx0d2lkdGg6MTAwJTtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6NjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NpdHktbmFtZSB7XFxyXFxuXFx0Y29sb3I6ICNhNWE1YTU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXdlYXRoZXItZGV0YWlscyB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyLWRlc2Mge1xcclxcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWFpbi13ZWF0aGVyLWRldGFpbHMgPiAqIHtcXHJcXG5cXHRib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgIzgyODI4MjtcXHJcXG5cXHRwYWRkaW5nOjEycHggMDtcXHJcXG5cXHRmb250LXNpemU6IDE3cHg7XFxyXFxuXFx0d2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY29sdW1uIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0Zm9udC1zaXplOjQ4cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtc2l6ZToyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxyXFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gge1xcclxcblxcdGJvcmRlcjpub25lO1xcclxcblxcdGJvcmRlci1ibG9jay1lbmQ6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHRwYWRkaW5nOjEwcHggMTVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOm5vbmU7XFxyXFxuXFx0d2lkdGg6MTAwJTtcXHJcXG5cXHRvdXRsaW5lOm5vbmU7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtaWNvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHJpZ2h0OjUlO1xcclxcblxcdGJvdHRvbTowO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTUwJSk7XFxyXFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoOjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6I2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcblxcdGdhcDoyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGdhcDoxMHB4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS1jb250YWluZXIge1xcclxcblxcdHdpZHRoOjUwcHg7XFxyXFxuXFx0aGVpZ2h0OjIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czoxMnB4O1xcclxcblxcdGJhY2tncm91bmQ6d2hpdGU7XFxyXFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxyXFxuXFx0Ym9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLWNvbnRhaW5lcjpob3ZlciB7XFxyXFxuXFx0Y3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUge1xcclxcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcclxcblxcdGhlaWdodDoxMDAlO1xcclxcblxcdHdpZHRoOjIwcHg7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcblxcdGJveC1zaGFkb3c6IDAgMCAuNWVtIHJnYmEoMCwwLDAsMC41KTtcXHJcXG5cXHRiYWNrZ3JvdW5kOmJsYWNrO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czoxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFyZW5oZWl0IHtcXHJcXG5cXHRyaWdodDowO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOndoaXRlO1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxuXFx0cGFkZGluZzoyMHB4O1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDoyMHB4O1xcclxcblxcdGJveC1zaGFkb3c6MCAwIDFlbSByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC10YWItY29udGFpbmVyIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0Z2FwOjIwcHg7XFxyXFxuXFx0cGFkZGluZzowIDE2cHggMTBweDtcXHJcXG5cXHRmb250LXNpemU6MTZweDtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGNvbG9yOiNhM2EzYTM7XFxyXFxufVxcclxcblxcclxcbi5kYWlseSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGdhcDoyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG91ci1jb250YWluZXIge1xcclxcblxcdGZsZXg6MTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseSB7XFxyXFxuXFx0ZGlzcGxheTpncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuXFx0Z3JpZC1nYXA6NDBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtY2FyZCB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG5cXHRmbGV4OjE7XFxyXFxuXFxyXFxuXFx0Ym94LXNoYWRvdzogMCAwIDAuM2VtIHJnYmEoMCwwLDAsMC4zKTtcXHJcXG5cXHRwYWRkaW5nOjEycHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czoxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG91ci1jYXJkIHtcXHJcXG5cXHRwYWRkaW5nOjIwcHg7XFxyXFxuXFx0Zm9udC1zaXplOjE2cHg7XFxyXFxuXFx0Ym9yZGVyOjFweCBzb2xpZCAjY2NjO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCl7XFxyXFxuXFxyXFxuLnBhZ2UtY29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTpncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuXFx0aGVpZ2h0OjA7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1jYXJkIHtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHRnYXA6MzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlZWtkYXkge1xcclxcblxcdGdyaWQtY29sdW1uOiAxLy0xO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6NjBweCAyMHB4O1xcclxcblxcdGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOjVweDtcXHJcXG5cXHRnYXA6NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcclxcblxcdHdpZHRoOjEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHkge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGdhcDowO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtY2FyZCB7XFxyXFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseSB7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxufVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB3ZWF0aGVyIGZyb20gJy4vd2VhdGhlci5qcyc7XHJcblxyXG5jb25zdCBET00gPSAoKCkgPT4ge1xyXG5cdGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hDaXR5Jyk7XHJcblx0Y29uc3Qgc2VhcmNoSW5wdXQgPSBzZWFyY2gucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpO1xyXG5cdGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktbmFtZScpO1xyXG5cdGNvbnN0IHdlYXRoZXJEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItZGVzYycpO1xyXG5cdGNvbnN0IHJhaW5DaGFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFpbi1jaGFuY2UnKTtcclxuXHRjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZScpO1xyXG5cdGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XHJcblx0Y29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcclxuXHRjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcclxuXHRjb25zdCBmb3JlY2FzdERhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5Jyk7XHJcblx0Y29uc3QgZm9yZWNhc3RIb3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5Jyk7XHJcblx0Y29uc3QgdG9nZ2xlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1jb250YWluZXInKTtcclxuXHRjb25zdCB0b2dnbGUgPSB0b2dnbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xyXG5cclxuXHRsZXQgdW5pdENvZGUgPSBcIsKwQ1wiO1xyXG5cdGxldCBjaXR5ID0gJ1BoaWxpcHBpbmVzJztcclxuXHJcblx0Y29uc3QgdG9nZ2xlUmVhZGluZyA9ICgpID0+IHtcclxuXHRcdHVuaXRDb2RlID0gdW5pdENvZGUgPT09IFwiwrBDXCIgPyBcIsKwRlwiIDogXCLCsENcIjtcclxuXHRcdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdmYXJlbmhlaXQnKTtcclxuXHRcdHRvZ2dsZUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdmYXJlbmhlaXQtY29udGFpbmVyJyk7XHJcblx0XHRkaXNwbGF5RGF0YShjaXR5KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRXZWF0aGVySWNvbiA9IChpY29uY29kZSwgY29udGFpbmVyKSA9PiB7XHJcblx0XHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHRcdGltZy5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtpY29uY29kZX0ucG5nYDtcclxuXHRcdGltZy5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWljb24nKTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlc2V0Rm9yZWNhc3RDb250YWluZXIgPSAoZWxlbWVudCkgPT4ge1xyXG5cdFx0d2hpbGUoZWxlbWVudC5sYXN0Q2hpbGQpIHtcclxuXHRcdFx0ZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZUZvcmVjYXN0Q2FyZCA9ICh3ZWF0aGVyLCBpZHgpID0+IHtcclxuXHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWNhcmQnKTtcclxuXHJcblx0XHRjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0ZGF0ZS5jbGFzc0xpc3QuYWRkKCd3ZWVrZGF5Jyk7XHJcblx0XHRkYXRlLnRleHRDb250ZW50ID0gaWR4ID09PSAwID8gXCJUb2RheVwiIDogd2VhdGhlci5kYXRlO1xyXG5cdFx0XHJcblx0XHRjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGdldFdlYXRoZXJJY29uKHdlYXRoZXIuaWNvbiwgaW1nQ29udGFpbmVyKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5cdFx0aDIudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKHdlYXRoZXIudGVtcCkgKyB1bml0Q29kZTtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGRhdGUpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDIpO1xyXG5cdFx0Zm9yZWNhc3REYWlseS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZUhvdXJseUxpc3QgPSAob2JqKSA9PiB7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3VyLWNhcmQnKTtcclxuXHRcdGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHR0aW1lLnRleHRDb250ZW50ID0gb2JqLnRpbWU7XHJcblx0XHRjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0ZGVzYy50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcclxuXHRcdGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHR0ZW1wLnRleHRDb250ZW50ID0gYCR7b2JqLnRlbXB9ICR7dW5pdENvZGV9YDtcclxuXHJcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZSk7XHJcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcCk7XHJcblx0XHRmb3JlY2FzdEhvdXJseS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdlbmVyYXRlRGFpbHlDYXJkcyA9IChvYmopID0+IHtcclxuXHRcdHJlc2V0Rm9yZWNhc3RDb250YWluZXIoZm9yZWNhc3REYWlseSk7XHJcblx0XHRvYmouZm9yRWFjaCgoaSwgaWR4KSA9PiBjcmVhdGVGb3JlY2FzdENhcmQoaSwgaWR4KSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2VuZXJhdGVIb3VybHlMaXN0ID0gKG9iaikgPT4ge1xyXG5cdFx0cmVzZXRGb3JlY2FzdENvbnRhaW5lcihmb3JlY2FzdEhvdXJseSk7XHJcblx0XHRvYmouZm9yRWFjaChpID0+IGNyZWF0ZUhvdXJseUxpc3QoaSkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlEYXRhID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XHJcblx0XHRjb25zdCBvYmogPSBhd2FpdCB3ZWF0aGVyLmdldFdlYXRoZXIoc2VhcmNoSW5wdXQudmFsdWUgfHwgbG9jYXRpb24sIHVuaXRDb2RlKTtcclxuXHRcdGlmKE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09IDApIHtcclxuXHRcdFx0YWxlcnQoXCJDaXR5IG5vdCBmb3VuZFwiKTtcclxuXHRcdFx0c2VhcmNoSW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y2l0eSA9IG9iai5uYW1lO1xyXG5cdFx0Y2l0eU5hbWUudGV4dENvbnRlbnQgPSBgJHtvYmoubmFtZX0sICR7b2JqLmNvdW50cnl9YDtcclxuXHRcdHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7b2JqLnRlbXB9ICR7dW5pdENvZGV9YDtcclxuXHRcdHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gb2JqLmRlc2NyaXB0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgb2JqLmRlc2NyaXB0aW9uLnNsaWNlKDEpO1xyXG5cdFx0ZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7b2JqLmZlZWxzfSAke3VuaXRDb2RlfWA7XHJcblx0XHRyYWluQ2hhbmNlLnRleHRDb250ZW50ID0gYCR7b2JqLmRhaWx5WzBdLnBvcCAqIDEwMH0gJWA7XHJcblx0XHRodW1pZGl0eS50ZXh0Q29udGVudCA9IG9iai5odW1pZGl0eSArIFwiICVcIjtcclxuXHJcblx0XHRnZW5lcmF0ZURhaWx5Q2FyZHMob2JqLmRhaWx5KTtcclxuXHRcdGdlbmVyYXRlSG91cmx5TGlzdChvYmouaG91cmx5KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZWFyY2hDaXR5ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGRpc3BsYXlEYXRhKCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcclxuXHRcdGRpc3BsYXlEYXRhKGNpdHkpO1xyXG5cdH07XHJcblxyXG5cdHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzZWFyY2hDaXR5KTtcclxuXHR0b2dnbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVSZWFkaW5nKTtcclxuXHJcblx0aW5pdCgpO1xyXG59KSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBET007IiwiY29uc3Qgd2VhdGhlciA9ICgoKSA9PiB7XHJcblx0Y29uc3QgYXBpS2V5ID0gXCIwMjI3OTg1ZTVlNDZjZjlhMmMwOWNhOTQ4NTkwODQ2YVwiO1xyXG5cdGxldCBtZWFzdXJlVW5pdCA9IFwiXCI7XHJcblxyXG5cdGNvbnN0IHVzZU1lYXN1cmVVbml0ID0gKHVuaXQpID0+IHtcclxuXHRcdG1lYXN1cmVVbml0ID0gdW5pdCA9PT0gXCLCsENcIiA/IFwibWV0cmljXCIgOiBcImltcGVyaWFsXCI7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgTG9jYXRpb25EYXRhID0gKG9iaikgPT4ge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bG9uOiBvYmouY29vcmQubG9uLCBcclxuXHRcdFx0bGF0OiBvYmouY29vcmQubGF0LFxyXG5cdFx0XHRuYW1lOiBvYmoubmFtZSxcclxuXHRcdFx0ZmVlbHM6IG9iai5tYWluLmZlZWxzX2xpa2UsIFxyXG5cdFx0XHR0ZW1wOiBvYmoubWFpbi50ZW1wLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogb2JqLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcblx0XHRcdGljb246IG9iai53ZWF0aGVyWzBdLmljb24sXHJcblx0XHRcdGNvdW50cnk6IG9iai5zeXMuY291bnRyeSxcclxuXHRcdFx0aHVtaWRpdHk6b2JqLm1haW4uaHVtaWRpdHksXHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IEZvcmVjYXN0RGF0YSA9IChvYmopID0+IHtcclxuXHRcdGxldCBkYXRlU3RyaW5nID0gb2JqLmR0X3R4dC5zcGxpdChcIiBcIik7XHJcblx0XHRkYXRlU3RyaW5nID0gbmV3IERhdGUoZGF0ZVN0cmluZ1swXSlcclxuXHRcdFx0LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xyXG5cdFx0XHRcdHdlZWtkYXkgOiBcInNob3J0XCIsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGxldCB0aW1lU3RyaW5nID0gbmV3IERhdGUob2JqLmR0X3R4dClcclxuXHRcdFx0LnRvTG9jYWxlVGltZVN0cmluZyhcImVuLXVzXCIsIHtcclxuXHRcdFx0XHRob3VyMTI6IGZhbHNlLFxyXG5cdFx0XHRcdGhvdXI6IFwiMi1kaWdpdFwiLFxyXG5cdFx0XHRcdG1pbnV0ZTogXCIyLWRpZ2l0XCIsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHBvcDogb2JqLnBvcCxcclxuXHRcdFx0dGVtcDogb2JqLm1haW4udGVtcCxcclxuXHRcdFx0ZGVzY3JpcHRpb246IG9iai53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRkYXRlOiBkYXRlU3RyaW5nLFxyXG5cdFx0XHR0aW1lOiB0aW1lU3RyaW5nLFxyXG5cdFx0XHRpY29uOiBvYmoud2VhdGhlclswXS5pY29uLFxyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB3ZWF0aGVyRm9yZWNhc3REYXRhID0gKGZvcmVjYXN0KSA9PiB7XHJcblx0XHRjb25zdCBkYWlseUxpc3QgPSBbXHJcblx0XHRcdGZvcmVjYXN0Lmxpc3RbMl0sIFxyXG5cdFx0XHRmb3JlY2FzdC5saXN0WzEwXSxcclxuXHRcdFx0Zm9yZWNhc3QubGlzdFsxOF0sXHJcblx0XHRcdGZvcmVjYXN0Lmxpc3RbMjZdLFxyXG5cdFx0XHRmb3JlY2FzdC5saXN0WzM0XSxcclxuXHRcdF07XHJcblx0XHRcclxuXHRcdGNvbnN0IGRhaWx5ID0gZGFpbHlMaXN0Lm1hcCggaSA9PiBGb3JlY2FzdERhdGEoaSkpO1xyXG5cdFx0Y29uc3QgaG91cmx5TGlzdCA9IGZvcmVjYXN0Lmxpc3Quc2xpY2UoMCw4KTtcclxuXHRcdGNvbnN0IGhvdXJseSA9IGhvdXJseUxpc3QubWFwKCBpID0+IEZvcmVjYXN0RGF0YShpKSk7XHRcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkYWlseTogZGFpbHksXHJcblx0XHRcdGhvdXJseTogaG91cmx5LFxyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRMb2NhdGlvbldlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYFxyXG5cdFx0XHRodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7YXBpS2V5fSZ1bml0cz0ke21lYXN1cmVVbml0fSxcclxuXHRcdFx0e21vZGU6ICdjb3JzJ31cclxuXHRcdGApO1xyXG5cclxuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2VPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdHJldHVybiBMb2NhdGlvbkRhdGEocmVzcG9uc2VPYmopO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBcIm5vdCBmb3VuZFwiO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldExvY2F0aW9uRm9yZWNhc3QgPSBhc3luYyhsYXQsIGxvbikgPT4ge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgXHJcblx0XHRcdGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPSR7bWVhc3VyZVVuaXR9LFxyXG5cdFx0XHR7bW9kZTogJ2NvcnMnfVxyXG5cdFx0YCk7XHJcblx0XHRjb25zdCBvYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHRyZXR1cm4gd2VhdGhlckZvcmVjYXN0RGF0YShvYmopO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24sIHVuaXQpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHVuaXQpO1xyXG5cdFx0dXNlTWVhc3VyZVVuaXQodW5pdCk7IFxyXG5cdFx0XHJcblx0XHRjb25zdCBkYXRhID0ge307XHJcblx0XHRjb25zdCBsb2NhdGlvbldlYXRoZXIgPSBhd2FpdCBnZXRMb2NhdGlvbldlYXRoZXIobG9jYXRpb24pO1xyXG5cdFx0aWYobG9jYXRpb25XZWF0aGVyID09PSBcIm5vdCBmb3VuZFwiKSB7XHJcblx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjb25zdCBsb2NhdGlvbkZvcmVjYXN0ID0gYXdhaXQgZ2V0TG9jYXRpb25Gb3JlY2FzdChsb2NhdGlvbldlYXRoZXIubGF0LCBsb2NhdGlvbldlYXRoZXIubG9uKTtcclxuXHRcdE9iamVjdC5hc3NpZ24oXHJcblx0XHRcdGRhdGEsXHJcblx0XHRcdGxvY2F0aW9uV2VhdGhlcixcclxuXHRcdFx0bG9jYXRpb25Gb3JlY2FzdFxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0V2VhdGhlcixcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vbWFpbi5jc3NcIjtcclxuaW1wb3J0IERPTSBmcm9tICcuL2pzL0RPTSc7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
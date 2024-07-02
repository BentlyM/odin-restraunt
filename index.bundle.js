"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    padding: 0%;
    margin: 0%;
    height: 100vh;
}

/* navigation bar */

header {
    display: flex;
    justify-content: center;
    border: 1px solid #cbd5e1;
    border-bottom-color: #cbd5e1;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
}

ul {
    display: flex;
    flex-direction: row;
    padding: 0px;
    list-style-type: none;
    gap: 15px;
    & > li button {
        background-color: white;
        border: none;
        font-size: large;
    }
}

button:hover {
    transition: 10ms;
    color: #991b1b;
    cursor: pointer;
}

button:active {
    position: relative;
    top: 2px;
}

#logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}

#title {
    order: 1;
}

/* content warp */

#content {
    display: flex;
    justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,UAAU;IACV,aAAa;AACjB;;AAEA,mBAAmB;;AAEnB;IACI,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;IACrB,SAAS;IACT;QACI,uBAAuB;QACvB,YAAY;QACZ,gBAAgB;IACpB;AACJ;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,QAAQ;AACZ;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["body {\r\n    padding: 0%;\r\n    margin: 0%;\r\n    height: 100vh;\r\n}\r\n\r\n/* navigation bar */\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: center;\r\n    border: 1px solid #cbd5e1;\r\n    border-bottom-color: #cbd5e1;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 80vw;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 0px;\r\n    list-style-type: none;\r\n    gap: 15px;\r\n    & > li button {\r\n        background-color: white;\r\n        border: none;\r\n        font-size: large;\r\n    }\r\n}\r\n\r\nbutton:hover {\r\n    transition: 10ms;\r\n    color: #991b1b;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:active {\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n\r\n#logo {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n#title {\r\n    order: 1;\r\n}\r\n\r\n/* content warp */\r\n\r\n#content {\r\n    display: flex;\r\n    justify-content: center;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/aboutLayout.js":
/*!****************************!*\
  !*** ./src/aboutLayout.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _aboutImage_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutImage.png */ "./src/aboutImage.png");


const AboutComponent = () => {
    const aboutBtn = document.querySelector('.about')

    const aboutLayout = document.createElement('div');
    aboutLayout.classList.add('aboutContainer');

    /* title */
    const aboutTitle = document.createElement('h3');
    aboutTitle.textContent = 'About Us';
    aboutTitle.style.textAlign = 'center';

    /* paragraph */
    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = 'Shadows Kitchen is a restaurant like no other. Our chefs are trained in the art of culinary chaos, and our dishes are designed to blow your mind. Learn more about our story and mission.';
    aboutParagraph.style.textAlign = 'center';
    aboutParagraph.style.width = "500px";

    /* image */
    const aboutImg = new Image(300, 400);
    aboutImg.src = _aboutImage_png__WEBPACK_IMPORTED_MODULE_0__;
    aboutImg.style.display = 'block';
    aboutImg.style.margin = '0 auto';

    aboutLayout.appendChild(aboutTitle);
    aboutLayout.appendChild(aboutImg);
    aboutLayout.appendChild(aboutParagraph);

    return {
        aboutBtn,
        aboutLayout
        // this should contain the html/css layout 
    }
}



/***/ }),

/***/ "./src/homeLayout.js":
/*!***************************!*\
  !*** ./src/homeLayout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _homeImage_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeImage.png */ "./src/homeImage.png");


const HomeComponent = () => {
    const homeBtn = document.querySelector('.home')

    const homeLayout = document.createElement('div');
    homeLayout.classList.add('homeContainer');

    /*title*/
    const title = document.createElement('h3');
    title.textContent = 'Welcome to Shadows Kitchen';
    title.style.textAlign = 'center';

    /*img*/
    const mainImg = new Image(500 , 500);
    mainImg.src = _homeImage_png__WEBPACK_IMPORTED_MODULE_0__;

    /*paragraph*/
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Anyone who gets in my way is my enemy! Our pastries are so good, it will make you forget about those other wannabe restaurants. Chaos Control your taste buds to the best pastries they have ever had.'
    paragraph.style.textAlign = 'center';
    paragraph.style.width = "500px";

    homeLayout.appendChild(title);
    homeLayout.appendChild(mainImg);
    homeLayout.appendChild(paragraph);

    return {
        homeBtn,
        homeLayout
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/init.js");




function component() {
    // this is for switching between 'pages' tho its static
     // possible put each of these in a if statement?
    new _init__WEBPACK_IMPORTED_MODULE_1__.Init().load();
    
}

component();

// create a a javascript init.js file to render when button clicked menu or about or home

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Init: () => (/* binding */ Init)
/* harmony export */ });
/* harmony import */ var _homeLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeLayout */ "./src/homeLayout.js");
/* harmony import */ var _menuLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLayout */ "./src/menuLayout.js");
/* harmony import */ var _aboutLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutLayout */ "./src/aboutLayout.js");

// responsible for creating and appending content to file (NOTHING ELSE);




class Init {
    constructor(){
        this.choice = document.querySelectorAll('li');
        this.contentContainer = document.getElementById('content');
    }

    load(){
        this.contentContainer.appendChild((0,_homeLayout__WEBPACK_IMPORTED_MODULE_0__.HomeComponent)().homeLayout);

        for(let list of this.choice){
            list.addEventListener('click',(event)=>{
                if(event.target.classList.contains('about')){
                    (0,_aboutLayout__WEBPACK_IMPORTED_MODULE_2__.AboutComponent)().aboutBtn.addEventListener('click', _aboutLayout__WEBPACK_IMPORTED_MODULE_2__.AboutComponent);
                   this.contentContainer.replaceChild((0,_aboutLayout__WEBPACK_IMPORTED_MODULE_2__.AboutComponent)().aboutLayout, this.contentContainer.childNodes[0]);
                }else if(event.target.classList.contains('menu')){
                    (0,_menuLayout__WEBPACK_IMPORTED_MODULE_1__.MenuComponent)().menuBtn.addEventListener('click', _menuLayout__WEBPACK_IMPORTED_MODULE_1__.MenuComponent);
                    this.contentContainer.replaceChild((0,_menuLayout__WEBPACK_IMPORTED_MODULE_1__.MenuComponent)().menuLayout, this.contentContainer.childNodes[0]);
                }else{
                    (0,_homeLayout__WEBPACK_IMPORTED_MODULE_0__.HomeComponent)().homeBtn.addEventListener('click', _homeLayout__WEBPACK_IMPORTED_MODULE_0__.HomeComponent);
                    this.contentContainer.replaceChild((0,_homeLayout__WEBPACK_IMPORTED_MODULE_0__.HomeComponent)().homeLayout, this.contentContainer.childNodes[0]);

                }
            })
        }
    }

}

/***/ }),

/***/ "./src/menuLayout.js":
/*!***************************!*\
  !*** ./src/menuLayout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
const MenuComponent = () => {
    const menuBtn = document.querySelector('.menu')

    const menuLayout = document.createElement('div');
    menuLayout.classList.add('menuContainer');

    /* title */
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Shadow\'s Pastry Palace';
    menuTitle.style.textAlign = 'center';
    menuTitle.style.fontFamily = 'Arial Black';
    menuTitle.style.color = '#333';
    menuTitle.style.textShadow = '2px 2px #666';

    /* menu categories */
    const menuCategories = [
    { name: 'Chaos Treats', icon: '🍰' },
    { name: 'Fruit Frenzy', icon: '🍓' },
    { name: 'Creamy Delights', icon: '🥛' },
    { name: 'Chocolate Chaos', icon: '🍫' },
    { name: 'Shadow\'s Favorites', icon: '❤️' },
    ];

    const menuCategoryList = document.createElement('ul');
    menuCategoryList.style.listStyle = 'none';
    menuCategoryList.style.padding = '0';
    menuCategoryList.style.margin = '0';
    menuCategoryList.style.display = 'flex';
    menuCategoryList.style.flexWrap = 'wrap';
    menuCategoryList.style.justifyContent = 'center';

    menuCategories.forEach((category) => {
    const categoryListItem = document.createElement('li');
    categoryListItem.style.margin = '10px';
    categoryListItem.style.cursor = 'pointer';

    const categoryIcon = document.createElement('span');
    categoryIcon.textContent = category.icon;
    categoryIcon.style.fontSize = '24px';
    categoryIcon.style.marginRight = '10px';

    const categoryName = document.createElement('span');
    categoryName.textContent = category.name;
    categoryName.style.fontSize = '18px';
    categoryName.style.fontWeight = 'bold';

    categoryListItem.appendChild(categoryIcon);
    categoryListItem.appendChild(categoryName);
    menuCategoryList.appendChild(categoryListItem);
    });

    /* menu items */
    const menuItems = [
    {
        name: 'Shadow\'s Signature Croissant',
        description: 'Flaky, buttery, and utterly divine',
        price: '$4.99',
        category: 'Chaos Treats',
    },
    {
        name: 'Strawberry Shortcake',
        description: 'Fresh strawberries and whipped cream on a bed of sweet biscuits',
        price: '$6.99',
        category: 'Fruit Frenzy',
    },
    {
        name: 'Cream Puff Delight',
        description: 'Light and airy cream puffs filled with a sweet surprise',
        price: '$5.99',
        category: 'Creamy Delights',
    },
    {
        name: 'Chocolate Éclair',
        description: 'Rich, velvety chocolate and a delicate pastry crust',
        price: '$7.99',
        category: 'Chocolate Chaos',
    },
    {
        name: 'Shadow\'s Favorite Fruit Tart',
        description: 'A sweet and tangy mix of fresh fruits on a buttery crust',
        price: '$8.99',
        category: 'Shadow\'s Favorites',
    },
    // add more menu items here
    ];

    const menuItemList = document.createElement('ul');
    menuItemList.style.listStyle = 'none';
    menuItemList.style.padding = '0';
    menuItemList.style.margin = '0';

    menuItems.forEach((menuItem) => {
    const menuItemListItem = document.createElement('li');
    menuItemListItem.style.marginBottom = '20px';

    const menuItemName = document.createElement('h3');
    menuItemName.textContent = menuItem.name;
    menuItemName.style.fontSize = '18px';
    menuItemName.style.fontWeight = 'bold';

    const menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = menuItem.description;
    menuItemDescription.style.fontSize = '14px';
    menuItemDescription.style.color = '#666';

    const menuItemPrice = document.createElement('p');
    menuItemPrice.textContent = `Price: ${menuItem.price}`;
    menuItemPrice.style.fontSize = '14px';
    menuItemPrice.style.color = '#666';

    const menuItemCategory = document.createElement('p');
    menuItemCategory.textContent = `Category: ${menuItem.category}`;
    menuItemCategory.style.fontSize = '14px';
    menuItemCategory.style.color = '#666';

    menuItemListItem.appendChild(menuItemName);
    menuItemListItem.appendChild(menuItemDescription);
    menuItemListItem.appendChild(menuItemPrice);
    menuItemListItem.appendChild(menuItemCategory);
    menuItemList.appendChild(menuItemListItem);
    });

    menuLayout.appendChild(menuTitle);
    menuLayout.appendChild(menuCategoryList);
    menuLayout.appendChild(menuItemList);

    return {
        menuBtn,
        menuLayout
        // this should contain the html/css layout 
    }
}

/***/ }),

/***/ "./src/aboutImage.png":
/*!****************************!*\
  !*** ./src/aboutImage.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac10aa0271449db3bf48.png";

/***/ }),

/***/ "./src/homeImage.png":
/*!***************************!*\
  !*** ./src/homeImage.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d9b7e78e51a882f8d77.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGVBQWU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsa0JBQWtCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvYWJvdXRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWVMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbml0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51TGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIG5hdmlnYXRpb24gYmFyICovXHJcblxyXG5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNjYmQ1ZTE7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGdhcDogMTVweDtcclxuICAgICYgPiBsaSBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogMTBtcztcclxuICAgIGNvbG9yOiAjOTkxYjFiO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246YWN0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICAgIG9yZGVyOiAxO1xyXG59XHJcblxyXG4vKiBjb250ZW50IHdhcnAgKi9cclxuXHJcbiNjb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVDtRQUNJLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG4gICAgbWFyZ2luOiAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbmF2aWdhdGlvbiBiYXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NiZDVlMTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogODB2dztcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICAmID4gbGkgYnV0dG9uIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiAxMG1zO1xcclxcbiAgICBjb2xvcjogIzk5MWIxYjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRlbnQgd2FycCAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFib3V0SW1hZ2UgZnJvbSAnLi9hYm91dEltYWdlLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dENvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0JylcclxuXHJcbiAgICBjb25zdCBhYm91dExheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRMYXlvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXRDb250YWluZXInKTtcclxuXHJcbiAgICAvKiB0aXRsZSAqL1xyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcclxuICAgIGFib3V0VGl0bGUuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblxyXG4gICAgLyogcGFyYWdyYXBoICovXHJcbiAgICBjb25zdCBhYm91dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFib3V0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1NoYWRvd3MgS2l0Y2hlbiBpcyBhIHJlc3RhdXJhbnQgbGlrZSBubyBvdGhlci4gT3VyIGNoZWZzIGFyZSB0cmFpbmVkIGluIHRoZSBhcnQgb2YgY3VsaW5hcnkgY2hhb3MsIGFuZCBvdXIgZGlzaGVzIGFyZSBkZXNpZ25lZCB0byBibG93IHlvdXIgbWluZC4gTGVhcm4gbW9yZSBhYm91dCBvdXIgc3RvcnkgYW5kIG1pc3Npb24uJztcclxuICAgIGFib3V0UGFyYWdyYXBoLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgYWJvdXRQYXJhZ3JhcGguc3R5bGUud2lkdGggPSBcIjUwMHB4XCI7XHJcblxyXG4gICAgLyogaW1hZ2UgKi9cclxuICAgIGNvbnN0IGFib3V0SW1nID0gbmV3IEltYWdlKDMwMCwgNDAwKTtcclxuICAgIGFib3V0SW1nLnNyYyA9IGFib3V0SW1hZ2U7XHJcbiAgICBhYm91dEltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGFib3V0SW1nLnN0eWxlLm1hcmdpbiA9ICcwIGF1dG8nO1xyXG5cclxuICAgIGFib3V0TGF5b3V0LmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xyXG4gICAgYWJvdXRMYXlvdXQuYXBwZW5kQ2hpbGQoYWJvdXRJbWcpO1xyXG4gICAgYWJvdXRMYXlvdXQuYXBwZW5kQ2hpbGQoYWJvdXRQYXJhZ3JhcGgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWJvdXRCdG4sXHJcbiAgICAgICAgYWJvdXRMYXlvdXRcclxuICAgICAgICAvLyB0aGlzIHNob3VsZCBjb250YWluIHRoZSBodG1sL2NzcyBsYXlvdXQgXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCByZXN0YXVyYW50SW1hZ2UgZnJvbSAnLi9ob21lSW1hZ2UucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKVxyXG5cclxuICAgIGNvbnN0IGhvbWVMYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVMYXlvdXQuY2xhc3NMaXN0LmFkZCgnaG9tZUNvbnRhaW5lcicpO1xyXG5cclxuICAgIC8qdGl0bGUqL1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBTaGFkb3dzIEtpdGNoZW4nO1xyXG4gICAgdGl0bGUuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblxyXG4gICAgLyppbWcqL1xyXG4gICAgY29uc3QgbWFpbkltZyA9IG5ldyBJbWFnZSg1MDAgLCA1MDApO1xyXG4gICAgbWFpbkltZy5zcmMgPSByZXN0YXVyYW50SW1hZ2U7XHJcblxyXG4gICAgLypwYXJhZ3JhcGgqL1xyXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0FueW9uZSB3aG8gZ2V0cyBpbiBteSB3YXkgaXMgbXkgZW5lbXkhIE91ciBwYXN0cmllcyBhcmUgc28gZ29vZCwgaXQgd2lsbCBtYWtlIHlvdSBmb3JnZXQgYWJvdXQgdGhvc2Ugb3RoZXIgd2FubmFiZSByZXN0YXVyYW50cy4gQ2hhb3MgQ29udHJvbCB5b3VyIHRhc3RlIGJ1ZHMgdG8gdGhlIGJlc3QgcGFzdHJpZXMgdGhleSBoYXZlIGV2ZXIgaGFkLidcclxuICAgIHBhcmFncmFwaC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIHBhcmFncmFwaC5zdHlsZS53aWR0aCA9IFwiNTAwcHhcIjtcclxuXHJcbiAgICBob21lTGF5b3V0LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGhvbWVMYXlvdXQuYXBwZW5kQ2hpbGQobWFpbkltZyk7XHJcbiAgICBob21lTGF5b3V0LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBob21lQnRuLFxyXG4gICAgICAgIGhvbWVMYXlvdXRcclxuICAgIH1cclxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBJbml0IH0gZnJvbSAnLi9pbml0JztcclxuXHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgICAvLyB0aGlzIGlzIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiAncGFnZXMnIHRobyBpdHMgc3RhdGljXHJcbiAgICAgLy8gcG9zc2libGUgcHV0IGVhY2ggb2YgdGhlc2UgaW4gYSBpZiBzdGF0ZW1lbnQ/XHJcbiAgICBuZXcgSW5pdCgpLmxvYWQoKTtcclxuICAgIFxyXG59XHJcblxyXG5jb21wb25lbnQoKTtcclxuXHJcbi8vIGNyZWF0ZSBhIGEgamF2YXNjcmlwdCBpbml0LmpzIGZpbGUgdG8gcmVuZGVyIHdoZW4gYnV0dG9uIGNsaWNrZWQgbWVudSBvciBhYm91dCBvciBob21lIiwiXHJcbi8vIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyBhbmQgYXBwZW5kaW5nIGNvbnRlbnQgdG8gZmlsZSAoTk9USElORyBFTFNFKTtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWVMYXlvdXRcIjtcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL21lbnVMYXlvdXRcIjtcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dExheW91dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKCl7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKEhvbWVDb21wb25lbnQoKS5ob21lTGF5b3V0KTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBsaXN0IG9mIHRoaXMuY2hvaWNlKXtcclxuICAgICAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWJvdXQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgQWJvdXRDb21wb25lbnQoKS5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFib3V0Q29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGQoQWJvdXRDb21wb25lbnQoKS5hYm91dExheW91dCwgdGhpcy5jb250ZW50Q29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWVudScpKXtcclxuICAgICAgICAgICAgICAgICAgICBNZW51Q29tcG9uZW50KCkubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1lbnVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGQoTWVudUNvbXBvbmVudCgpLm1lbnVMYXlvdXQsIHRoaXMuY29udGVudENvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIEhvbWVDb21wb25lbnQoKS5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgSG9tZUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZChIb21lQ29tcG9uZW50KCkuaG9tZUxheW91dCwgdGhpcy5jb250ZW50Q29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IE1lbnVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxyXG5cclxuICAgIGNvbnN0IG1lbnVMYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVMYXlvdXQuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpO1xyXG5cclxuICAgIC8qIHRpdGxlICovXHJcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ1NoYWRvd1xcJ3MgUGFzdHJ5IFBhbGFjZSc7XHJcbiAgICBtZW51VGl0bGUuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBtZW51VGl0bGUuc3R5bGUuZm9udEZhbWlseSA9ICdBcmlhbCBCbGFjayc7XHJcbiAgICBtZW51VGl0bGUuc3R5bGUuY29sb3IgPSAnIzMzMyc7XHJcbiAgICBtZW51VGl0bGUuc3R5bGUudGV4dFNoYWRvdyA9ICcycHggMnB4ICM2NjYnO1xyXG5cclxuICAgIC8qIG1lbnUgY2F0ZWdvcmllcyAqL1xyXG4gICAgY29uc3QgbWVudUNhdGVnb3JpZXMgPSBbXHJcbiAgICB7IG5hbWU6ICdDaGFvcyBUcmVhdHMnLCBpY29uOiAn8J+NsCcgfSxcclxuICAgIHsgbmFtZTogJ0ZydWl0IEZyZW56eScsIGljb246ICfwn42TJyB9LFxyXG4gICAgeyBuYW1lOiAnQ3JlYW15IERlbGlnaHRzJywgaWNvbjogJ/CfpZsnIH0sXHJcbiAgICB7IG5hbWU6ICdDaG9jb2xhdGUgQ2hhb3MnLCBpY29uOiAn8J+NqycgfSxcclxuICAgIHsgbmFtZTogJ1NoYWRvd1xcJ3MgRmF2b3JpdGVzJywgaWNvbjogJ+KdpO+4jycgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgbWVudUNhdGVnb3J5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBtZW51Q2F0ZWdvcnlMaXN0LnN0eWxlLmxpc3RTdHlsZSA9ICdub25lJztcclxuICAgIG1lbnVDYXRlZ29yeUxpc3Quc3R5bGUucGFkZGluZyA9ICcwJztcclxuICAgIG1lbnVDYXRlZ29yeUxpc3Quc3R5bGUubWFyZ2luID0gJzAnO1xyXG4gICAgbWVudUNhdGVnb3J5TGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgbWVudUNhdGVnb3J5TGlzdC5zdHlsZS5mbGV4V3JhcCA9ICd3cmFwJztcclxuICAgIG1lbnVDYXRlZ29yeUxpc3Quc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcclxuXHJcbiAgICBtZW51Q2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjYXRlZ29yeUxpc3RJdGVtLnN0eWxlLm1hcmdpbiA9ICcxMHB4JztcclxuICAgIGNhdGVnb3J5TGlzdEl0ZW0uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNhdGVnb3J5SWNvbi50ZXh0Q29udGVudCA9IGNhdGVnb3J5Lmljb247XHJcbiAgICBjYXRlZ29yeUljb24uc3R5bGUuZm9udFNpemUgPSAnMjRweCc7XHJcbiAgICBjYXRlZ29yeUljb24uc3R5bGUubWFyZ2luUmlnaHQgPSAnMTBweCc7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gY2F0ZWdvcnkubmFtZTtcclxuICAgIGNhdGVnb3J5TmFtZS5zdHlsZS5mb250U2l6ZSA9ICcxOHB4JztcclxuICAgIGNhdGVnb3J5TmFtZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xyXG5cclxuICAgIGNhdGVnb3J5TGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlJY29uKTtcclxuICAgIGNhdGVnb3J5TGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOYW1lKTtcclxuICAgIG1lbnVDYXRlZ29yeUxpc3QuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlMaXN0SXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBtZW51IGl0ZW1zICovXHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NoYWRvd1xcJ3MgU2lnbmF0dXJlIENyb2lzc2FudCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdGbGFreSwgYnV0dGVyeSwgYW5kIHV0dGVybHkgZGl2aW5lJyxcclxuICAgICAgICBwcmljZTogJyQ0Ljk5JyxcclxuICAgICAgICBjYXRlZ29yeTogJ0NoYW9zIFRyZWF0cycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdTdHJhd2JlcnJ5IFNob3J0Y2FrZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdGcmVzaCBzdHJhd2JlcnJpZXMgYW5kIHdoaXBwZWQgY3JlYW0gb24gYSBiZWQgb2Ygc3dlZXQgYmlzY3VpdHMnLFxyXG4gICAgICAgIHByaWNlOiAnJDYuOTknLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnRnJ1aXQgRnJlbnp5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NyZWFtIFB1ZmYgRGVsaWdodCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMaWdodCBhbmQgYWlyeSBjcmVhbSBwdWZmcyBmaWxsZWQgd2l0aCBhIHN3ZWV0IHN1cnByaXNlJyxcclxuICAgICAgICBwcmljZTogJyQ1Ljk5JyxcclxuICAgICAgICBjYXRlZ29yeTogJ0NyZWFteSBEZWxpZ2h0cycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdDaG9jb2xhdGUgw4ljbGFpcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdSaWNoLCB2ZWx2ZXR5IGNob2NvbGF0ZSBhbmQgYSBkZWxpY2F0ZSBwYXN0cnkgY3J1c3QnLFxyXG4gICAgICAgIHByaWNlOiAnJDcuOTknLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnQ2hvY29sYXRlIENoYW9zJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NoYWRvd1xcJ3MgRmF2b3JpdGUgRnJ1aXQgVGFydCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHN3ZWV0IGFuZCB0YW5neSBtaXggb2YgZnJlc2ggZnJ1aXRzIG9uIGEgYnV0dGVyeSBjcnVzdCcsXHJcbiAgICAgICAgcHJpY2U6ICckOC45OScsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdTaGFkb3dcXCdzIEZhdm9yaXRlcycsXHJcbiAgICB9LFxyXG4gICAgLy8gYWRkIG1vcmUgbWVudSBpdGVtcyBoZXJlXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBtZW51SXRlbUxpc3Quc3R5bGUubGlzdFN0eWxlID0gJ25vbmUnO1xyXG4gICAgbWVudUl0ZW1MaXN0LnN0eWxlLnBhZGRpbmcgPSAnMCc7XHJcbiAgICBtZW51SXRlbUxpc3Quc3R5bGUubWFyZ2luID0gJzAnO1xyXG5cclxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbWVudUl0ZW1MaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtZW51SXRlbUxpc3RJdGVtLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcyMHB4JztcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgbWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gbWVudUl0ZW0ubmFtZTtcclxuICAgIG1lbnVJdGVtTmFtZS5zdHlsZS5mb250U2l6ZSA9ICcxOHB4JztcclxuICAgIG1lbnVJdGVtTmFtZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbWVudUl0ZW0uZGVzY3JpcHRpb247XHJcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xyXG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi5zdHlsZS5jb2xvciA9ICcjNjY2JztcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbWVudUl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGBQcmljZTogJHttZW51SXRlbS5wcmljZX1gO1xyXG4gICAgbWVudUl0ZW1QcmljZS5zdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcclxuICAgIG1lbnVJdGVtUHJpY2Uuc3R5bGUuY29sb3IgPSAnIzY2Nic7XHJcblxyXG4gICAgY29uc3QgbWVudUl0ZW1DYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1lbnVJdGVtQ2F0ZWdvcnkudGV4dENvbnRlbnQgPSBgQ2F0ZWdvcnk6ICR7bWVudUl0ZW0uY2F0ZWdvcnl9YDtcclxuICAgIG1lbnVJdGVtQ2F0ZWdvcnkuc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XHJcbiAgICBtZW51SXRlbUNhdGVnb3J5LnN0eWxlLmNvbG9yID0gJyM2NjYnO1xyXG5cclxuICAgIG1lbnVJdGVtTGlzdEl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKTtcclxuICAgIG1lbnVJdGVtTGlzdEl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjcmlwdGlvbik7XHJcbiAgICBtZW51SXRlbUxpc3RJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtUHJpY2UpO1xyXG4gICAgbWVudUl0ZW1MaXN0SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUNhdGVnb3J5KTtcclxuICAgIG1lbnVJdGVtTGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbUxpc3RJdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnVMYXlvdXQuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuICAgIG1lbnVMYXlvdXQuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5TGlzdCk7XHJcbiAgICBtZW51TGF5b3V0LmFwcGVuZENoaWxkKG1lbnVJdGVtTGlzdCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtZW51QnRuLFxyXG4gICAgICAgIG1lbnVMYXlvdXRcclxuICAgICAgICAvLyB0aGlzIHNob3VsZCBjb250YWluIHRoZSBodG1sL2NzcyBsYXlvdXQgXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
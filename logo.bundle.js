"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["logo"],{

/***/ "./src/renderLogo.js":
/*!***************************!*\
  !*** ./src/renderLogo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");


function logoComponent() {
    const logoContainer = document.querySelector('#logo');
    const NavContent = document.querySelector('.nav');
 
    const myLogo = new Image(45 , 45);
    myLogo.src = _logo_png__WEBPACK_IMPORTED_MODULE_0__;
    myLogo.style.borderRadius = '5px';


    logoContainer.appendChild(myLogo);
 
    return {
        logoContainer,
        NavContent
    };
}

logoComponent();

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3035de7abbd5c59bcf0.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/renderLogo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNDQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9yZW5kZXJMb2dvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5wbmcnO1xyXG5cclxuZnVuY3Rpb24gbG9nb0NvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nbycpO1xyXG4gICAgY29uc3QgTmF2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcclxuIFxyXG4gICAgY29uc3QgbXlMb2dvID0gbmV3IEltYWdlKDQ1ICwgNDUpO1xyXG4gICAgbXlMb2dvLnNyYyA9IGxvZ287XHJcbiAgICBteUxvZ28uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzVweCc7XHJcblxyXG5cclxuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobXlMb2dvKTtcclxuIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dvQ29udGFpbmVyLFxyXG4gICAgICAgIE5hdkNvbnRlbnRcclxuICAgIH07XHJcbn1cclxuXHJcbmxvZ29Db21wb25lbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
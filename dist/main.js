/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ToDoList.js":
/*!*************************!*\
  !*** ./src/ToDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList)\n/* harmony export */ });\nclass ToDoList {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t\tthis.items = [];\n\t}\n\n\tappend(item) {\n\t\tthis.items.push(item);\n\t}\n\n\tremove(item) {\n\t\tthis.items.pop(item);\n\t}\n\n\tgetItem(id) {\n\t\treturn this.items[id];\n\t}\n\n\tlength() {\n\t\treturn this.items.length;\n\t}\n}\n\n\n//# sourceURL=webpack://top_todo/./src/ToDoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList */ \"./src/ToDoList.js\");\n/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItem */ \"./src/toDoItem.js\");\n\n\n\nlet list1 = new _ToDoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"myFirstList\");\nlet item1 = new _toDoItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n\t\"Title\",\n\t\"description\",\n\t\"dueDate\",\n\t\"priority\",\n\t\"notes\"\n);\nlist1.append(item1);\n\nlet myitem = list1.getItem(0);\nconsole.log(myitem.title);\nmyitem.title = \"newTitle\";\nconsole.log(myitem.title);\n\n\n//# sourceURL=webpack://top_todo/./src/index.js?");

/***/ }),

/***/ "./src/toDoItem.js":
/*!*************************!*\
  !*** ./src/toDoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoItem)\n/* harmony export */ });\nclass ToDoItem {\n\tconstructor(title, description, dueDate, priority, notes) {\n\t\tthis.title = title;\n\t\tthis.description = description;\n\t\tthis.dueDate = dueDate;\n\t\tthis.priority = priority;\n\t\tthis.notes = notes;\n\t}\n\n\tget title() {\n\t\treturn this._title;\n\t}\n\tset title(title) {\n\t\tthis._title = title;\n\t}\n\n\tget description() {\n\t\treturn this._description;\n\t}\n\n\tset description(description) {\n\t\tthis._description = description;\n\t}\n\n\tget dueDate() {\n\t\treturn this._dueDate;\n\t}\n\n\tset dueDate(dueDate) {\n\t\tthis._dueDate = dueDate;\n\t}\n\n\tget priority() {\n\t\treturn this._priority;\n\t}\n\n\tset priority(priority) {\n\t\tthis._priority = priority;\n\t}\n}\n\n\n//# sourceURL=webpack://top_todo/./src/toDoItem.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
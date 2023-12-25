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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList)\n/* harmony export */ });\nclass ToDoList {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t\tthis.item = [];\n\t}\n\n\tappend(item) {\n\t\tthis.item.push(item);\n\t}\n\n\tremove(item) {\n\t\tthis.item.pop(item);\n\t}\n\n\tgetItem(id) {\n\t\treturn this.item[id];\n\t}\n\n\tlength() {\n\t\treturn this.item.length;\n\t}\n\n\tget name() {\n\t\treturn this._name;\n\t}\n\n\tset name(name) {\n\t\tthis._name = name;\n\t}\n}\n\n\n//# sourceURL=webpack://top_todo/./src/ToDoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList */ \"./src/ToDoList.js\");\n/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItem */ \"./src/toDoItem.js\");\n/* harmony import */ var _toDoLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoLists */ \"./src/toDoLists.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\n\n\nlet mylists = new _toDoLists__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nfunction loadDummyContent() {\n\tlet list1 = new _ToDoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"myFirstList\");\n\tlet list2 = new _ToDoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"mySecondList\");\n\tlet item1 = new _toDoItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n\t\t\"Title\",\n\t\t\"description\",\n\t\t\"dueDate\",\n\t\t\"priority\",\n\t\t\"notes\"\n\t);\n\tlist1.append(item1);\n\tmylists.addItem(list1);\n\tmylists.addItem(list2);\n\tlet myitem = list1.getItem(0);\n\tmyitem.title = \"newTitle\";\n}\n\n//myui.loadList(0);\n\nlet mystorage = new _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"](mylists);\nmylists = mystorage.deserialize();\nlet myui = new _ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"](mylists);\nmyui.linkDom();\nmyui.createMenu();\n\ndocument.body.addEventListener(\"click\", function (evt) {\n\tlet mysplit = evt.target.id.split(\"_\");\n\tif (mysplit.length == 3) {\n\t\tif (mysplit[0] == \"link\") {\n\t\t\tif (mysplit[1] == \"lists\") {\n\t\t\t\t//console.log(`display List ${mysplit[2]}`);\n\t\t\t\tmyui.loadList(mysplit[2]);\n\t\t\t}\n\t\t\tif (mysplit[1] == \"detail\") {\n\t\t\t\tmyui.loadListDetail(mysplit[2]);\n\t\t\t}\n\t\t}\n\t}\n\tif (evt.target.id == \"btnNewToDo\") {\n\t\tlet mylist = mylists.item[myui.activeListId];\n\t\tlet myTb = document.querySelector(\"#tbNewToDo\");\n\t\tlet myItem = new _toDoItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](myTb.value, \"\", \"\", \"\", \"\");\n\t\tconsole.log(mylist);\n\t\tmylist.append(myItem);\n\t\tconsole.log(mylist);\n\t\tmyui.loadList(myui.activeListId);\n\t\tmystorage.serialize();\n\t}\n\n\tif (evt.target.id == \"LinkBtnDetailCancel\") {\n\t\tmyui.loadList(myui.activeListId);\n\t}\n\n\tif (mysplit.length == 2) {\n\t\tif (mysplit[0] == \"linkBtnDetailSave\") {\n\t\t\tlet myItem = mylists.item[myui.activeListId].item[mysplit[1]];\n\t\t\tlet myTitle = document.querySelector(\"#inputTitle\");\n\t\t\tlet myDescription = document.querySelector(\"#inputDescription\");\n\t\t\tlet myDueDate = document.querySelector(\"#inputDueDate\");\n\t\t\tlet myPriority = document.querySelector(\"#inputPriority\");\n\t\t\tlet myNotes = document.querySelector(\"#inputNotes\");\n\t\t\tlet myDone = document.querySelector(\"#inputDone\");\n\t\t\tmyItem.update(\n\t\t\t\tmyTitle.value,\n\t\t\t\tmyDescription.value,\n\t\t\t\tmyDueDate.value,\n\t\t\t\tmyPriority.value,\n\t\t\t\tmyNotes.value,\n\t\t\t\tmyDone.value\n\t\t\t);\n\t\t\tconsole.log(myDone.value);\n\t\t\tmyui.loadList(myui.activeListId);\n\t\t\tmystorage.serialize();\n\t\t}\n\t}\n});\n\n\n//# sourceURL=webpack://top_todo/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList */ \"./src/ToDoList.js\");\n/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItem */ \"./src/toDoItem.js\");\n/* harmony import */ var _toDoLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoLists */ \"./src/toDoLists.js\");\n\n\n\n\nclass Storage {\n\tconstructor(myToDoListsObject) {\n\t\tthis.myToDoListsObject = myToDoListsObject;\n\t}\n\tserialize() {\n\t\tlet mybackup = JSON.stringify(this.myToDoListsObject, (key, value) => {\n\t\t\tif (value && typeof value === \"object\") {\n\t\t\t\tvalue.__type = value.constructor.name;\n\t\t\t}\n\n\t\t\treturn value;\n\t\t});\n\t\tlocalStorage.setItem(\"backup\", mybackup);\n\t\t//console.log(\"values stored\");\n\t\t//console.log(mybackup);\n\t}\n\n\tdeserialize() {\n\t\tconst classes = {\n\t\t\tObject,\n\t\t\tToDoLists: _toDoLists__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n\t\t\tToDoList: _ToDoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\t\t\tToDoItem: _toDoItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\t\t};\n\t\tconst myJsonString = localStorage.getItem(\"backup\");\n\t\t//console.log(myJsonString);\n\n\t\tthis.myToDoListsObject = JSON.parse(myJsonString, (key, value) => {\n\t\t\tif (value && typeof value === \"object\" && value.__type) {\n\t\t\t\tconst DynamicClass = classes[value.__type];\n\t\t\t\tvalue = Object.assign(new DynamicClass(), value);\n\t\t\t\tdelete value.__type;\n\t\t\t}\n\t\t\treturn value;\n\t\t});\n\t\tconsole.log(this.myToDoListsObject);\n\t\treturn this.myToDoListsObject;\n\t}\n}\n\n\n//# sourceURL=webpack://top_todo/./src/storage.js?");

/***/ }),

/***/ "./src/toDoItem.js":
/*!*************************!*\
  !*** ./src/toDoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoItem)\n/* harmony export */ });\nclass ToDoItem {\n\tconstructor(title, description, dueDate, priority, notes) {\n\t\tthis.title = title;\n\t\tthis.description = description;\n\t\tthis.dueDate = dueDate;\n\t\tthis.priority = priority;\n\t\tthis.notes = notes;\n\t\tthis.done = false;\n\t}\n\n\tget title() {\n\t\treturn this._title;\n\t}\n\tset title(title) {\n\t\tthis._title = title;\n\t}\n\n\tget description() {\n\t\treturn this._description;\n\t}\n\n\tset description(description) {\n\t\tthis._description = description;\n\t}\n\n\tget dueDate() {\n\t\treturn this._dueDate;\n\t}\n\n\tset dueDate(dueDate) {\n\t\tthis._dueDate = dueDate;\n\t}\n\n\tget priority() {\n\t\treturn this._priority;\n\t}\n\n\tset priority(priority) {\n\t\tthis._priority = priority;\n\t}\n\n\tupdate(title, description, dueDate, priority, notes) {\n\t\tthis.title = title;\n\t\tthis.description = description;\n\t\tthis.dueDate = dueDate;\n\t\tthis.priority = priority;\n\t\tthis.notes = notes;\n\t}\n\n\tget done() {\n\t\treturn this._done;\n\t}\n\n\tset done(done) {\n\t\tthis._done = done;\n\t}\n}\n\n\n//# sourceURL=webpack://top_todo/./src/toDoItem.js?");

/***/ }),

/***/ "./src/toDoLists.js":
/*!**************************!*\
  !*** ./src/toDoLists.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoLists)\n/* harmony export */ });\nclass ToDoLists {\n\tconstructor() {\n\t\tthis.item = [];\n\t}\n\n\tgetLength() {\n\t\treturn this.item.length;\n\t}\n\n\tgetItem(i) {\n\t\treturn this.item[i];\n\t}\n\n\taddItem(list) {\n\t\tthis.item.push(list);\n\t}\n\n\tremoveItem(id) {\n\t\tthis.item.pop(id);\n\t}\n}\n\n\n//# sourceURL=webpack://top_todo/./src/toDoLists.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ui)\n/* harmony export */ });\nclass Ui {\n\tconstructor(lists) {\n\t\tthis.Menu = \"\";\n\t\tthis.lists = lists;\n\t\tthis.content = \"\";\n\t\tthis.activeList = \"\";\n\t\tthis.activeListId = \"\";\n\t}\n\n\tcreateMenu() {\n\t\tthis.Menu.innerHTML = \"\";\n\t\tfor (let i = 0; i < this.lists.getLength(); i++) {\n\t\t\tlet li = document.createElement(\"li\");\n\t\t\tlet a = document.createElement(\"a\");\n\n\t\t\ta.innerHTML = this.lists.item[i].name;\n\t\t\ta.id = `link_lists_${i}`;\n\t\t\ta.href = \"#\";\n\t\t\tli.appendChild(a);\n\t\t\tthis.Menu.appendChild(li);\n\t\t}\n\t}\n\tcreateList() {}\n\n\t//get activeList() {\n\t//\treturn this._activeList;\n\t//}\n\n\t//set activeList(i) {\n\t//\tthis._activeList = this.lists.item[i];\n\t//}\n\n\tloadList(i) {\n\t\tthis.activeList = this.lists.item[i];\n\t\tthis.activeListId = i;\n\t\tthis.content.innerHTML = \"\";\n\t\tlet myH1 = document.createElement(\"h1\");\n\t\tmyH1.innerHTML = this.activeList.name;\n\t\tthis.content.appendChild(myH1);\n\t\tlet myTextBox = document.createElement(\"input\");\n\t\tmyTextBox.id = \"tbNewToDo\";\n\t\tlet myButton = document.createElement(\"button\");\n\t\tmyButton.id = \"btnNewToDo\";\n\t\tmyButton.innerHTML = \"Add\";\n\t\tthis.content.appendChild(myTextBox);\n\t\tthis.content.appendChild(myButton);\n\t\tlet myUl = document.createElement(\"ul\");\n\t\tthis.content.appendChild(myUl);\n\t\tfor (let i = 0; i < this.activeList.length(); i++) {\n\t\t\tlet myLi = document.createElement(\"li\");\n\t\t\tmyLi.innerHTML = `<a href=\"#\" id=\"link_detail_${i}\">${this.activeList.item[i].title}<a>`;\n\t\t\tthis.content.appendChild(myLi);\n\t\t\t//console.log(activeList.item[i].title);\n\t\t}\n\t}\n\n\tloadListDetail(i) {\n\t\tlet myItem = this.activeList.item[i];\n\t\tthis.content.innerHTML = \"\";\n\t\tlet myH1 = document.createElement(\"h1\");\n\t\tmyH1.innerHTML = myItem.title;\n\t\tthis.content.appendChild(myH1);\n\t\tlet myDiv = document.createElement(\"div\");\n\t\tmyDiv.innerHTML = `\n        <table>\n            <tr><td>Title:</td>\n                <td><input type=\"text\" id=\"inputTitle\" value=\"${myItem.title}\"></td>\n            </tr>\n            <tr><td>Description:</td>\n                <td><input type=\"text\" id=\"inputDescription\" value=\"${myItem.description}\"></td>\n            </tr>\n            <tr><td>Due Date:</td>\n                <td><input type=\"text\" id=\"inputDueDate\" value=\"${myItem.dueDate}\"></td>\n            </tr>\n            <tr><td>Priority:</td>\n                <td><input type=\"text\" id=\"inputPriority\" value=\"${myItem.priority}\"></td>\n            </tr>\n            <tr><td>Notes:</td>\n                <td><input type=\"text\" id=\"inputNotes\" value=\"${myItem.notes}\"></td>\n            </tr>\n\t\t\t<tr><td>Notes:</td>\n                <td><input type=\"checkbox\" id=\"inputDone\" checked=\"${myItem.done}\"></td>\n            </tr>\n        </table>\n        <button id=\"LinkBtnDetailCancel\">Cancel</button><button id=\"linkBtnDetailSave_${i}\">Save</button>`;\n\t\tthis.content.appendChild(myDiv);\n\t}\n\n\tlinkDom() {\n\t\tthis.Menu = document.querySelector(\".myMenuList\");\n\t\tthis.content = document.querySelector(\".myContent\");\n\t}\n}\n\n\n//# sourceURL=webpack://top_todo/./src/ui.js?");

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
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Roboto/Roboto-Regular.ttf */ "./src/assets/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Roboto/Roboto-Bold.ttf */ "./src/assets/Roboto/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Roboto";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("ttf");
}

@font-face {
  font-family: "Roboto-Bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("ttf");
}

html {
  background-color: rgb(205, 205, 205);
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0px;
}

.animated-button {
  transition: transform 0.3s;
  cursor: pointer;
}

.animated-button:hover {
  transform: scale(1.1);
}

/* #todo-list-header {
  background-color: #37392e;
  color: whitesmoke;
  padding: 10px;
} */

#app-container {
  height: 100vh;
  display: flex;
}

#side-bar {
  background-color: #37392e;
  padding: 10px 50px;
  display: fixed;
  flex-grow: 1;
  font-family: "Roboto-Bold", sans-serif;
}

#side-bar h1 {
  color: whitesmoke;
  padding: 10px 20px;
}

#side-bar #project-list-dom {
  padding: 0;
}

#side-bar #project-list-dom li {
  list-style-type: none;
  margin: 10px;
}

#side-bar #project-list-dom li button {
  background: none;
  color: whitesmoke;
  border: none;
  cursor: pointer;
  transition: transform 0.3s;
  font-size: 20px;
  font-weight: bolds;
}

#side-bar #project-list-dom li button:hover {
  transform: scale(1.1);
}

#todo-list-container {
  width: 70%;
  flex-grow: 4;
  padding: 100px 50px;
  position: relative;
}

#todo-list {
  background-color: whitesmoke;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* justify-content: center; */
  overflow: auto;
  height: 100%;
}

.todo-card {
  position: relative;
  background-color: #d8cfcf;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 7px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 80%;
  flex: 0 0 auto;
  align-self: flex-start;
  margin: 10px;
}

.todo-card:hover {
  background-color: #b9b3b3;
  transform: scale(1.01);
}

.todo-card.completed h1 {
  color: rgb(143, 135, 135);
  text-decoration: line-through;
}

.todo-card.completed > .todo-details > .todo-desc {
  color: rgb(143, 135, 135);
  text-decoration: line-through;
}

.todo-card.hidden {
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
}

.todo-card .edit-delete-btns {
  position: absolute;
  right: 10px;
}

.todo-card.hidden .edit-delete-btns {
  display: none;
}

.todo-card .edit-delete-btns > button {
  background: none;
  border: none;
}

.todo-card .edit-delete-btns > button > img {
  height: auto;
  width: 20px;
}

.todo-card::before {
  content: "";
  height: 90%;
  width: 5px;
  position: absolute;
  left: 10px;
  top: 5%;
  bottom: 5%;
  border-radius: 2px;
}

.todo-card.hidden::before {
  height: 80%;
  top: 10%;
  bottom: 10%;
}

.todo-card.med-priority::before {
  background-color: orange;
}

.todo-card.high-priority::before {
  background-color: red;
}

.todo-card.low-priority::before {
  background-color: green;
}

.todo-card > div,
.todo-card > h1,
.todo-card > button {
  margin: 0 10px;
  flex: 1;
  padding: 10px;
}

.todo-card.hidden .todo-details .todo-desc {
  display: none;
}

.todo-card .todo-project {
  background-color: #b6a8aa;
  padding: 5px 15px;
  border-radius: 5px;
}

.todo-details-bottom {
  display: flex;
  align-items: center;
}
.todo-details-bottom > p,
.todo-details-bottom > button {
  margin: 5px;
}

.todo-details-bottom {
  justify-content: end;
}

.todo-title {
  font-family: "Roboto-Bold", sans-serif;
  font-size: 20px;
}

.todo-desc {
}
/* .todo-card.hidden .todo-details .todo-desc {
  display: none;
} */
.todo-duedate {
}

.todo-priority {
  display: none;
}

.todo-complete-btn {
  border: none;
  background-color: #19647e;
  border-radius: 5px;
  padding: 5px 15px;
  height: 35px;
  color: #ddcecd;
  font-size: 14px;
}

#create-buttons {
  position: fixed;
  left: 30px;
  bottom: 30px;
}

#create-buttons #minimised-buttons {
  display: flex;
  flex-direction: column;
  opacity: 1; /* Make it fully visible */
  transform: translateY(0); /* Slide it to the top */
  transition: opacity 0.3s ease, transform 0.3s ease;
}

#create-buttons.minimised #minimised-buttons {
  /* display: none; */
  /* flex-direction: column; */
  opacity: 0;
  transform: translateY(50px);
  pointer-events: none;
}

#create-buttons #minimised-buttons button {
  border: none;
  background-color: #19647e;
  border-radius: 5px;
  padding: 5px 15px;
  height: 35px;
  color: #ddcecd;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}

button.create-main-btn {
  background-color: #19647e;
  /* position: fixed; */
  color: whitesmoke;
  padding: 10px;
  border-radius: 50%;
  border: none;
  width: 60px;
  height: 60px;
  content: "";
  /* left: 30px;
  bottom: 30px; */
  cursor: pointer;
  transition: transform 0.3s;
}

button.create-main-btn::after {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  bottom: 27px;
  transform: rotate(45deg);
  transition: transform 0.3s;
}

button.create-main-btn::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  /* top: 190px; */
  bottom: 27px;
  transform: rotate(135deg);
  /* transform: rotate(45deg); */
  transition: transform 0.3s;
}

#create-buttons.minimised button.create-main-btn::after {
  transform: rotate(90deg);
}
#create-buttons.minimised button.create-main-btn::before {
  transform: rotate(0deg);
}

button.create-main-btn:hover {
  transform: scale(1.1);
}

.create-dialog {
  display: relative;
  border: none;
  border-radius: 7px;
  padding: 50px;
  /* height: 30vh; */
  width: 50vw;
}
.create-dialog-form#create-todo-form {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

.create-dialog-form#create-project-form {
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}

.create-dialog-form#create-project-form h1 {
  grid-row: 1;
  grid-column: 1 / span 3;
}

.create-dialog-form#create-project-form input {
  grid-row: 2;
  grid-column: 1 / span 3;
}

.create-dialog-form#create-project-form button {
  grid-row: 3;
  grid-column: 3 / span 1;
  height: 40px;
}

.universal-close-btn {
  background-color: #19647e;
  position: absolute;
  color: whitesmoke;
  padding: 10px;
  border-radius: 50% !important;
  border: none;
  width: 60px !important;
  height: 60px !important;
  content: "";
  top: 30px;
  right: 30px;
  cursor: pointer;
}

.universal-close-btn::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  top: 27px;
  transform: rotate(45deg);
}
.universal-close-btn::after {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  top: 27px;
  transform: rotate(135deg);
}
/* #create-todo-dom #createTodoCloseBtn::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  top: 27px;
  transform: rotate(45deg);
}

#create-todo-dom #createTodoCloseBtn::after {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  top: 27px;
  transform: rotate(135deg);
} */

h1.dialog-header {
  margin: none;
}
/* #create-todo-dom h1 {
  margin: none;
} */

#create-todo-dom div {
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* align-items: end; */
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

#details_div {
  grid-template-columns: 1fr 1fr 1fr 1fr !important;
}

#create-todo-dom .dialog-submit-btn {
  width: 130px;
}

.dialog-submit-btn {
  border: none;
  border-radius: 7px;
  padding: 10px;
  background-color: #19647e;
  color: #ddcecd;
  transition: transform 0.3s;
  /* height: 20px; */
  /* width: 130px; */
}

.dialog-submit-btn:hover {
  transform: scale(1.1);
}

.create-dialog-form input {
  border: none;
}

#create-todo-dom textarea {
  border: none;
  resize: none;
  overflow: auto;
}

.new_entry_title {
  font-size: 20px;
  line-height: 15px;
  vertical-align: top;
}

.new_todo_desc {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

input:focus,
textarea:focus {
  outline: none;
}

.new_todo_title::placeholder {
  vertical-align: top;
}

.new_todo_desc::placeholder {
  position: absolute;
  top: 0px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Roboto\";\n  src: url(\"./assets/Roboto/Roboto-Regular.ttf\") format(\"ttf\");\n}\n\n@font-face {\n  font-family: \"Roboto-Bold\";\n  src: url(\"./assets/Roboto/Roboto-Bold.ttf\") format(\"ttf\");\n}\n\nhtml {\n  background-color: rgb(205, 205, 205);\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  margin: 0px;\n}\n\n.animated-button {\n  transition: transform 0.3s;\n  cursor: pointer;\n}\n\n.animated-button:hover {\n  transform: scale(1.1);\n}\n\n/* #todo-list-header {\n  background-color: #37392e;\n  color: whitesmoke;\n  padding: 10px;\n} */\n\n#app-container {\n  height: 100vh;\n  display: flex;\n}\n\n#side-bar {\n  background-color: #37392e;\n  padding: 10px 50px;\n  display: fixed;\n  flex-grow: 1;\n  font-family: \"Roboto-Bold\", sans-serif;\n}\n\n#side-bar h1 {\n  color: whitesmoke;\n  padding: 10px 20px;\n}\n\n#side-bar #project-list-dom {\n  padding: 0;\n}\n\n#side-bar #project-list-dom li {\n  list-style-type: none;\n  margin: 10px;\n}\n\n#side-bar #project-list-dom li button {\n  background: none;\n  color: whitesmoke;\n  border: none;\n  cursor: pointer;\n  transition: transform 0.3s;\n  font-size: 20px;\n  font-weight: bolds;\n}\n\n#side-bar #project-list-dom li button:hover {\n  transform: scale(1.1);\n}\n\n#todo-list-container {\n  width: 70%;\n  flex-grow: 4;\n  padding: 100px 50px;\n  position: relative;\n}\n\n#todo-list {\n  background-color: whitesmoke;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  /* width: 100%; */\n  /* justify-content: center; */\n  overflow: auto;\n  height: 100%;\n}\n\n.todo-card {\n  position: relative;\n  background-color: #d8cfcf;\n  transition: background-color 0.3s, transform 0.3s;\n  border-radius: 7px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  flex: 0 0 auto;\n  align-self: flex-start;\n  margin: 10px;\n}\n\n.todo-card:hover {\n  background-color: #b9b3b3;\n  transform: scale(1.01);\n}\n\n.todo-card.completed h1 {\n  color: rgb(143, 135, 135);\n  text-decoration: line-through;\n}\n\n.todo-card.completed > .todo-details > .todo-desc {\n  color: rgb(143, 135, 135);\n  text-decoration: line-through;\n}\n\n.todo-card.hidden {\n  flex-direction: row;\n  align-self: flex-start;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.todo-card .edit-delete-btns {\n  position: absolute;\n  right: 10px;\n}\n\n.todo-card.hidden .edit-delete-btns {\n  display: none;\n}\n\n.todo-card .edit-delete-btns > button {\n  background: none;\n  border: none;\n}\n\n.todo-card .edit-delete-btns > button > img {\n  height: auto;\n  width: 20px;\n}\n\n.todo-card::before {\n  content: \"\";\n  height: 90%;\n  width: 5px;\n  position: absolute;\n  left: 10px;\n  top: 5%;\n  bottom: 5%;\n  border-radius: 2px;\n}\n\n.todo-card.hidden::before {\n  height: 80%;\n  top: 10%;\n  bottom: 10%;\n}\n\n.todo-card.med-priority::before {\n  background-color: orange;\n}\n\n.todo-card.high-priority::before {\n  background-color: red;\n}\n\n.todo-card.low-priority::before {\n  background-color: green;\n}\n\n.todo-card > div,\n.todo-card > h1,\n.todo-card > button {\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px;\n}\n\n.todo-card.hidden .todo-details .todo-desc {\n  display: none;\n}\n\n.todo-card .todo-project {\n  background-color: #b6a8aa;\n  padding: 5px 15px;\n  border-radius: 5px;\n}\n\n.todo-details-bottom {\n  display: flex;\n  align-items: center;\n}\n.todo-details-bottom > p,\n.todo-details-bottom > button {\n  margin: 5px;\n}\n\n.todo-details-bottom {\n  justify-content: end;\n}\n\n.todo-title {\n  font-family: \"Roboto-Bold\", sans-serif;\n  font-size: 20px;\n}\n\n.todo-desc {\n}\n/* .todo-card.hidden .todo-details .todo-desc {\n  display: none;\n} */\n.todo-duedate {\n}\n\n.todo-priority {\n  display: none;\n}\n\n.todo-complete-btn {\n  border: none;\n  background-color: #19647e;\n  border-radius: 5px;\n  padding: 5px 15px;\n  height: 35px;\n  color: #ddcecd;\n  font-size: 14px;\n}\n\n#create-buttons {\n  position: fixed;\n  left: 30px;\n  bottom: 30px;\n}\n\n#create-buttons #minimised-buttons {\n  display: flex;\n  flex-direction: column;\n  opacity: 1; /* Make it fully visible */\n  transform: translateY(0); /* Slide it to the top */\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n#create-buttons.minimised #minimised-buttons {\n  /* display: none; */\n  /* flex-direction: column; */\n  opacity: 0;\n  transform: translateY(50px);\n  pointer-events: none;\n}\n\n#create-buttons #minimised-buttons button {\n  border: none;\n  background-color: #19647e;\n  border-radius: 5px;\n  padding: 5px 15px;\n  height: 35px;\n  color: #ddcecd;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: left;\n}\n\nbutton.create-main-btn {\n  background-color: #19647e;\n  /* position: fixed; */\n  color: whitesmoke;\n  padding: 10px;\n  border-radius: 50%;\n  border: none;\n  width: 60px;\n  height: 60px;\n  content: \"\";\n  /* left: 30px;\n  bottom: 30px; */\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n\nbutton.create-main-btn::after {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  bottom: 27px;\n  transform: rotate(45deg);\n  transition: transform 0.3s;\n}\n\nbutton.create-main-btn::before {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  /* top: 190px; */\n  bottom: 27px;\n  transform: rotate(135deg);\n  /* transform: rotate(45deg); */\n  transition: transform 0.3s;\n}\n\n#create-buttons.minimised button.create-main-btn::after {\n  transform: rotate(90deg);\n}\n#create-buttons.minimised button.create-main-btn::before {\n  transform: rotate(0deg);\n}\n\nbutton.create-main-btn:hover {\n  transform: scale(1.1);\n}\n\n.create-dialog {\n  display: relative;\n  border: none;\n  border-radius: 7px;\n  padding: 50px;\n  /* height: 30vh; */\n  width: 50vw;\n}\n.create-dialog-form#create-todo-form {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n}\n\n.create-dialog-form#create-project-form {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 2fr 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n.create-dialog-form#create-project-form h1 {\n  grid-row: 1;\n  grid-column: 1 / span 3;\n}\n\n.create-dialog-form#create-project-form input {\n  grid-row: 2;\n  grid-column: 1 / span 3;\n}\n\n.create-dialog-form#create-project-form button {\n  grid-row: 3;\n  grid-column: 3 / span 1;\n  height: 40px;\n}\n\n.universal-close-btn {\n  background-color: #19647e;\n  position: absolute;\n  color: whitesmoke;\n  padding: 10px;\n  border-radius: 50% !important;\n  border: none;\n  width: 60px !important;\n  height: 60px !important;\n  content: \"\";\n  top: 30px;\n  right: 30px;\n  cursor: pointer;\n}\n\n.universal-close-btn::before {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(45deg);\n}\n.universal-close-btn::after {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(135deg);\n}\n/* #create-todo-dom #createTodoCloseBtn::before {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(45deg);\n}\n\n#create-todo-dom #createTodoCloseBtn::after {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(135deg);\n} */\n\nh1.dialog-header {\n  margin: none;\n}\n/* #create-todo-dom h1 {\n  margin: none;\n} */\n\n#create-todo-dom div {\n  /* display: grid; */\n  /* grid-template-columns: 1fr 1fr 1fr; */\n  /* align-items: end; */\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\n#details_div {\n  grid-template-columns: 1fr 1fr 1fr 1fr !important;\n}\n\n#create-todo-dom .dialog-submit-btn {\n  width: 130px;\n}\n\n.dialog-submit-btn {\n  border: none;\n  border-radius: 7px;\n  padding: 10px;\n  background-color: #19647e;\n  color: #ddcecd;\n  transition: transform 0.3s;\n  /* height: 20px; */\n  /* width: 130px; */\n}\n\n.dialog-submit-btn:hover {\n  transform: scale(1.1);\n}\n\n.create-dialog-form input {\n  border: none;\n}\n\n#create-todo-dom textarea {\n  border: none;\n  resize: none;\n  overflow: auto;\n}\n\n.new_entry_title {\n  font-size: 20px;\n  line-height: 15px;\n  vertical-align: top;\n}\n\n.new_todo_desc {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.new_todo_title::placeholder {\n  vertical-align: top;\n}\n\n.new_todo_desc::placeholder {\n  position: absolute;\n  top: 0px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/database/database.js":
/*!**********************************!*\
  !*** ./src/database/database.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ database)
/* harmony export */ });
class database {
  constructor() {
    this.database = [];
  }

  add(object) {
    this.database.push(object);
  }

  delete(object) {
    const indexToRemove = this.database.indexOf(object);
    if (indexToRemove !== -1) {
      this.database.splice(indexToRemove, 1);
      // console.log(`Item with id ${id} removed successfully.`);
    } else {
      // console.log(`Item with id ${id} not found.`);
    }
  }

  update(objectID, newObject) {
    const index = this.database.findIndex((item) => item.id === objectID);

    // If item with given id is found, update it
    if (index !== -1) {
      this.database[index] = newObject;
      // console.log(`Item with id ${objectID} updated successfully.`);
    } else {
      // console.log(`Item with id ${objectID} not found.`);
    }
  }

  getData() {
    return this.database;
  }
}


/***/ }),

/***/ "./src/database/database_helper_functions.js":
/*!***************************************************!*\
  !*** ./src/database/database_helper_functions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAllData: () => (/* binding */ fetchAllData),
/* harmony export */   fetchProjectData: () => (/* binding */ fetchProjectData),
/* harmony export */   fetchTodoData: () => (/* binding */ fetchTodoData),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   getTodos: () => (/* binding */ getTodos),
/* harmony export */   initialiseDatabase: () => (/* binding */ initialiseDatabase),
/* harmony export */   pushData: () => (/* binding */ pushData),
/* harmony export */   wipeData: () => (/* binding */ wipeData)
/* harmony export */ });
const default_database = {
  todos: [],
  projects: [],
  // notes: [],
};

function initialiseDatabase() {
  localStorage.setItem("todo_data", JSON.stringify(default_database));
}

function fetchAllData() {
  const todoData = JSON.parse(localStorage.getItem("todo_data"));
  return todoData;
}

function fetchTodoData() {
  return JSON.parse(localStorage.getItem("todo_data")).todos;
}

function fetchProjectData() {
  return JSON.parse(localStorage.getItem("todo_data")).projects;
}

function pushData(todo_data, project_data) {
  const updatedData = {
    todos: todo_data,
    projects: project_data,
  };
  localStorage.setItem("todo_data", JSON.stringify(updatedData));
}

function wipeData() {
  localStorage.clear();
  initialiseDatabase();
}

function getTodos() {
  let todo_data = JSON.parse(localStorage.getItem("todo_data")).todos;
  return todo_data;
}

function getProjects() {
  let project_data = JSON.parse(localStorage.getItem("todo_data")).todos;
  return project_data;
}


/***/ }),

/***/ "./src/dom/create_project_dialog.js":
/*!******************************************!*\
  !*** ./src/dom/create_project_dialog.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectDOM)
/* harmony export */ });
function createProjectDOM() {
  const dom_dialog = document.createElement("dialog");
  dom_dialog.id = "create-project-dom";
  dom_dialog.classList = "create-dialog";

  const create_project_form = document.createElement("form");
  create_project_form.id = "create-project-form";
  create_project_form.classList = "create-dialog-form";
  // create_project_form.method = "dialog";

  const header_text = document.createElement("h1");
  header_text.innerText = "New Project";
  header_text.classList = "dialog-header";

  const closeBtn = document.createElement("button");
  // closeBtn.innerText = "";

  closeBtn.id = "createTodoCloseBtn";
  closeBtn.classList = "universal-close-btn";
  // closeBtn.formMethod = "dialog";
  // closeBtn.value = "cancel";

  closeBtn.onclick = (e) => {
    e.preventDefault();
    dom_dialog.close();
  };

  const project_title = document.createElement("input");
  project_title.placeholder = "New Project Name";
  project_title.required = true;
  project_title.classList.add("new_entry_title");
  project_title.name = "project_title";

  // const project_title_label = document.createElement("label");
  // project_title_label.innerText = "Project Name";

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Create";
  submitBtn.id = "create-project-submit-btn";
  submitBtn.classList = "dialog-submit-btn";
  // console.log(submitBtn);
  // submitBtn.value = "default";

  create_project_form.appendChild(header_text);
  create_project_form.appendChild(project_title);
  // create_project_form.appendChild(project_title_label);
  create_project_form.appendChild(submitBtn);
  create_project_form.appendChild(closeBtn);
  dom_dialog.appendChild(create_project_form);

  submitBtn.onclick = (e) => {
    e.preventDefault();
    if (create_project_form.checkValidity()) {
      let formData = {
        projectID: project_title.value,
      };

      console.log(formData);
      const create_project_event = new CustomEvent("createNewProjectEvent", {
        detail: formData,
      });
      document.dispatchEvent(create_project_event);
      create_project_form.reset();
      dom_dialog.close();
    } else {
      create_project_form.reportValidity();
    }
  };

  return dom_dialog;
}


/***/ }),

/***/ "./src/dom/create_todo_dialog.js":
/*!***************************************!*\
  !*** ./src/dom/create_todo_dialog.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateCreateTodoDOM)
/* harmony export */ });
function generateCreateTodoDOM(project_data) {
  const dom_dialog = document.createElement("dialog");
  dom_dialog.id = "create-todo-dom";
  dom_dialog.classList = "create-dialog";

  const create_todo_form = document.createElement("form");
  // const form = document.createElement("form");
  create_todo_form.id = "create-todo-form";
  create_todo_form.classList = "create-dialog-form";
  // create_todo_form.method = "dialog";

  const header_text = document.createElement("h1");
  header_text.innerText = "New Todo";
  header_text.classList = "dialog-header";

  const closeBtn = document.createElement("button");
  closeBtn.id = "createTodoCloseBtn";
  closeBtn.classList = "universal-close-btn";
  closeBtn.formMethod = "dialog";
  closeBtn.value = "cancel";
  closeBtn.onclick = (e) => {
    e.preventDefault();
    dom_dialog.close();
    // console.log("Closing modal");
  };

  const input_title = document.createElement("input");
  input_title.placeholder = "Title: new todo";
  input_title.classList.add("new_entry_title");
  input_title.id = "new_todo_title";
  input_title.required = true;
  input_title.name = "input_title";

  const input_desc = document.createElement("textarea");
  input_desc.placeholder = "Description";
  input_desc.classList.add("new_todo_desc");

  const date_div = document.createElement("div");
  const input_duedate = document.createElement("input");
  input_duedate.classList = "new_todo_duedate";
  input_duedate.type = "date";
  const input_duedate_label = document.createElement("label");
  input_duedate_label.innerText = "Due Date:";
  date_div.appendChild(input_duedate_label);
  date_div.appendChild(input_duedate);

  const priority_div = document.createElement("div");
  const input_priority = document.createElement("select");
  const priority_high = document.createElement("option");
  const priority_med = document.createElement("option");
  const priority_low = document.createElement("option");

  priority_high.value = "high-priority";
  priority_high.innerText = "High";
  priority_med.value = "med-priority";
  priority_med.innerText = "Med";
  priority_low.value = "low-priority";
  priority_low.innerText = "Low";

  input_priority.classList = "new_todo_priority";

  input_priority.appendChild(priority_high);
  input_priority.appendChild(priority_med);
  input_priority.appendChild(priority_low);
  input_priority.options[1].selected = true;
  const input_priority_label = document.createElement("label");
  input_priority_label.innerText = "Priority: ";
  priority_div.appendChild(input_priority_label);
  priority_div.appendChild(input_priority);

  const project_div = document.createElement("div");
  const project_label = document.createElement("label");
  project_label.innerText = "Project: ";
  project_div.appendChild(project_label);
  const input_project = document.createElement("select");
  const project_option_default = document.createElement("option");
  project_option_default.value = null;
  project_option_default.innerText = "none";
  input_project.appendChild(project_option_default);
  // console.log(project_data);
  if ((project_data !== null) & (project_data.getData() !== null)) {
    project_data.getData().forEach((project) => {
      // console.log(project);
      let projectOption = document.createElement("option");
      projectOption.value = project._title;
      projectOption.innerText = project._title;
      input_project.appendChild(projectOption);
    });
  }
  project_div.appendChild(input_project);

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Create";
  submitBtn.classList = "dialog-submit-btn";
  submitBtn.id = "create-todo-submit-btn";
  submitBtn.value = "default";

  const details_div = document.createElement("div");
  details_div.id = "details_div";
  details_div.appendChild(priority_div);
  details_div.appendChild(date_div);
  details_div.appendChild(project_div);
  details_div.appendChild(submitBtn);

  create_todo_form.appendChild(header_text);
  create_todo_form.appendChild(closeBtn);
  create_todo_form.appendChild(input_title);
  create_todo_form.appendChild(input_desc);
  create_todo_form.appendChild(details_div);

  dom_dialog.appendChild(create_todo_form);

  // if (todoObject == null) {
  //   console.log("Todo is null!");
  // } else {
  //   input_title.value = todoObject._title;
  //   input_desc.value = todoObject._description;
  //   input_duedate.value = todoObject._dueDate;
  //   input_priority.value = todoObject.input_priority;
  //   input_project.value = todoObject._project;
  // }

  //This adds the event listener to the submit button to check form valid then submit as a custom event
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(create_todo_form.checkValidity());
    // console.log(input_duedate.value);
    let dueDateObj;
    // console.log(dueDateObj);
    let validForm = create_todo_form.checkValidity();
    if (validForm) {
      if (input_duedate.value == null) {
        dueDateObj = null;
      } else {
        dueDateObj = new Date(input_duedate.value);
      }
      let formData = {
        // Extract form data here, e.g., using form elements or other methods
        title: input_title.value,
        desc: input_desc.value,
        duedate: dueDateObj,
        priority: input_priority.value,
        project: input_project.value,
        // Add more properties as needed
      };

      const customEvent = new CustomEvent("createNewTodoEvent", {
        detail: formData,
      });
      document.dispatchEvent(customEvent);
      console.log("Create todo event fired!");
      create_todo_form.reset();
      dom_dialog.close();
    } else {
      create_todo_form.reportValidity();
    }
  });

  //TODO: Add a new field that holds the project
  return dom_dialog;
}


/***/ }),

/***/ "./src/dom/dom_card.js":
/*!*****************************!*\
  !*** ./src/dom/dom_card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTodoCardDOM)
/* harmony export */ });
/* harmony import */ var _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/edit.svg */ "./src/assets/icons/edit.svg");
/* harmony import */ var _assets_icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/delete.svg */ "./src/assets/icons/delete.svg");



function generateTodoCardDOM(todo) {
  // const editButtonSVG = "src/assets/icons/edit.svg";
  // const deleteButtonSVG = "src/assets/icons/delete.svg";
  // console.log(todo);
  // console.log(todo.duedate);
  // console.log(todo._duedate);
  // console.log(todo.getDueDate);
  // console.log(todo.project);
  const cardDiv = document.createElement("div");

  cardDiv.classList = "todo-card hidden";

  let todoCompleted = todo._completed;
  if (todoCompleted) {
    cardDiv.classList.add("completed");
  } else {
    cardDiv.classList.add("uncompleted");
  }

  cardDiv.classList.add(todo._priority);

  const todoID = document.createElement("p");
  todoID.innerHTML = todo._id;
  todoID.classList = "todo-id";
  todoID.style = "display: none";

  const todoTitle = document.createElement("h1");
  todoTitle.innerHTML = todo._title;
  todoTitle.classList = "todo-title";

  const todoDetails = document.createElement("div");
  todoDetails.classList = "todo-details";

  const todoDesc = document.createElement("p");
  todoDesc.innerHTML = todo._description;
  todoDesc.classList = "todo-desc";

  const todoDueDate = document.createElement("p");
  todoDueDate.innerHTML = todo.dueDate;
  // console.log(todo.dueDate);
  todoDueDate.classList = "todo-duedate";

  const completeButton = document.createElement("button");
  completeButton.innerHTML = "Done";
  completeButton.classList = "todo-complete-btn";

  const editDeleteBtns = document.createElement("div");
  editDeleteBtns.classList = "edit-delete-btns";
  const deleteBtn = document.createElement("button");
  const deleteBtnIcon = document.createElement("img");
  deleteBtnIcon.src = _assets_icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__;
  deleteBtn.appendChild(deleteBtnIcon);
  const editBtn = document.createElement("button");
  const editBtnIcon = document.createElement("img");
  editBtnIcon.src = _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_0__;
  editBtn.appendChild(editBtnIcon);
  editDeleteBtns.appendChild(editBtn);
  editDeleteBtns.appendChild(deleteBtn);

  const todoDetailsBottom = document.createElement("div");
  todoDetailsBottom.classList.add("todo-details-bottom");
  // console.log(todo);
  if (todo.project != "null") {
    const todoProject = document.createElement("p");
    todoProject.innerHTML = todo.project;
    todoProject.classList = "todo-project";
    todoDetailsBottom.appendChild(todoProject);
  }

  todoDetailsBottom.appendChild(todoDueDate);
  todoDetailsBottom.appendChild(completeButton);

  todoDetails.appendChild(todoDesc);
  todoDetails.appendChild(todoDetailsBottom);

  cardDiv.appendChild(todoID);
  cardDiv.appendChild(todoTitle);
  cardDiv.appendChild(todoDetails);
  cardDiv.appendChild(editDeleteBtns);

  completeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    // console.log(e.target);
    const toggleCompleteEvent = new CustomEvent("toggleTodoComplete", {
      detail: todo._id,
    });
    document.dispatchEvent(toggleCompleteEvent);
  });

  deleteBtn.addEventListener("click", (e) => {
    console.log("Delete todo event fired");
    e.stopPropagation();
    const deleteTodoEvent = new CustomEvent("deleteTodo", {
      detail: todo._id,
    });
    document.dispatchEvent(deleteTodoEvent);
  });

  editBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    // console.log("EDIT");

    const editTodoEvent = new CustomEvent("openEditTodoDialog", {
      detail: todo._id,
    });

    document.dispatchEvent(editTodoEvent);
  });

  cardDiv.addEventListener("click", (event) => {
    // console.log(event.target.nodeName);
    if (event.target.nodeName === "BUTTON") {
      return;
    }
    if (cardDiv.classList.contains("hidden")) {
      cardDiv.classList.remove("hidden");
    } else {
      cardDiv.classList.add("hidden");
    }
  });

  return cardDiv;
}


/***/ }),

/***/ "./src/dom/dom_new_todo_btn.js":
/*!*************************************!*\
  !*** ./src/dom/dom_new_todo_btn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTodoBtn)
/* harmony export */ });
function generateTodoBtn() {
  const create_buttons = document.createElement("div");
  create_buttons.id = "create-buttons";
  create_buttons.className = "minimised";

  const button_main = document.createElement("button");
  button_main.id = "main-button";
  button_main.classList = "create-main-btn animated-button";

  //Div to house the minimised buttons
  const minimised_buttons = document.createElement("div");
  minimised_buttons.id = "minimised-buttons";
  // minimised_buttons.classList.add("minimised");

  //Create todo button
  const create_todo_btn = document.createElement("button");
  create_todo_btn.id = "create-todo-btn";
  create_todo_btn.innerText = "Create Todo";
  create_todo_btn.classList = "animated-button";

  //Create project button
  const create_project_btn = document.createElement("button");
  create_project_btn.id = "create-project-btn";
  create_project_btn.innerText = "Create Project";
  create_project_btn.classList = "animated-button";

  //Create note button
  const create_note_btn = document.createElement("button");
  create_note_btn.id = "create-note-btn";
  create_note_btn.innerText = "Create Note";
  create_note_btn.classList = "animated-button";

  minimised_buttons.appendChild(create_todo_btn);
  minimised_buttons.appendChild(create_project_btn);
  minimised_buttons.appendChild(create_note_btn);

  create_buttons.appendChild(minimised_buttons);
  create_buttons.appendChild(button_main);

  //Adding the event listeners
  button_main.addEventListener("click", (e) => {
    e.preventDefault();
    create_buttons.classList.toggle("minimised");
    // console.log(create_buttons.classList);
  });
  create_todo_btn.addEventListener("click", (e) => {
    console.log("Creating new Todo");
    const create_todo_event = new CustomEvent("openCreateTodoDialogEvent");
    document.dispatchEvent(create_todo_event);
  });
  create_project_btn.addEventListener("click", (e) => {
    console.log("Creating new project");
    const create_project_event = new CustomEvent(
      "openCreateProjectDialogEvent"
    );
    document.dispatchEvent(create_project_event);
  });
  create_note_btn.addEventListener("click", (e) => {
    console.log("Creating new note");
    const create_note_event = new CustomEvent("openCreateNoteDialogEvent");
    document.dispatchEvent(create_note_event);
  });

  // const button = document.createElement("button");
  // button.innerHTML = "NEW TODO";
  // button.classList.add("new-todo-btn");

  return create_buttons;
}


/***/ }),

/***/ "./src/dom/edit_todo_dialog.js":
/*!*************************************!*\
  !*** ./src/dom/edit_todo_dialog.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateEditTodoDOM)
/* harmony export */ });
function generateEditTodoDOM(project_data, todoObject) {
  const dom_dialog = document.createElement("dialog");
  dom_dialog.id = "create-todo-dom";
  dom_dialog.classList = "create-dialog";

  const create_todo_form = document.createElement("form");
  // const form = document.createElement("form");
  create_todo_form.id = "create-todo-form";
  create_todo_form.classList = "create-dialog-form";
  // create_todo_form.method = "dialog";

  const header_text = document.createElement("h1");
  header_text.innerText = "Edit Todo";
  header_text.classList = "dialog-header";

  const closeBtn = document.createElement("button");
  closeBtn.id = "createTodoCloseBtn";
  closeBtn.classList = "universal-close-btn";
  closeBtn.formMethod = "dialog";
  closeBtn.value = "cancel";
  closeBtn.onclick = (e) => {
    e.preventDefault();
    dom_dialog.close();
    // console.log("Closing modal");
  };

  const input_title = document.createElement("input");
  input_title.placeholder = "Title: new todo";
  input_title.classList.add("new_entry_title");
  input_title.id = "new_todo_title";
  input_title.required = true;
  input_title.name = "input_title";

  const input_desc = document.createElement("textarea");
  input_desc.placeholder = "Description";
  input_desc.classList.add("new_todo_desc");

  const date_div = document.createElement("div");
  const input_duedate = document.createElement("input");
  input_duedate.classList = "new_todo_duedate";
  input_duedate.type = "date";
  const input_duedate_label = document.createElement("label");
  input_duedate_label.innerText = "Due Date:";
  date_div.appendChild(input_duedate_label);
  date_div.appendChild(input_duedate);

  const priority_div = document.createElement("div");
  const input_priority = document.createElement("select");
  const priority_high = document.createElement("option");
  const priority_med = document.createElement("option");
  const priority_low = document.createElement("option");

  priority_high.value = "high-priority";
  priority_high.innerText = "High";
  priority_med.value = "med-priority";
  priority_med.innerText = "Med";
  priority_low.value = "low-priority";
  priority_low.innerText = "Low";

  input_priority.classList = "new_todo_priority";

  input_priority.appendChild(priority_high);
  input_priority.appendChild(priority_med);
  input_priority.appendChild(priority_low);
  input_priority.options[1].selected = true;
  const input_priority_label = document.createElement("label");
  input_priority_label.innerText = "Priority: ";
  priority_div.appendChild(input_priority_label);
  priority_div.appendChild(input_priority);

  const project_div = document.createElement("div");
  const project_label = document.createElement("label");
  project_label.innerText = "Project: ";
  project_div.appendChild(project_label);
  const input_project = document.createElement("select");
  const project_option_default = document.createElement("option");
  project_option_default.value = null;
  project_option_default.innerText = "none";
  input_project.appendChild(project_option_default);
  // console.log(project_data);
  if ((project_data !== null) & (project_data.getData() !== null)) {
    project_data.getData().forEach((project) => {
      console.log(project);
      let projectOption = document.createElement("option");
      projectOption.value = project._title;
      projectOption.innerText = project._title;
      input_project.appendChild(projectOption);
    });
  }
  project_div.appendChild(input_project);

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Edit";
  submitBtn.classList = "dialog-submit-btn";
  submitBtn.id = "create-todo-submit-btn";
  submitBtn.value = "default";

  const details_div = document.createElement("div");
  details_div.id = "details_div";
  details_div.appendChild(priority_div);
  details_div.appendChild(date_div);
  details_div.appendChild(project_div);
  details_div.appendChild(submitBtn);

  create_todo_form.appendChild(header_text);
  create_todo_form.appendChild(closeBtn);
  create_todo_form.appendChild(input_title);
  create_todo_form.appendChild(input_desc);
  create_todo_form.appendChild(details_div);

  dom_dialog.appendChild(create_todo_form);

  if (todoObject == null) {
    console.log("Todo is null!");
  } else {
    console.log(todoObject);
    input_title.value = todoObject._title;
    input_desc.value = todoObject._description;
    if (todoObject._dueDate != null) {
      input_duedate.value = todoObject._dueDate.toISOString().split("T")[0];
    }
    input_priority.value = todoObject._priority;
    input_project.value = todoObject._project;
  }

  //This adds the event listener to the submit button to check form valid then submit as a custom event
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(create_todo_form.checkValidity());
    console.log(input_duedate.value);
    let dueDateObj;
    console.log(dueDateObj);
    let validForm = create_todo_form.checkValidity();
    if (validForm) {
      if (input_duedate.value == null) {
        dueDateObj = null;
      } else {
        dueDateObj = new Date(input_duedate.value);
      }
      console.log(dueDateObj);
      let formData = {
        // Extract form data here, e.g., using form elements or other methods
        id: todoObject._id,
        title: input_title.value,
        desc: input_desc.value,
        dueDate: dueDateObj,
        priority: input_priority.value,
        project: input_project.value,
        // Add more properties as needed
      };

      const customEvent = new CustomEvent("editTodoEvent", {
        detail: formData,
      });
      document.dispatchEvent(customEvent);
      console.log("Edit todo event fired!");
      create_todo_form.reset();
      dom_dialog.close();
    } else {
      create_todo_form.reportValidity();
    }
  });

  //TODO: Add a new field that holds the project
  return dom_dialog;
}


/***/ }),

/***/ "./src/dom/project_list.js":
/*!*********************************!*\
  !*** ./src/dom/project_list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateProjectsListDOM)
/* harmony export */ });
/* harmony import */ var _todo_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo/project */ "./src/todo/project.js");


function generateProjectsListDOM(project_data) {
  // console.log(project_data);
  const project_list_dom = document.createElement("ul");
  project_list_dom.id = "project-list-dom";

  const project_today = { _id: 0, _title: "today" };
  const project_all = { _id: 1, _title: "all" };
  // console.log(project_today);
  // console.log(project_all);

  const project_list = [...project_data.getData()];
  project_list.unshift(project_today);
  project_list.unshift(project_all);
  // project_data.push(project_all, project_today)
  // console.log(project_data.getData());
  // console.log(project_list);

  project_list.forEach((project) => {
    // console.log(project);
    const list_elm = document.createElement("li");
    list_elm.classList = "project-list-item";
    const project_button = document.createElement("button");
    project_button.classList.add("project_btn");
    project_button.id = project._id;
    project_button.innerHTML = project._title;
    list_elm.appendChild(project_button);

    project_button.onclick = (event) => {
      project_list_dom.childNodes.forEach((el) => {
        // console.log(el);
        // console.log(el.childNodes[0]);
        let btn = el.childNodes[0];
        btn.style.fontWeight = "normal";
        btn.textContent = btn.textContent.replace(/[<>]/g, "");
        // console.log(btn);
      });
      // console.log(project_button);
      project_button.textContent = `< ${project_button.textContent} >`;
      project_button.style.fontWeight = "bold";
      event.preventDefault();
      // console.log(project._title);
      const filter_data = {
        projectID: project._id,
        project_title: project._title,
      };
      // console.log(filter_data);
      const filterEvent = new CustomEvent("filterEvent", {
        detail: filter_data,
      });
      document.dispatchEvent(filterEvent);
      console.log("Filter event fired!");
    };

    project_list_dom.appendChild(list_elm);
  });

  project_list_dom.classList = "project-list";

  return project_list_dom;
}


/***/ }),

/***/ "./src/helper/id_generator.js":
/*!************************************!*\
  !*** ./src/helper/id_generator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateUniqueId() {
  const timestamp = new Date().getTime();
  const uniqueId = `id_${timestamp}`;
  return uniqueId;
}

// Example usage
// const newUniqueId = generateUniqueId();
// console.log(newUniqueId);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateUniqueId);


/***/ }),

/***/ "./src/todo/project.js":
/*!*****************************!*\
  !*** ./src/todo/project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _helper_id_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/id_generator */ "./src/helper/id_generator.js");


class Project {
  constructor(project_title) {
    this._id = (0,_helper_id_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this._title;
    this._description;
  }

  get id() {
    return this.id;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get title() {
    return this._title;
  }

  set description(newDesc) {
    this._description = newDesc;
  }

  get description() {
    return this._description;
  }
}


/***/ }),

/***/ "./src/todo/todo.js":
/*!**************************!*\
  !*** ./src/todo/todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _helper_id_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/id_generator */ "./src/helper/id_generator.js");


class Todo {
  constructor() {
    this._id = (0,_helper_id_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this._title;
    this._description;
    this._dueDate;
    this._priority; // 1 for low, 2 for medium, 3 for high
    this._completed = false;
    this._project = null;
  }

  get id() {
    return this._id;
  }

  set id(newID) {
    this._id = newID;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get title() {
    return this._title;
  }

  set description(newDesc) {
    this._description = newDesc;
  }

  get description() {
    return this._description;
  }

  set dueDate(newDueDate) {
    if (newDueDate == null) {
      // console.log("nothing!");
      this._dueDate = null;
    } else {
      let newDate = new Date(newDueDate);
      this._dueDate = newDate;
    }
  }

  get dueDate() {
    if (this._dueDate == null) {
      return null;
    } else {
      const dateString = this._dueDate.toLocaleString();
      const [datePart, timePart] = dateString.split(", ");
      return datePart;
    }
  }

  set priority(priority) {
    this._priority = priority;
  }

  get priority() {
    return this._priority;
  }

  get completed() {
    return this._completed;
  }

  set completed(value) {
    this._completed = value;
  }

  toggleComplete() {
    if (this._completed == true) {
      this.completed = false;
    } else {
      this.completed = true;
    }
  }

  set project(projectID) {
    this._project = projectID;
  }

  get project() {
    return this._project;
  }

  displayTodo() {
    //This should have print the todo
  }
}


/***/ }),

/***/ "./src/assets/Roboto/Roboto-Bold.ttf":
/*!*******************************************!*\
  !*** ./src/assets/Roboto/Roboto-Bold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/assets/Roboto/Roboto-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/Roboto/Roboto-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/assets/icons/delete.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/delete.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fa3d2069d3067f5a44c.svg";

/***/ }),

/***/ "./src/assets/icons/edit.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ea4cf483224d228ffe4.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/todo */ "./src/todo/todo.js");
/* harmony import */ var _todo_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo/project */ "./src/todo/project.js");
/* harmony import */ var _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/dom_card */ "./src/dom/dom_card.js");
/* harmony import */ var _dom_dom_new_todo_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/dom_new_todo_btn */ "./src/dom/dom_new_todo_btn.js");
/* harmony import */ var _dom_create_todo_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/create_todo_dialog */ "./src/dom/create_todo_dialog.js");
/* harmony import */ var _database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./database/database_helper_functions */ "./src/database/database_helper_functions.js");
/* harmony import */ var _dom_project_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/project_list */ "./src/dom/project_list.js");
/* harmony import */ var _dom_create_project_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/create_project_dialog */ "./src/dom/create_project_dialog.js");
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./database/database */ "./src/database/database.js");
/* harmony import */ var _dom_edit_todo_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/edit_todo_dialog */ "./src/dom/edit_todo_dialog.js");












let todo_database;
let project_database;

function populateDatabase() {
  let todoData = (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.fetchAllData)();

  todo_database = new _database_database__WEBPACK_IMPORTED_MODULE_9__["default"]();
  project_database = new _database_database__WEBPACK_IMPORTED_MODULE_9__["default"]();

  todoData.todos.forEach((todoObj) => {
    let newTodo = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
    newTodo.id = todoObj._id;
    newTodo.title = todoObj._title;
    newTodo.description = todoObj._description;
    newTodo.dueDate = todoObj._dueDate;
    newTodo.priority = todoObj._priority;
    newTodo.completed = todoObj._completed;
    newTodo.project = todoObj._project;
    // console.log(newTodo);
    todo_database.add(newTodo);
  });
  todoData.projects.forEach((projectObj) => {
    project_database.add(projectObj);
  });

  // console.log(todo_database, project_database);
}
populateDatabase();
// console.log(project_database);

//Create todo dom element

const create_project_dom = (0,_dom_create_project_dialog__WEBPACK_IMPORTED_MODULE_8__["default"])();
document.body.appendChild(create_project_dom);

//SIDE BAR
const side_bar_dom = document.getElementById("side-bar");
//TODO: add the projects her

//DEBUGGER DOM ELEMENT: FOR DEBUGGING
// const debug_dom = document.createElement("div");
// debug_dom.id = "debug_dom";
// debug_dom.innerText = "DEBUGGER";
// side_bar_dom.appendChild(debug_dom);

const side_bar_project_list = document.createElement("div");
side_bar_dom.appendChild(side_bar_project_list);

const todo_container = document.getElementById("todo-list");

const newTodoBtn = (0,_dom_dom_new_todo_btn__WEBPACK_IMPORTED_MODULE_4__["default"])();
// console.log(newTodoBtn);
document.body.appendChild(newTodoBtn);
// newTodoBtn.addEventListener("click", (event) => {
//   // event.preventDefault();
//   create_todo_dom.showModal();
// });

//TODO: MOVE THESE FUNCTIONS OUT OF HERE!
function createNewTodo(details) {
  // console.log(details);
  const newTodo = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
  newTodo.title = details["title"];
  newTodo.description = details["desc"];
  newTodo.priority = details["priority"];
  newTodo.dueDate = details["duedate"];
  newTodo.project = details["project"];
  // console.log(newTodo);
  // console.log(newTodo.dueDate);
  return newTodo;
}

function createNewProject(details) {
  const newProject = new _todo_project__WEBPACK_IMPORTED_MODULE_2__["default"]();
  newProject.title = details["projectID"];
  // console.log(newProject);
  // newProject.title = details["title"];
  return newProject;
}

document.addEventListener("createNewTodoEvent", function (event) {
  console.log("Creating new todo and pushing to database!");
  const receivedData = event.detail;
  // console.log(receivedData);
  // Handle the received data as needed
  const newTodo = createNewTodo(receivedData);
  todo_database.add(newTodo);
  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.pushData)(todo_database.getData(), project_database.getData());
  // storeTodo(newTodo);
  populateDatabase();
  show_todos();
});

document.addEventListener("editTodoEvent", (event) => {
  console.log("Captured edited todo");
  const receivedData = event.detail;
  // console.log(todo_database.getData());
  console.log(receivedData);
  let oldTodoIndex = todo_database
    .getData()
    .findIndex((item) => item._id === receivedData.id);
  let oldTodo = todo_database.getData()[oldTodoIndex];
  // console.log(oldTodo);
  const updated_todo = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
  updated_todo.id = receivedData.id;
  updated_todo.title = receivedData.title;
  updated_todo.description = receivedData.desc;
  updated_todo.dueDate = receivedData.dueDate;
  updated_todo.priority = receivedData.priority;
  updated_todo.completed = oldTodo._completed;
  updated_todo.project = receivedData.project;
  console.log(oldTodo);
  console.log(updated_todo);
  todo_database.update(receivedData.id, updated_todo);
  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.pushData)(todo_database.getData(), project_database.getData());
  populateDatabase();
  show_todos();
});

document.addEventListener("createNewProjectEvent", function (event) {
  console.log("Creating new project and pushing to database!");
  const receivedData = event.detail;
  // console.log(receivedData);
  const newProject = createNewProject(receivedData);
  // console.log(newProject);
  project_database.add(newProject);

  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.pushData)(todo_database.getData(), project_database.getData());
  // show_todos();
  populateDatabase();
  showProjects();
});

document.addEventListener("toggleTodoComplete", (event) => {
  const data = event.detail;
  let updated_todo = todo_database
    .getData()
    .filter((todo) => todo._id == data)[0];
  if (updated_todo._completed == false) {
    updated_todo._completed = true;
  } else {
    updated_todo._completed = false;
  }
  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.pushData)(todo_database.getData(), project_database.getData());
  // console.log(data);
  // toggleTodoCompletion(data);
  populateDatabase();
  show_todos();
});

document.addEventListener("deleteTodo", (event) => {
  event.preventDefault();

  const todoToDeleteID = event.detail;
  // console.log("delete todo event captured");
  const todoToDelete = todo_database
    .getData()
    .filter((todo) => todo._id == todoToDeleteID)[0];
  todo_database.delete(todoToDelete);
  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.pushData)(todo_database.getData(), project_database.getData());

  // deleteTodo(data);
  populateDatabase();
  show_todos();
});

document.addEventListener("openEditTodoDialog", (event) => {
  event.preventDefault();
  console.log(`Edit to event event captured: ${event.detail}`);
  let todo = todo_database
    .getData()
    .filter((todo) => todo._id === event.detail)[0];
  console.log(todo);
  const edit_todo_dialog = (0,_dom_edit_todo_dialog__WEBPACK_IMPORTED_MODULE_10__["default"])(project_database, todo);
  document.body.appendChild(edit_todo_dialog);
  event.preventDefault();
  edit_todo_dialog.showModal();
});

//Event listeners to show modals

document.addEventListener("openCreateTodoDialogEvent", (event) => {
  const create_todo_dom = (0,_dom_create_todo_dialog__WEBPACK_IMPORTED_MODULE_5__["default"])(project_database);
  document.body.appendChild(create_todo_dom);
  event.preventDefault();
  create_todo_dom.showModal();
});

document.addEventListener("openCreateProjectDialogEvent", (event) => {
  event.preventDefault();
  create_project_dom.showModal();
});

document.addEventListener("openCreateNoteDialogEvent", (event) => {
  event.preventDefault();
  // create_project_dom.showModal();
});

document.addEventListener("filterEvent", (event) => {
  console.log("filter event captured!");
  console.log(event.detail.project_title);
  show_todos(event.detail.project_title);
});

function show_todos(filter = "all") {
  // const todosArray = getTodos();
  const todosArray = todo_database.getData();
  // console.log(todo_database);
  // console.log(filter);
  // console.log(todosArray);
  todo_container.innerHTML = "";

  if (filter == "all") {
    todo_container.innerHTML = "";
    todosArray.forEach((todo_obj) => {
      let todo_dom_card = (0,_dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"])(todo_obj);
      todo_container.appendChild(todo_dom_card);
    });
  } else if (filter == "today") {
    //Get today's date
    //Get all todos that are either due today or have been due
    const today = new Date();
    const dateFilteredTodos = todosArray.filter((todo) => {
      return todo._dueDate?.toDateString() === today.toDateString();
    });
    console.log(dateFilteredTodos);
    dateFilteredTodos.forEach((todo_obj) => {
      let todo_dom_card = (0,_dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"])(todo_obj);
      todo_container.appendChild(todo_dom_card);
    });
  } else {
    const filteredTodos = todosArray.filter((todo) => todo._project === filter);
    // console.log(filteredTodos);

    filteredTodos.forEach((todo_obj) => {
      let todo_dom_card = (0,_dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"])(todo_obj);
      todo_container.appendChild(todo_dom_card);
    });
  }
}

function showProjects() {
  const project_list_dom = (0,_dom_project_list__WEBPACK_IMPORTED_MODULE_7__["default"])(project_database);
  side_bar_project_list.innerHTML = "";
  side_bar_project_list.appendChild(project_list_dom);
}

// function show_projects(){
//   const
// }
// populateDatabase();
(0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.initialiseDatabase)();
show_todos();
showProjects();

// wipeData();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSx1QkFBdUIseUJBQXlCLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLHdCQUF3QixPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxV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Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEsrQztBQUNJOztBQUVwQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3SGU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQWtCO0FBQ2xCO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9kYXRhYmFzZS9kYXRhYmFzZV9oZWxwZXJfZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZG9tL2NyZWF0ZV9wcm9qZWN0X2RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL2RvbS9jcmVhdGVfdG9kb19kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9kb20vZG9tX2NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9kb20vZG9tX25ld190b2RvX2J0bi5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL2RvbS9lZGl0X3RvZG9fZGlhbG9nLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZG9tL3Byb2plY3RfbGlzdC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL2hlbHBlci9pZF9nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy90b2RvL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy90b2RvL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvUm9ib3RvL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHRmXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHRmXCIpO1xufVxuXG5odG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjA1LCAyMDUpO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYW5pbWF0ZWQtYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFuaW1hdGVkLWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLyogI3RvZG8tbGlzdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczOTJlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMTBweDtcbn0gKi9cblxuI2FwcC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jc2lkZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczOTJlO1xuICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gIGRpc3BsYXk6IGZpeGVkO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNzaWRlLWJhciBoMSB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbiNzaWRlLWJhciAjcHJvamVjdC1saXN0LWRvbSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNzaWRlLWJhciAjcHJvamVjdC1saXN0LWRvbSBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4jc2lkZS1iYXIgI3Byb2plY3QtbGlzdC1kb20gbGkgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZHM7XG59XG5cbiNzaWRlLWJhciAjcHJvamVjdC1saXN0LWRvbSBsaSBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxleC1ncm93OiA0O1xuICBwYWRkaW5nOiAxMDBweCA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiN0b2RvLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b2RvLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGNmY2Y7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDgwJTtcbiAgZmxleDogMCAwIGF1dG87XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnRvZG8tY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWIzYjM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbi50b2RvLWNhcmQuY29tcGxldGVkIGgxIHtcbiAgY29sb3I6IHJnYigxNDMsIDEzNSwgMTM1KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50b2RvLWNhcmQuY29tcGxldGVkID4gLnRvZG8tZGV0YWlscyA+IC50b2RvLWRlc2Mge1xuICBjb2xvcjogcmdiKDE0MywgMTM1LCAxMzUpO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnRvZG8tY2FyZC5oaWRkZW4ge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50b2RvLWNhcmQgLmVkaXQtZGVsZXRlLWJ0bnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4udG9kby1jYXJkLmhpZGRlbiAuZWRpdC1kZWxldGUtYnRucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvLWNhcmQgLmVkaXQtZGVsZXRlLWJ0bnMgPiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50b2RvLWNhcmQgLmVkaXQtZGVsZXRlLWJ0bnMgPiBidXR0b24gPiBpbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4udG9kby1jYXJkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDUlO1xuICBib3R0b206IDUlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi50b2RvLWNhcmQuaGlkZGVuOjpiZWZvcmUge1xuICBoZWlnaHQ6IDgwJTtcbiAgdG9wOiAxMCU7XG4gIGJvdHRvbTogMTAlO1xufVxuXG4udG9kby1jYXJkLm1lZC1wcmlvcml0eTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4udG9kby1jYXJkLmhpZ2gtcHJpb3JpdHk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnRvZG8tY2FyZC5sb3ctcHJpb3JpdHk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4udG9kby1jYXJkID4gZGl2LFxuLnRvZG8tY2FyZCA+IGgxLFxuLnRvZG8tY2FyZCA+IGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udG9kby1jYXJkLmhpZGRlbiAudG9kby1kZXRhaWxzIC50b2RvLWRlc2Mge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1jYXJkIC50b2RvLXByb2plY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZhOGFhO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udG9kby1kZXRhaWxzLWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9kby1kZXRhaWxzLWJvdHRvbSA+IHAsXG4udG9kby1kZXRhaWxzLWJvdHRvbSA+IGJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4udG9kby1kZXRhaWxzLWJvdHRvbSB7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4udG9kby10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRvZG8tZGVzYyB7XG59XG4vKiAudG9kby1jYXJkLmhpZGRlbiAudG9kby1kZXRhaWxzIC50b2RvLWRlc2Mge1xuICBkaXNwbGF5OiBub25lO1xufSAqL1xuLnRvZG8tZHVlZGF0ZSB7XG59XG5cbi50b2RvLXByaW9yaXR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tY29tcGxldGUtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2NDdlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjZGRjZWNkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNjcmVhdGUtYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMzBweDtcbiAgYm90dG9tOiAzMHB4O1xufVxuXG4jY3JlYXRlLWJ1dHRvbnMgI21pbmltaXNlZC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3BhY2l0eTogMTsgLyogTWFrZSBpdCBmdWxseSB2aXNpYmxlICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgLyogU2xpZGUgaXQgdG8gdGhlIHRvcCAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuI2NyZWF0ZS1idXR0b25zLm1pbmltaXNlZCAjbWluaW1pc2VkLWJ1dHRvbnMge1xuICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jY3JlYXRlLWJ1dHRvbnMgI21pbmltaXNlZC1idXR0b25zIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogI2RkY2VjZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5idXR0b24uY3JlYXRlLW1haW4tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIC8qIGxlZnQ6IDMwcHg7XG4gIGJvdHRvbTogMzBweDsgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuYnV0dG9uLmNyZWF0ZS1tYWluLWJ0bjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAyN3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG5idXR0b24uY3JlYXRlLW1haW4tYnRuOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcbiAgbGVmdDogMTBweDtcbiAgLyogdG9wOiAxOTBweDsgKi9cbiAgYm90dG9tOiAyN3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7ICovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG4jY3JlYXRlLWJ1dHRvbnMubWluaW1pc2VkIGJ1dHRvbi5jcmVhdGUtbWFpbi1idG46OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuI2NyZWF0ZS1idXR0b25zLm1pbmltaXNlZCBidXR0b24uY3JlYXRlLW1haW4tYnRuOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuYnV0dG9uLmNyZWF0ZS1tYWluLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmNyZWF0ZS1kaWFsb2cge1xuICBkaXNwbGF5OiByZWxhdGl2ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIC8qIGhlaWdodDogMzB2aDsgKi9cbiAgd2lkdGg6IDUwdnc7XG59XG4uY3JlYXRlLWRpYWxvZy1mb3JtI2NyZWF0ZS10b2RvLWZvcm0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xufVxuXG4uY3JlYXRlLWRpYWxvZy1mb3JtI2NyZWF0ZS1wcm9qZWN0LWZvcm0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG59XG5cbi5jcmVhdGUtZGlhbG9nLWZvcm0jY3JlYXRlLXByb2plY3QtZm9ybSBoMSB7XG4gIGdyaWQtcm93OiAxO1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcbn1cblxuLmNyZWF0ZS1kaWFsb2ctZm9ybSNjcmVhdGUtcHJvamVjdC1mb3JtIGlucHV0IHtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xufVxuXG4uY3JlYXRlLWRpYWxvZy1mb3JtI2NyZWF0ZS1wcm9qZWN0LWZvcm0gYnV0dG9uIHtcbiAgZ3JpZC1yb3c6IDM7XG4gIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAxO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi51bml2ZXJzYWwtY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVuaXZlcnNhbC1jbG9zZS1idG46OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDI3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi51bml2ZXJzYWwtY2xvc2UtYnRuOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDI3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG4vKiAjY3JlYXRlLXRvZG8tZG9tICNjcmVhdGVUb2RvQ2xvc2VCdG46OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDI3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuI2NyZWF0ZS10b2RvLWRvbSAjY3JlYXRlVG9kb0Nsb3NlQnRuOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDI3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59ICovXG5cbmgxLmRpYWxvZy1oZWFkZXIge1xuICBtYXJnaW46IG5vbmU7XG59XG4vKiAjY3JlYXRlLXRvZG8tZG9tIGgxIHtcbiAgbWFyZ2luOiBub25lO1xufSAqL1xuXG4jY3JlYXRlLXRvZG8tZG9tIGRpdiB7XG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7ICovXG4gIC8qIGFsaWduLWl0ZW1zOiBlbmQ7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jZGV0YWlsc19kaXYge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAhaW1wb3J0YW50O1xufVxuXG4jY3JlYXRlLXRvZG8tZG9tIC5kaWFsb2ctc3VibWl0LWJ0biB7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmRpYWxvZy1zdWJtaXQtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XG4gIGNvbG9yOiAjZGRjZWNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgLyogaGVpZ2h0OiAyMHB4OyAqL1xuICAvKiB3aWR0aDogMTMwcHg7ICovXG59XG5cbi5kaWFsb2ctc3VibWl0LWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmNyZWF0ZS1kaWFsb2ctZm9ybSBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2NyZWF0ZS10b2RvLWRvbSB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm5ld19lbnRyeV90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5uZXdfdG9kb19kZXNjIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uZXdfdG9kb190aXRsZTo6cGxhY2Vob2xkZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubmV3X3RvZG9fZGVzYzo6cGxhY2Vob2xkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDBEQUE0RDtBQUM5RDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwwREFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VB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RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLUJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcXFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIwNSwgMjA1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmFuaW1hdGVkLWJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFuaW1hdGVkLWJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi8qICN0b2RvLWxpc3QtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM5MmU7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufSAqL1xcblxcbiNhcHAtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZS1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzkyZTtcXG4gIHBhZGRpbmc6IDEwcHggNTBweDtcXG4gIGRpc3BsYXk6IGZpeGVkO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tQm9sZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNzaWRlLWJhciBoMSB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuI3NpZGUtYmFyICNwcm9qZWN0LWxpc3QtZG9tIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNzaWRlLWJhciAjcHJvamVjdC1saXN0LWRvbSBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNzaWRlLWJhciAjcHJvamVjdC1saXN0LWRvbSBsaSBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZHM7XFxufVxcblxcbiNzaWRlLWJhciAjcHJvamVjdC1saXN0LWRvbSBsaSBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jdG9kby1saXN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogNzAlO1xcbiAgZmxleC1ncm93OiA0O1xcbiAgcGFkZGluZzogMTAwcHggNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3RvZG8tbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udG9kby1jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGNmY2Y7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHRyYW5zZm9ybSAwLjNzO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnRvZG8tY2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliM2IzO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLnRvZG8tY2FyZC5jb21wbGV0ZWQgaDEge1xcbiAgY29sb3I6IHJnYigxNDMsIDEzNSwgMTM1KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1jYXJkLmNvbXBsZXRlZCA+IC50b2RvLWRldGFpbHMgPiAudG9kby1kZXNjIHtcXG4gIGNvbG9yOiByZ2IoMTQzLCAxMzUsIDEzNSk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8tY2FyZC5oaWRkZW4ge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kby1jYXJkIC5lZGl0LWRlbGV0ZS1idG5zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udG9kby1jYXJkLmhpZGRlbiAuZWRpdC1kZWxldGUtYnRucyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1jYXJkIC5lZGl0LWRlbGV0ZS1idG5zID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWNhcmQgLmVkaXQtZGVsZXRlLWJ0bnMgPiBidXR0b24gPiBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi50b2RvLWNhcmQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IDUlO1xcbiAgYm90dG9tOiA1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnRvZG8tY2FyZC5oaWRkZW46OmJlZm9yZSB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHRvcDogMTAlO1xcbiAgYm90dG9tOiAxMCU7XFxufVxcblxcbi50b2RvLWNhcmQubWVkLXByaW9yaXR5OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4udG9kby1jYXJkLmhpZ2gtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50b2RvLWNhcmQubG93LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi50b2RvLWNhcmQgPiBkaXYsXFxuLnRvZG8tY2FyZCA+IGgxLFxcbi50b2RvLWNhcmQgPiBidXR0b24ge1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvZG8tY2FyZC5oaWRkZW4gLnRvZG8tZGV0YWlscyAudG9kby1kZXNjIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWNhcmQgLnRvZG8tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZhOGFhO1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b2RvLWRldGFpbHMtYm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9kby1kZXRhaWxzLWJvdHRvbSA+IHAsXFxuLnRvZG8tZGV0YWlscy1ib3R0b20gPiBidXR0b24ge1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50b2RvLWRldGFpbHMtYm90dG9tIHtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1Cb2xkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG8tZGVzYyB7XFxufVxcbi8qIC50b2RvLWNhcmQuaGlkZGVuIC50b2RvLWRldGFpbHMgLnRvZG8tZGVzYyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn0gKi9cXG4udG9kby1kdWVkYXRlIHtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY29tcGxldGUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGNvbG9yOiAjZGRjZWNkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4jY3JlYXRlLWJ1dHRvbnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMzBweDtcXG4gIGJvdHRvbTogMzBweDtcXG59XFxuXFxuI2NyZWF0ZS1idXR0b25zICNtaW5pbWlzZWQtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG9wYWNpdHk6IDE7IC8qIE1ha2UgaXQgZnVsbHkgdmlzaWJsZSAqL1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyAvKiBTbGlkZSBpdCB0byB0aGUgdG9wICovXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuI2NyZWF0ZS1idXR0b25zLm1pbmltaXNlZCAjbWluaW1pc2VkLWJ1dHRvbnMge1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNjcmVhdGUtYnV0dG9ucyAjbWluaW1pc2VkLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGNvbG9yOiAjZGRjZWNkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5idXR0b24uY3JlYXRlLW1haW4tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XFxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgLyogbGVmdDogMzBweDtcXG4gIGJvdHRvbTogMzBweDsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG5idXR0b24uY3JlYXRlLW1haW4tYnRuOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xcbiAgbGVmdDogMTBweDtcXG4gIGJvdHRvbTogMjdweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG5idXR0b24uY3JlYXRlLW1haW4tYnRuOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcXG4gIGxlZnQ6IDEwcHg7XFxuICAvKiB0b3A6IDE5MHB4OyAqL1xcbiAgYm90dG9tOiAyN3B4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG4gIC8qIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgKi9cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4jY3JlYXRlLWJ1dHRvbnMubWluaW1pc2VkIGJ1dHRvbi5jcmVhdGUtbWFpbi1idG46OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuI2NyZWF0ZS1idXR0b25zLm1pbmltaXNlZCBidXR0b24uY3JlYXRlLW1haW4tYnRuOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcblxcbmJ1dHRvbi5jcmVhdGUtbWFpbi1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uY3JlYXRlLWRpYWxvZyB7XFxuICBkaXNwbGF5OiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICAvKiBoZWlnaHQ6IDMwdmg7ICovXFxuICB3aWR0aDogNTB2dztcXG59XFxuLmNyZWF0ZS1kaWFsb2ctZm9ybSNjcmVhdGUtdG9kby1mb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLmNyZWF0ZS1kaWFsb2ctZm9ybSNjcmVhdGUtcHJvamVjdC1mb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLmNyZWF0ZS1kaWFsb2ctZm9ybSNjcmVhdGUtcHJvamVjdC1mb3JtIGgxIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxufVxcblxcbi5jcmVhdGUtZGlhbG9nLWZvcm0jY3JlYXRlLXByb2plY3QtZm9ybSBpbnB1dCB7XFxuICBncmlkLXJvdzogMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbn1cXG5cXG4uY3JlYXRlLWRpYWxvZy1mb3JtI2NyZWF0ZS1wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDE7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi51bml2ZXJzYWwtY2xvc2UtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdG9wOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51bml2ZXJzYWwtY2xvc2UtYnRuOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IDI3cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbi51bml2ZXJzYWwtY2xvc2UtYnRuOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogMjdweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxufVxcbi8qICNjcmVhdGUtdG9kby1kb20gI2NyZWF0ZVRvZG9DbG9zZUJ0bjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiAyN3B4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8tZG9tICNjcmVhdGVUb2RvQ2xvc2VCdG46OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiAyN3B4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG59ICovXFxuXFxuaDEuZGlhbG9nLWhlYWRlciB7XFxuICBtYXJnaW46IG5vbmU7XFxufVxcbi8qICNjcmVhdGUtdG9kby1kb20gaDEge1xcbiAgbWFyZ2luOiBub25lO1xcbn0gKi9cXG5cXG4jY3JlYXRlLXRvZG8tZG9tIGRpdiB7XFxuICAvKiBkaXNwbGF5OiBncmlkOyAqL1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgKi9cXG4gIC8qIGFsaWduLWl0ZW1zOiBlbmQ7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jZGV0YWlsc19kaXYge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgIWltcG9ydGFudDtcXG59XFxuXFxuI2NyZWF0ZS10b2RvLWRvbSAuZGlhbG9nLXN1Ym1pdC1idG4ge1xcbiAgd2lkdGg6IDEzMHB4O1xcbn1cXG5cXG4uZGlhbG9nLXN1Ym1pdC1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XFxuICBjb2xvcjogI2RkY2VjZDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgLyogaGVpZ2h0OiAyMHB4OyAqL1xcbiAgLyogd2lkdGg6IDEzMHB4OyAqL1xcbn1cXG5cXG4uZGlhbG9nLXN1Ym1pdC1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uY3JlYXRlLWRpYWxvZy1mb3JtIGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2NyZWF0ZS10b2RvLWRvbSB0ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm5ld19lbnRyeV90aXRsZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMTVweDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5uZXdfdG9kb19kZXNjIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5ld190b2RvX3RpdGxlOjpwbGFjZWhvbGRlciB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ubmV3X3RvZG9fZGVzYzo6cGxhY2Vob2xkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGF0YWJhc2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGFiYXNlID0gW107XG4gIH1cblxuICBhZGQob2JqZWN0KSB7XG4gICAgdGhpcy5kYXRhYmFzZS5wdXNoKG9iamVjdCk7XG4gIH1cblxuICBkZWxldGUob2JqZWN0KSB7XG4gICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMuZGF0YWJhc2UuaW5kZXhPZihvYmplY3QpO1xuICAgIGlmIChpbmRleFRvUmVtb3ZlICE9PSAtMSkge1xuICAgICAgdGhpcy5kYXRhYmFzZS5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgSXRlbSB3aXRoIGlkICR7aWR9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgSXRlbSB3aXRoIGlkICR7aWR9IG5vdCBmb3VuZC5gKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqZWN0SUQsIG5ld09iamVjdCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhYmFzZS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IG9iamVjdElEKTtcblxuICAgIC8vIElmIGl0ZW0gd2l0aCBnaXZlbiBpZCBpcyBmb3VuZCwgdXBkYXRlIGl0XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5kYXRhYmFzZVtpbmRleF0gPSBuZXdPYmplY3Q7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgSXRlbSB3aXRoIGlkICR7b2JqZWN0SUR9IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgSXRlbSB3aXRoIGlkICR7b2JqZWN0SUR9IG5vdCBmb3VuZC5gKTtcbiAgICB9XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlO1xuICB9XG59XG4iLCJjb25zdCBkZWZhdWx0X2RhdGFiYXNlID0ge1xuICB0b2RvczogW10sXG4gIHByb2plY3RzOiBbXSxcbiAgLy8gbm90ZXM6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpc2VEYXRhYmFzZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdF9kYXRhYmFzZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hBbGxEYXRhKCkge1xuICBjb25zdCB0b2RvRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvX2RhdGFcIikpO1xuICByZXR1cm4gdG9kb0RhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFRvZG9EYXRhKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9fZGF0YVwiKSkudG9kb3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2plY3REYXRhKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9fZGF0YVwiKSkucHJvamVjdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoRGF0YSh0b2RvX2RhdGEsIHByb2plY3RfZGF0YSkge1xuICBjb25zdCB1cGRhdGVkRGF0YSA9IHtcbiAgICB0b2RvczogdG9kb19kYXRhLFxuICAgIHByb2plY3RzOiBwcm9qZWN0X2RhdGEsXG4gIH07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb19kYXRhXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWREYXRhKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXBlRGF0YSgpIHtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIGluaXRpYWxpc2VEYXRhYmFzZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb3MoKSB7XG4gIGxldCB0b2RvX2RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb19kYXRhXCIpKS50b2RvcztcbiAgcmV0dXJuIHRvZG9fZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICBsZXQgcHJvamVjdF9kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9fZGF0YVwiKSkudG9kb3M7XG4gIHJldHVybiBwcm9qZWN0X2RhdGE7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RE9NKCkge1xuICBjb25zdCBkb21fZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZG9tX2RpYWxvZy5pZCA9IFwiY3JlYXRlLXByb2plY3QtZG9tXCI7XG4gIGRvbV9kaWFsb2cuY2xhc3NMaXN0ID0gXCJjcmVhdGUtZGlhbG9nXCI7XG5cbiAgY29uc3QgY3JlYXRlX3Byb2plY3RfZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjcmVhdGVfcHJvamVjdF9mb3JtLmlkID0gXCJjcmVhdGUtcHJvamVjdC1mb3JtXCI7XG4gIGNyZWF0ZV9wcm9qZWN0X2Zvcm0uY2xhc3NMaXN0ID0gXCJjcmVhdGUtZGlhbG9nLWZvcm1cIjtcbiAgLy8gY3JlYXRlX3Byb2plY3RfZm9ybS5tZXRob2QgPSBcImRpYWxvZ1wiO1xuXG4gIGNvbnN0IGhlYWRlcl90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJfdGV4dC5pbm5lclRleHQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gIGhlYWRlcl90ZXh0LmNsYXNzTGlzdCA9IFwiZGlhbG9nLWhlYWRlclwiO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgLy8gY2xvc2VCdG4uaW5uZXJUZXh0ID0gXCJcIjtcblxuICBjbG9zZUJ0bi5pZCA9IFwiY3JlYXRlVG9kb0Nsb3NlQnRuXCI7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdCA9IFwidW5pdmVyc2FsLWNsb3NlLWJ0blwiO1xuICAvLyBjbG9zZUJ0bi5mb3JtTWV0aG9kID0gXCJkaWFsb2dcIjtcbiAgLy8gY2xvc2VCdG4udmFsdWUgPSBcImNhbmNlbFwiO1xuXG4gIGNsb3NlQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkb21fZGlhbG9nLmNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJvamVjdF90aXRsZS5wbGFjZWhvbGRlciA9IFwiTmV3IFByb2plY3QgTmFtZVwiO1xuICBwcm9qZWN0X3RpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgcHJvamVjdF90aXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3X2VudHJ5X3RpdGxlXCIpO1xuICBwcm9qZWN0X3RpdGxlLm5hbWUgPSBcInByb2plY3RfdGl0bGVcIjtcblxuICAvLyBjb25zdCBwcm9qZWN0X3RpdGxlX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAvLyBwcm9qZWN0X3RpdGxlX2xhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdCBOYW1lXCI7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLmlubmVyVGV4dCA9IFwiQ3JlYXRlXCI7XG4gIHN1Ym1pdEJ0bi5pZCA9IFwiY3JlYXRlLXByb2plY3Qtc3VibWl0LWJ0blwiO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0ID0gXCJkaWFsb2ctc3VibWl0LWJ0blwiO1xuICAvLyBjb25zb2xlLmxvZyhzdWJtaXRCdG4pO1xuICAvLyBzdWJtaXRCdG4udmFsdWUgPSBcImRlZmF1bHRcIjtcblxuICBjcmVhdGVfcHJvamVjdF9mb3JtLmFwcGVuZENoaWxkKGhlYWRlcl90ZXh0KTtcbiAgY3JlYXRlX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0X3RpdGxlKTtcbiAgLy8gY3JlYXRlX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0X3RpdGxlX2xhYmVsKTtcbiAgY3JlYXRlX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICBjcmVhdGVfcHJvamVjdF9mb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgZG9tX2RpYWxvZy5hcHBlbmRDaGlsZChjcmVhdGVfcHJvamVjdF9mb3JtKTtcblxuICBzdWJtaXRCdG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjcmVhdGVfcHJvamVjdF9mb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgbGV0IGZvcm1EYXRhID0ge1xuICAgICAgICBwcm9qZWN0SUQ6IHByb2plY3RfdGl0bGUudmFsdWUsXG4gICAgICB9O1xuXG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgICBjb25zdCBjcmVhdGVfcHJvamVjdF9ldmVudCA9IG5ldyBDdXN0b21FdmVudChcImNyZWF0ZU5ld1Byb2plY3RFdmVudFwiLCB7XG4gICAgICAgIGRldGFpbDogZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlX3Byb2plY3RfZXZlbnQpO1xuICAgICAgY3JlYXRlX3Byb2plY3RfZm9ybS5yZXNldCgpO1xuICAgICAgZG9tX2RpYWxvZy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVfcHJvamVjdF9mb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBkb21fZGlhbG9nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVDcmVhdGVUb2RvRE9NKHByb2plY3RfZGF0YSkge1xuICBjb25zdCBkb21fZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZG9tX2RpYWxvZy5pZCA9IFwiY3JlYXRlLXRvZG8tZG9tXCI7XG4gIGRvbV9kaWFsb2cuY2xhc3NMaXN0ID0gXCJjcmVhdGUtZGlhbG9nXCI7XG5cbiAgY29uc3QgY3JlYXRlX3RvZG9fZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uaWQgPSBcImNyZWF0ZS10b2RvLWZvcm1cIjtcbiAgY3JlYXRlX3RvZG9fZm9ybS5jbGFzc0xpc3QgPSBcImNyZWF0ZS1kaWFsb2ctZm9ybVwiO1xuICAvLyBjcmVhdGVfdG9kb19mb3JtLm1ldGhvZCA9IFwiZGlhbG9nXCI7XG5cbiAgY29uc3QgaGVhZGVyX3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlcl90ZXh0LmlubmVyVGV4dCA9IFwiTmV3IFRvZG9cIjtcbiAgaGVhZGVyX3RleHQuY2xhc3NMaXN0ID0gXCJkaWFsb2ctaGVhZGVyXCI7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ0bi5pZCA9IFwiY3JlYXRlVG9kb0Nsb3NlQnRuXCI7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdCA9IFwidW5pdmVyc2FsLWNsb3NlLWJ0blwiO1xuICBjbG9zZUJ0bi5mb3JtTWV0aG9kID0gXCJkaWFsb2dcIjtcbiAgY2xvc2VCdG4udmFsdWUgPSBcImNhbmNlbFwiO1xuICBjbG9zZUJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9tX2RpYWxvZy5jbG9zZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQ2xvc2luZyBtb2RhbFwiKTtcbiAgfTtcblxuICBjb25zdCBpbnB1dF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRfdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBuZXcgdG9kb1wiO1xuICBpbnB1dF90aXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3X2VudHJ5X3RpdGxlXCIpO1xuICBpbnB1dF90aXRsZS5pZCA9IFwibmV3X3RvZG9fdGl0bGVcIjtcbiAgaW5wdXRfdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dF90aXRsZS5uYW1lID0gXCJpbnB1dF90aXRsZVwiO1xuXG4gIGNvbnN0IGlucHV0X2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGlucHV0X2Rlc2MucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG4gIGlucHV0X2Rlc2MuY2xhc3NMaXN0LmFkZChcIm5ld190b2RvX2Rlc2NcIik7XG5cbiAgY29uc3QgZGF0ZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbnB1dF9kdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dF9kdWVkYXRlLmNsYXNzTGlzdCA9IFwibmV3X3RvZG9fZHVlZGF0ZVwiO1xuICBpbnB1dF9kdWVkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgY29uc3QgaW5wdXRfZHVlZGF0ZV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5wdXRfZHVlZGF0ZV9sYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOlwiO1xuICBkYXRlX2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9kdWVkYXRlX2xhYmVsKTtcbiAgZGF0ZV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfZHVlZGF0ZSk7XG5cbiAgY29uc3QgcHJpb3JpdHlfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5wdXRfcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBwcmlvcml0eV9oaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlfbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlfbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICBwcmlvcml0eV9oaWdoLnZhbHVlID0gXCJoaWdoLXByaW9yaXR5XCI7XG4gIHByaW9yaXR5X2hpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5X21lZC52YWx1ZSA9IFwibWVkLXByaW9yaXR5XCI7XG4gIHByaW9yaXR5X21lZC5pbm5lclRleHQgPSBcIk1lZFwiO1xuICBwcmlvcml0eV9sb3cudmFsdWUgPSBcImxvdy1wcmlvcml0eVwiO1xuICBwcmlvcml0eV9sb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcblxuICBpbnB1dF9wcmlvcml0eS5jbGFzc0xpc3QgPSBcIm5ld190b2RvX3ByaW9yaXR5XCI7XG5cbiAgaW5wdXRfcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlfaGlnaCk7XG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X21lZCk7XG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X2xvdyk7XG4gIGlucHV0X3ByaW9yaXR5Lm9wdGlvbnNbMV0uc2VsZWN0ZWQgPSB0cnVlO1xuICBjb25zdCBpbnB1dF9wcmlvcml0eV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5wdXRfcHJpb3JpdHlfbGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogXCI7XG4gIHByaW9yaXR5X2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9wcmlvcml0eV9sYWJlbCk7XG4gIHByaW9yaXR5X2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9wcmlvcml0eSk7XG5cbiAgY29uc3QgcHJvamVjdF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0X2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcm9qZWN0X2xhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdDogXCI7XG4gIHByb2plY3RfZGl2LmFwcGVuZENoaWxkKHByb2plY3RfbGFiZWwpO1xuICBjb25zdCBpbnB1dF9wcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJvamVjdF9vcHRpb25fZGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByb2plY3Rfb3B0aW9uX2RlZmF1bHQudmFsdWUgPSBudWxsO1xuICBwcm9qZWN0X29wdGlvbl9kZWZhdWx0LmlubmVyVGV4dCA9IFwibm9uZVwiO1xuICBpbnB1dF9wcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3Rfb3B0aW9uX2RlZmF1bHQpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X2RhdGEpO1xuICBpZiAoKHByb2plY3RfZGF0YSAhPT0gbnVsbCkgJiAocHJvamVjdF9kYXRhLmdldERhdGEoKSAhPT0gbnVsbCkpIHtcbiAgICBwcm9qZWN0X2RhdGEuZ2V0RGF0YSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3QuX3RpdGxlO1xuICAgICAgcHJvamVjdE9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0Ll90aXRsZTtcbiAgICAgIGlucHV0X3Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfSk7XG4gIH1cbiAgcHJvamVjdF9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcHJvamVjdCk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLmlubmVyVGV4dCA9IFwiQ3JlYXRlXCI7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QgPSBcImRpYWxvZy1zdWJtaXQtYnRuXCI7XG4gIHN1Ym1pdEJ0bi5pZCA9IFwiY3JlYXRlLXRvZG8tc3VibWl0LWJ0blwiO1xuICBzdWJtaXRCdG4udmFsdWUgPSBcImRlZmF1bHRcIjtcblxuICBjb25zdCBkZXRhaWxzX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRldGFpbHNfZGl2LmlkID0gXCJkZXRhaWxzX2RpdlwiO1xuICBkZXRhaWxzX2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9kaXYpO1xuICBkZXRhaWxzX2Rpdi5hcHBlbmRDaGlsZChkYXRlX2Rpdik7XG4gIGRldGFpbHNfZGl2LmFwcGVuZENoaWxkKHByb2plY3RfZGl2KTtcbiAgZGV0YWlsc19kaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGhlYWRlcl90ZXh0KTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfdGl0bGUpO1xuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X2Rlc2MpO1xuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGRldGFpbHNfZGl2KTtcblxuICBkb21fZGlhbG9nLmFwcGVuZENoaWxkKGNyZWF0ZV90b2RvX2Zvcm0pO1xuXG4gIC8vIGlmICh0b2RvT2JqZWN0ID09IG51bGwpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIlRvZG8gaXMgbnVsbCFcIik7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgaW5wdXRfdGl0bGUudmFsdWUgPSB0b2RvT2JqZWN0Ll90aXRsZTtcbiAgLy8gICBpbnB1dF9kZXNjLnZhbHVlID0gdG9kb09iamVjdC5fZGVzY3JpcHRpb247XG4gIC8vICAgaW5wdXRfZHVlZGF0ZS52YWx1ZSA9IHRvZG9PYmplY3QuX2R1ZURhdGU7XG4gIC8vICAgaW5wdXRfcHJpb3JpdHkudmFsdWUgPSB0b2RvT2JqZWN0LmlucHV0X3ByaW9yaXR5O1xuICAvLyAgIGlucHV0X3Byb2plY3QudmFsdWUgPSB0b2RvT2JqZWN0Ll9wcm9qZWN0O1xuICAvLyB9XG5cbiAgLy9UaGlzIGFkZHMgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdWJtaXQgYnV0dG9uIHRvIGNoZWNrIGZvcm0gdmFsaWQgdGhlbiBzdWJtaXQgYXMgYSBjdXN0b20gZXZlbnRcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjcmVhdGVfdG9kb19mb3JtLmNoZWNrVmFsaWRpdHkoKSk7XG4gICAgLy8gY29uc29sZS5sb2coaW5wdXRfZHVlZGF0ZS52YWx1ZSk7XG4gICAgbGV0IGR1ZURhdGVPYmo7XG4gICAgLy8gY29uc29sZS5sb2coZHVlRGF0ZU9iaik7XG4gICAgbGV0IHZhbGlkRm9ybSA9IGNyZWF0ZV90b2RvX2Zvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgIGlmICh2YWxpZEZvcm0pIHtcbiAgICAgIGlmIChpbnB1dF9kdWVkYXRlLnZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZHVlRGF0ZU9iaiA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlT2JqID0gbmV3IERhdGUoaW5wdXRfZHVlZGF0ZS52YWx1ZSk7XG4gICAgICB9XG4gICAgICBsZXQgZm9ybURhdGEgPSB7XG4gICAgICAgIC8vIEV4dHJhY3QgZm9ybSBkYXRhIGhlcmUsIGUuZy4sIHVzaW5nIGZvcm0gZWxlbWVudHMgb3Igb3RoZXIgbWV0aG9kc1xuICAgICAgICB0aXRsZTogaW5wdXRfdGl0bGUudmFsdWUsXG4gICAgICAgIGRlc2M6IGlucHV0X2Rlc2MudmFsdWUsXG4gICAgICAgIGR1ZWRhdGU6IGR1ZURhdGVPYmosXG4gICAgICAgIHByaW9yaXR5OiBpbnB1dF9wcmlvcml0eS52YWx1ZSxcbiAgICAgICAgcHJvamVjdDogaW5wdXRfcHJvamVjdC52YWx1ZSxcbiAgICAgICAgLy8gQWRkIG1vcmUgcHJvcGVydGllcyBhcyBuZWVkZWRcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiY3JlYXRlTmV3VG9kb0V2ZW50XCIsIHtcbiAgICAgICAgZGV0YWlsOiBmb3JtRGF0YSxcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkNyZWF0ZSB0b2RvIGV2ZW50IGZpcmVkIVwiKTtcbiAgICAgIGNyZWF0ZV90b2RvX2Zvcm0ucmVzZXQoKTtcbiAgICAgIGRvbV9kaWFsb2cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlX3RvZG9fZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9UT0RPOiBBZGQgYSBuZXcgZmllbGQgdGhhdCBob2xkcyB0aGUgcHJvamVjdFxuICByZXR1cm4gZG9tX2RpYWxvZztcbn1cbiIsImltcG9ydCBlZGl0U1ZHIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVTVkcgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVG9kb0NhcmRET00odG9kbykge1xuICAvLyBjb25zdCBlZGl0QnV0dG9uU1ZHID0gXCJzcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCI7XG4gIC8vIGNvbnN0IGRlbGV0ZUJ1dHRvblNWRyA9IFwic3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCI7XG4gIC8vIGNvbnNvbGUubG9nKHRvZG8pO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvLmR1ZWRhdGUpO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvLl9kdWVkYXRlKTtcbiAgLy8gY29uc29sZS5sb2codG9kby5nZXREdWVEYXRlKTtcbiAgLy8gY29uc29sZS5sb2codG9kby5wcm9qZWN0KTtcbiAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY2FyZERpdi5jbGFzc0xpc3QgPSBcInRvZG8tY2FyZCBoaWRkZW5cIjtcblxuICBsZXQgdG9kb0NvbXBsZXRlZCA9IHRvZG8uX2NvbXBsZXRlZDtcbiAgaWYgKHRvZG9Db21wbGV0ZWQpIHtcbiAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKFwidW5jb21wbGV0ZWRcIik7XG4gIH1cblxuICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQodG9kby5fcHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvZG9JRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RvSUQuaW5uZXJIVE1MID0gdG9kby5faWQ7XG4gIHRvZG9JRC5jbGFzc0xpc3QgPSBcInRvZG8taWRcIjtcbiAgdG9kb0lELnN0eWxlID0gXCJkaXNwbGF5OiBub25lXCI7XG5cbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0b2RvVGl0bGUuaW5uZXJIVE1MID0gdG9kby5fdGl0bGU7XG4gIHRvZG9UaXRsZS5jbGFzc0xpc3QgPSBcInRvZG8tdGl0bGVcIjtcblxuICBjb25zdCB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EZXRhaWxzLmNsYXNzTGlzdCA9IFwidG9kby1kZXRhaWxzXCI7XG5cbiAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb0Rlc2MuaW5uZXJIVE1MID0gdG9kby5fZGVzY3JpcHRpb247XG4gIHRvZG9EZXNjLmNsYXNzTGlzdCA9IFwidG9kby1kZXNjXCI7XG5cbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb0R1ZURhdGUuaW5uZXJIVE1MID0gdG9kby5kdWVEYXRlO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvLmR1ZURhdGUpO1xuICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QgPSBcInRvZG8tZHVlZGF0ZVwiO1xuXG4gIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29tcGxldGVCdXR0b24uaW5uZXJIVE1MID0gXCJEb25lXCI7XG4gIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdCA9IFwidG9kby1jb21wbGV0ZS1idG5cIjtcblxuICBjb25zdCBlZGl0RGVsZXRlQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVkaXREZWxldGVCdG5zLmNsYXNzTGlzdCA9IFwiZWRpdC1kZWxldGUtYnRuc1wiO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVsZXRlQnRuSWNvbi5zcmMgPSBkZWxldGVTVkc7XG4gIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG5JY29uKTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGVkaXRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZWRpdEJ0bkljb24uc3JjID0gZWRpdFNWRztcbiAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0QnRuSWNvbik7XG4gIGVkaXREZWxldGVCdG5zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBlZGl0RGVsZXRlQnRucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIGNvbnN0IHRvZG9EZXRhaWxzQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0RldGFpbHNCb3R0b20uY2xhc3NMaXN0LmFkZChcInRvZG8tZGV0YWlscy1ib3R0b21cIik7XG4gIC8vIGNvbnNvbGUubG9nKHRvZG8pO1xuICBpZiAodG9kby5wcm9qZWN0ICE9IFwibnVsbFwiKSB7XG4gICAgY29uc3QgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvUHJvamVjdC5pbm5lckhUTUwgPSB0b2RvLnByb2plY3Q7XG4gICAgdG9kb1Byb2plY3QuY2xhc3NMaXN0ID0gXCJ0b2RvLXByb2plY3RcIjtcbiAgICB0b2RvRGV0YWlsc0JvdHRvbS5hcHBlbmRDaGlsZCh0b2RvUHJvamVjdCk7XG4gIH1cblxuICB0b2RvRGV0YWlsc0JvdHRvbS5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gIHRvZG9EZXRhaWxzQm90dG9tLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcblxuICB0b2RvRGV0YWlscy5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG4gIHRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvZG9EZXRhaWxzQm90dG9tKTtcblxuICBjYXJkRGl2LmFwcGVuZENoaWxkKHRvZG9JRCk7XG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgY2FyZERpdi5hcHBlbmRDaGlsZCh0b2RvRGV0YWlscyk7XG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQoZWRpdERlbGV0ZUJ0bnMpO1xuXG4gIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJ0b2dnbGVUb2RvQ29tcGxldGVcIiwge1xuICAgICAgZGV0YWlsOiB0b2RvLl9pZCxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRvZ2dsZUNvbXBsZXRlRXZlbnQpO1xuICB9KTtcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJEZWxldGUgdG9kbyBldmVudCBmaXJlZFwiKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGRlbGV0ZVRvZG9FdmVudCA9IG5ldyBDdXN0b21FdmVudChcImRlbGV0ZVRvZG9cIiwge1xuICAgICAgZGV0YWlsOiB0b2RvLl9pZCxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGRlbGV0ZVRvZG9FdmVudCk7XG4gIH0pO1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkVESVRcIik7XG5cbiAgICBjb25zdCBlZGl0VG9kb0V2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwib3BlbkVkaXRUb2RvRGlhbG9nXCIsIHtcbiAgICAgIGRldGFpbDogdG9kby5faWQsXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGVkaXRUb2RvRXZlbnQpO1xuICB9KTtcblxuICBjYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubm9kZU5hbWUpO1xuICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiQlVUVE9OXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhcmREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgICBjYXJkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjYXJkRGl2O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUb2RvQnRuKCkge1xuICBjb25zdCBjcmVhdGVfYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNyZWF0ZV9idXR0b25zLmlkID0gXCJjcmVhdGUtYnV0dG9uc1wiO1xuICBjcmVhdGVfYnV0dG9ucy5jbGFzc05hbWUgPSBcIm1pbmltaXNlZFwiO1xuXG4gIGNvbnN0IGJ1dHRvbl9tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uX21haW4uaWQgPSBcIm1haW4tYnV0dG9uXCI7XG4gIGJ1dHRvbl9tYWluLmNsYXNzTGlzdCA9IFwiY3JlYXRlLW1haW4tYnRuIGFuaW1hdGVkLWJ1dHRvblwiO1xuXG4gIC8vRGl2IHRvIGhvdXNlIHRoZSBtaW5pbWlzZWQgYnV0dG9uc1xuICBjb25zdCBtaW5pbWlzZWRfYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pbmltaXNlZF9idXR0b25zLmlkID0gXCJtaW5pbWlzZWQtYnV0dG9uc1wiO1xuICAvLyBtaW5pbWlzZWRfYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwibWluaW1pc2VkXCIpO1xuXG4gIC8vQ3JlYXRlIHRvZG8gYnV0dG9uXG4gIGNvbnN0IGNyZWF0ZV90b2RvX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNyZWF0ZV90b2RvX2J0bi5pZCA9IFwiY3JlYXRlLXRvZG8tYnRuXCI7XG4gIGNyZWF0ZV90b2RvX2J0bi5pbm5lclRleHQgPSBcIkNyZWF0ZSBUb2RvXCI7XG4gIGNyZWF0ZV90b2RvX2J0bi5jbGFzc0xpc3QgPSBcImFuaW1hdGVkLWJ1dHRvblwiO1xuXG4gIC8vQ3JlYXRlIHByb2plY3QgYnV0dG9uXG4gIGNvbnN0IGNyZWF0ZV9wcm9qZWN0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNyZWF0ZV9wcm9qZWN0X2J0bi5pZCA9IFwiY3JlYXRlLXByb2plY3QtYnRuXCI7XG4gIGNyZWF0ZV9wcm9qZWN0X2J0bi5pbm5lclRleHQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG4gIGNyZWF0ZV9wcm9qZWN0X2J0bi5jbGFzc0xpc3QgPSBcImFuaW1hdGVkLWJ1dHRvblwiO1xuXG4gIC8vQ3JlYXRlIG5vdGUgYnV0dG9uXG4gIGNvbnN0IGNyZWF0ZV9ub3RlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNyZWF0ZV9ub3RlX2J0bi5pZCA9IFwiY3JlYXRlLW5vdGUtYnRuXCI7XG4gIGNyZWF0ZV9ub3RlX2J0bi5pbm5lclRleHQgPSBcIkNyZWF0ZSBOb3RlXCI7XG4gIGNyZWF0ZV9ub3RlX2J0bi5jbGFzc0xpc3QgPSBcImFuaW1hdGVkLWJ1dHRvblwiO1xuXG4gIG1pbmltaXNlZF9idXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZV90b2RvX2J0bik7XG4gIG1pbmltaXNlZF9idXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZV9wcm9qZWN0X2J0bik7XG4gIG1pbmltaXNlZF9idXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZV9ub3RlX2J0bik7XG5cbiAgY3JlYXRlX2J1dHRvbnMuYXBwZW5kQ2hpbGQobWluaW1pc2VkX2J1dHRvbnMpO1xuICBjcmVhdGVfYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b25fbWFpbik7XG5cbiAgLy9BZGRpbmcgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICBidXR0b25fbWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlX2J1dHRvbnMuY2xhc3NMaXN0LnRvZ2dsZShcIm1pbmltaXNlZFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjcmVhdGVfYnV0dG9ucy5jbGFzc0xpc3QpO1xuICB9KTtcbiAgY3JlYXRlX3RvZG9fYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgbmV3IFRvZG9cIik7XG4gICAgY29uc3QgY3JlYXRlX3RvZG9fZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJvcGVuQ3JlYXRlVG9kb0RpYWxvZ0V2ZW50XCIpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlX3RvZG9fZXZlbnQpO1xuICB9KTtcbiAgY3JlYXRlX3Byb2plY3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgbmV3IHByb2plY3RcIik7XG4gICAgY29uc3QgY3JlYXRlX3Byb2plY3RfZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXG4gICAgICBcIm9wZW5DcmVhdGVQcm9qZWN0RGlhbG9nRXZlbnRcIlxuICAgICk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVfcHJvamVjdF9ldmVudCk7XG4gIH0pO1xuICBjcmVhdGVfbm90ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBuZXcgbm90ZVwiKTtcbiAgICBjb25zdCBjcmVhdGVfbm90ZV9ldmVudCA9IG5ldyBDdXN0b21FdmVudChcIm9wZW5DcmVhdGVOb3RlRGlhbG9nRXZlbnRcIik7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVfbm90ZV9ldmVudCk7XG4gIH0pO1xuXG4gIC8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIC8vIGJ1dHRvbi5pbm5lckhUTUwgPSBcIk5FVyBUT0RPXCI7XG4gIC8vIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8tYnRuXCIpO1xuXG4gIHJldHVybiBjcmVhdGVfYnV0dG9ucztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlRWRpdFRvZG9ET00ocHJvamVjdF9kYXRhLCB0b2RvT2JqZWN0KSB7XG4gIGNvbnN0IGRvbV9kaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBkb21fZGlhbG9nLmlkID0gXCJjcmVhdGUtdG9kby1kb21cIjtcbiAgZG9tX2RpYWxvZy5jbGFzc0xpc3QgPSBcImNyZWF0ZS1kaWFsb2dcIjtcblxuICBjb25zdCBjcmVhdGVfdG9kb19mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIC8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5pZCA9IFwiY3JlYXRlLXRvZG8tZm9ybVwiO1xuICBjcmVhdGVfdG9kb19mb3JtLmNsYXNzTGlzdCA9IFwiY3JlYXRlLWRpYWxvZy1mb3JtXCI7XG4gIC8vIGNyZWF0ZV90b2RvX2Zvcm0ubWV0aG9kID0gXCJkaWFsb2dcIjtcblxuICBjb25zdCBoZWFkZXJfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyX3RleHQuaW5uZXJUZXh0ID0gXCJFZGl0IFRvZG9cIjtcbiAgaGVhZGVyX3RleHQuY2xhc3NMaXN0ID0gXCJkaWFsb2ctaGVhZGVyXCI7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ0bi5pZCA9IFwiY3JlYXRlVG9kb0Nsb3NlQnRuXCI7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdCA9IFwidW5pdmVyc2FsLWNsb3NlLWJ0blwiO1xuICBjbG9zZUJ0bi5mb3JtTWV0aG9kID0gXCJkaWFsb2dcIjtcbiAgY2xvc2VCdG4udmFsdWUgPSBcImNhbmNlbFwiO1xuICBjbG9zZUJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9tX2RpYWxvZy5jbG9zZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQ2xvc2luZyBtb2RhbFwiKTtcbiAgfTtcblxuICBjb25zdCBpbnB1dF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRfdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBuZXcgdG9kb1wiO1xuICBpbnB1dF90aXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3X2VudHJ5X3RpdGxlXCIpO1xuICBpbnB1dF90aXRsZS5pZCA9IFwibmV3X3RvZG9fdGl0bGVcIjtcbiAgaW5wdXRfdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dF90aXRsZS5uYW1lID0gXCJpbnB1dF90aXRsZVwiO1xuXG4gIGNvbnN0IGlucHV0X2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGlucHV0X2Rlc2MucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG4gIGlucHV0X2Rlc2MuY2xhc3NMaXN0LmFkZChcIm5ld190b2RvX2Rlc2NcIik7XG5cbiAgY29uc3QgZGF0ZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbnB1dF9kdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dF9kdWVkYXRlLmNsYXNzTGlzdCA9IFwibmV3X3RvZG9fZHVlZGF0ZVwiO1xuICBpbnB1dF9kdWVkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgY29uc3QgaW5wdXRfZHVlZGF0ZV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5wdXRfZHVlZGF0ZV9sYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOlwiO1xuICBkYXRlX2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9kdWVkYXRlX2xhYmVsKTtcbiAgZGF0ZV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfZHVlZGF0ZSk7XG5cbiAgY29uc3QgcHJpb3JpdHlfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5wdXRfcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBwcmlvcml0eV9oaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlfbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlfbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICBwcmlvcml0eV9oaWdoLnZhbHVlID0gXCJoaWdoLXByaW9yaXR5XCI7XG4gIHByaW9yaXR5X2hpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5X21lZC52YWx1ZSA9IFwibWVkLXByaW9yaXR5XCI7XG4gIHByaW9yaXR5X21lZC5pbm5lclRleHQgPSBcIk1lZFwiO1xuICBwcmlvcml0eV9sb3cudmFsdWUgPSBcImxvdy1wcmlvcml0eVwiO1xuICBwcmlvcml0eV9sb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcblxuICBpbnB1dF9wcmlvcml0eS5jbGFzc0xpc3QgPSBcIm5ld190b2RvX3ByaW9yaXR5XCI7XG5cbiAgaW5wdXRfcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlfaGlnaCk7XG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X21lZCk7XG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X2xvdyk7XG4gIGlucHV0X3ByaW9yaXR5Lm9wdGlvbnNbMV0uc2VsZWN0ZWQgPSB0cnVlO1xuICBjb25zdCBpbnB1dF9wcmlvcml0eV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5wdXRfcHJpb3JpdHlfbGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogXCI7XG4gIHByaW9yaXR5X2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9wcmlvcml0eV9sYWJlbCk7XG4gIHByaW9yaXR5X2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9wcmlvcml0eSk7XG5cbiAgY29uc3QgcHJvamVjdF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0X2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcm9qZWN0X2xhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdDogXCI7XG4gIHByb2plY3RfZGl2LmFwcGVuZENoaWxkKHByb2plY3RfbGFiZWwpO1xuICBjb25zdCBpbnB1dF9wcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJvamVjdF9vcHRpb25fZGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByb2plY3Rfb3B0aW9uX2RlZmF1bHQudmFsdWUgPSBudWxsO1xuICBwcm9qZWN0X29wdGlvbl9kZWZhdWx0LmlubmVyVGV4dCA9IFwibm9uZVwiO1xuICBpbnB1dF9wcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3Rfb3B0aW9uX2RlZmF1bHQpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X2RhdGEpO1xuICBpZiAoKHByb2plY3RfZGF0YSAhPT0gbnVsbCkgJiAocHJvamVjdF9kYXRhLmdldERhdGEoKSAhPT0gbnVsbCkpIHtcbiAgICBwcm9qZWN0X2RhdGEuZ2V0RGF0YSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3QuX3RpdGxlO1xuICAgICAgcHJvamVjdE9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0Ll90aXRsZTtcbiAgICAgIGlucHV0X3Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfSk7XG4gIH1cbiAgcHJvamVjdF9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcHJvamVjdCk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0ID0gXCJkaWFsb2ctc3VibWl0LWJ0blwiO1xuICBzdWJtaXRCdG4uaWQgPSBcImNyZWF0ZS10b2RvLXN1Ym1pdC1idG5cIjtcbiAgc3VibWl0QnRuLnZhbHVlID0gXCJkZWZhdWx0XCI7XG5cbiAgY29uc3QgZGV0YWlsc19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzX2Rpdi5pZCA9IFwiZGV0YWlsc19kaXZcIjtcbiAgZGV0YWlsc19kaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlfZGl2KTtcbiAgZGV0YWlsc19kaXYuYXBwZW5kQ2hpbGQoZGF0ZV9kaXYpO1xuICBkZXRhaWxzX2Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0X2Rpdik7XG4gIGRldGFpbHNfZGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChoZWFkZXJfdGV4dCk7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X3RpdGxlKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChpbnB1dF9kZXNjKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzX2Rpdik7XG5cbiAgZG9tX2RpYWxvZy5hcHBlbmRDaGlsZChjcmVhdGVfdG9kb19mb3JtKTtcblxuICBpZiAodG9kb09iamVjdCA9PSBudWxsKSB7XG4gICAgY29uc29sZS5sb2coXCJUb2RvIGlzIG51bGwhXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKHRvZG9PYmplY3QpO1xuICAgIGlucHV0X3RpdGxlLnZhbHVlID0gdG9kb09iamVjdC5fdGl0bGU7XG4gICAgaW5wdXRfZGVzYy52YWx1ZSA9IHRvZG9PYmplY3QuX2Rlc2NyaXB0aW9uO1xuICAgIGlmICh0b2RvT2JqZWN0Ll9kdWVEYXRlICE9IG51bGwpIHtcbiAgICAgIGlucHV0X2R1ZWRhdGUudmFsdWUgPSB0b2RvT2JqZWN0Ll9kdWVEYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgIH1cbiAgICBpbnB1dF9wcmlvcml0eS52YWx1ZSA9IHRvZG9PYmplY3QuX3ByaW9yaXR5O1xuICAgIGlucHV0X3Byb2plY3QudmFsdWUgPSB0b2RvT2JqZWN0Ll9wcm9qZWN0O1xuICB9XG5cbiAgLy9UaGlzIGFkZHMgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdWJtaXQgYnV0dG9uIHRvIGNoZWNrIGZvcm0gdmFsaWQgdGhlbiBzdWJtaXQgYXMgYSBjdXN0b20gZXZlbnRcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhjcmVhdGVfdG9kb19mb3JtLmNoZWNrVmFsaWRpdHkoKSk7XG4gICAgY29uc29sZS5sb2coaW5wdXRfZHVlZGF0ZS52YWx1ZSk7XG4gICAgbGV0IGR1ZURhdGVPYmo7XG4gICAgY29uc29sZS5sb2coZHVlRGF0ZU9iaik7XG4gICAgbGV0IHZhbGlkRm9ybSA9IGNyZWF0ZV90b2RvX2Zvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgIGlmICh2YWxpZEZvcm0pIHtcbiAgICAgIGlmIChpbnB1dF9kdWVkYXRlLnZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZHVlRGF0ZU9iaiA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlT2JqID0gbmV3IERhdGUoaW5wdXRfZHVlZGF0ZS52YWx1ZSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhkdWVEYXRlT2JqKTtcbiAgICAgIGxldCBmb3JtRGF0YSA9IHtcbiAgICAgICAgLy8gRXh0cmFjdCBmb3JtIGRhdGEgaGVyZSwgZS5nLiwgdXNpbmcgZm9ybSBlbGVtZW50cyBvciBvdGhlciBtZXRob2RzXG4gICAgICAgIGlkOiB0b2RvT2JqZWN0Ll9pZCxcbiAgICAgICAgdGl0bGU6IGlucHV0X3RpdGxlLnZhbHVlLFxuICAgICAgICBkZXNjOiBpbnB1dF9kZXNjLnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlT2JqLFxuICAgICAgICBwcmlvcml0eTogaW5wdXRfcHJpb3JpdHkudmFsdWUsXG4gICAgICAgIHByb2plY3Q6IGlucHV0X3Byb2plY3QudmFsdWUsXG4gICAgICAgIC8vIEFkZCBtb3JlIHByb3BlcnRpZXMgYXMgbmVlZGVkXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudChcImVkaXRUb2RvRXZlbnRcIiwge1xuICAgICAgICBkZXRhaWw6IGZvcm1EYXRhLFxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRWRpdCB0b2RvIGV2ZW50IGZpcmVkIVwiKTtcbiAgICAgIGNyZWF0ZV90b2RvX2Zvcm0ucmVzZXQoKTtcbiAgICAgIGRvbV9kaWFsb2cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlX3RvZG9fZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9UT0RPOiBBZGQgYSBuZXcgZmllbGQgdGhhdCBob2xkcyB0aGUgcHJvamVjdFxuICByZXR1cm4gZG9tX2RpYWxvZztcbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi90b2RvL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0c0xpc3RET00ocHJvamVjdF9kYXRhKSB7XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RfZGF0YSk7XG4gIGNvbnN0IHByb2plY3RfbGlzdF9kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RfbGlzdF9kb20uaWQgPSBcInByb2plY3QtbGlzdC1kb21cIjtcblxuICBjb25zdCBwcm9qZWN0X3RvZGF5ID0geyBfaWQ6IDAsIF90aXRsZTogXCJ0b2RheVwiIH07XG4gIGNvbnN0IHByb2plY3RfYWxsID0geyBfaWQ6IDEsIF90aXRsZTogXCJhbGxcIiB9O1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X3RvZGF5KTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdF9hbGwpO1xuXG4gIGNvbnN0IHByb2plY3RfbGlzdCA9IFsuLi5wcm9qZWN0X2RhdGEuZ2V0RGF0YSgpXTtcbiAgcHJvamVjdF9saXN0LnVuc2hpZnQocHJvamVjdF90b2RheSk7XG4gIHByb2plY3RfbGlzdC51bnNoaWZ0KHByb2plY3RfYWxsKTtcbiAgLy8gcHJvamVjdF9kYXRhLnB1c2gocHJvamVjdF9hbGwsIHByb2plY3RfdG9kYXkpXG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RfZGF0YS5nZXREYXRhKCkpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X2xpc3QpO1xuXG4gIHByb2plY3RfbGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgY29uc3QgbGlzdF9lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdF9lbG0uY2xhc3NMaXN0ID0gXCJwcm9qZWN0LWxpc3QtaXRlbVwiO1xuICAgIGNvbnN0IHByb2plY3RfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcm9qZWN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9idG5cIik7XG4gICAgcHJvamVjdF9idXR0b24uaWQgPSBwcm9qZWN0Ll9pZDtcbiAgICBwcm9qZWN0X2J1dHRvbi5pbm5lckhUTUwgPSBwcm9qZWN0Ll90aXRsZTtcbiAgICBsaXN0X2VsbS5hcHBlbmRDaGlsZChwcm9qZWN0X2J1dHRvbik7XG5cbiAgICBwcm9qZWN0X2J1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBwcm9qZWN0X2xpc3RfZG9tLmNoaWxkTm9kZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgbGV0IGJ0biA9IGVsLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIGJ0bi5zdHlsZS5mb250V2VpZ2h0ID0gXCJub3JtYWxcIjtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYnRuLnRleHRDb250ZW50LnJlcGxhY2UoL1s8Pl0vZywgXCJcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJ0bik7XG4gICAgICB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RfYnV0dG9uKTtcbiAgICAgIHByb2plY3RfYnV0dG9uLnRleHRDb250ZW50ID0gYDwgJHtwcm9qZWN0X2J1dHRvbi50ZXh0Q29udGVudH0gPmA7XG4gICAgICBwcm9qZWN0X2J1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdC5fdGl0bGUpO1xuICAgICAgY29uc3QgZmlsdGVyX2RhdGEgPSB7XG4gICAgICAgIHByb2plY3RJRDogcHJvamVjdC5faWQsXG4gICAgICAgIHByb2plY3RfdGl0bGU6IHByb2plY3QuX3RpdGxlLFxuICAgICAgfTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcl9kYXRhKTtcbiAgICAgIGNvbnN0IGZpbHRlckV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiZmlsdGVyRXZlbnRcIiwge1xuICAgICAgICBkZXRhaWw6IGZpbHRlcl9kYXRhLFxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZpbHRlckV2ZW50KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyIGV2ZW50IGZpcmVkIVwiKTtcbiAgICB9O1xuXG4gICAgcHJvamVjdF9saXN0X2RvbS5hcHBlbmRDaGlsZChsaXN0X2VsbSk7XG4gIH0pO1xuXG4gIHByb2plY3RfbGlzdF9kb20uY2xhc3NMaXN0ID0gXCJwcm9qZWN0LWxpc3RcIjtcblxuICByZXR1cm4gcHJvamVjdF9saXN0X2RvbTtcbn1cbiIsImZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlSWQoKSB7XG4gIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBjb25zdCB1bmlxdWVJZCA9IGBpZF8ke3RpbWVzdGFtcH1gO1xuICByZXR1cm4gdW5pcXVlSWQ7XG59XG5cbi8vIEV4YW1wbGUgdXNhZ2Vcbi8vIGNvbnN0IG5ld1VuaXF1ZUlkID0gZ2VuZXJhdGVVbmlxdWVJZCgpO1xuLy8gY29uc29sZS5sb2cobmV3VW5pcXVlSWQpO1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVVuaXF1ZUlkO1xuIiwiaW1wb3J0IGdlbmVyYXRlVW5pcXVlSWQgZnJvbSBcIi4uL2hlbHBlci9pZF9nZW5lcmF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RfdGl0bGUpIHtcbiAgICB0aGlzLl9pZCA9IGdlbmVyYXRlVW5pcXVlSWQoKTtcbiAgICB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2MpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgZ2VuZXJhdGVVbmlxdWVJZCBmcm9tIFwiLi4vaGVscGVyL2lkX2dlbmVyYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5faWQgPSBnZW5lcmF0ZVVuaXF1ZUlkKCk7XG4gICAgdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5fZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZHVlRGF0ZTtcbiAgICB0aGlzLl9wcmlvcml0eTsgLy8gMSBmb3IgbG93LCAyIGZvciBtZWRpdW0sIDMgZm9yIGhpZ2hcbiAgICB0aGlzLl9jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9wcm9qZWN0ID0gbnVsbDtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBzZXQgaWQobmV3SUQpIHtcbiAgICB0aGlzLl9pZCA9IG5ld0lEO1xuICB9XG5cbiAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSBuZXdUaXRsZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24obmV3RGVzYykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgZHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgaWYgKG5ld0R1ZURhdGUgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJub3RoaW5nIVwiKTtcbiAgICAgIHRoaXMuX2R1ZURhdGUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKG5ld0R1ZURhdGUpO1xuICAgICAgdGhpcy5fZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2R1ZURhdGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSB0aGlzLl9kdWVEYXRlLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICBjb25zdCBbZGF0ZVBhcnQsIHRpbWVQYXJ0XSA9IGRhdGVTdHJpbmcuc3BsaXQoXCIsIFwiKTtcbiAgICAgIHJldHVybiBkYXRlUGFydDtcbiAgICB9XG4gIH1cblxuICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIGdldCBjb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcbiAgfVxuXG4gIHNldCBjb21wbGV0ZWQodmFsdWUpIHtcbiAgICB0aGlzLl9jb21wbGV0ZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLl9jb21wbGV0ZWQgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldCBwcm9qZWN0KHByb2plY3RJRCkge1xuICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0SUQ7XG4gIH1cblxuICBnZXQgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgfVxuXG4gIGRpc3BsYXlUb2RvKCkge1xuICAgIC8vVGhpcyBzaG91bGQgaGF2ZSBwcmludCB0aGUgdG9kb1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8vdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vdG9kby9wcm9qZWN0XCI7XG5pbXBvcnQgZ2VuZXJhdGVUb2RvQ2FyZERPTSBmcm9tIFwiLi9kb20vZG9tX2NhcmRcIjtcbmltcG9ydCBnZW5lcmF0ZVRvZG9CdG4gZnJvbSBcIi4vZG9tL2RvbV9uZXdfdG9kb19idG5cIjtcbmltcG9ydCBnZW5lcmF0ZUNyZWF0ZVRvZG9ET00gZnJvbSBcIi4vZG9tL2NyZWF0ZV90b2RvX2RpYWxvZ1wiO1xuaW1wb3J0IHtcbiAgd2lwZURhdGEsXG4gIGZldGNoQWxsRGF0YSxcbiAgcHVzaERhdGEsXG4gIGluaXRpYWxpc2VEYXRhYmFzZSxcbn0gZnJvbSBcIi4vZGF0YWJhc2UvZGF0YWJhc2VfaGVscGVyX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IGdlbmVyYXRlUHJvamVjdHNMaXN0RE9NIGZyb20gXCIuL2RvbS9wcm9qZWN0X2xpc3RcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0RE9NIGZyb20gXCIuL2RvbS9jcmVhdGVfcHJvamVjdF9kaWFsb2dcIjtcbmltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi9kYXRhYmFzZS9kYXRhYmFzZVwiO1xuaW1wb3J0IGdlbmVyYXRlRWRpdFRvZG9ET00gZnJvbSBcIi4vZG9tL2VkaXRfdG9kb19kaWFsb2dcIjtcblxubGV0IHRvZG9fZGF0YWJhc2U7XG5sZXQgcHJvamVjdF9kYXRhYmFzZTtcblxuZnVuY3Rpb24gcG9wdWxhdGVEYXRhYmFzZSgpIHtcbiAgbGV0IHRvZG9EYXRhID0gZmV0Y2hBbGxEYXRhKCk7XG5cbiAgdG9kb19kYXRhYmFzZSA9IG5ldyBkYXRhYmFzZSgpO1xuICBwcm9qZWN0X2RhdGFiYXNlID0gbmV3IGRhdGFiYXNlKCk7XG5cbiAgdG9kb0RhdGEudG9kb3MuZm9yRWFjaCgodG9kb09iaikgPT4ge1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8oKTtcbiAgICBuZXdUb2RvLmlkID0gdG9kb09iai5faWQ7XG4gICAgbmV3VG9kby50aXRsZSA9IHRvZG9PYmouX3RpdGxlO1xuICAgIG5ld1RvZG8uZGVzY3JpcHRpb24gPSB0b2RvT2JqLl9kZXNjcmlwdGlvbjtcbiAgICBuZXdUb2RvLmR1ZURhdGUgPSB0b2RvT2JqLl9kdWVEYXRlO1xuICAgIG5ld1RvZG8ucHJpb3JpdHkgPSB0b2RvT2JqLl9wcmlvcml0eTtcbiAgICBuZXdUb2RvLmNvbXBsZXRlZCA9IHRvZG9PYmouX2NvbXBsZXRlZDtcbiAgICBuZXdUb2RvLnByb2plY3QgPSB0b2RvT2JqLl9wcm9qZWN0O1xuICAgIC8vIGNvbnNvbGUubG9nKG5ld1RvZG8pO1xuICAgIHRvZG9fZGF0YWJhc2UuYWRkKG5ld1RvZG8pO1xuICB9KTtcbiAgdG9kb0RhdGEucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdE9iaikgPT4ge1xuICAgIHByb2plY3RfZGF0YWJhc2UuYWRkKHByb2plY3RPYmopO1xuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyh0b2RvX2RhdGFiYXNlLCBwcm9qZWN0X2RhdGFiYXNlKTtcbn1cbnBvcHVsYXRlRGF0YWJhc2UoKTtcbi8vIGNvbnNvbGUubG9nKHByb2plY3RfZGF0YWJhc2UpO1xuXG4vL0NyZWF0ZSB0b2RvIGRvbSBlbGVtZW50XG5cbmNvbnN0IGNyZWF0ZV9wcm9qZWN0X2RvbSA9IGNyZWF0ZVByb2plY3RET00oKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlX3Byb2plY3RfZG9tKTtcblxuLy9TSURFIEJBUlxuY29uc3Qgc2lkZV9iYXJfZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWJhclwiKTtcbi8vVE9ETzogYWRkIHRoZSBwcm9qZWN0cyBoZXJcblxuLy9ERUJVR0dFUiBET00gRUxFTUVOVDogRk9SIERFQlVHR0lOR1xuLy8gY29uc3QgZGVidWdfZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vIGRlYnVnX2RvbS5pZCA9IFwiZGVidWdfZG9tXCI7XG4vLyBkZWJ1Z19kb20uaW5uZXJUZXh0ID0gXCJERUJVR0dFUlwiO1xuLy8gc2lkZV9iYXJfZG9tLmFwcGVuZENoaWxkKGRlYnVnX2RvbSk7XG5cbmNvbnN0IHNpZGVfYmFyX3Byb2plY3RfbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlX2Jhcl9kb20uYXBwZW5kQ2hpbGQoc2lkZV9iYXJfcHJvamVjdF9saXN0KTtcblxuY29uc3QgdG9kb19jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbGlzdFwiKTtcblxuY29uc3QgbmV3VG9kb0J0biA9IGdlbmVyYXRlVG9kb0J0bigpO1xuLy8gY29uc29sZS5sb2cobmV3VG9kb0J0bik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld1RvZG9CdG4pO1xuLy8gbmV3VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4vLyAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGNyZWF0ZV90b2RvX2RvbS5zaG93TW9kYWwoKTtcbi8vIH0pO1xuXG4vL1RPRE86IE1PVkUgVEhFU0UgRlVOQ1RJT05TIE9VVCBPRiBIRVJFIVxuZnVuY3Rpb24gY3JlYXRlTmV3VG9kbyhkZXRhaWxzKSB7XG4gIC8vIGNvbnNvbGUubG9nKGRldGFpbHMpO1xuICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oKTtcbiAgbmV3VG9kby50aXRsZSA9IGRldGFpbHNbXCJ0aXRsZVwiXTtcbiAgbmV3VG9kby5kZXNjcmlwdGlvbiA9IGRldGFpbHNbXCJkZXNjXCJdO1xuICBuZXdUb2RvLnByaW9yaXR5ID0gZGV0YWlsc1tcInByaW9yaXR5XCJdO1xuICBuZXdUb2RvLmR1ZURhdGUgPSBkZXRhaWxzW1wiZHVlZGF0ZVwiXTtcbiAgbmV3VG9kby5wcm9qZWN0ID0gZGV0YWlsc1tcInByb2plY3RcIl07XG4gIC8vIGNvbnNvbGUubG9nKG5ld1RvZG8pO1xuICAvLyBjb25zb2xlLmxvZyhuZXdUb2RvLmR1ZURhdGUpO1xuICByZXR1cm4gbmV3VG9kbztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChkZXRhaWxzKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgpO1xuICBuZXdQcm9qZWN0LnRpdGxlID0gZGV0YWlsc1tcInByb2plY3RJRFwiXTtcbiAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4gIC8vIG5ld1Byb2plY3QudGl0bGUgPSBkZXRhaWxzW1widGl0bGVcIl07XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY3JlYXRlTmV3VG9kb0V2ZW50XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zb2xlLmxvZyhcIkNyZWF0aW5nIG5ldyB0b2RvIGFuZCBwdXNoaW5nIHRvIGRhdGFiYXNlIVwiKTtcbiAgY29uc3QgcmVjZWl2ZWREYXRhID0gZXZlbnQuZGV0YWlsO1xuICAvLyBjb25zb2xlLmxvZyhyZWNlaXZlZERhdGEpO1xuICAvLyBIYW5kbGUgdGhlIHJlY2VpdmVkIGRhdGEgYXMgbmVlZGVkXG4gIGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVOZXdUb2RvKHJlY2VpdmVkRGF0YSk7XG4gIHRvZG9fZGF0YWJhc2UuYWRkKG5ld1RvZG8pO1xuICBwdXNoRGF0YSh0b2RvX2RhdGFiYXNlLmdldERhdGEoKSwgcHJvamVjdF9kYXRhYmFzZS5nZXREYXRhKCkpO1xuICAvLyBzdG9yZVRvZG8obmV3VG9kbyk7XG4gIHBvcHVsYXRlRGF0YWJhc2UoKTtcbiAgc2hvd190b2RvcygpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlZGl0VG9kb0V2ZW50XCIsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkNhcHR1cmVkIGVkaXRlZCB0b2RvXCIpO1xuICBjb25zdCByZWNlaXZlZERhdGEgPSBldmVudC5kZXRhaWw7XG4gIC8vIGNvbnNvbGUubG9nKHRvZG9fZGF0YWJhc2UuZ2V0RGF0YSgpKTtcbiAgY29uc29sZS5sb2cocmVjZWl2ZWREYXRhKTtcbiAgbGV0IG9sZFRvZG9JbmRleCA9IHRvZG9fZGF0YWJhc2VcbiAgICAuZ2V0RGF0YSgpXG4gICAgLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHJlY2VpdmVkRGF0YS5pZCk7XG4gIGxldCBvbGRUb2RvID0gdG9kb19kYXRhYmFzZS5nZXREYXRhKClbb2xkVG9kb0luZGV4XTtcbiAgLy8gY29uc29sZS5sb2cob2xkVG9kbyk7XG4gIGNvbnN0IHVwZGF0ZWRfdG9kbyA9IG5ldyBUb2RvKCk7XG4gIHVwZGF0ZWRfdG9kby5pZCA9IHJlY2VpdmVkRGF0YS5pZDtcbiAgdXBkYXRlZF90b2RvLnRpdGxlID0gcmVjZWl2ZWREYXRhLnRpdGxlO1xuICB1cGRhdGVkX3RvZG8uZGVzY3JpcHRpb24gPSByZWNlaXZlZERhdGEuZGVzYztcbiAgdXBkYXRlZF90b2RvLmR1ZURhdGUgPSByZWNlaXZlZERhdGEuZHVlRGF0ZTtcbiAgdXBkYXRlZF90b2RvLnByaW9yaXR5ID0gcmVjZWl2ZWREYXRhLnByaW9yaXR5O1xuICB1cGRhdGVkX3RvZG8uY29tcGxldGVkID0gb2xkVG9kby5fY29tcGxldGVkO1xuICB1cGRhdGVkX3RvZG8ucHJvamVjdCA9IHJlY2VpdmVkRGF0YS5wcm9qZWN0O1xuICBjb25zb2xlLmxvZyhvbGRUb2RvKTtcbiAgY29uc29sZS5sb2codXBkYXRlZF90b2RvKTtcbiAgdG9kb19kYXRhYmFzZS51cGRhdGUocmVjZWl2ZWREYXRhLmlkLCB1cGRhdGVkX3RvZG8pO1xuICBwdXNoRGF0YSh0b2RvX2RhdGFiYXNlLmdldERhdGEoKSwgcHJvamVjdF9kYXRhYmFzZS5nZXREYXRhKCkpO1xuICBwb3B1bGF0ZURhdGFiYXNlKCk7XG4gIHNob3dfdG9kb3MoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY3JlYXRlTmV3UHJvamVjdEV2ZW50XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zb2xlLmxvZyhcIkNyZWF0aW5nIG5ldyBwcm9qZWN0IGFuZCBwdXNoaW5nIHRvIGRhdGFiYXNlIVwiKTtcbiAgY29uc3QgcmVjZWl2ZWREYXRhID0gZXZlbnQuZGV0YWlsO1xuICAvLyBjb25zb2xlLmxvZyhyZWNlaXZlZERhdGEpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdChyZWNlaXZlZERhdGEpO1xuICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbiAgcHJvamVjdF9kYXRhYmFzZS5hZGQobmV3UHJvamVjdCk7XG5cbiAgcHVzaERhdGEodG9kb19kYXRhYmFzZS5nZXREYXRhKCksIHByb2plY3RfZGF0YWJhc2UuZ2V0RGF0YSgpKTtcbiAgLy8gc2hvd190b2RvcygpO1xuICBwb3B1bGF0ZURhdGFiYXNlKCk7XG4gIHNob3dQcm9qZWN0cygpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b2dnbGVUb2RvQ29tcGxldGVcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBldmVudC5kZXRhaWw7XG4gIGxldCB1cGRhdGVkX3RvZG8gPSB0b2RvX2RhdGFiYXNlXG4gICAgLmdldERhdGEoKVxuICAgIC5maWx0ZXIoKHRvZG8pID0+IHRvZG8uX2lkID09IGRhdGEpWzBdO1xuICBpZiAodXBkYXRlZF90b2RvLl9jb21wbGV0ZWQgPT0gZmFsc2UpIHtcbiAgICB1cGRhdGVkX3RvZG8uX2NvbXBsZXRlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdXBkYXRlZF90b2RvLl9jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfVxuICBwdXNoRGF0YSh0b2RvX2RhdGFiYXNlLmdldERhdGEoKSwgcHJvamVjdF9kYXRhYmFzZS5nZXREYXRhKCkpO1xuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gdG9nZ2xlVG9kb0NvbXBsZXRpb24oZGF0YSk7XG4gIHBvcHVsYXRlRGF0YWJhc2UoKTtcbiAgc2hvd190b2RvcygpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkZWxldGVUb2RvXCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHRvZG9Ub0RlbGV0ZUlEID0gZXZlbnQuZGV0YWlsO1xuICAvLyBjb25zb2xlLmxvZyhcImRlbGV0ZSB0b2RvIGV2ZW50IGNhcHR1cmVkXCIpO1xuICBjb25zdCB0b2RvVG9EZWxldGUgPSB0b2RvX2RhdGFiYXNlXG4gICAgLmdldERhdGEoKVxuICAgIC5maWx0ZXIoKHRvZG8pID0+IHRvZG8uX2lkID09IHRvZG9Ub0RlbGV0ZUlEKVswXTtcbiAgdG9kb19kYXRhYmFzZS5kZWxldGUodG9kb1RvRGVsZXRlKTtcbiAgcHVzaERhdGEodG9kb19kYXRhYmFzZS5nZXREYXRhKCksIHByb2plY3RfZGF0YWJhc2UuZ2V0RGF0YSgpKTtcblxuICAvLyBkZWxldGVUb2RvKGRhdGEpO1xuICBwb3B1bGF0ZURhdGFiYXNlKCk7XG4gIHNob3dfdG9kb3MoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwib3BlbkVkaXRUb2RvRGlhbG9nXCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZyhgRWRpdCB0byBldmVudCBldmVudCBjYXB0dXJlZDogJHtldmVudC5kZXRhaWx9YCk7XG4gIGxldCB0b2RvID0gdG9kb19kYXRhYmFzZVxuICAgIC5nZXREYXRhKClcbiAgICAuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCA9PT0gZXZlbnQuZGV0YWlsKVswXTtcbiAgY29uc29sZS5sb2codG9kbyk7XG4gIGNvbnN0IGVkaXRfdG9kb19kaWFsb2cgPSBnZW5lcmF0ZUVkaXRUb2RvRE9NKHByb2plY3RfZGF0YWJhc2UsIHRvZG8pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRfdG9kb19kaWFsb2cpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBlZGl0X3RvZG9fZGlhbG9nLnNob3dNb2RhbCgpO1xufSk7XG5cbi8vRXZlbnQgbGlzdGVuZXJzIHRvIHNob3cgbW9kYWxzXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuQ3JlYXRlVG9kb0RpYWxvZ0V2ZW50XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBjcmVhdGVfdG9kb19kb20gPSBnZW5lcmF0ZUNyZWF0ZVRvZG9ET00ocHJvamVjdF9kYXRhYmFzZSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlX3RvZG9fZG9tKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlX3RvZG9fZG9tLnNob3dNb2RhbCgpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuQ3JlYXRlUHJvamVjdERpYWxvZ0V2ZW50XCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVfcHJvamVjdF9kb20uc2hvd01vZGFsKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5DcmVhdGVOb3RlRGlhbG9nRXZlbnRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIGNyZWF0ZV9wcm9qZWN0X2RvbS5zaG93TW9kYWwoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZmlsdGVyRXZlbnRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiZmlsdGVyIGV2ZW50IGNhcHR1cmVkIVwiKTtcbiAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLnByb2plY3RfdGl0bGUpO1xuICBzaG93X3RvZG9zKGV2ZW50LmRldGFpbC5wcm9qZWN0X3RpdGxlKTtcbn0pO1xuXG5mdW5jdGlvbiBzaG93X3RvZG9zKGZpbHRlciA9IFwiYWxsXCIpIHtcbiAgLy8gY29uc3QgdG9kb3NBcnJheSA9IGdldFRvZG9zKCk7XG4gIGNvbnN0IHRvZG9zQXJyYXkgPSB0b2RvX2RhdGFiYXNlLmdldERhdGEoKTtcbiAgLy8gY29uc29sZS5sb2codG9kb19kYXRhYmFzZSk7XG4gIC8vIGNvbnNvbGUubG9nKGZpbHRlcik7XG4gIC8vIGNvbnNvbGUubG9nKHRvZG9zQXJyYXkpO1xuICB0b2RvX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChmaWx0ZXIgPT0gXCJhbGxcIikge1xuICAgIHRvZG9fY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdG9kb3NBcnJheS5mb3JFYWNoKCh0b2RvX29iaikgPT4ge1xuICAgICAgbGV0IHRvZG9fZG9tX2NhcmQgPSBnZW5lcmF0ZVRvZG9DYXJkRE9NKHRvZG9fb2JqKTtcbiAgICAgIHRvZG9fY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9fZG9tX2NhcmQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGZpbHRlciA9PSBcInRvZGF5XCIpIHtcbiAgICAvL0dldCB0b2RheSdzIGRhdGVcbiAgICAvL0dldCBhbGwgdG9kb3MgdGhhdCBhcmUgZWl0aGVyIGR1ZSB0b2RheSBvciBoYXZlIGJlZW4gZHVlXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVGaWx0ZXJlZFRvZG9zID0gdG9kb3NBcnJheS5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgIHJldHVybiB0b2RvLl9kdWVEYXRlPy50b0RhdGVTdHJpbmcoKSA9PT0gdG9kYXkudG9EYXRlU3RyaW5nKCk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coZGF0ZUZpbHRlcmVkVG9kb3MpO1xuICAgIGRhdGVGaWx0ZXJlZFRvZG9zLmZvckVhY2goKHRvZG9fb2JqKSA9PiB7XG4gICAgICBsZXQgdG9kb19kb21fY2FyZCA9IGdlbmVyYXRlVG9kb0NhcmRET00odG9kb19vYmopO1xuICAgICAgdG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb19kb21fY2FyZCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IHRvZG9zQXJyYXkuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9wcm9qZWN0ID09PSBmaWx0ZXIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcmVkVG9kb3MpO1xuXG4gICAgZmlsdGVyZWRUb2Rvcy5mb3JFYWNoKCh0b2RvX29iaikgPT4ge1xuICAgICAgbGV0IHRvZG9fZG9tX2NhcmQgPSBnZW5lcmF0ZVRvZG9DYXJkRE9NKHRvZG9fb2JqKTtcbiAgICAgIHRvZG9fY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9fZG9tX2NhcmQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdF9saXN0X2RvbSA9IGdlbmVyYXRlUHJvamVjdHNMaXN0RE9NKHByb2plY3RfZGF0YWJhc2UpO1xuICBzaWRlX2Jhcl9wcm9qZWN0X2xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgc2lkZV9iYXJfcHJvamVjdF9saXN0LmFwcGVuZENoaWxkKHByb2plY3RfbGlzdF9kb20pO1xufVxuXG4vLyBmdW5jdGlvbiBzaG93X3Byb2plY3RzKCl7XG4vLyAgIGNvbnN0XG4vLyB9XG4vLyBwb3B1bGF0ZURhdGFiYXNlKCk7XG5pbml0aWFsaXNlRGF0YWJhc2UoKTtcbnNob3dfdG9kb3MoKTtcbnNob3dQcm9qZWN0cygpO1xuXG4vLyB3aXBlRGF0YSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
/* harmony export */   editData: () => (/* binding */ editData),
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

// export function storeTodo(newTodo) {
//   //Get the database from localStorage
//   let todo_data = getTodos();
//   console.log(typeof newTodo);
//   todo_data.push(newTodo);
//   localStorage.setItem("todo_data", JSON.stringify({ todos: todo_data }));
// }

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

// export function toggleTodoCompletion(todoID) {
//   //Get the data and find the todo to update
//   let todo_data = getTodos();
//   let updated_todo = todo_data.filter((todo) => todo._id == todoID)[0];

//   //Toggle the completed attribute
//   if (updated_todo._completed == false) {
//     updated_todo._completed = true;
//   } else {
//     updated_todo._completed = false;
//   }

//   //Push it to the localstorage
//   localStorage.setItem("todo_data", JSON.stringify({ todos: todo_data }));
// }

function editData() {}

// export function deleteTodo(todoID) {
//   const currentTodos = getTodos();
//   const filteredTodos = currentTodos.filter((todo) => todo._id !== todoID);
//   localStorage.setItem("todo_data", JSON.stringify({ todos: filteredTodos }));
// }


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
show_todos();
showProjects();
// console.log(project_database);
// console.log(todo_database);
// wipeData();
// console.log("HELLO");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSx1QkFBdUIseUJBQXlCLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLHdCQUF3QixPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxV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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLK0M7QUFDSTs7QUFFcEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0Es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SUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBCQUEwQix5REFBbUI7QUFDN0M7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIseURBQW1CO0FBQzdDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsNkRBQXVCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9kYXRhYmFzZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL2RhdGFiYXNlL2RhdGFiYXNlX2hlbHBlcl9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9kb20vY3JlYXRlX3Byb2plY3RfZGlhbG9nLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZG9tL2NyZWF0ZV90b2RvX2RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL2RvbS9kb21fY2FyZC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL2RvbS9kb21fbmV3X3RvZG9fYnRuLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZG9tL2VkaXRfdG9kb19kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9kb20vcHJvamVjdF9saXN0LmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvaGVscGVyL2lkX2dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL3RvZG8vcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL3RvZG8vdG9kby5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0dGZcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0dGZcIik7XG59XG5cbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMDUsIDIwNSk7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hbmltYXRlZC1idXR0b24ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYW5pbWF0ZWQtYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiAjdG9kby1saXN0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM5MmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxMHB4O1xufSAqL1xuXG4jYXBwLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNzaWRlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM5MmU7XG4gIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgZGlzcGxheTogZml4ZWQ7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIiwgc2Fucy1zZXJpZjtcbn1cblxuI3NpZGUtYmFyIGgxIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuI3NpZGUtYmFyICNwcm9qZWN0LWxpc3QtZG9tIHtcbiAgcGFkZGluZzogMDtcbn1cblxuI3NpZGUtYmFyICNwcm9qZWN0LWxpc3QtZG9tIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNzaWRlLWJhciAjcHJvamVjdC1saXN0LWRvbSBsaSBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkcztcbn1cblxuI3NpZGUtYmFyICNwcm9qZWN0LWxpc3QtZG9tIGxpIGJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuI3RvZG8tbGlzdC1jb250YWluZXIge1xuICB3aWR0aDogNzAlO1xuICBmbGV4LWdyb3c6IDQ7XG4gIHBhZGRpbmc6IDEwMHB4IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3RvZG8tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRvZG8tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4Y2ZjZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCB0cmFuc2Zvcm0gMC4zcztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4udG9kby1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjNiMztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLnRvZG8tY2FyZC5jb21wbGV0ZWQgaDEge1xuICBjb2xvcjogcmdiKDE0MywgMTM1LCAxMzUpO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnRvZG8tY2FyZC5jb21wbGV0ZWQgPiAudG9kby1kZXRhaWxzID4gLnRvZG8tZGVzYyB7XG4gIGNvbG9yOiByZ2IoMTQzLCAxMzUsIDEzNSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udG9kby1jYXJkLmhpZGRlbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRvZG8tY2FyZCAuZWRpdC1kZWxldGUtYnRucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi50b2RvLWNhcmQuaGlkZGVuIC5lZGl0LWRlbGV0ZS1idG5zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tY2FyZCAuZWRpdC1kZWxldGUtYnRucyA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRvZG8tY2FyZCAuZWRpdC1kZWxldGUtYnRucyA+IGJ1dHRvbiA+IGltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi50b2RvLWNhcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogNSU7XG4gIGJvdHRvbTogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRvZG8tY2FyZC5oaWRkZW46OmJlZm9yZSB7XG4gIGhlaWdodDogODAlO1xuICB0b3A6IDEwJTtcbiAgYm90dG9tOiAxMCU7XG59XG5cbi50b2RvLWNhcmQubWVkLXByaW9yaXR5OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi50b2RvLWNhcmQuaGlnaC1wcmlvcml0eTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4udG9kby1jYXJkLmxvdy1wcmlvcml0eTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi50b2RvLWNhcmQgPiBkaXYsXG4udG9kby1jYXJkID4gaDEsXG4udG9kby1jYXJkID4gYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50b2RvLWNhcmQuaGlkZGVuIC50b2RvLWRldGFpbHMgLnRvZG8tZGVzYyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvLWNhcmQgLnRvZG8tcHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmE4YWE7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50b2RvLWRldGFpbHMtYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b2RvLWRldGFpbHMtYm90dG9tID4gcCxcbi50b2RvLWRldGFpbHMtYm90dG9tID4gYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi50b2RvLWRldGFpbHMtYm90dG9tIHtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi50b2RvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udG9kby1kZXNjIHtcbn1cbi8qIC50b2RvLWNhcmQuaGlkZGVuIC50b2RvLWRldGFpbHMgLnRvZG8tZGVzYyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59ICovXG4udG9kby1kdWVkYXRlIHtcbn1cblxuLnRvZG8tcHJpb3JpdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1jb21wbGV0ZS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICNkZGNlY2Q7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI2NyZWF0ZS1idXR0b25zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAzMHB4O1xuICBib3R0b206IDMwcHg7XG59XG5cbiNjcmVhdGUtYnV0dG9ucyAjbWluaW1pc2VkLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvcGFjaXR5OiAxOyAvKiBNYWtlIGl0IGZ1bGx5IHZpc2libGUgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyAvKiBTbGlkZSBpdCB0byB0aGUgdG9wICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4jY3JlYXRlLWJ1dHRvbnMubWluaW1pc2VkICNtaW5pbWlzZWQtYnV0dG9ucyB7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNjcmVhdGUtYnV0dG9ucyAjbWluaW1pc2VkLWJ1dHRvbnMgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2NDdlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjZGRjZWNkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmJ1dHRvbi5jcmVhdGUtbWFpbi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2NDdlO1xuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgY29udGVudDogXCJcIjtcbiAgLyogbGVmdDogMzBweDtcbiAgYm90dG9tOiAzMHB4OyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG5idXR0b24uY3JlYXRlLW1haW4tYnRuOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xuICBsZWZ0OiAxMHB4O1xuICBib3R0b206IDI3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG5cbmJ1dHRvbi5jcmVhdGUtbWFpbi1idG46OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xuICBsZWZ0OiAxMHB4O1xuICAvKiB0b3A6IDE5MHB4OyAqL1xuICBib3R0b206IDI3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gIC8qIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgKi9cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG5cbiNjcmVhdGUtYnV0dG9ucy5taW5pbWlzZWQgYnV0dG9uLmNyZWF0ZS1tYWluLWJ0bjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4jY3JlYXRlLWJ1dHRvbnMubWluaW1pc2VkIGJ1dHRvbi5jcmVhdGUtbWFpbi1idG46OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG5idXR0b24uY3JlYXRlLW1haW4tYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY3JlYXRlLWRpYWxvZyB7XG4gIGRpc3BsYXk6IHJlbGF0aXZlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNTBweDtcbiAgLyogaGVpZ2h0OiAzMHZoOyAqL1xuICB3aWR0aDogNTB2dztcbn1cbi5jcmVhdGUtZGlhbG9nLWZvcm0jY3JlYXRlLXRvZG8tZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XG59XG5cbi5jcmVhdGUtZGlhbG9nLWZvcm0jY3JlYXRlLXByb2plY3QtZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbn1cblxuLmNyZWF0ZS1kaWFsb2ctZm9ybSNjcmVhdGUtcHJvamVjdC1mb3JtIGgxIHtcbiAgZ3JpZC1yb3c6IDE7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xufVxuXG4uY3JlYXRlLWRpYWxvZy1mb3JtI2NyZWF0ZS1wcm9qZWN0LWZvcm0gaW5wdXQge1xuICBncmlkLXJvdzogMjtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XG59XG5cbi5jcmVhdGUtZGlhbG9nLWZvcm0jY3JlYXRlLXByb2plY3QtZm9ybSBidXR0b24ge1xuICBncmlkLXJvdzogMztcbiAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDE7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnVuaXZlcnNhbC1jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2NDdlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5pdmVyc2FsLWNsb3NlLWJ0bjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMjdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnVuaXZlcnNhbC1jbG9zZS1idG46OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMjdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cbi8qICNjcmVhdGUtdG9kby1kb20gI2NyZWF0ZVRvZG9DbG9zZUJ0bjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMjdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4jY3JlYXRlLXRvZG8tZG9tICNjcmVhdGVUb2RvQ2xvc2VCdG46OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMjdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn0gKi9cblxuaDEuZGlhbG9nLWhlYWRlciB7XG4gIG1hcmdpbjogbm9uZTtcbn1cbi8qICNjcmVhdGUtdG9kby1kb20gaDEge1xuICBtYXJnaW46IG5vbmU7XG59ICovXG5cbiNjcmVhdGUtdG9kby1kb20gZGl2IHtcbiAgLyogZGlzcGxheTogZ3JpZDsgKi9cbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgKi9cbiAgLyogYWxpZ24taXRlbXM6IGVuZDsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNkZXRhaWxzX2RpdiB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyICFpbXBvcnRhbnQ7XG59XG5cbiNjcmVhdGUtdG9kby1kb20gLmRpYWxvZy1zdWJtaXQtYnRuIHtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG4uZGlhbG9nLXN1Ym1pdC1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcbiAgY29sb3I6ICNkZGNlY2Q7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAvKiBoZWlnaHQ6IDIwcHg7ICovXG4gIC8qIHdpZHRoOiAxMzBweDsgKi9cbn1cblxuLmRpYWxvZy1zdWJtaXQtYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY3JlYXRlLWRpYWxvZy1mb3JtIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jY3JlYXRlLXRvZG8tZG9tIHRleHRhcmVhIHtcbiAgYm9yZGVyOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubmV3X2VudHJ5X3RpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm5ld190b2RvX2Rlc2Mge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm5ld190b2RvX3RpdGxlOjpwbGFjZWhvbGRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5uZXdfdG9kb19kZXNjOjpwbGFjZWhvbGRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsMERBQTREO0FBQzlEOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDBEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7OztHQUlHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7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Ozs7Ozs7Ozs7Ozs7O0dBb0JHOztBQUVIO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tQm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvUm9ib3RvL1JvYm90by1Cb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjA1LCAyMDUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uYW5pbWF0ZWQtYnV0dG9uIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYW5pbWF0ZWQtYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogI3RvZG8tbGlzdC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzkyZTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMTBweDtcXG59ICovXFxuXFxuI2FwcC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczOTJlO1xcbiAgcGFkZGluZzogMTBweCA1MHB4O1xcbiAgZGlzcGxheTogZml4ZWQ7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1Cb2xkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3NpZGUtYmFyIGgxIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4jc2lkZS1iYXIgI3Byb2plY3QtbGlzdC1kb20ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI3NpZGUtYmFyICNwcm9qZWN0LWxpc3QtZG9tIGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3NpZGUtYmFyICNwcm9qZWN0LWxpc3QtZG9tIGxpIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkcztcXG59XFxuXFxuI3NpZGUtYmFyICNwcm9qZWN0LWxpc3QtZG9tIGxpIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBmbGV4LWdyb3c6IDQ7XFxuICBwYWRkaW5nOiAxMDBweCA1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jdG9kby1saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4Y2ZjZjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3M7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogODAlO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4udG9kby1jYXJkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWIzYjM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4udG9kby1jYXJkLmNvbXBsZXRlZCBoMSB7XFxuICBjb2xvcjogcmdiKDE0MywgMTM1LCAxMzUpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWNhcmQuY29tcGxldGVkID4gLnRvZG8tZGV0YWlscyA+IC50b2RvLWRlc2Mge1xcbiAgY29sb3I6IHJnYigxNDMsIDEzNSwgMTM1KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1jYXJkLmhpZGRlbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvLWNhcmQgLmVkaXQtZGVsZXRlLWJ0bnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50b2RvLWNhcmQuaGlkZGVuIC5lZGl0LWRlbGV0ZS1idG5zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWNhcmQgLmVkaXQtZGVsZXRlLWJ0bnMgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tY2FyZCAuZWRpdC1kZWxldGUtYnRucyA+IGJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLnRvZG8tY2FyZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogNSU7XFxuICBib3R0b206IDUlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4udG9kby1jYXJkLmhpZGRlbjo6YmVmb3JlIHtcXG4gIGhlaWdodDogODAlO1xcbiAgdG9wOiAxMCU7XFxuICBib3R0b206IDEwJTtcXG59XFxuXFxuLnRvZG8tY2FyZC5tZWQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi50b2RvLWNhcmQuaGlnaC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRvZG8tY2FyZC5sb3ctcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8tY2FyZCA+IGRpdixcXG4udG9kby1jYXJkID4gaDEsXFxuLnRvZG8tY2FyZCA+IGJ1dHRvbiB7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udG9kby1jYXJkLmhpZGRlbiAudG9kby1kZXRhaWxzIC50b2RvLWRlc2Mge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY2FyZCAudG9kby1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmE4YWE7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlscy1ib3R0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50b2RvLWRldGFpbHMtYm90dG9tID4gcCxcXG4udG9kby1kZXRhaWxzLWJvdHRvbSA+IGJ1dHRvbiB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlscy1ib3R0b20ge1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLUJvbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG59XFxuLyogLnRvZG8tY2FyZC5oaWRkZW4gLnRvZG8tZGV0YWlscyAudG9kby1kZXNjIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcbi50b2RvLWR1ZWRhdGUge1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1jb21wbGV0ZS1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgY29sb3I6ICNkZGNlY2Q7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbiNjcmVhdGUtYnV0dG9ucyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAzMHB4O1xcbiAgYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jY3JlYXRlLWJ1dHRvbnMgI21pbmltaXNlZC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3BhY2l0eTogMTsgLyogTWFrZSBpdCBmdWxseSB2aXNpYmxlICovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IC8qIFNsaWRlIGl0IHRvIHRoZSB0b3AgKi9cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG4jY3JlYXRlLWJ1dHRvbnMubWluaW1pc2VkICNtaW5pbWlzZWQtYnV0dG9ucyB7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2NyZWF0ZS1idXR0b25zICNtaW5pbWlzZWQtYnV0dG9ucyBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgY29sb3I6ICNkZGNlY2Q7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmJ1dHRvbi5jcmVhdGUtbWFpbi1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICAvKiBsZWZ0OiAzMHB4O1xcbiAgYm90dG9tOiAzMHB4OyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbmJ1dHRvbi5jcmVhdGUtbWFpbi1idG46OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XFxuICBsZWZ0OiAxMHB4O1xcbiAgYm90dG9tOiAyN3B4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbmJ1dHRvbi5jcmVhdGUtbWFpbi1idG46OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xcbiAgbGVmdDogMTBweDtcXG4gIC8qIHRvcDogMTkwcHg7ICovXFxuICBib3R0b206IDI3cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcbiAgLyogdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAqL1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbiNjcmVhdGUtYnV0dG9ucy5taW5pbWlzZWQgYnV0dG9uLmNyZWF0ZS1tYWluLWJ0bjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG4jY3JlYXRlLWJ1dHRvbnMubWluaW1pc2VkIGJ1dHRvbi5jcmVhdGUtbWFpbi1idG46OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuXFxuYnV0dG9uLmNyZWF0ZS1tYWluLWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5jcmVhdGUtZGlhbG9nIHtcXG4gIGRpc3BsYXk6IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogNTBweDtcXG4gIC8qIGhlaWdodDogMzB2aDsgKi9cXG4gIHdpZHRoOiA1MHZ3O1xcbn1cXG4uY3JlYXRlLWRpYWxvZy1mb3JtI2NyZWF0ZS10b2RvLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbn1cXG5cXG4uY3JlYXRlLWRpYWxvZy1mb3JtI2NyZWF0ZS1wcm9qZWN0LWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4uY3JlYXRlLWRpYWxvZy1mb3JtI2NyZWF0ZS1wcm9qZWN0LWZvcm0gaDEge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG59XFxuXFxuLmNyZWF0ZS1kaWFsb2ctZm9ybSNjcmVhdGUtcHJvamVjdC1mb3JtIGlucHV0IHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxufVxcblxcbi5jcmVhdGUtZGlhbG9nLWZvcm0jY3JlYXRlLXByb2plY3QtZm9ybSBidXR0b24ge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMTtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLnVuaXZlcnNhbC1jbG9zZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB0b3A6IDMwcHg7XFxuICByaWdodDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnVuaXZlcnNhbC1jbG9zZS1idG46OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogMjdweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLnVuaXZlcnNhbC1jbG9zZS1idG46OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiAyN3B4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG59XFxuLyogI2NyZWF0ZS10b2RvLWRvbSAjY3JlYXRlVG9kb0Nsb3NlQnRuOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IDI3cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbiNjcmVhdGUtdG9kby1kb20gI2NyZWF0ZVRvZG9DbG9zZUJ0bjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IDI3cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcbn0gKi9cXG5cXG5oMS5kaWFsb2ctaGVhZGVyIHtcXG4gIG1hcmdpbjogbm9uZTtcXG59XFxuLyogI2NyZWF0ZS10b2RvLWRvbSBoMSB7XFxuICBtYXJnaW46IG5vbmU7XFxufSAqL1xcblxcbiNjcmVhdGUtdG9kby1kb20gZGl2IHtcXG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGVuZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNkZXRhaWxzX2RpdiB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAhaW1wb3J0YW50O1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8tZG9tIC5kaWFsb2ctc3VibWl0LWJ0biB7XFxuICB3aWR0aDogMTMwcHg7XFxufVxcblxcbi5kaWFsb2ctc3VibWl0LWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcXG4gIGNvbG9yOiAjZGRjZWNkO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICAvKiBoZWlnaHQ6IDIwcHg7ICovXFxuICAvKiB3aWR0aDogMTMwcHg7ICovXFxufVxcblxcbi5kaWFsb2ctc3VibWl0LWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5jcmVhdGUtZGlhbG9nLWZvcm0gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8tZG9tIHRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubmV3X2VudHJ5X3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLm5ld190b2RvX2Rlc2Mge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmV3X3RvZG9fdGl0bGU6OnBsYWNlaG9sZGVyIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5uZXdfdG9kb19kZXNjOjpwbGFjZWhvbGRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBkYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YWJhc2UgPSBbXTtcbiAgfVxuXG4gIGFkZChvYmplY3QpIHtcbiAgICB0aGlzLmRhdGFiYXNlLnB1c2gob2JqZWN0KTtcbiAgfVxuXG4gIGRlbGV0ZShvYmplY3QpIHtcbiAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGhpcy5kYXRhYmFzZS5pbmRleE9mKG9iamVjdCk7XG4gICAgaWYgKGluZGV4VG9SZW1vdmUgIT09IC0xKSB7XG4gICAgICB0aGlzLmRhdGFiYXNlLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBJdGVtIHdpdGggaWQgJHtpZH0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBJdGVtIHdpdGggaWQgJHtpZH0gbm90IGZvdW5kLmApO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmplY3RJRCwgbmV3T2JqZWN0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGFiYXNlLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gb2JqZWN0SUQpO1xuXG4gICAgLy8gSWYgaXRlbSB3aXRoIGdpdmVuIGlkIGlzIGZvdW5kLCB1cGRhdGUgaXRcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmRhdGFiYXNlW2luZGV4XSA9IG5ld09iamVjdDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBJdGVtIHdpdGggaWQgJHtvYmplY3RJRH0gdXBkYXRlZCBzdWNjZXNzZnVsbHkuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBJdGVtIHdpdGggaWQgJHtvYmplY3RJRH0gbm90IGZvdW5kLmApO1xuICAgIH1cbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YWJhc2U7XG4gIH1cbn1cbiIsImNvbnN0IGRlZmF1bHRfZGF0YWJhc2UgPSB7XG4gIHRvZG9zOiBbXSxcbiAgcHJvamVjdHM6IFtdLFxuICAvLyBub3RlczogW10sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZURhdGFiYXNlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9fZGF0YVwiLCBKU09OLnN0cmluZ2lmeShkZWZhdWx0X2RhdGFiYXNlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEFsbERhdGEoKSB7XG4gIGNvbnN0IHRvZG9EYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9fZGF0YVwiKSk7XG4gIHJldHVybiB0b2RvRGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVG9kb0RhdGEoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb19kYXRhXCIpKS50b2Rvcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJvamVjdERhdGEoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb19kYXRhXCIpKS5wcm9qZWN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hEYXRhKHRvZG9fZGF0YSwgcHJvamVjdF9kYXRhKSB7XG4gIGNvbnN0IHVwZGF0ZWREYXRhID0ge1xuICAgIHRvZG9zOiB0b2RvX2RhdGEsXG4gICAgcHJvamVjdHM6IHByb2plY3RfZGF0YSxcbiAgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZERhdGEpKTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVG9kbyhuZXdUb2RvKSB7XG4vLyAgIC8vR2V0IHRoZSBkYXRhYmFzZSBmcm9tIGxvY2FsU3RvcmFnZVxuLy8gICBsZXQgdG9kb19kYXRhID0gZ2V0VG9kb3MoKTtcbi8vICAgY29uc29sZS5sb2codHlwZW9mIG5ld1RvZG8pO1xuLy8gICB0b2RvX2RhdGEucHVzaChuZXdUb2RvKTtcbi8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoeyB0b2RvczogdG9kb19kYXRhIH0pKTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpcGVEYXRhKCkge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgaW5pdGlhbGlzZURhdGFiYXNlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvcygpIHtcbiAgbGV0IHRvZG9fZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvX2RhdGFcIikpLnRvZG9zO1xuICByZXR1cm4gdG9kb19kYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gIGxldCBwcm9qZWN0X2RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb19kYXRhXCIpKS50b2RvcztcbiAgcmV0dXJuIHByb2plY3RfZGF0YTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRvZG9Db21wbGV0aW9uKHRvZG9JRCkge1xuLy8gICAvL0dldCB0aGUgZGF0YSBhbmQgZmluZCB0aGUgdG9kbyB0byB1cGRhdGVcbi8vICAgbGV0IHRvZG9fZGF0YSA9IGdldFRvZG9zKCk7XG4vLyAgIGxldCB1cGRhdGVkX3RvZG8gPSB0b2RvX2RhdGEuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCA9PSB0b2RvSUQpWzBdO1xuXG4vLyAgIC8vVG9nZ2xlIHRoZSBjb21wbGV0ZWQgYXR0cmlidXRlXG4vLyAgIGlmICh1cGRhdGVkX3RvZG8uX2NvbXBsZXRlZCA9PSBmYWxzZSkge1xuLy8gICAgIHVwZGF0ZWRfdG9kby5fY29tcGxldGVkID0gdHJ1ZTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICB1cGRhdGVkX3RvZG8uX2NvbXBsZXRlZCA9IGZhbHNlO1xuLy8gICB9XG5cbi8vICAgLy9QdXNoIGl0IHRvIHRoZSBsb2NhbHN0b3JhZ2Vcbi8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoeyB0b2RvczogdG9kb19kYXRhIH0pKTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXREYXRhKCkge31cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kb0lEKSB7XG4vLyAgIGNvbnN0IGN1cnJlbnRUb2RvcyA9IGdldFRvZG9zKCk7XG4vLyAgIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSBjdXJyZW50VG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCAhPT0gdG9kb0lEKTtcbi8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoeyB0b2RvczogZmlsdGVyZWRUb2RvcyB9KSk7XG4vLyB9XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RE9NKCkge1xuICBjb25zdCBkb21fZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZG9tX2RpYWxvZy5pZCA9IFwiY3JlYXRlLXByb2plY3QtZG9tXCI7XG4gIGRvbV9kaWFsb2cuY2xhc3NMaXN0ID0gXCJjcmVhdGUtZGlhbG9nXCI7XG5cbiAgY29uc3QgY3JlYXRlX3Byb2plY3RfZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjcmVhdGVfcHJvamVjdF9mb3JtLmlkID0gXCJjcmVhdGUtcHJvamVjdC1mb3JtXCI7XG4gIGNyZWF0ZV9wcm9qZWN0X2Zvcm0uY2xhc3NMaXN0ID0gXCJjcmVhdGUtZGlhbG9nLWZvcm1cIjtcbiAgLy8gY3JlYXRlX3Byb2plY3RfZm9ybS5tZXRob2QgPSBcImRpYWxvZ1wiO1xuXG4gIGNvbnN0IGhlYWRlcl90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJfdGV4dC5pbm5lclRleHQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gIGhlYWRlcl90ZXh0LmNsYXNzTGlzdCA9IFwiZGlhbG9nLWhlYWRlclwiO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgLy8gY2xvc2VCdG4uaW5uZXJUZXh0ID0gXCJcIjtcblxuICBjbG9zZUJ0bi5pZCA9IFwiY3JlYXRlVG9kb0Nsb3NlQnRuXCI7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdCA9IFwidW5pdmVyc2FsLWNsb3NlLWJ0blwiO1xuICAvLyBjbG9zZUJ0bi5mb3JtTWV0aG9kID0gXCJkaWFsb2dcIjtcbiAgLy8gY2xvc2VCdG4udmFsdWUgPSBcImNhbmNlbFwiO1xuXG4gIGNsb3NlQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkb21fZGlhbG9nLmNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJvamVjdF90aXRsZS5wbGFjZWhvbGRlciA9IFwiTmV3IFByb2plY3QgTmFtZVwiO1xuICBwcm9qZWN0X3RpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgcHJvamVjdF90aXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3X2VudHJ5X3RpdGxlXCIpO1xuICBwcm9qZWN0X3RpdGxlLm5hbWUgPSBcInByb2plY3RfdGl0bGVcIjtcblxuICAvLyBjb25zdCBwcm9qZWN0X3RpdGxlX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAvLyBwcm9qZWN0X3RpdGxlX2xhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdCBOYW1lXCI7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLmlubmVyVGV4dCA9IFwiQ3JlYXRlXCI7XG4gIHN1Ym1pdEJ0bi5pZCA9IFwiY3JlYXRlLXByb2plY3Qtc3VibWl0LWJ0blwiO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0ID0gXCJkaWFsb2ctc3VibWl0LWJ0blwiO1xuICAvLyBjb25zb2xlLmxvZyhzdWJtaXRCdG4pO1xuICAvLyBzdWJtaXRCdG4udmFsdWUgPSBcImRlZmF1bHRcIjtcblxuICBjcmVhdGVfcHJvamVjdF9mb3JtLmFwcGVuZENoaWxkKGhlYWRlcl90ZXh0KTtcbiAgY3JlYXRlX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0X3RpdGxlKTtcbiAgLy8gY3JlYXRlX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0X3RpdGxlX2xhYmVsKTtcbiAgY3JlYXRlX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICBjcmVhdGVfcHJvamVjdF9mb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgZG9tX2RpYWxvZy5hcHBlbmRDaGlsZChjcmVhdGVfcHJvamVjdF9mb3JtKTtcblxuICBzdWJtaXRCdG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjcmVhdGVfcHJvamVjdF9mb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgbGV0IGZvcm1EYXRhID0ge1xuICAgICAgICBwcm9qZWN0SUQ6IHByb2plY3RfdGl0bGUudmFsdWUsXG4gICAgICB9O1xuXG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgICBjb25zdCBjcmVhdGVfcHJvamVjdF9ldmVudCA9IG5ldyBDdXN0b21FdmVudChcImNyZWF0ZU5ld1Byb2plY3RFdmVudFwiLCB7XG4gICAgICAgIGRldGFpbDogZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlX3Byb2plY3RfZXZlbnQpO1xuICAgICAgY3JlYXRlX3Byb2plY3RfZm9ybS5yZXNldCgpO1xuICAgICAgZG9tX2RpYWxvZy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVfcHJvamVjdF9mb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBkb21fZGlhbG9nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVDcmVhdGVUb2RvRE9NKHByb2plY3RfZGF0YSkge1xuICBjb25zdCBkb21fZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZG9tX2RpYWxvZy5pZCA9IFwiY3JlYXRlLXRvZG8tZG9tXCI7XG4gIGRvbV9kaWFsb2cuY2xhc3NMaXN0ID0gXCJjcmVhdGUtZGlhbG9nXCI7XG5cbiAgY29uc3QgY3JlYXRlX3RvZG9fZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uaWQgPSBcImNyZWF0ZS10b2RvLWZvcm1cIjtcbiAgY3JlYXRlX3RvZG9fZm9ybS5jbGFzc0xpc3QgPSBcImNyZWF0ZS1kaWFsb2ctZm9ybVwiO1xuICAvLyBjcmVhdGVfdG9kb19mb3JtLm1ldGhvZCA9IFwiZGlhbG9nXCI7XG5cbiAgY29uc3QgaGVhZGVyX3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlcl90ZXh0LmlubmVyVGV4dCA9IFwiTmV3IFRvZG9cIjtcbiAgaGVhZGVyX3RleHQuY2xhc3NMaXN0ID0gXCJkaWFsb2ctaGVhZGVyXCI7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ0bi5pZCA9IFwiY3JlYXRlVG9kb0Nsb3NlQnRuXCI7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdCA9IFwidW5pdmVyc2FsLWNsb3NlLWJ0blwiO1xuICBjbG9zZUJ0bi5mb3JtTWV0aG9kID0gXCJkaWFsb2dcIjtcbiAgY2xvc2VCdG4udmFsdWUgPSBcImNhbmNlbFwiO1xuICBjbG9zZUJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9tX2RpYWxvZy5jbG9zZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQ2xvc2luZyBtb2RhbFwiKTtcbiAgfTtcblxuICBjb25zdCBpbnB1dF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRfdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBuZXcgdG9kb1wiO1xuICBpbnB1dF90aXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3X2VudHJ5X3RpdGxlXCIpO1xuICBpbnB1dF90aXRsZS5pZCA9IFwibmV3X3RvZG9fdGl0bGVcIjtcbiAgaW5wdXRfdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dF90aXRsZS5uYW1lID0gXCJpbnB1dF90aXRsZVwiO1xuXG4gIGNvbnN0IGlucHV0X2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGlucHV0X2Rlc2MucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG4gIGlucHV0X2Rlc2MuY2xhc3NMaXN0LmFkZChcIm5ld190b2RvX2Rlc2NcIik7XG5cbiAgY29uc3QgZGF0ZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbnB1dF9kdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dF9kdWVkYXRlLmNsYXNzTGlzdCA9IFwibmV3X3RvZG9fZHVlZGF0ZVwiO1xuICBpbnB1dF9kdWVkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgY29uc3QgaW5wdXRfZHVlZGF0ZV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5wdXRfZHVlZGF0ZV9sYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOlwiO1xuICBkYXRlX2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9kdWVkYXRlX2xhYmVsKTtcbiAgZGF0ZV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfZHVlZGF0ZSk7XG5cbiAgY29uc3QgcHJpb3JpdHlfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5wdXRfcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBwcmlvcml0eV9oaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlfbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlfbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICBwcmlvcml0eV9oaWdoLnZhbHVlID0gXCJoaWdoLXByaW9yaXR5XCI7XG4gIHByaW9yaXR5X2hpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5X21lZC52YWx1ZSA9IFwibWVkLXByaW9yaXR5XCI7XG4gIHByaW9yaXR5X21lZC5pbm5lclRleHQgPSBcIk1lZFwiO1xuICBwcmlvcml0eV9sb3cudmFsdWUgPSBcImxvdy1wcmlvcml0eVwiO1xuICBwcmlvcml0eV9sb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcblxuICBpbnB1dF9wcmlvcml0eS5jbGFzc0xpc3QgPSBcIm5ld190b2RvX3ByaW9yaXR5XCI7XG5cbiAgaW5wdXRfcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlfaGlnaCk7XG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X21lZCk7XG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X2xvdyk7XG4gIGlucHV0X3ByaW9yaXR5Lm9wdGlvbnNbMV0uc2VsZWN0ZWQgPSB0cnVlO1xuICBjb25zdCBpbnB1dF9wcmlvcml0eV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5wdXRfcHJpb3JpdHlfbGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogXCI7XG4gIHByaW9yaXR5X2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9wcmlvcml0eV9sYWJlbCk7XG4gIHByaW9yaXR5X2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9wcmlvcml0eSk7XG5cbiAgY29uc3QgcHJvamVjdF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0X2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcm9qZWN0X2xhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdDogXCI7XG4gIHByb2plY3RfZGl2LmFwcGVuZENoaWxkKHByb2plY3RfbGFiZWwpO1xuICBjb25zdCBpbnB1dF9wcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJvamVjdF9vcHRpb25fZGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByb2plY3Rfb3B0aW9uX2RlZmF1bHQudmFsdWUgPSBudWxsO1xuICBwcm9qZWN0X29wdGlvbl9kZWZhdWx0LmlubmVyVGV4dCA9IFwibm9uZVwiO1xuICBpbnB1dF9wcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3Rfb3B0aW9uX2RlZmF1bHQpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X2RhdGEpO1xuICBpZiAoKHByb2plY3RfZGF0YSAhPT0gbnVsbCkgJiAocHJvamVjdF9kYXRhLmdldERhdGEoKSAhPT0gbnVsbCkpIHtcbiAgICBwcm9qZWN0X2RhdGEuZ2V0RGF0YSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3QuX3RpdGxlO1xuICAgICAgcHJvamVjdE9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0Ll90aXRsZTtcbiAgICAgIGlucHV0X3Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfSk7XG4gIH1cbiAgcHJvamVjdF9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcHJvamVjdCk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLmlubmVyVGV4dCA9IFwiQ3JlYXRlXCI7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QgPSBcImRpYWxvZy1zdWJtaXQtYnRuXCI7XG4gIHN1Ym1pdEJ0bi5pZCA9IFwiY3JlYXRlLXRvZG8tc3VibWl0LWJ0blwiO1xuICBzdWJtaXRCdG4udmFsdWUgPSBcImRlZmF1bHRcIjtcblxuICBjb25zdCBkZXRhaWxzX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRldGFpbHNfZGl2LmlkID0gXCJkZXRhaWxzX2RpdlwiO1xuICBkZXRhaWxzX2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9kaXYpO1xuICBkZXRhaWxzX2Rpdi5hcHBlbmRDaGlsZChkYXRlX2Rpdik7XG4gIGRldGFpbHNfZGl2LmFwcGVuZENoaWxkKHByb2plY3RfZGl2KTtcbiAgZGV0YWlsc19kaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGhlYWRlcl90ZXh0KTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfdGl0bGUpO1xuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X2Rlc2MpO1xuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGRldGFpbHNfZGl2KTtcblxuICBkb21fZGlhbG9nLmFwcGVuZENoaWxkKGNyZWF0ZV90b2RvX2Zvcm0pO1xuXG4gIC8vIGlmICh0b2RvT2JqZWN0ID09IG51bGwpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIlRvZG8gaXMgbnVsbCFcIik7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgaW5wdXRfdGl0bGUudmFsdWUgPSB0b2RvT2JqZWN0Ll90aXRsZTtcbiAgLy8gICBpbnB1dF9kZXNjLnZhbHVlID0gdG9kb09iamVjdC5fZGVzY3JpcHRpb247XG4gIC8vICAgaW5wdXRfZHVlZGF0ZS52YWx1ZSA9IHRvZG9PYmplY3QuX2R1ZURhdGU7XG4gIC8vICAgaW5wdXRfcHJpb3JpdHkudmFsdWUgPSB0b2RvT2JqZWN0LmlucHV0X3ByaW9yaXR5O1xuICAvLyAgIGlucHV0X3Byb2plY3QudmFsdWUgPSB0b2RvT2JqZWN0Ll9wcm9qZWN0O1xuICAvLyB9XG5cbiAgLy9UaGlzIGFkZHMgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdWJtaXQgYnV0dG9uIHRvIGNoZWNrIGZvcm0gdmFsaWQgdGhlbiBzdWJtaXQgYXMgYSBjdXN0b20gZXZlbnRcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjcmVhdGVfdG9kb19mb3JtLmNoZWNrVmFsaWRpdHkoKSk7XG4gICAgLy8gY29uc29sZS5sb2coaW5wdXRfZHVlZGF0ZS52YWx1ZSk7XG4gICAgbGV0IGR1ZURhdGVPYmo7XG4gICAgLy8gY29uc29sZS5sb2coZHVlRGF0ZU9iaik7XG4gICAgbGV0IHZhbGlkRm9ybSA9IGNyZWF0ZV90b2RvX2Zvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgIGlmICh2YWxpZEZvcm0pIHtcbiAgICAgIGlmIChpbnB1dF9kdWVkYXRlLnZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZHVlRGF0ZU9iaiA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlT2JqID0gbmV3IERhdGUoaW5wdXRfZHVlZGF0ZS52YWx1ZSk7XG4gICAgICB9XG4gICAgICBsZXQgZm9ybURhdGEgPSB7XG4gICAgICAgIC8vIEV4dHJhY3QgZm9ybSBkYXRhIGhlcmUsIGUuZy4sIHVzaW5nIGZvcm0gZWxlbWVudHMgb3Igb3RoZXIgbWV0aG9kc1xuICAgICAgICB0aXRsZTogaW5wdXRfdGl0bGUudmFsdWUsXG4gICAgICAgIGRlc2M6IGlucHV0X2Rlc2MudmFsdWUsXG4gICAgICAgIGR1ZWRhdGU6IGR1ZURhdGVPYmosXG4gICAgICAgIHByaW9yaXR5OiBpbnB1dF9wcmlvcml0eS52YWx1ZSxcbiAgICAgICAgcHJvamVjdDogaW5wdXRfcHJvamVjdC52YWx1ZSxcbiAgICAgICAgLy8gQWRkIG1vcmUgcHJvcGVydGllcyBhcyBuZWVkZWRcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiY3JlYXRlTmV3VG9kb0V2ZW50XCIsIHtcbiAgICAgICAgZGV0YWlsOiBmb3JtRGF0YSxcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkNyZWF0ZSB0b2RvIGV2ZW50IGZpcmVkIVwiKTtcbiAgICAgIGNyZWF0ZV90b2RvX2Zvcm0ucmVzZXQoKTtcbiAgICAgIGRvbV9kaWFsb2cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlX3RvZG9fZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9UT0RPOiBBZGQgYSBuZXcgZmllbGQgdGhhdCBob2xkcyB0aGUgcHJvamVjdFxuICByZXR1cm4gZG9tX2RpYWxvZztcbn1cbiIsImltcG9ydCBlZGl0U1ZHIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVTVkcgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVG9kb0NhcmRET00odG9kbykge1xuICAvLyBjb25zdCBlZGl0QnV0dG9uU1ZHID0gXCJzcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCI7XG4gIC8vIGNvbnN0IGRlbGV0ZUJ1dHRvblNWRyA9IFwic3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCI7XG4gIC8vIGNvbnNvbGUubG9nKHRvZG8pO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvLmR1ZWRhdGUpO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvLl9kdWVkYXRlKTtcbiAgLy8gY29uc29sZS5sb2codG9kby5nZXREdWVEYXRlKTtcbiAgLy8gY29uc29sZS5sb2codG9kby5wcm9qZWN0KTtcbiAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY2FyZERpdi5jbGFzc0xpc3QgPSBcInRvZG8tY2FyZCBoaWRkZW5cIjtcblxuICBsZXQgdG9kb0NvbXBsZXRlZCA9IHRvZG8uX2NvbXBsZXRlZDtcbiAgaWYgKHRvZG9Db21wbGV0ZWQpIHtcbiAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKFwidW5jb21wbGV0ZWRcIik7XG4gIH1cblxuICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQodG9kby5fcHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvZG9JRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RvSUQuaW5uZXJIVE1MID0gdG9kby5faWQ7XG4gIHRvZG9JRC5jbGFzc0xpc3QgPSBcInRvZG8taWRcIjtcbiAgdG9kb0lELnN0eWxlID0gXCJkaXNwbGF5OiBub25lXCI7XG5cbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0b2RvVGl0bGUuaW5uZXJIVE1MID0gdG9kby5fdGl0bGU7XG4gIHRvZG9UaXRsZS5jbGFzc0xpc3QgPSBcInRvZG8tdGl0bGVcIjtcblxuICBjb25zdCB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EZXRhaWxzLmNsYXNzTGlzdCA9IFwidG9kby1kZXRhaWxzXCI7XG5cbiAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb0Rlc2MuaW5uZXJIVE1MID0gdG9kby5fZGVzY3JpcHRpb247XG4gIHRvZG9EZXNjLmNsYXNzTGlzdCA9IFwidG9kby1kZXNjXCI7XG5cbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb0R1ZURhdGUuaW5uZXJIVE1MID0gdG9kby5kdWVEYXRlO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvLmR1ZURhdGUpO1xuICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QgPSBcInRvZG8tZHVlZGF0ZVwiO1xuXG4gIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29tcGxldGVCdXR0b24uaW5uZXJIVE1MID0gXCJEb25lXCI7XG4gIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdCA9IFwidG9kby1jb21wbGV0ZS1idG5cIjtcblxuICBjb25zdCBlZGl0RGVsZXRlQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVkaXREZWxldGVCdG5zLmNsYXNzTGlzdCA9IFwiZWRpdC1kZWxldGUtYnRuc1wiO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVsZXRlQnRuSWNvbi5zcmMgPSBkZWxldGVTVkc7XG4gIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG5JY29uKTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGVkaXRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZWRpdEJ0bkljb24uc3JjID0gZWRpdFNWRztcbiAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0QnRuSWNvbik7XG4gIGVkaXREZWxldGVCdG5zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBlZGl0RGVsZXRlQnRucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIGNvbnN0IHRvZG9EZXRhaWxzQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0RldGFpbHNCb3R0b20uY2xhc3NMaXN0LmFkZChcInRvZG8tZGV0YWlscy1ib3R0b21cIik7XG4gIC8vIGNvbnNvbGUubG9nKHRvZG8pO1xuICBpZiAodG9kby5wcm9qZWN0ICE9IFwibnVsbFwiKSB7XG4gICAgY29uc3QgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvUHJvamVjdC5pbm5lckhUTUwgPSB0b2RvLnByb2plY3Q7XG4gICAgdG9kb1Byb2plY3QuY2xhc3NMaXN0ID0gXCJ0b2RvLXByb2plY3RcIjtcbiAgICB0b2RvRGV0YWlsc0JvdHRvbS5hcHBlbmRDaGlsZCh0b2RvUHJvamVjdCk7XG4gIH1cblxuICB0b2RvRGV0YWlsc0JvdHRvbS5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gIHRvZG9EZXRhaWxzQm90dG9tLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcblxuICB0b2RvRGV0YWlscy5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG4gIHRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvZG9EZXRhaWxzQm90dG9tKTtcblxuICBjYXJkRGl2LmFwcGVuZENoaWxkKHRvZG9JRCk7XG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgY2FyZERpdi5hcHBlbmRDaGlsZCh0b2RvRGV0YWlscyk7XG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQoZWRpdERlbGV0ZUJ0bnMpO1xuXG4gIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJ0b2dnbGVUb2RvQ29tcGxldGVcIiwge1xuICAgICAgZGV0YWlsOiB0b2RvLl9pZCxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRvZ2dsZUNvbXBsZXRlRXZlbnQpO1xuICB9KTtcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJEZWxldGUgdG9kbyBldmVudCBmaXJlZFwiKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGRlbGV0ZVRvZG9FdmVudCA9IG5ldyBDdXN0b21FdmVudChcImRlbGV0ZVRvZG9cIiwge1xuICAgICAgZGV0YWlsOiB0b2RvLl9pZCxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGRlbGV0ZVRvZG9FdmVudCk7XG4gIH0pO1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkVESVRcIik7XG5cbiAgICBjb25zdCBlZGl0VG9kb0V2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwib3BlbkVkaXRUb2RvRGlhbG9nXCIsIHtcbiAgICAgIGRldGFpbDogdG9kby5faWQsXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGVkaXRUb2RvRXZlbnQpO1xuICB9KTtcblxuICBjYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubm9kZU5hbWUpO1xuICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiQlVUVE9OXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhcmREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgICBjYXJkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjYXJkRGl2O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUb2RvQnRuKCkge1xuICBjb25zdCBjcmVhdGVfYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNyZWF0ZV9idXR0b25zLmlkID0gXCJjcmVhdGUtYnV0dG9uc1wiO1xuICBjcmVhdGVfYnV0dG9ucy5jbGFzc05hbWUgPSBcIm1pbmltaXNlZFwiO1xuXG4gIGNvbnN0IGJ1dHRvbl9tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uX21haW4uaWQgPSBcIm1haW4tYnV0dG9uXCI7XG4gIGJ1dHRvbl9tYWluLmNsYXNzTGlzdCA9IFwiY3JlYXRlLW1haW4tYnRuIGFuaW1hdGVkLWJ1dHRvblwiO1xuXG4gIC8vRGl2IHRvIGhvdXNlIHRoZSBtaW5pbWlzZWQgYnV0dG9uc1xuICBjb25zdCBtaW5pbWlzZWRfYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pbmltaXNlZF9idXR0b25zLmlkID0gXCJtaW5pbWlzZWQtYnV0dG9uc1wiO1xuICAvLyBtaW5pbWlzZWRfYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwibWluaW1pc2VkXCIpO1xuXG4gIC8vQ3JlYXRlIHRvZG8gYnV0dG9uXG4gIGNvbnN0IGNyZWF0ZV90b2RvX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNyZWF0ZV90b2RvX2J0bi5pZCA9IFwiY3JlYXRlLXRvZG8tYnRuXCI7XG4gIGNyZWF0ZV90b2RvX2J0bi5pbm5lclRleHQgPSBcIkNyZWF0ZSBUb2RvXCI7XG4gIGNyZWF0ZV90b2RvX2J0bi5jbGFzc0xpc3QgPSBcImFuaW1hdGVkLWJ1dHRvblwiO1xuXG4gIC8vQ3JlYXRlIHByb2plY3QgYnV0dG9uXG4gIGNvbnN0IGNyZWF0ZV9wcm9qZWN0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNyZWF0ZV9wcm9qZWN0X2J0bi5pZCA9IFwiY3JlYXRlLXByb2plY3QtYnRuXCI7XG4gIGNyZWF0ZV9wcm9qZWN0X2J0bi5pbm5lclRleHQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG4gIGNyZWF0ZV9wcm9qZWN0X2J0bi5jbGFzc0xpc3QgPSBcImFuaW1hdGVkLWJ1dHRvblwiO1xuXG4gIC8vQ3JlYXRlIG5vdGUgYnV0dG9uXG4gIGNvbnN0IGNyZWF0ZV9ub3RlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNyZWF0ZV9ub3RlX2J0bi5pZCA9IFwiY3JlYXRlLW5vdGUtYnRuXCI7XG4gIGNyZWF0ZV9ub3RlX2J0bi5pbm5lclRleHQgPSBcIkNyZWF0ZSBOb3RlXCI7XG4gIGNyZWF0ZV9ub3RlX2J0bi5jbGFzc0xpc3QgPSBcImFuaW1hdGVkLWJ1dHRvblwiO1xuXG4gIG1pbmltaXNlZF9idXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZV90b2RvX2J0bik7XG4gIG1pbmltaXNlZF9idXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZV9wcm9qZWN0X2J0bik7XG4gIG1pbmltaXNlZF9idXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZV9ub3RlX2J0bik7XG5cbiAgY3JlYXRlX2J1dHRvbnMuYXBwZW5kQ2hpbGQobWluaW1pc2VkX2J1dHRvbnMpO1xuICBjcmVhdGVfYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b25fbWFpbik7XG5cbiAgLy9BZGRpbmcgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICBidXR0b25fbWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlX2J1dHRvbnMuY2xhc3NMaXN0LnRvZ2dsZShcIm1pbmltaXNlZFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjcmVhdGVfYnV0dG9ucy5jbGFzc0xpc3QpO1xuICB9KTtcbiAgY3JlYXRlX3RvZG9fYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgbmV3IFRvZG9cIik7XG4gICAgY29uc3QgY3JlYXRlX3RvZG9fZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJvcGVuQ3JlYXRlVG9kb0RpYWxvZ0V2ZW50XCIpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlX3RvZG9fZXZlbnQpO1xuICB9KTtcbiAgY3JlYXRlX3Byb2plY3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgbmV3IHByb2plY3RcIik7XG4gICAgY29uc3QgY3JlYXRlX3Byb2plY3RfZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXG4gICAgICBcIm9wZW5DcmVhdGVQcm9qZWN0RGlhbG9nRXZlbnRcIlxuICAgICk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVfcHJvamVjdF9ldmVudCk7XG4gIH0pO1xuICBjcmVhdGVfbm90ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBuZXcgbm90ZVwiKTtcbiAgICBjb25zdCBjcmVhdGVfbm90ZV9ldmVudCA9IG5ldyBDdXN0b21FdmVudChcIm9wZW5DcmVhdGVOb3RlRGlhbG9nRXZlbnRcIik7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVfbm90ZV9ldmVudCk7XG4gIH0pO1xuXG4gIC8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIC8vIGJ1dHRvbi5pbm5lckhUTUwgPSBcIk5FVyBUT0RPXCI7XG4gIC8vIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8tYnRuXCIpO1xuXG4gIHJldHVybiBjcmVhdGVfYnV0dG9ucztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlRWRpdFRvZG9ET00ocHJvamVjdF9kYXRhLCB0b2RvT2JqZWN0KSB7XG4gIGNvbnN0IGRvbV9kaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBkb21fZGlhbG9nLmlkID0gXCJjcmVhdGUtdG9kby1kb21cIjtcbiAgZG9tX2RpYWxvZy5jbGFzc0xpc3QgPSBcImNyZWF0ZS1kaWFsb2dcIjtcblxuICBjb25zdCBjcmVhdGVfdG9kb19mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIC8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5pZCA9IFwiY3JlYXRlLXRvZG8tZm9ybVwiO1xuICBjcmVhdGVfdG9kb19mb3JtLmNsYXNzTGlzdCA9IFwiY3JlYXRlLWRpYWxvZy1mb3JtXCI7XG4gIC8vIGNyZWF0ZV90b2RvX2Zvcm0ubWV0aG9kID0gXCJkaWFsb2dcIjtcblxuICBjb25zdCBoZWFkZXJfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyX3RleHQuaW5uZXJUZXh0ID0gXCJFZGl0IFRvZG9cIjtcbiAgaGVhZGVyX3RleHQuY2xhc3NMaXN0ID0gXCJkaWFsb2ctaGVhZGVyXCI7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ0bi5pZCA9IFwiY3JlYXRlVG9kb0Nsb3NlQnRuXCI7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdCA9IFwidW5pdmVyc2FsLWNsb3NlLWJ0blwiO1xuICBjbG9zZUJ0bi5mb3JtTWV0aG9kID0gXCJkaWFsb2dcIjtcbiAgY2xvc2VCdG4udmFsdWUgPSBcImNhbmNlbFwiO1xuICBjbG9zZUJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9tX2RpYWxvZy5jbG9zZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQ2xvc2luZyBtb2RhbFwiKTtcbiAgfTtcblxuICBjb25zdCBpbnB1dF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRfdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBuZXcgdG9kb1wiO1xuICBpbnB1dF90aXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3X2VudHJ5X3RpdGxlXCIpO1xuICBpbnB1dF90aXRsZS5pZCA9IFwibmV3X3RvZG9fdGl0bGVcIjtcbiAgaW5wdXRfdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dF90aXRsZS5uYW1lID0gXCJpbnB1dF90aXRsZVwiO1xuXG4gIGNvbnN0IGlucHV0X2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGlucHV0X2Rlc2MucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG4gIGlucHV0X2Rlc2MuY2xhc3NMaXN0LmFkZChcIm5ld190b2RvX2Rlc2NcIik7XG5cbiAgY29uc3QgZGF0ZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbnB1dF9kdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dF9kdWVkYXRlLmNsYXNzTGlzdCA9IFwibmV3X3RvZG9fZHVlZGF0ZVwiO1xuICBpbnB1dF9kdWVkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgY29uc3QgaW5wdXRfZHVlZGF0ZV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5wdXRfZHVlZGF0ZV9sYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOlwiO1xuICBkYXRlX2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9kdWVkYXRlX2xhYmVsKTtcbiAgZGF0ZV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfZHVlZGF0ZSk7XG5cbiAgY29uc3QgcHJpb3JpdHlfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5wdXRfcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBwcmlvcml0eV9oaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlfbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlfbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICBwcmlvcml0eV9oaWdoLnZhbHVlID0gXCJoaWdoLXByaW9yaXR5XCI7XG4gIHByaW9yaXR5X2hpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5X21lZC52YWx1ZSA9IFwibWVkLXByaW9yaXR5XCI7XG4gIHByaW9yaXR5X21lZC5pbm5lclRleHQgPSBcIk1lZFwiO1xuICBwcmlvcml0eV9sb3cudmFsdWUgPSBcImxvdy1wcmlvcml0eVwiO1xuICBwcmlvcml0eV9sb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcblxuICBpbnB1dF9wcmlvcml0eS5jbGFzc0xpc3QgPSBcIm5ld190b2RvX3ByaW9yaXR5XCI7XG5cbiAgaW5wdXRfcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlfaGlnaCk7XG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X21lZCk7XG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X2xvdyk7XG4gIGlucHV0X3ByaW9yaXR5Lm9wdGlvbnNbMV0uc2VsZWN0ZWQgPSB0cnVlO1xuICBjb25zdCBpbnB1dF9wcmlvcml0eV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5wdXRfcHJpb3JpdHlfbGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogXCI7XG4gIHByaW9yaXR5X2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9wcmlvcml0eV9sYWJlbCk7XG4gIHByaW9yaXR5X2Rpdi5hcHBlbmRDaGlsZChpbnB1dF9wcmlvcml0eSk7XG5cbiAgY29uc3QgcHJvamVjdF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0X2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcm9qZWN0X2xhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdDogXCI7XG4gIHByb2plY3RfZGl2LmFwcGVuZENoaWxkKHByb2plY3RfbGFiZWwpO1xuICBjb25zdCBpbnB1dF9wcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJvamVjdF9vcHRpb25fZGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByb2plY3Rfb3B0aW9uX2RlZmF1bHQudmFsdWUgPSBudWxsO1xuICBwcm9qZWN0X29wdGlvbl9kZWZhdWx0LmlubmVyVGV4dCA9IFwibm9uZVwiO1xuICBpbnB1dF9wcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3Rfb3B0aW9uX2RlZmF1bHQpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X2RhdGEpO1xuICBpZiAoKHByb2plY3RfZGF0YSAhPT0gbnVsbCkgJiAocHJvamVjdF9kYXRhLmdldERhdGEoKSAhPT0gbnVsbCkpIHtcbiAgICBwcm9qZWN0X2RhdGEuZ2V0RGF0YSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3QuX3RpdGxlO1xuICAgICAgcHJvamVjdE9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0Ll90aXRsZTtcbiAgICAgIGlucHV0X3Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfSk7XG4gIH1cbiAgcHJvamVjdF9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcHJvamVjdCk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0ID0gXCJkaWFsb2ctc3VibWl0LWJ0blwiO1xuICBzdWJtaXRCdG4uaWQgPSBcImNyZWF0ZS10b2RvLXN1Ym1pdC1idG5cIjtcbiAgc3VibWl0QnRuLnZhbHVlID0gXCJkZWZhdWx0XCI7XG5cbiAgY29uc3QgZGV0YWlsc19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzX2Rpdi5pZCA9IFwiZGV0YWlsc19kaXZcIjtcbiAgZGV0YWlsc19kaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlfZGl2KTtcbiAgZGV0YWlsc19kaXYuYXBwZW5kQ2hpbGQoZGF0ZV9kaXYpO1xuICBkZXRhaWxzX2Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0X2Rpdik7XG4gIGRldGFpbHNfZGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChoZWFkZXJfdGV4dCk7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X3RpdGxlKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChpbnB1dF9kZXNjKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzX2Rpdik7XG5cbiAgZG9tX2RpYWxvZy5hcHBlbmRDaGlsZChjcmVhdGVfdG9kb19mb3JtKTtcblxuICBpZiAodG9kb09iamVjdCA9PSBudWxsKSB7XG4gICAgY29uc29sZS5sb2coXCJUb2RvIGlzIG51bGwhXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKHRvZG9PYmplY3QpO1xuICAgIGlucHV0X3RpdGxlLnZhbHVlID0gdG9kb09iamVjdC5fdGl0bGU7XG4gICAgaW5wdXRfZGVzYy52YWx1ZSA9IHRvZG9PYmplY3QuX2Rlc2NyaXB0aW9uO1xuICAgIGlmICh0b2RvT2JqZWN0Ll9kdWVEYXRlICE9IG51bGwpIHtcbiAgICAgIGlucHV0X2R1ZWRhdGUudmFsdWUgPSB0b2RvT2JqZWN0Ll9kdWVEYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgIH1cbiAgICBpbnB1dF9wcmlvcml0eS52YWx1ZSA9IHRvZG9PYmplY3QuX3ByaW9yaXR5O1xuICAgIGlucHV0X3Byb2plY3QudmFsdWUgPSB0b2RvT2JqZWN0Ll9wcm9qZWN0O1xuICB9XG5cbiAgLy9UaGlzIGFkZHMgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdWJtaXQgYnV0dG9uIHRvIGNoZWNrIGZvcm0gdmFsaWQgdGhlbiBzdWJtaXQgYXMgYSBjdXN0b20gZXZlbnRcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhjcmVhdGVfdG9kb19mb3JtLmNoZWNrVmFsaWRpdHkoKSk7XG4gICAgY29uc29sZS5sb2coaW5wdXRfZHVlZGF0ZS52YWx1ZSk7XG4gICAgbGV0IGR1ZURhdGVPYmo7XG4gICAgY29uc29sZS5sb2coZHVlRGF0ZU9iaik7XG4gICAgbGV0IHZhbGlkRm9ybSA9IGNyZWF0ZV90b2RvX2Zvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgIGlmICh2YWxpZEZvcm0pIHtcbiAgICAgIGlmIChpbnB1dF9kdWVkYXRlLnZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZHVlRGF0ZU9iaiA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlT2JqID0gbmV3IERhdGUoaW5wdXRfZHVlZGF0ZS52YWx1ZSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhkdWVEYXRlT2JqKTtcbiAgICAgIGxldCBmb3JtRGF0YSA9IHtcbiAgICAgICAgLy8gRXh0cmFjdCBmb3JtIGRhdGEgaGVyZSwgZS5nLiwgdXNpbmcgZm9ybSBlbGVtZW50cyBvciBvdGhlciBtZXRob2RzXG4gICAgICAgIGlkOiB0b2RvT2JqZWN0Ll9pZCxcbiAgICAgICAgdGl0bGU6IGlucHV0X3RpdGxlLnZhbHVlLFxuICAgICAgICBkZXNjOiBpbnB1dF9kZXNjLnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlT2JqLFxuICAgICAgICBwcmlvcml0eTogaW5wdXRfcHJpb3JpdHkudmFsdWUsXG4gICAgICAgIHByb2plY3Q6IGlucHV0X3Byb2plY3QudmFsdWUsXG4gICAgICAgIC8vIEFkZCBtb3JlIHByb3BlcnRpZXMgYXMgbmVlZGVkXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudChcImVkaXRUb2RvRXZlbnRcIiwge1xuICAgICAgICBkZXRhaWw6IGZvcm1EYXRhLFxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRWRpdCB0b2RvIGV2ZW50IGZpcmVkIVwiKTtcbiAgICAgIGNyZWF0ZV90b2RvX2Zvcm0ucmVzZXQoKTtcbiAgICAgIGRvbV9kaWFsb2cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlX3RvZG9fZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9UT0RPOiBBZGQgYSBuZXcgZmllbGQgdGhhdCBob2xkcyB0aGUgcHJvamVjdFxuICByZXR1cm4gZG9tX2RpYWxvZztcbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi90b2RvL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0c0xpc3RET00ocHJvamVjdF9kYXRhKSB7XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RfZGF0YSk7XG4gIGNvbnN0IHByb2plY3RfbGlzdF9kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RfbGlzdF9kb20uaWQgPSBcInByb2plY3QtbGlzdC1kb21cIjtcblxuICBjb25zdCBwcm9qZWN0X3RvZGF5ID0geyBfaWQ6IDAsIF90aXRsZTogXCJ0b2RheVwiIH07XG4gIGNvbnN0IHByb2plY3RfYWxsID0geyBfaWQ6IDEsIF90aXRsZTogXCJhbGxcIiB9O1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X3RvZGF5KTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdF9hbGwpO1xuXG4gIGNvbnN0IHByb2plY3RfbGlzdCA9IFsuLi5wcm9qZWN0X2RhdGEuZ2V0RGF0YSgpXTtcbiAgcHJvamVjdF9saXN0LnVuc2hpZnQocHJvamVjdF90b2RheSk7XG4gIHByb2plY3RfbGlzdC51bnNoaWZ0KHByb2plY3RfYWxsKTtcbiAgLy8gcHJvamVjdF9kYXRhLnB1c2gocHJvamVjdF9hbGwsIHByb2plY3RfdG9kYXkpXG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RfZGF0YS5nZXREYXRhKCkpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X2xpc3QpO1xuXG4gIHByb2plY3RfbGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgY29uc3QgbGlzdF9lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdF9lbG0uY2xhc3NMaXN0ID0gXCJwcm9qZWN0LWxpc3QtaXRlbVwiO1xuICAgIGNvbnN0IHByb2plY3RfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcm9qZWN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9idG5cIik7XG4gICAgcHJvamVjdF9idXR0b24uaWQgPSBwcm9qZWN0Ll9pZDtcbiAgICBwcm9qZWN0X2J1dHRvbi5pbm5lckhUTUwgPSBwcm9qZWN0Ll90aXRsZTtcbiAgICBsaXN0X2VsbS5hcHBlbmRDaGlsZChwcm9qZWN0X2J1dHRvbik7XG5cbiAgICBwcm9qZWN0X2J1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBwcm9qZWN0X2xpc3RfZG9tLmNoaWxkTm9kZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgbGV0IGJ0biA9IGVsLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIGJ0bi5zdHlsZS5mb250V2VpZ2h0ID0gXCJub3JtYWxcIjtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYnRuLnRleHRDb250ZW50LnJlcGxhY2UoL1s8Pl0vZywgXCJcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJ0bik7XG4gICAgICB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RfYnV0dG9uKTtcbiAgICAgIHByb2plY3RfYnV0dG9uLnRleHRDb250ZW50ID0gYDwgJHtwcm9qZWN0X2J1dHRvbi50ZXh0Q29udGVudH0gPmA7XG4gICAgICBwcm9qZWN0X2J1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdC5fdGl0bGUpO1xuICAgICAgY29uc3QgZmlsdGVyX2RhdGEgPSB7XG4gICAgICAgIHByb2plY3RJRDogcHJvamVjdC5faWQsXG4gICAgICAgIHByb2plY3RfdGl0bGU6IHByb2plY3QuX3RpdGxlLFxuICAgICAgfTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcl9kYXRhKTtcbiAgICAgIGNvbnN0IGZpbHRlckV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiZmlsdGVyRXZlbnRcIiwge1xuICAgICAgICBkZXRhaWw6IGZpbHRlcl9kYXRhLFxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZpbHRlckV2ZW50KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyIGV2ZW50IGZpcmVkIVwiKTtcbiAgICB9O1xuXG4gICAgcHJvamVjdF9saXN0X2RvbS5hcHBlbmRDaGlsZChsaXN0X2VsbSk7XG4gIH0pO1xuXG4gIHByb2plY3RfbGlzdF9kb20uY2xhc3NMaXN0ID0gXCJwcm9qZWN0LWxpc3RcIjtcblxuICByZXR1cm4gcHJvamVjdF9saXN0X2RvbTtcbn1cbiIsImZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlSWQoKSB7XG4gIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBjb25zdCB1bmlxdWVJZCA9IGBpZF8ke3RpbWVzdGFtcH1gO1xuICByZXR1cm4gdW5pcXVlSWQ7XG59XG5cbi8vIEV4YW1wbGUgdXNhZ2Vcbi8vIGNvbnN0IG5ld1VuaXF1ZUlkID0gZ2VuZXJhdGVVbmlxdWVJZCgpO1xuLy8gY29uc29sZS5sb2cobmV3VW5pcXVlSWQpO1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVVuaXF1ZUlkO1xuIiwiaW1wb3J0IGdlbmVyYXRlVW5pcXVlSWQgZnJvbSBcIi4uL2hlbHBlci9pZF9nZW5lcmF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RfdGl0bGUpIHtcbiAgICB0aGlzLl9pZCA9IGdlbmVyYXRlVW5pcXVlSWQoKTtcbiAgICB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2MpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgZ2VuZXJhdGVVbmlxdWVJZCBmcm9tIFwiLi4vaGVscGVyL2lkX2dlbmVyYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5faWQgPSBnZW5lcmF0ZVVuaXF1ZUlkKCk7XG4gICAgdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5fZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZHVlRGF0ZTtcbiAgICB0aGlzLl9wcmlvcml0eTsgLy8gMSBmb3IgbG93LCAyIGZvciBtZWRpdW0sIDMgZm9yIGhpZ2hcbiAgICB0aGlzLl9jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9wcm9qZWN0ID0gbnVsbDtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBzZXQgaWQobmV3SUQpIHtcbiAgICB0aGlzLl9pZCA9IG5ld0lEO1xuICB9XG5cbiAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSBuZXdUaXRsZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24obmV3RGVzYykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgZHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgaWYgKG5ld0R1ZURhdGUgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJub3RoaW5nIVwiKTtcbiAgICAgIHRoaXMuX2R1ZURhdGUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKG5ld0R1ZURhdGUpO1xuICAgICAgdGhpcy5fZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2R1ZURhdGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSB0aGlzLl9kdWVEYXRlLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICBjb25zdCBbZGF0ZVBhcnQsIHRpbWVQYXJ0XSA9IGRhdGVTdHJpbmcuc3BsaXQoXCIsIFwiKTtcbiAgICAgIHJldHVybiBkYXRlUGFydDtcbiAgICB9XG4gIH1cblxuICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIGdldCBjb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcbiAgfVxuXG4gIHNldCBjb21wbGV0ZWQodmFsdWUpIHtcbiAgICB0aGlzLl9jb21wbGV0ZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLl9jb21wbGV0ZWQgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldCBwcm9qZWN0KHByb2plY3RJRCkge1xuICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0SUQ7XG4gIH1cblxuICBnZXQgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgfVxuXG4gIGRpc3BsYXlUb2RvKCkge1xuICAgIC8vVGhpcyBzaG91bGQgaGF2ZSBwcmludCB0aGUgdG9kb1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8vdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vdG9kby9wcm9qZWN0XCI7XG5pbXBvcnQgZ2VuZXJhdGVUb2RvQ2FyZERPTSBmcm9tIFwiLi9kb20vZG9tX2NhcmRcIjtcbmltcG9ydCBnZW5lcmF0ZVRvZG9CdG4gZnJvbSBcIi4vZG9tL2RvbV9uZXdfdG9kb19idG5cIjtcbmltcG9ydCBnZW5lcmF0ZUNyZWF0ZVRvZG9ET00gZnJvbSBcIi4vZG9tL2NyZWF0ZV90b2RvX2RpYWxvZ1wiO1xuaW1wb3J0IHtcbiAgd2lwZURhdGEsXG4gIGdldFRvZG9zLFxuICB0b2dnbGVUb2RvQ29tcGxldGlvbixcbiAgZGVsZXRlVG9kbyxcbiAgZ2V0UHJvamVjdHMsXG4gIGZldGNoQWxsRGF0YSxcbiAgZmV0Y2hUb2RvRGF0YSxcbiAgZmV0Y2hQcm9qZWN0RGF0YSxcbiAgcHVzaERhdGEsXG59IGZyb20gXCIuL2RhdGFiYXNlL2RhdGFiYXNlX2hlbHBlcl9mdW5jdGlvbnNcIjtcbmltcG9ydCBnZW5lcmF0ZVByb2plY3RzTGlzdERPTSBmcm9tIFwiLi9kb20vcHJvamVjdF9saXN0XCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdERPTSBmcm9tIFwiLi9kb20vY3JlYXRlX3Byb2plY3RfZGlhbG9nXCI7XG5pbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4vZGF0YWJhc2UvZGF0YWJhc2VcIjtcbmltcG9ydCBnZW5lcmF0ZUVkaXRUb2RvRE9NIGZyb20gXCIuL2RvbS9lZGl0X3RvZG9fZGlhbG9nXCI7XG5cbmxldCB0b2RvX2RhdGFiYXNlO1xubGV0IHByb2plY3RfZGF0YWJhc2U7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGF0YWJhc2UoKSB7XG4gIGxldCB0b2RvRGF0YSA9IGZldGNoQWxsRGF0YSgpO1xuXG4gIHRvZG9fZGF0YWJhc2UgPSBuZXcgZGF0YWJhc2UoKTtcbiAgcHJvamVjdF9kYXRhYmFzZSA9IG5ldyBkYXRhYmFzZSgpO1xuXG4gIHRvZG9EYXRhLnRvZG9zLmZvckVhY2goKHRvZG9PYmopID0+IHtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKCk7XG4gICAgbmV3VG9kby5pZCA9IHRvZG9PYmouX2lkO1xuICAgIG5ld1RvZG8udGl0bGUgPSB0b2RvT2JqLl90aXRsZTtcbiAgICBuZXdUb2RvLmRlc2NyaXB0aW9uID0gdG9kb09iai5fZGVzY3JpcHRpb247XG4gICAgbmV3VG9kby5kdWVEYXRlID0gdG9kb09iai5fZHVlRGF0ZTtcbiAgICBuZXdUb2RvLnByaW9yaXR5ID0gdG9kb09iai5fcHJpb3JpdHk7XG4gICAgbmV3VG9kby5jb21wbGV0ZWQgPSB0b2RvT2JqLl9jb21wbGV0ZWQ7XG4gICAgbmV3VG9kby5wcm9qZWN0ID0gdG9kb09iai5fcHJvamVjdDtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdUb2RvKTtcbiAgICB0b2RvX2RhdGFiYXNlLmFkZChuZXdUb2RvKTtcbiAgfSk7XG4gIHRvZG9EYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3RPYmopID0+IHtcbiAgICBwcm9qZWN0X2RhdGFiYXNlLmFkZChwcm9qZWN0T2JqKTtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2codG9kb19kYXRhYmFzZSwgcHJvamVjdF9kYXRhYmFzZSk7XG59XG5wb3B1bGF0ZURhdGFiYXNlKCk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0X2RhdGFiYXNlKTtcblxuLy9DcmVhdGUgdG9kbyBkb20gZWxlbWVudFxuXG5jb25zdCBjcmVhdGVfcHJvamVjdF9kb20gPSBjcmVhdGVQcm9qZWN0RE9NKCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZV9wcm9qZWN0X2RvbSk7XG5cbi8vU0lERSBCQVJcbmNvbnN0IHNpZGVfYmFyX2RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1iYXJcIik7XG4vL1RPRE86IGFkZCB0aGUgcHJvamVjdHMgaGVyXG5cbi8vREVCVUdHRVIgRE9NIEVMRU1FTlQ6IEZPUiBERUJVR0dJTkdcbi8vIGNvbnN0IGRlYnVnX2RvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyBkZWJ1Z19kb20uaWQgPSBcImRlYnVnX2RvbVwiO1xuLy8gZGVidWdfZG9tLmlubmVyVGV4dCA9IFwiREVCVUdHRVJcIjtcbi8vIHNpZGVfYmFyX2RvbS5hcHBlbmRDaGlsZChkZWJ1Z19kb20pO1xuXG5jb25zdCBzaWRlX2Jhcl9wcm9qZWN0X2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2lkZV9iYXJfZG9tLmFwcGVuZENoaWxkKHNpZGVfYmFyX3Byb2plY3RfbGlzdCk7XG5cbmNvbnN0IHRvZG9fY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RcIik7XG5cbmNvbnN0IG5ld1RvZG9CdG4gPSBnZW5lcmF0ZVRvZG9CdG4oKTtcbi8vIGNvbnNvbGUubG9nKG5ld1RvZG9CdG4pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdUb2RvQnRuKTtcbi8vIG5ld1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuLy8gICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBjcmVhdGVfdG9kb19kb20uc2hvd01vZGFsKCk7XG4vLyB9KTtcblxuLy9UT0RPOiBNT1ZFIFRIRVNFIEZVTkNUSU9OUyBPVVQgT0YgSEVSRSFcbmZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG8oZGV0YWlscykge1xuICAvLyBjb25zb2xlLmxvZyhkZXRhaWxzKTtcbiAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKCk7XG4gIG5ld1RvZG8udGl0bGUgPSBkZXRhaWxzW1widGl0bGVcIl07XG4gIG5ld1RvZG8uZGVzY3JpcHRpb24gPSBkZXRhaWxzW1wiZGVzY1wiXTtcbiAgbmV3VG9kby5wcmlvcml0eSA9IGRldGFpbHNbXCJwcmlvcml0eVwiXTtcbiAgbmV3VG9kby5kdWVEYXRlID0gZGV0YWlsc1tcImR1ZWRhdGVcIl07XG4gIG5ld1RvZG8ucHJvamVjdCA9IGRldGFpbHNbXCJwcm9qZWN0XCJdO1xuICAvLyBjb25zb2xlLmxvZyhuZXdUb2RvKTtcbiAgLy8gY29uc29sZS5sb2cobmV3VG9kby5kdWVEYXRlKTtcbiAgcmV0dXJuIG5ld1RvZG87XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoZGV0YWlscykge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbiAgbmV3UHJvamVjdC50aXRsZSA9IGRldGFpbHNbXCJwcm9qZWN0SURcIl07XG4gIC8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuICAvLyBuZXdQcm9qZWN0LnRpdGxlID0gZGV0YWlsc1tcInRpdGxlXCJdO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNyZWF0ZU5ld1RvZG9FdmVudFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coXCJDcmVhdGluZyBuZXcgdG9kbyBhbmQgcHVzaGluZyB0byBkYXRhYmFzZSFcIik7XG4gIGNvbnN0IHJlY2VpdmVkRGF0YSA9IGV2ZW50LmRldGFpbDtcbiAgLy8gY29uc29sZS5sb2cocmVjZWl2ZWREYXRhKTtcbiAgLy8gSGFuZGxlIHRoZSByZWNlaXZlZCBkYXRhIGFzIG5lZWRlZFxuICBjb25zdCBuZXdUb2RvID0gY3JlYXRlTmV3VG9kbyhyZWNlaXZlZERhdGEpO1xuICB0b2RvX2RhdGFiYXNlLmFkZChuZXdUb2RvKTtcbiAgcHVzaERhdGEodG9kb19kYXRhYmFzZS5nZXREYXRhKCksIHByb2plY3RfZGF0YWJhc2UuZ2V0RGF0YSgpKTtcbiAgLy8gc3RvcmVUb2RvKG5ld1RvZG8pO1xuICBwb3B1bGF0ZURhdGFiYXNlKCk7XG4gIHNob3dfdG9kb3MoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZWRpdFRvZG9FdmVudFwiLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXCJDYXB0dXJlZCBlZGl0ZWQgdG9kb1wiKTtcbiAgY29uc3QgcmVjZWl2ZWREYXRhID0gZXZlbnQuZGV0YWlsO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvX2RhdGFiYXNlLmdldERhdGEoKSk7XG4gIGNvbnNvbGUubG9nKHJlY2VpdmVkRGF0YSk7XG4gIGxldCBvbGRUb2RvSW5kZXggPSB0b2RvX2RhdGFiYXNlXG4gICAgLmdldERhdGEoKVxuICAgIC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSByZWNlaXZlZERhdGEuaWQpO1xuICBsZXQgb2xkVG9kbyA9IHRvZG9fZGF0YWJhc2UuZ2V0RGF0YSgpW29sZFRvZG9JbmRleF07XG4gIC8vIGNvbnNvbGUubG9nKG9sZFRvZG8pO1xuICBjb25zdCB1cGRhdGVkX3RvZG8gPSBuZXcgVG9kbygpO1xuICB1cGRhdGVkX3RvZG8uaWQgPSByZWNlaXZlZERhdGEuaWQ7XG4gIHVwZGF0ZWRfdG9kby50aXRsZSA9IHJlY2VpdmVkRGF0YS50aXRsZTtcbiAgdXBkYXRlZF90b2RvLmRlc2NyaXB0aW9uID0gcmVjZWl2ZWREYXRhLmRlc2M7XG4gIHVwZGF0ZWRfdG9kby5kdWVEYXRlID0gcmVjZWl2ZWREYXRhLmR1ZURhdGU7XG4gIHVwZGF0ZWRfdG9kby5wcmlvcml0eSA9IHJlY2VpdmVkRGF0YS5wcmlvcml0eTtcbiAgdXBkYXRlZF90b2RvLmNvbXBsZXRlZCA9IG9sZFRvZG8uX2NvbXBsZXRlZDtcbiAgdXBkYXRlZF90b2RvLnByb2plY3QgPSByZWNlaXZlZERhdGEucHJvamVjdDtcbiAgY29uc29sZS5sb2cob2xkVG9kbyk7XG4gIGNvbnNvbGUubG9nKHVwZGF0ZWRfdG9kbyk7XG4gIHRvZG9fZGF0YWJhc2UudXBkYXRlKHJlY2VpdmVkRGF0YS5pZCwgdXBkYXRlZF90b2RvKTtcbiAgcHVzaERhdGEodG9kb19kYXRhYmFzZS5nZXREYXRhKCksIHByb2plY3RfZGF0YWJhc2UuZ2V0RGF0YSgpKTtcbiAgcG9wdWxhdGVEYXRhYmFzZSgpO1xuICBzaG93X3RvZG9zKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNyZWF0ZU5ld1Byb2plY3RFdmVudFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coXCJDcmVhdGluZyBuZXcgcHJvamVjdCBhbmQgcHVzaGluZyB0byBkYXRhYmFzZSFcIik7XG4gIGNvbnN0IHJlY2VpdmVkRGF0YSA9IGV2ZW50LmRldGFpbDtcbiAgLy8gY29uc29sZS5sb2cocmVjZWl2ZWREYXRhKTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZU5ld1Byb2plY3QocmVjZWl2ZWREYXRhKTtcbiAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4gIHByb2plY3RfZGF0YWJhc2UuYWRkKG5ld1Byb2plY3QpO1xuXG4gIHB1c2hEYXRhKHRvZG9fZGF0YWJhc2UuZ2V0RGF0YSgpLCBwcm9qZWN0X2RhdGFiYXNlLmdldERhdGEoKSk7XG4gIC8vIHNob3dfdG9kb3MoKTtcbiAgcG9wdWxhdGVEYXRhYmFzZSgpO1xuICBzaG93UHJvamVjdHMoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG9nZ2xlVG9kb0NvbXBsZXRlXCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkYXRhID0gZXZlbnQuZGV0YWlsO1xuICBsZXQgdXBkYXRlZF90b2RvID0gdG9kb19kYXRhYmFzZVxuICAgIC5nZXREYXRhKClcbiAgICAuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCA9PSBkYXRhKVswXTtcbiAgaWYgKHVwZGF0ZWRfdG9kby5fY29tcGxldGVkID09IGZhbHNlKSB7XG4gICAgdXBkYXRlZF90b2RvLl9jb21wbGV0ZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZWRfdG9kby5fY29tcGxldGVkID0gZmFsc2U7XG4gIH1cbiAgcHVzaERhdGEodG9kb19kYXRhYmFzZS5nZXREYXRhKCksIHByb2plY3RfZGF0YWJhc2UuZ2V0RGF0YSgpKTtcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gIC8vIHRvZ2dsZVRvZG9Db21wbGV0aW9uKGRhdGEpO1xuICBwb3B1bGF0ZURhdGFiYXNlKCk7XG4gIHNob3dfdG9kb3MoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGVsZXRlVG9kb1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCB0b2RvVG9EZWxldGVJRCA9IGV2ZW50LmRldGFpbDtcbiAgLy8gY29uc29sZS5sb2coXCJkZWxldGUgdG9kbyBldmVudCBjYXB0dXJlZFwiKTtcbiAgY29uc3QgdG9kb1RvRGVsZXRlID0gdG9kb19kYXRhYmFzZVxuICAgIC5nZXREYXRhKClcbiAgICAuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCA9PSB0b2RvVG9EZWxldGVJRClbMF07XG4gIHRvZG9fZGF0YWJhc2UuZGVsZXRlKHRvZG9Ub0RlbGV0ZSk7XG4gIHB1c2hEYXRhKHRvZG9fZGF0YWJhc2UuZ2V0RGF0YSgpLCBwcm9qZWN0X2RhdGFiYXNlLmdldERhdGEoKSk7XG5cbiAgLy8gZGVsZXRlVG9kbyhkYXRhKTtcbiAgcG9wdWxhdGVEYXRhYmFzZSgpO1xuICBzaG93X3RvZG9zKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5FZGl0VG9kb0RpYWxvZ1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coYEVkaXQgdG8gZXZlbnQgZXZlbnQgY2FwdHVyZWQ6ICR7ZXZlbnQuZGV0YWlsfWApO1xuICBsZXQgdG9kbyA9IHRvZG9fZGF0YWJhc2VcbiAgICAuZ2V0RGF0YSgpXG4gICAgLmZpbHRlcigodG9kbykgPT4gdG9kby5faWQgPT09IGV2ZW50LmRldGFpbClbMF07XG4gIGNvbnNvbGUubG9nKHRvZG8pO1xuICBjb25zdCBlZGl0X3RvZG9fZGlhbG9nID0gZ2VuZXJhdGVFZGl0VG9kb0RPTShwcm9qZWN0X2RhdGFiYXNlLCB0b2RvKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlZGl0X3RvZG9fZGlhbG9nKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZWRpdF90b2RvX2RpYWxvZy5zaG93TW9kYWwoKTtcbn0pO1xuXG4vL0V2ZW50IGxpc3RlbmVycyB0byBzaG93IG1vZGFsc1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwib3BlbkNyZWF0ZVRvZG9EaWFsb2dFdmVudFwiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgY3JlYXRlX3RvZG9fZG9tID0gZ2VuZXJhdGVDcmVhdGVUb2RvRE9NKHByb2plY3RfZGF0YWJhc2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZV90b2RvX2RvbSk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZV90b2RvX2RvbS5zaG93TW9kYWwoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwib3BlbkNyZWF0ZVByb2plY3REaWFsb2dFdmVudFwiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlX3Byb2plY3RfZG9tLnNob3dNb2RhbCgpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuQ3JlYXRlTm90ZURpYWxvZ0V2ZW50XCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBjcmVhdGVfcHJvamVjdF9kb20uc2hvd01vZGFsKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZpbHRlckV2ZW50XCIsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImZpbHRlciBldmVudCBjYXB0dXJlZCFcIik7XG4gIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC5wcm9qZWN0X3RpdGxlKTtcbiAgc2hvd190b2RvcyhldmVudC5kZXRhaWwucHJvamVjdF90aXRsZSk7XG59KTtcblxuZnVuY3Rpb24gc2hvd190b2RvcyhmaWx0ZXIgPSBcImFsbFwiKSB7XG4gIC8vIGNvbnN0IHRvZG9zQXJyYXkgPSBnZXRUb2RvcygpO1xuICBjb25zdCB0b2Rvc0FycmF5ID0gdG9kb19kYXRhYmFzZS5nZXREYXRhKCk7XG4gIC8vIGNvbnNvbGUubG9nKHRvZG9fZGF0YWJhc2UpO1xuICAvLyBjb25zb2xlLmxvZyhmaWx0ZXIpO1xuICAvLyBjb25zb2xlLmxvZyh0b2Rvc0FycmF5KTtcbiAgdG9kb19jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAoZmlsdGVyID09IFwiYWxsXCIpIHtcbiAgICB0b2RvX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRvZG9zQXJyYXkuZm9yRWFjaCgodG9kb19vYmopID0+IHtcbiAgICAgIGxldCB0b2RvX2RvbV9jYXJkID0gZ2VuZXJhdGVUb2RvQ2FyZERPTSh0b2RvX29iaik7XG4gICAgICB0b2RvX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvX2RvbV9jYXJkKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChmaWx0ZXIgPT0gXCJ0b2RheVwiKSB7XG4gICAgLy9HZXQgdG9kYXkncyBkYXRlXG4gICAgLy9HZXQgYWxsIHRvZG9zIHRoYXQgYXJlIGVpdGhlciBkdWUgdG9kYXkgb3IgaGF2ZSBiZWVuIGR1ZVxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlRmlsdGVyZWRUb2RvcyA9IHRvZG9zQXJyYXkuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICByZXR1cm4gdG9kby5fZHVlRGF0ZT8udG9EYXRlU3RyaW5nKCkgPT09IHRvZGF5LnRvRGF0ZVN0cmluZygpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGVGaWx0ZXJlZFRvZG9zKTtcbiAgICBkYXRlRmlsdGVyZWRUb2Rvcy5mb3JFYWNoKCh0b2RvX29iaikgPT4ge1xuICAgICAgbGV0IHRvZG9fZG9tX2NhcmQgPSBnZW5lcmF0ZVRvZG9DYXJkRE9NKHRvZG9fb2JqKTtcbiAgICAgIHRvZG9fY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9fZG9tX2NhcmQpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSB0b2Rvc0FycmF5LmZpbHRlcigodG9kbykgPT4gdG9kby5fcHJvamVjdCA9PT0gZmlsdGVyKTtcbiAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJlZFRvZG9zKTtcblxuICAgIGZpbHRlcmVkVG9kb3MuZm9yRWFjaCgodG9kb19vYmopID0+IHtcbiAgICAgIGxldCB0b2RvX2RvbV9jYXJkID0gZ2VuZXJhdGVUb2RvQ2FyZERPTSh0b2RvX29iaik7XG4gICAgICB0b2RvX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvX2RvbV9jYXJkKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3RfbGlzdF9kb20gPSBnZW5lcmF0ZVByb2plY3RzTGlzdERPTShwcm9qZWN0X2RhdGFiYXNlKTtcbiAgc2lkZV9iYXJfcHJvamVjdF9saXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIHNpZGVfYmFyX3Byb2plY3RfbGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0X2xpc3RfZG9tKTtcbn1cblxuLy8gZnVuY3Rpb24gc2hvd19wcm9qZWN0cygpe1xuLy8gICBjb25zdFxuLy8gfVxuLy8gcG9wdWxhdGVEYXRhYmFzZSgpO1xuc2hvd190b2RvcygpO1xuc2hvd1Byb2plY3RzKCk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0X2RhdGFiYXNlKTtcbi8vIGNvbnNvbGUubG9nKHRvZG9fZGF0YWJhc2UpO1xuLy8gd2lwZURhdGEoKTtcbi8vIGNvbnNvbGUubG9nKFwiSEVMTE9cIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
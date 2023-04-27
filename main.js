/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startup)
/* harmony export */ });
/* harmony import */ var _creation_segments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-segments */ "./src/creation-segments.js");
/* eslint-disable semi */
/* eslint-disable no-console */
// import createParagraph from './creation-segments'

// import './css/style.scss'

function createHeader() {
  console.log('base.js ran')
  const pageBody = document.querySelector('#content')

  const headerDiv = document.createElement('div')
  headerDiv.classList.add('header')
  pageBody.appendChild(headerDiv)

  const iconSpan = document.createElement('span');
  iconSpan.classList.add('material-symbols-outlined');
  iconSpan.classList.add('make-bigger')
  iconSpan.textContent = 'checklist'
  headerDiv.appendChild(iconSpan)

  const headerTitle = document.createElement('div')
  headerTitle.classList.add('page-title')
  headerTitle.innerHTML = 'Todo List'
  headerDiv.appendChild(headerTitle)

  return headerDiv;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyrightThing = document.createElement('p')
  copyrightThing.textContent = `Copyright © ${new Date().getFullYear()} Employed Ranger`;

  footer.appendChild(copyrightThing);
  return footer;
}

function createSidebar() {
  const sidebarSection = document.createElement('div')
  sidebarSection.classList.add('sidebar')
  const scheduledContainer = document.createElement('div')
  scheduledContainer.classList.add('scheduled-container')
  sidebarSection.appendChild(scheduledContainer)

  scheduledContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createScheduledTask)('current-list', 'Current', 'event_upcoming'));
  scheduledContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createScheduledTask)('today-list', 'Today', 'today'));
  scheduledContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createScheduledTask)('week-list', 'This week', 'date_range'));

  const projectContainer = document.createElement('div')
  projectContainer.classList.add('project-container')
  sidebarSection.appendChild(projectContainer)

  const projectHeading = document.createElement('p')
  projectHeading.classList.add('project-heading')
  projectHeading.textContent = 'Projects'
  projectContainer.appendChild(projectHeading)

  const addProject = document.createElement('div')
  addProject.classList.add('add-project')

  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createProject)('Mow the lawn', 'task', 'Get out there'))
  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createProject)('Count chips', 'task', 'If you know, you know'))
  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createProject)('Add Project', 'add'))

  return sidebarSection;
}

function createTodo() {
  const listContainer = document.createElement('div')
  listContainer.classList.add('list-container')


  return listContainer;
}

function startup() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  content.appendChild(createSidebar());
  content.appendChild(createTodo());
  content.appendChild(createFooter());
  console.log('web after appends')

//   loadHome();
}


/***/ }),

/***/ "./src/creation-segments.js":
/*!**********************************!*\
  !*** ./src/creation-segments.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createScheduledTask": () => (/* binding */ createScheduledTask),
/* harmony export */   "createTodoItem": () => (/* binding */ createTodoItem),
/* harmony export */   "default": () => (/* binding */ createParagraph)
/* harmony export */ });
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.classList.add('paragraph');
  paragraph.textContent = text;
  return paragraph;
}

function createTodoItem(taskName, description) {
  const taskItem = document.createElement('div')
  taskItem.classList.add('task-item')

  const taskTitle = document.createElement('div')
  taskTitle.classList.add('task-name')
  taskTitle.textContent = taskName
  taskItem.appendChild(taskTitle)

  const taskDescription = document.createElement('div')
  taskDescription.classList.add('task-description')
  taskDescription.textContent = description
  taskItem.appendChild(taskDescription)
}

function createScheduledTask(scheduledName, itemTitle, symbolText) {
  const div = document.createElement('div');
  div.classList.add('scheduled-item');
  div.classList.add(scheduledName);
  div.classList.add('selection-option');
  
  const iconSpan = document.createElement('span');
  iconSpan.classList.add('material-symbols-outlined');
  iconSpan.textContent = symbolText;
  
  const itemText = document.createElement('p');
  itemText.textContent = itemTitle;
  
  div.appendChild(iconSpan);
  div.appendChild(itemText);
  
  return div;
}
  
function createProject(projectName, icon, description) {
  const projectDiv = document.createElement('div')
  projectDiv.classList.add('project')

  const projectItem = document.createElement('p')
  projectItem.textContent = projectName
  
  const projectIcon = document.createElement('span')
  projectIcon.classList.add('material-symbols-outlined')
  projectIcon.textContent = icon
  projectDiv.appendChild(projectIcon)
  projectDiv.appendChild(projectItem)

  const projectDes = document.createElement('p')
  projectDes.classList.add('project-description')
  projectDes.textContent = description
  //  projectDiv.appendChild(projectDes)

  return projectDiv;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/base.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* eslint-disable semi */
/* eslint-disable no-console */



(0,_base__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
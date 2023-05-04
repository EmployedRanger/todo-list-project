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
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* eslint-disable semi */
/* eslint-disable no-console */
// import createParagraph from './creation-segments'
// import { sub } from 'date-fns';



// import './css/style.scss'

function createHeader() {
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
  headerTitle.innerHTML = 'To-do List'
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

  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createProject)('Mow the lawn', 'task', ''))
  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createProject)('Count chips', 'task', ''))
  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createProject)('Add Project', 'add', 'yes'))

  return sidebarSection;
}

function createTodo() {
  const boxContainer = document.createElement('div')
  boxContainer.classList.add('box-container')

  const listContainer = document.createElement('div')
  listContainer.classList.add('list-container')
  boxContainer.appendChild(listContainer)

  const listTitle = document.createElement('h1')
  listTitle.classList.add('list-title')
  listTitle.textContent = 'To-do list'
  listContainer.appendChild(listTitle)

  const todoSection = document.createElement('div')
  todoSection.classList.add('Todo-section')
  listContainer.appendChild(todoSection)

  const addTaskButton = document.createElement('button')
  addTaskButton.classList.add('add-task')

  const buttonText = document.createElement('div')
  buttonText.classList.add('button-text')
  buttonText.textContent = 'Add Task'

  const iconSpan = document.createElement('span')
  iconSpan.classList.add('material-symbols-outlined')
  iconSpan.textContent = 'add'
  addTaskButton.appendChild(iconSpan)
  addTaskButton.appendChild(buttonText)
  addTaskButton.addEventListener('click', () => {
    ;(0,_utilities__WEBPACK_IMPORTED_MODULE_1__.makeItemActive)();
  })
  listContainer.appendChild(addTaskButton)

  const addContainer = document.createElement('div')
  addContainer.classList.add('add-container')
  const titleContainer = document.createElement('input')
  titleContainer.setAttribute('id', 'input-title')
  titleContainer.setAttribute('placeholder', 'Task Title')
  titleContainer.setAttribute('type', 'text')

  const descriptionContainer = document.createElement('input')
  descriptionContainer.setAttribute('id', 'input-description')
  descriptionContainer.setAttribute('placeholder', 'Task description')
  descriptionContainer.setAttribute('type', 'text')

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('form-container')

  const submitButton = document.createElement('button')
  submitButton.classList.add('submit-form')
  submitButton.classList.add('form')
  submitButton.textContent = 'Add Task'
  submitButton.addEventListener('click', () => {
    ;(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.submitNewTask)();
  })
  buttonContainer.appendChild(submitButton)

  const cancelButton = document.createElement('button')
  cancelButton.classList.add('cancel-form')
  cancelButton.classList.add('form')
  cancelButton.textContent = 'Cancel'
  cancelButton.addEventListener('click', () => {
    ;(0,_utilities__WEBPACK_IMPORTED_MODULE_1__.closePopup)();
  })
  buttonContainer.appendChild(cancelButton)

  addContainer.appendChild(titleContainer)
  addContainer.appendChild(descriptionContainer)
  addContainer.appendChild(buttonContainer)
  listContainer.appendChild(addContainer)

  return boxContainer;
}

function createMainSection() {
  const content = document.querySelector('#content');
  const mainSection = document.createElement('div');
  mainSection.classList.add('main-section-container');

  mainSection.appendChild(createSidebar());
  mainSection.appendChild(createTodo());
  content.appendChild(mainSection);
}

function startup() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  createMainSection();
  content.appendChild(createFooter());
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
  const div = document.createElement('button');
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
  
function createProject(projectName, icon, addProject) {
  const projectDiv = document.createElement('button');
  projectDiv.classList.add('project');

  const projectItem = document.createElement('p');
  projectItem.textContent = projectName;

  const projectIcon = document.createElement('span')
  projectIcon.classList.add('material-symbols-outlined')
  projectIcon.textContent = icon

  projectDiv.appendChild(projectIcon)
  projectDiv.appendChild(projectItem)
  
  if (addProject === '') {
    projectDiv.classList.add('add-project');
    const moveIcon = document.createElement('span')
    moveIcon.classList.add('material-symbols-outlined')
    moveIcon.classList.add('moveable')
    moveIcon.textContent = 'dehaze'
    projectDiv.appendChild(moveIcon)      
  }
  return projectDiv;
}


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task),
/* harmony export */   "submitNewTask": () => (/* binding */ submitNewTask)
/* harmony export */ });
/* eslint-disable no-console */
class Task {
  constructor(name, description, timeline = 'No date') {
    this.name = name;
    this.description = description;
    this.timeline = timeline;
  }

  setName(name) {
    console.log('setName in tasks was used');
    this.name = name;
  }

  setDescription(description) {
    console.log('setDescription in tasks was used');
    this.description = description;
  }

  setTimeline(timeline) {
    console.log('setTimeline in tasks was used');
    this.timeline = timeline;
  }

  getDate() {
    console.log('getDate in tasks was used');
    return this.timeline;
  }

  getDateFormatted() {
    console.log('getDateFormatted in tasks was used');
    const day = this.timeline.split('/')[0];
    const month = this.timeline.split('/')[1];
    const year = this.timeline.split('/')[2];
    return `${month}/${day}/${year}`;
  }
}

function submitNewTask() {
  const titleTask = document.querySelector('#input-title').value;
  const descriptionTask = document.querySelector('#input-description').value;

  console.log(titleTask);
  console.log(descriptionTask);
}


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closePopup": () => (/* binding */ closePopup),
/* harmony export */   "makeItemActive": () => (/* binding */ makeItemActive),
/* harmony export */   "submitNewTask": () => (/* binding */ submitNewTask)
/* harmony export */ });
/* eslint-disable no-console */
function makeItemActive() {
//   console.log('makeItemActive ran');
  const item = document.querySelector('.add-container');
  //  console.log(item);
  item.style.display = 'flex';
}

function closePopup() {
  const cancelForm = document.querySelector('.add-container');
  //  console.log(closePopup);
  //  cancelForm.classlist.remove('active');
  cancelForm.style.display = 'none';
}

function submitNewTask() {
  const titleTask = document.querySelector('#input-title').value;
  const descriptionTask = document.querySelector('#input-description').value;

  console.log(titleTask);
  console.log(descriptionTask);
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
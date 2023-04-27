/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createProject)('Mow the lawn', 'Get out there'))
  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createProject)('Count chips', 'If you know, you know'))

  return sidebarSection;
}

function startup() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  content.appendChild(createSidebar());
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
  taskItem.classList('task-item')

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
  
function createProject(projectName, description) {
  const projectDiv = document.createElement('div')
  projectDiv.classList.add('project')

  const projectItem = document.createElement('p')
  projectItem.textContent = projectName
  
  const projectIcon = document.createElement('span')
  projectIcon.classList.add('material-symbols-outlined')
  projectIcon.textContent = 'task'
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
/* eslint-disable semi */
/* eslint-disable no-console */


console.log('index.js ran');
(0,_base__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDeUU7O0FBRXpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QywwQkFBMEI7O0FBRXhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHVFQUFtQjtBQUNwRCxpQ0FBaUMsdUVBQW1CO0FBQ3BELGlDQUFpQyx1RUFBbUI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsaUVBQWE7QUFDNUMsK0JBQStCLGlFQUFhOztBQUU1QztBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUM0Qjs7QUFFNUI7QUFDQSxpREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QvLi9zcmMvY3JlYXRpb24tc2VnbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBzZW1pICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vLyBpbXBvcnQgY3JlYXRlUGFyYWdyYXBoIGZyb20gJy4vY3JlYXRpb24tc2VnbWVudHMnXG5pbXBvcnQgeyBjcmVhdGVTY2hlZHVsZWRUYXNrLCBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9jcmVhdGlvbi1zZWdtZW50cyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc29sZS5sb2coJ2Jhc2UuanMgcmFuJylcbiAgY29uc3QgcGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gIHBhZ2VCb2R5LmFwcGVuZENoaWxkKGhlYWRlckRpdilcblxuICBjb25zdCBpY29uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaWNvblNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICBpY29uU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYWtlLWJpZ2dlcicpXG4gIGljb25TcGFuLnRleHRDb250ZW50ID0gJ2NoZWNrbGlzdCdcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGljb25TcGFuKVxuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpXG4gIGhlYWRlclRpdGxlLmlubmVySFRNTCA9ICdUb2RvIExpc3QnXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSlcblxuICByZXR1cm4gaGVhZGVyRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgY29uc3QgY29weXJpZ2h0VGhpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgY29weXJpZ2h0VGhpbmcudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBFbXBsb3llZCBSYW5nZXJgO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRUaGluZyk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2lkZWJhclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXG4gIGNvbnN0IHNjaGVkdWxlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHNjaGVkdWxlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY2hlZHVsZWQtY29udGFpbmVyJylcbiAgc2lkZWJhclNlY3Rpb24uYXBwZW5kQ2hpbGQoc2NoZWR1bGVkQ29udGFpbmVyKVxuXG4gIHNjaGVkdWxlZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTY2hlZHVsZWRUYXNrKCdjdXJyZW50LWxpc3QnLCAnQ3VycmVudCcsICdldmVudF91cGNvbWluZycpKTtcbiAgc2NoZWR1bGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNjaGVkdWxlZFRhc2soJ3RvZGF5LWxpc3QnLCAnVG9kYXknLCAndG9kYXknKSk7XG4gIHNjaGVkdWxlZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTY2hlZHVsZWRUYXNrKCd3ZWVrLWxpc3QnLCAnVGhpcyB3ZWVrJywgJ2RhdGVfcmFuZ2UnKSk7XG5cbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKVxuICBzaWRlYmFyU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuXG4gIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHByb2plY3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGluZycpXG4gIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkaW5nKVxuXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCgnTW93IHRoZSBsYXduJywgJ0dldCBvdXQgdGhlcmUnKSlcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KCdDb3VudCBjaGlwcycsICdJZiB5b3Uga25vdywgeW91IGtub3cnKSlcblxuICByZXR1cm4gc2lkZWJhclNlY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0dXAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgY29uc29sZS5sb2coJ3dlYiBhZnRlciBhcHBlbmRzJylcblxuLy8gICBsb2FkSG9tZSgpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbXVsdGlwbGUtZW1wdHktbGluZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRyYWlsaW5nLXNwYWNlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgc2VtaSAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHQpIHtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgncGFyYWdyYXBoJyk7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBwYXJhZ3JhcGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbSh0YXNrTmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0YXNrSXRlbS5jbGFzc0xpc3QoJ3Rhc2staXRlbScpXG5cbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tOYW1lXG4gIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpXG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uXG4gIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNjaGVkdWxlZFRhc2soc2NoZWR1bGVkTmFtZSwgaXRlbVRpdGxlLCBzeW1ib2xUZXh0KSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnc2NoZWR1bGVkLWl0ZW0nKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoc2NoZWR1bGVkTmFtZSk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24tb3B0aW9uJyk7XG4gIFxuICBjb25zdCBpY29uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaWNvblNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICBpY29uU3Bhbi50ZXh0Q29udGVudCA9IHN5bWJvbFRleHQ7XG4gIFxuICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaXRlbVRleHQudGV4dENvbnRlbnQgPSBpdGVtVGl0bGU7XG4gIFxuICBkaXYuYXBwZW5kQ2hpbGQoaWNvblNwYW4pO1xuICBkaXYuYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xuICBcbiAgcmV0dXJuIGRpdjtcbn1cbiAgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG5cbiAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZVxuICBcbiAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpXG4gIHByb2plY3RJY29uLnRleHRDb250ZW50ID0gJ3Rhc2snXG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pXG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pXG5cbiAgY29uc3QgcHJvamVjdERlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwcm9qZWN0RGVzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVzY3JpcHRpb24nKVxuICBwcm9qZWN0RGVzLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25cbiAgLy8gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlcylcblxuICByZXR1cm4gcHJvamVjdERpdjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgc2VtaSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHN0YXJ0dXAgZnJvbSAnLi9iYXNlJ1xuXG5jb25zb2xlLmxvZygnaW5kZXguanMgcmFuJyk7XG5zdGFydHVwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
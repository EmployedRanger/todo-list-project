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

  sidebarSection.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createScheduledTask)('current-list', 'Current', 'event_upcoming'));
  sidebarSection.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createScheduledTask)('today-list', 'Today', 'today'));
  sidebarSection.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createScheduledTask)('week-list', 'This week', 'date_range'));

  //   sidebarSection.innerHTML = `
  //     <div id="mySidebar" class="sidebar">
  //       <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
  //       <div class="menu-options">
  //         <hr class="rounded">
  //         <h2>Scheduled</h2>
  //         <hr class="rounded">

  //         <hr class="rounded">
  //         <h2>Projects</h2>
  //         <hr class="rounded">
  //         <div class="menu-item">
  //             <div class="item">Books: </div>
  //             <div id="counter-quantity">0</div>
  //         </div>
  //         <div class="menu-item">
  //             <div class="item">Books Finished: </div>
  //             <div id="counter-finished">0</div>
  //         </div>
  //         <div class="menu-item">
  //             <div class="item">Library finished: </div>
  //             <div id="counter-completed">0</div>
  //         </div>
  //         <hr class="rounded outside">
  //       </div>
  //     </div>`
  //   return
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
  projectDiv.textContent = projectName

  const projectDes = document.createElement('div')
  projectDes.classList.add('project-description')
  projectDes.textContent = description
  projectDiv.appendChild(projectDes)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDMEQ7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsMEJBQTBCOztBQUV4RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qix1RUFBbUI7QUFDaEQsNkJBQTZCLHVFQUFtQjtBQUNoRCw2QkFBNkIsdUVBQW1COztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDNEI7O0FBRTVCO0FBQ0EsaURBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC8uL3NyYy9iYXNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL2NyZWF0aW9uLXNlZ21lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgc2VtaSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLy8gaW1wb3J0IGNyZWF0ZVBhcmFncmFwaCBmcm9tICcuL2NyZWF0aW9uLXNlZ21lbnRzJ1xuaW1wb3J0IHsgY3JlYXRlU2NoZWR1bGVkVGFzayB9IGZyb20gJy4vY3JlYXRpb24tc2VnbWVudHMnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnNvbGUubG9nKCdiYXNlLmpzIHJhbicpXG4gIGNvbnN0IHBhZ2VCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICBwYWdlQm9keS5hcHBlbmRDaGlsZChoZWFkZXJEaXYpXG5cbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdwYWdlLXRpdGxlJylcbiAgaGVhZGVyVGl0bGUuaW5uZXJIVE1MID0gJ1RvZG8gTGlzdCdcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKVxuXG4gIHJldHVybiBoZWFkZXJEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBjb3B5cmlnaHRUaGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBjb3B5cmlnaHRUaGluZy50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEVtcGxveWVkIFJhbmdlcmA7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodFRoaW5nKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBzaWRlYmFyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJylcblxuICBzaWRlYmFyU2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVTY2hlZHVsZWRUYXNrKCdjdXJyZW50LWxpc3QnLCAnQ3VycmVudCcsICdldmVudF91cGNvbWluZycpKTtcbiAgc2lkZWJhclNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlU2NoZWR1bGVkVGFzaygndG9kYXktbGlzdCcsICdUb2RheScsICd0b2RheScpKTtcbiAgc2lkZWJhclNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlU2NoZWR1bGVkVGFzaygnd2Vlay1saXN0JywgJ1RoaXMgd2VlaycsICdkYXRlX3JhbmdlJykpO1xuXG4gIC8vICAgc2lkZWJhclNlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAvLyAgICAgPGRpdiBpZD1cIm15U2lkZWJhclwiIGNsYXNzPVwic2lkZWJhclwiPlxuICAvLyAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJjbG9zZWJ0blwiIG9uY2xpY2s9XCJjbG9zZU5hdigpXCI+w5c8L2E+XG4gIC8vICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LW9wdGlvbnNcIj5cbiAgLy8gICAgICAgICA8aHIgY2xhc3M9XCJyb3VuZGVkXCI+XG4gIC8vICAgICAgICAgPGgyPlNjaGVkdWxlZDwvaDI+XG4gIC8vICAgICAgICAgPGhyIGNsYXNzPVwicm91bmRlZFwiPlxuXG4gIC8vICAgICAgICAgPGhyIGNsYXNzPVwicm91bmRlZFwiPlxuICAvLyAgICAgICAgIDxoMj5Qcm9qZWN0czwvaDI+XG4gIC8vICAgICAgICAgPGhyIGNsYXNzPVwicm91bmRlZFwiPlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5Cb29rczogPC9kaXY+XG4gIC8vICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3VudGVyLXF1YW50aXR5XCI+MDwvZGl2PlxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5Cb29rcyBGaW5pc2hlZDogPC9kaXY+XG4gIC8vICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3VudGVyLWZpbmlzaGVkXCI+MDwvZGl2PlxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5MaWJyYXJ5IGZpbmlzaGVkOiA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgPGRpdiBpZD1cImNvdW50ZXItY29tcGxldGVkXCI+MDwvZGl2PlxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgIDxociBjbGFzcz1cInJvdW5kZWQgb3V0c2lkZVwiPlxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICAgIDwvZGl2PmBcbiAgLy8gICByZXR1cm5cbiAgcmV0dXJuIHNpZGViYXJTZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydHVwKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gIGNvbnNvbGUubG9nKCd3ZWIgYWZ0ZXIgYXBwZW5kcycpXG5cbi8vICAgbG9hZEhvbWUoKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpcGxlLWVtcHR5LWxpbmVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10cmFpbGluZy1zcGFjZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHNlbWkgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0KSB7XG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ3BhcmFncmFwaCcpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gcGFyYWdyYXBoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0odGFza05hbWUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGFza0l0ZW0uY2xhc3NMaXN0KCd0YXNrLWl0ZW0nKVxuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKVxuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrTmFtZVxuICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKVxuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTY2hlZHVsZWRUYXNrKHNjaGVkdWxlZE5hbWUsIGl0ZW1UaXRsZSwgc3ltYm9sVGV4dCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NjaGVkdWxlZC1pdGVtJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKHNjaGVkdWxlZE5hbWUpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLW9wdGlvbicpO1xuICBcbiAgY29uc3QgaWNvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGljb25TcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgaWNvblNwYW4udGV4dENvbnRlbnQgPSBzeW1ib2xUZXh0O1xuICBcbiAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gaXRlbVRpdGxlO1xuICBcbiAgZGl2LmFwcGVuZENoaWxkKGljb25TcGFuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgXG4gIHJldHVybiBkaXY7XG59XG4gIFxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG5cbiAgY29uc3QgcHJvamVjdERlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHByb2plY3REZXMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZXNjcmlwdGlvbicpXG4gIHByb2plY3REZXMudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REZXMpXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIHNlbWkgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBzdGFydHVwIGZyb20gJy4vYmFzZSdcblxuY29uc29sZS5sb2coJ2luZGV4LmpzIHJhbicpO1xuc3RhcnR1cCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
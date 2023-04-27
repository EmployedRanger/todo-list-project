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
  iconSpan.classList.add('makebigger')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDMEQ7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QywwQkFBMEI7O0FBRXhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLHVFQUFtQjtBQUNoRCw2QkFBNkIsdUVBQW1CO0FBQ2hELDZCQUE2Qix1RUFBbUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDNEI7O0FBRTVCO0FBQ0EsaURBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC8uL3NyYy9iYXNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL2NyZWF0aW9uLXNlZ21lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgc2VtaSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLy8gaW1wb3J0IGNyZWF0ZVBhcmFncmFwaCBmcm9tICcuL2NyZWF0aW9uLXNlZ21lbnRzJ1xuaW1wb3J0IHsgY3JlYXRlU2NoZWR1bGVkVGFzayB9IGZyb20gJy4vY3JlYXRpb24tc2VnbWVudHMnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnNvbGUubG9nKCdiYXNlLmpzIHJhbicpXG4gIGNvbnN0IHBhZ2VCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICBwYWdlQm9keS5hcHBlbmRDaGlsZChoZWFkZXJEaXYpXG5cbiAgY29uc3QgaWNvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGljb25TcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgaWNvblNwYW4uY2xhc3NMaXN0LmFkZCgnbWFrZWJpZ2dlcicpXG4gIGljb25TcGFuLnRleHRDb250ZW50ID0gJ2NoZWNrbGlzdCdcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGljb25TcGFuKVxuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpXG4gIGhlYWRlclRpdGxlLmlubmVySFRNTCA9ICdUb2RvIExpc3QnXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSlcblxuICByZXR1cm4gaGVhZGVyRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgY29uc3QgY29weXJpZ2h0VGhpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgY29weXJpZ2h0VGhpbmcudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBFbXBsb3llZCBSYW5nZXJgO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRUaGluZyk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2lkZWJhclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXG5cbiAgc2lkZWJhclNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlU2NoZWR1bGVkVGFzaygnY3VycmVudC1saXN0JywgJ0N1cnJlbnQnLCAnZXZlbnRfdXBjb21pbmcnKSk7XG4gIHNpZGViYXJTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVNjaGVkdWxlZFRhc2soJ3RvZGF5LWxpc3QnLCAnVG9kYXknLCAndG9kYXknKSk7XG4gIHNpZGViYXJTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVNjaGVkdWxlZFRhc2soJ3dlZWstbGlzdCcsICdUaGlzIHdlZWsnLCAnZGF0ZV9yYW5nZScpKTtcblxuICAvLyAgIHNpZGViYXJTZWN0aW9uLmlubmVySFRNTCA9IGBcbiAgLy8gICAgIDxkaXYgaWQ9XCJteVNpZGViYXJcIiBjbGFzcz1cInNpZGViYXJcIj5cbiAgLy8gICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiY2xvc2VidG5cIiBvbmNsaWNrPVwiY2xvc2VOYXYoKVwiPsOXPC9hPlxuICAvLyAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1vcHRpb25zXCI+XG4gIC8vICAgICAgICAgPGhyIGNsYXNzPVwicm91bmRlZFwiPlxuICAvLyAgICAgICAgIDxoMj5TY2hlZHVsZWQ8L2gyPlxuICAvLyAgICAgICAgIDxociBjbGFzcz1cInJvdW5kZWRcIj5cblxuICAvLyAgICAgICAgIDxociBjbGFzcz1cInJvdW5kZWRcIj5cbiAgLy8gICAgICAgICA8aDI+UHJvamVjdHM8L2gyPlxuICAvLyAgICAgICAgIDxociBjbGFzcz1cInJvdW5kZWRcIj5cbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+Qm9va3M6IDwvZGl2PlxuICAvLyAgICAgICAgICAgICA8ZGl2IGlkPVwiY291bnRlci1xdWFudGl0eVwiPjA8L2Rpdj5cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+Qm9va3MgRmluaXNoZWQ6IDwvZGl2PlxuICAvLyAgICAgICAgICAgICA8ZGl2IGlkPVwiY291bnRlci1maW5pc2hlZFwiPjA8L2Rpdj5cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+TGlicmFyeSBmaW5pc2hlZDogPC9kaXY+XG4gIC8vICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3VudGVyLWNvbXBsZXRlZFwiPjA8L2Rpdj5cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICA8aHIgY2xhc3M9XCJyb3VuZGVkIG91dHNpZGVcIj5cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vICAgICA8L2Rpdj5gXG4gIC8vICAgcmV0dXJuXG4gIHJldHVybiBzaWRlYmFyU2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnR1cCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBjb25zb2xlLmxvZygnd2ViIGFmdGVyIGFwcGVuZHMnKVxuXG4vLyAgIGxvYWRIb21lKCk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aXBsZS1lbXB0eS1saW5lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdHJhaWxpbmctc3BhY2VzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBzZW1pICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdwYXJhZ3JhcGgnKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKHRhc2tOYW1lLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRhc2tJdGVtLmNsYXNzTGlzdCgndGFzay1pdGVtJylcblxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJylcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza05hbWVcbiAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJylcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25cbiAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGVkVGFzayhzY2hlZHVsZWROYW1lLCBpdGVtVGl0bGUsIHN5bWJvbFRleHQpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdzY2hlZHVsZWQtaXRlbScpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChzY2hlZHVsZWROYW1lKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbi1vcHRpb24nKTtcbiAgXG4gIGNvbnN0IGljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpY29uU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gIGljb25TcGFuLnRleHRDb250ZW50ID0gc3ltYm9sVGV4dDtcbiAgXG4gIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpdGVtVGV4dC50ZXh0Q29udGVudCA9IGl0ZW1UaXRsZTtcbiAgXG4gIGRpdi5hcHBlbmRDaGlsZChpY29uU3Bhbik7XG4gIGRpdi5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gIFxuICByZXR1cm4gZGl2O1xufVxuICBcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG5cbiAgY29uc3QgcHJvamVjdERlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHByb2plY3REZXMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZXNjcmlwdGlvbicpXG4gIHByb2plY3REZXMudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REZXMpXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIHNlbWkgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBzdGFydHVwIGZyb20gJy4vYmFzZSdcblxuY29uc29sZS5sb2coJ2luZGV4LmpzIHJhbicpO1xuc3RhcnR1cCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunktodo_list_project"] = self["webpackChunktodo_list_project"] || []).push([["storage"],{

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list */ "./src/todo-list.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* eslint-disable no-console */




const Storage = {
  saveList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  },

  getTodo() {
    const todoList = Object.assign(
      new _todo_list__WEBPACK_IMPORTED_MODULE_0__["default"](),
      JSON.parse(localStorage.getItem('todoList')),
    );

    todoList.setProjects(
      todoList.getProjects().map((project) => Object.assign(new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](), project)),
    );

    todoList.getProjects().forEach((project) => {
      project.setTasks(
        project.getTasks().map((task) => Object.assign(new _tasks__WEBPACK_IMPORTED_MODULE_2__["default"](), task)),
      );
    });

    return todoList;
  },

  addProject(project) {
    const todoList = Storage.getTodo();
    todoList.addProject(project);
    Storage.saveList(todoList);
  },

  deleteProject(projectName) {
    const todoList = Storage.getTodo();
    todoList.deleteProject(projectName);
    Storage.saveList(todoList);
  },

  addTask(projectName, task) {
    const todoList = Storage.getTodo();
    todoList.getProject(projectName).addTask(task);
    Storage.saveList(todoList);
  },

  deleteTask(projectName, taskName) {
    const todoList = Storage.getTodo();
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveList(todoList);
  },

  // renameTask(projectName, taskName, newTaskName) {
  //   const todoList = Storage.getTodo();
  //   todoList
  //     .getProject(projectName)
  //     .getTask(taskName)
  //     .setName(newTaskName);
  //   Storage.saveList(todoList);
  // },

  updateTodayProject() {
    console.log('updateTodayProject in Storage ran');
    const todoList = Storage.getTodo();
    todoList.updateTodayProject();
    Storage.saveList(todoList);
  },

  updateWeekProject() {
    console.log('updateWeekProject in Storage ran');
    const todoList = Storage.getTodo();
    todoList.updateWeekProject();
    Storage.saveList(todoList);
  },
};

// const storage = Object.create(Storage);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


/***/ }),

/***/ "./src/todo-list.js":
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* eslint-disable no-console */




Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./tasks */ "./src/tasks.js")).then((taskModule) => {
  _tasks__WEBPACK_IMPORTED_MODULE_1__["default"] = taskModule.default;
});

class TodoList {
  constructor() {
    console.log('Constructor in TodoList ran');
    this.projects = [];
    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]('Current'));
    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'));
    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]('This week'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.getProjects.find((project) => project.getName() === projectName);
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName);
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.name === newProject.name)) return;
    this.projects.push(newProject);
  }

  deleteProject(projectName) {
    const projectDeleted = this.projects.find(
      (project) => project.getName() === projectName,
    );
    this.projects.splice(this.projects.indexOf(projectDeleted), 1);
  }

  updateTodayProject() {
    this.getProject('Today').tasks = [];

    this.projects.forEach((project) => {
      if (project.getName() === 'Today' || project.getName() === 'This week') return;

      const todayTasks = project.getDailyTasks();
      todayTasks.forEach((task) => {
        const taskName = `${task.getName()} ${project.getName()}`;
        const taskDescription = `${task.getDescription()} ${project.getDescription()}`;

        this.getProject('Today').addTask(new _tasks__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, taskDescription, task.getDate()));
      });
    });
  }

  updateWeekProject() {
    this.getProject('This week').tasks = [];

    this.projects.forEach((project) => {
      if (project.getName() === 'This week' || project.getName() === 'Today') return;

      const weekTasks = project.getWeeklyTasks();
      weekTasks.forEach((task) => {
        const taskName = `${task.getName()} {$(project.getName()})`;
        const taskDescription = `${task.getDescription()} {$(project.getDescription()})`;
        this.getProject('Today').addTask(new _tasks__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, taskDescription, task.getDate()));
      });
    });

    this.getProject('This week').setTasks(
      this.getProject('This week').getTasks().sort((task1, task2) => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(
        (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(task1.getDateFormatted())),
        (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(task2.getDateFormatted())),
      )),
    );
  }
}


/***/ })

}]);
//# sourceMappingURL=storage.main.js.map
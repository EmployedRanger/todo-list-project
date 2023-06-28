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

/***/ "./src/creation-segments.js":
/*!**********************************!*\
  !*** ./src/creation-segments.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFormProject": () => (/* binding */ createFormProject),
/* harmony export */   "createProjectCreation": () => (/* binding */ createProjectCreation),
/* harmony export */   "createScheduledProject": () => (/* binding */ createScheduledProject),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "getCurrentProject": () => (/* binding */ getCurrentProject),
/* harmony export */   "switchProject": () => (/* binding */ switchProject)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */






const listProjects = [];
const userProjects = [];
let currentProject = null;


function deleteTask(project, taskName) {
  const tasks = project.getTasks();
  const updatedTasks = tasks.filter((task) => task.getName() !== taskName);
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask(taskName);
  project.setTasks(updatedTasks);
}

function createTask(title, description) {
  const newTask = new _tasks__WEBPACK_IMPORTED_MODULE_2__["default"](title, description);
  return newTask;
}

function createTaskInProject(taskName, description, project) {
  const todoSection = document.querySelector('.Todo-section');

  console.log('createTaskInProject was called');
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task-name');
  taskTitle.textContent = taskName;
  taskItem.appendChild(taskTitle);

  const taskDescription = document.createElement('div');
  taskDescription.classList.add('task-description');
  taskDescription.textContent = description;

  const taskIcon = document.createElement('span');
  taskIcon.classList.add('material-symbols-outlined');
  taskIcon.classList.add('icon-button');
  taskIcon.textContent = 'check_circle';
  taskIcon.addEventListener('click', () => {
    deleteTask(project, taskName);
    taskItem.remove();
  });
  console.log('project is:', project);
  console.log('task is:', taskName);

  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addTask(project, taskName);
  taskItem.appendChild(taskDescription);
  taskItem.appendChild(taskIcon);
  todoSection.appendChild(taskItem);
}

function displayTasks(project) {
  const contentArea = document.getElementsByClassName('Todo-section')[0];
  contentArea.innerHTML = '';

  const taskList = project.getTasks();

  taskList.forEach((task) => {
    const taskName = task.getName();
    const taskDescription = task.getDescription();
    createTaskInProject(taskName, taskDescription, project);
  });
}

function switchProject(project) {
  console.log('switchProject was called in tasks.js');
  console.log(project);

  currentProject = project;
  const newTitleName = document.getElementsByClassName('list-title')[0];
  newTitleName.textContent = '';
  newTitleName.textContent = project.getName();

  displayTasks(currentProject);
}

function getCurrentProject() {
  return currentProject;
}

function createFormProject() {
  console.log('createFormProject ran')
  const addContainer = document.createElement('div')
  addContainer.classList.add('project-form-container')
  const titleContainer = document.createElement('input')
  titleContainer.setAttribute('id', 'project-title-input')
  titleContainer.setAttribute('placeholder', 'Project Title')
  titleContainer.setAttribute('type', 'text')

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('form-container')

  const submitButton = document.createElement('button')
  submitButton.classList.add('submit-new-project')
  submitButton.classList.add('form')
  submitButton.textContent = 'Add Project'
  buttonContainer.appendChild(submitButton)

  const cancelButton = document.createElement('button')
  cancelButton.classList.add('cancel-form')
  cancelButton.classList.add('form')
  cancelButton.textContent = 'Cancel'
  cancelButton.addEventListener('click', () => {
    ;(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.closeProjectFormPopup)();
  })
  buttonContainer.appendChild(cancelButton)

  addContainer.appendChild(titleContainer)
  addContainer.appendChild(buttonContainer)
  return addContainer;
}

function deleteProject(projectElement) {
  projectElement.remove();
  console.log(listProjects[0])
  // switchProject(listProjects[1]);
  setTimeout(() => {
    switchProject(listProjects[0]);
  }, 0);
}

function createScheduledProject(scheduledName, itemTitle, symbolText) {
  const div = document.createElement('button');
  div.classList.add('scheduled-item');
  div.classList.add(scheduledName);
  div.classList.add('selection-option');
  
  const iconSpan = document.createElement('span');
  iconSpan.classList.add('material-symbols-outlined');
  iconSpan.textContent = symbolText;
  const project = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](scheduledName);
  listProjects.push(project);
  div.addEventListener('click', () => {
    switchProject(project);
  });
  
  const itemText = document.createElement('p');
  itemText.textContent = itemTitle;
  
  div.appendChild(iconSpan);
  div.appendChild(itemText);

  if (scheduledName === 'current-list') {
    setTimeout(() => {
      switchProject(project);
    }, 0);
  }  
  console.log(listProjects);

  return div;
}
  
function createProjectCreation(projectName, icon, addNew) {
  const projectDiv = document.createElement('button');
  projectDiv.classList.add('project');

  const projectItem = document.createElement('p');
  projectItem.textContent = projectName;

  const projectIcon = document.createElement('span');
  projectIcon.classList.add('material-symbols-outlined');
  projectIcon.textContent = icon;

  const project = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](projectName);
  userProjects.push(project);
  projectDiv.dataset.project = JSON.stringify(project);

  projectDiv.addEventListener('click', () => {
    switchProject(project);
  });

  const doubleContainer = document.createElement('div');
  doubleContainer.classList.add('double-container');
  const deleteButton = document.createElement('span');
  deleteButton.classList.add('material-symbols-outlined');
  deleteButton.classList.add('delete-project-button');
  deleteButton.textContent = 'close';

  deleteButton.addEventListener('click', () => {
    deleteProject(projectDiv);
  })

  doubleContainer.appendChild(projectIcon);
  doubleContainer.appendChild(projectItem);
  projectDiv.appendChild(doubleContainer);
  
  if (addNew !== '') {
    projectDiv.classList.add('add-project');
    projectDiv.addEventListener('click', () => {
      (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.makeProjectFormActive)();
    })
    // const moveIcon = document.createElement('span')
    // moveIcon.classList.add('material-symbols-outlined')
    // moveIcon.classList.add('moveable')
    // moveIcon.textContent = 'dehaze'
    // projectDiv.appendChild(moveIcon)      
  } else {
    projectDiv.appendChild(deleteButton);
  }
  return projectDiv;
}

// export class Task {
//   constructor(name, description, timeline = 'No date') {
//     this.name = name;
//     this.description = description;
//     this.timeline = timeline;
//   }

//   setName(name) {
//     console.log('setName in tasks was used');
//     this.name = name;
//   }

//   setDescription(description) {
//     console.log('setDescription in tasks was used');
//     this.description = description;
//   }
// }

// export function addTaskToCurrentProject(title, description) {
//   const project = getCurrentProject();
//   if (project) {
//     const newTask = createTask(title, description);
//     currentProject.addTask(newTask);
//     displayTasks(currentProject.getTasks);
//   }
// }


/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ applyClicksButtons)
/* harmony export */ });
/* harmony import */ var _creation_segments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-segments */ "./src/creation-segments.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */



// import {
//   displayTasks,
//   createTask,
//   getCurrentProject,
// } from './tasks';
// import Task from './tasks';



class UserInterface {
  constructor() {
    this.storage = _storage__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

  loadProjects() {
    console.log('loadProjects was used in UI');
    this.storage.getTodo().getProjects().forEach((project) => {
      if (
        project.getName() !== 'Current'
        && project.getName() !== 'Today'
        && project.getName() !== 'This week'
      ) {
        this.createProject(project.getName());
      }
    });
  }

  createProject() {
    console.log('createProject ran from inside UI');
    const titleProject = document.querySelector('#project-title-input').value;
    const project = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createProjectMain)(titleProject);

    const projectName = document.querySelector('.list-container-projects');
    projectName.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createProjectCreation)(project.getName(), 'task', ''));
    this.storage.addProject(project);

    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.closeProjectFormPopup)();
  }

  // eslint-disable-next-line class-methods-use-this
  switchProject(project) {
    console.log('switchProject was called from UI');
    const projectTasks = project.getTasks();
    (0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(projectTasks);
  }

  submitNewTask() {
    const titleTask = document.querySelector('#input-title');
    const descriptionTask = document.querySelector('#input-description');
    const titleValue = titleTask.value;
    const descriptionValue = descriptionTask.value;
    const currentProject = (0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();

    if (currentProject) {
      const newTask = (0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createTask)(titleValue, descriptionValue);
      currentProject.addTask(newTask);
      (0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(currentProject);
      this.storage.addTask(currentProject.getName(), newTask);
    }

    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.closePopup)();
    titleTask.value = '';
    descriptionTask.value = '';
  }
}

function applyClicksButtons() {
  const ui = new UserInterface();

  const addTaskButton = document.querySelector('.submit-form');
  addTaskButton.addEventListener('click', () => {
    ui.submitNewTask();
  });

  const addProjectButton = document.querySelector('.submit-new-project');
  addProjectButton.addEventListener('click', () => {
    ui.createProject();
  });

  const projectButtons = document.querySelectorAll('.project');
  projectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const project = JSON.parse(button.dataset.project);
      ui.switchProject(project);
    });
  });
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectMain": () => (/* binding */ createProjectMain),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* eslint-disable no-console */
// import {
//   isToday, toDate, subDays, isThisWeek,
// } from 'date-fns';

// const { v4: uuidv4 } = require('uuid');
// import { v4 as uuidv4 } from 'uuid';

const projectList = [];

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    projectList.push(name);
  }

  setName(name) {
    console.log('setName was used inside project class');
    this.name = name;
  }

  getName() {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const projectNames = {
      'today-list': `${today} to-do list`,
      'week-list': 'This week to-do list',
      'current-list': 'Current to-do list',
    };
    const formattedName = projectNames[this.name] || this.name;
    return formattedName;
  }

  setID() {
    console.log('setID was used');
    return this.uuidv4();
  }

  // getID() {
  //   console.log('getID was used');
  //   return this.ID;
  // }

  setTasks(tasks) {
    console.log('setTasks was used');
    this.tasks = tasks;
  }

  getTasks() {
    console.log('getTasks was used');
    return this.tasks;
  }

  getTask(taskName) {
    console.log('getTask(taskName) was used');
    return this.tasks.find((task) => task.getName() === taskName);
  }

  getTaskCount() {
    return this.tasks.length;
  }

  contains(taskName) {
    console.log('contains was used');
    return this.tasks.some((task) => task.getName() === taskName);
  }

  addTask(newTask) {
    console.log('addTask was used inside projects.js');
    if (this.tasks.find((task) => task.getName() === newTask.name)) return;
    this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    console.log('deleteTask was used');
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  getDailyTasks() {
    console.log('getDailyTasks was used');
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted());
      return isToday(toDate(taskDate));
    });
  }

  // getWeeklyTasks() {
  //   console.log('getWeeklyTasks was used');
  //   return this.tasks.filter((task) => {
  //     const taskDate = new Date(task.getDateFormatted());
  //     return isThisWeek(subDays(toDate(taskDate), 1));
  //   });
  // }
}

function createProjectMain(title) {
  console.log('createProject inside projects.js was called');
  const project = new Project(title);
  return project;
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
    console.log(todoList);
    console.log('todoList.getProject()', todoList.getProject(projectName));
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

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
// import { createTodoItem } from './creation-segments';
// import { closePopup } from './utilities';


// import Storage from './storage';
// let Storage;
// import(/* webpackChunkName: "storage" */ './storage').then((module) => {
//   Storage = module.default;
// });

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

  getName() {
    return this.name;
  }

  setDescription(description) {
    console.log('setDescription in tasks was used');
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  // setTimeline(timeline) {
  //   console.log('setTimeline in tasks was used');
  //   this.timeline = timeline;
  // }

  // getDate() {
  //   console.log('getDate in tasks was used');
  //   return this.timeline;
  // }

  // getDateFormatted() {
  //   console.log('getDateFormatted in tasks was used');
  //   const day = this.timeline.split('/')[0];
  //   const month = this.timeline.split('/')[1];
  //   const year = this.timeline.split('/')[2];
  //   return `${month}/${day}/${year}`;
  // }
}

// function deleteTask(project, taskName) {
//   const tasks = project.getTasks();
//   const updatedTasks = tasks.filter((task) => task.getName() !== taskName);
//   Storage.deleteTask(taskName);
//   project.setTasks(updatedTasks);
// }

// function createTaskInProject(taskName, description, project) {
//   const todoSection = document.querySelector('.Todo-section');

//   console.log('createTaskInProject was called');
//   const taskItem = document.createElement('div');
//   taskItem.classList.add('task-item');

//   const taskTitle = document.createElement('div');
//   taskTitle.classList.add('task-name');
//   taskTitle.textContent = taskName;
//   taskItem.appendChild(taskTitle);

//   const taskDescription = document.createElement('div');
//   taskDescription.classList.add('task-description');
//   taskDescription.textContent = description;

//   const taskIcon = document.createElement('span');
//   taskIcon.classList.add('material-symbols-outlined');
//   taskIcon.classList.add('icon-button');
//   taskIcon.textContent = 'check_circle';
//   taskIcon.addEventListener('click', () => {
//     deleteTask(project, taskName);
//     taskItem.remove();
//   });

//   Storage.addTask(project, taskName);
//   taskItem.appendChild(taskDescription);
//   taskItem.appendChild(taskIcon);
//   todoSection.appendChild(taskItem);
// }

// export function createTask(title, description) {
//   const newTask = new Task(title, description);
//   return newTask;
// }

// let currentProject = null;

// export function getCurrentProject() {
//   return currentProject;
// }

// export function displayTasks(project) {
//   const contentArea = document.getElementsByClassName('Todo-section')[0];
//   contentArea.innerHTML = '';

//   const taskList = project.getTasks();

//   // Creates and adds task elements
//   taskList.forEach((task) => {
//     const taskName = task.getName();
//     const taskDescription = task.getDescription();
//     createTaskInProject(taskName, taskDescription, project);
//   });
// }

// export function switchProject(project) {
//   console.log('switchProject was called in tasks.js');
//   console.log(project);
//   const newTitleName = document.getElementsByClassName('list-title')[0];
//   newTitleName.textContent = '';
//   newTitleName.textContent = project.getName();

//   currentProject = project;
//   displayTasks(currentProject);
// }

// export function addTaskToCurrentProject(title, description) {
//   const project = getCurrentProject();
//   if (project) {
//     const newTask = createTask(title, description);
//     currentProject.addTask(newTask);
//     displayTasks(currentProject.getTasks);
//   }
// }


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
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* eslint-disable no-console */
// import(/* webpackChunkName: "task" */ './tasks').then((taskModule) => {
//   Task = taskModule.default;
// });

// import { compareAsc, toDate } from 'date-fns';



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
    return this.getProjects().find((project) => project.getName() === projectName);
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

  // updateWeekProject() {
  //   this.getProject('This week').tasks = [];

  //   this.projects.forEach((project) => {
  //     if (project.getName() === 'This week' || project.getName() === 'Today') return;

  //     const weekTasks = project.getWeeklyTasks();
  //     weekTasks.forEach((task) => {
  //       const taskName = `${task.getName()} {$(project.getName()})`;
  //       const taskDescription = `${task.getDescription()} {$(project.getDescription()})`;
  //       this.getProject('Today').addTask(new Task(taskName, taskDescription, task.getDate()));
  //     });
  //   });

  //   this.getProject('This week').setTasks(
  //     this.getProject('This week').getTasks().sort((task1, task2) => compareAsc(
  //       toDate(new Date(task1.getDateFormatted())),
  //       toDate(new Date(task2.getDateFormatted())),
  //     )),
  //   );
  // }
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
/* harmony export */   "closeProjectFormPopup": () => (/* binding */ closeProjectFormPopup),
/* harmony export */   "makeItemActive": () => (/* binding */ makeItemActive),
/* harmony export */   "makeProjectFormActive": () => (/* binding */ makeProjectFormActive)
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

function makeProjectFormActive() {
  const projectAdd = document.querySelector('.project-form-container');
  projectAdd.style.display = 'flex';
}

function closeProjectFormPopup() {
  const cancelForm = document.querySelector('.project-form-container');
  cancelForm.style.display = 'none';
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
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _creation_segments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-segments */ "./src/creation-segments.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* eslint-disable semi */
/* eslint-disable no-console */






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

function createForm() {
  const addContainer = document.createElement('div')
  addContainer.classList.add('add-container')
  const titleContainer = document.createElement('input')
  titleContainer.setAttribute('id', 'input-title')
  titleContainer.setAttribute('placeholder', 'Task Title')
  titleContainer.setAttribute('maxlength', '25')
  titleContainer.setAttribute('type', 'text')

  const descriptionContainer = document.createElement('input')
  descriptionContainer.setAttribute('id', 'input-description')
  descriptionContainer.setAttribute('placeholder', 'Task description')
  descriptionContainer.setAttribute('maxlength', '50')
  descriptionContainer.setAttribute('type', 'text')

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('form-container')

  const submitButton = document.createElement('button')
  submitButton.classList.add('submit-form')
  submitButton.classList.add('form')
  submitButton.textContent = 'Add Task'
  buttonContainer.appendChild(submitButton)

  const cancelButton = document.createElement('button')
  cancelButton.classList.add('cancel-form')
  cancelButton.classList.add('form')
  cancelButton.textContent = 'Cancel'
  cancelButton.addEventListener('click', () => {
    ;(0,_utilities__WEBPACK_IMPORTED_MODULE_2__.closePopup)();
  })
  buttonContainer.appendChild(cancelButton)

  addContainer.appendChild(titleContainer)
  addContainer.appendChild(descriptionContainer)
  addContainer.appendChild(buttonContainer)
  return addContainer;
}

function createSidebar() {
  const sidebarSection = document.createElement('div')
  sidebarSection.classList.add('sidebar')
  const scheduledContainer = document.createElement('div')
  scheduledContainer.classList.add('scheduled-container')
  sidebarSection.appendChild(scheduledContainer)

  scheduledContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createScheduledProject)('current-list', 'Current', 'event_upcoming'));
  scheduledContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createScheduledProject)('today-list', 'Today', 'today'));
  scheduledContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createScheduledProject)('week-list', 'This week', 'date_range'));

  const projectContainer = document.createElement('div')
  projectContainer.classList.add('project-container')
  sidebarSection.appendChild(projectContainer)

  const projectHeading = document.createElement('p')
  projectHeading.classList.add('project-heading')
  projectHeading.textContent = 'Projects'
  projectContainer.appendChild(projectHeading)

  const listContainer = document.createElement('div')
  listContainer.classList.add('list-container-projects')
  projectContainer.appendChild(listContainer)

  const addProject = document.createElement('div')
  addProject.classList.add('add-project')

  listContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createProjectCreation)('Mow the lawn', 'task', ''))
  listContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createProjectCreation)('Go to store', 'task', ''))
  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createProjectCreation)('Add Project', 'add', 'yes'))
  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createFormProject)())

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
  listTitle.textContent = 'Current to-do list'
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
    ;(0,_utilities__WEBPACK_IMPORTED_MODULE_2__.makeItemActive)();
  })
  listContainer.appendChild(addTaskButton)
  listContainer.appendChild(createForm());

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
  (0,_interface__WEBPACK_IMPORTED_MODULE_3__["default"])();
  // switchProject('current-list')
}

window.addEventListener('DOMContentLoaded', () => {
  startup();
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
/* eslint-disable no-plusplus */
// import { createTodoItem } from './creation-segments';
// import { closePopup } from './utilities';

import Project from './projects';

/* eslint-disable no-console */
export default class Task {
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

  setTimeline(timeline) {
    console.log('setTimeline in tasks was used');
    this.timeline = timeline;
  }

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

function createTaskInProject(taskName, description) {
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

  taskItem.appendChild(taskDescription);
  taskItem.appendChild(taskIcon);
  todoSection.appendChild(taskItem);
}

export function createTask(title, description) {
  const newTask = new Task(title, description);
  return newTask;
}

function createTaskElement(task) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task-name');
  taskTitle.textContent = task.name;
  taskItem.appendChild(taskTitle);

  const taskDescription = document.createElement('div');
  taskDescription.classList.add('task-description');

  const taskLineItem = task;

  taskDescription.textContent = taskLineItem.description;
  taskItem.appendChild(taskDescription);
  console.log(`createTaskElement: ${taskItem}`);

  return taskItem;
}

let currentProject = null;

export function getCurrentProject() {
  return currentProject;
}

export function displayTasks(project) {
  const contentArea = document.getElementsByClassName('Todo-section')[0];
  contentArea.innerHTML = '';

  const taskList = project.getTasks();

  // Creates and adds task elements
  taskList.forEach((task) => {
    const taskName = task.getName();
    const taskDescription = task.getDescription();
    createTaskInProject(taskName, taskDescription);
  });
}

export function switchProject(project) {
  console.log('switchProject was called in tasks.js');
  console.log(project);
  const newTitleName = document.getElementsByClassName('list-title')[0];
  newTitleName.textContent = '';
  newTitleName.textContent = project.getName();

  currentProject = project;
  displayTasks(currentProject);
}

export function addTaskToCurrentProject(title, description) {
  const project = getCurrentProject();
  if (project) {
    const newTask = createTask(title, description);
    currentProject.addTask(newTask);
    displayTasks(currentProject.getTasks);
  }
}

export function createTodoItem(taskName, description) {
  const todoSection = document.querySelector('.Todo-section');

  console.log('createTodoItem in tasks.js was called');
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');

  const task = new Task(taskName, description);
  console.log(task);

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

  taskItem.appendChild(taskDescription);
  taskItem.appendChild(taskIcon);
  todoSection.appendChild(taskItem);
}

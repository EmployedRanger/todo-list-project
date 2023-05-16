// import { createTodoItem } from './creation-segments';
// import { closePopup } from './utilities';

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

  setDescription(description) {
    console.log('setDescription in tasks was used');
    this.description = description;
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
  taskDescription.textContent = task.description;
  taskItem.appendChild(taskDescription);

  return taskItem;
}

let currentProject = null;

export function getCurrentProject() {
  return currentProject;
}

export function displayTasks(taskList) {
  console.log('displayTasks was called in tasks.js');
  const contentArea = document.getElementsByClassName('Todo-section');

  // Removes list of tasks from previously selected projects
  while (contentArea.firstChild) {
    contentArea.removeChild(contentArea.firstChild);
  }

  // Creates and adds task elements
  taskList.forEach((task) => {
    const taskElement = createTaskElement(task);
    contentArea.appendChild(taskElement);
  });
}

export function switchProject(project) {
  console.log('switchProject was called');
  currentProject = project;
  const projectTasks = project.getTasks();
  console.log(`projectTasks = ${projectTasks}`);
  displayTasks(projectTasks);
}

export function addTaskToCurrentProject(title, description) {
  const project = getCurrentProject();
  if (project) {
    const newTask = createTask(title, description);
    currentProject.addTask(newTask);
    displayTasks(currentProject.getTasks);
  }
}

// export function submitNewTask() {
//   const titleTask = document.querySelector('#input-title').value;
//   const descriptionTask = document.querySelector('#input-description').value;

//   const project = getCurrentProject();
//   if (project) {
//     const newTask = createTask(titleTask, descriptionTask);
//     currentProject.addTask(newTask);
//     displayTasks(currentProject.getTasks());
//   }

//   createTodoItem(titleTask, descriptionTask);
//   console.log(titleTask);
//   console.log(descriptionTask);
//   closePopup();
// }

/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */

import { closeProjectFormPopup, makeProjectFormActive } from './utilities';
import Project from './projects';
import Task from './tasks';
import Storage from './storage';

const listProjects = [];
const userProjects = [];
let currentProject = null;


function deleteTask(project, taskName) {
  const tasks = project.getTasks();
  const updatedTasks = tasks.filter((task) => task.getName() !== taskName);
  Storage.deleteTask(taskName);
  project.setTasks(updatedTasks);
}

export function createTask(title, description) {
  const newTask = new Task(title, description);
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

  Storage.addTask(project, taskName);
  taskItem.appendChild(taskDescription);
  taskItem.appendChild(taskIcon);
  todoSection.appendChild(taskItem);
}

export function displayTasks(project) {
  const contentArea = document.getElementsByClassName('Todo-section')[0];
  contentArea.innerHTML = '';

  const taskList = project.getTasks();

  taskList.forEach((task) => {
    const taskName = task.getName();
    const taskDescription = task.getDescription();
    createTaskInProject(taskName, taskDescription, project);
  });
}

export function switchProject(project) {
  console.log('switchProject was called in tasks.js');
  console.log(project);

  currentProject = project;
  const newTitleName = document.getElementsByClassName('list-title')[0];
  newTitleName.textContent = '';
  newTitleName.textContent = project.getName();

  displayTasks(currentProject);
}

export function getCurrentProject() {
  return currentProject;
}

export function createFormProject() {
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
    closeProjectFormPopup();
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

export function createScheduledProject(scheduledName, itemTitle, symbolText) {
  const div = document.createElement('button');
  div.classList.add('scheduled-item');
  div.classList.add(scheduledName);
  div.classList.add('selection-option');
  
  const iconSpan = document.createElement('span');
  iconSpan.classList.add('material-symbols-outlined');
  iconSpan.textContent = symbolText;
  const project = new Project(scheduledName);
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
  
export function createProjectCreation(projectName, icon, addNew) {
  const projectDiv = document.createElement('button');
  projectDiv.classList.add('project');

  const projectItem = document.createElement('p');
  projectItem.textContent = projectName;

  const projectIcon = document.createElement('span');
  projectIcon.classList.add('material-symbols-outlined');
  projectIcon.textContent = icon;

  const project = new Project(projectName);
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
      makeProjectFormActive();
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

/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */

import { closeProjectFormPopup, makeProjectFormActive } from './utilities';
import Project from './projects';
import { switchProject } from './tasks';

export class Task {
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
  // submitButton.addEventListener('click', () => {
  //   submitNewProject();
  // })
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

export function createTodoItem(taskName, description) {
  const todoSection = document.querySelector('.Todo-section')

  console.log('createTodoItem in creation segments was called');
  const taskItem = document.createElement('div')
  taskItem.classList.add('task-item')

  const task = new Task(taskName, description);
  console.log(task);

  const taskTitle = document.createElement('div')
  taskTitle.classList.add('task-name')
  taskTitle.textContent = taskName
  taskItem.appendChild(taskTitle)

  const taskDescription = document.createElement('div')
  taskDescription.classList.add('task-description')
  taskDescription.textContent = description
  
  const taskIcon = document.createElement('span')
  taskIcon.classList.add('material-symbols-outlined')
  taskIcon.classList.add('icon-button')
  taskIcon.textContent = 'check_circle'

  taskItem.appendChild(taskDescription)
  taskItem.appendChild(taskIcon)
  todoSection.appendChild(taskItem)
}

// function updateProjectList() {
  
// }

// function updateTasks() {

// }

export function createScheduledProject(scheduledName, itemTitle, symbolText) {
  const div = document.createElement('button');
  div.classList.add('scheduled-item');
  div.classList.add(scheduledName);
  div.classList.add('selection-option');
  
  const iconSpan = document.createElement('span');
  iconSpan.classList.add('material-symbols-outlined');
  iconSpan.textContent = symbolText;
  const project = new Project(scheduledName);
  div.addEventListener('click', () => {
    switchProject(scheduledName);
  });
  console.log(project);
  
  const itemText = document.createElement('p');
  itemText.textContent = itemTitle;
  
  div.appendChild(iconSpan);
  div.appendChild(itemText);
  
  return div;
}
  
export function createProjectCreation(projectName, icon, addNew) {
  // const projectTasks = [];
  const projectDiv = document.createElement('button');
  projectDiv.classList.add('project');

  const projectItem = document.createElement('p');
  projectItem.textContent = projectName;

  const projectIcon = document.createElement('span')
  projectIcon.classList.add('material-symbols-outlined')
  projectIcon.textContent = icon

  const project = new Project(projectName);
  console.log(project);

  projectDiv.appendChild(projectIcon)
  projectDiv.appendChild(projectItem)
  
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
  }

  return projectDiv;
}



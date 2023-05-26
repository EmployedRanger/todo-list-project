/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */

import { closeProjectFormPopup, makeProjectFormActive } from './utilities';
import Project from './projects';
import { switchProject } from './tasks';

const listProjects = [];
const userProjects = [];

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

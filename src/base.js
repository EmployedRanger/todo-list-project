/* eslint-disable semi */
/* eslint-disable no-console */
// import createParagraph from './creation-segments'
// import { sub } from 'date-fns';

import './css/style.scss'
import {
  createScheduledProject,
  createProjectCreation,
  createFormProject,
} from './creation-segments';
import { makeItemActive, closePopup } from './utilities';
import { applyClicksButtons } from './interface';
// import Project from './projects';

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

export function createForm() {
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
    closePopup();
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

  scheduledContainer.appendChild(createScheduledProject('current-list', 'Current', 'event_upcoming'));
  scheduledContainer.appendChild(createScheduledProject('today-list', 'Today', 'today'));
  scheduledContainer.appendChild(createScheduledProject('week-list', 'This week', 'date_range'));

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

  listContainer.appendChild(createProjectCreation('Mow the lawn', 'task', ''))
  listContainer.appendChild(createProjectCreation('Count chips', 'task', ''))
  projectContainer.appendChild(createProjectCreation('Add Project', 'add', 'yes'))
  projectContainer.appendChild(createFormProject())

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
    makeItemActive();
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

export default function startup() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  createMainSection();
  content.appendChild(createFooter());
  applyClicksButtons();
}

window.addEventListener('load', () => {
  console.log('here')
  startup();
});

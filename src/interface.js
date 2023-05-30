/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import {
  createProjectCreation,
  displayTasks,
  createTask,
  getCurrentProject,
} from './creation-segments';
import { closePopup, closeProjectFormPopup } from './utilities';
// import {
//   displayTasks,
//   createTask,
//   getCurrentProject,
// } from './tasks';
// import Task from './tasks';
import { createProjectMain } from './projects';
import Storage from './storage';

class UserInterface {
  constructor() {
    this.storage = new Storage();
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
    const project = createProjectMain(titleProject);

    const projectName = document.querySelector('.list-container-projects');
    projectName.appendChild(createProjectCreation(project.getName(), 'task', ''));
    this.storage.addProject(project);

    closeProjectFormPopup();
  }

  switchProject(project) {
    console.log('switchProject was called from UI');
    const projectTasks = project.getTasks();
    displayTasks(projectTasks);
  }

  submitNewTask() {
    const titleTask = document.querySelector('#input-title');
    const descriptionTask = document.querySelector('#input-description');
    const titleValue = titleTask.value;
    const descriptionValue = descriptionTask.value;
    const currentProject = getCurrentProject();

    if (currentProject) {
      const newTask = createTask(titleValue, descriptionValue);
      currentProject.addTask(newTask);
      displayTasks(currentProject);
      this.storage.addTask(currentProject.getName(), newTask);
    }

    closePopup();
    titleTask.value = '';
    descriptionTask.value = '';
  }
}

export default function applyClicksButtons() {
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

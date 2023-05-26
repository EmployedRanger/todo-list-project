/* eslint-disable no-console */
// import { format } from 'date-fns';
import { createProjectCreation } from './creation-segments';
import { closePopup, closeProjectFormPopup } from './utilities';
import {
  displayTasks, createTask, getCurrentProject,
} from './tasks';
import { createProjectMain } from './projects';

export default class UserInterface {
  static loadProjects() {
    console.log('loadProjects was used in UI');
    Storage.getTodoList().getProjects().forEach((project) => {
      if (
        project.name !== 'Current'
        && project.name !== 'Today'
        && project.name !== 'This week'
      ) {
        this.createProject(project.name);
      }
    });
  }

  static createProject() {
    console.log('createProject ran from inside UI');
    const titleProject = document.querySelector('#project-title-input').value;
    const project = createProjectMain(titleProject);

    const projectName = document.querySelector('.list-container-projects');
    projectName.appendChild(createProjectCreation(project.name, 'task', ''));

    closeProjectFormPopup();
  }

  static switchProject(project) {
    console.log('switchProject was called from UI');
    const projectTasks = project.getTasks();
    displayTasks(projectTasks);
  }

  static submitNewTask() {
    const titleTask = document.querySelector('#input-title');
    const descriptionTask = document.querySelector('#input-description');

    const titleValue = titleTask.value;
    const descriptionValue = descriptionTask.value;

    const currentProject = getCurrentProject();
    if (currentProject) {
      const newTask = createTask(titleValue, descriptionValue);
      currentProject.addTask(newTask);
      displayTasks(currentProject);
    }

    closePopup();
    titleTask.value = '';
    descriptionTask.value = '';
  }
}

export function applyClicksButtons() {
  const addTaskButton = document.querySelector('.submit-form');
  addTaskButton.addEventListener('click', () => {
    UserInterface.submitNewTask();
  });

  const addProjectButton = document.querySelector('.submit-new-project');
  addProjectButton.addEventListener('click', () => {
    UserInterface.createProject();
  });
}

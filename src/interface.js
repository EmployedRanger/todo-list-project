/* eslint-disable no-console */
// import { format } from 'date-fns';
import { createProjectCreation } from './creation-segments';
import { closePopup, closeProjectFormPopup } from './utilities';
import {
  displayTasks, createTask, getCurrentProject, createTodoItem,
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
    // ... createProject implementation ...
    const titleProject = document.querySelector('#project-title-input').value;
    // console.log('titleProject = ', titleProject);
    const project = createProjectMain(titleProject);
    // console.log(project);

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
    const titleTask = document.querySelector('#input-title').value;
    const descriptionTask = document.querySelector('#input-description').value;

    const currentProject = getCurrentProject();
    if (currentProject) {
      const newTask = createTask(titleTask, descriptionTask);
      currentProject.addTask(newTask);
      displayTasks(currentProject);
    }
    closePopup();
  }
}

export function applyClicksButtons() {
  console.log('applyClicksButtons ran from UI');
  const addTaskButton = document.querySelector('.submit-form');
  addTaskButton.addEventListener('click', () => {
    UserInterface.submitNewTask();
  });

  const addProjectButton = document.querySelector('.submit-new-project');
  addProjectButton.addEventListener('click', () => {
    UserInterface.createProject();
  });
}

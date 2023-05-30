/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */

import 

// interface.js
class UserInterface {
  // constructor() {
  //   this.storage = new Storage();
  // }

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

class TodoList {
  constructor() {
    console.log('Constructor in TodoList ran');
    this.projects = [];
    this.projects.push(new Project('Current'));
    this.projects.push(new Project('Today'));
    this.projects.push(new Project('This week'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.getProjects.find((project) => project.getName() === projectName);
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

        this.getProject('Today').addTask(new Task(taskName, taskDescription, task.getDate()));
      });
    });
  }

  updateWeekProject() {
    this.getProject('This week').tasks = [];

    this.projects.forEach((project) => {
      if (project.getName() === 'This week' || project.getName() === 'Today') return;

      const weekTasks = project.getWeeklyTasks();
      weekTasks.forEach((task) => {
        const taskName = `${task.getName()} {$(project.getName()})`;
        const taskDescription = `${task.getDescription()} {$(project.getDescription()})`;
        this.getProject('Today').addTask(new Task(taskName, taskDescription, task.getDate()));
      });
    });

    this.getProject('This week').setTasks(
      this.getProject('This week').getTasks().sort((task1, task2) => compareAsc(
        toDate(new Date(task1.getDateFormatted())),
        toDate(new Date(task2.getDateFormatted())),
      )),
    );
  }
}

/* eslint-disable no-console */
// import(/* webpackChunkName: "task" */ './tasks').then((taskModule) => {
//   Task = taskModule.default;
// });

import { compareAsc, toDate } from 'date-fns';
import Project from './projects';
import Task from './tasks';

export default class TodoList {
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
    return this.getProjects().find((project) => project.getName() === projectName);
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

/* eslint-disable no-console */
import {
  isToday, toDate, subDays, isThisWeek,
} from 'date-fns';

// const { v4: uuidv4 } = require('uuid');
import { v4 as uuidv4 } from 'uuid';

const projectList = [];

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    projectList.push(name);
  }

  setName(name) {
    console.log('setName was used inside project class');
    this.name = name;
  }

  getName() {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const projectNames = {
      'today-list': `${today} to-do list`,
      'week-list': 'This week to-do list',
      'current-list': 'Current to-do list',
    };
    const formattedName = projectNames[this.name] || this.name;
    return formattedName;
  }

  setID() {
    console.log('setID was used');
    return this.uuidv4();
  }

  // getID() {
  //   console.log('getID was used');
  //   return this.ID;
  // }

  setTasks(tasks) {
    console.log('setTasks was used');
    this.tasks = tasks;
  }

  getTasks() {
    console.log('getTasks was used');
    return this.tasks;
  }

  getTask(taskName) {
    console.log('getTask(taskName) was used');
    return this.tasks.find((task) => task.getName() === taskName);
  }

  getTaskCount() {
    return this.tasks.length;
  }

  contains(taskName) {
    console.log('contains was used');
    return this.tasks.some((task) => task.getName() === taskName);
  }

  addTask(newTask) {
    console.log('addTask was used inside projects.js');
    if (this.tasks.find((task) => task.getName() === newTask.name)) return;
    this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    console.log('deleteTask was used');
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  getDailyTasks() {
    console.log('getDailyTasks was used');
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted());
      return isToday(toDate(taskDate));
    });
  }

  getWeeklyTasks() {
    console.log('getWeeklyTasks was used');
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted());
      return isThisWeek(subDays(toDate(taskDate), 1));
    });
  }
}

export function createProjectMain(title) {
  console.log('createProject inside projects.js was called');
  const project = new Project(title);
  return project;
}

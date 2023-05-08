/* eslint-disable no-console */
import {
  isToday, toDate, subDays, isThisWeek,
} from 'date-fns';

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    console.log('setName was used');
    this.name = name;
  }

  getName() {
    console.log('getName was used');
    return this.name;
  }

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

  contains(taskName) {
    console.log('contains was used');
    return this.tasks.some((task) => task.getName() === taskName);
  }

  addTask(newTask) {
    console.log('addTask was used');
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
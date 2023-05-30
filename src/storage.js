/* eslint-disable no-console */
import TodoList from './todo-list';
import Project from './projects';
import Task from './tasks';

const Storage = {
  saveList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  },

  getTodo() {
    const todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem('todoList')),
    );

    todoList.setProjects(
      todoList.getProjects().map((project) => Object.assign(new Project(), project)),
    );

    todoList.getProjects().forEach((project) => {
      project.setTasks(
        project.getTasks().map((task) => Object.assign(new Task(), task)),
      );
    });

    return todoList;
  },

  addProject(project) {
    const todoList = Storage.getTodo();
    todoList.addProject(project);
    Storage.saveList(todoList);
  },

  deleteProject(projectName) {
    const todoList = Storage.getTodo();
    todoList.deleteProject(projectName);
    Storage.saveList(todoList);
  },

  addTask(projectName, task) {
    const todoList = Storage.getTodo();
    todoList.getProject(projectName).addTask(task);
    Storage.saveList(todoList);
  },

  deleteTask(projectName, taskName) {
    const todoList = Storage.getTodo();
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveList(todoList);
  },

  renameTask(projectName, taskName, newTaskName) {
    const todoList = Storage.getTodo();
    todoList
      .getProject(projectName)
      .getTask(taskName)
      .setName(newTaskName);
    Storage.saveList(todoList);
  },

  updateTodayProject() {
    console.log('updateTodayProject in Storage ran');
    const todoList = Storage.getTodo();
    todoList.updateTodayProject();
    Storage.saveList(todoList);
  },

  updateWeekProject() {
    console.log('updateWeekProject in Storage ran');
    const todoList = Storage.getTodo();
    todoList.updateWeekProject();
    Storage.saveList(todoList);
  },
};

const storage = Object.create(Storage);

export default storage;

/* eslint-disable no-console */
import TodoList from './todo-list';
import Project from './projects';
import Task from './tasks';

export default class Storage {
  static saveList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static getTodo() {
    const todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem('todoList')),
    );

    todoList.setProjects(todoList.getProjects()
      .map((project) => Object.assign(new Project(), project)));

    todoList.getProjects()
      .forEach((project) => project.setTasks(
        project.getTasks().map((task) => Object.assign(new Task(), task)),
      ));
    return todoList;
  }

  static addProject(project) {
    const todoList = Storage.getTodo();
    todoList.addProject(project);
    Storage.saveList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = Storage.getTodo();
    todoList.deleteProject(projectName);
    Storage.saveList(todoList);
  }

  static addTask(projectName, task) {
    const todoList = Storage.getTodo();
    todoList.getProject(projectName).addTask(task);
    Storage.saveList(todoList);
  }

  static deletedTask(projectName, taskName) {
    const todoList = Storage.getTodo();
    todoList.getProject(projectName).deletedTask(taskName);
    Storage.saveList(todoList);
  }

  static renameTask(projectName, taskName, newTaskName) {
    const todoList = Storage.getTodo();
    todoList.getProject(projectName).getTasks(taskName).setName(newTaskName);
    Storage.saveList(todoList);
  }

  static updateTodayProject() {
    console.log('updateTodayProject in Storage ran');
    const todoList = Storage.getTodoList();
    todoList.updateTodayProject();
    Storage.saveTodoList(todoList);
  }

  static updateWeekProject() {
    console.log('updateWeekProject in Storage ran');
    const todoList = Storage.getTodoList();
    todoList.updateWeekProject();
    Storage.saveTodoList(todoList);
  }
}

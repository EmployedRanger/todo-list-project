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
      project.getTasks().map((task) => Object.assign(new Task(), task))
      ),
    );
    return todoList;
  }
}

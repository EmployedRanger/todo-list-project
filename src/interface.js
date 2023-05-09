/* eslint-disable no-console */
// import { format } from 'date-fns';
import Project from './projects';
import Task from './tasks';
import startup from './base';

export default class UserInterface {
  // startup()

  static loadProjects() {
    Storage.getTodoList().getProjects().forEach((project) => {
      if (
        project.name !== 'Current'
            && project.name !== 'Today'
            && project.name !== 'This week'
      ) {
        UserInterface.createProject(project.name);
      }
    });
  }
  
}

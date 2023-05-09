/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
export default function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.classList.add('paragraph');
  paragraph.textContent = text;
  return paragraph;
}

export function createTodoItem(taskName, description) {
  const todoSection = document.querySelector('.Todo-section')

  console.log('createTodoItem was called');
  const taskItem = document.createElement('div')
  taskItem.classList.add('task-item')

  const taskTitle = document.createElement('div')
  taskTitle.classList.add('task-name')
  taskTitle.textContent = taskName
  taskItem.appendChild(taskTitle)

  const taskDescription = document.createElement('div')
  taskDescription.classList.add('task-description')
  taskDescription.textContent = description
  taskItem.appendChild(taskDescription)
  todoSection.appendChild(taskItem)
}

export class TodoTask {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

function updateProjectList() {
  
}

function updateTasks() {

}

export function createScheduledTask(scheduledName, itemTitle, symbolText) {
  const div = document.createElement('button');
  div.classList.add('scheduled-item');
  div.classList.add(scheduledName);
  div.classList.add('selection-option');
  
  const iconSpan = document.createElement('span');
  iconSpan.classList.add('material-symbols-outlined');
  iconSpan.textContent = symbolText;
  
  const itemText = document.createElement('p');
  itemText.textContent = itemTitle;
  
  div.appendChild(iconSpan);
  div.appendChild(itemText);
  
  return div;
}
  
export function createProject(projectName, icon, addProject) {
  let projectName = [];
  const projectDiv = document.createElement('button');
  projectDiv.classList.add('project');

  const projectItem = document.createElement('p');
  projectItem.textContent = projectName;

  const projectIcon = document.createElement('span')
  projectIcon.classList.add('material-symbols-outlined')
  projectIcon.textContent = icon

  projectDiv.appendChild(projectIcon)
  projectDiv.appendChild(projectItem)
  
  // if (addProject === '') {
  //   projectDiv.classList.add('add-project');
  //   const moveIcon = document.createElement('span')
  //   moveIcon.classList.add('material-symbols-outlined')
  //   moveIcon.classList.add('moveable')
  //   moveIcon.textContent = 'dehaze'
  //   projectDiv.appendChild(moveIcon)      
  // }
  return projectDiv;
}

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
  const taskItem = document.createElement('div')
  taskItem.classList('task-item')

  const taskTitle = document.createElement('div')
  taskTitle.classList.add('task-name')
  taskTitle.textContent = taskName
  taskItem.appendChild(taskTitle)

  const taskDescription = document.createElement('div')
  taskDescription.classList.add('task-description')
  taskDescription.textContent = description
  taskItem.appendChild(taskDescription)
}

export function createScheduledTask(scheduledName, itemTitle, symbolText) {
  const div = document.createElement('div');
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
  
export function createProject(projectName, description) {
  const projectDiv = document.createElement('div')
  projectDiv.classList.add('project')

  const projectItem = document.createElement('p')
  projectItem.textContent = projectName
  
  const projectIcon = document.createElement('span')
  projectIcon.classList.add('material-symbols-outlined')
  projectIcon.textContent = 'task'
  projectDiv.appendChild(projectIcon)
  projectDiv.appendChild(projectItem)

  const projectDes = document.createElement('p')
  projectDes.classList.add('project-description')
  projectDes.textContent = description
  //  projectDiv.appendChild(projectDes)

  return projectDiv;
}

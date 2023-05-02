/* eslint-disable no-console */
export function makeItemActive() {
//   console.log('makeItemActive ran');
  const item = document.querySelector('.add-container');
  //  console.log(item);
  item.style.display = 'flex';
}

export function closePopup() {
  const cancelForm = document.querySelector('.add-container');
  //  console.log(closePopup);
  //  cancelForm.classlist.remove('active');
  cancelForm.style.display = 'none';
}

export function submitNewTask() {
  const titleTask = document.querySelector('#input-title').value;
  const descriptionTask = document.querySelector('#input-description').value;

  console.log(titleTask);
  console.log(descriptionTask);
}

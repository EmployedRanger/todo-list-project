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

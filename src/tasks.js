/* eslint-disable no-console */
export default class Task {
  constructor(name, description, timeline = 'No date') {
    this.name = name;
    this.description = description;
    this.timeline = timeline;
  }

  setName(name) {
    console.log('setName in tasks was used');
    this.name = name;
  }

  setDescription(description) {
    console.log('setDescription in tasks was used');
    this.description = description;
  }

  setTimeline(timeline) {
    console.log('setTimeline in tasks was used');
    this.timeline = timeline;
  }

  getDate() {
    console.log('getDate in tasks was used');
    return this.timeline;
  }

  getDateFormatted() {
    console.log('getDateFormatted in tasks was used');
    const day = this.timeline.split('/')[0];
    const month = this.timeline.split('/')[1];
    const year = this.timeline.split('/')[2];
    return `${month}/${day}/${year}`;
  }
}

export function submitNewTask() {
  const titleTask = document.querySelector('#input-title').value;
  const descriptionTask = document.querySelector('#input-description').value;

  console.log(titleTask);
  console.log(descriptionTask);
}

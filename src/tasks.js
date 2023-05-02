export default class {
  constructor(name, description, timeline = 'No date') {
    this.name = name;
    this.description = description;
    this.timeline = timeline;
  }

  setName(name) {
    this.name = name;
  }

  setDescription(description) {
    this.description = description;
  }

  setTimeline(timeline) {
    this.timeline = timeline;
  }

  getDate() {
    return this.timeline;
  }

  getDateFormatted() {
    const day = this.timeline.split('/')[0];
    const month = this.timeline.split('/')[1];
    const year = this.timeline.split('/')[2];
    return `${month}/${day}/${year}`;
  }
}

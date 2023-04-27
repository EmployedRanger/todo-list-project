/* eslint-disable semi */
/* eslint-disable no-console */
// import createParagraph from './creation-segments'
import { createScheduledTask, createProject } from './creation-segments';

function createHeader() {
  console.log('base.js ran')
  const pageBody = document.querySelector('#content')

  const headerDiv = document.createElement('div')
  headerDiv.classList.add('header')
  pageBody.appendChild(headerDiv)

  const iconSpan = document.createElement('span');
  iconSpan.classList.add('material-symbols-outlined');
  iconSpan.classList.add('make-bigger')
  iconSpan.textContent = 'checklist'
  headerDiv.appendChild(iconSpan)

  const headerTitle = document.createElement('div')
  headerTitle.classList.add('page-title')
  headerTitle.innerHTML = 'Todo List'
  headerDiv.appendChild(headerTitle)

  return headerDiv;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyrightThing = document.createElement('p')
  copyrightThing.textContent = `Copyright © ${new Date().getFullYear()} Employed Ranger`;

  footer.appendChild(copyrightThing);
  return footer;
}

function createSidebar() {
  const sidebarSection = document.createElement('div')
  sidebarSection.classList.add('sidebar')
  const scheduledContainer = document.createElement('div')
  scheduledContainer.classList.add('scheduled-container')
  sidebarSection.appendChild(scheduledContainer)

  scheduledContainer.appendChild(createScheduledTask('current-list', 'Current', 'event_upcoming'));
  scheduledContainer.appendChild(createScheduledTask('today-list', 'Today', 'today'));
  scheduledContainer.appendChild(createScheduledTask('week-list', 'This week', 'date_range'));

  const projectContainer = document.createElement('div')
  projectContainer.classList.add('project-container')
  sidebarSection.appendChild(projectContainer)

  const projectHeading = document.createElement('p')
  projectHeading.classList.add('project-heading')
  projectHeading.textContent = 'Projects'
  projectContainer.appendChild(projectHeading)

  projectContainer.appendChild(createProject('Mow the lawn', 'Get out there'))
  projectContainer.appendChild(createProject('Count chips', 'If you know, you know'))

  return sidebarSection;
}

export default function startup() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  content.appendChild(createSidebar());
  content.appendChild(createFooter());
  console.log('web after appends')

//   loadHome();
}

/* eslint-disable semi */
/* eslint-disable no-console */
// import createParagraph from './creation-segments'
import { createScheduledTask } from './creation-segments';

function createHeader() {
  console.log('base.js ran')
  const pageBody = document.querySelector('#content')

  const headerDiv = document.createElement('div')
  headerDiv.classList.add('header')
  pageBody.appendChild(headerDiv)

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

  sidebarSection.appendChild(createScheduledTask('current-list', 'Current', 'event_upcoming'));
  sidebarSection.appendChild(createScheduledTask('today-list', 'Today', 'today'));
  sidebarSection.appendChild(createScheduledTask('week-list', 'This week', 'date_range'));

  //   sidebarSection.innerHTML = `
  //     <div id="mySidebar" class="sidebar">
  //       <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
  //       <div class="menu-options">
  //         <hr class="rounded">
  //         <h2>Scheduled</h2>
  //         <hr class="rounded">

  //         <hr class="rounded">
  //         <h2>Projects</h2>
  //         <hr class="rounded">
  //         <div class="menu-item">
  //             <div class="item">Books: </div>
  //             <div id="counter-quantity">0</div>
  //         </div>
  //         <div class="menu-item">
  //             <div class="item">Books Finished: </div>
  //             <div id="counter-finished">0</div>
  //         </div>
  //         <div class="menu-item">
  //             <div class="item">Library finished: </div>
  //             <div id="counter-completed">0</div>
  //         </div>
  //         <hr class="rounded outside">
  //       </div>
  //     </div>`
  //   return
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

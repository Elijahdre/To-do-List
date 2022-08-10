// import _ from "lodash";
import './style.css';
import Tasks from './task.js';
import MenuIcon from './icons/menu-vertical.png';

// function component() {
//   const element = document.createElement("div");

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   element.classList.add("hello");
//   // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());

const clear = document.querySelector('.delete-task');

Tasks.forEach((task) => {
  const taskLIST = `<li class="task-list" id="${task.index}">
      <span><button class="checkbox" alt="checkbox" name="checkbox" id="checkbox"></button></span>
      <span class="task-name">${task.description}</span>
      <span><img src="${MenuIcon}" alt="Vertical Menu Icon"/></span>
   </li>`;
  delete-task.insertAdjacentHTML('beforebegin', taskLIST);
});



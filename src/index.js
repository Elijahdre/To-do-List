import './style.css';
import Tasks from './task.js';
import MenuIcon from './icons/menu-vertical.png';

const clear = document.querySelector('.clear');

Tasks.forEach((task) => {
  const taskLIST = `<li class="task-list" id="${task.index}">
      <span><button class="checkbox" alt="checkbox" name="checkbox" id="checkbox"></button></span>
      <span class="task-name">${task.description}</span>
      <span><img src="${MenuIcon}" alt="Vertical Menu Icon"/></span>
   </li>`;
  clear.insertAdjacentHTML('beforebegin', taskLIST);
});

import Tasks from './task.js';

const taskUpdate = (e) => {
  const id = parseInt(e.target.id.split('-')[1], 10);
  Tasks.taskList = Tasks.fetch();
  Tasks.taskList[id - 1].completed = !Tasks.taskList[id - 1].completed;
  Tasks.updateStorage(Tasks.taskList);
};

export default taskUpdate;

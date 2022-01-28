import TodoCollection from './modules/todoCollection';
import Item from './modules/item';
import './style.css';

const tasksCol = new TodoCollection()
const input = document.querySelector('.task-input');

if(localStorage.getItem('tasksList')){
  const storageItems = JSON.parse(localStorage.getItem('tasksList')).tasksList
  storageItems.forEach(task => {

    tasksCol.create(new Item(task.index, task.description, task.completed))
    
  })
}

window.addEventListener('keydown', (e) => {
  if(e.keyCode === 13 && input.value !== ''){
    tasksCol.create(new Item(tasksCol.list.length, input.value, false))
    input.value = ''
  }
})

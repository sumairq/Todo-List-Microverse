import './style.css';

const todoItems = [

  {
    description: "Walk the Dog",
    completed: "false",
    index: 0
  },
  {
    description: "Iron the shirt",
    completed: "false",
    index: 1
  },
  {
    description: "Attend meeting",
    completed: "false",
    index: 2
  }
]

const todoList = document.querySelector(".todo-list")

const renderTodoList = (items) => {

  for(let i = 0; i < todoItems.length; i += 1 ) {
      let todoItem = document.createElement('div');
      todoItem.classList.add("flex-item")
      todoItem.innerHTML = `<div class="flex-container">
      <div class="input">
      <input type="checkbox" name="${items[i].description}" id="${items[i].description}">
      <label for="${items[i].description}">${items[i].description}</label>
      </div>
      <i class="fas fa-ellipsis-v"></i>
      </div>`;
      todoList.appendChild(todoItem)
      console.log(items[i])
    }
  }

document.addEventListener('DOMContentLoaded', renderTodoList(todoItems))

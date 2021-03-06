export default class TodoCollection {
  constructor(list = []) {
    this.list = list;
  }

  create(data) {
    this.list.push(data);
    // this.setStorage();
    localStorage.setItem(
      'tasksList',
      JSON.stringify({
        tasksList: this.list,
      }),
    );
    return data;
  }

  display = (data) => {
    this.create(data);
    const todoList = document.querySelector('.todo-list');
    const todoItem = document.createElement('div');
    todoItem.classList.add('flex-item');

    if (data.completed) {
      todoItem.innerHTML = `<div class="flex-container">
      <div class="input">
      <input class="check" type="checkbox" name="${data.description}" id="${data.description}" CHECKED>
      <p class="task-desc checked" contenteditable for="${data.description}">${data.description}</p>
      </div>
      <i class="fas fa-trash remove-btn disabled trash"></i>
      <i class="fas fa-ellipsis-v dots"></i></div>`;
    } else {
      todoItem.innerHTML = `<div class="flex-container">
      <div class="input">
      <input class="check" type="checkbox" name="${data.description}" id="${data.description}">
      <p class="task-desc" contenteditable for="${data.description}">${data.description}</p>
      </div>
      <i class="fas fa-trash remove-btn disabled trash"></i>
      <i class="fas fa-ellipsis-v dots"></i></div>`;
    }
    todoList.appendChild(todoItem);
    this.arrange();
    this.remove();
    this.addEditListener();
    this.addStatusListener();
    this.setStorage();
  }

  arrange() {
    const rmvBtns = document.querySelectorAll('.remove-btn');
    for (let i = 0; i < rmvBtns.length; i += 1) {
      this.list[i].index = i;
      rmvBtns[i].setAttribute('data-value', i);
    }
  }

  remove() {
    const todoList = document.querySelector('.todo-list');
    const rmvBtns = document.querySelectorAll('.remove-btn');
    rmvBtns[rmvBtns.length - 1].addEventListener('click', (e) => {
      this.removeTask(e.target);
      todoList.removeChild(e.target.parentNode.parentNode);
      this.arrange();
      this.setStorage();
    });
  }

  removeTask(node) {
    const removeIndex = parseInt(node.getAttribute('data-value'), 10);
    this.list = this.list.filter((item) => removeIndex !== item.index);
  }

  setStorage() {
    localStorage.setItem(
      'tasksList',
      JSON.stringify({
        tasksList: this.list,
      }),
    );
  }

  addEditListener() {
    const editable = document.querySelectorAll('.task-desc');
    editable[editable.length - 1].addEventListener('focus', (e) => {
      const index = e.target.parentNode.nextSibling.nextSibling.getAttribute('data-value');
      const trashBtn = document.getElementsByClassName('trash');

      const dotsBtn = document.getElementsByClassName('dots');
      trashBtn[index].classList.remove('disabled');
      dotsBtn[index].classList.add('disabled');
    });
    editable[editable.length - 1].addEventListener('blur', (e) => {
      const index = e.target.parentNode.nextSibling.nextSibling.getAttribute('data-value');
      const trashBtn = document.getElementsByClassName('trash');
      const dotsBtn = document.getElementsByClassName('dots');
      setTimeout(() => {
        if (trashBtn[index] && dotsBtn[index]) {
          trashBtn[index].classList.add('disabled');
          dotsBtn[index].classList.remove('disabled');
        }
      }, 90);
    });

    editable[editable.length - 1].addEventListener('input', (e) => {
      this.editTarget(e);
    });
  }

  editTarget(e, taskToEdit) {
    if (typeof e === 'undefined') {
      this.edit(taskToEdit);
    } else {
      const index = e.target.parentNode.nextSibling.nextSibling.getAttribute('data-value');
      this.list[index].description = e.target.textContent;
      this.setStorage();
    }
  }

  edit(taskToEdit) {
    this.list[taskToEdit.index].description = taskToEdit.description;
    this.setStorage();
  }

  addStatusListener() {
    const checker = document.querySelectorAll('.check');
    checker[checker.length - 1].addEventListener('change', (e) => {
      e.target.parentNode.children[1].classList.toggle('checked');
      this.markComplete(e);
    });
  }

  markComplete(e, taskToMark) {
    if (typeof e === 'undefined') {
      this.markCompleted(taskToMark);
    } else {
      const index = e.target.parentNode.parentNode.children[1].getAttribute('data-value');
      this.list[index].completed = !this.list[index].completed;
      this.setStorage();
    }
  }

  markCompleted(taskToMark) {
    const index = taskToMark.parentNode.parentNode.parentNode.getAttribute('data-value');
    this.list[index].completed = !this.list[index].completed;
    this.setStorage();
  }
}

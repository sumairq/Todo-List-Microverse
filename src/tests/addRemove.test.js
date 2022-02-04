/**
 * @jest-environment jsdom
 */

// const todoCollection = require('../modules/todoCollection')
import TodoCollection from '../modules/todoCollection.js';
import getTasksLocalStorage from '../__mocks__/getLocalStorage.js';
import setTasksLocalStorage from '../__mocks__/setLocalStorage.js';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }
}

describe('Add', () => {
  test('The length of an empty tasksContainer after adding a task is 1', () => {
    // ARRANGE
    const coll = new TodoCollection();
    const task = { description: 'A new test task', completed: false, index: 0 };
    // ACT
    coll.create(task);
    // ASSERT
    expect(coll.list.length).toBe(1);
  });

  test('The length of the empty tasksContainer key in the local storage after saving a task is 1', () => {
    // ARRANGE
    const tasksContainer = [{ description: 'abc', completed: true, index: 0 }];
    // ACT
    setTasksLocalStorage(tasksContainer);
    const result = getTasksLocalStorage();
    // ASSERT
    expect(result.length).toBe(1);
  });

  test('New task description inserted in task container is abc', () => {
    // ARRANGE
    const coll = new TodoCollection();
    const tasksContainer = [{ description: 'abc', completed: true, index: 0 }];
    // ACT
    const result = coll.create(tasksContainer[0]);
    // ASSERT
    expect(result.description).toBe('abc');
  });
});

describe('Delete task function tests', () => {
  test('The length of taskContainer after deleting its only task, is 0', () => {
    // ARRANGE
    document.body.innerHTML = ` <ul class="todo-list flex-container">
        <div class="flex-item" data-value="0">
        <div class="flex-container">
        <div class="input">
        <input class="check" type="checkbox" name="description" id="description">
        <p class="task-desc" contenteditable for="description">description</p>
        </div>
        <i class="fas fa-trash remove-btn disabled trash"></i>
        <i class="fas fa-ellipsis-v dots"></i></div>
        </div>
        </ul>`;

    const taskToRemove = document.querySelector('.flex-item');
    const coll = new TodoCollection();
    const tasksContainer = [
      {
        description: 'abc',
        completed: false,
        index: 0,
      },
    ];
    // ACT

    coll.create(tasksContainer[0]);
    coll.removeTask(taskToRemove);

    // ASSERT
    expect(coll.list.length).toBe(0);
  });
});

global.localStorage = new LocalStorageMock();

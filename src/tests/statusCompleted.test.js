/**
 * @jest-environment jsdom
 */

import TodoCollection from '../modules/todoCollection.js';
import { clear } from '../modules/clearCompleted.js';

describe('Modify Status function test', () => {
  test('task should change completed status from false to true', () => {
    // ARRANGE
    document.body.innerHTML = `
         <ul class="todo-list flex-container">
        <div class="flex-item" data-value="0">
        <div class="flex-container">
        <div class="input">
        <input class="check" type="checkbox" name="description" id="description">
        <p class="task-desc" contenteditable for="description">description</p>
        </div>
        <i class="fas fa-trash remove-btn disabled trash"></i>
        <i class="fas fa-ellipsis-v dots"></i></div>
        </div>
        </ul>
        `;

    const coll = new TodoCollection();
    const task = { description: 'A new test task', completed: false, index: 0 };
    const taskToMark = document.querySelector('.check');

    // ACT
    coll.create(task);
    coll.markCompleted(taskToMark);

    // ASSERT
    expect(coll.list[0].completed).toBe(true);
  });
});

describe('Modify description function test', () => {
  test('Input text with contentEditable attribute changes its task description to xyz', () => {
    // ARRANGE
    document.body.innerHTML = `
        <ul class="todo-list flex-container">
        <div class="flex-item" data-value="0">
        <div class="flex-container">
        <div class="input">
        <input class="check" type="checkbox" name="description" id="description">
        <p class="task-desc" contenteditable for="description">description</p>
        </div>
        <i class="fas fa-trash remove-btn disabled trash"></i>
        <i class="fas fa-ellipsis-v dots"></i></div>
        </div>
        </ul>
        `;
    const coll = new TodoCollection();
    const task = { description: 'A new test task', completed: false, index: 0 };
    const editedTask = { description: 'Edited task', completed: false, index: 0 };

    // ACT
    coll.create(task);
    coll.edit(editedTask);

    // ASSERT

    expect(coll.list[0].description).toBe('Edited task');
  });
});

describe('Delete completed tasks function tests', () => {
  test('Delete the tasks that are marked as complete in the task list', () => {
    // ARRANGE
    const coll = new TodoCollection();

    const taskList = [
      { description: 'A new test task 1', completed: false, index: 0 },
      { description: 'A new test task 2', completed: false, index: 1 },
      { description: 'A new test task 3', completed: false, index: 2 },
      { description: 'A new test task 4', completed: true, index: 3 },
    ];

    // ACT
    coll.create(taskList[0]);
    coll.create(taskList[1]);
    coll.create(taskList[2]);
    coll.create(taskList[3]);

    coll.list = clear(taskList);

    // ASSERT

    expect(coll.list.length).toBe(3);
  });
});

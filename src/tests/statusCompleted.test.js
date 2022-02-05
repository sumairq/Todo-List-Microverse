/**
 * @jest-environment jsdom
 */

import TodoCollection from '../modules/todoCollection'
//only test edit() and markComplete() and clear()


describe('Modify Status function test', () => {
    test('task should change completed status from false to true', () => {
        //ARRANGE
        document.body.innerHTML =`
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
        `

        const coll = new TodoCollection();
        const task = { description: 'A new test task', completed: false, index: 0 };
        const taskToMark = document.querySelector('.check')

        //ACT
        coll.create(task)
         coll.markCompleted(taskToMark)

        //ASSERT
        expect(coll.list[0].completed).toBe(true)
    })
})

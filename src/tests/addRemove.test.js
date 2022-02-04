// const todoCollection = require('../modules/todoCollection')
import todoCollection from '../modules/todoCollection'
import getTasksLocalStorage from '../__mocks__/getLS';
import setTasksLocalStorage from '../__mocks__/setLs';


class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    // clear() {
    //   this.store = {};
    // }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    // removeItem(key) {
    //   delete this.store[key];
    // }
  }

describe("Add", ()=> {

    test('The length of an empty tasksContainer after adding a task is 1', () => {
        // ARRANGE
        const coll = new todoCollection()
        const task = {description: "A new test task", completed: false, index: 0};
        // const tasksContainer = [];
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
          //ARRANGE
          const coll = new todoCollection()
    // const taskData = {description: "A new test task", completed: false, index: 0}
          const tasksContainer = [{ description: 'abc', completed: true, index: 0 }];
          //ACT
          const result = coll.create(tasksContainer[0]);
          //ASSERT
          expect(result.description).toBe('abc');   

      })
}
)

global.localStorage = new LocalStorageMock();

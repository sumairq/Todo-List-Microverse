// const todoCollection = require('../modules/todoCollection')
import todoCollection from '../modules/todoCollection'


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
    const coll = new todoCollection()

    test('should equal 4',()=>{
        expect(coll.addition(2,2)).toBe(4)  
    })
    
})

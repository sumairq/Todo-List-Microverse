const todoList = document.querySelector('.todo-list');

export default function clear(list) {
  const indexes = [];
  list.list.forEach((item) => {
    if (item.completed) {
      indexes.push(item.index);
    }
  });
  for (let i = indexes.length - 1; i >= 0; i -= 1) {
      console.log(todoList.children[indexes[i]].children[0].children[1])
    if (todoList.children[indexes[i]].children[0].children[1]) {
        todoList.children[indexes[i]].children[0].children[1].click();
    }
  }
}

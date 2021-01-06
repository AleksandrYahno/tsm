import { makeAutoObservable } from 'mobx';

class ClassTodo {
  todos = [
    { id: 1, title: 'todo 1', complete: false },
    { id: 2, title: 'todo 2', complete: false },
    { id: 3, title: 'todo 3', complete: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: any) {
    this.todos.push(todo);
  }

  removeTodo(id: any) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id: any) {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo);
  }

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.todos = [...this.todos, ...json]
      })
  }
}

export default new ClassTodo();
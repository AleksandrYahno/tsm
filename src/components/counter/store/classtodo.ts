import { makeAutoObservable } from 'mobx';

interface Type {
  id: number
  title: string
  complete: boolean
}

class ClassTodo {
  todos: Type[] = [
    // { id: 1, title: 'todo 1', complete: false },
    // { id: 2, title: 'todo 2', complete: false },
    // { id: 3, title: 'todo 3', complete: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: Type) {
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo);
  }

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.todos = [...this.todos, ...json];
      });
  }
}

export default new ClassTodo();
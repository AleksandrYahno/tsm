import React from 'react';
import { observer } from 'mobx-react-lite';
import todo from './store/classtodo';

const ContainerTodo = observer(() => {

  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>fetch todos</button>
      {todo.todos.map(item =>
        <div key={item.id}>
          <input type='checkbox' checked={item.complete} onChange={() => todo.completeTodo(item.id)}/>
          {item.title}
          <button onClick={() => todo.removeTodo(item.id)}>X</button>
        </div>
      )}
    </div>
  );
});

export default ContainerTodo;
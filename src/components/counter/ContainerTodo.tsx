import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import todo from './store/classtodo';

const ContainerTodo = observer(() => {
  const [state, setState] = useState(false);
  const handleChange = () => {
    setState(!state);
  };

  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>fetch todos</button>
      {todo.todos.map(item =>
        <div key={item.id}>
          {/*<input type='checkbox' checked={item.complete} onChange={() => todo.completeTodo(item.id)}/>*/}
          <input type='checkbox' checked={state} onChange={handleChange} />
          {item.title}
          <button onClick={() => todo.removeTodo(item.id)}>X</button>
        </div>,
      )}
    </div>
  );
});

export default ContainerTodo;
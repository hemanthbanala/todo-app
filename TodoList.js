import React from 'react';

const TodoList = ({ todos, onEdit, onDelete, onToggle }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li key={todo.id} className={todo.completed ? 'completed' : ''}>
        <div>
          <div><strong>Title:</strong> {todo.title}</div>
          <div><strong>Description:</strong> {todo.description}</div>
        </div>
        <div>
          <button onClick={() => onEdit(todo)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
);

export default TodoList;

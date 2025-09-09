const { v4: uuidv4 } = require('uuid');

// In-memory todos array
let todos = [];

exports.getTodos = (req, res) => {
  res.json(todos);
};

exports.getTodoById = (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  res.json(todo);
};

exports.createTodo = (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const newTodo = {
    id: uuidv4(),
    title,
    description: description || '',
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
  const { title, description, completed } = req.body;
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
};

exports.deleteTodo = (req, res) => {
  const index = todos.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Todo not found' });
  todos.splice(index, 1);
  res.json({ message: 'Todo deleted' });
};

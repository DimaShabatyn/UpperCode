import './style.css'

const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');

const todoItem = {
  id: Date.now(),
  name: 'Clean room',
  completed: false
}


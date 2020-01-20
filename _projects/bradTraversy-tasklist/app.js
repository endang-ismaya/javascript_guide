/* jshint esversion: 6 */
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add Task Event
  form.addEventListener('submit', addTask);
  // Remove Task Event
  taskList.addEventListener('click', removeTask);
  // Clear Task Event
  clearBtn.addEventListener('click', clearTasks);
  // Filter Task Event
  filter.addEventListener('keyup', filterTasks);
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
}

// Get Task from localStorage
function getTasks() {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to the li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // Add the icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e) {
  // console.log('Add new Task here...');

  if (taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  // Add the icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store to localStorage
  storeTaskInLocalStorage(taskInput.value);

  // clear input
  taskInput.value = '';
  // console.log(li);

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  // target the delete-item class
  if (e.target.parentElement.classList.contains('delete-item')) {
    // console.log(e.target);
    if (confirm('Are you Sure?')) {
      e.target.parentElement.parentElement.remove();

      // remove from localStorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from localStorage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  let task = taskItem.textContent;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  if (tasks.indexOf(task) !== -1) {
    tasks.splice(tasks.indexOf(task), 1);
  }

  // other methods
  // tasks.forEach(function(task, index) {
  //     if (taskItem.textContent === task) {
  //         tasks.splice(index, 1);
  //     }
  // });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
  // taskLixk.innerHTML = '';

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // clear Task from localStorage
  clearTasksFromLocalStorage();
}

// Clear Task from localStorage
function clearTasksFromLocalStorage() {
  // localStorage.clear();

  if (confirm('Are You Sure?! it will delete all tasks')) {
    localStorage.removeItem('tasks');
  }
}

// Filter Task
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  const collection = document.querySelectorAll('.collection-item');

  collection.forEach(task => {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

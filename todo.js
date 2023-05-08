const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const incompleteTasks = document.getElementById('incomplete-tasks');
const completedTasks = document.getElementById('completed-tasks');

// Function to create a new task item
function createTaskItem(task) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const label = document.createElement('label');
  label.innerText = task;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.className = 'delete';
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);
  return li;
}

// Function to add a new task
function addTask() {
  const task = taskInput.value.trim();
  if (task !== '') {
    const li = createTaskItem(task);
    incompleteTasks.appendChild(li);
    taskInput.value = '';
    addDeleteListeners(li);
    addCheckboxListener(li);
  }
}

// Function to delete a task
function deleteTask() {
  const li = this.parentNode;
  li.parentNode.removeChild(li);
}

// Function to mark a task as complete
function completeTask() {
  const li = this.parentNode;
  const checkbox = li.querySelector('input[type="checkbox"]');
  checkbox.checked = true;
  completedTasks.appendChild(li);
  addDeleteListeners(li);
  addCheckboxListener(li);
}

// Function to add event listeners to delete buttons
function addDeleteListeners(li) {
  const deleteBtn = li.querySelector('.delete');
  deleteBtn.addEventListener('click', deleteTask);
}

// Function to add event listener to checkboxes
function addCheckboxListener(li) {
  const checkbox = li.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', completeTask);
}

// Event listener for add button
addBtn.addEventListener('click', addTask);

// Event listener for input field
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Add event listeners to existing tasks
const incompleteTaskItems = incompleteTasks.getElementsByTagName('li');
for (let i = 0; i < incompleteTaskItems.length; i++) {
  addDeleteListeners(incompleteTaskItems[i]);
  addCheckboxListener(incompleteTaskItems[i]);
}

const completedTaskItems = completedTasks.getElementsByTagName('li');
for (let i = 0; i < completedTaskItems.length; i++) {
  addDeleteListeners(completedTaskItems[i]);
  addCheckboxListener(completedTaskItems[i]);
}

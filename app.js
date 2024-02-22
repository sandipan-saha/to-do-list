// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-submit");
const todoListWrapper = document.querySelector(".todo-list-wrapper");

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", getToDos);
todoButton.addEventListener("click", addToDo); // Event listener to add tasks
todoListWrapper.addEventListener("click", deleteCheck); // Event listener to either mark tasks as completed or to delete tasks

// FUNCTIONS

/* To take data data from input field and add to DOM */
function addToDo(event) {
  // prevent form from trying submit data to backend
  event.preventDefault();

  // To Do list <li>
  const todoList = document.createElement("li"); // creating a new <li> row item
  todoList.classList.add("todo-list"); // adding class name 'todo-list'

  // To Do list <span>
  const newToDo = document.createElement("span"); // creating a new <span>
  newToDo.classList.add("todo-item"); // adding class name 'todo-item'
  newToDo.innerText = todoInput.value;

  // Adding the 'todo-item' <span> to 'todo-list' <li> row
  todoList.appendChild(newToDo);

  // Creating check-mark button
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';

  // Adding the completed <button>> to 'todo-list' <li> row
  todoList.appendChild(completedButton);

  // Creating delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

  // Adding the delete <button>> to 'todo-list' <li> row
  todoList.appendChild(deleteButton);

  // Adding the 'todo-list' <li> row to <ul> todo-list wrapper
  todoListWrapper.appendChild(todoList);

  // Adding the todo task to local storage
  saveLocalToDos(todoInput.value);

  // Clear input field value after adding data to list
  todoInput.value = "";
}

/* To mark tasks as completed or to delete tasks */
function deleteCheck(event) {
  const item = event.target;

  // Deleting Tasks
  if (item.classList[0] == "delete-btn") {
    const listItem = item.parentElement;
    listItem.remove();
  }

  // Marking tasks as completed
  if (item.classList[0] == "complete-btn") {
    const listItem = item.parentElement;
    listItem.classList.toggle("completed");
  }
}

/* To save tasks into local storage once added to DOM, so as not to loose them after refresh */
function saveLocalToDos(task) {
  let taskArray;
  // checking if local storage has any data already
  if (localStorage.getItem("Tasks:") === null) {
    taskArray = []; // if nothing found, set task array to empty
  } else {
    taskArray = JSON.parse(localStorage.getItem("Tasks:")); // if something found, parse the data from local storage into task array
  }
  taskArray.push(task); // pushing the new task to taskArray
  localStorage.setItem("Tasks:", JSON.stringify(taskArray)); // uploading the updated task array to local storage
}

/* To check if the local storage already has tasks and to display them in the DOM, even after refresh */
function getToDos() {
  let taskArray;
  // checking if local storage has any data already
  if (localStorage.getItem("Tasks:") === null) {
    taskArray = []; // if nothing found, set task array to empty
  } else {
    taskArray = JSON.parse(localStorage.getItem("Tasks:")); // if something found, parse the data from local storage into task array
  }
  // Fetching existing data from local storage and displaying on screen
  taskArray.forEach(function (task) {
    // To Do list <li>
    const todoList = document.createElement("li"); // creating a new <li> row item
    todoList.classList.add("todo-list"); // adding class name 'todo-list'

    // To Do list <span>
    const newToDo = document.createElement("span"); // creating a new <span>
    newToDo.classList.add("todo-item"); // adding class name 'todo-item'
    newToDo.innerText = task;

    // Adding the 'todo-item' <span> to 'todo-list' <li> row
    todoList.appendChild(newToDo);

    // Creating check-mark button
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';

    // Adding the completed <button>> to 'todo-list' <li> row
    todoList.appendChild(completedButton);

    // Creating delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    // Adding the delete <button>> to 'todo-list' <li> row
    todoList.appendChild(deleteButton);

    // Adding the 'todo-list' <li> row to <ul> todo-list wrapper
    todoListWrapper.appendChild(todoList);
  });
}

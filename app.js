// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-submit");
const todoListWrapper = document.querySelector(".todo-list-wrapper");

// event listeners
todoButton.addEventListener("click", addToDo); // Event listener to add tasks
todoListWrapper.addEventListener("click", deleteCheck); // Event listener to either mark tasks as completed or to delete tasks
// functions
function addToDo(event) {
  // prevent form from trying submit data to backend
  event.preventDefault();

  // To Do list <div>
  const todoList = document.createElement("li"); // creating a new div
  todoList.classList.add("todo-list"); // adding class name 'todoDiv'

  // To Do list <li>
  const newToDo = document.createElement("span"); // creating a new li
  newToDo.classList.add("todo-item"); // adding class name 'todo-item'
  newToDo.innerText = todoInput.value;

  // Adding the <li> to <div>
  todoList.appendChild(newToDo);

  // // Creating a wrapper <div> for task action buttons
  // const buttonsDiv = document.createElement("div");
  // buttonsDiv.classList.add("btns-wrapper");
  // todoDiv.appendChild(buttonsDiv);

  // Creating check-mark button
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';

  // Adding the completed <button>> to buttonsDiv wrapper
  todoList.appendChild(completedButton);

  // Creating delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

  // Adding the delete <button>> to buttonsDiv wrapper
  todoList.appendChild(deleteButton);

  // Adding the <div> to <ul> todo-list
  todoListWrapper.appendChild(todoList);

  // Clear input field value after adding data to list
  todoInput.value = "";
}

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

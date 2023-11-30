/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
let todoItems = [];
let newTodoID = 1;

// DOM Elements
let todoList = document.getElementById("TodoList");
let userInput = document.getElementById("NewTodo");
let addTaskButton = document.getElementById("AddTaskButton");
let clearTaskButton = document.getElementById("ClearTaskButton")

//
// Functions
//

// Add a heading to the app container
function displayTasks() {
  todoList.innerHTML = "";
  
  for (const task of todoItems) {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = 
      `<h2>${task.task}</h2>
      <span>${task.id}</span>
      <button data-id="${task.id}" class="remove-btn">Remove</button>
      <button data-id="${task.id}" class="complete-btn">Complete</button>`;

      if (task.completed) {
        const check = document. createElement ("span");
        check.innerHTML = "✅";
        check.classList.add("status-icon");
        todoItem.appendChild(check);
        todoItem.classList.add("done");
      }
      todoItemsElement.appendChild(todoItem);
  }
}

function handleAddTask() {
  const todoInput = userInput.ariaValueMax.trim();

  if (todoInput !== "") {
    createTodo(todoInput);
    userInput.value = "";
    displayTasks();
  }
}
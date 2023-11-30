// Variables
let tasksList = [];
let nextTaskID = 1;


// DOM Elements
let tasksListElement = document.getElementById("TodoList");
let taskInputElement = document.getElementById("NewItemInput");
let addTaskButton = document.getElementById("AddButton");
let clearTasksButton = document.getElementById("ClearButton");


// Functions
function displayTasks() {
  tasksListElement.innerHTML = "";


  for (const task of tasksList) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML =
      `<h2${task.completed ? ' class="completed-task"' : ''}>${task.description}</h2>
      <span>${task.id}</span>
      <button data-id="${task.id}" class="complete-btn">${task.completed ? 'Undo' : 'Done'}</button>
      <button data-id="${task.id}" class="remove-btn">Remove</button>`;


    if (task.completed) {
      const checkMark = document.createElement("span");
      checkMark.innerHTML = "✅";
      checkMark.classList.add("status-icon");
      taskItem.appendChild(checkMark);
    }


    tasksListElement.appendChild(taskItem);
  }
}


function handleAddTask() {
  const description = taskInputElement.value.trim();


  if (description !== "") {
    createTask(description);
    taskInputElement.value = "";
    displayTasks();
  } else {
    showNotification("Please add something first");
  }
}


function showNotification(message) {
  const notificationElement = document.getElementById("notificationArea");
  notificationElement.textContent = message;


  setTimeout(() => {
    notificationElement.textContent = "";
  }, 3000);
}


function handleTaskClick(event) {
  const taskID = parseInt(event.target.getAttribute("data-id"));


  if (event.target.classList.contains("remove-btn")) {
    removeTask(taskID);
  } else if (event.target.classList.contains("complete-btn")) {
    toggleTaskCompletion(taskID);
  }


  displayTasks();
}


function toggleTaskCompletion(taskID) {
  const taskIndex = tasksList.findIndex((task) => task.id === taskID);


  if (taskIndex !== -1) {
    tasksList[taskIndex].completed = !tasksList[taskIndex].completed;
    updateStoredTasks();
  }
}


function createTask(description) {
  let task = {
    id: getNextTaskID(),
    description: description,
    completed: false,
  };

  tasksList.push(task);
  updateStoredTasks();
}


function getNextTaskID() {
  return tasksList.length > 0 ? Math.max(...tasksList.map(task => task.id)) + 1 : 1;
}


function removeTask(taskID) {
  tasksList = tasksList.filter((task) => task.id !== taskID);
  updateStoredTasks();
}


function updateStoredTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasksList));
}


function clearAllTasks() {
  tasksList = [];
  updateStoredTasks();
  displayTasks();
}


// Event Listeners
addTaskButton.addEventListener("click", handleAddTask);
tasksListElement.addEventListener("click", handleTaskClick);
clearTasksButton.addEventListener("click", clearAllTasks);


// Initial rendering
displayTasks();
/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
let todoItems = [];
let newTodoID = 1;

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let todoList = document.getElementById("TodoList");
let userInput = document.getElementById("NewTodo");
let addTaskButton = document.getElementById("AddTaskButton");
let clearTaskButton = document.getElementById("ClearTaskButton")

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();
const taskInput = document.querySelector(".task-input input");
const filters = document.querySelectorAll(".filters span");
const clearAll = document.querySelector(".clear-btn");
const taskBox = document.querySelector(".task-box");

let editId;
let isEditTask = false,
  // Getting Local Storage task
  tasks = JSON.parse(localStorage.getItem("task"));

// -------------------------------------------------------------------------------------------------------------------

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("span.active").classList.remove("active");
    btn.classList.add("active");
    showTasks(btn.id);
  });
});

// -------------------------------------------------------------------------------------------------------------------

// Show the tasks inside the taskBox (that are in the local storage)
function showTasks(filter) {
  let liTag = "";
  if (tasks) {
    tasks.forEach((todo, id) => {
      // if todo status is completed, set the is completed value to checked
      let completed = todo.status == "completed" ? "checked" : "";
      if (filter == todo.status || filter == "all") {
        liTag += `<li class="task">
                            <label for="${id}">
                                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                                <p class="${completed}">${todo.name}</p>
                            </label>
                            <div class="settings"><i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
                                <ul class="task-menu">
                                    <li onclick='editTask(${id}, "${todo.name}")'><i class="fa-solid fa-pen"></i>Edit</li>
                                    <li onclick='deleteTask(${id}, "${filter}")'><i class="fa-solid fa-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </li>`;
      }
    });
  }
  // if li isn't empty, insert this value inside taskbox else insert span
  taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
  let checkTask = taskBox.querySelectorAll(".task");
  !checkTask.length
    ? clearAll.classList.remove("active")
    : clearAll.classList.add("active");
  taskBox.offsetHeight >= 300
    ? taskBox.classList.add("overflow")
    : taskBox.classList.remove("overflow");
}
showTasks("all");

// -------------------------------------------------------------------------------------------------------------------

// Function: Show Menu
function showMenu(selectedTask) {
  let menuDiv = selectedTask.parentElement.lastElementChild;
  menuDiv.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != selectedTask) {
      menuDiv.classList.remove("show");
    }
  });
}

// -------------------------------------------------------------------------------------------------------------------

// Function: Update Status
function updateStatus(selectedTask) {
  // getting paragraph that contains task name
  let taskName = selectedTask.parentElement.lastElementChild;
  if (selectedTask.checked) {
    taskName.classList.add("checked");
    // updating the status to completed
    tasks[selectedTask.id].status = "completed";
  } else {
    taskName.classList.remove("checked");
    // updating the status of selected task to pending
    tasks[selectedTask.id].status = "pending";
  }
  // saving the update status to localstorage
  localStorage.setItem("task", JSON.stringify(tasks));
}

// -------------------------------------------------------------------------------------------------------------------

// Function: Edit Task
function editTask(taskId, textName) {
  editId = taskId;
  isEditTask = true;
  taskInput.value = textName;
  taskInput.focus();
  taskInput.classList.add("active");
}

// -------------------------------------------------------------------------------------------------------------------

// Function: Delete Task
function deleteTask(deleteId, filter) {
  isEditTask = false;
  // Delete task from local storage
  tasks.splice(deleteId, 1);
  localStorage.setItem("task", JSON.stringify(tasks));
  showTasks(filter);
}

// -------------------------------------------------------------------------------------------------------------------

// Clear All Button
clearAll.addEventListener("click", () => {
  // removing all items of array/tasks
  isEditTask = false;
  tasks.splice(0, tasks.length);
  localStorage.setItem("task", JSON.stringify(tasks));
  showTasks();
});

// Everytime we write and hit enter, we add to the Local Storage

taskInput.addEventListener("keyup", (e) => {
  let userTask = taskInput.value.trim();
  if (e.key == "Enter" && userTask) {
    // if isEditedTask isn't true
    if (!isEditTask) {
      //if todo is not existed, pass an empty array to tasks
      tasks = !tasks ? [] : tasks;
      let taskInfo = { name: userTask, status: "pending" };
      tasks.push(taskInfo); //adding new task to tasks
    } else {
      isEditTask = false;
      tasks[editId].name = userTask;
    }
    taskInput.value = "";
    localStorage.setItem("task", JSON.stringify(tasks));
    showTasks(document.querySelector("span.active").id);
  }
});

const taskInput = document.querySelector('.task-input input')
const filters = document.querySelectorAll('.filters span')
const clearAll = document.querySelector('.clear-btn')
const taskBox = document.querySelector('.task-box')
const controls = document.querySelector('.controls')
const addTaskBtn = document.querySelector('.add-task')

clearAll.addEventListener('click', clearAllTasks)

let editId
let isEditTask = false,
  tasks = JSON.parse(localStorage.getItem('task'))

filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('span.active').classList.remove('active')
    btn.classList.add('active')
    showTasks(btn.id)
  })
})


function showTasks(filter) {
  let liTag = ''
  if (tasks) {
    tasks.forEach((todo, id) => {
      let completed = todo.status == 'completed' ? 'checked' : '' // if todo status is completed, set the is completed value to checked
      if (filter == todo.status || filter == 'all') {
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
                        </li>`
      }
    })
  }
  // if li isn't empty, insert this value inside taskbox else insert span
  taskBox.innerHTML = liTag || `<p>You don't have any task here</p>`
  let checkTask = taskBox.querySelectorAll('.task')
  !checkTask.length
    ? clearAll.classList.remove('active')
    : clearAll.classList.add('active')
  taskBox.offsetHeight >= 300
    ? taskBox.classList.add('overflow')
    : taskBox.classList.remove('overflow')
}
showTasks('all')


function showMenu(selectedTask) {
  let menuDiv = selectedTask.parentElement.lastElementChild
  menuDiv.classList.add('show')
  document.addEventListener('click', (e) => {
    if (e.target.tagName != 'I' || e.target != selectedTask) {
      menuDiv.classList.remove('show')
    }
  })
}


function updateStatus(selectedTask) {
  let taskName = selectedTask.parentElement.lastElementChild// getting paragraph that contains task name
  if (selectedTask.checked) {
    taskName.classList.add('checked')
    tasks[selectedTask.id].status = 'completed'
  } else {
    taskName.classList.remove('checked')
    tasks[selectedTask.id].status = 'pending'
  }
  localStorage.setItem('task', JSON.stringify(tasks))
}


function editTask(taskId, textName) {
  editId = taskId
  isEditTask = true
  taskInput.value = textName
  taskInput.focus()
  taskInput.classList.add('active')
}


function deleteTask(deleteId, filter) {
  isEditTask = false
  tasks.splice(deleteId, 1)
  localStorage.setItem('task', JSON.stringify(tasks))
  showTasks(filter)
}


addTaskBtn.addEventListener('click', () => {
  let userTask = taskInput.value.trim()
    // if isEditedTask isn't true
    if (!isEditTask) {
      //if todo is not existed, pass an empty array to tasks
      tasks = !tasks ? [] : tasks
      let taskInfo = { name: userTask, status: 'pending' }
      tasks.push(taskInfo) //adding new task to tasks
    } else {
      isEditTask = false
      tasks[editId].name = userTask
    }
    taskInput.value = ''
    localStorage.setItem('task', JSON.stringify(tasks))
    showTasks(document.querySelector('span.active').id)
    clearAll.classList.add('show')
    controls.classList.add('left')
    controls.classList.remove('center')


})



function clearAllTasks() {
  controls.classList.add('center')
  controls.classList.remove('left')

  clearAll.classList.remove('show')
  isEditTask = false
  tasks.splice(0, tasks.length)
  localStorage.setItem('task', JSON.stringify(tasks))
  showTasks()
}

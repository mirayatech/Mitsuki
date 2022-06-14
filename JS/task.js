const taskInput = document.querySelector('.task-input input')
const taskBox = document.querySelector('.task-box')

let tasks = JSON.parse(localStorage.getItem('task'))

function showTasks() {
  let li = ''

  if (tasks) {
    tasks.forEach((tasks, id) => {
      li += `<li class="task">
                    <label for="${id}">
                        <input type="checkbox" id="${id}">
                        <p>${tasks.name}</p>
                    </label>
                    <div class="settings">
                        <i class="fa-solid fa-ellipsis"></i>
                        <ul class="task-menu">
                            <li><i class="fa-solid fa-pen"></i>Edit</li>
                            <li><i class="fa-solid fa-trash"></i>Delete</li>
                        </ul>
                    </div>
                </li>`
    })
  }
  taskBox.innerHTML = li
}
showTasks()

taskInput.addEventListener('keyup', (e) => {
  let userTask = taskInput.value.trim()

  if (e.key == 'Enter' && userTask) {
    if (!tasks) {
      tasks = []
    }
    taskInput.value = ''
    let taskInfo = { name: userTask, status: 'pending' }
    tasks.push(taskInfo)
    localStorage.setItem('task', JSON.stringify(tasks))
    showTasks()
  }
})

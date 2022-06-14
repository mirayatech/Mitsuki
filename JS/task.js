const taskInput = document.querySelector('.task-input input')
let tasks = JSON.parse(localStorage.getItem('task'))

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

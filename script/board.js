const addColumnDiv = document.querySelector('.add-column')
const addColumnBtn = document.querySelector('.add-column-btn')
const entitleButtonDiv = document.querySelector('.entitle-column')
const entitleColumnInput = document.getElementById('entitle-column-input')
const addBtn = document.querySelector('.add-btn')
const cancelBtn = document.querySelector('.cancle-column-btn')
const wrapper = document.querySelector('.column-wrapper')

const boards = JSON.parse(localStorage.getItem('Boards') || '[]')

addColumnBtn.addEventListener('click', () => {
    entitleColumnInput.value = ''
    entitleColumnInput.focus()
    addColumnDiv.classList.add('hide')
    entitleButtonDiv.classList.add('show')
})

cancelBtn.addEventListener('click', () => {
    addColumnDiv.classList.remove('hide')
    entitleButtonDiv.classList.remove('show')
})

function showColumn() {
    document.querySelectorAll('.add-card').forEach((board) => board.remove())
    boards.forEach((board) => {
        let buttonTag = `<div class="add-card">
        <h3 class="column-title">${board.column}</h3>
        <button class="add-card-btn"><i class="fa-solid fa-plus"></i> New Card</button>

    </div>`

        wrapper.insertAdjacentHTML('afterend', buttonTag)
    })
}

showColumn()

addBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let columnTitle = entitleColumnInput.value

    if (columnTitle) {
        let boardInfo = {
            column: columnTitle,
            card: {
                title: '',
                description: '',
                date: '',
            },
        }
        boards.push(boardInfo)
        localStorage.setItem('Boards', JSON.stringify(boards))
    }

    showColumn()
    cancelBtn.click()
})

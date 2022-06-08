const addColumnDiv = document.querySelector('.add-column')
const addColumnBtn = document.querySelector('.add-column-btn')
const entitleButtonDiv = document.querySelector('.entitle-column')
const entitleColumnInput = document.getElementById('entitle-column-input')
const addBtn = document.querySelector('.add-btn')
const cancelBtn = document.querySelector('.cancle-column-btn')

const boards = JSON.parse(localStorage.getItem('board') || '[]')

addColumnBtn.addEventListener('click', () => {
    entitleColumnInput.value = ''
    entitleColumnInput.focus()
    entitleButtonDiv.classList.add('show')
    addColumnDiv.classList.add('hide')

})

cancelBtn.addEventListener('click', () => {
    entitleButtonDiv.classList.remove('show')
    addColumnDiv.classList.remove('hide')
})

function showColumn() {
    boards.forEach(column => {
        let liTag = `<div class="add-card">
        <h3 class="column-title">${column.column}</h3>
        <button class="add-card-btn"><i class="fa-solid fa-plus"></i> New Card</button>
        <ul class="card-list">
            <li class="column-card">
                <div class="card-details">
                    <h3 class="title">Card Title</h3>
                    <p>Lorem ipsum, dolor sit amet consectur adipisig boli somin kol elit.
                    </p>
                </div>
                <div class="line"></div>
                <div class="bottom-details">
                    <span class="date">June 4, 2022</span>
                    <div class="settings"><i class="fa-solid fa-ellipsis" onclick="showMenu(this)"></i>
                        <ul class="settings-menu">
                            <li class="edit-btn"> <i class="fa-solid fa-pen"> </i> Edit </li>
                            <li class="delete-btn"> <i class="fa-solid fa-trash"> </i> Delete </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>`

        addColumnDiv.insertAdjacentHTML('afterend', liTag)

    });
}

addBtn.addEventListener('click', () => {
    let columnTitle = entitleColumnInput.value;

    if (columnTitle) {
        let boardInfo = {
            column: columnTitle,
            card: {
                title: '',
                description: '',
                date: '',
            }
        }

        boards.push(boardInfo)
        localStorage.setItem('Boards', JSON.stringify(boards))
    }
    showColumn()
    cancelBtn.click()
})
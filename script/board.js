const addColumnDiv = document.querySelector('.add-column')
const addColumnBtn = document.querySelector('.add-column-btn')
const entitleButtonDiv = document.querySelector('.entitle-column')
const entitleColumnInput = document.getElementById('entitle-column-input')
const addBtn = document.querySelector('.add-btn')
const cancelBtn = document.querySelector('.cancle-column-btn')
const wrapper = document.querySelector('.column-wrapper')
const addCardBtn = document.querySelector('.add-card .add-card-btn')
const popupModule = document.querySelector('.board-page .popup-box')
const closePopupIcon = document.querySelector('.board-page .fa-plus')
const boardTitleTag = document.querySelector('.board-page .title-description')
const boardDescTag = document.querySelector('.board-page .description-input')



const boards = JSON.parse(localStorage.getItem('Boards') || '[]')

// show entitle column
addColumnBtn.addEventListener('click', () => {
    entitleColumnInput.value = ''
    entitleColumnInput.focus()
    addColumnDiv.classList.add('hide')
    entitleButtonDiv.classList.add('show')
})

// Cancel button (entitle column)
cancelBtn.addEventListener('click', () => {
    addColumnDiv.classList.remove('hide')
    entitleButtonDiv.classList.remove('show')
})

// X icon on the pop up module
closePopupIcon.addEventListener('click', () => {
    popupModule.classList.remove('show')
})

// Show the column on the page
function showColumn() {
    document.querySelectorAll('.add-card').forEach((board) => board.remove())
    boards.forEach((board) => {
        let buttonTag = `<div class="add-card">
        <h3 class="column-title">${board.column}</h3>
        <button onclick="addCard()" class="add-card-btn"><i class="fa-solid fa-plus"></i> New Card</button>

    </div>`

        wrapper.insertAdjacentHTML('afterend', buttonTag)
    })
}
// invoke
showColumn()


// Click on add card button
function addCard() {
    popupModule.classList.add('show')
}



// cardPopupTitle = boardTitleTag.value
// cardPopupDesc = boardDescTag.value
// console.log(cardPopupTitle, cardPopupDesc)

// saving note to local storage
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

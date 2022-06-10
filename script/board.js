const addColumnDiv = document.querySelector('.add-column')
const addColumnBtn = document.querySelector('.add-column-btn')
const entitleButtonDiv = document.querySelector('.entitle-column')
const entitleColumnInput = document.getElementById('entitle-column-input')
const addBtn = document.querySelector('.add-btn')
const cancelBtn = document.querySelector('.cancle-column-btn')
const wrapper = document.querySelector('.column-wrapper')
// const addCardList = document.querySelector('.board-page .card-list')
const addCardBtn = document.querySelector('.add-card .add-card-btn')
const closePopupIcon = document.querySelector('.board-page .fa-plus')
const popupModule = document.querySelector('.board-page .popup-box')
const boardTitleTag = document.querySelector('.board-page #title-description')
const boardDescTag = document.querySelector('.board-page #description-input')
const boardPopupBtn = document.querySelector('.board-page .popup-btn')

const boardMonths = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const boards = JSON.parse(localStorage.getItem('Boards') || '[]')
const cards = JSON.parse(localStorage.getItem('Cards') || '[]')

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
        <ul class="card-list">
        </ul>

    </div>`

    wrapper.insertAdjacentHTML('afterend', buttonTag)
  })
}

showColumn()

// Show all cards
function showCards() {
  document.querySelectorAll('.column-card').forEach((card) => card.remove())
  cards.forEach((card) => {
    let cardTag = `
    <li class="column-card">
        <div class="card-details">
            <h3 class="title">${card.title}</h3>
            <p>${card.description}</p>
        </div>
        <div class="line"></div>
        <div class="bottom-details">
            <span class="date">${card.date}</span>
            <div class="settings"><i class="fa-solid fa-ellipsis" onclick="showMenu(this)"></i>
                <ul class="settings-menu">
                    <li class="edit-btn"> <i class="fa-solid fa-pen"> </i> Edit </li>
                    <li class="delete-btn"> <i class="fa-solid fa-trash"> </i> Delete </li>
                </ul>
            </div>
        </div>
    </li>
`
    document
      .querySelector('.board-page .card-list')
      .insertAdjacentHTML('beforeend', cardTag)
  })
}

showCards()

// Click on add card button
function addCard() {
  popupModule.classList.add('show')
  boardTitleTag.value = ''
  boardDescTag.value = ''
}

// saving cards to local storage
boardPopupBtn.addEventListener('click', (event) => {
  event.preventDefault()
  cardTitle = boardTitleTag.value
  cardDesc = boardDescTag.value

  if (cardTitle || cardDesc) {
    let objDate = new Date()
    let day = objDate.getDate()
    let month = boardMonths[objDate.getMonth()]
    let year = objDate.getFullYear()

    const cardInfo = {
      title: cardTitle,
      description: cardDesc,
      date: `${month} ${day}, ${year} `,
    }

    cards.push(cardInfo)
    localStorage.setItem('Cards', JSON.stringify(cards))
  }
  showCards()
  closePopupIcon.click()
})

// saving column to local storage
addBtn.addEventListener('click', (event) => {
  event.preventDefault()
  let columnTitle = entitleColumnInput.value

  if (columnTitle) {
    let boardInfo = {
      column: columnTitle,
    }

    boards.push(boardInfo)
    localStorage.setItem('Boards', JSON.stringify(boards))
  }

  showColumn()
  showCards()

  cancelBtn.click()
})

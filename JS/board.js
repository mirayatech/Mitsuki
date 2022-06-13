const card = document.querySelectorAll('.card')
const firstColumn = document.querySelector('.first-column')
const columnStatus = document.querySelectorAll('.column')
const addCardBtn = document.querySelector('.first-column-button')
const addCardModule = document.querySelector('.board-page .popup-box')
const addCardModuleCloseIcon = document.querySelector('.board-page .fa-plus')
const addCardModuleBtn = document.querySelector('.board-page .popup-btn')
const cardTitleTag = document.querySelector('.board-page #title-description')
const cardDescriptionTag = document.querySelector(
  '.board-page #description-input'
)

// const cards = JSON.parse(localStorage.getItem('cards') || '[]')

let draggableCard = null

// const cardMonths = [
//   'January',
//   'Febuary',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ]



addCardModuleBtn.addEventListener('click', createCard)

card.forEach((card) => {
  card.addEventListener('dragstart', dragStart)
  card.addEventListener('dragend', dragEnd)
})

columnStatus.forEach((status) => {
  status.addEventListener('dragover', dragOver)
  status.addEventListener('dragenter', dragEnter)
  status.addEventListener('dragleave', dragLeave)
  status.addEventListener('drop', dragDrop)
})

addCardBtn.addEventListener('click', () => {
  addCardModule.classList.add('show')
  cardTitleTag.value = ''
  cardDescriptionTag.value = ''
})

addCardModuleCloseIcon.addEventListener('click', () => {
  addCardModule.classList.remove('show')
  cardTitleTag.value = ''
  cardDescriptionTag.value = ''
})

function dragStart() {
  draggableCard = this
  setTimeout(() => {
    this.style.display = 'none'
  }, 0)
}

function dragEnd() {
  draggableCard = null
  setTimeout(() => {
    this.style.display = 'block'
  }, 0)
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter() {
  this.style.border = '2px dashed  #507CA6'
  this.style.borderRadius = '15px'
  this.style.padding = '15px'
}

function dragLeave() {
  this.style.border = 'none'
  console.log('dragLeave')
}

function dragDrop() {
  this.style.border = 'none'
  this.appendChild(draggableCard)
  console.log('dropped')
}

// create card


function createCard(event) {
  event.preventDefault()

  const card_div = document.createElement('div')
  card_div.classList.add('card')
  card_div.setAttribute('draggable', 'true')

  const card_details = document.createElement('div')
  card_details.classList.add('card-details')
  card_div.appendChild(card_details)

  const card_title = document.createElement('h3')
  card_title.innerText = cardTitleTag.value
  card_details.appendChild(card_title)

  const card_description = document.createElement('p')
  card_description.innerText = cardDescriptionTag.value
  card_details.appendChild(card_description)

  const card_line = document.createElement('div')
  card_line.classList.add('line')
  card_div.appendChild(card_line)

  const card_bottom_details = document.createElement('div')
  card_bottom_details.classList.add('bottom-details')
  card_div.appendChild(card_bottom_details)

  const card_date = document.createElement('span')
  card_date.classList.add('date')
  card_bottom_details.appendChild(card_date)

  const card_setting = document.createElement('div')
  card_setting.classList.add('settings')
  card_bottom_details.appendChild(card_setting)

  const card_setting_icon = document.createElement('i')
  card_setting_icon.classList.add('fa-solid', 'fa-ellipsis')
  card_setting.appendChild(card_setting_icon)

  const card_setting_menu = document.createElement('ul')
  card_setting_menu.classList.add('settings-menu')
  card_setting.appendChild(card_setting_menu)

  const edit_btn = document.createElement('li')
  edit_btn.classList.add('edit-btn')
  card_setting_menu.appendChild(edit_btn)

  const edit_btn_icon = document.createElement('i')
  edit_btn_icon.classList.add('fa-solid', 'fa-pen')
  edit_btn.appendChild(edit_btn_icon)

  const delete_btn = document.createElement('li')
  delete_btn.classList.add('delete_btn')
  card_setting_menu.appendChild(delete_btn)

  const delete_btn_icon = document.createElement('i')
  delete_btn_icon.classList.add('fa-solid', 'fa-trash')
  delete_btn_icon.appendChild(delete_btn)

  firstColumn.appendChild(card_div)

  card_div.addEventListener('dragstart', dragStart)
  card_div.addEventListener('dragend', dragEnd)
  addCardModuleCloseIcon.click()
}



// addCardModuleBtn.addEventListener('click', (event) => {
//     event.preventDefault()

//     const cardTitle = cardTitleTag.value
//     const cardDescription = cardDescriptionTag.value
//     const cardDate = new Date()

//     const date = cardDate.getDate()
//     const month = cardMonths[cardDate.getMonth()]
//     const year = cardDate.getFullYear()

//     if (cardTitle || cardDescription) {
//         let cardInfo = {
//             title: cardTitle,
//             description: cardDescription,
//             date: `${month} ${date}, ${year} `,
//         }

//         console.log(cardInfo)

//         cards.push(cardInfo)
//         localStorage.setItem('cards', JSON.stringify(cards))
//         addCardModuleCloseIcon.click()

//     }
// })

const addCardButton = document.querySelector('.first-column-button')
const cardPopupModule = document.querySelector('.board-page .popup-box')
const cardPopupCloseIcon = document.querySelector('.board-page header i')
const cardTitleTag = document.querySelector('.board-page #title-description')
const cardDescriptionTag = document.querySelector(
  '.board-page #description-input'
)
const addCardPopupModuleBtn = document.querySelector('.board-page .popup-btn')
const cardMonths = [
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

const cards = JSON.parse(localStorage.getItem('cards') || '[]')

addCardButton.addEventListener('click', () => {
  cardPopupModule.classList.add('show')
  cardTitleTag.focus()
})

cardPopupCloseIcon.addEventListener('click', () => {
  cardPopupModule.classList.remove('show')
  cardDescriptionTag.value = ''
  cardTitleTag.value = ''
})

function showCards() {
  document.querySelectorAll('.card').forEach((card) => card.remove())
  cards.forEach((card) => {
    let liCardTag = `<li class="card">
    <div class="card-details">
      <h3 class="title">${card.title}</h3>
      <p>${card.description}</p>
    </div>
    <div class="line"></div>
    <div class="bottom-details">
      <span class="date">${card.date}</span>
      <div class="settings">
        <i
          class="fa-solid fa-ellipsis"
          onclick="showMenu(this)"
        ></i>
        <ul class="settings-menu">
          <li class="edit-btn">
            <i class="fa-solid fa-pen"> </i> Edit
          </li>
          <li class="delete-btn">
            <i class="fa-solid fa-trash"> </i> Delete
          </li>
        </ul>
      </div>
    </div>
  </li>`

    document
      .querySelector('.first-column-list')
      .insertAdjacentHTML('beforeend', liCardTag)
  })
}

showCards()

addCardPopupModuleBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let cardTitle = cardTitleTag.value
  let cardDescription = cardDescriptionTag.value

  let cardDate = new Date()
  let month = cardMonths[cardDate.getMonth()]
  let day = cardDate.getDate()
  let year = cardDate.getFullYear()

  if (cardTitle || cardDescription) {
    let cardInfo = {
      status: '',
      title: cardTitle,
      description: cardDescription,
      date: `${month} ${day}, ${year}`,
    }
    console.log(cardInfo)
    cards.push(cardInfo)
  }

  localStorage.setItem('cards', JSON.stringify(cards))
  showCards()
  cardPopupCloseIcon.click()
})

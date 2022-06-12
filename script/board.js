// const addCardButton = document.querySelector('.first-column-button')
// const cardPopupModule = document.querySelector('.board-page .popup-box')
// const cardPopupTitle = document.querySelector('.board-page header p')
// const cardPopupCloseIcon = document.querySelector('.board-page header i')
// const cardTitleTag = document.querySelector('.board-page #title-description')
// const cardDescriptionTag = document.querySelector(
//   '.board-page #description-input'
// )
// const addCardPopupModuleBtn = document.querySelector('.board-page .popup-btn')
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

// const cards = JSON.parse(localStorage.getItem('cards') || '[]')
// let isUpdateCard = false
// let updateCardId = false
// addCardButton.addEventListener('click', () => {
//   cardTitleTag.focus()
//   cardPopupModule.classList.add('show')
//   cardTitleTag.focus()
// })

// cardPopupCloseIcon.addEventListener('click', () => {
//   cardPopupModule.classList.remove('show')
//   cardDescriptionTag.value = ''
//   cardTitleTag.value = ''

//   cardPopupTitle.innerText = 'Add a new card'
//   addCardPopupModuleBtn.innerText = 'Add card'
// })

// function showCards() {
//   document.querySelectorAll('.card').forEach((card) => card.remove())
//   cards.forEach((card, index) => {
//     let liCardTag = `<li draggable="true" class="card">
//                         <div class="card-details">
//                           <h3 class="title">${card.title}</h3>
//                           <p>${card.description}</p>
//                         </div>
//                         <div class="line"></div>
//                         <div class="bottom-details">
//                           <span class="date">${card.date}</span>
//                           <div class="settings">
//                               <i class="fa-solid fa-ellipsis" onclick="showMenu(this)"></i>
//                           <ul class="settings-menu">
//                               <li onclick="updateCard(${index}, '${card.title}', '${card.description}')" class="edit-btn"><i class="fa-solid fa-pen"></i> Edit</li>
//                               <li onclick="deleteCard(${index})" class="delete-btn"><i class="fa-solid fa-trash"></i>  Delete</li>
//                           </ul>
//                         </div>
//                         </div>
//                       </li>`

//     document.querySelector('.first-column-list').insertAdjacentHTML('beforeend', liCardTag)
//   })
// }

// showCards()



// function showMenu(element) {
//   element.parentElement.classList.add('show')
//   document.addEventListener('click', (e) => {
//     if (e.target.tagName != 'I' || e.target != element) {
//       element.parentElement.classList.remove('show')
//     }
//   })
// }

// function deleteCard(noteId) {
//   cards.splice(noteId, 1)
//   localStorage.setItem('cards', JSON.stringify(cards))
//   showCards()
// }

// function updateCard(cardId, title, description) {
//   isUpdateCard = true
//   updateCardId = cardId
//   addCardButton.click()
//   cardDescriptionTag.value = description
//   cardTitleTag.value = title
//   cardPopupTitle.innerText = 'Update a card'
//   addCardPopupModuleBtn.innerText = 'Update card'
//   console.log(cardId, title, description)
// }

// addCardPopupModuleBtn.addEventListener('click', (event) => {
//   event.preventDefault()

//   let cardTitle = cardTitleTag.value
//   let cardDescription = cardDescriptionTag.value

//   let cardDate = new Date()
//   let month = cardMonths[cardDate.getMonth()]
//   let day = cardDate.getDate()
//   let year = cardDate.getFullYear()

//   let cardInfo = {
//     status: '',
//     title: cardTitle,
//     description: cardDescription,
//     date: `${month} ${day}, ${year}`,
//   }

//   if (!isUpdateCard) {
//     cards.push(cardInfo)
//   } else {
//     cards[updateCardId] = cardInfo
//   }

//   localStorage.setItem('cards', JSON.stringify(cards))
//   showCards()
//   cardPopupCloseIcon.click()
// })

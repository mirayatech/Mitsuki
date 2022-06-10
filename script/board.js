const addCardButton = document.querySelector('.first-column-button')
const cardPopupModule = document.querySelector('.board-page .popup-box')
const cardPopupCloseIcon = document.querySelector('.board-page header i')
const cardTitleTag = document.querySelector('.board-page #title-description')
const cardDescriptionTag = document.querySelector('.board-page #description-input')
const addCardPopupModuleBtn = document.querySelector('.board-page .popup-btn')



addCardButton.addEventListener('click', () => {
  cardPopupModule.classList.add('show')
  cardTitleTag.focus()
})

cardPopupCloseIcon.addEventListener('click', () => {
  cardPopupModule.classList.remove('show')
  cardDescriptionTag.value = ''
  cardTitleTag.value = ''

})




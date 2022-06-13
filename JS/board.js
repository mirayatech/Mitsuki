const card = document.querySelectorAll('.card')
const columnStatus = document.querySelectorAll('.column')
const addCardBtn = document.querySelector('.first-column-button')
const addCardModule = document.querySelector('.board-page .popup-box')
const addCardModuleCloseIcon = document.querySelector('.board-page .fa-plus')
const addCardModuleBtn = document.querySelector('.board-page .popup-btn')
const cardTitleTag = document.querySelector('.board-page #title-description')
const cardDescriptionTag = document.querySelector(
    '.board-page #description-input'
)

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

let draggableTodo = null

const cards = JSON.parse(localStorage.getItem('cards') || '[]')

card.forEach((todo) => {
    todo.addEventListener('dragstart', dragStart)
    todo.addEventListener('dragend', dragEnd)
})

columnStatus.forEach((status) => {
    status.addEventListener('dragover', dragOver)
    status.addEventListener('dragenter', dragEnter)
    status.addEventListener('dragleave', dragLeave)
    status.addEventListener('drop', dragDrop)
})

addCardBtn.addEventListener('click', () => {
    addCardModule.classList.add('show')
})

addCardModuleCloseIcon.addEventListener('click', () => {
    addCardModule.classList.remove('show')
})

function dragStart() {
    draggableTodo = this
    setTimeout(() => {
        this.style.display = 'none'
    }, 0)
}

function dragEnd() {
    draggableTodo = null
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
    this.appendChild(draggableTodo)
    console.log('dropped')
}

addCardModuleBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const cardTitle = cardTitleTag.value
    const cardDescription = cardDescriptionTag.value
    const cardDate = new Date()

    const date = cardDate.getDate()
    const month = cardMonths[cardDate.getMonth()]
    const year = cardDate.getFullYear()

    if (cardTitle || cardDescription) {
        let cardInfo = {
            title: cardTitle,
            description: cardDescription,
            date: `${month} ${date}, ${year} `,
        }

        console.log(cardInfo)

        cards.push(cardInfo)
        localStorage.setItem('cards', JSON.stringify(cards))
        addCardModuleCloseIcon.click()
        showCards()
    }
})

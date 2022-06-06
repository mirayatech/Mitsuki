const addNote = document.querySelector('.circle')
const closeIcon = document.querySelector('header i')
const addNoteBtn = document.querySelector('.note-page .popup-btn')
const addNotePopup = document.querySelector('.note-page .popup-box')
const titleTag = document.querySelector('.note-page #title-description')
const descTag = document.querySelector('.note-page #description-input')

const months = [
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

const notes = JSON.parse(localStorage.getItem('notes') || '[]')

// Show popup
addNote.addEventListener('click', () => {
    addNotePopup.classList.add('show')
})

// close the popup
closeIcon.addEventListener('click', () => {
    addNotePopup.classList.remove('show')
})

// Add Note information to Local storage
addNoteBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let noteTitle = titleTag.value
    let noteDesc = descTag.value
    // Get the date
    let dateObj = new Date()
    let month = months[dateObj.getMonth()]
    let day = dateObj.getDate()
    let year = dateObj.getFullYear()
    let noteInfo = {
        title: noteTitle,
        description: noteDesc,
        date: `${month} ${day}, ${year}`,
    }

    if (noteTitle || noteDesc) {
        console.log(noteInfo)
    }

    notes.push(noteInfo)

    localStorage.setItem('notes', JSON.stringify(notes))

    closeIcon.click()
})

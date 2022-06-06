const addNote = document.querySelector('.circle')
const addBox = document.querySelector('.add-note')
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

function showNotes() {
    notes.forEach((note) => {
        let liTag = ` <li class="note-card">
        <div class="details">
            <h3 class="title">${note.title}</h3>
            <p>${note.description}</p>
        </div>
        <div class="line"></div>
        <div class="bottom-details">
            <span class="date">${note.date}</span>
            <div class="settings"><i class="fa-solid fa-ellipsis" onclick="showMenu(this)"></i>
                <ul class="settings-menu">
                    <li class="edit-btn"> <i class="fa-solid fa-pen"> </i> Edit </li>
                    <li class="delete-btn"> <i class="fa-solid fa-trash"> </i> Delete </li>
                </ul>
            </div>
        </div>
    </li> `

        addBox.insertAdjacentHTML('afterend', liTag)
    })
}

showNotes()

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

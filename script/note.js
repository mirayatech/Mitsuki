const addNote = document.querySelector('.circle')
const addBox = document.querySelector('.add-note')
const closeIcon = document.querySelector('header i')
const addNoteBtn = document.querySelector('.note-page .popup-btn')
const popupTitle = document.querySelector('.note-page .popup-title')
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

let isUpdate = false,
    updateId

// Show popup
addNote.addEventListener('click', () => {
    isUpdate = false
    titleTag.focus()
    addNotePopup.classList.add('show')
})

// Close the popup
closeIcon.addEventListener('click', () => {
    addNotePopup.classList.remove('show')
    titleTag.value = ''
    descTag.value = ''
})

function showNotes() {
    document.querySelectorAll('.note-card').forEach((note) => note.remove())

    notes.forEach((note, index) => {
        let liTag = `<li class="note-card">
                        <div class="details">
                            <h3 class="title">${note.title}</h3>
                            <p>${note.description}</p>
                        </div>
                        <div class="line"></div>
                        <div class="bottom-details">
                            <span class="date">${note.date}</span>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
                            <ul class="settings-menu">
                                <li onclick="updateNote(${index}, '${note.title}', '${note.description}')" class="edit-btn"><i class="fa-solid fa-pen"> </i> Edit </li>
                                <li onclick="deleteNote(${index})" class="delete-btn"><i class="fa-solid fa-trash"> </i> Delete </li>
                            </ul>
                        </div>
                     </div>
            </li> `

        addBox.insertAdjacentHTML('afterend', liTag)
    })
}

function deleteNote(noteId) {
    notes.splice(noteId, 1)
    localStorage.setItem('notes', JSON.stringify(notes))
    showNotes()
}

function showMenu(element) {
    element.parentElement.classList.add('show')
    document.addEventListener('click', (e) => {
        // removing show class from the settings menu on document click
        if (e.target.tagName != 'I' || e.target != element) {
            element.parentElement.classList.remove('show')
        }
    })
}

function updateNote(noteId, title, desc) {
    isUpdate = true
    updateId = noteId
    addNote.click()
    titleTag.value = title
    descTag.value = desc
    popupTitle.innerText = 'Update Note'
    addNoteBtn.innerText = 'Update note'
    console.log(noteId, title, desc)
}

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

    if (!isUpdate) {
        notes.push(noteInfo)
    } else {
        isUpdate = false
        notes[updateId] = noteInfo // updating specifed note
    }

    localStorage.setItem('notes', JSON.stringify(notes))
    closeIcon.click()
    showNotes()
})

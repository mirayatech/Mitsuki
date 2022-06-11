const addNoteBtn = document.querySelector('.circle')
const addNoteBox = document.querySelector('.add-note')
const notePopupCloseIcon = document.querySelector('header i')
const notePopupTitle = document.querySelector('.note-page .popup-title')
const addNotePopupModule = document.querySelector('.note-page .popup-box')
const noteTitleTag = document.querySelector('.note-page #title-description')
const addNotePopupModuleBtn = document.querySelector('.note-page .popup-btn')
const noteDescriptionTag = document.querySelector(
  '.note-page #description-input'
)

const noteMonths = [
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
// note updated, isUpdate value set to false, because user user try to add new note
let isUpdate = false
let updateId = false

addNoteBtn.addEventListener('click', () => {
  addNotePopupModule.classList.add('show')
  noteTitleTag.focus()
})

// Close the popup
notePopupCloseIcon.addEventListener('click', () => {
  isUpdate = false
  noteTitleTag.value = ''
  noteDescriptionTag.value = ''
  addNotePopupModule.classList.remove('show')
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
                                <i onclick="showSettingsMenu(this)" class="fa-solid fa-ellipsis"></i>
                            <ul class="settings-menu">
                                <li onclick="updateNote(${index}, '${note.title}', '${note.description}')"  class="edit-btn"><i class="fa-solid fa-pen"> </i> Edit </li>
                                <li onclick="deleteNote(${index})" class="delete-btn"><i class="fa-solid fa-trash"> </i> Delete </li>
                            </ul>
                        </div>
                     </div>
                 </li>`

    addNoteBox.insertAdjacentHTML('afterend', liTag)
  })
}

showNotes()

function showSettingsMenu(element) {
  element.parentElement.classList.add('show')
  document.addEventListener('click', (e) => {
    // removing show class from the settings menu on document click
    if (e.target.tagName != 'I' || e.target != element) {
      element.parentElement.classList.remove('show')
    }
  })
}

function deleteNote(noteId) {
  notes.splice(noteId, 1)
  localStorage.setItem('notes', JSON.stringify(notes))
  showNotes()
}

function updateNote(noteId, title, desc) {
  isUpdate = true
  updateId = noteId
  addNoteBtn.click()
  noteTitleTag.value = title
  noteDescriptionTag.value = desc
  addNotePopupModuleBtn.innerText = 'Update Note'
  notePopupTitle.innerText = 'Update a Note'
  console.log(noteId, title, desc)
}

// Add Note information to Local storage
addNotePopupModuleBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let noteTitle = noteTitleTag.value
  let noteDescription = noteDescriptionTag.value

  let dateObj = new Date()
  let month = noteMonths[dateObj.getMonth()]
  let day = dateObj.getDate()
  let year = dateObj.getFullYear()

  let noteInfo = {
    title: noteTitle,
    description: noteDescription,
    date: `${month} ${day}, ${year}`,
  }

  if (!isUpdate) {
    notes.push(noteInfo)
  } else {
    isUpdate = false
    notes[updateId] = noteInfo //updating specifed note
  }

  localStorage.setItem('notes', JSON.stringify(notes))
  notePopupCloseIcon.click()
  showNotes()
})

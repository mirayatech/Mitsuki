// Selectors 
const addNote = document.querySelector(".circle");
const addNotePopup = document.querySelector(".note-page .popup-box");

// Show popup
addNote.addEventListener('click', () => {
    addNotePopup.classList.add("show")
});


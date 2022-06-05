// Selectors 
const addNote = document.querySelector(".circle");
const closeIcon = document.querySelector("header i")
const addNotePopup = document.querySelector(".note-page .popup-box");

// Show popup
addNote.addEventListener('click', () => {
    addNotePopup.classList.add("show")
});

closeIcon.addEventListener("click", () => {
    addNotePopup.classList.remove("show")
})

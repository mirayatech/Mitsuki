const cards = document.querySelectorAll(".card");
const columnStatus = document.querySelectorAll(".column");
const addCardModuleBtn = document.querySelector(".first-column-button")
const addCardModule = document.querySelector(".board-page .popup-box")
const addCardModuleCloseIcon = document.querySelector(".board-page .fa-plus")
let draggableTodo = null;

cards.forEach((todo) => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});

columnStatus.forEach((status) => {

    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});

addCardModuleBtn.addEventListener("click", () => {
    addCardModule.classList.add('show')
})

addCardModuleCloseIcon.addEventListener("click", () => {
    addCardModule.classList.remove('show')
})


function dragStart() {
    draggableTodo = this;
    setTimeout(() => {
        this.style.display = "none";
    }, 0);
}

function dragEnd() {
    draggableTodo = null;
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
}



function dragOver(e) {
    e.preventDefault();
    //   console.log("dragOver");
}

function dragEnter() {
    this.style.border = "2px dashed  #507CA6";
    this.style.borderRadius = "15px"
    this.style.padding = "15px"
}


function dragLeave() {
    this.style.border = "none";
    console.log("dragLeave");
}

function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTodo);
    console.log("dropped");
}


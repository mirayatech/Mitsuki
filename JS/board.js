const cards = document.querySelectorAll(".card");
const status = document.querySelectorAll(".column")
let draggableCard = null;

cards.forEach(card => {
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
})

status.forEach(column => {
    column.addEventListener('dragover', dragOver)
    column.addEventListener('dragenter', dragEnter)
    column.addEventListener('dragleave', dragLeave)
    column.addEventListener('drop', dragDrop)

})

function dragStart() {
    draggableCard = this;
    console.log(dragStart)
}

function dragEnd() {
    draggableCard = null;
    console.log(dragEnd)
}

function dragOver(event) {
    event.preventDefault()
}


function dragEnter() {
    console.log('dragover')
}


function dragLeave() {
    console.log('dragover')
}

function dragDrop() {
    console.log('dropped')
}

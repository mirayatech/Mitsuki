const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
})

function dragStart() {
    console.log(dragStart)
}

function dragEnd() {
console.log(dragEnd)
}
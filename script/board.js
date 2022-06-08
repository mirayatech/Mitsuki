const addColumnDiv = document.querySelector('.add-column')
const addColumnBtn = document.querySelector('.add-column-btn')
const entitleButtonDiv = document.querySelector('.entitle-column')
const entitleColumnInput = document.getElementById('entitle-column-input')
const addBtn = document.querySelector('.add-btn')
const cancelBtn = document.querySelector('.cancle-column-btn')

addColumnDiv.addEventListener('click', () => {
    entitleButtonDiv.classList.add('show')
    addColumnDiv.classList.add('hide')

})

cancelBtn.addEventListener('click', () => {
    entitleButtonDiv.classList.remove('show')
    addColumnDiv.classList.remove('hide')
})

addBtn.addEventListener('click', () => {
    let columnTitle = entitleColumnInput.value;
    console.log(columnTitle)
})
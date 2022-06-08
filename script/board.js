const addColumn = document.querySelector('.add-column')
const addColumnBtn = document.querySelector('.add-column-btn')
const entitleButtonDiv = document.querySelector('.entitle-column')
const entitleColumnInput = document.querySelector('entitle-column-input')
const addBtn = document.querySelector('.add-column-btn')
const cancelBtn = document.querySelector('.cancle-column-btn')

addColumn.addEventListener('click', () => {
    entitleButtonDiv.classList.add('show')
    addColumn.classList.add('hide')

})

cancelBtn.addEventListener('click', () => {
    entitleButtonDiv.classList.remove('show')
    addColumn.classList.remove('hide')
})
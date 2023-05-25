let elForm = document.querySelector('.todo__form')
let elTodoInput = document.querySelector('.todo__input')
let elResultBox = document.querySelector('.result__box')


elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    let inputValue = elTodoInput.value
    let newP = document.createElement('p')
    newP.textContent = inputValue
    elResultBox.appendChild(newP)
    elTodoInput.value = null
})
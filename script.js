// console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    var name = document.getElementById('name').value.trim()
    if(name === ''){
        showError()
    }
})

// function showError() {
//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('error-msg')
//     errorDiv.innerText = 'cannot be blank'

//     var field = document.getElementById('input-field')
//     errorDiv.classList.add('error-msg')
//     errorDiv.innerText = 'cannot be blank'

//     var field = document.getElementById('input-field')
//     field.parentElement.appendChild(errorDiv)
//     field.classList.add('error')
// }
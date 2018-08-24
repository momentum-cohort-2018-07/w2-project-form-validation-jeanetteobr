// console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function () {
    event.preventDefault()

    clearError()

    var inputElements = document.getElementsByTagName('input')

    for (var el of inputElements){
        if(el.value.trim() === ''){
            el.parentElement.classList.add('input-invalid') 
            showErrorMessage(el.parentElement)
            
        } 
         else {
            el.parentElement.classList.add('input-valid')
        }
    }

})

function showErrorMessage(el) {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'Cannot be blank'

    el.appendChild(errorDiv)
}

// function clearErrorMessage(el){
//     var newDiv = document.getElementsByClassName('.error-msg')
//     el.removeElement(newDiv)
// }

function clearError () {
    var errorDivs = document.querySelectorAll('.error-msg')
    for (var errorMsg of errorDivs){
        errorMsg.remove()
    }

    }
  
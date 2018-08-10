// console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function () {
    event.preventDefault()

    var inputElements = document.getElementsByTagName('input')

    for (var el of inputElements){
        if(el.value.trim() === ''){
            el.parentElement.classList.add('input-invalid')
        }

         else {
            el.parentElement.classList.add('input-valid')
        }
    }

})

// function showError() {
//     var errorDiv = document.createElement('div')
//     // field.classList.add('error-msg')

//     var field = document.getElementById('name-field')
//     field.classList.add('input-invalid')
// }
// console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
   
    var inputElements = document.getElementsByTagName('input')
    for (var input of inputElements) {
        console.log(input)
        if(input.value.trim() === ('')) {
            showError(event)  
          } 
}
})

function showError() {
      
    var field = document.querySelector('.input-field')
    field.classList.add('input-invalid')
}
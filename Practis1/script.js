// select all element in js
let form = document.getElementById('form')
let textInput = document.getElementById('text')
let btnInput = document.getElementById('button')


// add event submit for form because when click button submit form is refresh 

form.addEventListener('submit' , e => {
    // add event object
    // Prevent the default form of form
    e.preventDefault();
})
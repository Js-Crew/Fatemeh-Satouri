// select all element in js
let form = document.getElementById("form");
let textInput = document.getElementById("text");
let btnInput = document.getElementById("button");
let ul = document.getElementById("ul");
let deleteBtn = document.querySelector(".delete");

let array = [];
let numbers = [];

// call local storage
checkLocalStorage();

// set item in localStorage
function addNoteToLocalStorage() {
  localStorage.setItem("note", JSON.stringify(array));
}

// add event submit for form because when click button submit form is refresh
form.addEventListener("submit", (e) => {
  // add event object
  // Prevent the default form of form
  e.preventDefault();
});

// add click event for button
btnInput.addEventListener("click", clickButton);
function clickButton() {
  // select input value
  let text = textInput.value;
  // check user input | user can not enter nothing value
  if (text == "") {
    // show alert
    alert("you should add note");
  } else {
    // doing task
    createLi(text);
    addNote(text);
  }
}

// create li function
function createLi(text) {
  let li = document.createElement("li");
  // create span
  let span = document.createElement("span");
  span.innerHTML = text;
  // add delete button
  let a = document.createElement("a");
  // add edit button
  let e = document.createElement("p");
  a.textContent = "🗑️";
  a.classList.add("delete");
  // add delete button to span
  span.append(a);
  // add edit button to span
  e.textContent = "🖋️";
  e.classList.add("delete");
  span.append(e);
  span.setAttribute("data-LSD", "");
  // add span to li
  li.append(span);
  // add li to ul
  ul.append(li);
  // then finish input is clear
  textInput.value = "";
}

// when click on delete button note in clear
ul.addEventListener("click", deleteNote);
function deleteNote(e) {
  console.log(e.target.nodeName);
  let parent = e.target.parentElement;
  if (e.target.nodeName === "A") {
    parent.classList.add("CallLI");
    // when delete in html then delete in localStorage
    array.splice(array.indexOf(parent), 1);
    addNoteToLocalStorage();
  }
}
// when click on edit button note
ul.addEventListener("click", editNote);
function editNote(e) {
  let parent = e.target.parentElement;
  if (e.target.nodeName === "P") {
    let parent = e.target.parentElement;
    let dialog = prompt("enter text:");
    let eFin = (parent.innerText = dialog);

    // when delete in html then delete in localStorage

    addNoteToLocalStorage();
  }
}

// add localStorage|| object include date and LSDId || object add array and set in localStorage
function addNote(text) {
  let l = new Date();
  let obj = {
    note: text,
    date: l,
    id: createLSDId(),
  };

  array.push(obj);
  addNoteToLocalStorage();
}

// create random id by date and alphabet
function createLSDId() {
  let l = new Date();

  let rand = Math.floor(l.getMilliseconds());

  if (!numbers.includes(rand)) {
    numbers.push(rand);
    rand += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    console.log(rand);
  } else {
    alert("id is exist");
  }

  return rand;
}

// check localStorage
function checkLocalStorage() {
  if (!localStorage.getItem("note")) {
    localStorage.setItem("note", JSON.stringify(array));
  } else {
    array = JSON.parse(localStorage.getItem("note")); // Retrieve the data from local storage
  }
}

// add note item in ul
function addNoteToList(note) {
  createLi(note.note); // Create list item for the note
}

array.forEach(addNoteToList);

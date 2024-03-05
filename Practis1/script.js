// select all element in js
let form = document.getElementById("form");
let textInput = document.getElementById("text");
let btnInput = document.getElementById("button");
let ul = document.getElementById("ul");
let array = [];
let numbers = [];

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
  createLi(text);
  addNote(text);
}

// create li function
function createLi(text) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = text;
  let a = document.createElement("a");
  a.textContent = "X";
  a.classList.add("delete");
  span.append(a);
  span.setAttribute("data-LSD", "");
  li.append(span);
  ul.append(li);
  textInput.value = "";
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
  localStorage.setItem("not", JSON.stringify(array));
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
}

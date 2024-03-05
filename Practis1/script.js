// select all element in js
let form = document.getElementById("form");
let textInput = document.getElementById("text");
let btnInput = document.getElementById("button");
let ul = document.getElementById("ul");
let array = [];
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
  li.append(span);
  ul.append(li);
  textInput.value = "";
}
// createLi('jdj')
function addNote(text) {
  let l = new Date();
  let obj = {
    note: text,
    date: l,
    id: 5,
  };

  array.push(obj);
  localStorage.setItem("not", JSON.stringify(array));
}

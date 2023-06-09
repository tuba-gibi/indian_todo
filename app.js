const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
console.log(listContainer);

//! /////////////////////////////    EVENTS EVENTS 🤭     /////////////////////////////////////

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); //?toggle : if the class name exists, remove it; otherwise add it..
    saveData();

  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();

  }
},false);

//! /////////////////////////////    FUNCTIONS     /////////////////////////////////////

// ? we've used it for the button 's onclick , in index
let addTask = function () {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
  };

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
};

function showListData() {
  listContainer.innerHTML = localStorage.getItem("data");
};
showListData()

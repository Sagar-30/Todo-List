let inputText = document.querySelector(".input-text");
let addButton = document.querySelector(".add-button");
let listSection = document.querySelector(".all-list");
let removeButtonP = document.querySelector(".list-count");
let removeAllButton = document.querySelector(".removeAll-btn");

let inputValue;
let inputArr = [];
let i = 0;
function result() {
  //Taking value from user
  inputText.addEventListener("input", () => {
    inputValue = inputText.value;
  });
  //Adding value to array
  addButton.addEventListener("click", () => {
    if (inputValue === undefined) {
      alert("Please enter your task to do.");
    } else {
      let value = { id: i, value: inputValue };
      i++;
      inputArr.push(value);
    }
    inputText.value = "";
    inputValue = undefined;
    addValue(inputArr);
  });
  //Adding value to list
  function addValue(arr) {
    listSection.innerHTML = "";
    let indexNo = 0;
    arr.forEach((item) => {
      let list = document.createElement("section");
      // console.log(len);
      list.innerHTML = `<input type='checkbox' class="input-checkbox"><p class="list-text">${item.value}</p><button id="${indexNo}" class="removeBtn">Remove</button>`;
      indexNo++;
      list.className = "Single-list";
      list.addEventListener("click", () => {});
      listSection.appendChild(list);
    });
    let removeButton = document.querySelectorAll(".removeBtn");
    let checkButton = document.querySelectorAll(".input-checkbox");
    let SingleList = document.querySelectorAll(".Single-list");
    removeButton.forEach((button, index) => {
      button.addEventListener("click", (e) => {
        arr.splice(index, 1);
        addValue(arr);
      });
    });
    checkButton.forEach((button, index) => {
      button.addEventListener("click", (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
          SingleList[index].children[1].classList.add("checkbox-style");
          console.log(SingleList[index].children[1].classList);
        } else {
          SingleList[index].children[1].classList.remove("checkbox-style");
          console.log(SingleList[index].children[1].classList);
        }
      });
    });
    removeButtonP.textContent = `Task Count : ${arr.length}`;
  }
  //Remove All logic
  removeAllButton.addEventListener("click", () => {
    if (inputArr.length > 0) {
      let userConfirmed = confirm("Are you sure you want to delete All items?");
      if (userConfirmed) {
        listSection.innerHTML = "";
        inputArr = [];
        inputText.value = "";
        inputValue = undefined;
        removeButtonP.textContent = `Task Count : 0`;
      }
    } else {
      alert("Yout todo list is empty");
    }
  });
}
result();

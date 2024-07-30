let inputText = document.querySelector(".input-text");
let addButton = document.querySelector(".add-button");
let listSection = document.querySelector(".all-list");
// let removeButton = document.querySelectorAll('.removeBtn')
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
    inputText.value = '';
    inputValue = undefined;
    addValue(inputArr);
  });
  //Adding value to list
  function addValue(arr) {
    listSection.innerHTML = "";
    // console.log(arr);
    let removeitem ='';
    let indexNo = 0;
    arr.forEach((item) => {
      let list = document.createElement("section");
      // console.log(len);
      list.innerHTML = `<p class="list-text">${item.value}</p><button id="${indexNo}" class="removeBtn">Remove</button>`;
      indexNo++;
      list.className = "Single-list";
      list.addEventListener('click',()=>{
        // removeItem = item;
        // console.log("list")
      })
      listSection.appendChild(list);
    });
    let removeButton = document.querySelectorAll('.removeBtn');
    removeButton.forEach((button,index) => {
      button.addEventListener('click', (e) => { 
        arr.splice(index,1);
          addValue(arr);
      });
    });
  }
  //Remove All logic
  removeAllButton.addEventListener("click", () => {
    let userConfirmed = confirm('Are you sure you want to delete All items?');
    if (userConfirmed) {
      listSection.innerHTML = "";
      inputArr = [];
      inputText.value = '';
      inputValue = undefined;
    }
  });
}
result();

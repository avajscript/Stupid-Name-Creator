// Variables
window.onload = () => {
  const submit = document.querySelector("#submit");
  const first = document.querySelector("#first");
  const last = document.querySelector("#last");
  const clear = document.querySelector("#clear");
  const enterName = document.querySelector("#sub-header");
  const inputContainer = document.querySelector(".input-container");
  const nameList = [];
  const storage = localStorage;
  (function () {
    Object.keys(localStorage).forEach(function (key) {
      let name = localStorage.getItem(key);
      nameList.push(JSON.parse(name));
    });
  })();
  // Functions
  function showInputField() {
    inputContainer.classList.toggle("show-input");
  }
  function checkFields() {
    if (first.value != "" && last.value != "") {
      let name = { first: first.value, last: last.value };
      localStorage.setItem(`Name-${nameList.length + 1}`, JSON.stringify(name));

      nameList.push(name);
      console.log(nameList);
    } else {
      console.log("c");
    }
  }

  function clearStorage() {
    localStorage.clear();
    nameList = [];
  }
  function clearInputFields() {
    first.value = "";
    last.value = "";
  }

  // Events

  submit.addEventListener("click", checkFields);
  clear.addEventListener("click", clearInputFields);
  enterName.addEventListener("click", showInputField);
};

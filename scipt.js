let sadam = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let text = ""; // Changed variable name from 'string' to 'text'
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      text = eval(text);
      sadam.value = text;
    } else if (e.target.innerHTML == "AC") {
      text = "";
      sadam.value = text;
    } else if (e.target.innerHTML == "DEL") {
      text = text.substring(0, text.length - 1);
      sadam.value = text;
    } else {
      text += e.target.innerHTML;
      sadam.value = text;
    }
  });
});

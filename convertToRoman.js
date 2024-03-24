// Function declaration for converting any decimal number into Roman numeral.
function convertToRoman(num) {
  let result = "";
  if (num >= 1000) {
    for (let i = 1; i <= Math.floor(num / 1000); i++) {
      result = result + "M";
    }
    num = num % 1000;
  }
  if (num >= 900) {
    result = result + "CM";
    num = num % 900;
  }
  if (num >= 500) {
    result = result + "D";
    num = num % 500;
  }
  if (num >= 400) {
    result = result + "CD";
    num = num % 400;
  }
  if (num >= 100) {
    for (let i = 1; i <= Math.floor(num / 100); i++) {
      result = result + "C";
    }
    num = num % 100;
  }
  if (num >= 90) {
    result = result + "XC";
    num = num % 90;
  }
  if (num >= 50) {
    result = result + "L";
    num = num % 50;
  }
  if (num >= 40) {
    result = result + "XL";
    num = num % 40;
  }
  if (num >= 10) {
    for (let i = 1; i <= Math.floor(num / 10); i++) {
      result = result + "X";
    }
    num = num % 10;
  }
  if (num == 9) {
    result = result + "IX";
  }
  if (num >= 5 && num < 9) {
    result = result + "V";
    for (let i = 1; i <= num - 5; i++) {
      result = result + "I";
    }
  }
  if (num == 4) {
    result = result + "IV";
  }
  if (num >= 1 && num < 4) {
    for (let i = 1; i <= num; i++) {
      result = result + "I";
    }
  }
  return result;
}

//UI Logic for implementing convertToRoman function.
let input = document.querySelector("#input");
let btn = document.querySelector("button");
let output = document.querySelector("#output");

function convertFromUI() {
  let num = input.value;
  if (num > 3999 || num < 1) {
    alert("Please enter a number less than 4000");
  } else {
    output.innerText = convertToRoman(num);
    console.log(output.innerText);
  }
}
btn.addEventListener("click", () => {
  convertFromUI();
});
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    convertFromUI();
  }
});

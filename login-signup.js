let mainContent = document.getElementById("main-doc");
let firstElement = document.createElement("div");
firstElement.classList.add("first-header");
mainContent.appendChild(firstElement);

let firstName = "Aadithya";
let lastName = "Hariharan";
let secondElement = document.createElement("h1");
secondElement.innerHTML = `${firstName}${lastName}`;
firstElement.appendChild(secondElement);

let numberList = document.createElement("ul");
thirdElement.appendChild(numberList);

largestNumber.forEach((element) => {
  console.log(element);
  let listNumber = document.createElement("li");
  listNumber.style.listStyleType = "none";
  listNumber.innerHTML = element;
  numberList.appendChild(listNumber);
});

let reverseName = "Hello World";
const newName = reverseName.split(" ").reverse().join(" ");
console.log(newName);

function reversel(str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
}

let largeNumbers = [10, 32, 47, 1, 25, 4, 99, 22, 14, 30];
let numberbelow = [];
let numberabove = [];
const newNum = largeNumbers.filter((item) => item < 10);
console.log(newNum);

for (let i = 0; i < largeNumbers.length; i++) {
  if (largeNumbers[i] <= 10) {
    numberbelow.push(largeNumbers[i]);
  } else {
    numberabove.push(largeNumbers[i]);
  }
}

let mainContent = document.getElementById("main-doc");
let firstElement = document.createElement("div");
firstElement.classList.add("first-header");
mainContent.appendChild(firstElement);

let firstName = "Aadithya";
let lastName = "Hariharan";
let secondElement = document.createElement("h1");
secondElement.innerHTML = `${firstName}${lastName}`;
firstElement.appendChild(secondElement);

let largestNumber = [24, 88, 99, 11, 55, 66, 21, 1, 15, 12, 13];
let newNumber = largestNumber.map((item) => item * 2);
// console.log(newNumber);
let thirdElement = document.createElement("div");
thirdElement.classList.add("list-name");
thirdElement.setAttribute("id", "list");
firstElement.appendChild(thirdElement);

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
console.log(reversel(largestNumber));

// function printDate() {
//   let date = new Date();
//   let hh = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();
//   let session = "AM";

//   if (hh === 0) {
//     hh = 12;
//   } else if (hh > 12) {
//     hh = hh - 12;
//     session = "PM";
//   }

//   hh = hh < 10 ? "0" + hh : hh;
//   min = min < 10 ? "0" + min : min;
//   sec = sec < 10 ? "0" + sec : sec;
//   let time = hh + ":" + min + ":" + sec + " " + session;
//   let timeElement = document.createElement("div");
//   timeElement.classList.add("clock");
//   timeElement.innerText = time;
//   timeElement.textContent = time;

//   setTimeout(function () {
//     printDate();
//   }, 1000);
//   firstElement.appendChild(timeElement);
//   //   console.log(time,t);
// }

// printDate();

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

console.log(numberbelow);
console.log(numberabove);


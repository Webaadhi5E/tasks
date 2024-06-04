let mainContent = document.getElementById("main-doc");
let firstElement = document.createElement("div");
firstElement.classList.add("first-header");
mainContent.appendChild(firstElement);

let firstName = "Aadithya";
let lastName = "Hariharan";
let secondElement = document.createElement("h1");
secondElement.classList.add('header');
secondElement.innerHTML = `${firstName}${lastName}`;
firstElement.appendChild(secondElement);

let contentPage = document.createElement('div');

firstElement.appendChild(contentPage);

let palNumber=121;

function isPalindrome(x) {
    let numString = x.toString();
    let result = numString.split("").reverse().join("");
    return numString === result;
}

console.log(isPalindrome(palNumber));
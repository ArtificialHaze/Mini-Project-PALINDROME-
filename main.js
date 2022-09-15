// VARIABLES

const btn = document.querySelector(".main__container--btn");
const resultElement = document.querySelector(".main__container--result");

// FUNCTIONS

const checkForPalindrome = () => {
  const wordElement = document.querySelector(
    ".main__container--inputText"
  ).value;
  let len = wordElement.length;
  let startElement = wordElement
    .substring(0, Math.floor(len / 2))
    .toLowerCase();
  let endElement = wordElement
    .substring(len - Math.floor(len / 2))
    .toLowerCase();
  let checkPalindromeElement = [...endElement].reverse().join("");
  if (startElement === checkPalindromeElement) {
    resultElement.innerHTML = `${wordElement.toUpperCase()} is a Palindrome`;
    resultElement.style.color = "limegreen";
  } else {
    resultElement.innerHTML = `${wordElement.toUpperCase()} is NOT a Palindrome`;
    resultElement.style.color = "crimson";
  }
};

// EVENT LISTENERS

btn.addEventListener("click", checkForPalindrome);

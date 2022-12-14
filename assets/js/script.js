// Stores user number input:
var charLength;

// setting all cases to true unless user input on confirm boxes changes value.
var checkUpper = true;
var checkLower = true;
var checkNum = true;
var checkChar = true;

// Generate Button 
var generateBtn = document.querySelector("#generate");
// Copy button
var copyPassword = document.querySelector("#copyInfo")
// Clear button
var clearPassword = document.querySelector("#clearInfo")

// Criteria Arrays ("i" & "l" removed as they look similar in certain fonts ). isUpper converts islower into uppercase.
var isLower = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var isUpper = isLower.map(element => {return element.toUpperCase();});
var isNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var isChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-"];
// declaring the finalCriteria array and password array - values populated with functions below.
var finalCriteria = []
var password = ""

// Requests user input on criteria for password (uppercase,lowercase, special chars or numbers)
function addCriteria() {
  checkUpper = confirm("Do you want your password to contain Uppercase?");
  checkLower = confirm("Do you want your password to contain Lowercase?");
  checkNum = confirm("Do you want your password to contain Numbers?");
  checkChar = confirm("Do you want your password to contain Special Characters?");
}
// if user failed to select any criteria alert and rerun the prompts
function checkCriteria() {
  if (!checkUpper && !checkLower && !checkNum && !checkChar) {
    alert("You must select ok for at least one of the following criteria"), addCriteria();
  }
}

// function to prompt the user to input a password length
function checkPrompt() {
  clearFunc()
  charLength = prompt("Choose a password length");
  var checkInput = parseInt(charLength)
  //checks if value is number. If not reload prompt
  if (Number.isNaN(checkInput)) { 
    alert("Input must be a Number"), checkPrompt()
  } else if (charLength < 8 || charLength > 128) {
    // checks length of input. if criteria not met reload.
    alert("Minimum 8 & Maximum 128 character length"), checkPrompt();
  } else { 
    addCriteria()
    checkCriteria()
};
}

// Generate password function - if statements to concatenate arrays selected arrays into one. // return the password that meets criteria
function generatePassword() {
  if (checkUpper === true) {
    finalCriteria = finalCriteria.concat(isUpper)
  }
  if (checkLower === true) {
    finalCriteria = finalCriteria.concat(isLower)
  }
  if (checkNum === true) {
    finalCriteria = finalCriteria.concat(isNum)
  }
  if (checkChar === true) {
    finalCriteria = finalCriteria.concat(isChar)
  }
  for (var i = 0; i < charLength; i++) {
    password += finalCriteria[Math.floor(Math.random() * finalCriteria.length)];
  } return password  
}

// Write password to the #password input
function writePassword() {
  checkPrompt()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Function to copy generated password to clipboard. 
function copyFunc() {
  var copyToClipboard = password;
  navigator.clipboard.writeText(copyToClipboard)
}

// Function to copy generated password to clipboard. 
function clearFunc() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  finalCriteria = [];
  password = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Add event listener to copy to clipboard.
copyPassword.addEventListener("click", copyFunc)

// Add event listener to clear generated password.
clearPassword.addEventListener("click", clearFunc)


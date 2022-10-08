// Stores user number input:
var charLength;
// setting all cases to true unless user input on confirm boxes changes value.
var checkUpper = true;
var checkLower = true;
var checkNum = true;
var checkChar = true;
// Generate Button 
var generateBtn = document.querySelector("#generate");
// Criteria Arrays ("i" & "l" removed as they look similar in certain fonts )
var isLower = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Converts the lowercase array to uppercase
var isUpper = isLower.map(element => {return element.toUpperCase();});
var isNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var isChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-"];
// Concatenate selected arrays to one final array
var finalCriteria = []
var password = ""
// Requests user input on  
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
 
function checkPrompt() {
  //  Asks user for password length input
  charLength = prompt("Choose a password length");
  // Checks if input is meets character length criteria, if not it recalls the function after alert has been acknowledged 
  if (charLength < 8 || charLength > 128) {
    alert("Minimum 8 & Maximum 128 character length"), checkPrompt();
  } else { 
    addCriteria()
    checkCriteria()
};
}

//if statements to concatenate arrays into one. 
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




function generatePassword() {
  for (var i = 0; i < charLength; i++) {
    password += finalCriteria[Math.floor(Math.random() * finalCriteria.length)];
  } return password  
}

checkPrompt()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


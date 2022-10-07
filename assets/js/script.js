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
var isUpper = isLower.map(element => {
  return element.toUpperCase();
});
var isNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var isChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-"];
// Concatenate selected arrays to one final array
var finalCriteria = []
// Final Password 
var finalPassword = ""

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

// !change the name of this function 
function generatePassword() {
  //  Asks user for password length input
  charLength = prompt("Choose a password length");
  // Checks if input is meets character length criteria, if not it recalls the function after alert has been acknowledged 
  if (charLength < 8 || charLength > 128) {
    alert("Minimum 8 & Maximum 128 character length"), generatePassword();
  // TODO } else if Need to add an else if to check if the input is !integer
  
  } else {
    // 
    addCriteria()
    checkCriteria()
};
}

generatePassword()

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

console.log(finalCriteria)

for (var i = 0; i < charLength; i++) {
  var finalPassword = finalCriteria[Math.floor(Math.random() * finalCriteria.length)];
  console.log(finalPassword);
}
// DONE: WE NEED A WAY TO STORE THE USER'S CHOICE FOR LENGTH OF PASSWORD 
// TODO: PROMPT THE USER FOR THE LENGTH OF THE PASSWORD
  //IF THE USER CHOOSES A NUMBER OUTSIDE THE ACCEPTABLE RANGE, NEED TO DO SOMETHING
  //ALERT THAT THE VALIDATION FAILED
  //RETURN BACK TO THE PROMPT OR
    //EXIT OUT OF THE FUNCTION
    // !Need to add something that checks for int values only.

// DONE: NEED VARIABLE STORING EACH OF OUR CHARACTER SETS -- ARRAYS?"
    // UPPERCASE
    // LOWERCASE
    // NUMBERS
    // SPECIAL CHARACTERS
// DONE: NEED A VARIABLE TO STORE THE USERS CHOICE FOR WHETHER TO USE EACH CHARACTER SET
// DONE: IF THE USER FAILS TO SELECT ANY CHARACTER, NEED TO DO SOMETHING
  //ALERT THAT THE VALIDATION FAILED
  //RETURN BACK TO THE PROMPT OR
    //EXIT OUT OF THE FUNCTION
// TODO: GENERATE A RANDOM CHARACTER FROM THE ARRAY
  //MAY BE SOME IF STATEMENTS REGARDING WHICH CHARACTER ARRAYS WERE CHOSEN.
// TODO: Math.random()
  //GENERATE A RANDOM NUMBER TO LINK TO THE INDEX IN THE ARRAY. Math.floor(Math.random() * max); (rounds down. Does the brackets sum first) array.length
  //GRAB THE CHARACTER AT THE RANDOMLY-GENERATED INDEX
  // ADD IT TO THE END OF THE PASSWORD STRING
    //NEED A VARIABLE TO STORE THE GENERATED PASSWORD
// TODO: REPEAT PREVIOUS STEP FOR EACH CHOSEN ARRAY
// TODO: JOIN/CONCATENATE THE UP TO FOUR SELECTED CHARACTER SETS.
// TODO: ITERATE UNTIL PASSWORD.LENGTH === THE LENGTH THE USER CHOSE.
  //GENERATE A RANDOM CHARACTER FROM THE MEGA-ARRAY AND ADD IT TO THE END OF THE PASSWORD STRING ON EACH LOOP.
// TODO: RETURN THE GENERATED PASSWORD

// A FUNCTION CAN CALL ITSELF WINK WINK.

// Write password to the #password input



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
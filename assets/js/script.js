// Assignment Code
var generateBtn = document.querySelector("#generate");

// !GIVEN I need a new, secure password
// !WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// TODO: WE NEED A WAY TO STORE THE USER'S CHOICE FOR LENGTH OF PASSWORD 
// TODO: PROMPT THE USER FOR THE LENGTH OF THE PASSWORD
  //IF THE USER CHOOSES A NUMBER OUTSIDE THE ACCEPTABLE RANGE, NEED TO DO SOMETHING
  //ALERT THAT THE VALIDATION FAILED
  //RETURN BACK TO THE PROMPT OR
    //EXIT OUT OF THE FUNCTION

// TODO: NEED VARIABLE STORING EACH OF OUR CHARACTER SETS -- ARRAYS?"
    // UPPERCASE
    // LOWERCASE
    // NUMBERS
    // SPECIAL CHARACTERS
// TODO: NEED A VARIABLE TO STORE THE USER;S CHOICE FOR WHETHER TO USE EACH CHARACTER SET
// TODO: IF THE USER FAILS TO SELECT ANY CHARACTER, NEED TO DO SOMETHING
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
generateBtn.addEventListener("click", writePassword);

// Setting an empty array which can be populated based on the user selections using the concatinate function.
var finalArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Creating the generatePassword function that is referenced in the writePassword function
function generatePassword() {
  // Creating the various arrays for the different character sets that user will choose for the password generator
  var lowCaseArray = ['a','b','c','d','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numArray = ['0','1','2','3','4','5','6','7','8','9'];
  var specCharArray = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+','`','~','{','}','[',']','|','<','>','?'];
  // Setting an empty array each time the generatePassword function is run
  finalArray = [];
  // Setting the password length variable to be enetered by the user according to the specified prompt
  var pwLength = parseInt(prompt("How many characters would you like your password to contain? (Must be a number between 8 and 128)"));
  // Validation rule establishing that the user entry must be a number between 8-128 or the flow will be stopped from continuing and an alert message will pop up
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("YOUR ENTRY IS INVALID, PLEASE FOLLOW THE PARAMETERS AND TRY AGAIN.");
    return ("PASSWORD GENERATION FAILED");
  }
  // Boolean logic to determine whether the lower case letters will be added to the final array from which the password will be generated
  if (confirm("Click OK to confirm including lower case characters.")) {
    finalArray = finalArray.concat(lowCaseArray);
  }
  // Same as above but for the upper case letters
  if (confirm("Click OK to confirm including upper case characters.")) {
    finalArray = finalArray.concat(upCaseArray);
  }
  // Same as above but for numeric characters
  if (confirm("Click OK to confirm including numeric characters.")) {
    finalArray = finalArray.concat(numArray);
  }
  // Same as above but for special characters
  if (confirm("Click OK to confirm including special characters.")) {
    finalArray = finalArray.concat(specCharArray);
  } else {
    // Establishing what happens if none of the parameters were selected
    alert("YOU MUST SELECT AT LEAST ONE OF THE CHARACTER PARAMETERS. PLEASE TRY AGAIN.");
    return ("PASSWORD GENERATION FAILED");
  }

  // Setting new empty string variable which will populate with the characters from each forloop cycle
  var newlyGeneratedPassword = "";
  // Setting up the forloop to cycle as many times as the number of characters in the password length based on the user's entry prior
    for(var i = 0; i < pwLength; i++) {
        // Generating a random array index integer number based on the length of the final array based on the user's selections prior
        var randomCharacter = Math.floor(Math.random() * finalArray.length);
        // Adding each array index value's corresponding character to the password string
        newlyGeneratedPassword = newlyGeneratedPassword + finalArray[randomCharacter];
    };
    return newlyGeneratedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
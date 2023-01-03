
// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "`", "{", "|", "}", "~"];
var numSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var uppercaseAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// placeholder for selections made by the user to create their password
var passwordCriteria = []
// placeholder for created password
var generatedPass = "";

function createPassword() {
  // Password length prompt
  var passwordLengthQ = prompt("How long would you like your password to be? Please select a number between 8 and 128.");
  console.log(passwordLengthQ);

  // Parsing input from prompt to make sure it is read as a number
  var passwordLength = parseInt(passwordLengthQ)

  if (passwordLength <= 7 || passwordLength >= 129) {
    prompt("Please enter a number between 8 and 128.")
  } 
	else {
    console.log('User would like the password length to be' + passwordLength)
  }

  // Lowercase font prompt
  var lowerCase = window.confirm ("Would you like your password to contain lowercase characters?")
  console.log('User would like to include lowercase letters-' + lowerCase)
  
  // Uppercase font prompt
  var upperCase = window.confirm ("Would you like your password to contain uppercase characters?")
  console.log('User would like to include uppercase letters-' + upperCase)
  
  // Special characters prompt
  var specChar = window.confirm ("Would you like your password to contain special characters(i.e !, #, $, %, &)?")
  console.log('User would like to include Special Characters' + specChar)

  // Numbers prompt
  var numberSelec = window.confirm ("Would you like your password to include numbers?")
  console.log('User would like to include numbers' + numberSelec)

  // Boolean if no criteria are selected then the user will be alerted to choose atleast one
  if (!lowerCase && !upperCase && !specChar && !numberSelec) {
    alert('Please choose atleast one criteria for your password.')
  }

  // if statement using concat to add the selected strings made at the beginning of the code together to make a list of characters fitting user criteria
  if (lowerCase) {
    passwordCriteria = passwordCriteria.concat(lowercaseAlph)
  }
  if (upperCase) {
    passwordCriteria = passwordCriteria.concat(uppercaseAlph)
  }
  if (specChar) {
    passwordCriteria = passwordCriteria.concat(specialChar)
  }
  if (numberSelec) {
    passwordCriteria = passwordCriteria.concat(numSet)
  };
  console.log(passwordCriteria);

  // runs through the selected criteria and randomly generates characters from the string for the password
  for (var i = 0; i < passwordLength; i++) {
    var randGenPass = Math.floor(Math.random() * passwordCriteria.passwordLength) + 1
    // console.log passwordcriteria so that we can call it back and have it show in the secure password section
    console.log(passwordCriteria[randGenPass])
    generatedPass = generatedPass + passwordCriteria[randGenPass]
  }
  // spits back password to user
  return generatedPass

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

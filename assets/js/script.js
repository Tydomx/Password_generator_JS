// Assignment code here
// global vars allowed for the user inputs
  var upperCase=  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var lowerCase= "abcdefghijklmnopqrstuvqxyz".split("")
  var symbol= "!@#$%^&*()_+~\/`|{}[]:;?<>,.-=".split("")
  var number= "1234567890".split("")

// gets user Input between 8 and 128 characters also stops user if input is not number
function userInput() {
  var passwordLength = window.prompt("How long would you like your password to be between 8 and 128 characters?");
      if (isNaN(passwordLength)) {
        alert("Hey you need to enter a number");
        return;
      } 
      // takes password length between 8 and 128 characters
      if (passwordLength < 8 || passwordLength > 128) {
        alert("please enter a password between 8 and 128 characters!");
        return;
      }
      // confirms user with confirm windows for Upper, Lower, Symbols, and numbers
  var upperCaseConfirm = window.confirm("Would you like the password to have upperCase characters?");
  var lowerCaseConfirm = window.confirm("Would you like the password to have lowerCase characters?");
  var symbolConfirm = window.confirm("Would you like the password to have symbols?"); 
  var numberConfirm = window.confirm("Would you like the password to have numbers?");  
  
      if (upperCaseConfirm === false && lowerCaseConfirm === false && symbolConfirm === false && numberConfirm === false) {
        alert("you need to check at least 1 character type!");
        return;
      }
    // stores user data into an object
  var userData = {
    passwordLength: passwordLength,
    lowerCaseConfirm: lowerCaseConfirm,
    upperCaseConfirm: upperCaseConfirm,
    numberConfirm: numberConfirm,
    symbolConfirm: symbolConfirm
  }
  return userData;
}


// randomizes the numbers for you
function randomizer(array) {
  var index = Math.floor(Math.random() * array.length)
  var char = array[index]
  return char;
}

// password is generated depending on user's choices
function generatePassword() {
  var passwordData = userInput();
  // if user choices are true they will be 
  var allUserChoices = [];
    if(passwordData.lowerCaseConfirm === true) {
      allUserChoices = allUserChoices.concat(lowerCase)
    }
    if (passwordData.upperCaseConfirm === true) {
      allUserChoices = allUserChoices.concat(upperCase)
    }
    if (passwordData.symbolConfirm === true) {
      allUserChoices = allUserChoices.concat(symbol)
    }
    if (passwordData.numberConfirm === true) {
      allUserChoices = allUserChoices.concat(number)
    }
    // goes thru user's input and loops thru each of their 'true' choices to randomize a password
    var password = [];
    for (var i=0; i < passwordData.passwordLength; i++) {
      password.push(randomizer(allUserChoices));
    }
    // makes password into a string
    return password.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

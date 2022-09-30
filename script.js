// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ['0','1','2','3','4','5','6','7','8','9']; 
var specialChar = ["!","#","$","%","&","(",")", "*","+","-",".","/", ":",";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
// Series of prompts and confirms that ask for password criteria  
var passwordlength = window.prompt("How long would you like your password to be? It must be between 8 and 128 characters")
var confirmNumbers = window.confirm("Would you like numbers in your password?")
var confirmUpperCase = window.confirm("Would you like upper case letters in your password?")
var confirmLowerCase = window.confirm("Would you like lower case letters in your password?")
var confirmSpecialChar = window.confirm("Would you like special characters in your password?")


// Depending on user input, create a pool of potential characters that can be included,
// take into account password length
var potentialChar = []
if (confirmNumbers === true){
  potentialChar = potentialChar.concat(number)
}
if (confirmUpperCase === true){
  potentialChar = potentialChar.concat(upperCase)
}
if (confirmLowerCase === true){
  potentialChar = potentialChar.concat(lowerCase)
}
if (confirmSpecialChar === true){
  potentialChar = potentialChar.concat(specialChar)
}

// Create a final password pool that can accept random characters from our potential characters pool
// combined into a string and returned into generate password
var finalPassword = []
for (var index = 0; index < passwordlength; index++) {
  var randomIndex = Math.floor(Math.random() * potentialChar.length)
  var indexValue = potentialChar[randomIndex]
  finalPassword.push(indexValue)
  console.log(finalPassword);
}
return finalPassword.join("")
}
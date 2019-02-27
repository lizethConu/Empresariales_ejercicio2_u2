var pd = require("./palindrome");
var ispalindrome = pd.isP("anita lava la tina");
var letters = pd.countL("anita lava la tina");
var vocals = pd.countV("anita lava la tina");
var consonant = pd.countC("anita lava la tina");

console.log("La palabra es: "+ispalindrome);
console.log("La palabra tiene: "+letters+" letras");
console.log("La palabra tiene: "+vocals+" vocales");
console.log("La palabra tiene: "+consonant+" consonantes");
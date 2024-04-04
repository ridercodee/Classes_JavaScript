// Creating Regex------------------------------
const regexliteral = /Script/g;
const regexObject = new RegExp("Script", "g");

console.log("JavaScript CoffeeScript".match(regexliteral));
console.log("JavaScript CoffeeScript".match(regexObject));

// dates
let date1 = new Date ();
console.log(date1);
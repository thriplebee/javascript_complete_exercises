// --------------------------------
// ---------Variables--------------
// --------------------------------

// --Primitive Data Types--
/* Number - Floating point numbers, for decimals and integers
   String - Sequence of characters, used for text
   Boolean - Logical data type that can only be true or false
   Undefined - Data type of a variable that does not have a value yet
   Null - Non-existent */

// You only can start a varible name with a letter, underscore or dollar sign.
// And can't use any reserved keywords as variable names

// Create variables
var firstName = 'Chamara';
var lastName = 'Perera';
var age = 26;
var isOk = true;
var job, height;

// Print only variable
console.log(firstName);
// Print the variable with a string
console.log('My name is '+lastName);
// Type Coercion
console.log('My age is '+age);
console.log('It is '+isOk);
console.log('I am a '+job);

// Get variable type
console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(isOk));
console.log(typeof(job));

// Define
job = 'Doctor';
// Variable Mutation
lastName = 'Fernando';
console.log('I am '+lastName+' I am a '+job);

// Dsiplay an alert
alert('My name is '+lastName+'. I am '+age+' years old. And am I ok? '+isOk+'.');

// Get user input
height = prompt('What is your height?');
alert('My height is '+height+' feet.');

// ----------------------------------------------
// -----------Introduction of Functions----------
// ----------------------------------------------

/*
    Funtion is a re-usable peace of code that does a specific thing.
*/

// --Define functions--

// Without return
function addNumbers(num1, num2){
    var ans = num1 + num2;
    console.log("Additon : "+ans);
}

// With return
function subNumbers(num1, num2){
    // Returns the value to where we called the function
    // Exit the function
    return num1 - num2;
}

// Calling functions
addNumbers(20, 32.5);

var sub = subNumbers(30, 12);
console.log("Substraction :"+sub);

// ----------------------------------

// Define
function calculateAge(birthYear){
    return 2021 - birthYear;
}

// Calling
console.log("Kasun is "+calculateAge(1996)+" years old.");
console.log("Priyan is "+calculateAge(2000)+" years old.");

// Define
function retiringYear(firstName, birthYear){
    // Calling
    var age = calculateAge(birthYear);
    var retire = 60 - age;
    console.log(firstName+" retires in "+retire+" years, in "+(birthYear+age+retire));
}

// Calling
retiringYear("Namal", 1990);

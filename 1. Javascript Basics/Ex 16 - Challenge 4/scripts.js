// -------------------------------
// --------BMI with Objects-------
// -------------------------------

/*
    Let's remember the first coding challenge where Kasun and Chamal compared their BMIs. Let's now implement the same functionality with objects and methods.
    1. For each of them, create an object with full name, mass and height.
    2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
    3. In the end, display the highest BMI with the full name. Don't forget they might have the same BMI.

    BMI = mass / height ^ 2
*/

// Declare objects
var kasun = new Object();
var chamal = new Object();

// Add properties to Kasun
kasun.fullName = prompt("Enter Kasun's full name : ");
kasun.mass = prompt("Enter Kasun's mass : ");
kasun.height = prompt("Enter Kasun's height : ");

// Add properties to Chamal
chamal.fullName = prompt("Enter Chamal,s full name : ");
chamal.mass = prompt("Enter Chamal,s mass : ");
chamal.height = prompt("Enter Chamal,s height : ");

// Add bmi() method for both
kasun.bmi = chamal.bmi = function(){
    this.bmiVal = this.mass / (this.height**2);
    return this.bmiVal;
}

console.log(kasun);
console.log(chamal);

// Find the highest BMI
if(kasun.bmi() > chamal.bmi()){
    alert(kasun.fullName+" has the highest BMI "+kasun.bmiVal);
}
else if(kasun.bmi() < chamal.bmi()){
    alert(chamal.fullName+" has the highest BMI "+chamal.bmiVal);
}
else{
    alert("Both BMIs are equal!");
}

console.log(kasun);
console.log(chamal);
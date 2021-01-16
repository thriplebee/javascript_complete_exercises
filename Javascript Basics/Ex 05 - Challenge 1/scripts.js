// --------------------------------
// ---------BMI Comparison---------
// --------------------------------

/*
Kasun and Chamal are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ^ 2
(Mass is kg and Height in meter)

1. Store Kasun's and Chamal's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Kasun has a higher BMI than Chamal.
4. Print a string to in alert box containing the variable from step 3.
*/

var mass, height, bmik, bmic, isKasun;

// Kasun's BMI
mass = prompt("Kasun's mass : ");
height = prompt("Kasun's height : ");
bmik = mass / (height * height);

// Chamal's BMI
mass = prompt("Chamal's mass : ");
height = prompt("Chamal's height : ");
bmic = mass / (height * height);

// Boolean
isKasun = (bmik > bmic);

alert(isKasun);

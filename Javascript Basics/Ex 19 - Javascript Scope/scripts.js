// -------------------------------
// --------Javascript Scope-------
// -------------------------------

/*
    Scope determines the accessibility (visibility) of variables. In JavaScript there are two types of scope.
    1. Local
    2. Global
*/ 

// --Local Variables--
// Variables declared within a JavaScript function, They can only be accessed from within the function. Local variables are deleted when the function is completed.
function addNum(){
    var a = 10;
    var b = 20;
    console.log(a+b);
}

// Calling
addNum();
// console.log(a);

// --Global Variables--
// A variable declared outside a function, All scripts and functions on a web page can access it. In a web browser, global variables are deleted when you close the browser window (or tab)
var subject = "Maths";
function mySub(){
    console.log("My favourite subject is "+subject);
    subject = "Science";
}

// Calling
mySub();
mySub();
console.log(subject);
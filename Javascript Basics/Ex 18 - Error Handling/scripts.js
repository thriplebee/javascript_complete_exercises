// -----------------------------
// --------Error Handling-------
// -----------------------------

// --Try Catch--
/*
    try - Let you test a block of code for errors
    catch - Lets you handle the error
    throw -  lets you create custom errors
    finally - lets you execute code, after try and catch, regardless of the result
*/

// Function to find the largest number
function findLargest(a, b, c){
    try{
        if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number'){
            throw "Error : Enter only numbers!";
        }
        else if(a == b || a == c || b == c){
            throw "Error : Enter different numbers!";
        }
        else{
            if(a > b && a > c){
                console.log("a is the largest number!");
            }
            else if(b > a && b > c){
                console.log("b is the largest number!");
            }
            else if(c > a && c > b){
                console.log("c is the largest number!");
            }
            else{
                console.log("Invalid inputs!");
            }
        }
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Input values are "+a+", "+b+" and "+c);
    }
}

// Calling
findLargest(7,7,5);

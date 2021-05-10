// --------------------------------
// -----Comparison Operators-------
// --------------------------------

var a = 20;
var b = '20';
var c = 5;
var d = 15;

// Equal to
if(a == b){
    // Equal value and equal type
    if(a === b){
        console.log('Both value and type of a is equal to b');
    }
    // Not equal value or not equal type
    else if(a !== b){
        console.log('Only value or type of a is equal to b');
    }
}
// Greater than or equal to
else if(a >= 10){
    // Greater than
    if(a > 10){
        console.log('a is greater than 10');
    }
    // Equal to
    else if(a == 10){
        console.log('a is equal to 10');
    }
}
// Not equal
else if(a != c){
    // Less than
    if(a < c){
        console.log('a is less than c');
    }
    else{
        console.log('a is greater than c');
    }
}
else{
    // Less than or equal to
    if(c <= d){
        // if(c <= 5){
        //     console.log('c is less than or equal to 5');
        // }
        // else{
        //     console.log('c is greater than to 5');
        // }
        
        // Ternary operator
        c <= 5 ? console.log('c is less than or equal to 5') : console.log('c is greater than to 5');
    }
    else{
        console.log('c is greater d');
    }
}

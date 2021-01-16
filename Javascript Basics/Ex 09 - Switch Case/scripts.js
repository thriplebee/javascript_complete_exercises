// --------------------------------
// -----------Switch Case----------
// --------------------------------

var empName = "Kasun";
var jobRole = "Doctor";

switch(jobRole.toLowerCase()){
    case 'teacher':
        console.log(empName+' is a Teacher.');
        break;
    case 'doctor':
    case 'professor':
        console.log(empName+' is a Doctor.');
        break;
    case 'engineer':
        console.log(empName+' is a Teacher.');
        break;
    case 'singer':
        console.log(empName+' is a Teacher.');
        break;
    default:
        console.log(empName+' does something else.');
        break;
}

// -----------------------------------

var age = 20;

switch(true){
    case age < 20:
        console.log(empName + ' is under age.');
        break;
    case age >= 20 && age < 30:
        console.log(empName + ' is in perfect age.');
        break;
    case age >= 30 && age < 50:
        console.log(empName + ' is mature.');
        break;
    default:
        console.log(empName + ' is too old.');
}
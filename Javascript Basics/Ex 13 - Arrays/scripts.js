// ---------------------
// --------Arrays-------
// ---------------------

/*
    In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
*/

// Ways to define an array
var students = ['Ruwan', 'Namal', 'Piyal', 'Kasuni', 'Danushka'];
var marks = new Array(60,55,66,44,78);

// Print array
console.log(students);
console.log(students.length);
console.log(students[3]+' got '+marks[3]+' marks for Maths.');

// Array mutation
students[3] = 'Sanduni';
students[5] = 'Thilini';
students[students.length] = 'Chamara';
console.log(students);

// Different data types in an array
var std1 = ['Kamal', 'Perera', 22, 'Civil', 'Panadura', true];
console.log(std1);

// Add elements
std1.push('green');
std1.unshift('Mr.');
console.log(std1);

// Remove elements
std1.pop();
std1.pop();
std1.shift();
console.log(std1);

// Get index of an element
console.log(std1.indexOf(22));

var isAgriStudent = std1.indexOf('Agri') === -1 ? std1[0]+' is not a Agri student' : std1[0]+' is a Civil student';

console.log(isAgriStudent);

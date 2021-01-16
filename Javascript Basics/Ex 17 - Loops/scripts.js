// --------------------
// --------Loops-------
// --------------------

/*
    loops are control structure that repeatedly run a block of code until a certain condition get false.
*/

// --Whithout Loops--
console.log(1);
console.log(2);
console.log(3);

// --For Loop--
for(var i=0; i<10; i++){ // i += 1 => i = i + 1
    console.log(i);
}
/*
    i = 0, 0 < 10 true, log i to the console, i++
    i = 1, 1 < 10 true, log i to the console, i++
    ...
    i = 9, 9 < 10 true, log i to the console, i++
    i = 10, 10 < 10 false, exit the loop
*/

for(var i=10; i>0; i--){
    console.log(i);
}

// Iterate an array
var students = ['Namal','Kumara','Dasun','Sachini','John'];
for(var i = 0; i < students.length; i++){
    console.log(students[i]);
}

// --For/In Loop--
// The JavaScript for/in statement loops through the properties of an object
var person = {fname:"Chamara", lname:"Silva", age:25};
var i;
for(i in person){
    console.log(person[i]);
}

// --For/Of Loop--
// For/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
var fullName = 'Chamara Perera';
var j;
for(j of fullName){
    console.log(j);
}

// --While Loop--
var marks = [33,55,66,88,22];
var k = 0;
while(k < marks.length){
    console.log(marks[k]);
    k++;
}

// --Do-While Loop--
var l = 10;
do{
    console.log(l);
    l--;
}while(l >= 1);

// --Continue & Break--
// The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.
var data = ['Saman','Galle',1996,'Maths',true,'Chocolate'];

// Continue
// If a specified condition occurs, and continues with the next iteration in the loop.
for(var i = 0; i < data.length; i++){
    if(typeof(data[i]) !== 'string') continue;
    console.log(data[i]);
}

// Break
// Breaks the loop and continues executing the code after the loop (if any)
for(var i = 0; i < data.length; i++){
    if(typeof(data[i]) !== 'string') break;
    console.log(data[i]);
}

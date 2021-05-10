// -------------------------------------------
// -------Select & Update DOM Elements--------
// -------------------------------------------

// ---Examine the document object---
console.dir(document);

// --Get Properties--
console.log(document.URL);
console.log(document.charset);
console.log(document.lastModified);
console.log(document.title);
console.log(document.doctype);

console.log(document.head);
console.log(document.body);

console.log(document.all);
console.log(document.all[11]);

console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// --Change values--
document.title = "Document Object Model";
console.log(document.title);

// --Not the best way--
document.all[11].textContent = "Shopping Item List"
console.log(document.all[16]);

// -----------------------------------

// ---Select elements using ID---
console.log(document.getElementById('hdt'));
var formTitle = document.getElementById('frmt');
console.log(formTitle);

// --textContent, innerText & innerHTML--
formTitle.textContent = 'Add Shopping Items';
formTitle.innerText = 'Shopping Items';
formTitle.innerHTML = '<i>Hello </i>Add Items';

/*
    1. The innerText property returns just the text, without spacing and inner element tags. And it cares about styling.
    2. The innerHTML property returns the text, including all spacing and inner element tags.
    3. The textContent property returns the text with spacing, but without inner element tags.
*/
console.log(formTitle.textContent);
console.log(formTitle.innerText);
console.log(formTitle.innerHTML);

// --Styling--
var navigation = document.getElementById('navbar');
navigation.style.backgroundColor = '#090209';
navigation.style.color = '#fff';

// -----------------------------------

// ---Select elements using Class name---
var items = document.getElementsByClassName('items');
console.log(items);
console.log(items[0]);
items[2].textContent = 'Hand Bag';
console.log(items[2]);

// --Styling--
items[2].style.fontFamily = 'serif';
items[2].style.backgroundColor = '#ebca14';

// --Change back color of all the list items--
for(var i of items){
    i.style.backgroundColor = '#a7520c';
}

// -----------------------------------

// ---Select elements using Tag name---
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
li[2].textContent = 'Book';
console.log(li[2]);

// --Styling--
li[2].style.color = '#fff';
li[2].style.backgroundColor = '#ebca14';

// --Change back color of all the list items--
for(var i of li){
    i.style.backgroundColor = '#1422eb';
}

// -----------------------------------

// ---Select elements using Query selector---
// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

// --ID--
var hd = document.querySelector('#navbar');
hd.style.border = 'solid #000 2px';

// --Tag--
var input = document.querySelector('input');
input.style.backgroundColor = '#ebca14';
input.value = 'Paint Bucket';

// --Class--
var item = document.querySelector('.items');
item.style.fontSize = 28+'px';

// --Pseudo Classes--
var item = document.querySelector('.items:nth-child(even)');
item.style.backgroundColor = '#ebca14';

// --Mix Selectors--
var it = document.querySelector('div .frm #frmt');
item.style.color = '#eb1478';

// -----------------------------------

// ---Select elements using Query selector all---
// The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.

// --ID--
var hd = document.querySelectorAll('#hdt');
console.log(hd);

// --Tag--
var dv = document.querySelectorAll('div');
console.log(dv);
console.log(dv[1]);

// --Class--
var cl = document.querySelectorAll('.items');
console.log(cl);

// --Mix Selectors--
var mx = document.querySelectorAll('div .list li');
console.log(mx);

// --Pseudo Classes--
// Grab all the odd list items
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
console.log(odd);
for(var i of odd){
    i.style.backgroundColor = '#ebca14';
}

for(var j of even){
    j.style.backgroundColor = '#1422eb';
}

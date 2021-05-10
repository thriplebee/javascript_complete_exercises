// ---------------------------------
// -------Traversing the DOM--------
// ---------------------------------

var itemList = document.querySelector('#li-items');

// ---Parent Node---
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#afafaf';
console.log(itemList.parentNode.parentNode);

// ---Parent Element---
// Most of the time similar to parentNode
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#6f6f6f';
console.log(itemList.parentElement.parentElement);

// -----------------------------------

// ---Child Nodes---
// text - line breaks
console.log(itemList.childNodes);

// ---Children---
console.log(itemList.children);
console.log(itemList.children[2].textContent);
itemList.children[2].style.backgroundColor = '#ebca14';

// -----------------------------------

// ---First Child---
// Work like childnodes
console.log(itemList.firstChild);

// ---First Element Child---
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor = '#ebca14';

// ---Last Child---
// Work like childnodes
console.log(itemList.lastChild);

// ---Last Element Child---
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = '#ebca14';

// -----------------------------------

// ---Next Sibling---
// Work like childnodes
console.log(itemList.nextSibling);

// ---Next Element Sibling---
console.log(itemList.nextElementSibling);
itemList.nextElementSibling.style.backgroundColor = '#ebca14';

// ---Previous Sibling---
// Work like childnodes
console.log(itemList.previousSibling);

// ---Previous Element Sibling---
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor = '#fff';

// -----------------------------------

// ---Create an Element---

// --Create an Input--
var input = document.createElement('input');

// Add a Class
input.className = 'test';

// Add an ID
input.id = 'last';

// Add an attribute
input.setAttribute('type', 'text');
console.log(input);

// --Create a Div--
var newDiv = document.createElement('div');

// Create text node
var newText = document.createTextNode('How are you!');

// Add text to div
newDiv.appendChild(newText);
console.log(newDiv);

// ---Insert created elements to the document---
var form = document.querySelector('.frm form');
var button = document.querySelector('.frm form button');

input.style.height = '50px';

form.insertBefore(input, button);

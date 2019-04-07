// old

var names = [ 'John', 'Ed', 'Mike' ];

var counter = 10;

var counter = 5;

console.log(counter);

function sayName() {
	var name = 'Ed';
	console.log(name);
}

sayName();
// console.log(name);

// var = no block scope
var list = [ 'milk', 'cow' ]; // can be assigned only one
for (var i = 0; i < list.length; i++) {
	console.log(i);
}

console.log(i);

//concatenation
var name = 'Ed';
console.log('Hello ' + name);

// get rid of redundant property names
function getBook(title, author) {
	return {
		title: title,
		author: author
	};
}

var book = getBook('hp', 'jk');
console.log(book);

// deconstruction
var user = {
	name: 'Ed',
	age: 25
};

var myName = user.name;

console.log(myName);

// arrow functions
function sayAName() {
	console.log('Im Ed');
}

var sayAge = function() {
	console.log('12');
};

sayAName();
sayAge();

// es6

const todoList = [ 'milk', 'cow' ]; // can be assigned only one
let counter2 = 10;
counter2 = 10;

// use const as much as possible

// let counter2 = 11; //SyntaxError: Identifier 'counter2' has already been declared

// let = block scope
for (let i = 0; i < todoList.length; i++) {
	console.log(i);
}

console.log(i);

// concatenation

// ! Hey this is important
// ? Can you help me?
// * Important!

const you = 'Ed';
console.log(`Hello ${you}`);

// get rid of redundant property names
function getBook(title, author) {
	return {
		title,
		author
	};
}

let book1 = getBook('hp', 'jk');
console.log(book1);

// deconstruction
const user2 = {
	name2: 'Ed',
	age2: 25
};

const { name2, age2 } = user2;

console.log(name2, age2);

// arrow functions
var sayLocation = (location) => {
	console.log(`Im on ${location}`);
};

sayLocation('Paris');

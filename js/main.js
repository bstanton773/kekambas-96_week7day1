console.log('Hello World from main.js'); 
console.log('Hello again');


// Basics of JavaScript

/*
    MultiLine Comment in JavaScript

    -- Variable Declaration in JS --
    Primitive Data Types: String, Number, Boolean, undefined, Null
    Object: Object, Array, Function

    Control Flow
*/

// Variable declaration
// var myName;

// console.log(myName);

// String Declaration
var myName = 'Brian';
console.log(myName);
console.log(typeof myName);

// String can be created using '', "", or ``. The tick marks (``) have a special behavior to format the string
// Tick Marks + ${varName} is equivalend to f"{var_name}" in Python.
console.log('My name is ${myName}');
console.log("My name is ${myName}");
console.log(`My name is ${myName}`);



// Integer
var myAge = 100;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14

console.log(pi);
console.log(typeof pi);


// Boolean
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);

// undefined
var something;

console.log(something);
console.log(typeof something);

// Null
var someNull = null;

console.log(someNull);
console.log(typeof someNull);



// Object
var myObject = {
    a: 123,
    test: 'Hello!'
};

console.log(myObject);
console.log(typeof myObject);


// Array
var myArr = ['Brian', 'Chicago', 'Coding Temple']

console.log(myArr);
console.log(typeof myArr);


// Function 
function abc(){};

console.log(abc);
console.log(typeof abc);

// Accessing Properties in Objects
var person = {
    first: 'Brian',
    last: 'Stanton',
    languages: ['Python', 'JavaScript']
};

person.first = 'Frank'

console.log(person);

// Bracket Notation
console.log(`My first name is ${person['first']}`);

// Dot Notation
console.log(`My last name is ${person.last}`);


// Accessing values in an Array
var newArr = [2, 4, 6, 8, 10]
// Must use bracket notation with an array
console.log(newArr[2]);
// Arrays also have a length property automatically added
console.log(newArr.length);

var mixedArr = [1, 'Hello', {a: 123, b:321, hello: 'Hello'}, [1, 2, 3], function abc(){}];
console.log(mixedArr);

console.log(mixedArr[2]['a']);
// String

const firstName = 'William';
const lastName ='Johnson';
const age = 37;
const str ='Hello there my name is bobby';
const tags = 'Web development, Web design, Programing';


let val;


val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName

// Append
val = 'Bobby ';
val += 'Ferrer';


val = 'Hello, my name is  ' + firstName + ' and I am ' + age

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// contact()
val = firstName.contact(' ', lastName);

// Change case
val = firstName. toUpperCase();
val = firstName. toLowerCase();

val = firstName[3];

// indexof()
val = firstName.indexOf('l');
val = firstName. lastIndexOf('l');


// chartAt()
val = firstName.charAt('4');

//  substring()
val = firstName.substring(0, 5);

// Slice()
val = firstName.slice(0, 4);

val = firstName.slice(-3);

// split()
val = str.split(' ');
val = str.split(',');

// replace();
val = str.replace('Bobby',Jason);

// includes()
val = str.includes('Hello')
console.log(val);
// n JavaScript, a string is a sequence of characters used to represent text. It is one of the six primitive data types, alongside numbers, booleans, null, undefined, and symbols. JavaScript strings are immutable, meaning once a string is created, its content cannot be changed. However, you can create a new string based on modifications.
// Creating Strings

// Strings in JavaScript can be created using:

//     Single quotes (' '): 'Hello World'
//     Double quotes (" "): "Hello World"
//     Template literals (` `): `Hello World`
//         Template literals allow multi-line strings and variable interpolation with ${} syntax.

// Common String Methods

// JavaScript provides numerous methods for working with strings:

//     Length:

//     javascript

// let str = "Hello";
// console.log(str.length); // Output: 5

// Accessing Characters:

//     Use bracket notation (str[index]) or .charAt(index).

// javascript

// console.log(str[0]);       // Output: "H"
// console.log(str.charAt(1)); // Output: "e"

// String Manipulation:

//     .toUpperCase(), .toLowerCase(): Change case.
//     .concat(): Concatenate strings.
//     .trim(): Remove whitespace from both ends.

// javascript

// str = str.concat(" World");
// console.log(str); // Output: "Hello World"

// Finding Substrings:

//     .indexOf(), .lastIndexOf(): Get the index of a substring.
//     .includes(): Check if a substring exists.
//     .startsWith(), .endsWith(): Check if it starts or ends with a substring.

// javascript

// console.log(str.includes("Hello")); // Output: true

// Extracting Substrings:

//     .slice(start, end): Extracts part of the string from start to end (not including end).
//     .substring(start, end): Similar to slice.
//     .substr(start, length): Extracts part of the string from start for length characters.

// javascript

// console.log(str.slice(0, 5)); // Output: "Hello"

// Splitting and Joining:

//     .split(separator): Splits a string into an array of substrings.
//     .join(): Opposite of split, used on arrays.

// javascript

// let words = str.split(" ");
// console.log(words); // Output: ["Hello", "World"]

// Template Literals:

//     Allow embedding variables and expressions within strings.

// javascript

//     let name = "Alice";
//     console.log(`Hello, ${name}!`); // Output: "Hello, Alice!"

// Strings in Memory

//     Immutable: Any operation that modifies a string actually creates a new string, leaving the original string unchanged.
//     Stored in Stack: As primitives, strings are stored directly in the stack memory, but due to their immutable nature, they can efficiently be reused.

// Escape Sequences

// Strings can include escape sequences like \n for new lines, \t for tabs, \' for single quotes, and \" for double quotes.

// Overall, strings in JavaScript offer a wide range of built-in functionality, making it easy to manipulate and work with text efficiently.

// ************************************************


//Example

const Name = "Usama"
const Age =   24

// console.log(Name + Age);
console.log(`My Name Is ${Name} And My Age is ${Age}`);

// Another way 

const myName = new String('Usama-Umer');
console.log(myName);
console.log(myName[0]);
console.log(myName.__proto__);


// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.charAt(3));


// const newString = myName.substring(0, 2)
// console.log(newString);

const AnotherString = myName.slice(1, 3)
console.log(AnotherString);


const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";



 
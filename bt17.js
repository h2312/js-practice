// Write a JS program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties)

const objectEqual = (a,b) => Object.keys(a).every(key => b[key]);

const objA = { a: 1, b: 2, c: 1}
const objB = { a: 1, b: 2, c: 1}
const objC = { a: 1, c: 2, d: 1}

console.log(objectEqual(objA, objC))
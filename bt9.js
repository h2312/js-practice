// Given two values, write a JS program to find out which one is nearest to 100.
const closetTo100 = (a,b) => (100 - a) < (100 - b) ? a : b;
console.log(closetTo100(1, 77)); 
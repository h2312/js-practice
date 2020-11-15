// Write a JS program to find the number of even digits in an array of integers
const countEvenNumber = (arr) => arr.filter(num => num%2 === 0).length;
console.log(countEvenNumber([1,2,3,4,5,6,7,8]))
// Write a JS program to get the largest even number from an array of integer
const largestEven = (arr) => Math.max(...arr.filter(num => num%2 === 0));

console.log(largestEven([1,2,3,4,5,6,10]))
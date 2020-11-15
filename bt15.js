// Write a JS program to replace the first digit in a string with $ character
// /[0-9]/ -> first number
//  /[0-9]/g -> all number

const replaceFirstDigit = (str) => str.replace(/[0-9]/, '$');

console.log(replaceFirstDigit('abcde12ddd'));
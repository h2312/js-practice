// Write a JS program to convert a comma-separated values (CSV) string to a 2D array. A new line indicates a new row in the array.
const parseCSV = (csvString) => csvString.split('\n').map(row => row.split(','));

const csvStr = `abc,def,ghi,jkl,mno,pqr`;

console.log(parseCSV(csvStr))
// Write a JS program to check whether a given array of integers is sorted in ascending order
const isAscending = (arr) => {
    for(let i =0; i < arr.length; i++) {
        if(arr[i+1] < arr[i]) return false;
    }
    return true;
}

console.log(isAscending([1,2,4,5]))
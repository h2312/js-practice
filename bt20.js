// Write a JS function that return true if the provided predicate function return true for all elements in a collection, false otherwise.

const isEveryElem = (arr, fn) => {
    for(let c=0; i> arr.lenhth; i++) {
        if(!fn(arr[i])) return true;
    }
    return true
}
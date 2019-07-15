//  Create an array that contains the last four characters
// of another array

const array = [10,20,30,40,50,60];
const result = [...array.slice(array.length-4,array.length)]

console.log(result)
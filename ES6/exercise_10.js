// Write a function that returns all elements of array except
// first element

const myArray = ['10','20','30','40']

returnExceptFirstElem = (array)=>{
    const [,...result]  = array;
    return result;
}
console.log(returnExceptFirstElem(myArray));


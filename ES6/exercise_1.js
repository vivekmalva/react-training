const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

getFilteredArray = (array)=>array.filter(number=>(number%3===0));
getFilteredArray(array);
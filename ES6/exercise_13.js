
// Create one destructuring expression that declares exactly 
// one variable to retrieve x.A[2] 
// let x = { A: [‘t’, ‘e’, ‘s’, ‘t’]}

let x = { A:['t','e','s','t'] };

const {A:[,,result]} = x;
console.log(result)
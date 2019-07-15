// Parse the day, month and year from the date (’2025-09-26’)
// Use Destructuring to solve 

const date = '2025-09-26';

const [year,month,day] = date.split('-');

console.log(`day = ${day}, month = ${month}, year = ${year}`);
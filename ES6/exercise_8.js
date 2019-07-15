// • Create a function to Extract the value marked in red from the given object
// TekMentors

const person = {
    first: 'Mohan',
    last: 'Singh',
    address: {
    lines: ['Sector 47', 'Chestor Lane', 'Apt 23'],
    city: 'Gurgaon',
    state: 'Haryana'
    }
  }
  
  markedValue = (obj)=>{
    return obj.address.lines[1];
  }
  
console.log(markedValue(person));
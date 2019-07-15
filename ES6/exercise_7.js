// Write a function request which when called with parameter as 
// shown below prints url and method value
// Prints value like http://www.google.com GET

function request(){
    for(const args of arguments ){
      for(const value in args){
        console.log(value)
      }
    }
}
request({url: 'http://www.google.com', method: 'GET' });
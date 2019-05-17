// Creating promise that's already resolved, useful for unit test

// returns resolved promise
const p_success = Promise.resolve({id: 1}); 
p_success.then(result=>(console.log(result))); 

// returns rejected promise + call stack that leads to the error, included with native error object
const p_failure = Promise.reject(new Error('Reason for rejection...')); 
p_failure.catch(error=>(console.log(error))); 


//  Running Promises in Parallel

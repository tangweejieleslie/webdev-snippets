// Creating promise that's already resolved, useful for unit test

// returns resolved promise
const p_success = Promise.resolve({id: 1}); 
p_success.then(result=>(console.log(result))); 

// returns rejected promise + call stack that leads to the error, included with native error object
const p_failure = Promise.reject(new Error('Reason for rejection...')); 
p_failure.catch(error=>(console.log(error))); 


//  Running Promises in Parallel
const p1 = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        console.log('Async Operation 1...');
        // resolve(1);
        reject(new Error('Something failed...')); // error will kick in and prevent promise.all from being fulfilled/resolved
    },2000);
});

const p2 = new Promise((resolve)=>{
    setTimeout(() =>{
        console.log('Async Operation 2...');
        resolve(2);
    },2000);
});

// Return new promise when all promises in the array is resolved
Promise.all([p1,p2]) // promise.all, promise.race. race will be considered fulfilled if a single parallel async operation is successful
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

// Single thread kicks off p1 and p2 almost simultaneously 
// Result array  
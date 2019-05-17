const success = true;

// promise holds results of an async operation
const p = new Promise(function(resolve,reject){
    // Call some async work
    setTimeout(( ) =>{
        
        // Get value and consume promise
        if(success) resolve(1);    // results start as pending, be it resolved or rejected

        // Get error and consume promise                
        else reject(new Error('message')); // good practice to pass object instead of bundleRenderer.renderToString
          
    },100);
});

p
.then(result => console.log('Result: ', result))
.catch(err => console.log('Error:', err.message));

// Always modify async into promises to manage them. 
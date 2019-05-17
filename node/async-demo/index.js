console.log('Before'); // console will display this first, SYNC

// Set timeout is Async, non-blocking function
setTimeout(()=>{
    console.log('Reading a user from a database')
}, 2000);

console.log('After'); // console will display this SECOND, SYNC


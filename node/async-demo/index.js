console.log('Before'); // console will display this first, SYNC

const user = getUser(1); 
console.log(user); // will return undefined, because user will be returned 2 seconds later

console.log('After'); // console will display this SECOND, SYNC


// Set timeout is Async, non-blocking function, this THIRD, after 2seconds
// Async != multiple thread 
function getUser(id){
    // Set timeout to simulate long running operation
    setTimeout(()=>{ 
        console.log('Reading a user from a database');
        return {id: id, user: "twjl"};
    }, 2000);

    return 1;
}

// Call
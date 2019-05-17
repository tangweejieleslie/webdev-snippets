console.log('Before'); // console will display this first, SYNC

const user = getUser(1, function(user) {
    console.log('User: ', user);

    getRepo(user.username, (repos)=>{
        console.log('Repos', repos);
    });
}); 

console.log('After'); // console will display this SECOND, SYNC


// Callback = function that will be called when data is ready
function getUser(id, callback){
    // Set timeout to simulate long running operation
    setTimeout(()=>{ 
        console.log('Reading a user from a database');
        callback({id: id, username: "twjl"});
    }, 2000);
}

function getRepo(username, callback){
    setTimeout(()=>{
        console.log('Calling API...');
        callback(['repo1', 'repo2']);
    },2000);
}
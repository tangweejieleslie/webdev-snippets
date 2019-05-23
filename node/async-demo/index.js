console.log('Before'); // console will display this first, SYNC

getUser(1,getRepo);

console.log('After'); // console will display this SECOND, SYNC

function getRepo(user){
    getRepo(user.username, getCommits);
}

function getCommits(repos){
    getCommits(repo, displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}

function getUser(id, callback){
    setTimeout(() =>{
        console.log('Reading user from db...');
        // callback({id: id, username: 'ltwj'});
    },0);
}
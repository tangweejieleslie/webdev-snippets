async function f(){
    let result = await getUser(1); 
    console.log(result);
}

f();

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log('Retrieving user...');
            resolve({id: id, user: 'Username123'});
        },2000);
    })
}
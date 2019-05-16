function hello(name){
    console.log(`Hello ${name}`);
}

hello('Leslie');

const testMod = require('./testmodule');

console.log(testMod.pvar)
var privateVariable = "REWRITTEN";

testMod.pvar = privateVariable;
console.log(testMod.pvar)

testMod.test();

const path = require('path');

// the following illustrates that require will take only exports from the respective module
console.log(testMod);
var privateVariable = "I'M A PRIVATE VARIABLE"

module.exports.pvar = privateVariable;


function testHello(){
    console.log("Hello from test module. " + privateVariable);
}

module.exports.test = testHello;

// the following console.log illustrates what attributes are tied to each module
console.log(module);
console.log(module.exports);
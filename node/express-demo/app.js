// SET UP EXPRESS APP
const Joi = require('joi');
const express = require('express');
const app = express();

// Adding Middleware to use JSON processing in POST , e.g. req.body.name
app.use(express.json());



// SET UP PORT
const port = process.env.PORT || 3000;

app.listen(port);

// MOCK DATA SET
var mockData = [
    {
        id: 1,
        name: "Data Set 1"
    },
    {
        id: 2,
        name: "Data Set 2",
        desc: "Some random description"
    },
    {
        id: 3,
        name: "Third Name",
        desc: "Just some description"
    }
];

// Basic GET request
app.get('/', (req,res) =>{   
    res.send("Hello World! This is the default page.");
});

// GET req with params
app.get('/api/mockdata/', (req,res) =>{   
    res.send(mockData);
});

// GET req with params
app.get('/api/mockdata/:id', (req,res) =>{   
    // Get mockdata with the given id into a const
    const data = mockData.find(x => x.id === parseInt(req.params.id));
    
    // Basic validation, check if ID exist  
    if(!data) return res.status(404).send('ID not found.');
    
    // Send response
    res.send(data);
});



// POST req with validation
app.post('/api/mockdata', (req,res) =>{
    // Input Validation handling
    const {error} = validateData(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Create data object
    const data = {
        id: mockData.length + 1,
        name: req.body.name
    };

    // Add data object to array
    mockData.push(data);
    res.send(data);
});



// PUT req, basically update data
app.put('/api/mockdata/:id', (req,res) =>{   
    // Get mockdata with the given id into a const
    const data = mockData.find(x => x.id === parseInt(req.params.id));
    
    // Basic Validation, check if ID exist 
    if(!data) return res.status(404).send('ID not found.');
    
    // Input Validation handling
    const {error} = validateData(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Update Data
    data.name = req.body.name;

    // Send response
    res.send(data);
});



// DELETE req
app.delete('/api/mockdata/:id', (req,res) =>{   
    // Get mockdata with the given id into a const
    const data = mockData.find(x => x.id === parseInt(req.params.id));
    
    // Delete Data
    // First get the index of targetted data
    const index = mockData.indexOf(data);
    // Simulate deletion by splicing array
    mockData.splice(index, 1);

    // Send response
    res.send(data);
});


// Simple data validation 
function validateData(data){
    // Set up validation schema, i.e. rules
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(data,schema);
}
const express = require('express');
const router = express.Router();

// *MOCK DATA SET
const mockData = [
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

// GET req with params
router.get('/', (req,res) =>{   
    res.send(mockData);
});

// GET req with params
router.get('/:id', (req,res) =>{   
    // Get mockdata with the given id into a const
    const data = mockData.find(x => x.id === parseInt(req.params.id));
    
    // Basic validation, check if ID exist  
    if(!data) return res.status(404).send('ID not found.');
    
    // Send response
    res.send(data);
});

// *POST req with validation
router.post('/', (req,res) =>{
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

// *PUT req, basically update data
router.put('/:id', (req,res) =>{   
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

// *DELETE req
router.delete('/:id', (req,res) =>{   
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

// *Simple data validation 
function validateData(data){
    // Set up validation schema, i.e. rules
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(data,schema);
}

module.exports = router;
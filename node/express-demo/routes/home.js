const express = require('express');
const router = express.Router();

// *Basic GET request
router.get('/', (req,res) =>{   
    // res.send("Hello World! This is the default page.");
    res.render('index', {title: 'Express App Sandbox', message: 'Hello World! This is generated through templating engine.'})
});

module.exports = router;
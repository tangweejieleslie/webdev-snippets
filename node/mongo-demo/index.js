const mongoose = require('mongoose');

// Establish connection to Mongoose / MongoDB
mongoose.connect('mongodb://localhost/sandbox',  {useNewUrlParser: true}) // returns promise
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(error => console.error('Could not connect to MongoDB...', error));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});


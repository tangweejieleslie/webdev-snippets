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

const Course = mongoose.model('Course', courseSchema);
const course = new Course({
    name: 'Name of Course 2',
    author: 'Author of Course',
    tags: ['tag1', 'tag 2', 'tag 3' ],
    isPublished: true
});

async function createCourse(){
    const result = await course.save();
    console.log(result);
};

createCourse();


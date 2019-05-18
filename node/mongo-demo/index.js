const mongoose = require('mongoose');

// Establish connection to Mongoose / MongoDB
mongoose.connect('mongodb://localhost/sandbox',  {useNewUrlParser: true}) // returns promise
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(error => console.error('Could not connect to MongoDB...', error));

// Define Schema for data 
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

// Create a class for data
const Course = mongoose.model('Course', courseSchema);
// Create an instance for passing into MongoDB
const course = new Course({
    name: 'Name of Course 2',
    author: 'Author of Course',
    tags: ['tag1', 'tag 2', 'tag 3' ],
    isPublished: true
});

// Async Function to write the course in MongoDB
async function createCourse(){
    const result = await course.save();
    console.log(result);
};

// Calling Async Function
// createCourse();

// Basic Query
async function getCourses(){
    // Functions similarly to a promise
    const courses = await Course
        .find()
        // .find({author: '2', isPublished: true})
        .limit(10) // limits results
        .sort({name: -1, tags: 1}) // -1 = descending order
        console.log(courses);
}

getCourses();
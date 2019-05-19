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
    name: 'Name of Course 3',
    author: 'Author of Course 2',
    tags: ['tag1', 'tag 2', 'tag 3' ],
    isPublished: true
});

// Async Function to write the course in MongoDB
async function createCourse(){
    const result = await course.save();
    console.log(result);
};

// Calling Async Function
createCourse();

// Basic Query
async function getCourses(){
    console.log("Getting courses...");
    // Functions similarly to a promise
    const courses = await Course
        .find()
        // .find({author: '2', isPublished: true})
        .limit(10) // limits results
        .sort({name: -1, tags: 1}) // -1 = descending order
        console.log(courses);
}

getCourses()

// Comparison Operators in Queries
// https://docs.mongodb.com/manual/reference/operator/query-comparison/

async function getCoursesOp(){
    console.log("Getting courses...");
    // Functions similarly to a promise
    const courses = await Course
        // .find({name: {$eq:'Name of Course 2' }})
        // .find( {$or:[{ name:'Name of Course 3'},{author: 'Author of Course 2' }]} )
        .find({name: /.*3.*/i })
        // .find({author: '2', isPublished: true})
        .limit(10) // limits results
        .sort({name: -1, tags: 1}) // -1 = descending order
        console.log(courses);
}

// Sample Queries for Strings with Regular Expressions 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// .find({name: { /.*3.*/i }})

getCoursesOp();

async function updateCourseQFA(id){
    // Query First Approach

    // 1. Find course by ID
    const course = await Course.findById;
    if(!course) return;

    // 2. Modify Properties. Two approaches
    course.isPublished = true;
    course.author= 'Another Author';
    
    // course.set({
    //     isPublished = true,
    //     author: 'Another Author'
    // });

    // 3. Save and return
    const result = await course.save();
    console.log(result);

    // Update First Approach
    // Update directly
    // Optional: get the updated doc
    
}

updateCourseQFA('5cdf7167376adc3a7405157e');
getCourses()

async function updateCourseUFA(id){
    // Update First Approach
    // Update directly
    // Optional: get the updated doc
    
}


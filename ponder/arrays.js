let courses = ["WDD131", "ITM220", "WDD231", "CSE212"];
// arrays start with index 0
console.log(courses[0]);
console.log(courses[4]);

// javascript object
let coursesAndGPA = [
    {
        courseName: "WDD131",
        courseGPA: 3.7,
        professor: "Brother Warner",
        assignments: [
            {
                assignmentName: "W01 Prove",
                assignmentGrade: 89
            }
        ]
    },
    {
        courseName: "WDD231",
        courseGPA: 4,
        professor: "Brother Warner"
    }
];

console.log(coursesAndGPA);
// access variables inside an object
console.log(coursesAndGPA.courseName);

console.log(coursesAndGPA[1].courseName);

console.log(coursesAndGPA[0].assignments[0].assignmentName);

// looping through an array traditional for loop
for(let i = 0; i < coursesAndGPA.length; i++) {
    console.log(coursesAndGPA[i].courseName);
    console.log(coursesAndGPA[i].courseGPA);
}

// looping through with a foreach loop
coursesAndGPA.forEach(item => {
    console.log(item.courseName);
    console.log(item.courseGPA);
});

let body = document.querySelector('body');

// build out HTML dynamically based on array contents

coursesAndGPA.forEach(course => {
    let dynamicHTML =  `
        <div>
            <h1>${course.courseName}</h1>
            <h2>${course.courseGPA}</h2>
        </div>
    `
    body.innerHTML += dynamicHTML;
});
// Step 1: Store students with their marks
const students = [
    {name: "Jane", marks: 80},
    {name: "Ciara", marks: 77},
    {name: "Smith", marks: 88},
    {name: "Thomas", marks: 95},
    {name: "Shelby", marks: 68}
];

// Step 2: Calculate total marks
let sum = 0;
for (let i = 0; i < students.length; i++) {
    sum += students[i].marks;
}

// Step 3: Compute average
let average = sum / students.length;

// Step 4: Determine grade based on average
let grade;
if (average < 60) {
    grade = "F";
} else if (average < 70) {
    grade = "D";
} else if (average < 80) {
    grade = "C";
} else if (average < 90) {
    grade = "B";
} else if (average <= 100) {
    grade = "A";
}

// Step 5: Print all students with marks
console.log("Student Marks:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " → " + students[i].marks);
}

// Step 6: Print average and grade
console.log("Average Marks: " + average);
console.log("Overall Grade: " + grade);
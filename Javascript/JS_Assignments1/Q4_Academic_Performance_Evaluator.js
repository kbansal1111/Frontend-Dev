// Q4. Academic Performance Evaluator
let marks = [88, 92, 76, 81, 69];
let average = marks.reduce((a, b) => a + b, 0) / marks.length;
let percentage = average;
let detained = marks.some(m => m < 35);

if (detained) {
    console.log("Detained (one or more subjects < 35)");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

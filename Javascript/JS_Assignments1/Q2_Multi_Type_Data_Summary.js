// Q2. Multi-Type Data Summary
let name = "Kartik";
let age = 20;
let isStudent = true;
let subjects = ["Math", "Science"];
let details = { city: "Mathura", country: "India" };
let emptyValue = null;
let notDefined;

console.table([
    { Label: "Name", Value: name, Type: typeof name },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Details", Value: JSON.stringify(details), Type: typeof details },
    { Label: "Empty", Value: emptyValue, Type: typeof emptyValue },
    { Label: "Undefined", Value: notDefined, Type: typeof notDefined }
]);

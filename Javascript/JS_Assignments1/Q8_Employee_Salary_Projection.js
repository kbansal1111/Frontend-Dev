// Q8. Employee Salary Projection
let currentSalary = 50000;
let incrementRate = 10; // percent
let salaryData = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * (incrementRate / 100);
    salaryData.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(salaryData);

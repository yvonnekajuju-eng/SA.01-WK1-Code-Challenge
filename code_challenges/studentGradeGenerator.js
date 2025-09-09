// studentGradeGenerator.js
// A program to generate student grades based on their marks
// 80-100: A
// 60-79: B
// 49-59: C
// 40-49: D
// 0-39: E
// If the input is less than 0 or greater than 100, it should print "Invalid input"     
let marks = parseInt(prompt("Enter student marks (0-100): "));


if (marks < 0 || marks > 100 || isNaN(marks)) {
  console.log("Invalid input! Please enter a number between 0 and 100.");
} else {
  let grade;
  if (marks > 79) grade = "A";
  else if (marks >= 60) grade = "B";
  else if (marks >= 49) grade = "C";
  else if (marks >= 40) grade = "D";
  else grade = "E";

  console.log(`Grade: ${grade}`);
}
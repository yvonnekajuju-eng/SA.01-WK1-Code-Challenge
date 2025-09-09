// speedDetector.js
// A program to check the speed of a car and assign demerit points if necessary
// If the speed is less than 70, it should print "Ok"
// For every 5km above the speed limit (70), it should give the driver one demerit point
// If the driver gets more than 12 points, the program should print "License suspended"
function speedDetector() {
  let speed = parseInt(prompt("Enter the speed of the car: "));
  if (speed < 70) {
    return "Ok";
  } else {
    let demeritPoints = Math.floor((speed - 70) / 5);
    if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}

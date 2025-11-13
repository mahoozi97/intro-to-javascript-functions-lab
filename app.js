// To Do
let color = "SyntaxError";
if (color === "red") {
  console.log("Stop");
} else if (color === "yellow") {
  console.log("Slow");
} else if (color === "green") {
  console.log("Go");
} else {
  console.log("SyntaxError");
}

// Excercise2:
function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log("Exercise 2:", isAdult(17));

// Exercise 4:
function generateEmail(name, domain) {
  return `${name}@${domain}`;
}
console.log("Exercise 4:", generateEmail("ali-mirza", "icloud.com"));

// Exercise 5:
function greetUser(name, greeting) {
  return `Good ${greeting}, ${name}`;
}
console.log("Exercise 5:", greetUser("Ali", "evening"));

// Exercise 6:
function maxOfThree(first, second, third) {
  if (first > second && first > third) {
    return first;
  } else if (second > first && second > third) {
    return second;
  } else if (third > first && third > second) {
    return third;
  }
}
console.log("Exercise 6:", maxOfThree(5, 3, 4));
console.log("Exercise 6:", maxOfThree(5, 6, 4));
console.log("Exercise 6:", maxOfThree(5, 3, 8));

// Exercise 7:
function calculateTip(amount, percentage) {
  return amount * (percentage / 100);
}
console.log("Exercise 7:", calculateTip(50, 20));

// Exercise 8:
function convertTemperature(temperature, scale) {
  if (scale === "c") {
    let result = (temperature * 9) / 5 + 32;
    return result;
  } else if (scale === "f") {
    let result = ((temperature - 32) * 5) / 9;
  }
}
console.log("Exercise 8:", convertTemperature(0, "c"));

// Exercise 9:
function basicCalculator(num1, num2, operation) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    return num1 / num2;
  }
}
console.log("Exercise 9:", basicCalculator(5, 4, "add"));

// Exercise 10: calculateGrade()
function calculateGrade(numricalScore) {
  if (numricalScore == 90) {
    return "A";
  } else if (numricalScore > 87 && numricalScore < 90) {
    return "B";
  } else if (numricalScore > 69 && numricalScore < 80) {
    return "C";
  } else if (numricalScore > 59 && numricalScore < 70) {
    return "D";
  } else if (numricalScore < 60) {
    return "F";
  }
}
console.log("Exercise 10:", calculateGrade(66));

// Exercise 11: createUsername()
function createUsername(firstname, lastname) {
  const first = firstname.slice(0, 3);
  const last = lastname.slice(0, 3);
  const nameLength = firstname.length + lastname.length;
  const username = first + last;
  return `${username}${nameLength}`;
}
console.log("Exercise 11:", createUsername("Osama", "Hasan"));

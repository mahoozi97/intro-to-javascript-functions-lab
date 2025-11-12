// Excercise2:
function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log(isAdult(17));

// Exercise 4:
function generateEmail(name, domain) { 
  return `${name}@${domain}`
}
console.log(generateEmail("mahoozi97", "icloud.com"))

// Exercise 5:
function greetUser(name, greeting) {
  return `Good ${greeting}, ${name}`
}
console.log(greetUser("Ali", "evening"))

// Exercise 6: 
function maxOfThree(first, second, third) {
  if (first > second && first > third) {
    return first
  } else if (second > first && second > third) {
    return second
  } else if (third > first && third > second) {
    return third
  }
}
console.log(maxOfThree(5, 3, 4))
console.log(maxOfThree(5, 6, 4))
console.log(maxOfThree(5, 3, 8))

// Exercise 10: calculateGrade()
function calculateGrade(numricalScore) {
  if (numricalScore == 90) {
    console.log("A");
  } else if (numricalScore > 87 && numricalScore < 90) {
    console.log("B");
  } else if (numricalScore > 69 && numricalScore < 80) {
    console.log("C");
  } else if (numricalScore > 59 && numricalScore < 70) {
    console.log("D");
  } else if (numricalScore < 60) {
    console.log("f");
  }
}
calculateGrade(66);

// Exercise 11: createUsername()
function createUsername(firstname, lastname) {
  const first = firstname.slice(0, 3);
  const last = lastname.slice(0, 3);
  const nameLength = firstname.length + lastname.length;
  const username = first + last;
  console.log(`${username}${nameLength}`);
}
createUsername("Ali", "Hasan");

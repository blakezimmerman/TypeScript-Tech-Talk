enum Operations {
  Add = "Add",
  Subtract = "Subtract",
  Multiply = "Multiply",
  Divide = "Divide"
}

Operations.Add; // "Add" at runtime

const operation1: Operations = Operations.Add; // Okay
const operation2: Operations = "Add"; // Error

// Can be iterated over
for (const operation in Operations) {
  console.log(operation);
}

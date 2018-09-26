let greeting: "hello" | "hey" | "hi";

let rating: 1 | 2 | 3 | 4 | 5;

function calculate(
  x: number,
  y: number,
  operation: "add" | "subtract"
): number {
  switch (operation) {
    case "add":
      return x + y;
    case "subtract":
      return x - y;
  }
}

calculate(4, 2, "multiply"); // Error

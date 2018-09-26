interface Square {
  type: "Square";
  size: number;
}

interface Rectangle {
  type: "Rectangle";
  width: number;
  height: number;
}

interface Circle {
  type: "Circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.type) {
    case "Square":
      return s.size * s.size;
    case "Rectangle":
      return s.height * s.width;
    case "Circle":
      return Math.PI * s.radius ** 2;
    default:
      throw new Error(`Invalid shape, ${s}`);
  }
}

function add(x: number, y: number): number {
  return x + y;
}

// [ts] Argument of type '"1"' is not assignable
// to parameter of type 'number'.
add("1", 1);

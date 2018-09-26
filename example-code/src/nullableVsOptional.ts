interface A {
  a: string;
  b: number;
  c: boolean | undefined;
}

// Okay
const a1: A = {
  a: "test",
  b: 1,
  c: undefined
};

// Error
const a2: A = {
  a: "test",
  b: 1
};

interface B {
  a: string;
  b: number;
  c?: boolean;
}

// Okay
const b1: B = {
  a: "test",
  b: 1,
  c: undefined
};

// Okay
const b2: B = {
  a: "test",
  b: 1
};

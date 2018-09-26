```ts
type Partial<T> = {
  // Make all properties optional
  [P in keyof T]?: T[P];
}

type Readonly<T> = {
  // Make all properties readonly
  readonly [P in keyof T]: T[P];
}

type Pick<T, K extends keyof T> = {
  // Select specific properties
  [P in K]: T[P];
}

type Record<K extends string, T> = {
  // Create object with given keys and given value type
  [P in K]: T;
}
```
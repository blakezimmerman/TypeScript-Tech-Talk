interface MyObject {
  field1: string;
  field2: number;
  field3: boolean;
}

type Keys = keyof MyObject;

type Values = MyObject[keyof MyObject];

interface MyObject {
  field1: string;
  field2: number;
  field3: boolean;
}

type PartialMyObject = { [K in keyof MyObject]?: MyObject[K] };

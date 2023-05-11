type GenericArray<T> = Array<T>;

const roll1: GenericArray<number> = [40, 20, 30];
const roll2: GenericArray<string> = ["hello", "mello"];
const roll3: GenericArray<boolean> = [true, false];

type GenericTuple<X, Y> = [X, Y];

interface GenericMethod {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<GenericMethod, string> = [
  {
    name: "Persian",
    salary: 100000,
  },
  "hello",
];

interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush: CrushInterface<boolean> = { name: "Persian", husband: true };
const crush1: CrushInterface<number> = { name: "tom crus", husband: 30 };

const crush3: CrushInterface<{ name: string; salary: number }> = {
  name: "kate winslet",
  husband: {
    name: "Persian",
    salary: 500000,
  },
};

interface PersonInterface {
  name: string;
  age: number;
}

const crush4: CrushInterface<PersonInterface, PersonInterface> = {
  name: "dfgfdsg",
  husband: {
    name: "dfdsf",
    age: 20,
  },
  wife: {
    name: "dfdsf",
    age: 20,
  },
};

const createArray = (param: string): string[] => {
  return [param];
};

const createArray1 = <T, X>(param1: T, param2: X): [T, X] => {
  return [param1, param2];
};

const result1 = createArray1<string, number>("Bangladesh", 124);
const result2 = createArray1<boolean, Array<string>>(true, ["USA"]);

type Name = { name: string };

const result3 = createArray1<Name, number>({ name: "BD" }, 245);

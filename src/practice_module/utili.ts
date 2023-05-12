interface Person {
  name: string;
  email: string;
  contactNo: number;
}

type Contact = Pick<Person, "contactNo" | "email">;
type Name = Omit<Person, "email">;

const person: Readonly<Person> = {
  name: "hello",
  email: "hello@gmail.com",
  contactNo: 1541254546,
};
// person.email=

class BankAccount {
  id: number;
  name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  getBalance() {
    console.log(`my current balance is ${this._balance}`);
  }
}
const myAccount = new BankAccount(545, "Hume", 54);
console.log(myAccount);
console.log(myAccount);

function add(num1:number,num2:number)
:number{
    return num1+num2
}

const arrowFun=(num1:number,num2:number):number=>num1+num2

const person:{
    name:string,
    balance:number,
    addBalance(money:number):void
}={
    name:'Rifat',
    balance:300,
    addBalance(money:number){
        console.log(`My new balance is ${this.balance+money}`);
    }
}
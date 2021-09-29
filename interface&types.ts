export {};
// Interfaces and type for functions

// type  AddFn = (a: number, b: number) => number
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

// we can extends and merge more than one interfaces
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number;

  constructor(n: string, age: number) {
    this.name = n;
    this.age = age;
  }
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}, ${this.age} years old`);
  }
}
let user1: Greetable;
user1 = new Person('Baranbas', 31);
user1.greet('Hi There, from the Class =>  I am');
console.log(user1);

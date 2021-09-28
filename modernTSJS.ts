export {};
// const userName = 'Max';
// // userName = 'Barni'
// let age = 30;

// age = 29;
// console.log('start');

// const add = (a: number, b: number = 2) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
  firstName: 'Max',
  age: 30,
};

const copiedPerson = { ...person };
copiedPerson.age = 50;
console.log(person, copiedPerson);

const add = (...args: number[]) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

const addNumbers = add(5, 6, 6, 8, 10, 15);
console.log(addNumbers);

const [hobby1, hobby2, ...rest] = hobbies; // d stucture not mutate the orignial array, it does matter the order , we pull out values by position

const { age, firstName } = person; //  it doesn't matter the order , we pull out values by name

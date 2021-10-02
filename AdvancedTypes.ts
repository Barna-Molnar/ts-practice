// Intersection Types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Barnabas',
  privileges: ['Create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Functoin overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
// Function OVerloads

function add(a: Combinable, b: Combinable) {
  // Tyoe guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Barni', 'Molnar');
result.split('');

const fetchData = {
  name: 'Barni',
  id: 'u1',
  job: { title: 'CEO', description: 'my own company' },
};
console.log(fetchData?.job?.description, 'ez az '); //optional chaining

const userInputTest = '';
const storeData = userInputTest ?? 'Default';

console.log(storeData, 'nullish operator');

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name =>  ${emp.name}`);
  if ('privileges' in emp) {
    console.log(`Privileges => ${emp.privileges}`);
  }
  if ('startDate' in emp) {
    console.log(`StartDate: => ${emp.startDate}`);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'MAx', startDate: new Date() });

class Car {
  drive() {
    console.log(`Driving`);
  }
}
class Truck {
  drive() {
    console.log('Driving truck....');
  }
  loadCargo(amount: number) {
    console.log(`Loading Cargo ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Descriminated Union

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving at speed ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 15 });

// TypeCasting

// const userInput = document.getElementById('user-input')! as HTMLInputElement;
const userInput = <HTMLInputElement>document.getElementById('user-input');

userInput.value = 'Hi there ';

// Index Properties

interface ErrorContainer {
  // email: 'Not a valid email', || username: 'Must beggin with a Capital letter
  [prop: string]: string;
}
const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must beggin with a Capital letter',
  inputfield: 'This is a requeired field',
};

// const person = {
//   name: 'Barnabas',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'], // <== tuple  [number | string]
// };

//Enum you can assign a value to the values and the other ones keep going increasing ,

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Barnabas',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person);

for (const h of person.hobbies) {
  console.log(h.toLocaleUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}

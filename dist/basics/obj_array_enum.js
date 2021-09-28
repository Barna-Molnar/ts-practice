"use strict";
// const person = {
//   name: 'Barnabas',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'], // <== tuple  [number | string]
// };
//Enum you can assign a value to the values and the other ones keep going increasing ,
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Barnabas',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
var favoriteActivities;
favoriteActivities = ['Sport'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var h = _a[_i];
    console.log(h.toLocaleUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
//# sourceMappingURL=obj_array_enum.js.map
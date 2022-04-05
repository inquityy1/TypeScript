// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Nebojsa",
//   age: 21,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 7] = "READ_ONLY";
    Role[Role["AUTHOR"] = 29] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Nebojsa",
    age: 21,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", "user"];
var favoriteActivitie;
favoriteActivitie = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // ERROR you cant use map on strings
}
if (person.role === Role.ADMIN) {
    console.log("is Admin");
}

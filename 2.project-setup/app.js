// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "Nebojsa",
    age: 21,
    hobbies: ["Sports", "Cooking"]
};
var favoriteActivitie;
favoriteActivitie = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}

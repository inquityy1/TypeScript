// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Nebojsa",
  age: 21,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivitie: string[];
favoriteActivitie = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // ERROR you cant use map on strings
}

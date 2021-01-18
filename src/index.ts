import { User } from "./models/User";

const user = User.buildUser({ id: 1 });

user.on("change", () => {
  console.log(user);
});

user.fetch();

// const colors = {
//   color: "red",
//   printColor() {
//     console.log(this.color);
//   },
// };

// colors.printColor();
// const printColor = colors.printColor;
// printColor();

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person = new Person("firstname", "lastname");
// console.log(person.fullName);

import axios from "axios";
import { User } from "./models/User";

const user = new User({ name: "new record", age: 0 });

console.log(user.get('name'));


// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person = new Person("firstname", "lastname");
// console.log(person.fullName);

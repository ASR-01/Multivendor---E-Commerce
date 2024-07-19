"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.default = prisma;
// async function InsertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const user = await prisma.user.create({
//     data: {
//       username,
//       password,
//       firstName,
//       lastName,
//     },
//   });
//   console.log(user);
// }
// InsertUser("Mom", "123456", "Savitri", "singh")
// async function getTodo(userId: string) {
//   const allTodo = await prisma.todo.findMany({
//     where: {
//       userId: userId,
//     },
//     select:{
//       id:true,
//       title:true,
//       description:true,
//       user:true
//     }
//   });
//   console.log(allTodo);
// }
// getTodo("66989c8d1aa38f447cb1fd09");
// async function InsertTodo() {
//   const todo = await prisma.todo.create({
//     data: {
//       title : "Cooking",
//       description :"Go to Kitchen",
//       userId : "66989cd9fc8cd52ffd94e0e9",
//     },
//   });
//   console.log(todo);
// }
// InsertTodo();

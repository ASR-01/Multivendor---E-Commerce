"use strict";
// import { Response, Request } from "express";
// import prisma from "../client";
// import { setWithExpiry } from "../utils/redis.utils";
// export const CreateTodo = async (req: Request, res: Response) => {
//   try {
//     const { title, description, userId } = req.body;
//     const todo = await prisma.todo.create({
//       data: {
//         title,
//         description,
//         userId,
//       },
//     });
//     res.json({ success: true, msg: "Todo Created Successfully", todo });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, msg: error });
//   }
// };
// export const getTodosWithUserId = async (req: Request, res: Response) => {
//   try {
//     const userId = req.params.userId;
//     const todos = await prisma.todo.findMany({
//       where: {
//         userId: userId,
//       },
//       select: {
//         title: true,
//         description: true,
//         done: true,
//         user: true,
//       },
//     });
//     setWithExpiry("todos",todos,30)
//     if (todos.length === 0) {
//       return res.json({ success: true, msg: "No Todos Found" });
//     }
//     res.json({ success: true, msg: "User Todos fetched Successfully", todos });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, msg: error });
//   }
// };

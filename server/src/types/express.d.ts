
import { User } from "@prisma/client"
import { Request } from "express"
export interface IGetUserAuthInfoRequest extends Request {
  user?: User 
}

// import { User } from "@prisma/client";
// import express from "express"
// declare module "express"{
//    export interface Request {
//     user:User
//    }
// }
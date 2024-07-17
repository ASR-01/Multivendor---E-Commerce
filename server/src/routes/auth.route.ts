import { Router } from "express"
import {   LoginController, RegisterController, UserProfile } from "../controllers/auth.controller"
import { errorHandler } from "../middlewares/error.middlewares";
import { AuthMiddleWare } from "../middlewares/auth.middleware";


const AuthRoute:Router = Router()

AuthRoute.post("/register",errorHandler(RegisterController))
AuthRoute.post("/login",errorHandler(LoginController))
AuthRoute.get("/profile",AuthMiddleWare,errorHandler(UserProfile))


export default  AuthRoute;
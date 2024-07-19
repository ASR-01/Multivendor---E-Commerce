import { Router } from "express";
import {
  DeleteUser,
  GetAllUsers,
  getMyProfile,
  LoginUser,
  RegisterUser,
  UpdateUser,
} from "../controllers/users.controller";
import { redisCachedMiddleWare } from "../utils/redis.utils";
import { AuthorizedUser } from "../middlewares/jwt.middlewares";
import { AdminRoutes } from "../middlewares/Admin.middleware";

const UserRouter: Router = Router();

// User Routes
UserRouter.post("/user/register", RegisterUser);
UserRouter.post("/user/login", LoginUser);
UserRouter.patch("/user/:userId", AuthorizedUser, UpdateUser);
UserRouter.delete("/user/:userId", AuthorizedUser, DeleteUser);
UserRouter.get(
  "/user/:userId",
  redisCachedMiddleWare("users"),
  AuthorizedUser,
  getMyProfile
);

// Admin
UserRouter.get(
  "/admin/getAllUsers",
  redisCachedMiddleWare("users"),
  AuthorizedUser,
  AdminRoutes,
  GetAllUsers
);

export default UserRouter;

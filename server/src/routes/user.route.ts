import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
import { validateSchema } from "../middlewares/user.middleware";
import {
  createUserSchema,
  updateUserSchema,
} from "../utils/user.schemaValidation";

// Users layout Route
const userRoute = Router();

userRoute.post("", createUser);
userRoute.get("", getUsers);
userRoute.get("/:userid", getUser);
userRoute.delete("/:userid", deleteUser);
userRoute.patch("/:userid", validateSchema(updateUserSchema), updateUser);

export default userRoute;

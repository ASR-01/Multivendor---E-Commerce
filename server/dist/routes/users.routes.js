"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const redis_utils_1 = require("../utils/redis.utils");
const jwt_middlewares_1 = require("../middlewares/jwt.middlewares");
const Admin_middleware_1 = require("../middlewares/Admin.middleware");
const UserRouter = (0, express_1.Router)();
// User Routes
UserRouter.post("/user/register", users_controller_1.RegisterUser);
UserRouter.post("/user/login", users_controller_1.LoginUser);
UserRouter.patch("/user/:userId", jwt_middlewares_1.AuthorizedUser, users_controller_1.UpdateUser);
UserRouter.delete("/user/:userId", jwt_middlewares_1.AuthorizedUser, users_controller_1.DeleteUser);
UserRouter.get("/user/:userId", (0, redis_utils_1.redisCachedMiddleWare)("users"), jwt_middlewares_1.AuthorizedUser, users_controller_1.getMyProfile);
// Admin
UserRouter.get("/admin/getAllUsers", (0, redis_utils_1.redisCachedMiddleWare)("users"), jwt_middlewares_1.AuthorizedUser, Admin_middleware_1.AdminRoutes, users_controller_1.GetAllUsers);
exports.default = UserRouter;

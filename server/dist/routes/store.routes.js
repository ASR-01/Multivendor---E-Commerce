"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const redis_utils_1 = require("../utils/redis.utils");
const jwt_middlewares_1 = require("../middlewares/jwt.middlewares");
const store_controller_1 = require("../controllers/store.controller");
const Admin_middleware_1 = require("../middlewares/Admin.middleware");
const StoreRouter = (0, express_1.Router)();
StoreRouter.post("/stores", jwt_middlewares_1.AuthorizedUser, store_controller_1.CreateStore);
StoreRouter.delete("/store/:storeId", jwt_middlewares_1.AuthorizedUser, store_controller_1.DeleteStore);
StoreRouter.patch("/store/:storeId", jwt_middlewares_1.AuthorizedUser, store_controller_1.UpdateStore);
// Admin
StoreRouter.get("/stores", (0, redis_utils_1.redisCachedMiddleWare)("stores"), jwt_middlewares_1.AuthorizedUser, Admin_middleware_1.AdminRoutes, store_controller_1.GetAllUsersStore);
exports.default = StoreRouter;

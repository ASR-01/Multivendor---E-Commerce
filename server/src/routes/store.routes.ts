import { Router } from "express";

import { redisCachedMiddleWare } from "../utils/redis.utils";
import { AuthorizedUser } from "../middlewares/jwt.middlewares";
import {
  CreateStore,
  DeleteStore,
  GetAllUsersStore,
  UpdateStore,
} from "../controllers/store.controller";
import { AdminRoutes } from "../middlewares/Admin.middleware";

const StoreRouter: Router = Router();

StoreRouter.post("/stores", AuthorizedUser, CreateStore);
StoreRouter.delete("/store/:storeId", AuthorizedUser, DeleteStore);
StoreRouter.patch("/store/:storeId", AuthorizedUser, UpdateStore);

// Admin
StoreRouter.get(
  "/stores",
  redisCachedMiddleWare("stores"),
  AuthorizedUser,
  AdminRoutes,
  GetAllUsersStore
);
export default StoreRouter;

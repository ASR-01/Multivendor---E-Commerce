import { Router } from "express";

import { redisCachedMiddleWare } from "../utils/redis.utils";
import { AuthorizedUser } from "../middlewares/jwt.middlewares";
import { CreateCategory, DeleteCategory, GetAllCategory, GetSingleCategory, UpdateCategory } from "../controllers/category.controller";

const categoryRouter: Router = Router();


categoryRouter.post("/category",AuthorizedUser,CreateCategory)
categoryRouter.delete("/category/:categoryId",AuthorizedUser,DeleteCategory)
categoryRouter.patch("/category/:categoryId",AuthorizedUser,UpdateCategory)
categoryRouter.get("/category",redisCachedMiddleWare("category"),AuthorizedUser,GetAllCategory)
categoryRouter.get("/:category",redisCachedMiddleWare("category"),AuthorizedUser,GetSingleCategory)

export default categoryRouter;

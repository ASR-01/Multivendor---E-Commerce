import { Router } from "express";

import { redisCachedMiddleWare } from "../utils/redis.utils";
import { CreateProduct, DeleteProduct, GetAllProduct, GetSingleProduct, UpdateProduct } from "../controllers/product.controller";
import { AuthorizedUser } from "../middlewares/jwt.middlewares";

const productRouter: Router = Router();


productRouter.post("/product",AuthorizedUser,CreateProduct)
productRouter.delete("/product/:productId",AuthorizedUser,DeleteProduct)
productRouter.patch("/product/:productId",AuthorizedUser,UpdateProduct)
productRouter.get("/product",redisCachedMiddleWare("products"),AuthorizedUser,GetAllProduct)
productRouter.get("/product/:productId",redisCachedMiddleWare("products"),AuthorizedUser,GetSingleProduct)

export default productRouter;

import { Router } from "express"
import { errorHandler } from "../middlewares/error.middlewares";
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controllers/product.controller";
import { AuthMiddleWare } from "../middlewares/auth.middleware";
import { AdminMiddleWare } from "../middlewares/admin.middleware";



const productRoute:Router = Router()

productRoute.post("/singleProduct",AuthMiddleWare,AdminMiddleWare,errorHandler(createProduct))
productRoute.patch("/:singleProduct",AuthMiddleWare,AdminMiddleWare,errorHandler(updateProduct))
productRoute.get("/allProduct",AuthMiddleWare,AdminMiddleWare,errorHandler(getAllProduct))
productRoute.get("/:singleProduct",AuthMiddleWare,AdminMiddleWare,errorHandler(getSingleProduct))
productRoute.delete("/:singleProduct",AuthMiddleWare,AdminMiddleWare,errorHandler(deleteProduct))


export default  productRoute;
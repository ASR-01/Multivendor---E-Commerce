import { Router } from "express"
import AuthRoute from "./auth.route"
import productRoute from "./product.route"


const RouteRouter:Router = Router()


RouteRouter.use("/auth",AuthRoute)
RouteRouter.use("/product",productRoute)

export default RouteRouter;
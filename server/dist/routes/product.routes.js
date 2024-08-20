"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const redis_utils_1 = require("../utils/redis.utils");
const product_controller_1 = require("../controllers/product.controller");
const jwt_middlewares_1 = require("../middlewares/jwt.middlewares");
const multer_middleware_1 = require("../middlewares/multer.middleware");
const productRouter = (0, express_1.Router)();
productRouter.post("/product", jwt_middlewares_1.AuthorizedUser, multer_middleware_1.singleUpload, product_controller_1.CreateProduct);
productRouter.delete("/product/:productId", jwt_middlewares_1.AuthorizedUser, product_controller_1.DeleteProduct);
productRouter.patch("/product/:productId", jwt_middlewares_1.AuthorizedUser, product_controller_1.UpdateProduct);
productRouter.get("/product", (0, redis_utils_1.redisCachedMiddleWare)("products"), jwt_middlewares_1.AuthorizedUser, product_controller_1.GetAllProduct);
productRouter.get("/product/:productId", (0, redis_utils_1.redisCachedMiddleWare)("products"), jwt_middlewares_1.AuthorizedUser, product_controller_1.GetSingleProduct);
exports.default = productRouter;
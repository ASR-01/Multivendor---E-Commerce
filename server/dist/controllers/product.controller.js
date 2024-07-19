"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSingleProduct = exports.GetAllProduct = exports.UpdateProduct = exports.DeleteProduct = exports.CreateProduct = void 0;
const client_1 = __importDefault(require("../client"));
const redis_utils_1 = require("../utils/redis.utils");
const CreateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { storeId } = req.body;
        const product = yield client_1.default.product.create({
            data: Object.assign(Object.assign({}, req.body), { storeId }),
            include: {
                photos: true,
            },
        });
        if (req.file) {
            const { originalname: filename, path: filepath } = req.file;
            const photo = yield client_1.default.photo.create({
                data: {
                    filename,
                    filepath,
                    productId: product.id,
                },
            });
        }
        res.json({ success: true, msg: "Product created successfully", product });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Bad Request", error });
    }
});
exports.CreateProduct = CreateProduct;
const DeleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield client_1.default.product.delete({
            where: { id: productId },
        });
        res.json({ success: true, msg: "Product deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Failed to delete" });
    }
});
exports.DeleteProduct = DeleteProduct;
const UpdateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedUser = yield client_1.default.product.update({
            where: { id: productId },
            data: req.body,
        });
        res.json({
            success: true,
            msg: "Product Updated successfully",
            updatedUser,
        });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Failed to Update User" });
    }
});
exports.UpdateProduct = UpdateProduct;
const GetAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield client_1.default.product.findMany({
            include: {
                categories: true,
                store: true,
                photos: true
            },
        });
        (0, redis_utils_1.setWithExpiry)("products", product, 30);
        res.json({
            success: true,
            msg: "All products Fetched Successfully",
            product,
        });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: error });
    }
});
exports.GetAllProduct = GetAllProduct;
const GetSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield client_1.default.product.findFirst({
            where: { id: productId },
            include: {
                categories: true,
                store: true,
                photos: true
            }
        });
        (0, redis_utils_1.setWithExpiry)("products", product, 30);
        res.json({
            success: true,
            msg: "All products Fetched Successfully",
            product,
        });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: error });
    }
});
exports.GetSingleProduct = GetSingleProduct;

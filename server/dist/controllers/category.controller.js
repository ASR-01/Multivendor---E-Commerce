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
exports.GetSingleCategory = exports.GetAllCategory = exports.UpdateCategory = exports.DeleteCategory = exports.CreateCategory = void 0;
const client_1 = __importDefault(require("../client"));
const redis_utils_1 = require("../utils/redis.utils");
const CreateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.body;
        const Category = yield client_1.default.category.create({
            data: Object.assign(Object.assign({}, req.body), { productId }),
        });
        if (Category) {
            return res.json({
                success: true,
                msg: "Category create Successfully",
                Category,
            });
        }
        else {
            return res.json({ success: true, msg: "Failed to create Category" });
        }
    }
    catch (error) {
        res.json({ success: false, msg: "Bad Request" });
    }
});
exports.CreateCategory = CreateCategory;
const DeleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        yield client_1.default.category.delete({
            where: { id: categoryId },
        });
        res.json({ success: true, msg: "category deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Failed to delete" });
    }
});
exports.DeleteCategory = DeleteCategory;
const UpdateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        const category = yield client_1.default.category.update({
            where: { id: categoryId },
            data: req.body,
        });
        res.json({
            success: true,
            msg: "category Updated successfully",
            category,
        });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Failed to Update category" });
    }
});
exports.UpdateCategory = UpdateCategory;
const GetAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield client_1.default.category.findMany({
            include: {
                product: true,
            },
        });
        (0, redis_utils_1.setWithExpiry)("category", category, 30);
        res.json({
            success: true,
            msg: "All category Fetched Successfully",
            category,
        });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: error });
    }
});
exports.GetAllCategory = GetAllCategory;
const GetSingleCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        const category = yield client_1.default.product.findFirst({
            where: { id: categoryId },
            select: {
                productId: true,
            },
        });
        (0, redis_utils_1.setWithExpiry)("category", category, 30);
        res.json({
            success: true,
            msg: "All category Fetched Successfully",
            category,
        });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: error });
    }
});
exports.GetSingleCategory = GetSingleCategory;

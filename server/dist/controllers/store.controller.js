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
exports.GetAllUsersStore = exports.UpdateStore = exports.DeleteStore = exports.CreateStore = void 0;
const client_1 = __importDefault(require("../client"));
const redis_utils_1 = require("../utils/redis.utils");
const CreateStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const store = yield client_1.default.store.create({
            data: Object.assign(Object.assign({}, req.body), { userId }),
        });
        if (store) {
            (0, redis_utils_1.setWithExpiry)("store", store, 30);
            return res.json({
                success: true,
                msg: "Store create Successfully",
                store,
            });
        }
        else {
            return res.json({ success: true, msg: "Failed to create store" });
        }
    }
    catch (error) {
        res.json({ success: false, msg: "Bad Request" });
    }
});
exports.CreateStore = CreateStore;
const DeleteStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { storeId } = req.params;
        // Delete the store from the database
        yield client_1.default.store.delete({
            where: { id: storeId },
        });
        res.json({ success: true, msg: "Store deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Failed to delete store" });
    }
});
exports.DeleteStore = DeleteStore;
const UpdateStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { storeId } = req.params;
        const updateData = req.body;
        const updatedStore = yield client_1.default.store.update({
            where: { id: storeId },
            data: updateData,
        });
        res.json({
            success: true,
            msg: "Store updated successfully",
            store: updatedStore,
        });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Failed to update store" });
    }
});
exports.UpdateStore = UpdateStore;
// Admin
const GetAllUsersStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stores = yield client_1.default.store.findMany({
            include: {
                user: true,
                products: true,
                address: true
            },
        });
        (0, redis_utils_1.setWithExpiry)("stores", stores, 30);
        res.json({ success: true, stores });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Failed to fetch stores" });
    }
});
exports.GetAllUsersStore = GetAllUsersStore;

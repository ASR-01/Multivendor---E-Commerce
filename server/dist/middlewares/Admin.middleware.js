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
exports.AdminRoutes = void 0;
const client_1 = __importDefault(require("../client"));
const AdminRoutes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield client_1.default.user.findFirst({
            where: {
                role: "ADMIN",
            },
        });
        if (user) {
            next();
        }
        else {
            res.status(401).json({ success: false, msg: "User is not an admin" });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, msg: "Internal server error" });
    }
});
exports.AdminRoutes = AdminRoutes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizedUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthorizedUser = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const verify = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!verify) {
            return res.json({ success: false, msg: "Unauthorized" });
        }
        next();
    }
    catch (error) {
        res.json({ success: false, msg: "Unauthorized User" });
    }
};
exports.AuthorizedUser = AuthorizedUser;

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
exports.setWithExpiry = exports.redisCachedMiddleWare = void 0;
const clientRedis_1 = __importDefault(require("../clientRedis"));
const redisCachedMiddleWare = (key) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let cachedValue = yield clientRedis_1.default.get(key);
    if (cachedValue) {
        const users = JSON.parse(cachedValue);
        return res.json({
            success: true,
            msg: " Data fetched Successfully",
            users,
        });
    }
    next();
});
exports.redisCachedMiddleWare = redisCachedMiddleWare;
const setWithExpiry = (key, value, expiryInSeconds) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield clientRedis_1.default.set(key, JSON.stringify(value));
        yield clientRedis_1.default.expire(key, expiryInSeconds);
    }
    catch (error) {
        console.error(`Error setting value in Redis for key "${key}":`, error);
        throw new Error(`Failed to set value in Redis for key "${key}"`);
    }
});
exports.setWithExpiry = setWithExpiry;

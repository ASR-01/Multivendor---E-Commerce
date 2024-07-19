"use strict";
// import { createClient } from "redis";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const client = createClient();
// client.on("error", (err) => console.log("Redis Client Error", err));
// export default client;
const ioredis_1 = __importDefault(require("ioredis"));
const client = new ioredis_1.default();
exports.default = client;

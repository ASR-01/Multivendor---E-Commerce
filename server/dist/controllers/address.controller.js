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
exports.UpdateAddress = exports.CreateAddress = void 0;
const client_1 = __importDefault(require("../client"));
const redis_utils_1 = require("../utils/redis.utils");
const CreateAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { street, city, state, postalCode, country, userAddressId, storeAddressId, } = req.body;
        const address = yield client_1.default.address.create({
            data: {
                street,
                city,
                state,
                postalCode,
                country,
                userAddressId,
                storeAddressId,
            },
        });
        // address
        if (address) {
            (0, redis_utils_1.setWithExpiry)("address", address, 30);
            return res.json({
                success: true,
                msg: "Address added Successfully",
                address,
            });
        }
        else {
            return res.json({ success: true, msg: "Failed to add Address", address });
        }
    }
    catch (error) {
        res.json({ success: false, msg: "Bad Request" });
    }
});
exports.CreateAddress = CreateAddress;
const UpdateAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { addressId } = req.params;
        const updateData = req.body;
        const updatedAddress = yield client_1.default.address.update({
            where: { id: addressId },
            data: updateData,
        });
        res.json({ success: true, msg: "Address updated successfully", address: updatedAddress });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Failed to update address" });
    }
});
exports.UpdateAddress = UpdateAddress;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_middlewares_1 = require("../middlewares/jwt.middlewares");
const address_controller_1 = require("../controllers/address.controller");
const AddressRouter = (0, express_1.Router)();
AddressRouter.post("/address", jwt_middlewares_1.AuthorizedUser, address_controller_1.CreateAddress);
AddressRouter.patch("/address/:addressId", jwt_middlewares_1.AuthorizedUser, address_controller_1.UpdateAddress);
exports.default = AddressRouter;

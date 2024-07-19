import { Router } from "express";

import { redisCachedMiddleWare } from "../utils/redis.utils";
import { AuthorizedUser } from "../middlewares/jwt.middlewares";
import {
  CreateAddress,
  UpdateAddress,
} from "../controllers/address.controller";

const AddressRouter: Router = Router();

AddressRouter.post("/address",AuthorizedUser, CreateAddress);
AddressRouter.patch("/address/:addressId", AuthorizedUser, UpdateAddress);

export default AddressRouter;

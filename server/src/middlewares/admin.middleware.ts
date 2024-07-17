import { NextFunction, Request, Response } from "express";
import { UnAuthorized } from "../utils/resErrors.utils";
import { ErrorCodes } from "../utils/rootErrors.utils";
import { IGetUserAuthInfoRequest } from "../types/express";

export const AdminMiddleWare = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user?.role == "ADMIN") {
    next();
  } else {
    next(new UnAuthorized("Unauthorized", ErrorCodes.UNAUTHORIZED));
  }
};

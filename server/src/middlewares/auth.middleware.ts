import { NextFunction, Request, Response } from "express";
import { UnAuthorized } from "../utils/resErrors.utils";
import { ErrorCodes } from "../utils/rootErrors.utils";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import prisma from "../client";
import { IGetUserAuthInfoRequest } from "../types/express";

export const AuthMiddleWare = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  // 1. Extract the token from the headers
  const token = req.headers.authorization; // Assumes 'Bearer <token>' format

  // 2. If token is not present then show unauthorized error
  if (!token) {
    return next(new UnAuthorized("Unauthorized", ErrorCodes.UNAUTHORIZED));
  }

  try {
    // 3. If token is present then verify it and extract the payload
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string };

    // 4. Get user from payload
    const user = await prisma.user.findFirst({ where: { id: payload.userId } });

    // 5. If user is not found, show unauthorized error
    if (!user) {
      return next(
        new UnAuthorized("Unauthorized", ErrorCodes.UNAUTHORIZED)
      );
    }

    // 6. Attach user to request object and proceed to next middleware
    req.user = user;
    next();
  } catch (error) {
    return next(new UnAuthorized("Unauthorized", ErrorCodes.UNAUTHORIZED));
  }
};

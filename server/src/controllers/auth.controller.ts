import { NextFunction, Request, Response } from "express";
import prisma from "../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { BadRequestError, NotFoundError, UnAuthorized } from "../utils/resErrors.utils";
import { ErrorCodes } from "../utils/rootErrors.utils";
import { userSchema } from "../utils/zodValidation.utils";
import { IGetUserAuthInfoRequest } from "../types/express";

export const RegisterController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  userSchema.parse(req.body);
  const { name, email, password } = req.body;

  let user = await prisma.user.findFirst({ where: { email } });

  if (user) {
    throw new BadRequestError(
      "User Already Exists pls Login",
      ErrorCodes.USER_ALREADY_EXISTS
    );
  }

  const hashPassword = bcrypt.hashSync(password, 10);
  user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  user.password= undefined!;
    res.json({ success: true, msg: "Register user Successfully", user });
};

export const LoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  let user = await prisma.user.findFirst({ where: { email } });

  if (!user) {
    throw new NotFoundError(
      "User does not Exits Pls Register",
      ErrorCodes.USER_NOT_FOUND
    );
  }

  const comparePassword = bcrypt.compareSync(password, user.password);

  if (!comparePassword) {
    throw new BadRequestError(
      "User Email or password is incorrect",
      ErrorCodes.INCORRECT_PASSWORD
    );
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SECRET
  );

  res.json({ success: true, msg: "Logged in Successfully", token });
};

export const UserProfile = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    req.user.password = undefined!;
    res.json(req.user);
  } else {
    return new UnAuthorized("Token is Invalid", ErrorCodes.UNAUTHORIZED)
  }
};
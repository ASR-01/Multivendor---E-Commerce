import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const AuthorizedUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    const verify = jwt.verify(token as string, process.env.JWT_SECRET as string);
    if (!verify) {
      return res.json({ success: false, msg: "Unauthorized" });
    }
    next();
  } catch (error) {
     res.json({success:false,msg:"Unauthorized User"})
  }
};

import { Request, Response, NextFunction } from "express";
import prisma from "../client";

export const AdminRoutes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        role: "ADMIN",
      },
    });



    if (user) {
      next();
    } else {
      res.status(401).json({ success: false, msg: "User is not an admin" });
    }
  } catch (error) {
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
};

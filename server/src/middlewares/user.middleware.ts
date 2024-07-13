import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validateSchema =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { success, error } = schema.safeParse(req.body);

    1;
    if (!success) {
      return res.status(401).json({
        status: false,
        message: error.errors
          .map((err) => {
            return `${err.path[0] ?? ""}: ${err.message}`;
          })
          .join(","),
      });
    }

    next();
  };



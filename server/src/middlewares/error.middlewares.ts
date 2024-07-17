import { NextFunction, Request, Response } from "express";
import { ErrorCodes, HttpErrors } from "../utils/rootErrors.utils";
import { BadRequestError, InternalException } from "../utils/resErrors.utils";
import { ZodError } from "zod";

export const globalErrorMiddleWare = (
  error: HttpErrors,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    errors: error.errors,
  });
};

export const errorHandler = (method: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (error: any) {
      let errorType: HttpErrors;
      if (error instanceof HttpErrors) {
        errorType = error;
      } else {
        if (error instanceof ZodError) {
          errorType = new BadRequestError(
            "Cannot Process Further",
            ErrorCodes.UNPROCESSABLE_ENTITY,
            error
          );
        } else {
          errorType = new InternalException(
            "Something went wrong",
            error,
            ErrorCodes.INTERNAL_EXCEPTION
          );
        }
      }

      next(errorType);
    }
  };
};

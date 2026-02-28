import { NextFunction, Request, Response } from "express";
import AppError from "../ErrorHelpers/AppError";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let message = `something went wrong ${err.message}`;

  if (err instanceof AppError) {
    ((statusCode = err.statusCode), (message = err.message));
  } else if (err instanceof Error) {
    statusCode = 500;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    err,
  });
};

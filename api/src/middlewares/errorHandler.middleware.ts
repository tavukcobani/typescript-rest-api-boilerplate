import { Request, Response, NextFunction } from "express";
import BaseErrorHandler from "../handlers/error/baseError.handler";
import { HttpStatusCode } from "../handlers/error/httpStatusCodes";
import { ValidateError } from "tsoa";

export const errorHandlerMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.debug("Error handler: ", err);

  if (err instanceof BaseErrorHandler) {
    return res.status(err.httpStatusCode).json(err.serialize);
  } else if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);

    return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }

  res.status(HttpStatusCode.INTERNAL_SERVER).json({
    message: "Internal Server Error",
  });

  next();
};

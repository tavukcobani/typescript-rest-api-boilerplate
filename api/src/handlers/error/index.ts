import BaseErrorHandler from "./baseError.handler";
import { HttpStatusCode } from "./httpStatusCodes";

export class NotFoundErrorHandler extends BaseErrorHandler {
  constructor(
    message: string,
    code = HttpStatusCode.NOT_FOUND,
    name = "Not Found Error",
  ) {
    super(message, code, name);
  }
}

export class InternalServerErrorHandler extends BaseErrorHandler {
  constructor(
    message: string,
    code = HttpStatusCode.INTERNAL_SERVER,
    name = "Internal Server Error",
  ) {
    super(message, code, name);
  }
}

export class BadRequestErrorHandler extends BaseErrorHandler {
  constructor(
    message: string,
    code = HttpStatusCode.BAD_REQUEST,
    name = "Bad Request Error",
  ) {
    super(message, code, name);
  }
}

export class UnauthorizedErrorHandler extends BaseErrorHandler {
  constructor(
    message: string,
    code = HttpStatusCode.UNAUTHORIZED_REQUEST,
    name = "Unauthorized Access Attempt Error",
  ) {
    super(message, code, name);
  }
}

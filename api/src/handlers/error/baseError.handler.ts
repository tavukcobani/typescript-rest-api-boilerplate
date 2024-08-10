import { ErrorMessageType } from "./types";

export default class BaseErrorHandler implements Error {
  public readonly name: string;
  public readonly code: number;
  public readonly message: string;

  constructor(message: string, code: number, name: string) {
    this.message = message;
    this.code = code;
    this.name = name;
  }

  get serialize(): ErrorMessageType {
    return {
      code: this.code,
      name: this.name,
      message: this.message,
    };
  }

  get httpStatusCode() {
    return this.code;
  }
}

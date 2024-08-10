import { Request } from "express";
import { DecodeOptions, verifyAzureToken } from "azure-ad-jwt-lite";
import { UnauthorizedErrorHandler } from "../handlers/error";
import config from "../../../config";

/**
 * Express Authentication middleware
 * @param request express request
 * @param securityName validation name
 * @param scopes scopes
 * @returns decoded jwt token
 */
export async function expressAuthentication(
  request: Request,
  securityName: string,
  scopes?: string[],
): Promise<any> {
  if (securityName === "jwt") {
    const authToken: string =
      request.body.token ||
      request.query.token ||
      request.headers["authorization"] ||
      request.headers["authentication"];

    if (!authToken) {
      throw new UnauthorizedErrorHandler("Unauthorized");
    }

    let token = "";
    if (authToken.includes("Bearer")) {
      {
        const splited = authToken.split("Bearer ");
        token = splited[1];
      }
    } else {
      token = authToken;
    }

    if (!token) {
      throw new UnauthorizedErrorHandler("Unauthorized");
    }

    const decodeOptions: DecodeOptions = {
      audience: config.auth.credentials.clientId,
      issuer: config.auth.credentials.issuer,
    };

    return new Promise(async (resolve, reject) => {
      const decoded = await verifyAzureToken(token, decodeOptions).catch(
        (err) => {
          console.warn("Unauthorized request rejected. ", err);
          reject(new UnauthorizedErrorHandler(err.message));
        },
      );

      resolve(decoded);
    });
  }
}

import { Request, Response, NextFunction } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { TokenType } from "../constants/TokenType";
import { GeneralUtils } from "../utils/GeneralUtils";
import { ResponseUtil } from "../utils/Response";

export class AuthMiddleware {
  // Authenticate users
  static async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization: tokenHeader } = req.headers;
      if (!tokenHeader) {
        return ResponseUtil.sendError(res, "Token not provided", StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED);
      }

      // Get the token and validate
      const token = tokenHeader.split(" ")[1];
      const payload = GeneralUtils.validateJWT(token);

      // Error for false token
      if (!payload) {
        return ResponseUtil.sendError(
          res,
          "Invalid or expired Token",
          StatusCodes.UNAUTHORIZED,
          ReasonPhrases.UNAUTHORIZED
        );
      }

      // Check for payload token Type
      if (payload["tokenType"] !== TokenType.USER_AUTH) {
        return ResponseUtil.sendError(
          res,
          "Invalid Authorization Header",
          StatusCodes.UNAUTHORIZED,
          ReasonPhrases.UNAUTHORIZED
        );
      }
      
      req["authPayload"] = payload;

    } catch (error) {
      console.log(error);
      return ResponseUtil.sendError(
        res,
        "Invalid Authorization Header",
        StatusCodes.UNAUTHORIZED,
        ReasonPhrases.UNAUTHORIZED
      );
    }

    next();
  }
}

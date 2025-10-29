import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";

export const ErrorHandler:ErrorRequestHandler = (error, req, res, next): any => {
  console.error(`Error occurred on path ${req.path}`, error);

  if(error instanceof SyntaxError){
    return res.status(HTTPSTATUS.BAD_REQUEST).json({
      message: "Invalid JSON request, Please check the request body",
    });
  }

  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
    error: error?.message || "Something went wrong",
  });
}

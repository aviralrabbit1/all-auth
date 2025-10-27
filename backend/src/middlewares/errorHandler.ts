import { ErrorRequestHandler } from "express";


export const ErrorHandler:ErrorRequestHandler = (error, req, res, next): any => {
  console.error(`Error occurred: ${error.message} on path ${req.path}`);

  return res.status(500).json({
    message: "Internal Server Error",
    error: error?.message || "Something went wrong",
  });
}
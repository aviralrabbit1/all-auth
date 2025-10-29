import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from './config/app.config';
import connectDatabase from './database/models/database';
import { ErrorHandler } from './middlewares/errorHandler';
import { HTTPSTATUS } from './config/http.config';

const app = express();
// const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: config.APP_ORIGIN , //sending cookies/credentials to client side
  credentials: true,
}));

app.use(cookieParser());

app.post("/", (req: Request, res: Response) => {
  res.status(HTTPSTATUS.OK).json({
    message: "Backend is running...",
  });
});

app.use(ErrorHandler);

app.listen(config.PORT, async () => {
  console.log("Server listening on PORT: ", config.PORT);
  await connectDatabase();
})

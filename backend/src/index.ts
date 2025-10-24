// import dotenv from 'dotenv';
// dotenv.config();

import express, { Request, Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from './config/app.config';

const app = express();
// const BASE_PATH = config.BASE_PATH;
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: config.APP_ORIGIN , //sending cookies/credentials to client side
  credentials: true,
}));

app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Backend is running...",
  });
});

app.listen(config.PORT, async () => {
  console.log("Server listening on PORT: ", config.PORT);
})

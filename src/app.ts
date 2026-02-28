import express, { NextFunction, Request, Response } from "express";
import { userRouter } from "./app/modules/user/user.route";
import cors from 'cors';
import { success } from "zod";
import { globalErrorHandler } from "./app/middlewares/globarerrorhandler";
import httpStatus from 'http-status-codes' 
import { notFound } from "./app/middlewares/notFound";
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/user',userRouter);

app.get('/',(req : Request, res : Response) => {
  res.status(200).json({
    message: "server is running"
  })
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
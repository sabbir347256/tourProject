import express, { Request, Response } from "express";
import { userRouter } from "./app/modules/user/user.route";
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/user',userRouter);

app.get('/',(req : Request, res : Response) => {
  res.status(200).json({
    message: "server is running"
  })
})

export default app;
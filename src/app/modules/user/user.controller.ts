import { NextFunction, Request, Response } from "express";
import { User } from "./user.model";
import httpStatus from "http-status-codes";
import { userServices } from "./user.service";
import AppError from "../../ErrorHelpers/AppError";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {

    // throw new AppError(httpStatus.BAD_REQUEST, 'fake Error');

    const user = await userServices.createUser(req.body);

    res.status(httpStatus.CREATED).json({
      message: "User created successfully",
      user,
    });
  } catch (err: any) {
    console.log(err);
    next(err);
  }
};
export const userController = {
  createUser,
};

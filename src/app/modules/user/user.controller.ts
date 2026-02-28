import { Request, Response } from "express";
import { User } from "./user.model";
import httpStatus from 'http-status-codes'
import { userServices } from "./user.service";

const createUser = async (req : Request, res:Response)=> {
    try {
        const user = await userServices.createUser(req.body);

        res.status(httpStatus.CREATED).json({
            message : "User created successfully",
            user
        })
    } catch (err :any) {
        console.log(err)
        res.status(400).json({
            message : `Something went wrong !! ${err.message}`
        })
        
    }
};
export const userController = {
    createUser 
}
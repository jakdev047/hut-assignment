import { Request, RequestHandler, Response } from "express";
import { createUserService } from "./auth.service";
import catchAsync from "../../shared/catchAsync";
import responseFormat from "../../shared/responseFormat";
import { IUser } from "../user/user.interface";

export const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...userData } = req.body;
    const result = await createUserService(userData);
    responseFormat<IUser>(res, {
      success: true,
      statusCode: 200,
      message: "User created successfully!",
      data: result,
    });
  }
);

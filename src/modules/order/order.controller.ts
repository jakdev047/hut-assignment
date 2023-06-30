import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { IOrder } from "./order.interface";
import responseFormat from "../../shared/responseFormat";
import { createOrderService, getAllOrderService } from "./order.service";

export const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await createOrderService(req.body);
    responseFormat<IOrder>(res, {
      statusCode: 200,
      success: true,
      message: "Order created successfully",
      data: result,
    });
  }
);

export const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await getAllOrderService();

  responseFormat<IOrder[]>(res, {
    statusCode: 200,
    success: true,
    message: "Orders retrieved successfully!",
    data: result,
  });
});

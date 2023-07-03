import { Schema, model } from "mongoose";
import { User } from "../user/user.model";
import { IOrder, OrderModel } from "./order.interface";
import { Cow } from "../cow/cow.model";

export const orderSchema = new Schema<IOrder, OrderModel>(
  {
    cow: { type: Schema.Types.ObjectId, ref: Cow },
    buyer: { type: Schema.Types.ObjectId, ref: User },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Order = model<IOrder, OrderModel>("Orders", orderSchema);

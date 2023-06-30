import { Model } from "mongoose";
export type UserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  name: UserName;
  role: "seller" | "buyer";
  password: string;
  phoneNumber: number;
  address: string;
  budget?: number;
  income?: number;
};
export type UserModel = Model<IUser, Record<string, unknown>>;

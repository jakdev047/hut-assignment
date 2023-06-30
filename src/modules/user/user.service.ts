import mongoose from "mongoose";
import APIError from "../../errorHelpers/APIError";
import { IUser } from "./user.interface";
import { User } from "./user.model";

export const getAllUserService = async (): Promise<IUser[] | null> => {
  const total = await User.find({});
  return total;
};

export const getSingleUserService = async (
  id: string
): Promise<IUser | null> => {
  const result = await User.findOne({ _id: new mongoose.Types.ObjectId(id) });
  return result;
};

export const updateUserService = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const isExist = await User.findOne({ _id: new mongoose.Types.ObjectId(id) });

  if (!isExist) {
    throw new APIError(404, "User not found !");
  }

  const { name, ...userData } = payload;
  const updatedUserData: Partial<IUser> = { ...userData };

  if (name && Object.keys(name).length > 0) {
    Object.keys(name).forEach((key) => {
      const nameKey = `name.${key}` as keyof Partial<IUser>;
      (updatedUserData as any)[nameKey] = name[key as keyof typeof name];
    });
  }

  const result = await User.findOneAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    updatedUserData,
    {
      new: true,
    }
  );
  return result;
};

export const deleteUserService = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete({
    _id: new mongoose.Types.ObjectId(id),
  });
  return result;
};

import APIError from "../../errorHelpers/APIError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

export const createUserService = async (user: IUser): Promise<IUser | null> => {
  if (user.role === "buyer") {
    if (!user.budget || user.budget <= 0)
      throw new APIError(400, "Buyer must provide a valid budget");
  } else if (user.role === "seller") {
    user.income = 0;
    user.budget = 0;
  }
  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new APIError(400, "failed to create User");
  }
  return createdUser;
};

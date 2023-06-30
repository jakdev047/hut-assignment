import { Schema, model } from "mongoose";
import { roles } from "./user.constant";
import { IUser, UserModel } from "./user.interface";

export const userSchema = new Schema<IUser, UserModel>(
  {
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    role: {
      type: String,
      enum: roles,
    },

    address: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    budget: { type: Number },
    income: { type: Number },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// duplicate checking
userSchema.pre("save", async function (next) {
  const isExist = await User.findOne({
    phoneNumber: this.phoneNumber,
  });
  if (isExist) {
    next();
  }
});

export const User = model<IUser, UserModel>("User", userSchema);

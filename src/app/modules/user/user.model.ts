import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";
const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true },
    passwrod: { type: String, required: true },
    needsPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      enum: {
        values: ["admin", "faculty", "student"],
        message: "{VALUE} is not a valid role",
      },
    },
    status: {
      type: String,
      enum: {
        values: ["in-progress", "blocked"],
        message: "{VALUE} is not a valid status",
      },
      default: "in-progress",
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  user.passwrod = await bcrypt.hash(
    user.passwrod,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

userSchema.post("save", function (doc, next) {
  doc.passwrod = "";
  next();
});

export const User = model<TUser>("User", userSchema);

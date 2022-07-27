import mongoose from "mongoose";

export const UserModel = mongoose.model("User", {
  name: String,
  username: String,
  email: String,
  password: String,
});

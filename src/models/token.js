import mongoose from "mongoose";

export const TokenModel = mongoose.model("Token", {
  createdAt: Date,
  active: Boolean,
  userId: String,
});

import moment from "moment";
import { TokenModel } from "../models/token.js";

export const createToken = async (userId) => {
  const token = new TokenModel();

  token.createdAt = new Date();
  token.active = true;
  token.userId = userId;

  await token.save();

  return token;
};

export const getValidToken = async (tokenId) => {
  const token = await TokenModel.findById(tokenId);

  if (!token) throw new Error("Token inválido");

  if (!token.active) throw new Error("Token inativo");

  const expireAt = moment(token.createdAt);
  expireAt.add(3, "d");

  if (expireAt < moment()) throw new Error("Token inativo");

  return token;
};

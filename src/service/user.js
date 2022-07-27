import { UserModel } from "../models/user.js";

export const getUserByUsernameOrEmail = async ({ username, email }) => {
  const user = await UserModel.findOne({ username, email });

  return user;
};

export const createNewUser = async ({ name, username, email, password }) => {
  const user = await getUserByUsernameOrEmail({ username, email });
  if (user) {
    throw new Error("User já existe");
  }

  const newUser = new UserModel();

  newUser.name = name;
  newUser.username = username;
  newUser.email = email;
  newUser.password = password;

  await newUser.save();

  return newUser;
};

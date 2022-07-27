import { Router } from "express";
import * as UserToken from "../service/token.js";
import * as UserService from "../service/user.js";
import UserDTO from "../views/userDTO.js";
import TokenDTO from "../views/tokenDTO.js";

const userRouter = new Router();

// CRUD
//cadastro
userRouter.post("/register", async (request, response) => {
  const { name, username, email, password } = request.body;

  const newUser = await UserService.createNewUser({
    name,
    username,
    email,
    password,
  });

  response.status(201).json(new UserDTO(newUser));
});

// get

// login
userRouter.post("/login", async (request, response) => {
  const { username, email, password } = request.body;

  const user = await UserService.getUserByUsernameOrEmail({ username, email });
  if (!user) {
    response.status(403).send("Unauthorized");
    return;
  }

  if (user.password !== password) {
    response.status(403).send("Unauthorized");
    return;
  }

  const token = await UserToken.createToken(user._id);

  response.status(201).send(new TokenDTO(token));
});

// logoff
userRouter.post("/logoff", (request, response) => {
  const cor = request.query.cor;

  response.status(202).send("cart: deletei a vassoura");
});

export default userRouter;

import express from "express";
import "dotenv/config";

import { cartRouter, productRouter, userRouter } from "./routes/index.js";
import authorizationMiddleware from "./middlewares/authorization.js";

const port = process.env.PORT;

const server = express();

server.use(express.json());

server.use("/", userRouter);

server.use(authorizationMiddleware);
server.use("/product", productRouter);
server.use("/cart", cartRouter);
server.listen(port, () => {
  console.log(`Server conectado na porta ${port}`);
});

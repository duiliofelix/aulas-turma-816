import mongoose from "mongoose";

export const ProductModel = mongoose.model("Product", {
  name: String,
  categoria: String,
  precoCliente: Number,
  precoCusto: Number,
});

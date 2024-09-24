import express from "express";
import {
  getProduct,
  deleteProduct,
  addProduct,
  updateProduct,
} from "../controller/product/product.js";

const productRouter = express.Router();

productRouter.delete("/delete", deleteProduct);
productRouter.post("/add", addProduct);
productRouter.put("/update", updateProduct);
productRouter.get("/get", getProduct);

export default productRouter;

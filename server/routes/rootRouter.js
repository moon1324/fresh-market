import express from "express";
import userRouter from "./userRouter.js";
import { index } from "../controller/index.js";
// import searchRouter from "./searchRouter.js";
import productRouter from "./productRouter.js";

const rootRouter = express.Router();

rootRouter.get("/", index);
rootRouter.use("/user", userRouter);
// rootRouter.use("/search", searchRouter);
rootRouter.use("/product", productRouter);

export default rootRouter;

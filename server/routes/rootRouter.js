import express from "express";
import userRouter from "./userRouter.js";
import { index } from "../controller/index.js";
import searchRouter from "./searchRouter.js";

const rootRouter = express.Router();

rootRouter.get("/", index);
rootRouter.use("/user", userRouter);
rootRouter.use("/search", searchRouter);

export default rootRouter;

import express from "express";
// import passport from "passport";
import {
  deleteUser,
  signupUser,
  loginUser,
  logoutUser,
  updateUser,
} from "../controller/user/user.js";

const userRouter = express.Router();

userRouter.delete("/delete", deleteUser);
userRouter.post("/signup", signupUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.put("/update", updateUser);

export default userRouter;

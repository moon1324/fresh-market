import User from "../../models/userSchema.js";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const deleteUser = async (req, res) => {};

const signupUser = async (req, res) => {};

const loginUser = async (req, res) => {
    // const user = await User.findOne({ email: req.body.email });
};

const logoutUser = async (req, res) => {};

const updateUser = async (req, res) => {};

export { deleteUser, signupUser, loginUser, logoutUser, updateUser };

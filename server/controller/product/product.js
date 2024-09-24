import dotenv from "dotenv";
import { Products } from "../../Data/Products.js";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const getProduct = async (req, res) => {
  try {
    // Send the products array as a JSON response
    res.json(Products);
  } catch (error) {
    // Handle any potential errors
    console.error("Error retrieving products:", error);
    res.status(500).json({ message: "Server error while retrieving products" });
  }
};

const deleteProduct = async (req, res) => {};

const addProduct = async (req, res) => {};

const updateProduct = async (req, res) => {};

export { getProduct, deleteProduct, addProduct, updateProduct };

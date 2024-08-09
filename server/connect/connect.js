import mongoose from "mongoose";
import dotenv from "dotenv";

// dotenv
dotenv.config();
const { MONGO_URI } = process.env;

const connect_url = MONGO_URI;

const connect = () => {
    if (process.env.NODE_ENV !== "production") {
        mongoose.set("debug", true);
    }
    console.log(connect_url);
    mongoose
        .connect(connect_url, { dbName: "FreshMarket" })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Connection failed to MongoDB");
            console.log(err);
        });
};

export default connect;

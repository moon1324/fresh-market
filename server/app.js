import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./connect/connect.js";

dotenv.config();
const { PORT } = process.env;

// MongoDB 연결
connect();

const app = express();
const port = PORT || 8000;

// bodyparser
app.use(bodyParser.json());
// app.use(express.json())

// cors
// app.use(express.urlencoded({ extended: false }));
// app.use(
//     cors({
//         origin: "*",
//         method: ["GET", "POST", "DELETE", "PUT"],
//         credential: true,
//     })
// );

app.listen(port, () => {
    console.log(`Server is on ${port} port!`);
});

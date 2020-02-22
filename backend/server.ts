import express from "express";
import apiRouter from "./api/routes/api";

const cors = require("cors");
const errorhandler = require("errorhandler");
const morgan = require("morgan");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", apiRouter);

app.use(errorhandler());

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));

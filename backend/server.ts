import express from "express";
import apiRouter from "./api/routes/api";
import "dotenv/config";
import passport from "passport";
import {Strategy as LocalStrategy} from "passport-local";
import cors from "cors";
import errorhandler from "errorhandler";
import morgan from "morgan";
import sqlite3 from "sqlite3";

const app = express();
const PORT = process.env.PORT || 5000;

passport.use(new LocalStrategy((username, password, cb) => {}));

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", apiRouter);

app.use(errorhandler());

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));

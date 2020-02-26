import express from "express";
import apiRouter from "./api/routes/api";
import "dotenv/config";
import cors from "cors";
import errorhandler from "errorhandler";
import morgan from "morgan";
import initializeLocalStrategy from "./api/config/passport-config";
import session from "express-session";
import passport from "passport";
import flash from "express-flash";

const app = express();
const PORT = process.env.PORT || 5000;

initializeLocalStrategy();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(flash());
app.use(session({secret: "lollercauster", resave: false, saveUninitialized: false}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", apiRouter);

app.use(errorhandler());

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));

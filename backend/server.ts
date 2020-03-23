import express from "express";
import apiRouter from "./api/routes/api";
import "dotenv/config";
import errorhandler from "errorhandler";
import morgan from "morgan";
import initializeLocalStrategy from "./api/config/passport-config";
import session from "express-session";
import passport from "passport";
import cors from "cors";
const SQLiteStore = require("connect-sqlite3")(session);

const app = express();
const PORT = process.env.PORT || 5000;

initializeLocalStrategy();

app.use(
	cors({
		origin: "http://localhost:1234",
		credentials: true
	})
);
app.use(express.json());
app.use(morgan("dev"));
app.use(
	session({
		store: new SQLiteStore({
			db: "sessions.db",
			dir: process.env.DB_FILE_PATH
		}),
		secret: process.env.SESSION_SECRET!,
		resave: false,
		saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", apiRouter);

app.use(errorhandler());

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));

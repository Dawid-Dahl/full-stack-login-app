import express from "express";
import {Tables} from "../types/enums";
import sqlite3 from "sqlite3";

const registerRouter = express.Router();

const db = new sqlite3.Database("./db/full-stack-login-app.db", err =>
	err ? console.error(err) : console.log("Connected to the SQLite database")
);

registerRouter.get("/", (req, res) => {
	res.send("This is the registration!");
});

registerRouter.post("/", (req, res) => {
	console.log(req.body);

	const {username, email, password, reEnterPassword} = req.body;

	const values = [username, email, password];

	const sql = `INSERT INTO ${Tables.users} (username, email, password) VALUES (?, ?, ?);`;
	db.run(sql, values, err =>
		err ? console.error(err) : console.log("Inserted entry successfully")
	);
});

export default registerRouter;

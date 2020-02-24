import {validationResult} from "express-validator";
import sqlite3 from "sqlite3";
import {Response, Request} from "express";
import {Tables} from "../types/enums";

export const registerController = (req: Request, res: Response) => {
	const db = new sqlite3.Database("./db/full-stack-login-app.db", err =>
		err ? console.error(err) : console.log("Connected to the SQLite database")
	);

	const errors = validationResult(req);

	console.log(req.body);
	console.log(errors);

	const {username, email, password, reEnterPassword} = req.body;

	const values = [username, email, password];
	const sql = `INSERT INTO ${Tables.users} (username, email, password) VALUES (?, ?, ?);`;

	db.run(sql, values, err => {
		if (err) {
			console.error(err);
			res.status(500).send(`There was an error registering the user: ${err}`);
		} else {
			console.log("Inserted entry successfully");
			res.status(201).send("Inserted entry successfully");
			db.close(err =>
				err ? console.error(err) : console.log("Closed the database connection")
			);
		}
	});
};

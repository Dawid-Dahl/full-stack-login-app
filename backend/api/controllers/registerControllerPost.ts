import {validationResult} from "express-validator";
import sqlite3 from "sqlite3";
import {Response, Request} from "express";
import {Tables} from "../types/enums";
import bcrypt from "bcrypt";
import {config} from "dotenv";
config();

const dbPath = process.env.DB_PATH || "";

const registerControllerPost = (req: Request, res: Response) => {
	const db = new sqlite3.Database(dbPath, err =>
		err ? console.error(err) : console.log("Connected to the SQLite database")
	);

	const errors = validationResult(req);

	const {username, email, password} = req.body;

	if (errors.isEmpty()) {
		bcrypt.hash(password, 10).then(hash => {
			const values = [username.toLowerCase(), email, hash];
			const sql = `INSERT INTO ${Tables.users} (username, email, password) VALUES (?, ?, ?);`;

			db.run(sql, values, err => {
				if (err) {
					console.error(err);
					res.status(500).send(`There was an error registering the user: ${err}`);
				} else {
					res.status(201).send("Registered entry successfully!");
					db.close(err =>
						err ? console.error(err) : console.log("Closed the database connection")
					);
				}
			});
		});
	} else {
		res.status(422).send(
			`Invalid input/s -- ${JSON.stringify(errors.array().map(cur => cur.msg))}`
		);
	}
};

export default registerControllerPost;

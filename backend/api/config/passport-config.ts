import {Strategy as LocalStrategy} from "passport-local";
import passport from "passport";
import sqlite3 from "sqlite3";
import {Tables} from "../types/enums";
import bcrypt from "bcrypt";
import {config} from "dotenv";
config();

const initializeLocalStrategy = () => {
	const dbPath = process.env.DB_PATH || "";

	passport.use(
		new LocalStrategy((username, password, done) => {
			console.log(`This is the username object: ${username}`);
			console.log(`This is the password obj: ${password}`);

			const db = new sqlite3.Database(dbPath, err =>
				err ? console.error(err) : console.log("Connected to the SQLite database")
			);

			const sql = `SELECT username FROM ${Tables.users} WHERE username = ?;`;

			db.get(sql, username, (err, row) => {
				console.log(`This is the SQL row: ${row.username}`);
				console.log(`This is the SQL err: ${err}`);

				db.close(err =>
					err ? console.error(err) : console.log("Closed the database connection")
				);
			});
		})
	);

	passport.serializeUser((user, done) => {});
	passport.deserializeUser((id, done) => {});
};

export default initializeLocalStrategy;

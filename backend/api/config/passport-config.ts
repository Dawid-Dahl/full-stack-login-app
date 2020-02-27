import {Strategy as LocalStrategy} from "passport-local";
import passport from "passport";
import sqlite3 from "sqlite3";
import {Tables} from "../types/enums";
import bcrypt from "bcrypt";
import {config} from "dotenv";
import {User} from "../types/types";
config();

const initializeLocalStrategy = () => {
	const dbPath = process.env.DB_PATH || "";

	passport.use(
		new LocalStrategy((username, password, done) => {
			const db = new sqlite3.Database(dbPath, err =>
				err ? console.error(err) : console.log("Connected to the SQLite database")
			);

			const sql = `SELECT * FROM ${Tables.users} WHERE username = ?;`;

			db.get(sql, username.toLowerCase(), async (err, row) => {
				db.close(err =>
					err ? console.error(err) : console.log("Closed the database connection")
				);
				if (err) return done(err);
				if (!row) return done(null, false, {message: "Incorrect user"});

				const isValidPassword = await bcrypt.compare(password, row.password);

				if (!isValidPassword) {
					console.log("Failed encryption test!");
					return done(null, false, {message: "Incorrect password."});
				}

				console.log("Passed encryption test!");
				return done(null, row);
			});
		})
	);

	passport.serializeUser((user: User, done) => {
		done(null, user.username);
	});
	passport.deserializeUser((id, done) => {
		const db = new sqlite3.Database(dbPath, err =>
			err ? console.error(err) : console.log("Connected to the SQLite database")
		);

		const sql = `SELECT username FROM ${Tables.users} WHERE username = ?;`;

		db.get(sql, id, (err, row) => {
			db.close(err =>
				err ? console.error(err) : console.log("Closed the database connection")
			);
			if (err) return done(err);
			if (!row) return done(null, false);
			return done(null, row);
		});
	});
};

export default initializeLocalStrategy;

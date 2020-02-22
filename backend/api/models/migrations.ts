import sqlite3 from "sqlite3";
import {Tables} from "../types/enums";

const dbPath =
	"/Volumes/Seagate Backup Plus Drive/Dawid Programming Files/Practice Projects/full-stack-login-app/backend/db/full-stack-login-app.db";

const db = new sqlite3.Database(dbPath, err =>
	err ? console.error(err) : console.log("Connected to the SQLite database")
);

db.serialize(() => {
	db.run(`DROP TABLE IF EXISTS ${Tables.users}`, err =>
		err ? console.error(err) : console.log(`Table ${Tables.users} dropped successfully`)
	);
	db.run(
		`CREATE TABLE IF NOT EXISTS ${Tables.users} (
    "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL);
	"date_added" INTEGER`,
		err => (err ? console.error(err) : console.log(`Table ${Tables.users} added successfully`))
	);
});

db.close(err => (err ? console.error(err) : console.log("Closed the database connection")));

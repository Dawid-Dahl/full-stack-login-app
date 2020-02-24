import sqlite3 from "sqlite3";
import {Tables} from "../types/enums";
import {config} from "dotenv";

config({
	path: "../../.env"
});

const dbPath = process.env.DB_PATH ?? "";

const db = new sqlite3.Database(dbPath, err =>
	err ? console.error(err) : console.log("Connected to the SQLite database")
);

db.serialize(() => {
	db.run(
		`INSERT INTO ${Tables.users} (username, email, password) VALUES ("marion cotillard", "marion@gmail.com", "mari123");`,
		err => err ? console.error(err) : console.log("Entry added successfully")
	);
	db.run(
		`INSERT INTO ${Tables.users} (username, email, password) VALUES ("bob thornston", "bobby@yahoo.se", "334455lol");`,
		err => err ? console.error(err) : console.log("Entry added successfully")
	);
	db.run(
		`INSERT INTO ${Tables.users} (username, email, password) VALUES ("lloyd andersson", "lloyd_andersson@hotmail.com", "password123");`,
		err => err ? console.error(err) : console.log("Entry added successfully")
	);
});

db.close(err => (err ? console.error(err) : console.log("Closed the database connection")));

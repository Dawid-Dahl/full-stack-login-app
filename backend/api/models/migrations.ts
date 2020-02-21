import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./full-stack-login-app.db", err =>
	err ? console.error(err) : console.log("Connected to the SQLite database.")
);

enum Tables {
	user = "User"
}

db.serialize(() => {
	db.run(
		`CREATE TABLE IF NOT EXISTS ${Tables.user} (
    "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL);`,
		err => (err ? console.error(err) : console.log(`Table ${Tables.user} added successfully`))
	);
});

db.close(err => (err ? console.error(err) : console.log("Closed the database connection.")));

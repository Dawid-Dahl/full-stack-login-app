import express from "express";
import sqlite3 from "sqlite3";

const registerRouter = express.Router();

registerRouter.get("/", (req, res) => {
	res.send("This is the registration!");
});

registerRouter.post("/", (req, res) => {
	console.log(req.body);
});

export default registerRouter;

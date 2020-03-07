import express from "express";
import {ensureAuthenticated} from "../utils/middleware";

const mainRouter = express.Router();

mainRouter.get("/", ensureAuthenticated, (req, res) => {
	console.log(req.user);
	res.json(req.user);
});

mainRouter.get("/admin", (req, res) => {
	res.status(200).send(`<h2>This is the Main/Admin GET route.</h2>`);
});

export default mainRouter;

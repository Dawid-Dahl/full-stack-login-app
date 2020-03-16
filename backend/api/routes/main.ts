import express from "express";
import {ensureAuthenticated} from "../utils/middleware";

const mainRouter = express.Router();

mainRouter.get("/", ensureAuthenticated, (req, res) => {
	console.log(req.user);
	res.json(req.user);
});

export default mainRouter;

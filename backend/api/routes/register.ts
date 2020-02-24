import express from "express";
import {check} from "express-validator";
import {registerController} from "../controllers/registerController";

const registerRouter = express.Router();

registerRouter.get("/", (req, res) => {
	res.send("This is the registration!");
});

registerRouter.post(
	"/",
	[
		check("email", "Must be a valid e-mail")
			.isEmail()
			.normalizeEmail(),
		check("password", "Must be longer than 4 characters").isLength({min: 5})
	],
	registerController
);

export default registerRouter;

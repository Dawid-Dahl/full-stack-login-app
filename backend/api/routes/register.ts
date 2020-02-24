import express from "express";
import {check} from "express-validator";
import registerController from "../controllers/registerController";
import {myLogger} from "../utils/middleware";

const regex = new RegExp(/^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9%?<~#!@$^&*()+=:";',åäö>{]{5,}$/i);

const registerRouter = express.Router();

registerRouter.get("/", (req, res) => {
	res.send("<h2>This is the backend registration route!</h2>");
});

registerRouter.post(
	"/",
	[
		check("email", "Email must be a valid")
			.notEmpty()
			.isEmail()
			.normalizeEmail(),
		check(
			"password",
			"Password must be longer than 4 characters, and contain letters and numbers"
		)
			.notEmpty()
			.matches(regex),
		check("confirmPassword", "Password confirmation does not match password")
			.notEmpty()
			.custom((val, {req}) => val === req.body.password),
		myLogger
	],
	registerController
);

export default registerRouter;

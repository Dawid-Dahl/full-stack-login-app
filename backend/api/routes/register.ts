import express from "express";
import {check} from "express-validator";
import registerControllerPost from "../controllers/registerControllerPost";
import {myLogger} from "../utils/middleware";

const passwordRegex = new RegExp(
	/^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9%?<_~#!@$^&*()+=:";',åäö>{]{5,}$/i
);

const registerRouter = express.Router();

registerRouter.get("/", (req, res) => {
	res.send("<h2>This is the backend registration route!</h2>");
});

registerRouter.post(
	"/",
	[
		check("username").trim(),
		check("email", "Email must be a valid")
			.notEmpty()
			.isEmail()
			.normalizeEmail(),
		check(
			"password",
			"Password must be longer than 4 characters, and contain letters and numbers"
		)
			.notEmpty()
			.matches(passwordRegex),
		check("confirmPassword", "Password confirmation does not match password")
			.notEmpty()
			.custom((val, {req}) => val === req.body.password),
		myLogger
	],
	registerControllerPost
);

export default registerRouter;

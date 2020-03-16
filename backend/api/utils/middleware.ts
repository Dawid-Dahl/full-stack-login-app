import {Request, Response, NextFunction} from "express";
import {validationResult} from "express-validator";

export const myLogger = (req: Request, res: Response, next: NextFunction) => {
	console.log(req.body);
	const errors = validationResult(req);
	if (!errors.isEmpty()) console.log(errors);
	next();
};

export const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	if (req.isAuthenticated()) {
		console.log("AUTHENTICATED!");
		console.log(req.user);
		next();
	} else {
		console.log("NOT AUTHENTICATED, redirecting!");
		res.redirect("http://localhost:1234/login");
	}
};

export const ensureAdmin = (req: Request, res: Response, next: NextFunction) => {
	if (req.isAuthenticated() && req.user?.admin === 1) {
		console.log("IS AN ADMIN!");
		next();
	} else {
		console.log("NOT AN ADMIN, redirecting!");
		res.redirect("http://localhost:1234/login");
	}
};

export const ensureNotAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	if (req.isAuthenticated()) {
		res.redirect("/");
	} else {
		next();
	}
};

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
		next();
	} else {
		res.status(401).send("Not authenticated!");
	}
};

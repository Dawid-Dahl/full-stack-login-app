import express from "express";
import passport from "passport";

const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
	res.status(200).send(`<h2>This is the Login GET route.</h2>`);
});

loginRouter.post("/", passport.authenticate("local"));

export default loginRouter;

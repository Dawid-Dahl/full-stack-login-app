import express from "express";

const registrationRouter = express.Router();

registrationRouter.get("/", (req, res) => {
	res.send("This is the registration!");
});

registrationRouter.post("/", (req, res) => {
	console.log(req.body);
});

export default registrationRouter;

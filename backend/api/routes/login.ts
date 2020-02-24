import express from "express";
import registerController from "../controllers/registerController";

const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
	res.status(200).send("<h2>This is the backend login route.</h2>");
});

loginRouter.post("/", registerController);

export default loginRouter;

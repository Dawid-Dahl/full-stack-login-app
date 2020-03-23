import express from "express";
import registerRouter from "./register";
import loginRouter from "./login";
import {ensureAuthenticated} from "../utils/middleware";

const apiRouter = express.Router();

apiRouter.get("/isAuthenticated", ensureAuthenticated, (req, res) => {
	res.json(req.user);
});

apiRouter.get("/logout", (req, res) => {
	req.logOut();
	res.json("You're now logged out!");
});

apiRouter.use("/register", registerRouter);
apiRouter.use("/login", loginRouter);

export default apiRouter;

import express from "express";
import registerRouter from "./register";
import loginRouter from "./login";
import mainRouter from "./main";

const apiRouter = express.Router();

apiRouter.get("/isAuthenticated", (req, res, next) =>
	req.isAuthenticated()
		? res.status(200).json("User is authenticated!")
		: res.status(401).json("User is not authenticated!")
);

apiRouter.get("/logout", (req, res) => {
	req.logOut();
	res.json("You're now logged out!");
});

apiRouter.use("/register", registerRouter);
apiRouter.use("/login", loginRouter);
apiRouter.use("/main", mainRouter);

export default apiRouter;

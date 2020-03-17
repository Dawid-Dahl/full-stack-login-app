import express from "express";
import registerRouter from "./register";
import loginRouter from "./login";
import mainRouter from "./main";
import adminRouter from "./admin";

const apiRouter = express.Router();

apiRouter.get("/isLoggedIn", (req, res) => {
	res.json(req.user ? true : false);
});

apiRouter.get("/logout", (req, res) => {
	req.logOut();
	res.redirect("/login");
});

apiRouter.use("/register", registerRouter);
apiRouter.use("/login", loginRouter);
apiRouter.use("/main", mainRouter);
apiRouter.use("/admin", adminRouter);

export default apiRouter;

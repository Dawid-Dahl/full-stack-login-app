import express from "express";
import registerRouter from "./register";
import loginRouter from "./login";

const apiRouter = express.Router();

apiRouter.use("/register", registerRouter);
apiRouter.use("/login", loginRouter);

apiRouter.get("/poop", (req, res) => {
	res.redirect("http://localhost:1234/register");
});

export default apiRouter;

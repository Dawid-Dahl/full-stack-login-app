import express from "express";
import registerRouter from "./register";
import loginRouter from "./login";
import mainRouter from "./main";

const apiRouter = express.Router();

apiRouter.use("/register", registerRouter);
apiRouter.use("/login", loginRouter);
apiRouter.use("/main", mainRouter);

export default apiRouter;

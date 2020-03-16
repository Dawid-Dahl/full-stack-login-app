import express from "express";
import registerRouter from "./register";
import loginRouter from "./login";
import mainRouter from "./main";
import adminRouter from "./admin";

const apiRouter = express.Router();

apiRouter.use("/register", registerRouter);
apiRouter.use("/login", loginRouter);
apiRouter.use("/main", mainRouter);
apiRouter.use("/admin", adminRouter);

export default apiRouter;

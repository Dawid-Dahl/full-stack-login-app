import express from "express";
import registerRouter from "./register";

const apiRouter = express.Router();

apiRouter.use("/register", registerRouter);

export default apiRouter;

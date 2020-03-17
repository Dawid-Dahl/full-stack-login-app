import express from "express";
import {ensureAdmin} from "../utils/middleware";

const adminRouter = express.Router();

adminRouter.get("/", ensureAdmin, (req, res) => {
	res.end();
});

export default adminRouter;

import {createProxyMiddleware} from "http-proxy-middleware";
import Bundler from "parcel-bundler";
import express from "express";

let bundler = new Bundler("src/index.html");
let app = express();

app.use(
	"/api",
	createProxyMiddleware({
		target: "http://localhost:5000"
	})
);

app.use(bundler.middleware());

app.listen(process.env.PORT || 1234);

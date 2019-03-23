import morgan from "morgan";
import helmet from "helmet";
import cookiePaser from "cookie-parser";
import bodyPaser from "body-parser";
import express from "express";

const app = express();

app.use(helmet());
app.use(cookiePaser());
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

export default app;

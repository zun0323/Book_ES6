import morgan from "morgan";
import helmet from "helmet";
import cookiePaser from "cookie-parser";
import bodyPaser from "body-parser";
import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import textRouter from "./routers/textRouter";

const app = express();

app.use(helmet());
app.use(cookiePaser());
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.text, textRouter);

export default app;

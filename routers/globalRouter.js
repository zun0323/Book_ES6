import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/textControllers";
import { join, login, logout } from "../controllers/userControllers";

const grobalRouter = express.Router();

grobalRouter.get(routes.home, home);
grobalRouter.get(routes.join, join);
grobalRouter.get(routes.login, login);
grobalRouter.get(routes.logout, logout);
grobalRouter.get(routes.search, search);

export default grobalRouter;

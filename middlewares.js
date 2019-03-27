import routes from "./routes";
import db from "./db";

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Book Review";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 5
  };
  res.locals.genre = ["genre 01", "genre 02", "genre 03"];
  res.locals.db = db;
  next();
};

export default localsMiddleware;

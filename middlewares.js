import routes from "./routes";

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Book Review";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 5
  };
  next();
};

export default localsMiddleware;

const jwt = require("../lib/jsonwebtoken");
const { SECRET } = require("../constants");

exports.authentication = async (req, res, next) => {
  const token = req.cookies["auth"];

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET);

      req.user = decodedToken;
      res.locals.isAuthenticated = true;
      res.locals.user = decodedToken;
    } catch (error) {
      return res.status(401).render("home/404");
    }
  }

  next();
};

exports.isAuth = async (req, res, next) => {
  if (!req.user) {
    return res.redirect("/login");
  }

  next();
};

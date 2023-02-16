const router = require("express").Router();
const { authentication } = require("../middlewares/authMiddleware");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/dashboard", authentication, (req, res) => {
  res.render("dashboard");
});

module.exports = router;

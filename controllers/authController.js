const router = require("express").Router();
const authService = require("../services/authService");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    throw new Error("Passwords do not match");
  }

  const user = authService.register(username, email, password, repeatPassword);

  res.redirect("/");
});

module.exports = router;

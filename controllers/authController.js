const router = require("express").Router();
const authService = require("../services/authService");

// Login
router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const token = await authService.login(username, password);
  res.cookie("auth", token);
  res.redirect("/");
});

// Register
router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  const user = await authService.register(
    username,
    email,
    password,
    repeatPassword
  );

  res.redirect("/");
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});

module.exports = router;

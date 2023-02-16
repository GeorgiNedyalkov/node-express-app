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

  const user = await authService.register(
    username,
    email,
    password,
    repeatPassword
  );

  console.log(user);

  res.redirect("/");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const token = authService.login(username, password);

  res.redirect("/");
});

module.exports = router;

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jsonwebtoken");
const { SECRET } = require("../constants");

exports.findUser = async (username, email) =>
  User.findOne({
    $or: [{ email }, { username }],
  });

exports.register = async (username, email, password, repeatPassword) => {
  if (password !== repeatPassword) {
    throw new Error("Passwords do not match");
  }

  const existingUser = await this.findUser(username, password);

  if (existingUser) {
    throw new Error("A user with these credentials already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ username, email, password: hashedPassword });

  return user;
};

exports.login = async (username, password) => {
  const user = await this.findUser(username, null);
  console.log(user);

  if (!username) {
    throw new Error("Invalid login credentials");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid login credentials");
  }

  const payload = {
    _id: user._id,
    username: user.username,
  };

  const token = await jwt.sign(payload, SECRET);

  return token;
};

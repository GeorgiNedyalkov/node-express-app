const User = require("../models/User");

exports.findUser = async (username, email) =>
  User.findOne({ $or: username, email });

exports.register = async (username, email, password, repeatPassword) => {
  if (password !== repeatPassword) {
    throw new Error("Passwords do not match");
  }

  const existingUser = await this.findUser(username, password);

  if (existingUser) {
    throw new Error("A user with these credentials already exists");
  }

  const user = await User.create({ username, email, password });

  return user;
};

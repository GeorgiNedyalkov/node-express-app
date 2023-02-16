const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = 5000;
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(routes);

const MONGO_URI = "mongodb://localhost:27017/node-express";
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI);

app.listen(PORT, () => {
  `Server is listening on port: ${PORT}`;
});

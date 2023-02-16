const express = require("express");
const app = express();
const routes = require("./routes");
const port = 5000;
const handlebars = require("express-handlebars");

app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(routes);

app.listen(port, () => {
  `Server is listening on port: ${port}`;
});

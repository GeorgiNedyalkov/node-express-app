const express = require("express");
const app = express();
const routes = require("./routes");
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("pubic"));
app.use(routes);

app.listen(port, () => {
  `Server is listening on port: ${port}`;
});

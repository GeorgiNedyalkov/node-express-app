const express = require("express");
const routes = require("./routes");
const initDatabase = require("./config/database");
const setupViewEngine = require("./config/viewEngine");
const config = require("./config");
const cookieParser = require("cookie-parser");
const { authentication } = require("./middlewares/authMiddleware");

const app = express();
setupViewEngine(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(authentication);
app.use(routes);

initDatabase()
  .then(() =>
    app.listen(config.PORT, () => {
      console.log(`Server is listening on port: ${config.PORT}`);
    })
  )
  .catch((err) => {
    console.error(err);
  });

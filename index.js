const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Hello Skeleton" });
});

app.listen(port, () => {
  `Server is listening on port: ${port}`;
});

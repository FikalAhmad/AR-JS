const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/camera", (req, res) => {
  res.render("camera");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});

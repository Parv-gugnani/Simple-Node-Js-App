const express = require("express");
const mongoose = require("mongoose");
const port = 80;
const app = express();

mongoose.connect("mongodb://localhost/projectDG", {
  useNewUrlPraser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;

app.use(express.json());

app.use(exptrss.static("public"));
app.use(exptrss.urlencoded({ extended: true }));

app.get("/", res);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`The Application Started successfully on port ${port}`);
});

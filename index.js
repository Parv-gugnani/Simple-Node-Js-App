const express = require("express");
const mongoose = require("mongoose");
const port = 80;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`The Application Started successfully on port ${port}`);
});

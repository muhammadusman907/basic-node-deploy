var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  try {
    res.status(200).send("Express on Vercel");
  } catch (error) {
    res.status(400).send("404 nahi hai bhai");
  }
});

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});

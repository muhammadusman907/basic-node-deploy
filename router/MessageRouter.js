var express = require("express");
var messageRouter = express.Router();
messageRouter.get("/", (req, res) => {
  res.send("hello");
});

module.exports = {
  messageRouter: messageRouter,
};

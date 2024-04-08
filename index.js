var express = require("express");
var message = require("./router/MessageRouter.js") 
var app = express();
var PORT = process.env.PORT || 3000;
console.log(message.messageRouter)
app.use("/message" , message.messageRouter)
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

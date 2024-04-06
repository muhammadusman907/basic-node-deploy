import express from "express" ;
import { messageRouter } from "./router/messageRouter.js";
const app = express();
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
// app.use("/message" , messageRouter )

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

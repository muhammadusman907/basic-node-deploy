import express from "express";
import cors from "cors"
const app = express();
app.use(cors)
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

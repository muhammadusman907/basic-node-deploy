import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  try {
    res.status(200).send("Express on Vercel");
  } catch (error) {
    res.status(400).send("404 nahi hai bhai");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

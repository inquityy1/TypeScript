import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hi there!");
});

app.listen(3005, () => {
  console.log("Listen on 3005");
});

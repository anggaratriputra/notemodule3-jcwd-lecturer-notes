const express = require("express");
const PORT = 8000;

const userRouter = require("./router/user");

const app = express();
app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("session 08 API");
});

// 404 middleware
app.use((req, res, next) => {
  res.status(404).send("not found bro!");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something is wrong!");
});

app.listen(PORT, () => {
  console.log(`API start on port: ${PORT}`);
});

require("dotenv").config({
  path: __dirname + "/.env",
});
const express = require("express");
const PORT = 8000;

const app = express();
app.use(express.json());

const authRouter = require("./routes/auth");
// routes
app.use("/auth", authRouter);

// static file serving
app.use("/public", express.static(__dirname + "/public"));

// middleware 404
app.use((req, res) => {
  console.error(`Not found: ${req.path}`);
  res.status(404).json({
    ok: false,
    message: "Route not found",
  });
});

// middleware fatal error
app.use((err, req, res, next) => {
  console.error(`FATAL ERROR: ${req.path}`);
  console.error(err);

  res.status(500).json({
    ok: false,
    message: "FATAL ERROR",
    error: String(err),
  });
});

app.listen(PORT, () => {
  console.log(`socia app backend run on port :${PORT}`);
});

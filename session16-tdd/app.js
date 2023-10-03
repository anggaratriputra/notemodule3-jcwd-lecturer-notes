const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`app start on port ${PORT}`);
});
module.exports = app;

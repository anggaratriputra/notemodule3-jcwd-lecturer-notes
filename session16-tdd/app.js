const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
const pokemonRoutes = require("./routes/pokemon");
app.use("/api/users", userRoutes);
app.use("/api/pokemons", pokemonRoutes);

if (process.env.NODE_ENV !== "test") {
  const PORT = 4001;
  app.listen(PORT, () => {
    console.log(`app start on port ${PORT}`);
  });
}

module.exports = app;

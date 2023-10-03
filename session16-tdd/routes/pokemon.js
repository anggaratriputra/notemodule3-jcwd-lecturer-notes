const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const { results } = data;
    res.json(results);
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    res.status(500).send("An error occured when fetching pokemons");
  }
});

module.exports = router;

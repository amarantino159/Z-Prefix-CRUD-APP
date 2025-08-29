const express = require("express");

const app = express();
const port = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get("/", (req, res) => {
  res.send("Application up and running.");
});

app.get("/locations", (req, res) => {
  knex("locations")
    .select("*")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/player_nodes", (req, res) => {
  knex("player_node")
    .select("player_node.id as player id")
    .select("player_node.name as player name")
    .select("player_node.description as player description")
    .select("player_node.clearance as player clearance")
    .select("player_node.risk_rating as player risk level")
    .select("player_node.risk_description as player risk description")
    .select("player_node.affiliation as player affiliation")
    .select("player_node.image_url as player URL")
    .select("locations.Mailing Address as Address")
    .join("locations", "player_node.location_id", "=", "locations.id")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});


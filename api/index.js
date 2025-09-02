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

app.get("/users", (req, res) => {
  knex("users")
    .select("*")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/item", (req, res) => {
  knex("item")
    .select("item.id")
    .select("item.Item_Name")
    .select("item.Description")
    .select("item.Quantity")
    .select("users.id")
    .join("users", "item.UserId", "=", "users.id")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});


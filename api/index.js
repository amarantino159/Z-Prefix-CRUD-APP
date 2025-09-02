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

app.get("/Users", (req, res) => {
  knex("Users")
    .select("*")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/Item", (req, res) => {
  knex("Item")
    .select("Item.id")
    .select("Item.Item_Name")
    .select("Item.Description")
    .select("Item.Quantity")
    .select("Users.id")
    .join("Users", "Item.UserId", "=", "Users.id")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));


});


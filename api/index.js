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
    .select("item.id as id")
    .select("item.Item_Name")
    .select("item.Description")
    .select("item.Quantity")
    .select("users.id as UserId")
    .join("users", "item.UserId", "=", "users.id")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/users/:id", (req, res) => {
  knex("users")
    .select("*")
    .where("users.id", "=", req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/item/:id", (req, res) => {
  knex("item")
    .select("item.id as id")
    .select("item.Item_Name")
    .select("item.Description")
    .select("item.Quantity")
    .select("users.id as UserId")
    .join("users", "item.UserId", "=", "users.id")
    .where("item.id", "=", req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/users/username/:username", (req, res) => {
  knex("users")
    .select("*")
    .where("users.Username", "=", req.params.username)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/item/userid/:id", (req, res) => {
  knex("item")
    .select("item.id as id")
    .select("item.Item_Name")
    .select("item.Description")
    .select("item.Quantity")
    .select("users.id as UserId")
    .join("users", "item.UserId", "=", "users.id")
    .where("item.UserId", "=", req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

app.delete("/users/:id", (req, res) => {
  knex("item")
    .where("item.UserId", "=", req.params.id)
    .del()
    .knex("users")
    .where(`users.id`, "=", req.params.id)
    .del()
    .then((data) => res.status(200).json(data))
    .then(() => console.log("done with the delete"))
    .catch((err) => res.status(400).json(err));
});

app.delete("/item/:id", (req, res) => {
  knex("item")
    .where(`item.id`, "=", req.params.id)
    .del()

    .then((data) => res.status(200).json(data))
    .then(() => console.log("done with the delete"))
    .catch((err) => res.status(400).json(err));
});

app.post("/:table", (req, res) => {
  knex(req.params.table)
    .insert(req.body)
    .then(() => console.log("done with the insert"))
    .then((data) => res.status(200).end())
    .catch((err) => res.status(400).json(err));
});

app.patch("/:table/:id", (req, res) => {
  knex(req.params.table)
    .where(`${req.params.table}.id`, "=", req.params.id)
    .update(req.body)
    .then(() => console.log("done with the patch"))
    .then((data) => res.status(200).end())
    .catch((err) => res.status(400).json(err));
});
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

// The below is all self commenting in the sense that each route does what it describes:
// That is a route that says "get /users/:id" is going to get the list of users with the listed id
// "get /item/name/:name/userid/:id" gets all items by item name and user id
// delete routes are also self explanatory though deletion is important enough that it must use the
// unique key for the items/users
// patch and post each are generalized since they only have the one format
// "patch /:table/:id" means that you have to send the body of the patch and list the table and
// id of the row to patch
// "post /:table" is even easier since you just send the body of the add and list the table in the route

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

app.get("/item/name/:name", (req, res) => {
  knex("item")
    .select("item.id as id")
    .select("item.Item_Name")
    .select("item.Description")
    .select("item.Quantity")
    .select("users.id as UserId")
    .join("users", "item.UserId", "=", "users.id")
    .where("item.Item_Name", "=", req.params.name)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/item/name/:name/userid/:id", (req, res) => {
  knex("item")
    .select("item.id as id")
    .select("item.Item_Name")
    .select("item.Description")
    .select("item.Quantity")
    .select("users.id as UserId")
    .join("users", "item.UserId", "=", "users.id")
    .where("item.Item_Name", "=", req.params.name)
    .where("item.UserId", "=", req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

app.delete("/users/:id", async (req, res) => {

  await knex("item")
    .where("item.UserId", "=", req.params.id)
    .del()

  await knex("users")
    .where("users.id", "=", req.params.id)
    .del()


    .then((data) => res.status(200).json(data))
    .then(() => console.log("done with the delete"))
    .catch((err) => res.status(400).json(err))
  ;
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
    .then((data) => res.status(200).json(req.body))
    .catch((err) => res.status(400).json(err));
});

app.patch("/:table/:id", (req, res) => {
  console.log( req.body)
  knex(req.params.table)
    .where(`${req.params.table}.id`, "=", req.params.id)
    .update(req.body)
    .then(() => console.log("done with the patch"))
    .then((data) => res.status(200).json(req.body))
    .catch((err) => res.status(400).json(err));
});
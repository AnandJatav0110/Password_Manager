// to restart the server enter in terminal node --watch server.js

const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");

dotenv.config();

// connection URL
const url = process.env.MONGO_URI || "mongodb://localhost:27017"; //
const client = new MongoClient(url);

// database
const dbName = "My-pass";
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyparser.json());
app.use(cors());

client.connect();

// Get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// Save a password
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password);
  res.send({ success: true, result: findResult });
});

// Delete a password
app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const result = await collection.deleteOne({ id: password.id });
  res.send({ success: true, result });
});

app.use(express.static(path.join("dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join("dist", "index.html"));
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");
const port = 4000;

const pathToHTML = path.join(__dirname, "index.html");
const pathToProducts = path.join(__dirname, "products.json");

//setting up public directory
app.use("/public", express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(pathToHTML);
});

app.get("/api/products", async (req, res, next) => {
  res.send(await db.readJSON(pathToProducts));
});

app.listen(port, () => console.log(`app listening on port ${port}...`));

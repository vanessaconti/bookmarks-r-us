const bookmarksController = require("./controllers/bookmarksController");
const express = require("express");
const res = require("express/lib/response");

const app = express();

app.use(express.json());

app.use("/bookmarks", bookmarksController);

app.get("/", (request, response) => {
  response.send("Welcome to Bookmarks 'R' Us");
});

app.get("*", (request, response) => {
  response.status(404).json({ error: "Page Not Found" });
});

module.exports = app;

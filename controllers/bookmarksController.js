const express = require("express");
const app = require("../app");
const bookmarksArray = require("../models/bookmark");
const bookmarks = express.Router();

bookmarks.get("/", (_, response) => {
  console.log("GET request to /bookmarks");
  response.json(bookmarksArray);
});

//bookmarks.get("/:index", (request, response) => {
//response.send(request.params.index);
//});

bookmarks.get("/:index", (request, response) => {
  const { index } = request.params;
  if (bookmarksArray[index]) {
    response.json(bookmarksArray[index]);
  } else {
    response.status(404).json({ error: "Resource not found" });
  }
});

//bookmarks.post("/", (request, response) => {
//response.send(request.body);
//});

bookmarks.post("/", (request, response) => {
  console.log("POST to /bookmarks");
  bookmarksArray.push(request.body);
  response.status(201).json(bookmarksArray);
});

bookmarks.delete("/:index", (request, response) => {
  const { index } = request.params;
  if (bookmarksArray[index]) {
    const [deletedBookmark] = bookmarksArray.splice(index, 1);
    //response.status(200).json(deletedBookmark);
    response.status(200).json(bookmarksArray);
  }
});

bookmarks.put("/:index", (request, response) => {
  bookmarksArray.splice(request.params.index, 1, request.body);
  response.status(200).json(bookmarksArray);
});

module.exports = bookmarks;

const express = require("express");

const {
  getTopics,
  getArticles,
  getArticlesById,
  getEndpoints,
  getCommentsByArticleId,
  addCommentbyArticleID,
  deleteCommentById,
} = require("./controllers/topics.controllers");
const {
  handle404,
  handlePSQLError,
  handleInternalServerError,
  handleCustomError,
} = require("./errorhandling");

const app = express();
app.use(express.json());

app.post("/api/articles/:article_id/comments", addCommentbyArticleID);
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticlesById);
app.get("/api/articles", getArticles);
app.get("/api", getEndpoints);
app.delete("/api/comments/:comment_id", deleteCommentById)



app.get("/api/articles/:article_id/comments", getCommentsByArticleId);

app.use(handlePSQLError);
app.use(handleCustomError);
app.use(handleInternalServerError);
app.all("/*", handle404);
module.exports = app;

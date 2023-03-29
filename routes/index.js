const express = require("express");
const indexRouter = express.Router();

const messages = [
  { text: "Hi how are you ?", user: "Dane", added: new Date() },
  { text: "Hello World!", user: "Sarah", added: new Date() },
];

/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

module.exports = {
  indexRouter,
  messages,
};

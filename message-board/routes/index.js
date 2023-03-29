var express = require("express");
var router = express.Router();

const messages = [
  { text: "Hi how are you ?", user: "Dane", added: new Date() },
  { text: "Hello World!", user: "Sarah", added: new Date() },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

module.exports = {
  router,
  messages,
};

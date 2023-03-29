const express = require("express");
const router = express.Router();
const { messages } = require("./index");

router.get("/", (req, res, next) => {
  res.render("form", { title: "New Message" });
});

router.post("/", (req, res, next) => {
  const author = req.body.author;
  const msg = req.body.message;
  const obj = {
    text: msg,
    user: author,
    added: new Date(),
  };
  messages.push(obj);
  res.redirect("/");
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Faq = require("../models/Faq");
router.get("/", (req, res) => {
  Faq.find()
    .then((data) => {
      if (!res) {
        console.log("error");
      }
      res.json(data);
    })
    .catch((e) => {
      res.json(e.message);
    });
});

module.exports = router;

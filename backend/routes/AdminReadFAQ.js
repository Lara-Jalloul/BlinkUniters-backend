const express = require("express");
const router = express.Router();
const Faqs = require("../models/Faq");
router.get("/", (req, res) => {
  Faqs.find()
    .then((data) => {
      if (res) {
        res.json(data);
      }
    })
    .catch((e) => {
      res.json(e.message);
    });
});

module.exports = router;

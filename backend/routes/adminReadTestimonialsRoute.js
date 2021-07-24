const express = require("express");
const router = express.Router();
const Testimonials = require("../models/Testimonials");
router.get("/", (req, res) => {
  Testimonials.find()
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

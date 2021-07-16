const express = require("express");
const router = express.Router();
const Testimonials = require("../models/Testimonials");
router.get("/", (req, res) => {
  Testimonials.find()
    .then((data) => {
      if (!res.ok) {
        console.log("error");
      }
      res.json(data);
    })
    .catch((e) => {
      res.json(e.message);
    });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Testimonials = require("../models/Testimonials");
router.get("/", (req, res) => {
  Testimonials.find().then((data) => res.json(data));
});

module.exports = router;

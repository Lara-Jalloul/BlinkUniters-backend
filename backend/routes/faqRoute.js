const express = require("express");
const router = express.Router();
const Faq = require("../models/Faq");
router.get("/faq", (req, res) => {
  Faq.find().then((data) => res.json(data));
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Faqs = require("../models/Faq");

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  Faqs.findByIdAndDelete(req.params.id, req.body, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("deleted successfuly");
    }
  }).catch((e) => {
    console.log("router ERRoRRR");
    res.json(e.message);
  });
});

module.exports = router;
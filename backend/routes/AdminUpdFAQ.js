const express = require("express");
const router = express.Router();
const Faqs = require("../models/Faq");
router.put("/:id", (req, res) => {
  const UpdatedFaq = {
    question: req.body.writer_name,
    answer: req.body.comment,
  };
  Faqs.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: UpdatedFaq },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("updated successfuly");
      }
    }
  ).catch((e) => {
    console.log("router ERRoRRR");
    res.json(e.message);
  });
});
module.exports = router;

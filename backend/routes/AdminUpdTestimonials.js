const express = require("express");
const router = express.Router();
const Testimonials = require("../models/Testimonials");
router.put("/:id", (req, res) => {
  const UpdatedTestimonial = {
    writer_name: req.body.writer_name,
    comment: req.body.comment,
  };
  Testimonials.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: UpdatedTestimonial },
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

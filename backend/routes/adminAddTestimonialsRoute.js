const express = require("express");
const router = express.Router();
const Testimonials = require("../models/Testimonials");

router.post("/", (req, res) => {
  let { writer_name, comment } = req.body;
  if (!writer_name || !comment) {
    res.status(400).json({
      success: false,
      error: "Please provide writer name and message",
    });
  }
  try {
    const testimonial = new Testimonials({
      writer_name: writer_name,
      comment: comment,
    });
    testimonial.save();
    res.status(200).json({
      succcess: true,
      message: "testimonial has been added !",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
module.exports = router;

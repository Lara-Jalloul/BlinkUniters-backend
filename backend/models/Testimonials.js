const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  writer_name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Testimonials = mongoose.model("testimonials", TestimonialSchema);
module.exports = Testimonials;

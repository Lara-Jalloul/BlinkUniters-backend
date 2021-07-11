const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  details: [
    {
      name: String,
      picture: String,
      picture_content: String,
    },
  ],
});

const About = mongoose.model("about", AboutSchema);
module.exports = About;

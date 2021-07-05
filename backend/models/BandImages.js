const mongoose = require("mongoose");

const BandImagesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
});

const BandImages = mongoose.model("band_images", BandImagesSchema);
module.exports = BandImages;

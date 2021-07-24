const mongoose = require("mongoose");

const BandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "member",
    },
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "video",
    },
  ],
});

const Bands = mongoose.model("bands", BandSchema);
module.exports = Bands;

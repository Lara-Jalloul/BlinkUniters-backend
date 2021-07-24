const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  band_video : {
    type:mongoose.Schema.Types.ObjectId,
    ref:"bands"
  }
});

const Video = mongoose.model("video", VideoSchema);
module.exports = Video;

const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  order: {
    type: Number,
    required: true,
  },
  band_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "bands",
    },
  ],
  img_path: {
    type: String,
    required: true,
  },
});

const Songs = mongoose.model("songs", SongSchema);
module.exports = Songs;

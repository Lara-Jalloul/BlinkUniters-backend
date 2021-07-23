const mongoose = require("mongoose");
// const faker = require('faker')


// mongoose.connect('')
const NewSchema = new mongoose.Schema({
  news: {
    type: String,
    required: true,
  },
  title: {
    type: String,
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

const News = mongoose.model("news", NewSchema);
module.exports = News;

const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  events: {
    type: String,
    required: true,
  },
  band_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "bands",
    },
  ],
  img: {
    path: String,
  },
});

const Events = mongoose.model("events", EventSchema);
module.exports = Events;

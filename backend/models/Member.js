const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  image_path: {
    type: String,
    required: true,
  },
  band: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bands",
  },
});

const Member = mongoose.model("member", MemberSchema);
module.exports = Member;



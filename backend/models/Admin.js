const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
});

const Admin = mongoose.model("admins", AdminSchema);
module.exports = Admin;

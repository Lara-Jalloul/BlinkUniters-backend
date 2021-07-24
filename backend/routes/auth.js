const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");

router.post("/", (req, res) => {
  let { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, error: "Please provide email and password" });
  }
  try {
    Admin.findOne({ email: email }).then((admin) => {
      if (!admin) {
        return res
          .status(401)
          .json({ success: false, error: "Invalid Credentials" });
      }
      if (admin.password != password) {
        return res
          .status(401)
          .json({ success: false, error: "Invalid Credentials" });
      }
      console.log("id", admin.id);
      let access_token = createJWT(admin.email, admin.id);
      console.log("trying to token");

      jwt.verify(access_token, process.env.TOKEN_KEY, (err, decoded) => {
        if (err) {
          res.status(500).json({ errors: err });
        }
        if (decoded) {
          return res.status(200).json({
            success: true,
            token: access_token,
            message: "info has been added",
          });
        }
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
module.exports = router;

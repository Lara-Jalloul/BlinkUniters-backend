const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");

router.post("/", (req, res) => {
  let { email, password } = req.body;
  console.log(email, password);

  Admin.findOne({ email: email }).then((admin) => {
    if (!admin) {
      return res.status(404).json({ errors: [{ admin: "not found" }] });
    }
    if (admin.password != password) {
      return res.json("pass incorrect");
    }
    console.log("id", admin.id);
    let access_token = createJWT(admin.email, admin.id);
    console.log("trying to token");

    jwt.verify(access_token, process.env.TOKEN_KEY, (err, decoded) => {
      if (err) {
        res.status(500).json({ erros: err });
      }
      if (decoded) {
        return res.status(200).json({
          success: true,
          token: access_token,
          message: admin,
        });
      }
    });
  });
});
module.exports = router;

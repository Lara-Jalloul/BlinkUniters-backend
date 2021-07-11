const express = require("express");
const router = express.Router();
const About = require("../models/About");

router.route("/").get(async (req, res) => {
  About.find().then((foundData) => res.json(foundData));
});

router.post("/add", async (req, res, next) => {
  try {
    const content = await About.find();

    let newContent = req.query.content;

    if (!newContent) {
      newContent = content[content.length - 1].content;
    }

    const aboutModel = new About({
      content: newContent,
      details: [
        {
          name: req.query.name,
          picture: req.query.picture,
          picture_content: req.query.picture_content,
        },
      ],
    });

    const data = await aboutModel.save();
    res.json({ success: true, data: data });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

module.exports = router;

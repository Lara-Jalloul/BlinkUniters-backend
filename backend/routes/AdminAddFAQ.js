const express = require("express");
const router = express.Router();
const Faqs = require("../models/Faq");

router.post("/", (req, res) => {
  let { question, answer } = req.body;
  if (!question || !answer) {
    res.status(400).json({
      success: false,
      error: "Please provide question and answer ",
    });
  }
  try {
    const Faq = new Faqs({
      question: question,
      answer: answer,
    });
    Faq.save();
    res.status(200).json({
      succcess: true,
      message: "FAQ has been added !",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
module.exports = router;

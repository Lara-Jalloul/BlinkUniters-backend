const express = require("express");
const router = express.Router();
const Bands = require("../models/Bands");
// const MemberSchema = require("../models/Member");
// const VideoSchema = require("../models/Video");
// router.get("/", (req, res) => {
//   Bands.find()
//     // .populate({path:"images", select:[ 'image_path']})
//     .then((data) => res.json(data));
// });

router.route("/").get(async (req, res) => {
  try {
    const band = await Bands.find().populate("images").populate("videos");
    // .populate({ path: "videos", select: "url" });

    res.json({ success: true, data: band });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

router.route("/addBand").post(async (req, res) => {
  try {
    const bandModel = new Bands({
      name: req.query.name,
      info: req.query.info,
    });

    // let newName = req.query.name;
    // let newInfo = req.query.info;
    // let newimage = req.query.image_path;
    // let newurl = req.query.url;
    // const image = new Member({
    //   image_path: newimage,
    // });
    // const video = new Video({
    //   url: newurl,
    // });

    // const bandModel = new Bands({
    //   name: newName,
    //   info: newInfo,
    //   images: [image],
    //   videos: [video],
    // });

    const newBand = await bandModel.save();
    res.json({ success: true, data: newBand });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// router.post("/addband", async (req, res, next) => {
//   try {
//     let bandModel = new Bands({
//       name: req.query.name,
//       info: req.query.info,
//     });
//   bandModel.images.push({images_url:'diarra.png'});
//     const newBand = await bandModel.save();
//     res.json({ success: true, message: "bands saved successfully" });
//   } catch (err) {
//     res.json({ success: false, message: err.message });
//   }
// });

// router.put("/update/:id", async (req, res, next) => {
//   try {
//     const bands = await Bands.findById({ _id: req.params.id });

// });

module.exports = router;

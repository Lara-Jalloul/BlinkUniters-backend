import VideoSchema from "../models/Video";
import BandSchema from "../models/Bands";

router.get("/"),
  async (req, res, next) => {
    try {
      const videos = await VideoSchema.find().populate("band");
      if (videos.length === 0) throw new Error("No video found ");

      res.json({
        success: true,
        message: "Videos are called",
        data: videos,
      });
    } catch (err) {
      res.json({ success: false, message: err.message });
    }
  };

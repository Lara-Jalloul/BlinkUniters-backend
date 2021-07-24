import MemberSchema from "../models/Member";
import BandSchema from "../models/Bands";

router.get("/"),
  async (req, res, next) => {
    try {
      const images = await MemberSchema.find().populate("band");
      if (images.length === 0) throw new Error("No images found ");

      res.json({
        success: true,
        message: "Images are called",
        data: images,
      });
    } catch (err) {
      res.json({ success: false, message: err.message });
    }
  };

// router.post("/add"),
//   async (req, res, next) => {
//     try {
//       if (req.files) {
//         const images = [];
//         req.files.map((member) => {
//           if (req.query.bands_id) {
//             images.push({
//               name: photo.originalname.replace(/\.(png|jpg|jpeg|gif)$/, ""),
//               url: photo.path
//                 .replace
//                 //   /home\/teddy\/Documents\/Projects\/cloned\/ITWorkX-backend\/public\//,
//                 //   ""
//                 (),
//               bands: req.query.bands_id,
//             });
//           } else {
//             images.push({
//               name: photo.originalname.replace(/\.(png|jpg|jpeg|gif)$/, ""),
//               url: photo.path
//                 .replace
//                 //   /home\/teddy\/Documents\/Projects\/cloned\/ITWorkX-backend\/public\//,
//                 //   ""
//                 (),
//             });
//           }
//         });

//         const data = await MemberSchema.insertMany(images);
//         if (data.length === 0) throw new Error("Images hasn't been saved");

//         if (req.query.bands_id !== "" && req.query.bands_id !== undefined) {
//           const bands = await BandSchema.findById({
//             _id: req.query.bands_id,
//           });
//           const push = [];

//           data.map((image) => {
//             push.push(image._id);
//           });

//           bands.images.push({ $each: push });

//           await bands.save();
//         }

//         res.json({
//           success: true,
//           message: "Images have been saved",
//           member: data,
//         });
//       } else {
//         throw new Error("No images detected");
//       }
//     } catch (err) {
//       res.json({ success: false, message: err.message });
//     }
//   };

// exports.deletePhotoById = async (req, res, next) => {
//   try {
//     const photo = await photoModel.findById({ _id: req.params.id });
//     if (!photo) throw new Error("Photo doesn't exist");

//     await fs.unlink(`public${photo.url}`);

//     if (photo.product !== undefined) {
//       const product = await productSchema.findById({ _id: photo.product });

//       if (product) {
//         product.images.pull(photo._id);

//         await product.save();
//       }
//     }
//     const deleted = await photoModel.deleteOne({ _id: photo._id });
//     if (!deleted.ok) throw new Error("Photo hasn't been deleted");

//     res.json({
//       success: true,
//       message: "Photo has been successfully deleted",
//       photo_id: deleted._id,
//     });
//   } catch (err) {
//     handleError(err, res);
//   }
// };

// const handleError = (error, res) => {
//   res.json({ success: false, message: error.message });
// };

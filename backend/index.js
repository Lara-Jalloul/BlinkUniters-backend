const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = 5000;
const app = express();
app.use(express.json());
app.use(bodyParser.json());

const BandModel = require("./models/Bands");
const FaqModel = require("./models/Faq");
mongoose.connect(
  "mongodb+srv://lrb:uniquedot@cluster0.nei6t.mongodb.net/BlinkUniters?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected ");
});
conn.on("error", console.error.bind(console, "connection error:"));
app.use("/aboutus", require("./routes/AboutRoute"));
app.use("/faq", require("./routes/faqRoute"));
app.use("/testimonials", require("./routes/testimonialsRoute"));
app.use("/login", require("./routes/auth"));
app.use("/admin/addTestimonials", require("./routes/adminTestimonialsRoute"));
app.use(cors());

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); 
// const port = 5000;
const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, '../BlinkUniters-frontend/build')));


const BandModel = require("./models/Bands");
const FaqModel = require("./models/Faq");
mongoose.connect(
  "mongodb+srv://lrb:uniquedot@cluster0.nei6t.mongodb.net/BlinkUniters?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
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
app.use("/bands", require("./routes/BandRoute"));
app.use("/faq", require("./routes/faqRoute"));
app.use("/testimonials", require("./routes/testimonialsRoute"));
app.use("/contactus", require("./routes/ContactRoute"));  
app.use("/login", require("./routes/auth"));
app.use("/contactus", require("./routes/ContactRoute"));





app.use(
  "/admin/addTestimonials",
  require("./routes/adminAddTestimonialsRoute")
);
app.use(
  "/admin/deleteTestimonials/",
  require("./routes/AdminDelTestimonialsRoute")
);
app.use(
  "/admin/readTestimonials",
  require("./routes/adminReadTestimonialsRoute")
);
app.use("/admin/updateTestimonials/", require("./routes/AdminUpdTestimonials"));
app.use("/admin/addFAQ", require("./routes/AdminAddFAQ"));
app.use("/admin/readFAQ", require("./routes/AdminReadFAQ"));
app.use("/admin/deleteFAQ/", require("./routes/AdminDelFAQ"));
app.use("/admin/updateFAQ", require("./routes/AdminUpdFAQ"));

// app.use(cors());


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../BlinkUniters-frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});





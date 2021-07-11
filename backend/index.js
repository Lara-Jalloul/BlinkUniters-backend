const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;
const app = express();
app.use(express.json());

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

app.use("/faq", require("./routes/faqRoute"));
app.use("/testimonials", require("./routes/testimonialsRoute"));
app.use(cors);
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

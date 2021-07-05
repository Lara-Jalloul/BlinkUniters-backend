const express = require("express");
const mongoose = require("mongoose");
const port = 5000;
const app = express();

const BandModel = require("./models/Bands");
const FaqModel = require("./models/Faq");
app.use(express.json());


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

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
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));
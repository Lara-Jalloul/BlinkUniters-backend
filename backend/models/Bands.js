const mongoose = require('mongoose');

const BandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    }
});

const Bands = mongoose.model("bands", BandSchema);
module.exports = Bands;
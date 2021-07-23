const mongoose = require("mongoose");



const ContactSchema = new mongoose.Schema({

location : {
    type:String,
    required: true,
},
phoneNumber:{
    type: Number,
    required: true,
},
email:{
    type:String,
    required:true,
},

})
const Contact = mongoose.model("contactus", ContactSchema);
module.exports = Contact;
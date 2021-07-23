const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");



// app.use(express.static('public'));
// app.use(express.json());

// app.get('/',(req,res)=>{
//   res.sendFile(__dirname + '/backend/models/Contact.js')
// })

// app.post('/',(req,res)=>{
//   console.log(req.body)
// })


router.route("/").get(async (req, res) => {
    Contact.find().then((foundData) => res.json(foundData));
  });


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ranyasmael@gmail.com',
      pass: "rinder@7",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }


    router.post("/contact", (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message; 
        const mail = {
          from: name,
          to: "grouptenlrb@gmail.com",
          subject: "Contact Form Submission",
          html: `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>Message: ${message}</p>`,
        };
        contactEmail.sendMail(mail, (error) => {
            
          if (error) {
            res.json({ status: "ERROR" });
          } else {
            res.json({ status: "Message Sent" });
          }
        });
      });


  });
  module.exports = router ;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    user: "beautifulsicknes@gmail.com",
    pass: "hwyh xzik klxy fwla",
  },
});

module.exports = transporter;

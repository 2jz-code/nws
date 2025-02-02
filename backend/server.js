require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app password
  },
});

app.post("/send", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));


app.post("/quote", async (req, res) => {
    const { projectType, extraDetails, priority, timeline, contactName, email } = req.body;
  
    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: "New Quote Request",
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${contactName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Project Priority:</strong> ${priority}</p>
          <p><strong>Timeline:</strong> ${timeline ? timeline : "Not specified"}</p>
          <p><strong>Additional Details:</strong></p>
          <p>${extraDetails}</p>
        `,
      });
  
      res.json({ success: true, message: "Quote request sent successfully!" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
  
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb+srv://aryan:aryan123@cluster0.wd7hn0r.mongodb.net/")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Define Contact Form Schema
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contact", ContactSchema);

// ✅ API Route to save contact form data
app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required!" 
      });
    }

    // Save to database
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });
    
    await contact.save();
    
    res.status(200).json({ 
      success: true, 
      message: "Message sent successfully! I'll get back to you soon." 
    });
    
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to send message. Please try again." 
    });
  }
});

// ✅ Health check route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio Backend API is running!" });
});

app.listen(3001, () => console.log("Server running on port 3001"));

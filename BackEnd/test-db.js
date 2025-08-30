// Test database connection and insert a sample record
import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb+srv://aryan:aryan123@cluster0.wd7hn0r.mongodb.net/")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// Define Contact Schema
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  submittedAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", ContactSchema);

// Test inserting a sample record
async function testDatabase() {
  try {
    const testContact = new Contact({
      name: "Test User",
      email: "test@example.com",
      subject: "Test Subject",
      message: "This is a test message to verify database connection."
    });
    
    await testContact.save();
    console.log("✅ Test record saved successfully!");
    
    // Fetch all contacts to verify
    const contacts = await Contact.find();
    console.log(`✅ Total contacts in database: ${contacts.length}`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Database test failed:", error);
    process.exit(1);
  }
}

// Run test after connection
setTimeout(testDatabase, 2000);



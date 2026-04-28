const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

// =====================
// MIDDLEWARE
// =====================
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));


// =====================
// MONGODB CONNECTION
// =====================
mongoose.connect("mongodb://127.0.0.1:27017/teamDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// =====================
// MODEL (UPDATED)
// =====================
const memberSchema = new mongoose.Schema({
  name: String,
  roll: String,
  year: String,
  degree: String,
  project: String,
  hobbies: String,
  certificate: String,
  internship: String,
  aim: String,
  image: String
});

const Member = mongoose.model("Member", memberSchema);


// =====================
// MULTER (IMAGE UPLOAD)
// =====================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });


// =====================
// ROUTES
// =====================

// ➤ ADD MEMBER
app.post("/members", upload.single("image"), async (req, res) => {
  try {
    const member = new Member({
      name: req.body.name,
      roll: req.body.roll,
      year: req.body.year,
      degree: req.body.degree,
      project: req.body.project,
      hobbies: req.body.hobbies,
      certificate: req.body.certificate,
      internship: req.body.internship,
      aim: req.body.aim,
      image: req.file ? req.file.filename : ""
    });

    const savedMember = await member.save();
    res.status(201).json(savedMember);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ➤ GET ALL MEMBERS
app.get("/members", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ➤ GET SINGLE MEMBER
app.get("/members/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.json(member);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// =====================
// SERVER START
// =====================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
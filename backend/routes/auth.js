const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

// SIGNUP ROUTE
router.post("/signup", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // generate unique userID
    const userID = uuidv4();

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userID,
      fullName,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.json({
      message: "Signup successful",
      userID: userID
    });
  } catch (error) {
    res.status(500).json({ error: "Signup failed", details: error });
  }
});

module.exports = router;

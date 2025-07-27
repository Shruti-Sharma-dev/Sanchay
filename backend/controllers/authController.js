import User from "../models/User.js";

import jwt from "jsonwebtoken";

// Signup
export const completeProfile = async (req, res) => {
  const { name, phone, role, pincode, address, businessName, businessLicense } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ phone });

    if (user) {
      // Update existing profile
      user.name = name;
      user.role = role;
      user.pincode = pincode;
      user.address = address;
      user.businessName = businessName;
      user.businessLicense = businessLicense;
      await user.save();
    } else {
      // Create new user
      user = new User({
        name,
        phone,
        role,
        pincode,
        address,
        businessName,
        businessLicense,
        isVerified: true,
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      msg: "Profile completed",
      token,
      user: {
        name: user.name,
        phone: user.phone,
        role: user.role,
        id: user._id,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};




export const getMe = async (req, res) => {
  try {
    const user = req.user; // populated by authMiddleware
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};







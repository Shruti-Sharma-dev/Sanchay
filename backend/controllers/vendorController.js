// controllers/vendorController.js
import Vendor from "../models/Vendor.js";

// Create Vendor Profile
export const createVendorProfile = async (req, res) => {
  try {
    const existingProfile = await Vendor.findOne({ user: req.user._id });
    if (existingProfile) {
      return res.status(400).json({ message: "Profile already exists" });
    }

    const vendor = new Vendor({
      ...req.body,
      user: req.user._id,
    });

    await vendor.save();
    res.status(201).json(vendor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Vendors
export const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().populate("user", "name email");
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Logged-in Vendor's Profile
export const getMyVendorProfile = async (req, res) => {
  try {
    const profile = await Vendor.findOne({ user: req.user._id }).populate("user", "name email");
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

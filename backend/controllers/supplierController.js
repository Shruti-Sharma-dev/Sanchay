// controllers/supplierController.js
import Supplier from "../models/SupplierProfile.js";

// Create Supplier Profile
export const createSupplierProfile = async (req, res) => {
  try {
    const existingProfile = await Supplier.findOne({ user: req.user._id });
   if (existingProfile) {
      const updated = await Supplier.findByIdAndUpdate(
        existingProfile._id,
        req.body,
        { new: true }
      );
      return res.status(200).json({ message: "Profile updated", profile: updated });
    }

    const supplier = new Supplier({
      ...req.body,
      user: req.user._id,
    });

    await supplier.save();
    res.status(201).json(supplier);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Suppliers
export const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find().populate("user", "name email");
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Logged-in Supplier's Profile
export const getMySupplierProfile = async (req, res) => {
  try {
    const profile = await Supplier.findOne({ user: req.user._id }).populate("user", "name email");
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const rateSupplier = async (req, res) => {
  const { rating, comment } = req.body;
  const { supplierId } = req.params;

  try {
    const supplier = await Supplier.findById(supplierId);
    if (!supplier) return res.status(404).json({ message: "Supplier not found" });

    // Check if this user already gave feedback
    const alreadyGiven = supplier.ratings.find(r => r.givenBy.toString() === req.user._id.toString());
    if (alreadyGiven) return res.status(400).json({ message: "You have already rated this supplier." });

    supplier.ratings.push({
      rating,
      comment,
      givenBy: req.user._id,
    });

    await supplier.save();

    res.status(200).json({ message: "Rating submitted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

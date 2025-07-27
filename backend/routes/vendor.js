import express from "express";
import authMiddleware, { verifyVendor } from "../middleware/authMiddleware.js";
import {
  createVendorProfile,
  getAllVendors,
  getMyVendorProfile,
} from "../controllers/vendorController.js";

const router = express.Router();

// Only vendors can create profile
router.post("/register", authMiddleware, verifyVendor, createVendorProfile);

// Public route
router.get("/", getAllVendors);

// Only vendor can view their profile
router.get("/me", authMiddleware, verifyVendor, getMyVendorProfile);

export default router;

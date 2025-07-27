import express from "express";
import authMiddleware, { verifySupplier } from "../middleware/authMiddleware.js";
import {
  createSupplierProfile,
  getAllSuppliers,
  getMySupplierProfile,
  rateSupplier
} from "../controllers/supplierController.js";

const router = express.Router();

// Only suppliers can create profile
router.post("/register", authMiddleware, verifySupplier, createSupplierProfile);

// Public route
router.get("/", getAllSuppliers);

// Only supplier can view their profile
router.get("/me", authMiddleware, verifySupplier, getMySupplierProfile);


// ⭐ NEW ROUTE for Rating Supplier
router.post("/:supplierId/rate", authMiddleware, rateSupplier);

export default router;

// routes/product.js
import express from "express";
import {
  createProduct,
  getAllProducts,
  getSupplierProducts,
  updateProduct,
    getNearbyProducts
} from "../controllers/productController.js";
import authMiddleware, { verifySupplier, verifyVendor } from "../middleware/authMiddleware.js";


const router = express.Router();

// 🛍️ Supplier Routes (protected)
router.post("/", authMiddleware, verifySupplier, createProduct);         // create product
router.get("/mine", authMiddleware, verifySupplier, getSupplierProducts); // supplier's own products
router.put("/:id", authMiddleware, verifySupplier, updateProduct);       // update product
router.get("/nearby", getNearbyProducts);
// 👨‍🍳 Vendor Route (public)
router.get("/", getAllProducts); // view all products

export default router;

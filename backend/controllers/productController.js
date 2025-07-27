// controllers/productController.js
import Product from '../models/Product.js';
import SupplierProfile from "../models/SupplierProfile.js";

// Supplier: Create product
export const createProduct = async (req, res) => {
  try {
    const supplierId = req.user.id;
    const newProduct = new Product({ ...req.body, supplier: supplierId });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ msg: "Error creating product", error: err.message });
  }
};

// Supplier: Get their own products
export const getSupplierProducts = async (req, res) => {
  try {
    const supplierId = req.user.id;
    const products = await Product.find({ supplier: supplierId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching products", error: err.message });
  }
};

// Vendor: Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("supplier", "name");
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching all products", error: err.message });
  }
};

// Supplier: Update a product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, supplier: req.user.id },
      req.body,
      { new: true }
    );
    if (!product) return res.status(404).json({ msg: "Product not found or not yours" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: "Error updating product", error: err.message });
  }
};


export const getNearbyProducts = async (req, res) => {
  try {
    const { q, lat, lng, radius = 10 } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ msg: "Latitude and longitude are required" });
    }

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    const searchQuery = q?.toLowerCase() || "";

    // Step 1: Fetch all suppliers (you can optimize later with geo queries)
    const suppliers = await SupplierProfile.find().populate("user");

    const nearbySupplierIds = suppliers
      .filter(s => {
        if (!s.deliveryRadius || !s.location || !s.location.coordinates) return false;

        const [supplierLng, supplierLat] = s.location.coordinates;

        // Rough distance approximation (better: use Haversine)
        const dist = Math.sqrt(
          Math.pow(supplierLat - latitude, 2) +
          Math.pow(supplierLng - longitude, 2)
        );

        // Assume 1 unit = ~111km for small-scale test (approximation)
        const distanceInKm = dist * 111;

        return distanceInKm <= s.deliveryRadius;
      })
      .map(s => s.user); // get user IDs of suppliers

    // Step 2: Get products from those nearby suppliers
    const products = await Product.find({
      supplier: { $in: nearbySupplierIds },
      name: { $regex: searchQuery, $options: "i" }
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

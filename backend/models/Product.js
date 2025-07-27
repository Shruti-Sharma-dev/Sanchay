// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  description: String,
  imageUrl: String,
  pricePerUnit: Number,
  unit: String, // e.g., "kg", "litre"
  stock: Number,
}, { timestamps: true });

export default mongoose.model('Product', productSchema);

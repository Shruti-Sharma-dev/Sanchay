// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true }
    }
  ],
  notes: String,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'delivered', 'failed'],
    default: 'pending'
  },
  totalAmount: Number
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);

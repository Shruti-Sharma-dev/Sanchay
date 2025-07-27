// models/SupplierProfile.js
import mongoose from 'mongoose';

const supplierProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shopName: String,
  address: String,
  contactNumber: String,
  kycVerified: { type: Boolean, default: false },
  deliveryRadius: Number,
  successfulOrders: { type: Number, default: 0 },
  ratings: [
    {
      vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: Number,
      review: String
    }
  ],
   averageRating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
 
  location: {
  type: {
    type: String,
    enum: ['Point'],
    default: 'Point'
  },
  coordinates: {
    type: [Number], // [longitude, latitude]
    required: true
}
}

}, { timestamps: true });
supplierProfileSchema.index({ location: '2dsphere' });

export default mongoose.model('SupplierProfile', supplierProfileSchema);

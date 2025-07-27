import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },  // OTP-based login
  pincode: { type: String, required: true },
  role: { type: String, enum: ['vendor', 'supplier'], required: true },  // radio button choice

  address: { type: String },
  businessName: { type: String },
  businessLicence: { type: String },

  isVerified: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('User', userSchema);

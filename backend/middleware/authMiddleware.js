// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token", error: err.message });
  }
};

const verifySupplier = (req, res, next) => {
  if (req.user.role !== 'supplier') {
    return res.status(403).json({ message: 'Access denied. Suppliers only.' });
  }
  next();
};

// ✅ Middleware to allow only vendors
const verifyVendor = (req, res, next) => {
  if (req.user.role !== 'vendor') {
    return res.status(403).json({ message: 'Access denied. Vendors only.' });
  }
  next();
};

export default authMiddleware;
export { verifySupplier, verifyVendor };
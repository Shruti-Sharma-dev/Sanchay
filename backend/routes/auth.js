import express from 'express';

import authMiddleware from '../middleware/authMiddleware.js';
import {getMe,completeProfile } from '../controllers/authController.js';

const router = express.Router();

router.post('/complete-profile', completeProfile);
router.get("/me", authMiddleware, getMe);

export default router;

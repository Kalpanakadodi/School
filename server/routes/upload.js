import express from 'express';
import { requireAdmin } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

// Admin: Upload single image
router.post('/', requireAdmin, upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file uploaded' });
    }

    const fileUrl = `/uploads/${req.file.filename}`;
    res.json({
      success: true,
      message: 'Image uploaded successfully',
      url: fileUrl,
      filename: req.file.filename
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Image upload failed' });
  }
});

export default router;
